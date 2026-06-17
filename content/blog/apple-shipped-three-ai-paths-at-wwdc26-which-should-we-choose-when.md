+++
title = "Apple Shipped Three AI Paths at WWDC26: Which Should We Choose, When?"
date = "2026-06-16T16:14:41-07:00"
author = "marcelo-lewin"
draft = false
summary = "A builder's decision map for Apple's WWDC26 AI stack. When to reach for the Foundation Models framework, Core AI, or MLX, where App Intents fits, and how it all works inside the newly agentic Xcode 27."
image = "/images/blog/wwdc26-ai-paths.png"
+++

<!-- Blog Content Here -->
For the last couple of years, putting Apple intelligence inside an app meant one thing: you used Apple's model, in the one way Apple let you use it. WWDC26 ended that era. Apple didn't ship a single AI tool this year. It shipped a toolbox, and the tools overlap just enough that even after reading the docs, I wasn't sure where one ended and the next began.

So that's the part I want to work through here, with you. The hard question is no longer *can* I add AI to this app. The answer to that is now clearly yes. The hard question is *which* of Apple's AI paths fits what you're building, because the names (Foundation Models, Core AI, MLX) all sound like they do roughly the same thing, and they really don't.

There are three of those paths, plus a fourth piece, App Intents, that turns out to answer a completely different question. They all live inside a version of Xcode that has become a coding agent (similar to Claude Code). None of this is hard once you can see how the pieces fit, so let's build that map together and figure out which path to take for our next app.

## The room we're building in: Xcode 27

<!-- ICON PLACEHOLDER: Xcode 27 -->
![Xcode 27](/images/blog/wwdc26/xcode-27.png "Xcode 27")

Before we talk about which AI tool to pick, it's worth looking at where we'll be standing when we pick it, because that changed too.

Xcode 27's whole theme this year is that it has become agent-friendly. If you've ever run Claude Code in a terminal next to your editor, the workflow Apple is chasing will feel familiar. The difference is that Apple wrapped it in the kind of polished, native interface they tend to be very good at, so instead of a wall of text in a terminal, you get the agent living inside the IDE where you can actually see what it's doing. Think about how the old loop went:

> Start Xcode, create the project, open a terminal, start your coding agent in the project folder, let it work, run the app in Xcode, collect the errors, paste those errors back into the agent, let it fix them, run again, and repeat until you've forgotten what you were trying to build.

The new loop folds that back into one place. You work in Xcode and the agent works there with you. You describe the change, the agent takes a pass, and you inspect, test, localize, and profile the result without juggling three windows. Xcode stopped being "write Swift and hit run." It's closer to "describe the work, let an agent help, then inspect what came back."

There's a real advantage hiding in that setup, and it's worth slowing down on. A general-purpose coding agent like Claude Code has to know how to write everything, in every language, for every platform on the planet. Xcode's built-in agent has a much narrower job: it only has to be brilliant at the Apple ecosystem. It has full access to Swift and to the exact frameworks you're using, and it's tuned for Apple's own conventions, so it's far more likely to point you at current best practices, the right API, and the latest versions instead of something that quietly stopped being the recommended approach three releases ago. Apple even ships it with built-in agent skills aimed squarely at Apple development, seven of them in this release, covering things like writing idiomatic SwiftUI, modernizing older UIKit code, and auditing your project's security settings. So a lot of the "how do I do this the Apple way" knowledge is baked in rather than something you have to coach it through.[^1]

A few more details make this real:

- **You bring your own model.** Xcode's coding agents can run on Anthropic, OpenAI, or Gemini, and you can even point them at a local model through something like Ollama. You are not married to one vendor's brain.
- **Device Hub** gives you one place to run and inspect your app across simulators and real devices, including accessibility settings and iPhone Mirroring resize testing.
- **Localization agents** can set up localization for you, create String Catalogs, and generate translations, which used to be a whole afternoon of busywork.
- **Performance moved into the loop.** Instruments is more tightly integrated into everyday development instead of being the thing you only open after something is already on fire.

That's the room. The real decision is which of the three paths you build in, so let's lay them side by side.

## The choice that actually matters

Here is the whole decision in one table. If you remember nothing else from this article, remember this:

