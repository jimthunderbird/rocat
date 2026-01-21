# ROCAT

ROCAT is an application framework that runs on multiple AI coding agents like copilot-cli, gemini-cli, claudecode, and more.

## What is ROCAT?

Each application running on this framework is called a "ROCAT", which stands for:

| Component | Description |
|-----------|-------------|
| **R**ole | Defines the role or persona the AI agent should assume |
| **O**bjective | Specifies the goal or outcome to achieve |
| **C**onstraint | Sets boundaries and limitations for the task execution |
| **A**pplication Specification | Details the specific requirements and features |
| **T**asks | Lists the concrete actions to perform |

## Usage

```bash
sh rocat.sh <rocat_name>
```

### Example

```bash
sh rocat.sh sudoku_spa_app
```

## Features

| Feature | Description |
|---------|-------------|
| Multi-Agent Support | Works with various AI coding agents (copilot-cli, gemini-cli, claudecode, etc.) |
| Structured Approach | Organizes AI tasks using the ROCAT framework components |
| Reusable Templates | Each ROCAT can be executed repeatedly with consistent results |
| Task Automation | Automates complex development workflows through prompt engineering |

## Curly Prompt Language

ROCAT uses a curly bracket-based prompt language designed to help coding agents better understand hierarchical logic and structure. This syntax provides a clear, nested representation of application specifications and configurations.

### Example

```
app_spec {
  html {
    component.abc {
      div.id:"abc" {
        text: "This is a abc div"
      }
    }
  }  
}
```

### Benefits

| Benefit | Description |
|---------|-------------|
| **Hierarchical Clarity** | Nested structure makes relationships and containment explicit |
| **Agent-Friendly** | Easy for AI agents to parse and understand component relationships |
| **Concise Syntax** | Reduces verbosity while maintaining readability |
| **Flexible Notation** | Supports properties, attributes, and nested components in a unified format |
