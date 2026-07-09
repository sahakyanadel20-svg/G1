import { useState, useCallback, useEffect } from 'react';
import { CharacterData } from '../types';
import { saveCurrentCharacter, loadCurrentCharacter } from '../utils/storage';
import { createBlankCharacter, updateCharacter, generateRandomCharacter } from '../utils/characterUtils';

export const useCharacter = () => {
  const [character, setCharacter] = useState<CharacterData>(createBlankCharacter());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load character on mount
  useEffect(() => {
    const saved = loadCurrentCharacter();
    if (saved) {
      setCharacter(saved);
    } else {
      setCharacter(createBlankCharacter());
    }
    setIsLoaded(true);
  }, []);

  const updateCustomization = useCallback(
    (categoryId: string, value: string) => {
      setCharacter(prev => {
        const updated = {
          ...prev,
          customizations: {
            ...prev.customizations,
            [categoryId]: value,
          },
        };
        saveCurrentCharacter(updated);
        return updated;
      });
    },
    []
  );

  const updateCharacterName = useCallback((name: string) => {
    setCharacter(prev => {
      const updated = updateCharacter(prev, { name });
      saveCurrentCharacter(updated);
      return updated;
    });
  }, []);

  const resetCharacter = useCallback(() => {
    const blank = createBlankCharacter();
    setCharacter(blank);
    saveCurrentCharacter(blank);
  }, []);

  const randomizeCharacter = useCallback(() => {
    const random = generateRandomCharacter();
    setCharacter(random);
    saveCurrentCharacter(random);
  }, []);

  const setCharacterCustomizations = useCallback((customizations: Record<string, string>) => {
    setCharacter(prev => {
      const updated = {
        ...prev,
        customizations,
      };
      saveCurrentCharacter(updated);
      return updated;
    });
  }, []);

  return {
    character,
    isLoaded,
    updateCustomization,
    updateCharacterName,
    resetCharacter,
    randomizeCharacter,
    setCharacterCustomizations,
  };
};
