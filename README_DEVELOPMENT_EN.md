# StreamVi SDK - Development Guide

Development guide for StreamVi SDK library developers.

## API Client Generation

### Automatic generation from production server

```bash
npm run gen:api-prod
```

This command:
1. Downloads the OpenAPI specification from `napi.streamvi.io`
2. Preprocesses the specification to fix common issues
3. Generates a TypeScript client in `src/generated/api2/`
4. Automatically fixes common issues:
   - Corrects enum naming (camelCase → PascalCase)
   - Sets proper default versions for methods (e.g., `paySettingGetSettingV3` uses version 3 by default)
   - Removes unnecessary suffixes from method names
   - Fixes type inconsistencies

### Manual generation (if you have a local specification file)

```bash
# Place the OpenAPI specification file in temp/backend_v2.json
npm run gen-process
```

## Automatic Error Correction

The generation process includes automatic error correction that:

- **Fixes enum naming**: Converts `camelCaseVEnum` to `PascalCaseVEnum`
- **Sets correct default versions**: Methods like `paySettingGetSettingV3` automatically use version 3 by default
- **Processes all API files**: Automatically scans and fixes all 39+ generated API files
- **Provides detailed reports**: Shows exactly what was fixed in each file
- **Handles type inconsistencies**: Fixes common TypeScript type issues in generated code

Example of automatic fixes:
```typescript
// Before fix:
const actualV: paySettingGetSettingV3VEnum = requestParameters.v || PaySettingGetSettingV3VEnum._1;

// After fix:
const actualV: PaySettingGetSettingV3VEnum = requestParameters.v || PaySettingGetSettingV3VEnum._3;
```

## Preprocessing

The preprocessing step (`clean-openapi-spec.js`) handles:
- Removing invalid characters from the OpenAPI specification
- Fixing malformed JSON structures
- Normalizing endpoint definitions
- Ensuring compatibility with the TypeScript generator

## Postprocessing

The postprocessing step (`postprocess-api.js`) handles:
- Enum name corrections across all generated files
- Default version assignments for versioned methods
- Type consistency fixes
- Import statement corrections

## Scripts Structure

```
src/scripts/
├── openapi-fetcher.mjs     # OpenAPI specification fetch script
├── clean-openapi-spec.js   # OpenAPI specification preprocessing script
└── postprocess-api.js      # Automatic error correction script
```

## Testing

### Testing preprocessing

```bash
npm run test:preprocessing
```

### Testing postprocessing

```bash
npm run test:postprocessing
```

### Full testing

```bash
npm test
```

## Generation Debugging

If you encounter issues with API generation:

1. **Check source specification**: Ensure `temp/backend_v2.json` file is correct
2. **Run preprocessing separately**: `node scripts/clean-openapi-spec.js`
3. **Check generation logs**: OpenAPI Generator outputs detailed logs
4. **Run postprocessing separately**: `node scripts/postprocess-api.js`

## Adding New Fixes

To add new automatic fixes:

1. Edit `scripts/postprocess-api.js`
2. Add corresponding tests in `tests/postprocess-api.test.ts`
3. Run tests: `npm run test:postprocessing`
4. Test on full generation: `npm run gen:api-prod`

## API Versioning

When adding support for new API versions:

1. Update logic in `postprocess-api.js` to set correct default versions
2. Add tests for new versions
3. Update documentation with examples of new version usage

## Publishing

Before publishing a new version:

1. Update version in `package.json`
2. Run full generation: `npm run gen:api-prod`
3. Run tests: `npm test`
4. Build project: `npm run build`
5. Check linting: `npm run lint`
6. Publish: `npm publish` 