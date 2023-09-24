> Interactive git branch deleter

```text
                   _ _
   __ _  ___ _   _| | |
  / _` |/ __| | | | | |
 | (_| | (__| |_| | | |
  \__, |\___|\__,_|_|_|
  |___/
```

![Coverage lines](./static/badge-lines.svg)
![Coverage functions](./static/badge-functions.svg)
![Coverage branches](./static/badge-branches.svg)
![Coverage statements](./static/badge-statements.svg)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## What is this?

Interactive CLI tool. Shows a list of local branches; you pick which ones to delete.

## Installation

Requires `node` > v18

```bash
npm i -g gcull
```

## Usage

You'll need a working version of `git` in your path.

To start:

```bash
gcull
```

 Already-merged branches are selected by default, but can be de-selected. The current branch will be disabled in the menu. It's best to check out `main`/`master` and to fetch the latest commits before invoking this tool.
