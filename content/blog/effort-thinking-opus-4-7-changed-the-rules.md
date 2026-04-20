+++
title = "Effort, Thinking, and How Opus 4.7 Changed the Rules"
date = "2026-04-20T06:28:42-07:00"
author = "marcelo-lewin"
draft = false
summary = "Effort and thinking are two different controls in Claude models. Opus 4.7 fused them. Here's how each current Claude model handles both, and what that means for builders."
image = "/images/blog/effort-thinking-opus-4-7-changed-the-rules.png"
+++

<!-- Blog Content Here -->
## Two dials that do different things

When you're tuning how a Claude model responds, two words keep coming up: effort and thinking. They sound like the same concept. They are not.

Here's a simple way to think about each. Effort is how many steps Claude takes to get from your question to an answer. Thinking is how hard Claude reasons at each step, and whether it stops to reason at all.

Effort is about scope. A low-effort response sticks to what you literally asked. A high-effort response explores, considers edge cases, makes more tool calls, and goes further than the minimum. Think of it as how ambitious the model is allowed to be.[^1]

Thinking is about depth. When thinking is on, Claude pauses before responding and works through the problem in an internal scratchpad. You don't see the scratchpad, but the model uses it to plan, try different approaches, and catch itself before producing the final response. When thinking is off, Claude answers directly.[^2]

These two dials started out as completely independent controls. You could crank effort high and keep thinking low, or the other way around. Each one did something distinct and you tuned them separately. Sometimes they'd fight each other.

That's not how Opus 4.7 works. On the newest model, effort and thinking are still separate concepts, but the controls for them are now tightly coupled. The relationship has changed, which is why tuning habits that worked on older Claude models can produce surprising results on 4.7.[^3]

Why does any of this matter if you're just using Claude in the app or in Claude Code? Because every response you get has been shaped by these two dials, whether you set them consciously or not. Most people let the defaults ride, which is fine until a response feels shallow, or too long, or too slow, and you realize you have no idea which dial to adjust.

The rest of this article walks through what each dial does, how they relate, and what every current Claude model supports so you can tune with intent instead of guessing.

## How effort works

Effort is the dial that tells Claude how much work to put into your response. More effort means the model does more: more reasoning, more tool calls, more exploration, more thoroughness. Less effort means the model scopes to what you asked and stops there.

There are five effort levels on the Anthropic API: `low`, `medium`, `high`, `xhigh`, and `max`. Not every model supports all five, but the levels mean the same thing wherever they apply.[^1]

**Low** is for speed and cost. The model answers quickly, sticks to the question, and doesn't go out of its way. Good for classification, quick lookups, or any case where "close enough, fast" beats "perfect, slow."

**Medium** is the balanced option. Solid performance without paying for the full depth of high. A reasonable default for general use if you want some quality without spending tokens you don't need to spend.

**High** is the API default for serious work. This is where Claude gets thorough. Complex reasoning, nuanced analysis, harder coding problems. Most quality-sensitive tasks belong here.

**xhigh** is the newest level. It sits between high and max and was designed for agentic coding and long-running tool-heavy workflows. It gives the model more room to explore, backtrack, and reason across many steps. Claude Code uses xhigh as its default because most coding tasks benefit from the extra depth without running into the diminishing returns you get at max.[^4]

**Max** is the ceiling. No constraint on how much the model spends to solve your problem. Powerful, but it can overthink, especially on tasks that aren't actually that hard. Use it deliberately for genuinely difficult problems, not as a default.

A quick word on defaults, because this trips people up. The API defaults to high. Claude Code has its own default that depends on the model you're running. Most people never see these settings, which is fine until the day you want to change something.

A quick rule of thumb I follow. Start at high. If responses feel shallow for the work you're doing, go up. If responses are too slow or too expensive and the quality is more than you need, go down. Don't jump straight to max; it's rarely the right answer, and it's almost always the more expensive one.

One thing worth knowing before we move on. Effort doesn't only affect the model's reasoning depth. It also shapes behavior at every step: how many tool calls the model makes, how thorough its explanations are, how literal it is about following your instructions, and whether it goes above and beyond or sticks to the minimum. A low-effort response feels tight and focused. A high-effort response feels thorough, sometimes to a fault.

## How thinking works

Thinking is the model's ability to pause before responding and reason through a problem internally. When thinking is on, Claude can plan, try approaches, catch mistakes, and work through complexity before producing a final answer. When thinking is off, Claude answers directly from what it knows.

