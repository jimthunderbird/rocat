# Module 2 -- Logic & Reasoning

## Overview

**Logic** provides a formal language for representing knowledge and drawing conclusions. In AI, logic-based systems can represent facts about the world, apply rules to derive new facts, and answer queries -- forming the basis of expert systems, planning agents, and constraint solvers.

## Propositional Logic

**Propositional logic** deals with statements (propositions) that are either true or false, connected by logical operators.

- **Variables**: P, Q, R -- each represents a proposition.
- **Connectives**:
  - NOT (negation): flips the truth value.
  - AND (conjunction): true only when both operands are true.
  - OR (disjunction): true when at least one operand is true.
  - IMPLIES (implication): P -> Q is false only when P is true and Q is false.
  - BICONDITIONAL: P <-> Q is true when both have the same truth value.

### Inference in Propositional Logic

- **Modus ponens**: if P and P -> Q are both true, then Q is true.
- **Resolution**: a powerful inference rule used in automated theorem proving. Two clauses containing complementary literals are combined to produce a new clause.
- A set of propositions is **satisfiable** if there exists an assignment of truth values that makes all propositions true.

## First-Order Logic (FOL)

**First-order logic** extends propositional logic with variables, predicates, and quantifiers, making it far more expressive.

- **Predicates** describe properties or relationships: `Student(Alice)`, `Teaches(Bob, CSE150)`.
- **Universal quantifier** (for all): states that a property holds for every element. Example: for all x, `Student(x) -> HasID(x)`.
- **Existential quantifier** (there exists): states that at least one element satisfies a property. Example: there exists x, `Student(x) AND GPA(x, 4.0)`.

### Inference in FOL

- **Unification**: the process of finding substitutions that make two expressions identical. For instance, `Teaches(x, CSE150)` unifies with `Teaches(Bob, CSE150)` by substituting x = Bob.
- **Forward chaining**: start from known facts and apply rules to derive new facts until the query is answered.
- **Backward chaining**: start from the query and work backward to see if existing facts and rules support it.

## Constraint Satisfaction Problems (CSPs)

A **CSP** consists of:

- **Variables**: each must be assigned a value.
- **Domains**: the set of possible values for each variable.
- **Constraints**: restrictions on which combinations of values are allowed.

Examples include Sudoku, map coloring, and scheduling.

### Solving CSPs

- **Backtracking search**: assign values one variable at a time and backtrack when a constraint is violated.
- **Arc consistency**: preprocess the domains to eliminate values that cannot participate in any solution.
- **Heuristics**: choose the variable with the fewest remaining values first (**MRV**) and the value that rules out the fewest choices for other variables (**LCV**).

## Key Takeaways

- Propositional logic handles simple true/false reasoning; first-order logic adds variables and quantifiers for richer expressiveness.
- Inference rules like modus ponens and resolution allow systems to derive new knowledge from existing facts.
- Constraint satisfaction is a practical framework for scheduling, planning, and configuration problems.
- Logic-based AI complements statistical AI by providing interpretable, provably correct reasoning.
