---
title: "Product building with AI dev tools"
date: "2025-06-01"
---

> Upon marriage, a couple might be required by the laws of the country they reside in or originate from
> to choose a surname for their marital union, or they may simply wish to share a common surname.
> **Surname blending** refers to the practice of combining two existing surnames to create a new one. 
> However, this is not always possible, or the extent to which it can be done may not align with the couple’s preferences.
> To address this, I thought of creating a web app where, based on the legal framework and traditions of a given country, couples could explore possible surname combinations.

**TLDR;** 🔗 [https://surname-blend.com/](https://surname-blend.com/) 💗

This was the product idea I had, and instead of building it manually, like 2024-Me would have done, the current Me used AI dev tools to get it done in a weekend sprint.

Previously, I tested one of the most popular AI dev tools, [Lovable](https://lovable.dev/), on another weekend project idea. Back then, I had spent six months implementing that concept, and unsurprisingly, while the backend, data, and infrastructure parts were completed, I struggled to build the user interface I envisioned. My frontend skills just weren’t strong enough to bring my vision to life in a way that satisfied me.

But when I prompted Lovable to build the same idea, it didn’t take long—after just a few hours of refining the generated code, I had a **working product**! Most importantly, the UI that the AI built was good enough for my needs, and it saves me a lot of time.


I decided to jump straight into using AI for this new project: a **surname blending app for married couples**. But this time, I chose [Bolt](https://bolt.new/), another popular AI dev tool comparable to Lovable.



I fed Bolt the product idea I mentioned at the beginning, and within minutes, it generated a fully functional **React-Vite web app**, complete with a preview. I liked Bolt's initial output, and expanded on it by integrating **LLM-powered research** to fetch the legal frameworks and cultural traditions around surnames for married couples for any given country.

I then proceed to use the response from the LLM to create rules to process a couple’s original surnames and generate all legally/culturally valid combinations for their chosen country. I used the LLMs [Gemini from Google](https://ai.google.dev/gemini-api/docs/models#gemini-2.0-flash) 
and [Meta's Llama](https://ollama.com/library/llama3.3:70b) and accessed them via the 
[Google Gen AI SDK](https://www.npmjs.com/package/@google/genai) and [Groq SDK](https://www.npmjs.com/package/groq-sdk). Both SDKs offer free API keys and a generous amount of credits that can be used to explore their various LLMs.

Finally, I deployed the app under a **brand-new domain** (purchased impulsively at the start of development and thankfully, with no regrets this time!). The entire process, from idea to launch, took just 24 hours, and the result is now live at:

🔗 [https://surname-blend.com/](https://surname-blend.com/)