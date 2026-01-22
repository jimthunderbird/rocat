# ROCAT

![ROCAT](https://github.com/jimthunderbird/rocat/blob/master/rocat.jpg)

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

### Running Custom Scripts Inside a ROCAT

You can run custom scripts inside of a rocat by specifying the script name as an additional argument:

```bash
sh rocat.sh sudoku_spa_app runapp_hotreload
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

## Editor Integration

ROCAT is designed to work with any editor, which is good for users who want to do vibe coding in their editor instead of in the coding agent console or a specific IDE.

### Benefits of Editor-Based Workflow

| Benefit | Description |
|---------|-------------|
| **Editor Freedom** | Use your favorite editor (VS Code, Vim, Emacs, Sublime, etc.) with all your customizations |
| **Vibe Coding** | Write prompts and specifications in a comfortable, familiar environment |
| **File-Based Workflow** | All ROCAT components are plain text files that can be versioned, shared, and edited |
| **Context Switching** | Seamlessly switch between writing code and crafting AI prompts without leaving your editor |
| **Collaboration Ready** | Share and collaborate on ROCAT definitions using standard version control tools |
| **Task Visibility** | See a complete history of "vibes" (tasks) you've completed by viewing the tasks.prompt file |

## Spec-Driven Development Workflow

ROCAT embraces a spec-driven development mindset by automatically maintaining an up-to-date application specification throughout the development process. After each task is completed, ROCAT's workflow merges the changes back into the `app_spec.prompt` file, ensuring that your specification always reflects the current state of the application.

### Key Advantages

| Advantage | Description |
|-----------|-------------|
| **Living Documentation** | The specification evolves with your codebase, eliminating documentation drift |
| **Iterative Refinement** | Each task completion updates the spec, creating a feedback loop for continuous improvement |
| **Single Source of Truth** | The app spec remains the authoritative reference for what the application does |
| **Audit Trail** | Version-controlled spec changes provide a clear history of application evolution |
| **AI-Friendly Evolution** | Coding agents can reference the updated spec for subsequent tasks, building on previous work |
