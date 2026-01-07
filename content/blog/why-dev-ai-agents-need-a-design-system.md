+++
title = "Why Dev AI Agents Need a Design System"
date = "2025-09-09T10:23:21-07:00"
author = "marcelo-lewin"
draft = false
summary = "We need a design system for Dev AI chat. A small, shared set of text-first components; cards, tables, alerts, diagrams, so no matter which agent you're using, outputs look and feel the same."
image = "/images/blog/design-systems-for-dev-ai-agents.png"
+++

## Introduction

AI dev agents are quickly becoming essential tools. From Claude Code to Gemini CLI, Copilot, and OpenCode, developers now have powerful copilots sitting right inside their editors and terminals. These tools help us generate code, debug issues, and even explain complex concepts.

But there's a problem: the way they present information is inconsistent. One agent might return a raw text list, another might drop Markdown tables, and a third might wrap things in ASCII boxes. The content is useful, but the lack of standardization makes it harder to scan, share, and extend.

This is a problem we've already solved in other areas of software. In UI and product design, we rely on design systems, shared sets of styles, components, and rules that keep interfaces consistent and predictable. The same thinking applies here: if AI dev chat is the new “UI” for coding assistance, then it too needs a design system.

## What is a Design System?

Before we get into how this applies to AI dev chat, let's pause for a moment on what a design system actually is.

