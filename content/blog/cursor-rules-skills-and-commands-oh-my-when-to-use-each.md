+++
title = "Cursor Rules, Skills, and Commands, Oh My! When to Use Each"
date = "2026-02-10T06:36:31-08:00"
author = "marcelo-lewin"
draft = false
summary = "Cursor gives you three tools to customize your AI agent. Rules shape behavior, skills provide capabilities, and commands save prompts. Here's a clear mental model for knowing when to use each."
image = "/images/blog/cursor-rules-kills-and-commands.png"
+++

<!-- Blog Content Here -->
## Introduction

If you've spent any time customizing Cursor, you've probably run into this question: should this be a rule, a skill, or a command?

You're not alone. Cursor gives you three distinct tools to shape how your AI agent works, but the boundaries between them aren't always obvious. They overlap in small ways. They share some of the same interfaces. And if you're not careful, you end up stuffing workflow instructions into rules, or creating commands for things that should be skills.

Here's the simplest way to think about it:

**Rules guide. Skills do. Commands trigger.**

Rules are passive. They shape how your agent behaves across everything it does. Skills are active. They give your agent specific capabilities it can perform on demand. Commands are shortcuts. They're saved prompts you fire off when you need them.

Think of it in human terms. You have values and standards that guide how you work, no matter what task you're doing. That's rules. You also have professional skills you activate when the job calls for them, like content modeling or financial analysis. That's skills. And sometimes someone hands you a checklist and says "run through this." That's commands.

This article breaks down each one so you know exactly when to reach for which.

## Rules: How Your Agent Behaves

Rules are the simplest concept of the three. They're persistent instructions that tell your agent how to behave.[^1]

They don't do anything on their own. They don't run workflows. They don't execute steps. They just sit there, shaping every interaction your agent has. When the agent writes code, answers a question, or helps with a task, your rules are already in the background influencing how it responds.

According to Cursor's documentation, "rule contents are included at the start of the model context."[^1] In plain language: every time you interact with the agent, your active rules are loaded before your conversation even begins. The agent reads them first, then reads your message.

**What makes rules "passive"?**

Rules don't need to be triggered. You don't invoke them mid-conversation (with one exception). They exist as context the agent absorbs, the same way your professional standards shape your work without you consciously thinking about them.

**Four ways rules activate:**

Not all rules are active all the time. Cursor gives you four activation modes:[^1]

| Activation Mode | How It Works |
|---|---|
| **Always Apply** | Active in every conversation, every task. Your universal standards. |
| **Apply Intelligently** | The agent reads the rule's description and decides if it's relevant to the current task. |
| **Apply to Specific Files** | Activates only when you're working with files that match a pattern (e.g., all files in a `backend/` folder). |
| **Apply Manually** | Only included when you explicitly reference it with `@rule-name` in chat. |

Your universal standards (always apply) run alongside context-specific rules (file patterns) without cluttering every conversation with irrelevant instructions.

**What belongs in a rule?**

- Coding standards and conventions
- Project architecture decisions
- Tone and communication preferences
- Tool and framework choices ("always use Tailwind for styling")
- Things the agent gets wrong repeatedly that you want to correct

**What doesn't belong in a rule?**

