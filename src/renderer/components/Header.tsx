import React, { useState } from 'react';
import { CharacterData, ThemeMode } from '../../types';
import { calculateCharacterCompleteness } from '../../utils/characterUtils';
import './styles/header.css';

interface HeaderProps {
  character: CharacterData;
  onCharacterNameChange: (name: string) => void;
  onRandomize: () => void;
  onReset: () => void;
  onTogglePrompt: () => void;
  onThemeChange: (theme: ThemeMode) => void;
  currentTheme: ThemeMode;
}

export default function Header({
  character,
  onCharacterNameChange,
  onRandomize,
  onReset,
  onTogglePrompt,
  onThemeChange,
  currentTheme,
}: HeaderProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(character.name);
  const completeness = calculateCharacterCompleteness(character);

  const handleNameSave = () => {
    if (tempName.trim()) {
      onCharacterNameChange(tempName);
      setIsEditingName(false);
    } else {
      setTempName(character.name);
      setIsEditingName(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      setTempName(character.name);
      setIsEditingName(false);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <span className="logo-icon">🎨</span>
          <span className="logo-text">Character Creator AI</span>
        </div>
      </div>

      <div className="header-center">
        {isEditingName ? (
          <input
            type="text"
            value={tempName}
            onChange={e => setTempName(e.target.value)}
            onBlur={handleNameSave}
            onKeyDown={handleKeyDown}
            className="character-name-input"
            autoFocus
            maxLength={50}
          />
        ) : (
          <div className="character-name" onClick={() => setIsEditingName(true)}>
            <span>{character.name}</span>
            <span className="name-completeness">{completeness}%</span>
          </div>
        )}
      </div>

      <div className="header-right">
        <button
          className="header-button"
          onClick={onRandomize}
          title="Generate random character (Ctrl+R)"
        >
          🎲 Randomize
        </button>

        <button className="header-button" onClick={onReset} title="Reset character (Ctrl+L)">
          🔄 Reset
        </button>

        <button
          className="header-button"
          onClick={onTogglePrompt}
          title="Show/hide prompt (Ctrl+P)"
        >
          ✍️ Prompt
        </button>

        <button
          className="header-button theme-toggle"
          onClick={() => onThemeChange(currentTheme === 'dark' ? 'light' : 'dark')}
          title="Toggle dark/light mode"
        >
          {currentTheme === 'dark' ? '☀️' : '🌙'}
        </button>

        <div className="header-menu">
          <button className="header-menu-button" title="Menu">
            ⋮
          </button>
        </div>
      </div>
    </header>
  );
}