How thinking is controlled has changed significantly across the last few Claude models. Two different systems are worth knowing about.

**The old way: fixed thinking budgets.** On older models, you set a number. You told the API to enable thinking and gave it a token budget, something like 32,000 tokens. The model would then use up to that many tokens on internal reasoning before writing its response. You had a cap. You knew roughly what you were paying for. The model thought up to the budget you set, regardless of whether the problem actually needed that much reasoning.[^5]

This worked, but it had a real problem. On simple questions, Claude would still reason for thousands of tokens because you told it to. On hard questions, Claude might hit your budget and get cut off mid-reasoning. A fixed budget is a blunt tool.

**The new way: adaptive thinking.** Starting with Opus 4.6 and Sonnet 4.6, Anthropic introduced a different mode. Instead of setting a number, you turn adaptive thinking on and let the model decide how much to reason at each step. On a simple lookup, it might skip thinking entirely. On a hard problem, it might reason for much longer than any reasonable budget you would have set. The model becomes responsible for allocating its own thinking, not you.[^2]

On Opus 4.7, this is the only way thinking works. You can't set a fixed budget anymore. If thinking is on, it's adaptive. If you want the model to stop thinking, you turn thinking off entirely.[^2]

This is where the fusion starts to matter. In the fixed-budget world, you could control depth precisely. "Think, but not too much." In the adaptive world, depth isn't a number you set. It's a behavior the model chooses based on the problem in front of it and the effort level you picked.

Adaptive thinking isn't magic. The model can overthink, especially at max effort. It can also skip thinking when you wish it hadn't. The two main tools you have to influence it are the effort level and prompting. At higher effort, the model thinks more often and more deeply. You can also nudge it with instructions in your prompt: "Think carefully and step by step before responding" pushes it toward more thinking, and "Prioritize responding quickly rather than thinking deeply" pushes it the other way.[^4]

One thing worth calling out. When thinking is on, Claude produces a summary of its internal reasoning that you can see in the response. On older models, this summary was shown by default. On Opus 4.7, the summary is hidden unless you explicitly ask for it. The model still thinks the same way. You just don't see the summary unless you opt in. If you upgraded to Opus 4.7 and suddenly your interface went quiet during long responses, that's why.[^3]

## How they relate

Now that you know what each dial does on its own, here's how they interact.

On older Claude models, effort and thinking were two independent controls. You set effort to pick how much work the model should do overall, and you set a thinking budget to pick how much internal reasoning it should invest. You could mix them however you wanted. High effort with a small thinking budget meant "do a lot of stuff, but don't overthink each step." Low effort with a large thinking budget meant "be brief in your output, but reason carefully before writing it." These were legitimate configurations that mapped to real use cases.

The tradeoff was that the two dials didn't always play well together. You could crank effort high and cap thinking low, and the model would sometimes hit its thinking budget mid-reasoning, stop thinking, and then try to do thorough work without the reasoning to back it up. You could set low effort with high thinking and get a model that reasoned extensively about a tiny, simple problem. Tuning them together required knowing what you were doing.

Opus 4.7 removed that tension by fusing the two controls. You can no longer set a thinking budget. You can only turn thinking on or off, and if it's on, it's adaptive. Effort then becomes the primary dial that shapes how much thinking happens. At low effort, the model might skip thinking entirely for simple steps. At xhigh or max effort, the model thinks more often and goes deeper. The depth of thinking is no longer a number you set. It's a behavior the model chooses based on the effort level and the problem in front of it.[^2]

Here's the clean way to think about it on Opus 4.7: thinking is a switch (on or off), and effort is the dial that shapes what happens when the switch is on. The two are still conceptually distinct, but the controls are now tightly coupled. You can't independently tune depth anymore.

This is a real tradeoff, and it's worth being honest about. What was gained is simpler. Most people who tuned effort and thinking budgets separately were getting it wrong, and the model fighting itself produced worse results than either setting alone would have. Adaptive thinking with effort as the main dial produces better outcomes for most users most of the time. Genuinely better for the 90 percent case.

What was lost is precision. If you're a power user who knew exactly what configuration you wanted, say high effort with a tight 4,000 token thinking cap for a specific agentic workflow, you can't express that anymore. The closest you can get is picking an effort level and prompting the model to think less. That's less precise than the old knob.

If you miss the old precision, Opus 4.6 and Sonnet 4.6 still support fixed thinking budgets, though the feature is deprecated and will eventually go away. Haiku 4.5 still uses the old fixed-budget setup.[^2] The next section lays out exactly which model does what.

