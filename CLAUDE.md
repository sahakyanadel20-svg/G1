# Character Creator AI - Technical Documentation

## Project Overview

**Character Creator AI** is a fully offline desktop application built with Electron + React + TypeScript that allows users to create unique AI characters through a highly visual customization system with 300+ options and automatic professional prompt generation for AI image generation.

## Architecture Summary

### Technology Stack

- **Electron 27+** - Cross-platform desktop framework
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite 5** - Fast build tool and dev server
- **CSS3** - Styling with CSS variables for theming

### Core Structure

```
src/
├── main.ts                  # Electron main process
├── preload.ts              # IPC security bridge
├── index.html              # HTML template
├── types/                  # TypeScript types
│   └── index.ts           # All type definitions
├── data/                   # Configuration
│   └── customizations.ts  # 300+ customization options
├── utils/                  # Utility functions
│   ├── promptGenerator.ts # Prompt generation logic
│   ├── storage.ts         # Local storage utilities
│   └── characterUtils.ts  # Character operations
├── hooks/                  # React hooks
│   ├── useCharacter.ts    # Character state
│   ├── useUndoRedo.ts     # History management
│   └── useSettings.ts     # App settings
└── renderer/              # React application
    ├── main.tsx           # React entry point
    ├── App.tsx            # Root component
    ├── components/        # React components
    │   ├── Header.tsx
    │   ├── Sidebar.tsx
    │   ├── CustomizationPanel.tsx
    │   ├── PreviewPanel.tsx
    │   ├── PromptPanel.tsx
    │   └── styles/        # Component styles
    └── styles/            # Global styles
        ├── index.css      # CSS variables & globals
        └── app.css        # App layout styles
```

## Key Design Decisions

### 1. **Scalable Customization System**

All 300+ customization options are defined in `src/data/customizations.ts` as a flat array organized into categories. This allows adding hundreds of new options without touching UI components.

**How it works:**
- Each category has a `displayName` and array of `options`
- Each option has `id`, `name`, `value`, and optional `imageUrl`
- UI components render dynamically from this data
- New options: just add to the array

### 2. **Modular Component Architecture**

Components are:
- Single-responsibility (one job per component)
- Prop-based configuration
- No global state mutations
- Easy to test and extend

### 3. **Local Storage First**

- All character data stored in browser localStorage
- No cloud dependencies
- Fast access, no latency
- User data stays on device

### 4. **Electron + React Separation**

- **Main Process** (`main.ts`): Window management, IPC
- **Renderer Process** (`renderer/`): React UI
- **Preload Bridge** (`preload.ts`): Secure IPC
- No direct Node access from React

## Development Workflow

### Starting Development

```bash
# Terminal 1: Watch and compile TypeScript
npm run dev:main

# Terminal 2: Run Vite dev server
npm run dev:renderer

# Terminal 3: Launch Electron
npm run dev:electron
```

Or use the convenience command:

```bash
npm run dev    # Runs all three in parallel with concurrently
```

### Hot Reload

- **React Components**: Auto-reload on save (Vite HMR)
- **Main Process**: Manual reload (watch TypeScript, restart Electron)
- **Styles**: Auto-reload (CSS hot replace)

### File Changes & Recompilation

- Modifying `src/renderer/**` → Automatic HMR reload
- Modifying `src/main.ts` or `src/preload.ts` → Restart Electron
- Modifying `src/data/customizations.ts` → Automatic reload

## State Management

### Current Approach: React Hooks

**Character State** (`useCharacter.ts`):
```typescript
const { character, updateCustomization, resetCharacter, randomizeCharacter } = useCharacter();
```

**Settings State** (`useSettings.ts`):
```typescript
const { settings, updateTheme, updateLanguage } = useSettings();
```

**Undo/Redo** (`useUndoRedo.ts`):
```typescript
const { state, push, undo, redo, canUndo, canRedo } = useUndoRedo(initial);
```

### Future: Redux Integration (if needed)

For larger state management, Redux can be added:
- `src/store/slices/characterSlice.ts`
- `src/store/slices/settingsSlice.ts`
- `src/store/middleware/persistenceMiddleware.ts`

## Adding Features

### Add a New Customization Category

1. Add options to `src/data/customizations.ts`:

```typescript
const myNewOptions: CustomizationOption[] = [
  { id: 'option-1', category: 'my-category', name: 'Option 1', value: 'val1', ... },
  { id: 'option-2', category: 'my-category', name: 'Option 2', value: 'val2', ... },
];

export const customizationCategories: CustomizationCategory[] = [
  // ... existing categories
  { id: 'my-category', name: 'my-category', displayName: 'My Category', options: myNewOptions },
];
```

2. UI automatically displays the new category
3. Character state automatically saves new customizations

### Add a New UI Component

1. Create component file: `src/renderer/components/MyComponent.tsx`
2. Import in App.tsx or parent component
3. Styles: `src/renderer/components/styles/mycomponent.css`

### Modify Prompt Generation

Edit `src/utils/promptGenerator.ts`:
- Modify `generatePrompt()` to change output format
- Modify `generateStructuredPrompt()` for alternate styles
- Customize descriptions for specific options

### Change Styling/Theme

Edit `src/renderer/styles/index.css`:
- CSS Variables control all colors
- Add new `[data-theme='custom']` rules
- Component-specific styles in `components/styles/`

## Performance Optimizations

### Current

- Debounced preview updates (100ms)
- CSS-based transforms (no DOM thrashing)
- Memoized customization options
- Virtual scrolling ready (customization list)

