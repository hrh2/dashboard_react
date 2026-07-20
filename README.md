# greet.sh

A small, portable Bash CLI utility that prints a friendly greeting together with the current timestamp.

Features
- Portable shebang: #!/usr/bin/env bash
- Options: --name/-n, --format/-f (iso, unix, timestamp), --help/-h
- Default uses an ISO-8601 timestamp
- Can output timestamp-only for machine consumption

Install

Make the script executable and place it on your PATH:

```sh
chmod +x greet.sh
cp greet.sh /usr/local/bin/greet
```

Usage

Basic usage:

```sh
./greet.sh
# Hello! Current time: 2026-07-20T14:03:00Z

./greet.sh --name Alice
# Hello, Alice! Current time: 2026-07-20T14:03:00Z

./greet.sh --format unix
# Hello! Current time: 1595250180

# Machine-friendly: timestamp only
./greet.sh --format timestamp
# 2026-07-20T14:03:00Z
```

Options
- -n, --name NAME: Personalize the greeting
- -f, --format FORMAT: Output format. Values:
  - iso (default): ISO-8601 timestamp
  - unix: UNIX epoch seconds
  - timestamp: print only the timestamp (machine-friendly)
- -h, --help: Show help and exit

Portability notes
- The script tries to use GNU date's `--iso-8601=seconds` when available and falls back to a UTC format compatible with BSD date.
- `date +%s` is used for UNIX epoch seconds; this is widely available on Unix-like systems.

Tests

Run the simple functional tests:

```sh
bash tests/test_greet.sh
```

Continuous integration

A lightweight GitHub Actions workflow is included at `.github/workflows/test.yml` to run the test script on pushes and pull requests.

License

This utility is provided as-is; adapt and redistribute as you like.
