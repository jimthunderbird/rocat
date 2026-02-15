# Module 2 -- Sequence Models & Transformers

## Overview

Language is inherently sequential: the meaning of a word depends on the words around it. **Sequence models** are architectures designed to process ordered data. This module traces the evolution from recurrent neural networks to the **transformer** architecture that powers modern large language models.

## Recurrent Neural Networks (RNNs)

An **RNN** processes input one token at a time, maintaining a **hidden state** that summarizes everything seen so far.

- At each time step t, the hidden state is updated: h_t = f(W_h * h_{t-1} + W_x * x_t)
- The final hidden state can be used for classification, or each hidden state can produce an output (for sequence labeling).
- **Limitation**: vanilla RNNs struggle with **long-range dependencies** because gradients shrink (vanish) or explode during backpropagation through many time steps.

## LSTMs and GRUs

**Long Short-Term Memory (LSTM)** networks add a **cell state** and three gates (input, forget, output) to control the flow of information. This allows them to remember information over hundreds of time steps.

**Gated Recurrent Units (GRUs)** simplify LSTMs to two gates (reset, update) while achieving similar performance.

Both are widely used for tasks like sentiment analysis, machine translation, and speech recognition.

## Sequence-to-Sequence Models

**Seq2seq** models use an **encoder** RNN to compress the input sequence into a context vector, and a **decoder** RNN to generate the output sequence token by token. Originally used for machine translation (e.g., English to French).

**Problem**: the fixed-size context vector becomes a bottleneck for long sequences.

## The Attention Mechanism

**Attention** solves the bottleneck by allowing the decoder to look at all encoder hidden states, not just the last one.

- At each decoding step, the model computes a **weighted sum** of all encoder hidden states.
- The weights (attention scores) indicate how relevant each input token is to the current output token.
- Attention dramatically improved translation quality and became a key ingredient in modern NLP.

## The Transformer

The **Transformer** (Vaswani et al., 2017) replaces recurrence entirely with **self-attention**, processing all tokens in parallel.

### Key Components

- **Self-attention**: each token attends to every other token in the sequence, computing relevance scores. This captures dependencies regardless of distance.
- **Multi-head attention**: runs multiple attention operations in parallel, allowing the model to capture different types of relationships.
- **Positional encoding**: since transformers have no inherent notion of order, position information is added to the input embeddings.
- **Feed-forward layers**: applied independently to each position after attention.
- **Layer normalization and residual connections**: stabilize training of deep transformer stacks.

### Why Transformers Dominate

- **Parallelism**: unlike RNNs, transformers process all positions simultaneously, enabling fast GPU training.
- **Long-range dependencies**: self-attention connects any two tokens directly, avoiding the vanishing gradient problem.
- **Scalability**: transformers scale to billions of parameters and vast training datasets.

## Pre-trained Language Models

- **BERT** (Bidirectional Encoder Representations from Transformers): pre-trained by masked language modeling. Excels at understanding tasks (classification, question answering).
- **GPT** (Generative Pre-trained Transformer): pre-trained by next-token prediction. Excels at generation tasks (text completion, dialogue).

Fine-tuning these pre-trained models on task-specific data is the standard approach in modern NLP.

## Key Takeaways

- RNNs process sequences step by step; LSTMs and GRUs handle long-range dependencies better.
- Attention allows models to focus on relevant parts of the input, removing the context vector bottleneck.
- Transformers use self-attention for parallelism and long-range modeling, forming the basis of modern NLP.
- Pre-trained models like BERT and GPT provide powerful starting points for virtually any NLP task.
