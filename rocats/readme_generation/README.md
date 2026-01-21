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
