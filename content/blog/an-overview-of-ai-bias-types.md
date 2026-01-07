+++
title = "An Overview of AI Bias Types"
date = "2025-05-25T12:40:48-07:00"
author = "marcelo-lewin"
draft = false
summary = "Get an overview the various types of bias that can affect AI models, what they are and where they can manifest in the AI lifecycle."
image = "/images/blog/default.png"
+++

Bias in AI systems can significantly affect fairness, accuracy, and trust. Whether it's through the data we collect, the way we label it, or how algorithms are trained and deployed, bias can creep into every stage of the AI lifecycle. Understanding the different types of AI bias is essential for anyone involved in designing or deploying AI systems—especially those concerned with ethics, fairness, and transparency.

This article outlines key types of bias that can appear in AI systems, shows where they manifest in the AI pipeline, and introduces potential mitigation strategies.

### What Is Bias?

Bias refers to situations where AI systems make unfair or prejudiced decisions due to flawed data, assumptions, or system design. These biases often mirror existing societal inequalities and can lead to outcomes that disproportionately affect specific individuals or groups. For example, an AI model trained on data from a single demographic may underperform when applied to underrepresented populations.

### Selection / Sampling Bias
Occurs when training data isn't representative of the broader population the model aims to generalize to.

**Example**: A facial recognition model trained primarily on light-skinned individuals performs poorly on darker-skinned faces.
**AI Lifecycle**: Data collection, preprocessing  
**Mitigation**: Use diverse and representative datasets.

### Confirmation Bias
The tendency to seek or interpret information in ways that confirm pre-existing beliefs.

**Example**: Labeling social media posts as “toxic” based only on specific keywords.
**AI Lifecycle**: Data labeling, model evaluation  
**Mitigation**: Use randomized sampling and blind labeling techniques.

### Label Bias
Occurs when training labels reflect social stereotypes or inaccuracies.

**Example**: Mislabeling men as “doctors” and women as “nurses” reinforces gender roles.
**AI Lifecycle**: Data labeling  
**Mitigation**: Use diverse labeling teams and cross-validation.

### Reporting Bias
Arises when only certain outcomes are recorded or emphasized in training data.

**Example**: Relying solely on reported crime data excludes unreported incidents.
**AI Lifecycle**: Data collection  
**Mitigation**: Supplement datasets with external sources and document data limitations.

### Historical Bias
Bias embedded in historical data that reflects systemic inequality.

**Example**: Predictive policing models reinforcing over-policing in specific neighborhoods.
**AI Lifecycle**: Data collection, model training  
**Mitigation**: Adjust for known biases or apply data reweighting techniques.

### Measurement Bias
Results from inconsistent or flawed data collection methods.

**Example**: Using different income measurement methods across datasets.
**AI Lifecycle**: Data collection, preprocessing  
**Mitigation**: Standardize and validate measurement techniques.

### Exclusion Bias
Occurs when certain groups or features are left out of training data.

**Example**: Excluding non-English speakers from a language model.
**AI Lifecycle**: Data collection, feature selection  
**Mitigation**: Audit data for coverage and ensure critical features are included.

### Survivorship Bias
Focuses on data from successful cases, ignoring failures.

**Example**: Training a business model only on companies that survived.
**AI Lifecycle**: Data collection  
**Mitigation**: Include both successful and unsuccessful examples.

### Anchoring Bias
Initial information overly influences subsequent decisions or predictions.

**Example**: Using an early estimate as the baseline for future outcomes.
**AI Lifecycle**: Preprocessing, model tuning  
**Mitigation**: Normalize data and avoid relying on defaults or assumptions.

### Stereotyping Bias
Occurs when AI makes predictions based on group-level generalizations.

**Example**: Recommending nursing careers to women and engineering to men.
**AI Lifecycle**: Model training, data labeling  
**Mitigation**: Apply debiasing techniques such as adversarial training.

### Labeler Bias
Introduced by subjective labeling decisions made by humans.

**Example**: A labeler tags ambiguous reviews as “positive” due to personal expectations.
**AI Lifecycle**: Data labeling, collection  
**Mitigation**: Use blind labeling and multiple annotators with clear guidelines.

### Coverage (Availability) Bias
Overrepresentation of easily accessible data in the training set.

**Example**: Relying heavily on English-language news articles.
**AI Lifecycle**: Data collection  
**Mitigation**: Seek out underrepresented sources and diversify datasets.

### Algorithmic Bias
Emerges from design choices or training feedback loops that favor certain outcomes.

**Example**: Classifier thresholds that disproportionately affect minority groups.
**AI Lifecycle**: Model design, training  
**Mitigation**: Test models across demographic segments and adjust configurations.

### Explicit Bias
Intentional exclusion or favoritism in data collection or model design.

**Example**: Deliberately omitting specific demographic groups from a dataset.
**AI Lifecycle**: Data collection, labeling  
**Mitigation**: Establish clear ethical standards and inclusive data protocols.

### Implicit Bias
Unconscious bias affecting decision-making during data collection or labeling.

**Example**: A labeler unknowingly assigns certain professions to specific genders.
**AI Lifecycle**: Data labeling, model evaluation  
**Mitigation**: Educate teams and use diverse perspectives during labeling.

### Latent Bias
Hidden or indirect correlations that affect outcomes without being obvious.

**Example**: A model unintentionally associates wealth with a specific demographic.
**AI Lifecycle**: Preprocessing, feature selection  
**Mitigation**: Conduct bias audits and apply fairness-aware training methods.

### Final Thoughts
Understanding the different types of AI bias—and where they can emerge—is essential for building fair, ethical, and trustworthy systems. Bias can manifest at any stage of the AI lifecycle, from data collection to model evaluation, and often in ways that are difficult to detect without intentional oversight.

Use the concepts outlined in this article to audit your AI systems. Examine how your data is sourced, labeled, and used. Identify potential points of failure, and adopt mitigation strategies to reduce the impact of bias before it reaches your end users.