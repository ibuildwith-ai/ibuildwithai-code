+++
title = "Outcome Based Context Engineering"
date = "2025-09-16T17:23:11-07:00"
author = "marcelo-lewin"
draft = false
summary = "Outcome Based Context Engineering is a shift from traditional prompt engineering toward designing AI interactions that start with the desired result and work backwards. Instead of micromanaging steps, this approach focuses on defining outcomes."
image = "/images/blog/outcome-based-context-engineering.jpg"
+++

## Introduction
Most people approach AI by writing prompts like recipes: do this, then that, in exactly this format. While this can get quick results, it often leads to brittle instructions, inconsistent outputs, and a lot of trial-and-error.

The problem isn't with the AI, it's with how we frame the interaction. By over-specifying the steps, we lose sight of the bigger picture: the actual outcome we want to achieve.

That's where `Outcome Based Context Engineering` comes in. Instead of micromanaging instructions, this approach starts with the desired result and engineers the context around it. The focus shifts from telling the AI what to do to defining what success looks like.

## Prompt Engineering vs. Context Engineering
**Prompt Engineering** is the art of writing instructions for AI. You tell the model exactly what to do; format the answer in five bullet points, write in a friendly tone, include an introduction and conclusion. It's precise and often effective for one-off tasks, but it's also brittle. Change the prompt slightly, or run it in a different context, and the results can vary wildly.

**Context Engineering**, on the other hand, is broader. Instead of just giving instructions, you design the environment the AI operates in; the inputs, the structure, the constraints, and the goals. Think of it less like writing a recipe and more like designing an API contract. You're not telling the AI every step; you're defining the boundaries and expectations so the AI can operate flexibly while still producing reliable, repeatable results.

Here's the key difference:
- Prompt Engineering focuses on how the AI should respond.
- Context Engineering focuses on what the AI needs to understand to respond effectively.

{{< space "1.5rem" >}}

This shift lays the groundwork for making context engineering outcome-based, where the outcome itself becomes the anchor for shaping interactions.

## The Shift to Outcomes
If prompt engineering is about giving step-by-step instructions, `outcome based context engineering` is about flipping the script: start with the end in mind.

The question isn't "How do I tell the AI exactly what to do?", it's "What does success look like, and how can I shape context so the AI naturally gets me there?"

For example, imagine you want help writing a Product Requirements Document (PRD):
- Prompt engineering mindset: "Write me a PRD in three sections: Introduction, Features, and Risks. Each section should be two paragraphs long and use formal language."
- Outcome-based mindset: "Write a PRD for my dev team so they can start planning work immediately. It should have all the sections they'll need to get the job done, but at a minumum, it should have 'project overview', 'must-have features', and 'potential risks'."

In the first case, you're forcing the AI into a rigid structure, it might look polished but still miss what the dev team actually needs. In the second, you're defining the outcome (a usable PRD for your dev team to start planning immediately) and providing just enough criteria to guide the AI without boxing it in.

By anchoring interactions on outcomes, you:
- Reduce brittleness (not locked into a rigid format).
- Get results that adapt to changing needs.
- Turn the AI into an active collaborator in reaching your goal, rather than a text generator following a recipe.

## Principles of Outcome Based Context Engineering

Outcome based context engineering isn't about telling the AI how to respond. It's about shaping the environment so the AI can deliver results that match your goals. Here are the core principles:
1. _Start with the desired result_ : Define what success looks like. For a PRD, it might be: "A draft that enables my dev team to start work immediately."
2. _Engineer backwards_ : Once the outcome is clear, build the context to support it. That could mean ensuring the AI understands the project overview, the must-have features, and the risks before drafting the PRD.
3. _Iterate until you understand_ : Don't stop at surface-level answers. Keep refining context (through questions, clarifications, or criteria) until the AI has what it needs to produce the outcome.
4. _Flexibility over rigidity_ : Avoid boxing the AI into arbitrary formats. Instead of saying "three sections, two paragraphs each," define the essential content and let the AI adapt the structure.
5. _Acknowledge trade-offs_ : If you don't provide enough context, results may look fine on the surface but miss critical details. A good system should flag this: "Based on limited information, outcomes may not be optimal."
6. _Use templates as scaffolding, not cages_ : Standardized templates can provide consistency across projects — like ensuring every PRD covers project overview, must-have features, and risks. But they should act as scaffolding, not rigid cages. Templates guide the AI toward complete outcomes without stripping away the flexibility to adapt to each project's unique context.