Even though the two controls are now coupled on Opus 4.7, the concepts of effort and thinking are still useful to hold separately in your head. When you're debugging a response that feels off, ask: is this model not doing enough work (effort issue), or is this model not reasoning hard enough (thinking issue)? The answer points you to different fixes. If effort is the problem, raise the level. If thinking is the problem, turn it on if it's off, or nudge it with a prompt if it's on. Knowing which dial is misbehaving is how you avoid the "just set everything to max and hope" approach that burns tokens and rarely helps.

## What each model supports

The concepts of effort and thinking apply across the Claude lineup, but which controls each model actually exposes varies. Here's the current lineup at a glance.

| Model | Effort levels | Thinking | Thinking default |
|-------|---------------|----------|------------------|
| Opus 4.7 | low, medium, high, xhigh, max | Adaptive only | Off |
| Opus 4.6 | low, medium, high, max | Adaptive or manual (manual deprecated) | Off |
| Sonnet 4.6 | low, medium, high, max | Adaptive or manual (manual deprecated) | Off |
| Haiku 4.5 | Not supported | Manual only (budget_tokens) | Off |

The "thinking default" column reflects that thinking is opt-in across the board. On Opus 4.7, this is explicit: you set `thinking: {type: "adaptive"}` to turn it on.[^2] On Opus 4.6, Sonnet 4.6, and Haiku 4.5, the API treats thinking as off unless you include the thinking parameter in your request. In the various app and tool environments (claude.ai, Claude Code), the defaults shift based on the model and plan.

A few things worth calling out, since the table compresses a lot.

**Opus 4.7 is the cleanest case.** You get all five effort levels, including xhigh which is exclusive to this model. Thinking is adaptive-only, with a simple on or off switch, and it's off by default. You can't set a manual thinking budget, and you can't set temperature, top-p, or top-k either. The API is stricter about what you can pass in, and it will error on parameters it used to accept.[^3]

**Opus 4.6 and Sonnet 4.6 are the transitional models.** They support the effort parameter (low through max, but not xhigh). They also support both adaptive and manual thinking, but manual is deprecated, which means it still works today but will be removed at some point. If you're writing new code against these models, default to adaptive plus effort. If you're maintaining old code that uses manual budgets, it will keep working for now, but plan to migrate.[^2]

**Haiku 4.5 is the odd one out.** No effort parameter at all, but it's the first Haiku model to support extended thinking, which is a genuine step up for the Haiku line.[^6] The catch is that thinking only works in the old manual mode, the one where you set a `budget_tokens` cap. There's no adaptive thinking here. Haiku is Anthropic's fastest, cheapest model, and if you want reasoning at Haiku speeds, you get it with the old-style budget control. Since there's no effort parameter, you tune this model the old way: set your thinking budget based on how much reasoning you want.

The pattern across the lineup is clear. Opus 4.7 represents where things are heading: effort is the main dial, thinking is a binary toggle, and manual fine-grained control is gone. The 4.6 generation sits in the middle, supporting both old and new approaches while the old one is phased out. Haiku 4.5 still carries the old setup, which makes sense since it's the first Haiku to have thinking at all and it wasn't going to skip the mature pattern to introduce a new one. If you're building something you want to keep working for the next year on the newest Opus tier, write it for 4.7 and plan for the 4.6 generation to catch up over time.

## Tuning in practice: API, Claude Code, and claude.ai

You now know what the dials are. Where you actually touch them depends on how you use Claude.

**The API** gives you the most control. This is where effort and thinking exist as explicit parameters, and where the fusion we've been talking about actually lives. On Opus 4.7, you set `effort` to one of the five levels, set `thinking: {type: "adaptive"}` to enable thinking, and use `max_tokens` as a hard ceiling on total output (which now includes thinking tokens, response tokens, and anything used for tool calls). There's also a newer beta parameter called `task_budget` for giving the model a soft target across a full agentic loop, but that requires a beta header and is mostly useful for long-running agent work. If you're using Opus 4.6 or Sonnet 4.6, you get the effort parameter plus the choice between adaptive and manual thinking. If you're using Haiku 4.5, there's no effort parameter, and thinking is manual-only with `budget_tokens`.[^3]