- Multi-step workflows (that's a skill)
- One-off tasks you run occasionally (that's a command)
- Detailed procedural instructions with reference materials (that's a skill)

Cursor's own best practices blog puts it clearly: rules are "static context that applies to every conversation."[^5] If the instruction shapes behavior across tasks, it's a rule.

## Skills: What Your Agent Can Do

If rules define who your agent is, skills define what it can do.

Skills are active capabilities. They package domain-specific knowledge, workflows, and even executable scripts into a portable unit that your agent can use when the task calls for it.[^2]

Agent Skills is an open standard for extending AI agents with specialized capabilities.[^2] Cursor added support for the standard in version 2.4 (January 2026), filling a gap that rules couldn't cover: procedural, multi-step work that requires more than passive guidance.[^4]

Cursor's changelog described the distinction directly: "Compared to always-on, declarative rules, skills are better for dynamic context discovery and procedural 'how-to' instructions."[^4]

**How skills differ from rules:**

Rules are always present (or contextually present). Skills are loaded on demand. When your agent starts a conversation, it sees which skills are available and reads their names and descriptions. Nothing more. It doesn't load the full skill contents upfront.[^2]

This is progressive disclosure at work. The agent gets just enough information to decide "is this skill relevant right now?" If the answer is yes, it pulls in the full instructions. If not, the skill stays on the shelf. As the task unfolds, the agent can load additional references, scripts, or assets from within the skill, but only when it actually needs them.

Context is a limited resource. Rules take up space in every conversation whether they're needed or not. Skills only consume context when they're actually being used, and even then, they load progressively rather than all at once.

**What's inside a skill?**

A skill is a folder containing a `SKILL.md` file, and optionally:[^2]

- **References** for detailed documentation the agent can pull in as needed
- **Scripts** the agent can execute (deployment scripts, validation tools, etc.)
- **Assets** like templates, configuration files, or data

> A rule is a flat instruction. A skill is an entire toolkit.

**Two ways skills activate:**

| Activation Mode | How It Works |
|---|---|
| **Agent decides** | The agent reads the skill's description and pulls it in when relevant. This is the default. |
| **User invokes** | You type `/skill-name` in the chat input to explicitly call a skill. |

Notice something? Skills show up in the same `/` slash menu as commands. When you install a skill, Cursor automatically registers it as a `/` entry.[^2] So if you create a skill called `deploy-app`, you'll see `/deploy-app` appear in your slash menu without creating a command for it.

The `/` menu is a mixed interface. Some items are lightweight commands. Others are used to call full-featured skills. They look the same on the surface, but what happens behind the scenes is very different.

**What belongs in a skill?**

- Multi-step workflows (article writing, deployment processes, code reviews)
- Domain-specific knowledge with reference materials
- Procedural instructions that require iteration and decision-making
- Anything that needs scripts, templates, or supporting files

**What doesn't belong in a skill?**

- Simple behavioral guidelines (that's a rule)
- A one-liner you want to reuse (that's a command)

If the instruction tells the agent how to *do* something complex, it should be a skill.

## Commands: Shortcuts You Trigger

Commands are the simplest of the three. They're saved prompts, stored as plain Markdown files, that you trigger by typing `/` in the chat input.[^3]

No progressive disclosure. No reference materials. No scripts. A command is a Markdown file with instructions, and when you call it, those instructions get sent to the agent as if you typed them yourself.

Think of it as saving a message you'd otherwise retype every time. Instead of writing "compress the images in my Downloads folder, ask me what dimensions I want, and ask if I want black and white" over and over, you save it as a command and type `/compress-image`.

**Commands are always manual.**

This is the biggest difference between commands and everything else. Rules can activate automatically. Skills can be detected by the agent. Commands? They only fire when you type `/command-name`. The agent will never decide on its own that it should run a command.[^3]

| | User invokes | Agent decides | Always on | File/folder match |
|---|---|---|---|---|
| **Rules** | Yes | Yes | Yes | Yes |
| **Skills** | Yes | Yes | No | No |
| **Commands** | Yes | No | No | No |

**What belongs in a command?**

- Quick, repeatable tasks you run often
- Simple prompts you don't want to retype
- Lightweight workflows that don't need reference materials or state

**What doesn't belong in a command?**

- Complex multi-step workflows with iteration (that's a skill)
- Behavioral guidelines that should always be active (that's a rule)

**When does a command become a skill?**

If you find yourself wishing your command had reference documents, supporting scripts, or the ability for the agent to detect it automatically, you've outgrown a command. Cursor even provides a built-in `/migrate-to-skills` tool that helps convert commands into skills.[^2]

## Putting It All Together

Here's the full picture in one table:

| | **Rules** | **Skills** | **Commands** |
|---|---|---|---|
| **What it is** | Passive guidance | Active capability | Saved prompt |
| **Purpose** | Shape how the agent behaves | Give the agent something it can do | Shortcut for a repeatable task |
| **Complexity** | Simple (flat Markdown with frontmatter) | Rich (folder with references, scripts, assets) | Minimal (plain Markdown file) |
| **Activation** | Always on, agent decides, file match, or manual | Agent decides or user invokes with `/` | User invokes with `/` only |
| **Context loading** | Loaded at start of every matching conversation | Progressive: name/description first, full contents on demand | Injected when triggered |
| **Best for** | Standards, conventions, guardrails | Workflows, domain knowledge, multi-step processes | Quick tasks, reusable prompts |
| **Think of it as** | Your values | Your expertise | Your shortcuts |

A practical way to decide: ask yourself what the instruction does.

- If it tells the agent **how to behave**, it's a rule.
- If it tells the agent **how to do something**, it's a skill.
- If it's a **prompt you're tired of retyping**, it's a command.

## Key Takeaways

- **Rules are passive.** They shape how your agent behaves across every task. They're loaded into context automatically and don't need to be invoked. Use them for standards, conventions, and guardrails.

- **Skills are active.** They give your agent specific capabilities it can perform on demand. They load progressively, only consuming context when relevant. Use them for workflows, domain knowledge, and multi-step processes.

- **Commands are manual.** They're saved prompts triggered with `/`. The agent never calls them on its own. Use them for quick, repeatable tasks you don't want to retype.

- **The `/` menu shows both commands and skills.** They look the same on the surface, but skills are richer and can also be detected automatically by the agent.

- **When in doubt, start simple.** Begin with a command. If it needs reference materials or auto-detection, upgrade it to a skill. If it's a behavioral guideline that should always be active, make it a rule.

**Rules guide. Skills do. Commands trigger.**

<!-- References Here (If any) -->
[^1]: "Rules." *Cursor Docs*. https://cursor.com/docs/context/rules

[^2]: "Agent Skills." *Cursor Docs*. https://cursor.com/docs/context/skills

[^3]: "Commands." *Cursor Docs*. https://cursor.com/docs/context/commands

[^4]: Cursor Team (2026). "Subagents, Skills, and Image Generation." *Cursor Changelog*. https://cursor.com/changelog/2-4

[^5]: Cursor Team (2026). "Best practices for coding with agents." *Cursor Blog*. https://cursor.com/blog/agent-best-practices