A design system is a shared set of styles, components, and rules that make sure everything looks and behaves the same across a product. Think of [Material Design](https://m3.material.io/) (Google) or [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/) (Microsoft). These systems give teams a common language: buttons, cards, tables, typography, all defined once, then reused everywhere.

The value isn't just visual consistency. A design system reduces cognitive load, speeds up development, and makes interfaces predictable. When you know what a “card” or an “alert” looks like, you don't waste brainpower decoding it, you just focus on the content.

That same principle applies to Dev AI agents. Right now, they don't have a design system. Each one invents its own way of formatting answers. The result: inconsistency. The opportunity: if we bring design system thinking into AI dev chat, we can make outputs predictable, scannable, and extendable, just like we did with UI.

## Why we need a Design System.

I spend a lot of time on context engineering, writing lots of markdown files that shape how AI dev agents behave. With my product, [Cody Framework](https://github.com/ibuildwith-ai/cody-framework), I quickly ran into a problem: the outputs (presentation) of my carefully engineered context varied dramatically between different agents.

Take a simple command like:

```
:cody assets list
```

This should return a list of assets from the Cody folder structure with a description of each asset. And yes, every AI dev agent gave me the content I asked for, but the presentation was all over the place. One agent gave me a raw bullet list, another tried to render a Markdown table, and another wrapped the results in a messy ASCII block. The instructions were the same, but the formatting was inconsistent.

That's when it clicked: what we're missing isn't just better context engineering, it's a design system for AI dev chat.

And it's important to clarify, what I'm talking about here is not standardizing the content itself. That will always be somewhat unpredictable, depending on the model you're using. What I'm focused on is standardizing the presentation layer, the way that content gets displayed once the AI generates it. That's where a design system shines: it makes the output predictable, scannable, and consistent across agents, even if the content underneath is still non-deterministic.

> Design System shine by making the output predictable, scannable, and consistent across agents, even if the content underneath is still non-deterministic.

## The problem.

To see the problem in action, let's look at a simple command from Cody Framework:

```
:cody assets list
```

This command will return 3 different versions, depending on the AI Dev Agent you use.

Version 1
```

- CONTENT-TYPE-HEADER.PNG
- CONTENT-TYPE-BODY.PNG
- CONTENT-TYPE-FOOTER.PNG
```

Version 2
```

| File Name              | Description                    |
|------------------------|--------------------------------|
| CONTENT-TYPE-HEADER.PNG| A screenshot of header details |
| CONTENT-TYPE-BODY.PNG  | A screenshot of body details   |
| CONTENT-TYPE-FOOTER.PNG| A screenshot of footer details |

```

Version 3
```

=============================
=   ASSETS IN YOUR PROJECT  =
=============================
CONTENT-TYPE-HEADER.PNG
CONTENT-TYPE-BODY.PNG
CONTENT-TYPE-FOOTER.PNG
=============================
```

Same command executed returned three completely different presentations. And it's not just agent-to-agent variation, sometimes you'll even get different formatting from the same agent if you run the command again. The content is technically correct, but the lack of standardization forces you to stop and re-interpret every time.

Yes, with carefully written prompts and heavy context engineering, you can push an agent to be more consistent. But that creates its own problem: duplication. If you want the same presentation across multiple commands, or across multiple agents, you end up repeating the same formatting rules everywhere. That's brittle, hard to maintain, and the opposite of scalable.

This is exactly why we need a design system for AI dev chat: not to control the content but to standardize the presentation layer, the way that content gets displayed after it's generated.

## The proposed solution.

To make outputs consistent, we don't just rely on prompts. We set up a system of files that standardize how content gets displayed:

### The Design Component
This is where every display component lives (e.g. card.md, table.md, alert.md). Each component file defines:
- Name and description
- Accepted arguments
- Display instructions (ASCII rules: borders, width, alignment)
- Example input/output

{{< space "1.5rem" >}}

My card.md component file has the following in it:

```
---
name: "card"
description: "Displays a stylized ASCII card with a headline and body content."
arguments:
  - name: "headline"
    description: "The main headline text displayed at the top of the card."
  - name: "body"
    description: "The body content goes between the opening and closing <cf:card> tags."
  - name: "width"
    default: "50"
    description: "The width of the card in characters. If no width is passed, use the default value."
---

# Display Instructions

- The card must be enclosed in a rectangular ASCII box made with `+`, `-`, and `|` characters.  
- The total width of the box should be **{{width}} characters** (including borders).  
- The **headline** must be displayed on the first line, **centered horizontally** within the box.  
- Place a horizontal divider line (`-`) between the headline and the body.  
- The **body content** must be **left-justified** inside the box.  
- Wrap text so that no line of body content exceeds the box width (minus the borders).  
- Preserve blank lines and spacing within the body (e.g., `----` should appear as-is, with spacing above and below if given).  
- Always ensure the right border `|` aligns correctly, even if a line is shorter due to wrapping.  
- Add an empty line above and below the body text for padding inside the box.  
- The bottom border of the box must mirror the top border (`+------------------------------------+`).  
- All lines should have a `|` border on the right and left, including the top and bottom (`| +-------------+ |`)

# Example

Input:
<cf:card headline="The headline here">
This is the body of the card.
It should wrap and stay left aligned.

----

More body content here.
</cf:card>

Output:
|+----------------------------------+|
|          The headline here         |
|------------------------------------|
|  This is the body of the card.     |
|  It should wrap and stay left      |
|  aligned.                          |
|                                    |
|  ----                              |
|                                    |
|  More body content here.           |
|+----------------------------------+|
```

### Interpreting the Component
The agent.md is the brain. It tells the AI agent how to interpret any of these components (among other things).  In my case, they are set up as tag that starts with `<cf:*>`. 

For example, in my agents.md file, I have:

```
## Design System Components
  - When you execute commands in the {{cfCommands}} folder, you will encounter XML tags.
  - Only tags that begin with <cf:...> must be executed as a Cody Framework component.
  - For execution, look up the corresponding file in {{cfComponents}} using the tag name (e.g., <cf:table> → table.md, <cf:card> → card.md).
  - **CRITICAL**: When you encounter a <cf:...> tag, you MUST:
    1. Read the corresponding component file from {{cfComponents}}
    2. Extract the content between the opening and closing <cf:...> tags as the "body"
    3. Extract any attributes (like headline="...") as arguments
    4. Some arguments (like widht="50") may be used in the Display Instructions section of the component like this: {{width}}
    5. Follow the Display Instructions in the component file exactly
    6. Replace the entire <cf:...> block with the formatted output
  - Standard HTML tags (e.g., <div>, <p>, <h1>) should not be executed.
  - If you encounter a <cf:...> tag with no matching file, ask for clarification before proceeding.
```

### Using the Component
My `xxxcommand.md` files are how users can control the [Cody Framework](https://github.com/ibuildwith-ai/cody-framework).  In the command file, there is where I actually use the design component:

```
---
command: ":cody assets list"
description: Lists all the files stored in the assets folder, along with their known descriptions of what they are used for.
---

# LIST ALL ASSETS

<cf:card headline="List of Assets in the Assets Folder" width="50">

- List all the assets available in the {{cfAssets}} folder.
- Provide any details you know about each asset next to it. 
- Do not provide the information in a table format.  Provide it as follows:

Here are your current assets in the {{cfAssets}} folder:

[**AGENT**: Convert filename to full uppercase][filename]
[description]

[**AGENT**: Only show this line if there are multiple files]----------------

[**AGENT**: Convert filename to full uppercase][filename]
[description]

</cf:card>
```

This structure separates what the AI should do (commands.md) from how the output should look (components.md), interpreted and controlled by the brain (agent.md) file.

## Benefits of Standardization

Adopting a design system for AI dev agents doesn't just make things look nicer, it solves real workflow problems and unlocks new possibilities.
- Clarity: Developers don't waste time decoding random formats. A card looks like a card, a table looks like a table, every time, across every agent.
- Efficiency: Standardized outputs mean faster scanning and comprehension. You can focus on the content instead of re-learning presentation quirks.
- Cross-Tool Portability: Whether you're in Claude Code, Gemini CLI, or OpenCode, the same `<cf:card>` renders the same way. Teams can move between tools without losing consistency.
- Extensibility: New components can be added easily. Define them once (in Markdown with arguments, instructions, and examples), and every compliant agent can render them.
- Community-Driven: Instead of each agent reinventing formatting, we can build a shared library of components, open, extensible, and improved by everyone.

{{< space "1.5rem" >}}

Standardization doesn't lock us in, it actually gives us more flexibility. Once the presentation layer is stable, the underlying models are free to generate content however they like, while still delivering outputs in a predictable, structured way.

## Conclusion

AI dev agents are quickly becoming the new interface for how we work with code. But without a shared design system, every output feels different, sometimes even from the same agent. That inconsistency slows us down and creates unnecessary friction.

By applying design system thinking to Dev AI chat, we separate content generation (what the model produces) from content presentation (how it gets displayed). Context engineering gives us the glue, agent.md connects commands to components, and components define how information is rendered. The result is predictable, scannable, and extensible outputs across tools.

Just as Design Systems brought order to modern apps, a design system for AI dev chat can do the same for agents like Claude Code, Gemini CLI, Copilot, and OpenCode. With a shared set of components, we can build once and trust that our outputs will look the same everywhere.

The future is clear: if Dev AI chat is going to be our daily workspace, it needs to feel structured, consistent, and reliable. A design system makes that possible.