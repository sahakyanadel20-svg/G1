import { CharacterData } from '../types';
import { customizationCategories } from '../data/customizations';

export const generateUniqueId = (): string => {
  return `char_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const generateRandomCharacter = (): CharacterData => {
  const customizations: Record<string, string> = {};

  customizationCategories.forEach(category => {
    if (category.options.length > 0) {
      const randomOption = category.options[Math.floor(Math.random() * category.options.length)];
      customizations[category.id] = randomOption.value;
    }
  });

  return {
    id: generateUniqueId(),
    name: generateRandomCharacterName(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    customizations,
  };
};

export const generateRandomCharacterName = (): string => {
  const firstNames = [
    'Alex', 'Bailey', 'Casey', 'Dakota', 'Eden', 'Finley', 'Gray', 'Harper',
    'Iris', 'Jordan', 'Kai', 'Loren', 'Morgan', 'Noah', 'Owen', 'Parker',
    'Quinn', 'Riley', 'Sky', 'Taylor', 'Ulysses', 'Vale', 'Walker', 'Xavier',
    'Yara', 'Zane', 'Aurora', 'Blaze', 'Cedar', 'Divine',
  ];

  const lastNames = [
    'Stone', 'Rivers', 'Winter', 'Storm', 'Steel', 'Frost', 'Shaw', 'Cross',
    'Fox', 'Hawk', 'Wolf', 'Drake', 'Knight', 'Price', 'Wells', 'Cole',
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
};

export const createBlankCharacter = (): CharacterData => {
  return {
    id: generateUniqueId(),
    name: 'New Character',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    customizations: {},
  };
};

export const updateCharacter = (character: CharacterData, updates: Partial<CharacterData>): CharacterData => {
  return {
    ...character,
    ...updates,
    updatedAt: Date.now(),
  };
};

export const duplicateCharacter = (character: CharacterData): CharacterData => {
  return {
    ...character,
    id: generateUniqueId(),
    name: `${character.name} (Copy)`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};

export const calculateCharacterCompleteness = (character: CharacterData): number => {
  const totalCategories = customizationCategories.length;
  const filledCategories = Object.keys(character.customizations).filter(
    key => character.customizations[key]
  ).length;

  return totalCategories > 0 ? Math.round((filledCategories / totalCategories) * 100) : 0;
};

export const getCharacterSummary = (character: CharacterData): string => {
  const parts: string[] = [];

  // Get gender
  const genderCat = customizationCategories.find(c => c.id === 'gender');
  if (genderCat && character.customizations['gender']) {
    const genderOpt = genderCat.options.find(o => o.value === character.customizations['gender']);
    if (genderOpt) parts.push(genderOpt.name);
  }

  // Get age
  const ageCat = customizationCategories.find(c => c.id === 'age');
  if (ageCat && character.customizations['age']) {
    const ageOpt = ageCat.options.find(o => o.value === character.customizations['age']);
    if (ageOpt) parts.push(ageOpt.name);
  }

  // Get hair color
  const hairColorCat = customizationCategories.find(c => c.id === 'hair_color');
  if (hairColorCat && character.customizations['hair_color']) {
    const hairColorOpt = hairColorCat.options.find(o => o.value === character.customizations['hair_color']);
    if (hairColorOpt) parts.push(`${hairColorOpt.name}-haired`);
  }

  return parts.length > 0 ? parts.join(', ') : 'Custom Character';
};
