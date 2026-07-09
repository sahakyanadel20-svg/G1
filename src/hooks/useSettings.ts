import { useState, useCallback, useEffect } from 'react';
import { AppSettings, ThemeMode, Language } from '../types';
import { loadSettings, saveSettings } from '../utils/storage';

export const useSettings = () => {
  const [settings, setSettings] = useState<AppSettings>({
    theme: 'dark',
    language: 'en',
    enableAutoSave: true,
    enableAnimations: true,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    setIsLoaded(true);
  }, []);

  const updateTheme = useCallback((theme: ThemeMode) => {
    setSettings(prev => {
      const updated = { ...prev, theme };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const updateLanguage = useCallback((language: Language) => {
    setSettings(prev => {
      const updated = { ...prev, language };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const toggleAutoSave = useCallback(() => {
    setSettings(prev => {
      const updated = { ...prev, enableAutoSave: !prev.enableAutoSave };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const toggleAnimations = useCallback(() => {
    setSettings(prev => {
      const updated = { ...prev, enableAnimations: !prev.enableAnimations };
      saveSettings(updated);
      return updated;
    });
  }, []);

  return {
    settings,
    isLoaded,
    updateTheme,
    updateLanguage,
    toggleAutoSave,
    toggleAnimations,
  };
};
