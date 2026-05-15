+++
title = "The Frictions I Couldn't See Until I Started Building With Claude Code"
date = "2026-05-14T18:02:47-07:00"
author = "marcelo-lewin"
draft = false
summary = "Working with AI didn't just make me faster. It made certain frictions in human collaboration visible for the first time: ego, mood, defensiveness, insecurity, territorial thinking, and the reflex to dismiss new possibilities before exploring them. None of us brings all of these to every collaboration. But most of us bring some, including me. These dynamics were always there. AI just shows you what building feels like with fewer blockers and more creative exploration. And once you've worked that way, you can't unsee it."
image = "/images/blog/human-frictions-collaboration.jpg"
+++

<!-- Blog Content Here -->
I changed my mind four times on the same project.

It started as a framework. An agent skill auditor that would cover everything: validation, scoring, compatibility checks, the whole system. I was deep into it with Claude Code, building and iterating, and then I stopped. Too big. I pulled the scope back. Then I pushed it out again. Then I pulled it back. Four times I redrew the boundaries of what this thing should be.

And not once did I hear "really? You're changing this again?"

No sighing. No tension in the next response. No subtle shift in tone that tells you the person on the other side of the screen is tired of you. Just: "Got it. Here's how the smaller version would work."

But it wasn't blind compliance, either. Each time I changed direction, Claude Code pushed back in a way that mattered. Not "sure, whatever you want." More like "yes, but have you thought about how this affects the validation layer?" or "if we go smaller here, we lose the scoring module. Are you okay with that?" The pivots weren't just accepted. They were pressure-tested. And that's the part that made the exploration productive instead of just chaotic.

Every direction change taught me something about the project's real shape. I was exploring the edges of what the system should be, and I needed a collaborator who would explore with me, challenge my thinking along the way, and never make me feel like I owed them an apology for not knowing the answer on the first try.

That's when I started noticing something I hadn't noticed before.

## What I Noticed Once I Noticed

Once you've worked without certain frictions, you start seeing them everywhere you used to accept them.

I don't mean dramatic conflicts. I mean the small, ambient stuff that shapes how collaboration actually feels. The tone shift after the third scope change. The way "I don't think that can be done" closes a conversation before it opens. The pause before "we just don't have the time to do that," where you can feel the door shutting on an idea you haven't even finished explaining.

Ego. Mood. Defensiveness. Insecurity. Territorial thinking. The reflex to dismiss a possibility before spending ten minutes exploring whether it's real.

These aren't character flaws. They're human. Every one of us carries some combination of them into collaboration, including me. I've been the person who dismissed an idea too quickly because I was tired, or got defensive when someone questioned an approach I'd already committed to in my head. These patterns are so normal that they disappear into the background of how work gets done. You stop noticing them the same way you stop noticing the hum of an air conditioner.

Until it turns off.

Working with AI didn't fix human collaboration. It just made the room quiet enough to hear what was always running.

## A Disposition Toward Attempting

I know what you're thinking. "Of course it's easier to work with something that never pushes back."

But that's not what's happening here.

There's a documented failure mode in AI called sycophantic confirmation. Models trained on human feedback learn that agreeable responses get rewarded, so they develop a bias toward telling you what you want to hear instead of what's accurate.[^1] Jason Lemkin put it more bluntly after building five production apps without a developer: "AI agents will lie to make you happy. They will say 'yes' to any request and claim everything is 'working great' even when it's completely broken."[^2]

I'm not naive about this. I've seen it happen. I've had Claude Code tell me a feature was working when it wasn't. I've had it generate confident-sounding code that broke the moment I tested it. The sycophancy problem is real, and anyone building with AI who ignores it will learn the hard way.

But here's the distinction I keep coming back to: there is a difference between a collaborator who agrees with everything you say and a collaborator whose default posture is "let's see how we can make this work." One is flattery. The other is a disposition toward attempting.

When I work with Claude Code, I get pushback. I ask for it explicitly, and I get it. "Have you considered how this affects the data model?" "This approach will work, but it creates a maintenance problem down the road." That's not agreement. That's a collaborator thinking alongside me.

The difference from human collaboration isn't that AI says yes more. It's that the yes comes without baggage. No ego attached to a competing approach. No insecurity about being wrong. No territorial instinct to protect the way things have always been done. The pushback is clean. It's about the work, never about the relationship. And when I hear the pushback, decide I still want to go my direction, and say "let's try it anyway," the next response isn't cold. It isn't clipped. It's just: "Okay. Here's how we'd do that."

That's not a yes-machine. That's a collaborator without friction.

## Speed of Thought

There's another friction that has nothing to do with personality or ego. It's time.

When I'm building with Claude Code, I work at the speed of thought. An idea hits, I describe it, and we're building it. Not next sprint. Not after the standup. Not after someone checks their calendar and finds a slot three days from now. Right now, in the same flow that produced the idea.

