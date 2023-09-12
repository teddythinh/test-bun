# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

To start the development server run:

```bash
bun run dev
```

## Test

To run all the tests, run:

```bash
bun test
```

To run the tests in each file, run:

```bash
bun test `test/math.test.ts`
```

or

```bash
bun test `test/mock.test.ts`
```

## Information

- `--watch` mode, which hard restarts Bun's process when imported files change.
- `--hot` mode, which soft reloads the code (without restarting the process) when imported files change.

Open <http://localhost:3000/> with your browser to see the result.
