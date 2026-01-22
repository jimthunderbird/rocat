<template>
  <div id="sudokuboard" style="border: 8px solid #800000; box-shadow: inset 0 0 10px rgba(0,0,0,0.5), inset 3px 3px 6px rgba(0,0,0,0.4), inset -3px -3px 6px rgba(255,255,255,0.3), 0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2);">
    <div v-for="rowIndex in 3" :key="rowIndex" style="display: flex;">
      <div v-for="colIndex in 3" :key="colIndex"
           :style="{
             display: 'grid',
             gridTemplateColumns: 'repeat(3, 50px)',
             gridTemplateRows: 'repeat(3, 50px)',
             background: ((rowIndex - 1) * 3 + (colIndex - 1)) % 2 === 1 ? 'lightyellow' : 'orange'
           }">
        <div v-for="(cell, cellIndex) in boxes[(rowIndex - 1) * 3 + (colIndex - 1)]" :key="cellIndex"
             :contenteditable="!cell.filled && !cell.isHint && !cell.animatingHint"
             @click="handleCellClick((rowIndex - 1) * 3 + (colIndex - 1), cellIndex)"
             @keydown.enter.prevent="handleEnter($event, (rowIndex - 1) * 3 + (colIndex - 1), cellIndex)"
             :class="['cell', { 'filled': cell.filled, 'hint': cell.isHint, 'selected': cell.selected, 'animating-hint': cell.animatingHint }]"
             :style="getCellStyle(cell)"
             @input="handleInput($event, (rowIndex - 1) * 3 + (colIndex - 1), cellIndex)">
          {{ cell.value || '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SudokuBoard',
  data() {
    return {
      boxes: [],
      solution: null,
      currentDifficulty: 'superhard'
    }
  },
  mounted() {
    this.createSudokuBoard()
  },
  methods: {
    getDifficultyRange(difficulty) {
      const ranges = {
        easy: [36, 45],
        medium: [46, 54],
        hard: [55, 64],
        superhard: [65, 74],
        crazyhard: [75, 81]
      }
      return ranges[difficulty] || ranges.superhard
    },
    setDifficulty(difficulty) {
      this.currentDifficulty = difficulty
    },
    createSudokuBoard() {
      const board = this.generateSudoku()
      this.solution = JSON.parse(JSON.stringify(board))
      
      const [min, max] = this.getDifficultyRange(this.currentDifficulty)
      const cellsToRemove = Math.floor(Math.random() * (max - min + 1)) + min
      
      const cells = []
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          cells.push([i, j])
        }
      }
      
      for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]]
      }
      
      for (let i = 0; i < cellsToRemove; i++) {
        const [row, col] = cells[i]
        board[row][col] = 0
      }
      
      this.boxes = this.convertToBoxes(board)
    },
    generateSudoku() {
      const board = Array(9).fill(null).map(() => Array(9).fill(0))
      
      for (let box = 0; box < 3; box++) {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let i = nums.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nums[i], nums[j]] = [nums[j], nums[i]]
        }
        
        let idx = 0
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            board[box * 3 + i][box * 3 + j] = nums[idx++]
          }
        }
      }
      
      this.solveSudokuDLX(board)
      return board
    },
    solveSudokuDLX(board) {
      const dlx = this.createDLXMatrix(board)
      const solution = this.solveDLX(dlx)
      
      if (solution) {
        solution.forEach(rowIndex => {
          const [r, c, num] = this.decodeConstraint(rowIndex)
          board[r][c] = num
        })
        return true
      }
      return false
    },
    createDLXMatrix(board) {
      const constraints = []
      
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (board[r][c] !== 0) {
            const num = board[r][c]
            constraints.push(this.encodeConstraint(r, c, num))
          } else {
            for (let num = 1; num <= 9; num++) {
              constraints.push(this.encodeConstraint(r, c, num))
            }
          }
        }
      }
      
      const matrix = {
        header: { L: null, R: null, U: null, D: null, C: null, S: 0 },
        columns: [],
        rows: constraints.map((constraint, idx) => ({ constraint, nodes: [], index: idx }))
      }
      
      for (let i = 0; i < 324; i++) {
        const col = { L: null, R: null, U: null, D: null, C: null, S: 0, id: i }
        col.C = col
        col.U = col
        col.D = col
        matrix.columns.push(col)
      }
      
      matrix.header.R = matrix.columns[0]
      matrix.header.L = matrix.columns[323]
      matrix.columns[0].L = matrix.header
      matrix.columns[323].R = matrix.header
      
      for (let i = 0; i < 323; i++) {
        matrix.columns[i].R = matrix.columns[i + 1]
        matrix.columns[i + 1].L = matrix.columns[i]
      }
      
      matrix.rows.forEach((row, rowIdx) => {
        const cols = row.constraint
        cols.forEach(colIdx => {
          const node = { L: null, R: null, U: null, D: null, C: matrix.columns[colIdx], rowIndex: rowIdx }
          
          const col = matrix.columns[colIdx]
          node.U = col.U
          node.D = col
          col.U.D = node
          col.U = node
          col.S++
          
          row.nodes.push(node)
        })
        
        if (row.nodes.length > 0) {
          for (let i = 0; i < row.nodes.length; i++) {
            row.nodes[i].L = row.nodes[(i - 1 + row.nodes.length) % row.nodes.length]
            row.nodes[i].R = row.nodes[(i + 1) % row.nodes.length]
          }
        }
      })
      
      return matrix
    },
    encodeConstraint(r, c, num) {
      const box = Math.floor(r / 3) * 3 + Math.floor(c / 3)
      return [
        r * 9 + c,
        81 + r * 9 + (num - 1),
        162 + c * 9 + (num - 1),
        243 + box * 9 + (num - 1)
      ]
    },
    decodeConstraint(rowIndex) {
      const r = Math.floor(rowIndex / 81)
      const c = Math.floor((rowIndex % 81) / 9)
      const num = (rowIndex % 9) + 1
      return [r, c, num]
    },
    solveDLX(matrix) {
      const solution = []
      
      const search = () => {
        if (matrix.header.R === matrix.header) {
          return true
        }
        
        let col = matrix.header.R
        let minSize = col.S
        for (let c = col.R; c !== matrix.header; c = c.R) {
          if (c.S < minSize) {
            col = c
            minSize = c.S
          }
        }
        
        if (col.S === 0) return false
        
        this.coverColumn(col)
        
        for (let row = col.D; row !== col; row = row.D) {
          solution.push(row.rowIndex)
          
          for (let j = row.R; j !== row; j = j.R) {
            this.coverColumn(j.C)
          }
          
          if (search()) return true
          
          solution.pop()
          for (let j = row.L; j !== row; j = j.L) {
            this.uncoverColumn(j.C)
          }
        }
        
        this.uncoverColumn(col)
        return false
      }
      
      const rows = []
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          for (let num = 1; num <= 9; num++) {
            rows.push([r, c, num])
          }
        }
      }
      
      for (let i = rows.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rows[i], rows[j]] = [rows[j], rows[i]]
      }
      
      return search() ? solution : null
    },
    coverColumn(col) {
      col.R.L = col.L
      col.L.R = col.R
      
      for (let row = col.D; row !== col; row = row.D) {
        for (let j = row.R; j !== row; j = j.R) {
          j.D.U = j.U
          j.U.D = j.D
          j.C.S--
        }
      }
    },
    uncoverColumn(col) {
      for (let row = col.U; row !== col; row = row.U) {
        for (let j = row.L; j !== row; j = j.L) {
          j.C.S++
          j.D.U = j
          j.U.D = j
        }
      }
      
      col.R.L = col
      col.L.R = col
    },
    solveSudokuBoard(board) {
      const empty = this.findEmpty(board)
      if (!empty) return true
      
      const [row, col] = empty
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      
      for (let num of nums) {
        if (this.isValid(board, num, row, col)) {
          board[row][col] = num
          
          if (this.solveSudokuBoard(board)) return true
          
          board[row][col] = 0
        }
      }
      
      return false
    },
    findEmpty(board) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (board[i][j] === 0) return [i, j]
        }
      }
      return null
    },
    isValid(board, num, row, col) {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === num && i !== col) return false
      }
      
      for (let i = 0; i < 9; i++) {
        if (board[i][col] === num && i !== row) return false
      }
      
      const boxRow = Math.floor(row / 3) * 3
      const boxCol = Math.floor(col / 3) * 3
      for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
          if (board[i][j] === num && (i !== row || j !== col)) return false
        }
      }
      
      return true
    },
    convertToBoxes(board) {
      const boxes = []
      for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
          const box = []
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              const row = boxRow * 3 + i
              const col = boxCol * 3 + j
              const value = board[row][col]
              box.push({
                value: value || '',
                filled: value !== 0,
                selected: false,
                isHint: false,
                animatingHint: false,
                row: row,
                col: col
              })
            }
          }
          boxes.push(box)
        }
      }
      return boxes
    },
    handleCellClick(boxIndex, cellIndex) {
      this.boxes.forEach(box => {
        box.forEach(cell => {
          if (!cell.filled && !cell.isHint && !cell.animatingHint) {
            cell.selected = false
          }
        })
      })
      
      const cell = this.boxes[boxIndex][cellIndex]
      if (!cell.filled && !cell.isHint && !cell.animatingHint) {
        cell.selected = true
        this.$nextTick(() => {
          const element = document.querySelectorAll('.cell')[boxIndex * 9 + cellIndex]
          if (element) element.focus()
        })
      }
    },
    handleInput(event, boxIndex, cellIndex) {
      const cell = this.boxes[boxIndex][cellIndex]
      const value = event.target.textContent.replace(/[^1-9]/g, '')
      
      if (value.length > 1) {
        event.target.textContent = value.charAt(value.length - 1)
      } else {
        event.target.textContent = value
      }
      
      if (value) {
        cell.value = parseInt(value)
      } else {
        cell.value = ''
      }
    },
    handleEnter(event, boxIndex, cellIndex) {
      const cell = this.boxes[boxIndex][cellIndex]
      const value = parseInt(event.target.textContent)
      
      if (value >= 1 && value <= 9) {
        cell.value = value
        cell.filled = true
        cell.selected = false
        event.target.blur()
      }
    },
    getCellStyle(cell) {
      const baseStyle = {
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        border: '1px black solid',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: cell.filled ? 'default' : 'pointer',
        lineHeight: '50px',
        textAlign: 'center',
        userSelect: 'none'
      }
      
      if (cell.animatingHint) {
        return {
          ...baseStyle,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          color: 'white'
        }
      } else if (cell.filled) {
        return {
          ...baseStyle,
          background: 'linear-gradient(145deg, #009999, #007070) !important',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.3)',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          color: 'white'
        }
      } else if (cell.isHint) {
        return {
          ...baseStyle,
          background: 'linear-gradient(145deg, #009999, #007070) !important',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.3)',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          color: 'white'
        }
      } else if (cell.selected) {
        return {
          ...baseStyle,
          background: 'gold'
        }
      } else {
        return {
          ...baseStyle,
          background: 'transparent'
        }
      }
    },
    solvePuzzle() {
      if (this.solution) {
        const solutionBoxes = this.convertToBoxes(this.solution)
        this.boxes.forEach((box, boxIndex) => {
          box.forEach((cell, cellIndex) => {
            cell.value = solutionBoxes[boxIndex][cellIndex].value
            cell.filled = true
            cell.isHint = false
            cell.selected = false
          })
        })
        return
      }
      
      const board = this.convertBoxesToBoard()
      const solvedBoard = JSON.parse(JSON.stringify(board))
      
      if (!this.solveSudokuBoard(solvedBoard)) {
        const newBoard = this.generateSudoku()
        this.solution = JSON.parse(JSON.stringify(newBoard))
        solvedBoard.forEach((row, i) => {
          row.forEach((val, j) => {
            solvedBoard[i][j] = newBoard[i][j]
          })
        })
      }
      
      const solvedBoxes = this.convertToBoxes(solvedBoard)
      this.boxes.forEach((box, boxIndex) => {
        box.forEach((cell, cellIndex) => {
          cell.value = solvedBoxes[boxIndex][cellIndex].value
          cell.filled = true
          cell.isHint = false
          cell.selected = false
        })
      })
    },
    giveHint() {
      const emptyCells = []
      this.boxes.forEach((box, boxIndex) => {
        box.forEach((cell, cellIndex) => {
          if (!cell.filled && !cell.isHint) {
            emptyCells.push({ boxIndex, cellIndex, cell })
          }
        })
      })
      
      if (emptyCells.length === 0) return
      
      const board = this.convertBoxesToBoard()
      const solvedBoard = JSON.parse(JSON.stringify(board))
      
      if (this.solution) {
        solvedBoard.forEach((row, i) => {
          row.forEach((val, j) => {
            solvedBoard[i][j] = this.solution[i][j]
          })
        })
      } else if (!this.solveSudokuBoard(solvedBoard)) {
        return
      }
      
      const randomIndex = Math.floor(Math.random() * emptyCells.length)
      const { boxIndex, cellIndex, cell } = emptyCells[randomIndex]
      
      const solvedBoxes = this.convertToBoxes(solvedBoard)
      const correctValue = solvedBoxes[boxIndex][cellIndex].value
      
      cell.value = correctValue
      cell.selected = false
      cell.animatingHint = true
      
      setTimeout(() => {
        cell.animatingHint = false
        cell.filled = true
        cell.isHint = true
      }, 5000)
    },
    convertBoxesToBoard() {
      const board = Array(9).fill(null).map(() => Array(9).fill(0))
      this.boxes.forEach((box, boxIndex) => {
        const boxRow = Math.floor(boxIndex / 3)
        const boxCol = boxIndex % 3
        box.forEach((cell, cellIndex) => {
          const i = Math.floor(cellIndex / 3)
          const j = cellIndex % 3
          const row = boxRow * 3 + i
          const col = boxCol * 3 + j
          board[row][col] = cell.value || 0
        })
      })
      return board
    }
  }
}
</script>

<style scoped>
@keyframes colorFade {
  0%, 100% {
    background: rgba(255, 99, 71, 1);
    box-shadow: 0 4px 8px rgba(255, 99, 71, 0.5), 0 2px 4px rgba(255, 99, 71, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.4);
  }
  50% {
    background: rgba(255, 99, 71, 0.3);
    box-shadow: 0 4px 8px rgba(255, 99, 71, 0.15), 0 2px 4px rgba(255, 99, 71, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }
}

.cell {
  outline: none;
}

.cell:focus {
  outline: 2px solid blue;
}

.animating-hint {
  animation: colorFade 1.8s ease-in-out infinite !important;
}
</style>