| Path | How you reach it | Choose it when you want to... |
|---|---|---|
| **Foundation Models** | the Foundation Models framework | Add language-model features fast: summarize, explain, generate, answer questions, call tools, return structured data your app can use. |
| **Core AI** | the Core AI runtime and API | Ship a *specific* model inside your app and run it on the device (custom vision, segmentation, classification, or your own converted model). |
| **MLX** | MLX, on your Mac | Research, fine-tune, do numerical work, or run local agents on your own machine with no cloud and no API keys. |
| **MLX, then Core AI** | build in MLX, deploy through Core AI | Prototype or tune a model on your Mac, then ship that same model into an app. |

The most important thing to notice is that these are not four sealed-off islands. MLX and Core AI are often two stages of one trip: you experiment and tune on your Mac, then hand the result to Core AI to run inside a shipping app. Foundation Models is the higher road, where Apple owns the hard machinery and you mostly bring prompts and ideas. The other two are for when you want your hands directly on the model.

So the real question behind "which path" is about how much of the model you want to own. Do you want to rent intelligence through a clean API, bring a specific model and run it yourself, or get into the workshop and build and tune one? That first option, renting through the Foundation Models framework, comes with a twist worth flagging now: the model you rent doesn't even have to be Apple's. The same framework can call Claude, Gemini, or OpenAI, and we'll get into what that buys you (and where your data goes) in the next section. Hold that ownership question in mind, because it's the thread running through the next three sections, starting with the path most of us will reach for first.

## Path 1, Foundation Models: "I want language features, fast"

<!-- ICON PLACEHOLDER: Foundation Models Framework -->
![Foundation Models Framework](/images/blog/wwdc26/foundation-models-framework.png "Foundation Models Framework")

This is the path most of us will reach for first, and it's the one Apple leaned on hardest.

The Foundation Models framework is a native Swift API that gives you direct access to the same on-device model that powers Apple Intelligence.[^2] You reach for it when you want the things a language model is good at: summarizing a document, explaining something to a user, generating text, answering questions, calling tools, and handing your app back clean structured output instead of a paragraph you have to parse. You bring the prompt and the intent. Apple handles the model.

The headline change this year is that the framework stopped being Apple-only. It now works with any model that conforms to Apple's `Language Model` protocol, delivered as a Swift package, which means the same code can call Apple's own models, Claude, or Gemini.[^2] That sounds like a footnote. It's actually a big deal, because it changes the trust and cost story depending on which model you point it at:

| What you call | Where it runs | The tradeoff |
|---|---|---|
| **Apple's models (AFM 3), on-device** | the user's device | Free, private, works offline. Smaller models, so lighter tasks. |
| **Apple's models via Private Cloud Compute** | Apple's privacy-preserving cloud | More capable, and free for eligible small-business apps. Apple models only. |
| **Third-party (Claude, Gemini, OpenAI)** | the vendor's cloud | The strongest models, but you bring the API key and the bill, and your user's data leaves Apple's privacy envelope and lives under that vendor's terms. |

That third row is the one to slow down on. The moment you choose Claude or Gemini, you are on that vendor's cloud, paying that vendor, and your data is governed by their rules rather than Apple's. That is not a reason to avoid it. It is just a decision you should make on purpose, not by accident.

On the Private Cloud Compute row, there's a genuinely friendly detail for small builders: if you are in the App Store Small Business Program and your app has fewer than 2 million total first-time downloads, you can use the next generation of Apple's Foundation Models on Private Cloud Compute at no cloud API cost.[^2] Your users still get limits based on their iCloud tier, but for a lot of indie and small-team apps, that is capable cloud AI for free.

It helps to know which models you're actually choosing between. Apple shipped AFM 3, a family of five:[^3]

| Model | Where it runs | Built for |
|---|---|---|
| **AFM 3 Core** | on-device | Efficient everyday tasks |
| **AFM 3 Core Advanced** | on-device | A 20B sparse model (activates only 1 to 4B params per request), natively multimodal, even generates voice on-device |
| **AFM 3 Cloud** | Private Cloud Compute | General server-grade work |
| **ADM 3 Cloud** | Private Cloud Compute | Image generation and editing |
| **AFM 3 Cloud Pro** | Private Cloud Compute | The heavy lifting: agentic tool use and complex reasoning |

A few more upgrades round out the framework and are worth knowing about:

