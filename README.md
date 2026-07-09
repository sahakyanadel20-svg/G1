# Character Creator AI

A professional, fully offline desktop application for creating unique AI characters with a highly visual customization system and automatic professional prompt generation for AI image generation.

## Features

✨ **Premium Features**

- **300+ Customization Options** - Comprehensive character builder with visual thumbnails
- **Live Character Preview** - Real-time rendering as you customize
- **Intelligent Undo/Redo** - Full history management with configurable stack
- **Preset Management** - Save, load, and organize character presets
- **Favorites System** - Quickly access your favorite character designs
- **Search & Filtering** - Find customization options instantly
- **Professional Prompt Generator** - Automatically generate AI image generation prompts
- **Dark & Light Themes** - Eye-friendly interface in both modes
- **Multi-Language Ready** - Extensible localization framework
- **Fully Offline** - No internet connection required, all processing local
- **Cross-Platform** - Windows, macOS, and Linux support

## Customization Categories

Organize your character with precision using 300+ options across categories:

- **Demographics**: Gender, Age, Ethnicity
- **Facial Features**: Face Shape, Eyes, Nose, Lips, Teeth
- **Hair**: Style, Color, Texture, Highlights
- **Facial Hair**: Beard, Mustache, Goatee, Stubble
- **Skin**: Tone, Texture, Freckles, Scars, Wrinkles
- **Body**: Type, Height, Weight, Muscles, Posture
- **Clothing**: Style, Color, Fabrics, Accessories
- **Accessories**: Hats, Glasses, Jewelry, Piercings
- **Occupation & Role**: Career, Fantasy Class, Status
- **Personality**: Traits, Emotions, Expression
- **Art Direction**: Style, Lighting, Cinematic Angle, Environment
- **Effects**: Glow, Shadows, Special Effects

## Installation

### Requirements

