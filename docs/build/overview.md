---
sidebar_position: 1
---

# CLI

`topos` is the unified CLI tool to interact with the Topos network. The different processes are runnable through this utility.

## Installation

:::info
The first step is to install Rust along with `cargo` by following the instructions [here](https://doc.rust-lang.org/book/ch01-01-installation.html#installing-rustup-on-linux-or-macos).
:::

Then, run:

```
cargo install topos --git https://github.com/toposware/topos --locked
```

Try out `topos`!

```
topos --help
```

## Usage

`topos` includes the subcommands to run the different type of processes.

### Run one Sequencer

You can run as Sequencer for your subnet with the following command:

```
topos sequencer run --subnet-id <subnet id> --base-tce-api-url http://[::1]:1340
```

> The exhaustive list of arguments is visible with `topos tce sequencer --help`.

### Run one TCE local setup

One pre-made setup is available with `docker compose`.

First, you will need the setup from the `topos` repository.

```
git clone https://github.com/toposware/topos.git
```

Then, run the setup from the `tools/` directory:

```
cd tools
docker compose up -d
```

Then, the different running components are visible with `docker compose top`.

More information on the Topos Docker setup are available [here](https://github.com/toposware/topos/tree/main/tools#docker).