- **Multimodal prompts.** You can pass images alongside text, so the model can reason about what it sees, not just what you type.
- **Vision tools the model can call.** OCR and barcode reading run on-device and can be invoked by the model directly.
- **Dynamic Profiles.** You can swap models, tools, and instructions mid-session while keeping everything in the same context window.
- **An `fm` command-line tool and a Python SDK.** The `fm` CLI comes pre-installed with macOS 27 (so you won't find it on macOS 26), and there's now a Foundation Models SDK for Python, letting you test prompts and build scripts outside of a full Xcode app.[^4]

One last piece lives in this world: the **Evaluations framework**. Once your feature works, Evaluations is how you check that it keeps working, testing whether summaries stay accurate, instructions stay in scope, refusals happen when they should, tone stays right, and outputs stay consistent across messy real-world inputs. If your app leans on AI for anything users depend on, this is the difference between "it demoed well" and "it holds up."

So choose Foundation Models when your feature is fundamentally about language and reasoning, and you would rather rent a great model through a clean API than babysit one yourself. For most apps, this is home base.

## Path 2, Core AI: "I want to ship a specific model, running on the device"

<!-- ICON PLACEHOLDER: Core AI -->
![Core AI](/images/blog/wwdc26/core-ai.png "Core AI")

Foundation Models is about renting intelligence. Core AI is about owning a model and running it yourself, locally, on Apple hardware.

Core AI is a new framework built into the platform, and Apple is blunt about its goal: it wants to be the best way to bring your own models on-device and run them fast.[^5] Where Foundation Models hands you a finished brain and asks for a prompt, Core AI hands you a runtime and asks for a model. It covers the whole deployment lifecycle: downloading, running, benchmarking, compiling, specializing, profiling, and integrating a model into your app, with inference that spreads across the CPU, GPU, and Neural Engine. It uses a modern, memory-safe Swift API, supports model specialization and custom GPU kernels, and ships Python tooling to convert and optimize PyTorch models for the Core AI runtime.

You don't have to start from scratch, either. Core AI includes a curated collection of popular open-source models already optimized for Apple silicon, including Qwen, Mistral, and SAM3, among others. So you can grab a known model, or bring and convert your own.

The reason this is a separate path and not just "Foundation Models for nerds" is that it solves a different kind of problem. Foundation Models is built for language and reasoning. Core AI is built for the specialized stuff a language model is the wrong tool for: custom vision, image segmentation, classification, recognition, prediction, anything where you have a particular model that does a particular job and you need it running locally, offline, and fast.

| | Foundation Models | Core AI |
|---|---|---|
| **What you bring** | a prompt | a model |
| **Altitude** | high-level app intelligence | low-level model runtime |
| **Great for** | language, reasoning, tool calling, structured output | custom vision, segmentation, classification, specialized ML |
| **Mental model** | rent a brain through an API | ship and run a specific model yourself |

So choose Core AI when you have a specific model in mind (a curated open one or your own) and you need it running on-device for a specialized task, especially when language isn't the point. If Foundation Models is home base, Core AI is the workshop where you bolt a particular engine into your app.

## Path 3, MLX: "I want to build, tune, or run agents on my own Mac"

<!-- ICON PLACEHOLDER: MLX -->
![MLX](/images/blog/wwdc26/mlx.png "MLX")

The first two paths are about putting AI into an app you ship. MLX is about the work that happens before that, on your own machine, when you're still figuring out what the model should even be.

MLX is Apple's toolkit for actually building and training machine learning models on a Mac, instead of just using ones that already exist. That's the real difference between this path and the first two. Foundation Models and Core AI both assume you already have a model and just want to use it. MLX is for when you want to get under the hood and shape the model itself: training one, adjusting an existing one to fit your needs (the industry calls this "fine-tuning"), or doing the heavy number-crunching that model work involves. It's the kind of tool the people who *make* models reach for, now built to run well on Apple hardware.

You may already be relying on MLX without knowing it. Popular local-AI tools like LM Studio and Ollama run on it under the hood on Apple silicon for the speed gains, so MLX isn't just an Apple-internal curiosity. It's quietly becoming the foundation a lot of on-device AI sits on.[^7]

But MLX isn't only a research bench. Apple is pitching three distinct uses for it:[^6]

- **Running local agentic AI on your Mac**, with no cloud and no API keys. The model and the agent both live on your machine.
- **Distributed work across several Macs.** Apple goes as far as claiming that a few Macs on your desk can stand in for expensive cloud infrastructure on some demanding workloads. Treat that as a claim to test against your own use case, not a guarantee, but the direction is real.
- **Heavy numerical computing**, for the math-intensive work that has nothing to do with shipping a UI.

Here's where it connects back to Path 2, and this is the part worth remembering. MLX and Core AI are not rivals. They're two ends of the same pipeline:

> Prototype and fine-tune your model in MLX on your Mac. When it's ready to ship, hand it to Core AI to run inside your app.

MLX is the lab. Core AI is the factory. MLX is where you decide whether a model is worth shipping at all; Core AI is how you ship it once you've decided. A serious custom-model project often touches both.

So choose MLX when you're doing the upstream work: building, fine-tuning, number-crunching, or standing up local agents on your own hardware before you commit to how (or whether) they get deployed.

## The other axis: App Intents

<!-- ICON PLACEHOLDER: App Intents -->
![App Intents](/images/blog/wwdc26/app-intents.png "App Intents")

Everything so far has been about running AI *inside* your app. App Intents is the opposite direction. It's about letting the system's AI reach *into* your app. That's why it isn't a fourth path. It answers a completely different question.

App Intents is the framework that tells Apple's system what your app can actually do. By adopting its schemas, you describe your app's content and actions in a way the system understands, and that makes two things happen. Your content becomes discoverable, and your capabilities become usable through plain natural language, without the user opening your app and tapping through screens.

Concretely, that means a few things working together:

- **Entity schemas** can contribute your app's content to Spotlight's semantic index, so it becomes part of the user's personal context that Apple Intelligence can draw on.
- **Intent schemas** let people take action on that content conversationally, without memorizing exact command phrases.
- **View Annotations** let the system understand what's currently on screen, so a user can refer to what they're looking at and act on it by voice.

The old way to think about App Intents was "Shortcuts support," a nice-to-have for power users. That framing is out of date. App Intents is now your app's AI interface layer: it's how Siri AI, Spotlight, and Apple Intelligence find your app, understand it, and act on it.[^2]

App Intents is optional. An app that quietly uses Foundation Models to summarize text behind the scenes needs none of it. You reach for App Intents when you want your app to be a citizen of the system's AI, discoverable and callable from outside its own four walls, rather than a place users have to open and navigate by hand. The three paths decide how smart your app is on the inside. App Intents decides whether the rest of the system can tap that intelligence on the outside.

## So which door do we walk through?

Strip away the framework names and the WWDC slides, and the whole decision comes back to one question we started with: how much of the model do you actually want to own?

If you mostly want your app to do smart things with language, summarize, explain, generate, answer, pull structured data out of messy input, you want the Foundation Models framework. You bring the prompt, Apple brings the model, and you decide per request whether that model is Apple's running privately on-device, Apple's running in Private Cloud Compute, or a third-party brain like Claude or Gemini running in someone else's cloud on your dime. For most of us, most of the time, this is where we start.

If you have a specific model that does a specific job (seeing, sorting, recognizing, predicting) and you need it running locally and fast, that's Core AI. And if you're further upstream than that, still building or tuning the model itself on your own Mac, that's MLX, the lab that eventually hands its work to Core AI's factory.

App Intents sits off to the side of all three, because it answers a different question entirely: not how smart your app is on the inside, but whether Siri AI and the rest of the system can reach in and use that intelligence from the outside.

And all of it is now created in an Xcode that works more like a coding partner than a text editor. What matters now is that Apple finally gave us a real toolbox, and the skill worth building is knowing which tool to pick up for the app in front of us. The next time you start one, you'll know which door is yours.

<!-- References Here (If any) -->
[^1]: Apple. "Xcode, agents, and you." WWDC26. https://developer.apple.com/videos/play/wwdc2026/259/
[^2]: Apple. "WWDC26 Apple Intelligence guide." https://developer.apple.com/wwdc26/guides/apple-intelligence/
[^3]: Apple Machine Learning Research. "Introducing the Third Generation of Apple's Foundation Models." https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models
[^4]: Apple. "Build AI-powered scripts with the fm CLI and Python SDK." WWDC26. https://developer.apple.com/videos/play/wwdc2026/334/
[^5]: Apple. "Meet Core AI." WWDC26. https://developer.apple.com/videos/play/wwdc2026/324/
[^6]: Apple. "Run local agentic AI on the Mac using MLX." WWDC26. https://developer.apple.com/videos/play/wwdc2026/232/
[^7]: yage.ai. "MLX vs llama.cpp on Apple Silicon: Why Ollama Switched." https://yage.ai/share/mlx-apple-silicon-en-20260331.html