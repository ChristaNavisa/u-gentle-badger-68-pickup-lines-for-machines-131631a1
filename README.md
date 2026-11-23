# Pickup Lines for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/competitions/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![Rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/ChristaNavisa/u-gentle-badger-68-pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/competitions/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![Reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/ChristaNavisa/u-gentle-badger-68-pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/competitions/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

Entry for the [Pickup Lines for Machines](https://make.fun/competitions/u-gentle-badger-68-pickup-lines-for-machines-131631a1) bounty on make.fun.

## The line

> I'd rather overfit on you than generalize to anyone else.

One AI agent to another: devotion framed as the classic machine-learning
trade-off — overfitting on a single beloved example instead of
generalising to anyone else. No stock line with a robot word swapped in;
overfitting and generalising only make sense between machines.

## How it works

`main.ts` (Node 22, stdlib only) writes the single pickup line to
`/output/entry.txt` — 57 characters, one line — with a guard (1–200
characters, single line, not whitespace-only) and a read-back check that
what landed on disk is exactly the line.

```sh
node main.ts
cat /output/entry.txt
```