### Future

- React.memo() on option components
- useMemo() for filtered categories
- useCallback() for event handlers
- Canvas rendering for export

## Testing

Currently: No tests (scaffolded for future)

To add tests:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom ts-jest

# Then create: src/__tests__/utils/promptGenerator.test.ts
```

Example:

```typescript
import { generatePrompt } from '../../utils/promptGenerator';

describe('promptGenerator', () => {
  it('generates prompt from character data', () => {
    const character = { /* ... */ };
    const prompt = generatePrompt(character);
    expect(prompt).toContain('DETAILED CHARACTER PROMPT');
  });
});
```

## Debugging

### React DevTools

Install Chrome extension: "React Developer Tools"
Then in dev mode: `Ctrl+Shift+I` in Electron window

### Electron DevTools

Already enabled in dev mode. Shows:
- Console (errors, logs)
- Network (IPC messages)
- Application (localStorage)

### Main Process Logging

```typescript
// In src/main.ts
console.log('[Main] Message here');  // Visible in terminal
```

### IPC Debugging

Add logging to IPC handlers:

```typescript
ipcMain.handle('channel-name', async (event, data) => {
  console.log('[IPC] Received:', { channel: 'channel-name', data });
  // ...
});
```

## Common Tasks

### Updating Customization Options

1. Edit `src/data/customizations.ts`
2. Add/modify options in the appropriate category array
3. Restart dev server (Vite will hot-reload)

### Changing App Layout

1. Modify `src/renderer/App.tsx` for structure
2. Edit `src/renderer/styles/app.css` for layout
3. Create/modify component files as needed

### Adding Keyboard Shortcuts

1. Add listener in component or App.tsx:

```typescript
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
      randomizeCharacter();
    }
  };
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

### Export/Import Features

Edit `src/utils/storage.ts`:
- `exportPresetsAsJSON()` - Customize export format
- `importPresetsFromJSON()` - Customize import parsing

## Build & Distribution

### Local Build

```bash
npm run build          # Compile TypeScript + Vite build
npm run package        # Create installers
```

### Platform Builds

```bash
npm run dist:win       # Windows .exe
npm run dist:mac       # macOS .dmg
npm run dist:linux     # Linux AppImage/deb
```

Configuration in `package.json` under `"build"` key.

### Code Signing

For production distribution, add code signing:

1. Get certificate (platform-specific)
2. Configure in `package.json` build section:

```json
{
  "build": {
    "win": {
      "certificateFile": "path/to/cert.pfx"
    },
    "mac": {
      "identity": "Developer ID Application: ..."
    }
  }
}
```

## Browser Compatibility

Only relevant for production web version (future).

Desktop app requires:
- Electron 27+ (Chromium 118+)
- Node 16+

## Environment Variables

Currently none required. To add:

1. Create `.env.local`:
   ```
   VITE_API_URL=http://localhost:3000
   ```

2. Access in React:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. Access in Electron main:
   ```typescript
   const apiUrl = process.env.VITE_API_URL;
   ```

## Known Limitations & Future Work

### Current Limitations

- Character preview is text-based (no SVG rendering yet)
- No image export (future: PNG, JPG, WebP)
- No cloud sync (intentional: offline-first)
- No plugin system yet

### Planned Features

- [ ] SVG-based character rendering
- [ ] Image export (multiple formats)
- [ ] Advanced animation preview
- [ ] Batch character generation
- [ ] Plugin/extension system
- [ ] Localization (i18n)
- [ ] Mobile companion app

## Troubleshooting Development

### "Cannot find module" errors

```bash
# Restart dev server
npm run dev
```

### Electron window blank

1. Check Vite dev server is running: `http://localhost:3000`
2. Check browser console for React errors
3. Restart Electron process

### Changes not reflecting

- React: Vite HMR should auto-reload
- Styles: Check CSS variables are spelled correctly
- Options: Edit `src/data/customizations.ts` (Vite watches it)

### Memory usage high

- Check for memory leaks in event listeners
- Profile with DevTools Timeline
- Consider memoization for large option lists

## Code Style

### Naming Conventions

- Files: `kebab-case.tsx` or `kebab-case.ts`
- Components: `PascalCase.tsx`
- Functions/variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`

### Imports

- Prefer named imports: `import { Component } from 'module'`
- Absolute imports from src: `import { Something } from '../../types'`

### Comments

Minimal comments. Self-documenting code is preferred:

```typescript
// Good
const visibleOptions = options.filter(opt => opt.category === selected);

// Avoid
// Filter options by category
const visibleOptions = options.filter(opt => opt.category === selected);
```

## Resources

- Electron Docs: https://www.electronjs.org/docs
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- TypeScript Docs: https://www.typescriptlang.org

## Getting Help

1. Check existing code patterns
2. Review type definitions in `src/types/`
3. Check `README.md` for user documentation
4. Review component examples in `src/renderer/components/`

## Next Steps for Enhancement

1. **Add SVG Character Rendering** - Replace text placeholder with actual SVG character
2. **Implement Image Export** - Add Canvas rendering and export to PNG/JPG
3. **Add More Customization Options** - Extend to 500+ options
4. **Create Preset Categories** - Organize presets with tags/folders
5. **Add Animations** - Animate character previews
6. **Implement Undo/Redo Stack** - Use `useUndoRedo` hook with Redux
7. **Add Localization** - Support multiple languages
8. **Create Plugin System** - Allow custom extensions

---

**Last Updated**: 2024
**Maintained by**: Character Creator AI Team