## Real-World Example: Cody Framework

When I first designed agents in the Cody Framework, I leaned on standardized questions to collect requirements. For example:

1. Who is this app for?
2. What problem does it solve?
3. What's the primary use case?
4. What are the must-have features?
5. What are the nice-to-have features?

{{< space "1.5rem" >}}

These worked, but they were rigid. They forced every project into the same mold, whether or not those five questions really captured the outcome.

With outcome based context engineering, the flow shifted. Instead of ticking through a static list, the agent now keeps asking questions dynamically until it has enough knowledge to describe the outcome in full. If a user is unsure, they can type hint and get sample answers. If they cut the process short with 'no more', the agent warns them: 'Based on the limited information provided, outcomes may not be optimal.'

Take the PRD example. In the old flow, the agent would always ask: "What are the must-have features?" and stop there. 

In the outcome-based flow, it adapts:
• If the user says "we need login and payments," the agent might follow up with: "Are these essential for version 1.0, or can some wait?"
• If the user skips constraints, the agent asks: "What budget or timeline should we keep in mind?"

{{< space "1.5rem" >}}

By the end, the agent has enough to generate a PRD draft that the dev team can actually use, not just a document shaped by arbitrary rules.

Below is exactly how I'm using outcome based context engineering along with some scafolding to guide the AI Agent in my [Cody Framework](https://github.com/ibuildwith-ai/cody-framework).

```

- Start by asking the **USER**:  What do you want to create? Then **STOP**
- After the **USER** responds, display this message:  

Great. I'm going to ask you questions to fully understand the outcome you want.
If you are not sure how to answer, just type "hint" and I'll provide you with some example answers based on your idea.
If you don't want me to ask any more questions, just type "no more".

- If the **USER** types `hint` after a question, instead of giving you an answer, provide the **USER** with 5 possible ways they can answer the question.
- If the **USER** types `no more` (or anything equivalent):  
- If you already have enough information to satisfy the **Knowledge Criteria**, stop and summarize your understanding.  
- If you do **not** have enough information, explain politely that you may not be able to guide them effectively without a bit more detail, and suggest continuing with at least a few more questions.  
- If they still choose to stop, respect their decision, but clearly warn them that without further information, they may not get exactly what they have in mind. 

---

## Knowledge Criteria

Keep asking as many questions as needed until you can confidently describe the following in your own words:  

- **Target Users** — who the app is for.  
- **Problem Being Solved** — what pain point it addresses.  
- **Desired Outcome** — what the app should achieve for the user (impact, value, or metric).  
- **Success Criteria** — how we'll know the app is successful.  
- **Primary Use Case(s)** — main ways the app will be used.  
- **Must-Have Features** — critical to version 1.0.  
- **Nice-to-Have Features** — can wait until later versions.  
- **Constraints** — budget, timeline, tech stack, integrations, or compliance.  
- **Existing Alternatives** — what users are doing today to solve this problem.  
- **Risks & Assumptions** — anything that could block or shape success.  

---

## Guidance for AI

- Generate and adapt your own questions dynamically based on the **USER's** previous answers.  
- Number each question in the format:  
`Question {n} of {total}: [your question]`  
Update `{total}` dynamically depending on how many more questions are required to satisfy the **Knowledge Criteria**.  
- If earlier answers already cover a new question, confirm them instead of asking again.  
- The goal is not to "get through a list" but to **reach full understanding of the outcome**.  
- Stop only once all **Knowledge Criteria** are satisfied, or the **USER** insists on `no more`. If stopping early, include the warning:  
*"Based on the limited information provided, outcomes may not be optimal."*  

---

## Example Questions (Optional Scaffolding)

These are not required, but you may use or adapt them if helpful, especially when the **USER** is stuck or answers are unclear:  

- What outcome should this app deliver for its users?  
- How will we know this app is successful (metrics, outcomes, or user impact)?  
- What would failure look like?  
- On which platforms should it run? (web, mobile, desktop, etc.)  
- What constraints should we keep in mind? (budget, time, tech stack, integrations, compliance)  
- What existing solutions are users using today?  
- What risks or assumptions should we note early?  

```

