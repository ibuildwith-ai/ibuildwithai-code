---
title: "How AI Agents Will Work Together: A Guide to the A2A Protocol"
date: 2026-02-21
description: "A practical guide to Google's A2A protocol, explaining how AI agents discover, communicate, and collaborate through Agent Cards, Tasks, Messages, and Execution Modes."
keywords: [A2A, Agent-to-Agent Protocol, AI agents, multi-agent systems, Agent Cards, Google A2A, agent interoperability, agentic AI]
author: "AI/Tech Educator, Founder of iBuildwith.ai"
---

# How AI Agents Will Work Together: A Guide to the A2A Protocol

Right now, most AI agents live in their own worlds. An agent built by one company can't easily talk to an agent built by another. They don't share a common way to introduce themselves, describe what they can do, or hand off work to each other. If you've ever tried to get two systems to work together that were never designed to connect, you know the frustration.

But the direction things are heading is clear: instead of one giant AI that does everything, we're moving toward ecosystems of specialized agents. One agent handles scheduling. Another handles research. Another manages customer data. The value isn't in any single agent. It's in how well they work together.

That's the problem the A2A (Agent-to-Agent) protocol is designed to solve. Developed by Google, A2A gives agents a shared language for discovering each other, communicating, and collaborating, regardless of who built them or what technology they run on. Think of it as the common ground that makes multi-agent collaboration possible.

This article walks through the key concepts behind A2A, from how agents advertise their capabilities to how they exchange work and communicate results.

## Agent Cards

An **Agent Card** is like a profile or business card for an agent. It describes who the agent is, what it can do, and how to reach it.

- Published at a known location so other agents can find and read it
- Includes the agent's name, a description of its skills, what types of tasks it can handle, and how to authenticate when communicating with it
- Allows agents (and the people managing them) to discover and evaluate other agents before deciding to work with them

### Example Agent Card

Below is an example of what an Agent Card looks like for a healthcare provider search agent:

```json
{
  "name": "HealthcareProviderAgent",
  "description": "An agent that can find and list healthcare providers based on a user's location and desired specialty.",
  "url": "http://127.0.0.1:9997/",
  "version": "1.0.0",
  "protocolVersion": "0.3.0",
  "preferredTransport": "JSONRPC",
  "capabilities": {
    "streaming": false
  },
  "defaultInputModes": ["text"],
  "defaultOutputModes": ["text"],
  "skills": [
    {
      "id": "find_healthcare_providers",
      "name": "Find Healthcare Providers",
      "description": "Finds and lists healthcare providers based on user's location and specialty.",
      "tags": ["healthcare", "providers", "doctor", "psychiatrist"],
      "examples": [
        "Are there any Psychiatrists near me in Boston, MA?",
        "Find a pediatrician in Springfield, IL."
      ]
    }
  ]
}
```

Notice how the card tells you everything you need to know at a glance: the agent's name, what it does, what skill it offers, example questions you could ask it, and what kind of input and output it works with. Other agents (or people) can read this card and immediately understand whether this agent is the right one to call on for a given task.

### Input and Output Modes

The `defaultInputModes` and `defaultOutputModes` fields in the Agent Card tell you what kinds of content the agent can receive and produce. In the example above, the healthcare agent works with text in both directions: you ask a question in words, and it answers in words.

But agents aren't limited to text. A2A supports several content types:

- **text**: written content (questions, answers, descriptions)
- **image**: photos, screenshots, diagrams
- **audio**: voice recordings or sound
- **video**: video content
- **file**: documents, spreadsheets, PDFs, and other files

This means agents can work across multiple modalities. An image generation agent might accept text as input ("draw a sunset over a mountain") and return an image as output. A transcription agent might accept audio and return text. Each agent declares what it supports, so you always know what you can send it and what to expect back.

## Skills

A **Skill** is a piece of metadata inside an Agent Card that describes something the agent is capable of doing. An agent might list skills like "translate documents between languages" or "summarize meeting notes."

Skills are purely descriptive. They don't map to any specific function or internal logic inside the agent. They're more like items on a menu: they tell the outside world what the agent offers, but they say nothing about how the agent actually does the work behind the scenes.

### Skills vs. Tasks

These two concepts are easy to confuse, but they serve different purposes:

- A **skill** answers the question *"What can this agent do?"* It's static, declarative, and used for discovery. It helps other agents (or people) decide whether this is the right agent to ask for help.
- A **task** answers the question *"Please do this specific thing right now."* It's dynamic, representing an actual request that gets created, tracked, and eventually completed or failed.

Think of skills as the menu at a restaurant and tasks as the orders placed by customers. The menu helps you decide what to order, but the order is what actually gets the kitchen working.

## Tasks

A **Task** is the core unit of work in A2A. When one agent asks another to do something, that request becomes a task. Each task moves through a clear set of stages:

