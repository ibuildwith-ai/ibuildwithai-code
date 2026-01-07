+++
title = "From Hard-Coded Content to Building Adaptive Experiences with AI"
date = "2025-10-30T08:40:50-07:00"
author = "marcelo-lewin"
draft = false
summary = "As product builders, we must move away from hard-coded content and create adaptive experiences that serve both humans and AI, enabling personalized, dynamic user interactions."
image = "/images/blog/from-hard-coded-content-building-adaptive-experiences-with-ai.png"
+++

Most content today is written **deterministically**, static articles, tutorials, and documentation published directly to users through a CMS like Contentful or Drupal. But as AI agents become part of user experiences, that model is changing. Content authors will soon need to write not just *for users*, but *for AI systems* that personalize content for those users.

> Every content entry in a CMS will soon serve two audiences, humans and AI.

## Deterministic vs. Non-Deterministic Content

This example illustrates how a single content entry in Contentful (or for that matter, any other CMS) could include both deterministic content (the static article for end users) and non-deterministic guidance (natural language context for AI). The AI guidance wouldn't be written in a technical format like JSON by the author; instead, it would be expressed in natural language within the same entry. An LLM could then transform that guidance into structured metadata behind the scenes, enabling AI agents to personalize and adapt the content dynamically.

### Example Article: “How to Set Up Your Smart Thermostat”

In this example, the CMS entry includes two fields, both authored by the same person.

### 1. Deterministic Body

```text
To set up your smart thermostat, please perform the following steps:

1. Download the SmartHome app from your device's app store.  
2. Open the app and log in or create an account.  
3. Tap "Add Device" and select "Smart Thermostat".  
4. Follow the on-screen instructions to connect to Wi-Fi.  
5. Ensure your Wi-Fi network is 2.4GHz. The thermostat may not connect to 5GHz networks.  

Any questions? Call 800-555-1212.
```

This article, as written above, works great for most users. But if you already have information about the user, for example, their location, the device they use, or their previous setup attempts, AI can personalize this article specifically for them. That's where the non-deterministic field (see below) comes in. It helps AI determine how to present and adapt the article to create a more personalized experience.

### 2. Non-Deterministic — Natural Language Context Guidance

```text
This article is meant to guide users through setting up their smart thermostat.

You must use the **TITLE** of this article exactly as listed.
For the **BODY**, customize and personalize it for the **USER**.

Most users will be using either Android or iOS devices, and some may have dual-band routers.  
If the **USER** is on a dual-band router, suggest disabling the 5GHz band temporarily, it often causes connection issues.  
If the **USER** has failed setup more than once, offer to run a diagnostic or connect them to support.  

Prioritize helping users get connected quickly, but offer deeper troubleshooting if needed.

Check the **USER** location and provide the local phone number for them to get support.
```

## How the LLM Would Interpret the Guidance

Once the AI agent interprets the author's natural language guidance, it can convert it into structured metadata for personalization and delivery. 
 
Here's an example of what that structured output could look like behind the scenes:

```json
{
  "intent": "Guide user through setup with adaptive troubleshooting",
  "user_signals": {
    "device_type": ["iOS", "Android"],
    "network_type": ["2.4GHz", "5GHz", "dual-band"],
    "setup_attempts": ["success", "failure"]
  },
  "response_style": {
    "tone": "friendly",
    "verbosity": "adaptive"
  },
  "fallbacks": {
    "if_connection_fails": "Suggest disabling 5GHz and offer diagnostics",
    "if_user_is_confused": "Simplify steps and avoid jargon"
  },
  "baseline_content": {
    "title": "How to Set Up Your Smart Thermostat",
    "url": "https://example.com/articles/smart-thermostat-setup"
  }
}
```

## Example: Dynamic (AI-Generated) Output

Once the AI interprets the structured metadata, it can generate adaptive, context-aware responses like this:

```text
Title  
How to Set Up Your Smart Thermostat (Baseline title preserved for compliance)

Body (Personalized)

Hi there! Let's get your Smart Thermostat up and running quickly.

1. Download the SmartHome app from the **Google Play Store** (since you're on Android).  
2. Log in or create an account.  
3. Tap "Add Device" and select "Smart Thermostat".  
4. Follow the on-screen instructions to connect to Wi-Fi.

Tip for Your Setup:
It looks like you have a dual-band router. 
To avoid connection issues, temporarily disable the 5GHz band during setup, this often helps.

Having Trouble?
You've tried twice already, so let's make this easy:  
- Would you like me to run a quick diagnostic?  
- Or connect you to a support agent?

Extra Help:
If you're new to smart devices, don't worry, I'll keep things simple and avoid technical jargon.

Any questions? We have an office close to your location.  Just call 555-555-5555.
```

### Visual Summary: The Dual-Layer Authoring Model

```text
Author
   ↓
Dual-Layer Content (Deterministic + Non-Deterministic)
   ↓
LLM / AI Agent
   ↓
Personalized User Experience
```

## What This Means for Content Teams and Builders

As AI becomes an integral part of content delivery, the role of content authors will expand beyond writing for human readers. Authors will need to create entries that serve **two purposes**:

1. **Deterministic Content** : Accurate, compliant information written for direct human consumption.  
2. **Non-Deterministic Guidance** : Natural language context that teaches AI *how* to adapt, personalize, and communicate that information.

{{< space "1.5rem" >}}

By combining both layers in a single CMS entry, and allowing LLMs to transform context into structured metadata, we can deliver content that is both **reliable and dynamic**, meeting user needs in real time while maintaining editorial control.

This shift also changes how product builders think about content. Instead of hardcoding text into an app, vibe coders will architect **content layers** that guide AI systems to generate personalized, on-brand, and compliant messages dynamically.  

> The future of content isn't just about *what* we write, it's about *how we guide AI to write it for us.*