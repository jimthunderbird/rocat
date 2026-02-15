# Module 3 -- Recommender Systems

## Overview

**Recommender systems** predict what a user will like based on past behavior and preferences. They power the personalized experiences on platforms like Netflix, Amazon, Spotify, and YouTube. This module covers the major approaches to building recommendation engines, connecting NLP and data mining to practical applications.

## The Recommendation Problem

Given a set of users and items (movies, products, songs), the goal is to predict how much a user will enjoy an item they have not yet interacted with. The input is typically a **user-item interaction matrix** where each entry is a rating, a purchase, or a click -- and most entries are missing.

## Collaborative Filtering

**Collaborative filtering** makes predictions based on the behavior of similar users or similar items, without needing to know anything about the content of the items.

### User-Based Collaborative Filtering

- Find users whose rating patterns are similar to the target user (using cosine similarity or Pearson correlation).
- Predict the target user's rating for an unseen item as a weighted average of similar users' ratings for that item.

### Item-Based Collaborative Filtering

- Find items that are rated similarly to the target item across all users.
- Predict the rating based on the target user's ratings of similar items.
- Often more stable than user-based methods because item similarities change less frequently than user similarities.

### Matrix Factorization

**Matrix factorization** decomposes the user-item matrix into two lower-rank matrices: one representing user preferences and one representing item characteristics.

- Each user is represented by a latent vector, and each item by another latent vector.
- The predicted rating is the dot product of the user and item vectors.
- **Singular Value Decomposition (SVD)** and **Alternating Least Squares (ALS)** are common algorithms.
- This approach won the famous Netflix Prize competition.

## Content-Based Filtering

**Content-based filtering** uses the features of items (genre, description, price) to recommend items similar to what the user has liked before.

- Build a **user profile** from the features of items the user has rated highly.
- Recommend items whose features match the user profile.
- Advantage: can recommend new items that no one has rated yet (no cold-start problem for items).
- Disadvantage: recommendations may lack diversity (filter bubble).

## Hybrid Methods

**Hybrid systems** combine collaborative and content-based approaches to get the best of both worlds:

- Use content features to address the **cold-start problem** (new users or items with no interaction history).
- Use collaborative signals when enough data is available for higher accuracy.

## Evaluation Metrics

- **RMSE (Root Mean Squared Error)**: measures prediction accuracy for rating-based systems.
- **Precision@K and Recall@K**: measure how many of the top-K recommended items are relevant.
- **NDCG (Normalized Discounted Cumulative Gain)**: measures ranking quality, giving more weight to relevant items appearing higher in the list.
- **A/B testing**: the gold standard in production; compare two recommendation strategies on live users.

## Key Takeaways

- Collaborative filtering leverages the wisdom of the crowd; content-based filtering leverages item features.
- Matrix factorization discovers latent factors and is a cornerstone of modern recommender systems.
- Hybrid approaches combine multiple strategies to handle cold starts and improve accuracy.
- Evaluation requires both offline metrics (RMSE, precision) and online experiments (A/B tests).
