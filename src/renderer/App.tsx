import React, { useState, useEffect } from 'react';
import { useCharacter } from '../hooks/useCharacter';
import { useSettings } from '../hooks/useSettings';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CustomizationPanel from './components/CustomizationPanel';
import PreviewPanel from './components/PreviewPanel';
import PromptPanel from './components/PromptPanel';
import './styles/app.css';

export default function App() {
  const { character, isLoaded, updateCustomization, updateCharacterName, resetCharacter, randomizeCharacter } =
    useCharacter();
  const { settings, isLoaded: settingsLoaded, updateTheme } = useSettings();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (settingsLoaded) {
      document.documentElement.setAttribute('data-theme', settings.theme);
    }
  }, [settings.theme, settingsLoaded]);

  if (!isLoaded || !settingsLoaded) {
    return (
      <div className="app-loading">
        <div className="spinner"></div>
        <p>Loading Character Creator AI...</p>
      </div>
    );
  }

  return (
    <div className="app" data-theme={settings.theme}>
      <Header
        character={character}
        onCharacterNameChange={updateCharacterName}
        onRandomize={randomizeCharacter}
        onReset={resetCharacter}
        onTogglePrompt={() => setShowPrompt(!showPrompt)}
        onThemeChange={updateTheme}
        currentTheme={settings.theme}
      />

      <div className="app-main">
        <Sidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

        <div className="editor-container">
          <div className="editor-left">
            <CustomizationPanel
              character={character}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onCategoryUpdate={updateCustomization}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          <div className="editor-right">
            <PreviewPanel character={character} />
          </div>
        </div>
      </div>

      {showPrompt && <PromptPanel character={character} onClose={() => setShowPrompt(false)} />}
    </div>
  );
}
