# Module 1 -- Text Processing & Representations

## Overview

Computers work with numbers, not words. Before any NLP model can process text, the text must be **preprocessed** and converted into a **numerical representation**. This module covers the pipeline from raw text to vectors that capture meaning.

## Text Preprocessing

Raw text is messy. Standard preprocessing steps include:

- **Tokenization**: splitting text into individual units (tokens). Tokens are usually words but can also be subwords or characters.
  - "The cat sat on the mat." becomes ["The", "cat", "sat", "on", "the", "mat", "."]
- **Lowercasing**: converting all text to lowercase to reduce vocabulary size ("The" and "the" become the same token).
- **Stop word removal**: removing common words like "the", "is", "and" that carry little meaning on their own.
- **Stemming and lemmatization**: reducing words to their root form. "running" becomes "run" (stemming) or "run" (lemmatization). Lemmatization is more linguistically accurate.
- **Handling special characters**: removing or encoding punctuation, URLs, HTML tags, and emojis depending on the task.

## Bag of Words (BoW)

The **Bag of Words** model represents a document as a vector of word counts, ignoring word order.

- Build a vocabulary of all unique words in the corpus.
- Each document becomes a vector where each element is the count of a word.
- Simple and effective for tasks like text classification.
- Limitation: loses all information about word order and context.

## TF-IDF

**Term Frequency-Inverse Document Frequency** improves on BoW by weighting words:

- **TF (Term Frequency)**: how often a word appears in a document. More frequent = more relevant to that document.
- **IDF (Inverse Document Frequency)**: penalizes words that appear in many documents. Words like "the" get low IDF; rare, distinctive words get high IDF.
- TF-IDF = TF * IDF. This produces a vector that highlights words that are both frequent in a document and rare across the corpus.

## Word Embeddings

**Word embeddings** represent each word as a dense, low-dimensional vector (e.g., 300 dimensions) where semantically similar words are close together.

- **Word2Vec**: trains a neural network to predict a word from its context (CBOW) or predict context from a word (Skip-gram). The learned hidden layer weights become the word vectors.
- **GloVe**: factorizes a global word co-occurrence matrix to produce vectors that capture both local and global statistical patterns.
- **Properties**: word embeddings capture analogies. For example, vector("king") - vector("man") + vector("woman") is close to vector("queen").

## Subword Tokenization

Modern models use **subword tokenization** to handle rare and out-of-vocabulary words:

- **Byte Pair Encoding (BPE)**: iteratively merges the most frequent character pairs to build a vocabulary of subword units.
- **WordPiece**: similar to BPE, used by BERT.
- Benefit: balances vocabulary size with the ability to represent any word.

## Key Takeaways

- Preprocessing (tokenization, lowercasing, stemming) cleans and standardizes text.
- BoW and TF-IDF are simple, interpretable representations but ignore word order.
- Word embeddings capture semantic meaning in dense vectors and are the foundation of modern NLP.
- Subword tokenization enables models to handle any word, including rare or unseen ones.
