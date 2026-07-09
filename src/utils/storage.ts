import { CharacterPreset, CharacterData, AppSettings } from '../types';

const STORAGE_KEYS = {
  PRESETS: 'cc_presets',
  FAVORITES: 'cc_favorites',
  SETTINGS: 'cc_settings',
  CURRENT_CHARACTER: 'cc_current_character',
};

// Presets management
export const savePreset = (preset: CharacterPreset): void => {
  const presets = loadAllPresets();
  const index = presets.findIndex(p => p.id === preset.id);

  if (index >= 0) {
    presets[index] = preset;
  } else {
    presets.push(preset);
  }

  localStorage.setItem(STORAGE_KEYS.PRESETS, JSON.stringify(presets));
};

export const loadAllPresets = (): CharacterPreset[] => {
  const data = localStorage.getItem(STORAGE_KEYS.PRESETS);
  return data ? JSON.parse(data) : [];
};

export const loadPreset = (id: string): CharacterPreset | null => {
  const presets = loadAllPresets();
  return presets.find(p => p.id === id) || null;
};

export const deletePreset = (id: string): void => {
  const presets = loadAllPresets().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.PRESETS, JSON.stringify(presets));
};

export const toggleFavorite = (presetId: string): void => {
  const presets = loadAllPresets();
  const preset = presets.find(p => p.id === presetId);

  if (preset) {
    preset.isFavorite = !preset.isFavorite;
    savePreset(preset);
  }
};

export const loadFavoritePresets = (): CharacterPreset[] => {
  return loadAllPresets().filter(p => p.isFavorite);
};

// Export/Import
export const exportPresetsAsJSON = (presets: CharacterPreset[]): string => {
  return JSON.stringify(presets, null, 2);
};

export const importPresetsFromJSON = (jsonString: string): CharacterPreset[] => {
  try {
    const parsed = JSON.parse(jsonString);
    const presets = Array.isArray(parsed) ? parsed : [parsed];
    presets.forEach(preset => savePreset(preset));
    return presets;
  } catch (error) {
    console.error('Failed to import presets:', error);
    return [];
  }
};

// Current character management
export const saveCurrentCharacter = (character: CharacterData): void => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_CHARACTER, JSON.stringify(character));
};

export const loadCurrentCharacter = (): CharacterData | null => {
  const data = localStorage.getItem(STORAGE_KEYS.CURRENT_CHARACTER);
  return data ? JSON.parse(data) : null;
};

// Settings management
export const saveSettings = (settings: AppSettings): void => {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
};

export const loadSettings = (): AppSettings => {
  const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  return data
    ? JSON.parse(data)
    : {
        theme: 'dark',
        language: 'en',
        enableAutoSave: true,
        enableAnimations: true,
      };
};

// Clear all data
export const clearAllData = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};
