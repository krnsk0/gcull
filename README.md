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

You'll of course need a working version of `git` in your path.

To start:

```bash
gcull
```

# Development

The `dist` directory is committed to avoid a need for a post-install script when the package is installed globally. The `build` command will re-generate it. The `run` command is intended to allow rapid development through execution of the tool when builds complete; no watch command is provided. Tests use `vitest` (without `vite`).