**Claude Code** is where most builders actually live. The primary control is the `/effort` command. Run `/effort` and pick a level from a list. Your choice persists across sessions, except for max, which only applies to the current session. On Opus 4.7, Claude Code defaults to xhigh because that's the sweet spot for coding tasks. On Opus 4.6 and Sonnet 4.6, the default is high, or medium on Pro and Max plans. Thinking on Opus 4.7 in Claude Code follows the same rule as the API: adaptive only, binary on or off. On Opus 4.6 and Sonnet 4.6, there's an environment variable called `CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING` that reverts to the old fixed-budget mode (controlled by `MAX_THINKING_TOKENS`). That variable does nothing on Opus 4.7. If you had it set from before and you upgraded, it's silently being ignored. Claude Code also respects prompt-level instructions. If you want more or less thinking for a specific task, you can tell the model in CLAUDE.md or in the prompt itself.[^7]

**claude.ai** is the flip side. Most of the controls we've been discussing are hidden from you. You don't set effort explicitly. You don't configure thinking budgets. The app handles these decisions based on the model you picked and the query you sent. You can toggle adaptive thinking on or off in the model selector on some models, but that's about the extent of it. If you find yourself wanting more control, you're outgrowing claude.ai and you probably want Claude Code or the API for what you're building.

**One practical note that applies across all three:** prompting still works. If the model is thinking too much or not enough, you can steer it with a sentence in the prompt. "Think carefully through this before responding" pushes the model toward more reasoning. "Keep your response brief and skip the analysis" pushes it the other way. The API, Claude Code, and claude.ai all respect the prompt, which means the same nudge works regardless of where you are.

The bottom line: pick the environment that matches the level of control you need. Hands on the dials? API. Hands on a slider? Claude Code. Hands off? claude.ai. Each one is good for what it is. You just have to match the tool to the job.

## What this means going forward

If you made it this far, here's what actually sticks.

Effort and thinking are still two different things, even on Opus 4.7. Effort is how many steps Claude takes and how ambitious it's allowed to be. Thinking is whether and how hard the model reasons before responding. Holding them separately in your head is the fastest way to diagnose why a response feels off.

Opus 4.7 didn't remove thinking. It removed your ability to tune it independently. You can still turn it on or off, but once it's on, the model decides how much to use and effort becomes the dial that shapes that choice. This is a tradeoff. You get simpler, better defaults. You lose the precision of the old manual budget.

The older models (Opus 4.6, Sonnet 4.6) still support the old way, but the old way is deprecated. Haiku 4.5 runs on the old fixed-budget pattern because it's the first Haiku to have thinking at all. The direction is clear: the lineup is moving toward the 4.7 model, where effort is the main dial and thinking is a switch.

**A few practical takeaways:**

- Start at `high` effort for most work and adjust from there. Don't default to `max`.
- If you're on Opus 4.7, turn thinking on for anything non-trivial. It's off by default.
- If a response feels shallow, raise effort before anything else.
- If a response feels too slow or too expensive and you don't need the depth, lower effort.
- Use prompting to nudge thinking up or down when you need finer control.
- Match the environment to the level of control you want. API for full control. Claude Code for the middle ground. claude.ai when you want the app to just handle it.

{{< space "1.5rem" >}}

The open question worth sitting with is this. Anthropic bet that the model knows better than you do how much to think. OpenAI made a similar bet with its reasoning models. Google went the other way and still lets you set a specific thinking budget. Whose approach is right is something we'll find out over the next year or two. For now, if you're building on Claude, the direction is clear: the dials are getting simpler, and the model is taking on more of the decisions that used to be yours.

Whether that feels like a win or a loss probably depends on whether you knew what to do with those dials in the first place.

<!-- References Here (If any) -->s
[^1]: Anthropic. "Effort." Claude API Docs. https://platform.claude.com/docs/en/build-with-claude/effort
[^2]: Anthropic. "Adaptive thinking." Claude API Docs. https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking
[^3]: Anthropic. "What's new in Claude Opus 4.7." Claude API Docs. https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7
[^4]: Anthropic. "Best practices for using Claude Opus 4.7 with Claude Code." claude.com. https://claude.com/blog/best-practices-for-using-claude-opus-4-7-with-claude-code
[^5]: Anthropic. "Building with extended thinking." Claude API Docs. https://platform.claude.com/docs/en/build-with-claude/extended-thinking
[^6]: Anthropic. "What's new in Claude 4.5." Claude API Docs. https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-5
[^7]: Anthropic. "Model configuration." Claude Code Docs. https://code.claude.com/docs/en/model-config