- **Submitted**: the request has been sent to the other agent
- **Working**: the other agent is actively working on it
- **Input Required**: the other agent needs more information before it can continue
- **Completed**: the work is done and results are available
- **Failed**: something went wrong and the task could not be completed

Every task has a unique identifier, so it can be tracked, checked on, or cancelled at any point.

## Messages and Parts

Agents talk to each other through **Messages**. Each message has a role that indicates who sent it:

- **User**: a message from the requesting agent (the one asking for work)
- **Agent**: a message from the serving agent (the one doing the work)

Each message can contain one or more **Parts**, which carry the actual content:

- **Text**: plain written content
- **File**: a document, image, or other file
- **Data**: structured information (like a form or a set of key-value pairs)

This flexibility means agents can share simple text responses, exchange files, or pass along structured data, all within the same conversation.

## Real-Time Communication

For tasks that don't resolve instantly, A2A provides two mechanisms for keeping the requesting agent informed: streaming and push notifications.

### Streaming

For tasks that take a while to complete, A2A supports streaming. Instead of waiting in silence for a final answer, the working agent can send progress updates back in real time.

- Useful when you want to see partial results as they come in (for example, text being generated gradually)
- Gives visibility into what the agent is doing, rather than just waiting for a finished result

### Push Notifications

Sometimes you don't want to sit and wait for a task to finish. With push notifications, the working agent will proactively reach out and let you know when something changes. Maybe a task finishes, or maybe it needs more input.

- Helpful for long-running tasks where you'd rather be notified than keep checking
- The requesting side provides a destination for notifications when it submits the task
- Updates arrive automatically as the task progresses

## Authentication

Agents need to trust each other before sharing information or doing work. A2A handles this through **authentication**. Each agent declares in its Agent Card what credentials are required to communicate with it.

- This could be an API key, a token, or another standard security mechanism
- Ensures that only authorized agents (or people) can send tasks or receive results

## Execution Modes

A2A supports multiple ways for agents to interact, depending on the nature of the task and the needs of the people or systems involved. An agent may support one or more of these modes.

### 1. Synchronous (Ask and Wait)

The simplest pattern. You send a task and wait for the complete answer to come back before moving on.

- Best for quick tasks where the answer is available almost immediately
- Similar to asking someone a question and waiting for them to respond on the spot

### 2. Streaming (Watch It Happen)

You send a task and stay connected while the other agent works, receiving updates as they happen.

- Great for tasks that produce results gradually, or when you want to see progress in real time
- Think of it like watching someone type a response to you live, rather than waiting for the finished message

### 3. Asynchronous with Polling (Check Back Later)

You submit a task and go about your business. When you want to know the status, you check back.

- Useful when a task might take a long time and you don't need to watch it happen
- Similar to dropping off a request and periodically checking whether it's done

### 4. Asynchronous with Push Notifications (Get Notified)

You submit a task and the other agent reaches out to you when there's an update. No need to check back manually.

- Ideal for long-running tasks in environments where you'd rather receive an alert than keep checking
- Like leaving your number with someone and asking them to call you when they're done

### 5. Multi-Turn (Back-and-Forth Conversation)

Not every task can be completed in a single exchange. Sometimes the working agent needs to ask follow-up questions, request clarification, or go through several rounds of discussion before finishing.

- The task stays open across multiple exchanges, preserving context throughout
- Each round can use any of the above modes
- Enables complex workflows like negotiation, iterative refinement, or step-by-step guidance

### Choosing an Execution Mode

| Mode | How It Works | Best For |
|------|-------------|----------|
| Synchronous | Send and wait for the answer | Quick tasks, straightforward requests |
| Streaming | Stay connected and watch progress | Real-time feedback, incremental results |
| Async + Polling | Submit now, check back later | Long tasks, no need for instant updates |
| Async + Push | Submit now, get notified on updates | Long tasks, prefer alerts over checking |
| Multi-Turn | Ongoing back-and-forth conversation | Complex tasks that need dialogue |

## Key Takeaways

A2A introduces a small set of building blocks that, taken together, create a complete system for agent collaboration:

- **Agent Cards** let agents advertise who they are, what they can do, and how to reach them, making discovery possible across vendors and platforms.
- **Skills** describe an agent's capabilities in plain terms, so other agents (or people) can decide whether it's the right one for a job.
- **Tasks** are the actual units of work, with clear lifecycle states from submitted to completed.
- **Messages and Parts** give agents a flexible way to exchange text, files, and structured data within a task.
- **Execution Modes** let agents interact synchronously, asynchronously, via streaming, or through multi-turn conversations, depending on what the situation calls for.

What makes A2A significant isn't any one of these pieces. It's that they form an open standard anyone can implement. As AI products move from single-agent tools to multi-agent systems, the ability for agents to find each other, negotiate capabilities, and collaborate without custom integrations becomes essential. A2A provides that foundation.

For anyone building products with AI, or working alongside AI agents in their day-to-day, understanding these concepts now puts you ahead of the curve. The agents are coming. A2A is how they'll work together.
