# Tiled TypeScript Extension Example/Template

An example of writing a [Tiled](https://mapeditor.org) extension in TypeScript.

- Place source files in `src/` with a `.mts` extension.
- Run the TypeScript compiler `tsc` (or in watch mode, as `tsc -w`)
- Compiled files are placed in `dist/` with a `.mjs` extension.

For quick iteration, I found it helpful to symlink the output file into the
Tiled extensions folder.

## Complications
### Resolving Compiler Errors
Parts of the Tiled API conflict with parts of the DOM API, which TypeScript uses
by default. This is resolved by adding `"lib": [ "ES2016" ]` to `tsconfig.json`.

### Getting Current Tiled API Definitions
As of the time of writing, the [`@mapeditor/tiled-api` package on
npm](https://www.npmjs.com/package/@mapeditor/tiled-api) is version 1.8.2, but
the latest version of Tiled is 1.9.1. The current definitions can be obtained
from the [Tiled source repository](https://github.com/mapeditor/tiled).

### Getting the Right File Extension
Giving the TypeScript source file an `.mts` extension causes the compiled file
to have an `.mjs` extension, as needed for Tiled to identify it as a module.

### Adding missing APIs
The Tiled TypeScript definitions are primarily intended for documentation. As a
result, the Qt definitions are incomplete. Some supplemental definitions that I
needed are at `vendor/types/qml/index.d.ts`, and PRs are welcome to expand it.
