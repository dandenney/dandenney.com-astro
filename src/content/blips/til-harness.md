---
summary: Sharing a GPT explanation of harness
title: TIL Harness
pubDate: '2025-12-21'
---

I was catching up on Ben's Bites, which had this paragraph. 

> People are just realizing that “Harness is the new app” but this was very clear early this year when we saw Claude and Gemini play pokemon. We’ve been talking about it since May but it’s gaining even more momentum now. Cursor is talking about improving their harness for Codex models and Poetic used a custom harness Gemini 3 Pro to get the best score on ARC-AGI 2.

I could infer a bit, but I hadn't heard the term harness for AI agents yet, so I asked ChatGPT. Sharing this because it was such a good explanation and I literally laughed out loud at "The harness is everything that stops it from lighting your house on fire while “optimizing.”"

> In AI agent land, a harness is basically the rig that keeps the agent useful instead of feral.
>
> More concretely, an agent harness is the surrounding system that wraps, constrains, observes, and directs an AI agent so it can operate safely and predictably in the real world.
>
> Think of it like this
>
> The model is the brain.
> The agent is the brain plus goals and actions.
> The harness is everything that stops it from lighting your house on fire while “optimizing.”
>
> What a harness usually includes
>
> 1. Inputs and outputs
>
>What data the agent can see
> 
> How prompts are structured
> 
> How responses are parsed or validated
> 
> 2. Tools and permissions
> 
> Which tools it can call (APIs, files, browsers, databases)
> 
> Guardrails on those tools. Read-only vs write. Rate limits. Sandboxes.
> 
> 3. State and memory
> 
> Short-term context
> 
> Long-term memory storage
> 
> Rules for what gets remembered or forgotten
> 
> 4. Control flow
> 
> When the agent is allowed to act
> 
> When it must ask for approval
> 
> Retry logic, fallbacks, and timeouts
> 
> 5. Constraints and policies
> 
> System rules
> 
> Safety filters
> 
> Business logic
> 
> Cost limits. The CFO’s favorite feature.
> 
> 6. Evaluation and monitoring
> 
> Logging decisions and tool calls
> 
> Scoring outputs
> 
> Detecting hallucinations or drift
> 
> Alerting when things go sideways
> 
> Why people bother with harnesses
> 
> Without a harness, an “agent” is just vibes and API calls. With a harness:
> 
> You get repeatable behavior
> 
> You can test it
> 
> You can debug it
> 
> You can turn it off quickly, which is underrated
> 
> Real-world examples
> 
> A coding agent whose harness limits file access and requires tests to pass
> 
> A research agent whose harness verifies sources before returning answers
> 
> A marketing agent whose harness enforces brand voice and legal rules
> 
> A UI automation agent whose harness says “absolutely not” to prod data
> 
> Skeptical take
> 
> If someone says they “built an AI agent” and can’t explain the harness, they probably built a prompt and a dream.
> 
> If you want, I can map this to something concrete like LangChain, OpenAI Assistants, AutoGen, or how you’d design one for a front-end or product workflow.