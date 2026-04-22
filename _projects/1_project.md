---
layout: page
title: Models of Humans for Adjudicating AI Debate
description: understanding how people judge AI debates
img:
importance: 1
category: ongoing
related_publications: false
---

This project studies how humans actually make decisions when judging AI debates. While AI systems are increasingly trained using human feedback, most existing approaches treat human judgments as if they were consistent and reliable. In practice, however, people are influenced by how arguments are presented, not just what is true. This direction is inspired by work on AI debate {% cite irving2018ai %} and by findings that even expert judges rely on intuitive, context-dependent reasoning {% cite guthrie2007blinking %}.

In prior work, we presented a [data blueprint]({{ '/assets/pdf/data-blueprint-adjudicating-debate.pdf' | relative_url }}) for collecting structured debate data that captures three key components: the full dialogue between debaters, the evidence they use, and the reasoning behind the final judgment. This shifts the focus from single, isolated decisions to the full process through which judgments are formed over time. Alongside this, we built a [data generation pipeline](https://github.com/estherliu02/debate) to simulate debates and systematically vary aspects such as argument structure and presentation, enabling controlled study of human decision-making.

Currently, we are running experiments to understand how specific biases influence adjudication outcomes. Rather than assuming that judges behave rationally, we explicitly test how small changes—such as assigning the same type of argument to different sides—affect decisions. We analyze these patterns using a statistical model that compares outcomes across conditions, allowing us to isolate whether a given bias consistently favors one side. In simple terms, we ask: if the same “advantage” is moved from one side of a debate to the other, does the winner change? This helps quantify how much human judgments are shaped by presentation and context, rather than purely by the underlying quality of arguments.

Looking forward, the goal of this project is to build realistic models of human adjudication that can be used to better evaluate and train AI systems through debate. More broadly, we aim to make AI debate a more reliable and trustworthy evaluation framework by grounding it in how humans actually judge arguments in practice, rather than assuming an idealized judge. We are targeting a first version of this project by September 2026, including a full dataset, analysis, and a modeling framework for human decision-making in AI debate.