- Node.js 16+ (https://nodejs.org/)
- npm or yarn package manager

### Steps

1. **Clone or Extract the Repository**

   ```bash
   cd character-creator-ai
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Mode**

   ```bash
   npm run dev
   ```

   This will start both the Electron main process and the React development server.

4. **Launch the Application**

   The Electron window will open automatically. If it doesn't:

   ```bash
   npm run dev:electron
   ```

## Building for Production

### Build All Platforms

```bash
npm run dist
```

### Platform-Specific Builds

```bash
# Windows
npm run dist:win

# macOS
npm run dist:mac

# Linux
npm run dist:linux
```

Built installers will be in the `dist` folder.

## Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server + Electron
npm run dev:main        # Watch TypeScript main process
npm run dev:renderer    # Start Vite dev server
npm run dev:electron    # Launch Electron app

# Build
npm run build           # Build main + renderer
npm run build:main      # TypeScript compile main
npm run build:renderer  # Vite build frontend

# Quality
npm run typecheck       # Type checking
npm run lint            # ESLint
npm run format          # Prettier formatting
npm run test            # Run tests

# Distribution
npm run dist            # Build installers for all platforms
npm run dist:win        # Windows installer
npm run dist:mac        # macOS DMG
npm run dist:linux      # Linux AppImage/DEB
```

### Project Structure

```
character-creator-ai/
├── src/
│   ├── main.ts                  # Electron main process
│   ├── preload.ts              # IPC bridge
│   ├── types/                  # TypeScript types
│   ├── data/                   # Configuration data (300+ options)
│   ├── utils/                  # Utility functions
│   ├── hooks/                  # React hooks
│   ├── renderer/
│   │   ├── main.tsx           # React entry point
│   │   ├── App.tsx            # Root component
│   │   ├── components/        # React components
│   │   └── styles/            # CSS stylesheets
│   └── index.html             # HTML template
├── package.json               # Project config
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
└── README.md                 # This file
```

## Architecture

### Technology Stack

- **Electron** - Cross-platform desktop applications
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with CSS variables for theming

### Key Design Patterns

- **Component-Based UI** - Modular React components
- **Custom Hooks** - State management patterns
- **Local Storage** - Persistent character/preset storage
- **Offline-First** - No external API dependencies
- **Responsive Design** - Works on various screen sizes

## Usage Guide

### Creating a Character

1. **Customize Appearance**
   - Use the left panel to adjust customization options
   - Options organized by category (Gender, Age, Hair, etc.)
   - Search functionality for quick access
   - Live preview updates in real-time

2. **Save Your Work**
   - Character is auto-saved to local storage
   - Save as preset for future use
   - Export character as JSON file

3. **Generate Prompt**
   - Click "Prompt" button in header
   - Multiple prompt styles available
   - Copy prompt to clipboard for AI image generation
   - Download prompt as text file

4. **Manage Presets**
   - Save current character as preset
   - Load previous presets
   - Mark favorites for quick access
   - Delete unwanted presets

### Keyboard Shortcuts

- `Ctrl+R` / `Cmd+R` - Randomize character
- `Ctrl+L` / `Cmd+L` - Reset character
- `Ctrl+P` / `Cmd+P` - Toggle prompt panel
- `Ctrl+Z` / `Cmd+Z` - Undo
- `Ctrl+Shift+Z` / `Cmd+Shift+Z` - Redo

## Customization Guide

### Adding New Customization Options

New options can be added to `src/data/customizations.ts`:

```typescript
const newOptions: CustomizationOption[] = [
  {
    id: 'new-option-id',
    category: 'category-name',
    name: 'Display Name',
    value: 'value',
    imageUrl: 'data:image/svg+xml,...',
    description: 'Optional description'
  },
  // ... more options
];
```

The system automatically picks up new options without requiring component changes.

### Creating Custom Themes

Themes are CSS variables in `src/renderer/styles/index.css`:

```css
:root[data-theme='custom'] {
  --bg-primary: #your-color;
  --text-primary: #your-color;
  /* ... more variables ... */
}
```

## File Export/Import

### Export Character

Characters can be exported as:
- **JSON** - Full character data with all customizations
- **Preset** - Shareable character preset
- **Image** - Character preview (planned)

### Import Character

Import previously exported characters:
- Load JSON files with character data
- Merge presets into your library
- Batch import multiple characters

## Performance

- **Instant Preview Updates** - Debounced rendering (100ms)
- **Lazy Loading** - Components load on demand
- **Optimized Rendering** - CSS-based transforms
- **Memory Efficient** - Configurable history stack (100 states)
- **Fast Search** - Client-side indexing

## Troubleshooting

### Application Won't Start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 3000 Already in Use

```bash
# Change Vite port in vite.config.ts
server: {
  port: 3001
}
```

### Build Fails

```bash
# Clean build
rm -rf dist
npm run build
```

## Contributing

Contributions are welcome! Areas for enhancement:

- Additional customization options (SVG templates)
- New prompt templates
- UI/UX improvements
- Performance optimizations
- Cross-platform testing
- Localization (translations)

## License

MIT License - See LICENSE file for details

## Support

For issues, feature requests, or questions:

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check src/README files for technical details
- **Architecture Guide**: See CLAUDE.md for comprehensive architecture docs

## Roadmap

- [ ] SVG-based character rendering
- [ ] Advanced image export (PNG, JPG, WebP)
- [ ] Animation preview
- [ ] Batch character generation
- [ ] Cloud preset sync (optional)
- [ ] Plugin system for extensions
- [ ] Web version (experimental)
- [ ] Mobile companion app

## Version History

### v1.0.0 (Initial Release)

- Complete offline desktop application
- 300+ customization options
- Live character preview
- Undo/redo system
- Preset management
- Prompt generation
- Dark/light themes
- Cross-platform support

---

**Character Creator AI** - Create Unique Characters, Professionally

Made with ❤️ for character creators and AI enthusiasts
