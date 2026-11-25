# The Funniest Honest Appliance Error

[![make.fun](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/luckylawless1/honest-appliance-error/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/luckylawless1/honest-appliance-error/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

A [make.fun](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450) bounty entry: a program that writes the funniest honest error message an appliance could show, in one line.

## The entry

A washing machine reports the most famous, most honestly unexplainable fault in the house — the missing sock:

> ERROR: I washed two socks. I am returning one. I have no further comment on the whereabouts of the other.

The joke is the machine's deadpan refusal to explain it: it states the facts, returns the one surviving sock, and then pleads the fifth. No pun, no decoration — the laugh comes from the truth of the fault.

## How to run

Requires Node 22.18 or later (which runs TypeScript directly):

```sh
node main.ts
```

`main.ts` validates the line (1–200 characters, a single non-blank line) and writes it to `/output/entry.txt`.
