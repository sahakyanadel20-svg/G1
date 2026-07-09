export interface CustomizationOption {
  id: string;
  category: string;
  name: string;
  value: string;
  imageUrl?: string;
  description?: string;
  tags?: string[];
}

export interface CharacterData {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  customizations: Record<string, string>; // category -> selected value
  notes?: string;
}

export interface CharacterPreset extends CharacterData {
  isFavorite: boolean;
}

export interface CustomizationCategory {
  id: string;
  name: string;
  displayName: string;
  options: CustomizationOption[];
  icon?: string;
}

export type ThemeMode = 'light' | 'dark';
export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh';

export interface AppSettings {
  theme: ThemeMode;
  language: Language;
  enableAutoSave: boolean;
  enableAnimations: boolean;
}

export interface UndoRedoState {
  past: CharacterData[];
  present: CharacterData;
  future: CharacterData[];
}