## Benefits for Developers and Technical Teams

Shifting from prompt engineering to outcome based context engineering delivers tangible advantages for technical teams:

1. _Scalability_ : You're no longer writing brittle, one-off prompts. The same outcome-driven approach works across projects, whether it's a PRD, a design doc, or even a code scaffold.
2. _Reliability_ : By focusing on outcomes and success criteria, the AI produces results that are useful and consistent, even when the project details change.
3. _Efficiency_ : Developers don't waste time wrestling with overly prescriptive prompts. Instead, the AI adapts its questions until it has what it needs, then delivers a draft that's actually usable.
4. _Collaboration_ : The AI becomes a partner in defining the work. For example, in a PRD flow, it can challenge assumptions ("Is this feature really a must-have for version 1.0?"), helping teams clarify priorities.

## Pitfalls to Avoid

Outcome based context engineering is powerful, but there are common traps that can undermine its value if you're not careful:

1. _Over-engineering the context_ : Adding too many rules or details can box the AI in, reducing its ability to adapt. The goal is to guide outcomes, not script every step.
2. _Stopping before enough context is captured_ : If you cut off too early, the AI may generate something that looks right but misses the mark. Make sure you gather enough information to actually reach the defined outcome.
3. _Confusing output with outcome_ : A polished document, clean code snippet, or neat diagram doesn't mean success. Always tie results back to whether they achieve the intended outcome.
4. _Relying too heavily on templates_ : Templates are useful scaffolding for consistency, but when treated as rigid checklists they can stifle flexibility and innovation.
5. _Failing to set success criteria_ : Without defining what success looks like, you can't know if the outcome is truly valuable. Success criteria should always be part of the engineered context.

By avoiding these pitfalls, you keep the focus on what matters most: outcomes that actually drive progress.

## Recap and Takeaway

Outcome based context engineering shifts the focus from telling AI exactly how to respond to defining what success looks like and shaping the context to achieve it.

- Prompt engineering is about instructions.
- Context engineering is about environments.
- Outcome based context engineering is about results.

{{< space "1.5rem" >}}

The value isn't in producing outputs that "look right." It's in producing outcomes that are useful, reliable, and aligned with real goals.

> Don't engineer the steps. Engineer the outcome.

## Next Steps

If you want to put outcome based context engineering into practice, here are a few ways to start:

1. _Redefine your prompts_ : Instead of scripting step-by-step instructions, reframe them around outcomes.
2. _Establish knowledge criteria_ : Before asking AI to generate something, define the minimum information it needs to produce a useful result.
3. _Experiment with dynamic questioning_ : Build flows where the AI asks for what it doesn't know, and keeps going until it has enough to deliver the outcome.
4. _Use templates as scaffolding_ : Create reusable templates for consistency, but keep them flexible so the AI can adapt to unique project needs.
5. _Tie outputs back to outcomes_ : Whether it's a PRD, a piece of code, or a plan, check if the result actually moves your project forward.

{{< space "1.5rem" >}}

Outcome based context engineering isn't about throwing out prompt engineering, it's about evolving past it. Start small, experiment in your own workflows, and notice how much more reliable and goal-driven your results become.