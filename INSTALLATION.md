# Character Creator AI - Quick Installation & Setup Guide

## Prerequisites

Before installing, make sure you have:

1. **Node.js 16 or higher** - [Download here](https://nodejs.org/)
   - Check: `node --version` (should be v16+)
   - Check: `npm --version` (should be 7+)

2. **Git** - [Download here](https://git-scm.com/)
   - Check: `git --version`

## Quick Start (5 minutes)

### Step 1: Navigate to Project Directory

```bash
cd /path/to/character-creator-ai
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages:
- Electron (desktop framework)
- React & React-DOM (UI library)
- TypeScript (type system)
- Vite (dev server & build tool)
- And other utilities

⏱️ **Takes 2-3 minutes on first install**

### Step 3: Start Development Mode

```bash
npm run dev
```

This starts:
1. TypeScript compiler (watches for changes)
2. Vite dev server (React dev environment)
3. Electron application window

📝 **Note**: The first time might take 30-60 seconds as Vite builds the bundle.

### Step 4: Application Launches

A window will open showing:
- Character Creator AI with header
- Customization panel on the left
- Character preview on the right
- Start customizing! 🎨

## Troubleshooting Setup

### "Node not found" or "npm not found"

**Solution**: Install Node.js from https://nodejs.org/

Verify installation:
```bash
node --version
npm --version
```

### "npm install" fails with permission errors

**Solution** (macOS/Linux):
```bash
# Use sudo (not recommended long-term)
sudo npm install

# Better: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### "Port 3000 already in use"

**Solution**: Vite will use the next available port (3001, 3002, etc.)

Or manually free port 3000:
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Electron window is blank/doesn't load

**Solution**:
1. Check browser console: `Ctrl+Shift+I` or `Cmd+Option+I`
2. Look for errors
3. Kill and restart: `npm run dev`

### "Cannot find module" errors

**Solution**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Development Commands

```bash
# Start everything
npm run dev

# Start components separately (in different terminals)
npm run dev:main        # Watch TypeScript main process
npm run dev:renderer    # Start Vite dev server
npm run dev:electron    # Launch Electron app

# Build for production
npm run build           # Compile everything
npm run dist            # Create installers for all platforms

# Code quality
npm run typecheck       # Check TypeScript types
npm run lint            # Lint code
npm run format          # Format code with Prettier

# Tests (when added)
npm run test            # Run test suite
```

## Project Structure Guide

```
character-creator-ai/
├── src/
│   ├── main.ts                 # Electron main process
│   ├── preload.ts             # IPC security bridge
│   ├── index.html             # HTML template
│   ├── data/
│   │   └── customizations.ts  # 300+ character options
│   ├── utils/
│   │   ├── promptGenerator.ts # Prompt generation
│   │   ├── storage.ts         # Local storage
│   │   └── characterUtils.ts  # Character helpers
│   ├── hooks/
│   │   ├── useCharacter.ts    # Character state
│   │   ├── useSettings.ts     # Settings state
│   │   └── useUndoRedo.ts     # Undo/redo
│   └── renderer/              # React UI
│       ├── App.tsx            # Root component
│       ├── main.tsx           # React entry
│       ├── components/        # React components
│       └── styles/            # CSS stylesheets
├── package.json               # Project configuration
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
├── README.md                 # User guide
├── CLAUDE.md                 # Technical docs
└── INSTALLATION.md           # This file
```

## File Usage

### Character Options

Edit: `src/data/customizations.ts`

Add new character customization options here. They automatically appear in the UI.

### Prompt Generation

Edit: `src/utils/promptGenerator.ts`

Customize how prompts are generated for AI image creation.

### Styling & Themes

Edit: `src/renderer/styles/`

- `index.css` - CSS variables and global styles
- `app.css` - App layout
- `components/styles/` - Component-specific styles

### Components

Edit: `src/renderer/components/`

React UI components for different features:
- `Header.tsx` - Top bar
- `CustomizationPanel.tsx` - Options list
- `PreviewPanel.tsx` - Character preview
- `PromptPanel.tsx` - Prompt display
- `Sidebar.tsx` - Category navigation

## Building for Distribution

### Create Installers

```bash
npm run dist
```

This creates installers in the `dist` folder:
- Windows: `.exe` installer
- macOS: `.dmg` installer
- Linux: `.AppImage` or `.deb` package

### Platform-Specific Builds

```bash
npm run dist:win         # Windows only
npm run dist:mac         # macOS only
npm run dist:linux       # Linux only
```

## Getting Started with Development

### Understanding the Code Flow

1. **Start**: `npm run dev`
2. **Main Process** (`src/main.ts`):
   - Creates Electron window
   - Loads React app from `http://localhost:3000`
   - Manages window lifecycle
3. **Renderer** (`src/renderer/App.tsx`):
   - React app loads
   - Hooks manage character state
   - Components render UI
4. **Data Flow**:
   - User interacts with UI
   - Component handlers update state
   - State saved to localStorage
   - Preview and prompt update

### Making Your First Change

1. Open `src/renderer/components/Header.tsx`
2. Find the logo text: `Character Creator AI`
3. Change it to something else
4. Save the file
5. Watch the app update automatically! (Vite HMR)

### Adding a New Customization Option

1. Open `src/data/customizations.ts`
2. Find a category (e.g., `ageOptions`)
3. Add a new option:
   ```typescript
   { 
     id: 'age-baby', 
     category: 'age', 
     name: 'Baby (0-4)',  
     value: 'baby',
     imageUrl: generateThumbnail('B', '%23FF6B6B')
   }
   ```
4. Save and refresh - it appears in the UI!

## Performance Tips

- Use `npm run typecheck` before commits
- Use `npm run lint` to catch issues
- Keep components focused and small
- Use React DevTools extension for debugging

## Next Steps

1. **Explore the UI**: Customize a character, generate a prompt
2. **Check the Code**: Read CLAUDE.md for architecture details
3. **Read the UI**: Tooltips and help text throughout
4. **Add Features**: Use examples in components as templates

## Getting Help

### Check These Resources

1. **README.md** - Feature overview and usage
2. **CLAUDE.md** - Technical architecture and development
3. **Component Files** - Existing components show patterns
4. **Browser Console** - `Ctrl+Shift+I` to debug

### Common Questions

**Q: How do I add more character options?**
A: Edit `src/data/customizations.ts` and add to any category array

**Q: How do I change colors/theme?**
A: Edit CSS variables in `src/renderer/styles/index.css`

**Q: How do I customize the prompt format?**
A: Edit `src/utils/promptGenerator.ts`

**Q: Can I add my own character templates?**
A: Yes, modify `src/renderer/components/PreviewPanel.tsx` to render SVG

**Q: How do I export my character?**
A: Use browser localStorage (persists automatically) or implement JSON export

## Performance Optimization

If the app feels slow:

```bash
# Profile the app
npm run typecheck       # Check for type issues
npm run lint            # Check for anti-patterns

# Check bundle size
npm run build           # See console output for bundle stats
```

## Version Information

- **Node.js Required**: 16 or higher
- **npm Required**: 7 or higher
- **Electron**: 27+
- **React**: 18.2
- **TypeScript**: 5.3

Check your versions:
```bash
node --version
npm --version
```

## Frequently Encountered Issues

| Issue | Solution |
|-------|----------|
| `npm install` fails | Try `npm ci` instead or delete `node_modules` |
| Blank window | Check DevTools console (`Ctrl+Shift+I`) for errors |
| Changes not showing | Kill all Node processes, restart `npm run dev` |
| Port 3000 in use | Wait 5 seconds or kill process on port 3000 |
| TypeScript errors | Run `npm run typecheck` to see all errors |

## System Requirements

### Minimum
- OS: Windows 7+, macOS 10.13+, Linux (Ubuntu 18.04+)
- CPU: 2 cores
- RAM: 2GB
- Disk: 500MB free

### Recommended
- OS: Windows 10+, macOS 11+, Linux (Ubuntu 20.04+)
- CPU: 4 cores
- RAM: 8GB
- Disk: 1GB free (for dev tools)

## Next Phase: Building More Features

Once comfortable, try:

1. **Implementing SVG Character Rendering** - Replace text placeholder with actual SVG
2. **Adding Image Export** - Export character as PNG/JPG
3. **Creating Presets** - Save and load character configurations
4. **Adding Animations** - Animate character preview
5. **Internationalization** - Support multiple languages

Each of these is well-documented in CLAUDE.md.

---

**Need more help?** Check the README.md or CLAUDE.md files!

**Ready to start?** Run: `npm install && npm run dev`

Happy character creating! 🎨