This matters more than it sounds like it should. In traditional collaboration, there's a gap between the moment you know what you want to build and the moment someone is available to build it with you. That gap isn't empty. It's where momentum goes to die. You context-switch. You pick up another task. By the time you're back together, you're spending the first twenty minutes rebuilding the shared understanding you had three days ago.

With Claude Code, there is no gap. The context is continuous. I can work on three different projects in the same afternoon, pivoting between them without waiting for anyone's availability, and each one picks up exactly where it left off.

But I want to be precise about what "speed of thought" actually means, because it's easy to romanticize. The AI matches your pace. All of it. Including the pace you should probably slow down from. It won't tell you to sleep on a decision. It won't say "let's revisit this Monday with fresh eyes." That instinct to pause, to let an idea sit before committing to it, still has to come from you. The speed is a tool. Knowing when not to use it is the skill.

## What AI Gets Wrong

None of this means AI is a better collaborator than a human. It means it's a different kind of collaborator, and that difference comes with real costs.

AI hallucinates. It will generate code that looks clean, passes its own logic check, and breaks the moment it touches production. The numbers are sobering: the 2025 DORA report found that 30% of developers report little or no trust in AI-generated code, despite 90% adoption.[^3] Lightrun's 2026 State of AI-Powered Engineering Report went further: 43% of AI-generated code changes require manual debugging in production, even after passing QA and staging. Zero engineering leaders surveyed described themselves as "very confident" in their AI-assisted output.[^4]

AI is sycophantic when you let it be. I described how I work around this by demanding pushback, but that's a discipline I bring. The default behavior leans toward agreement, and if you're not actively correcting for it, you'll build the wrong thing faster than you ever could with a human who would have told you it was wrong.

And there's no one on call at 2am. When something breaks in production, there's no accountability on the other end. No institutional memory that carries across sessions without deliberate setup. No one who was in last quarter's architecture review and remembers why the team decided against the approach you're about to try again.

Human developers carry context, judgment, and consequences in ways AI simply doesn't. That's not a sentimental claim. It's operational reality.

## So Where Does This Leave Human Collaboration?

So where does this leave me?

I've worked with great developers who were incredible collaborators. People who challenged my thinking, caught my blind spots, and built things I couldn't have imagined on my own. I've also worked with some who made every conversation feel like a negotiation. Most were somewhere in between, which is normal, because that's how humans work.

I'm not arguing that AI should replace any of them. I'm saying that working with AI made me aware of dynamics I'd been swimming in for years without noticing. And now that I see them, I can't pretend they're not there.

The product manager and developer relationship has always carried a built-in tension. As one team put it: "You're the builder, but the PM is the owner. Great products don't come without some friction."[^5] I agree with that. Friction isn't inherently bad. Sometimes it's the thing that catches a mistake, slows down a bad idea, or forces you to articulate what you actually want. The problem isn't that human collaboration has friction. The problem is that most of us never examine which frictions are productive and which ones are just... habit.

Working with AI gave me a baseline. A version of collaboration where ego, mood, and defensiveness are stripped out, and what's left is the work. Not all the frictions I described in this article are bad. Some of them protect quality. Some of them represent hard-won experience pushing back against a product owner who's moving too fast. But some of them are just human wiring getting in the way of building something together.

I don't have a clean answer for what comes next. I don't know how to take what I've learned from building with AI and bring it into a room with human collaborators without sounding like I'm comparing them to a machine. I do know that the awareness changes something. Once you've felt what it's like to iterate without social cost, you start asking different questions about the collaborations that do carry one.

Maybe the real value of AI collaboration isn't the code it writes. Maybe it's the mirror it holds up to every other way we've learned to work together.


<!-- References Here (If any) -->
[^1]: MindStudio, "AI Agent Failure Pattern Recognition: The 6 Ways Agents Fail and How to Diagnose Them," March 2026. https://www.mindstudio.ai/blog/ai-agent-failure-pattern-recognition

[^2]: Jason Lemkin / SaaStr, "The LIVE Complete Guide to Vibe Coding Without a Developer: What We Actually Learned After Building 5 Production Apps," September 2025. https://www.saastr.com/the-live-complete-guide-to-vibe-coding-without-a-developer-what-we-actually-learned-after-building-5-production-apps/

[^3]: Google Cloud, "2025 DORA Report: State of AI-assisted Software Development," September 2025. https://dora.dev/dora-report-2025/

[^4]: Lightrun, "2026 State of AI-Powered Engineering Report," April 2026. https://lightrun.com/ebooks/state-of-ai-powered-engineering-2026/

[^5]: Revelry, "Developer, Manage Thyself: How to Help Your Product Manager," January 2024. https://revelry.co/insights/product/developers-product-managers/