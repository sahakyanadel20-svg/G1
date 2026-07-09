import { CharacterData } from '../types';
import { customizationCategories } from '../data/customizations';

interface PromptSection {
  title: string;
  items: string[];
}

export const generatePrompt = (character: CharacterData): string => {
  const sections: PromptSection[] = [];

  // Map customization values to readable descriptions
  const customizationMap: Record<string, string> = {};

  customizationCategories.forEach(category => {
    const selectedValue = character.customizations[category.id];
    if (selectedValue) {
      const option = category.options.find(opt => opt.value === selectedValue);
      if (option) {
        customizationMap[category.displayName] = option.name;
      }
    }
  });

  // Demographics section
  const demographics: string[] = [];
  if (customizationMap['Gender']) demographics.push(`Gender: ${customizationMap['Gender']}`);
  if (customizationMap['Age']) demographics.push(`Age: ${customizationMap['Age']}`);
  if (customizationMap['Ethnicity']) demographics.push(`Ethnicity: ${customizationMap['Ethnicity']}`);
  if (demographics.length > 0) {
    sections.push({ title: 'Demographics', items: demographics });
  }

  // Physical appearance section
  const appearance: string[] = [];
  if (customizationMap['Skin Tone']) appearance.push(`${customizationMap['Skin Tone']} skin tone`);
  if (customizationMap['Face Shape']) appearance.push(`${customizationMap['Face Shape']} face shape`);
  if (customizationMap['Eyes']) appearance.push(`${customizationMap['Eyes']} eyes`);
  if (customizationMap['Eye Color']) appearance.push(`${customizationMap['Eye Color']} eye color`);
  if (customizationMap['Nose']) appearance.push(`${customizationMap['Nose']} nose`);
  if (customizationMap['Facial Hair']) appearance.push(`${customizationMap['Facial Hair']}`);
  if (customizationMap['Facial Features']) appearance.push(`${customizationMap['Facial Features']}`);
  if (appearance.length > 0) {
    sections.push({ title: 'Physical Appearance', items: appearance });
  }

  // Hair section
  const hair: string[] = [];
  if (customizationMap['Hairstyle']) hair.push(`Hairstyle: ${customizationMap['Hairstyle']}`);
  if (customizationMap['Hair Color']) hair.push(`Hair color: ${customizationMap['Hair Color']}`);
  if (hair.length > 0) {
    sections.push({ title: 'Hair', items: hair });
  }

  // Body section
  const body: string[] = [];
  if (customizationMap['Body Type']) body.push(`${customizationMap['Body Type']} build`);
  if (body.length > 0) {
    sections.push({ title: 'Body', items: body });
  }

  // Clothing section
  const clothing: string[] = [];
  if (customizationMap['Clothing Style']) clothing.push(`Wearing ${customizationMap['Clothing Style']} clothing`);
  if (clothing.length > 0) {
    sections.push({ title: 'Clothing', items: clothing });
  }

  // Character section
  const characterInfo: string[] = [];
  if (customizationMap['Occupation']) characterInfo.push(`Occupation: ${customizationMap['Occupation']}`);
  if (customizationMap['Personality']) characterInfo.push(`Personality: ${customizationMap['Personality']}`);
  if (customizationMap['Emotion']) characterInfo.push(`Expression: ${customizationMap['Emotion']}`);
  if (characterInfo.length > 0) {
    sections.push({ title: 'Character', items: characterInfo });
  }

  // Environment section
  const environment: string[] = [];
  if (customizationMap['Environment']) environment.push(`Setting: ${customizationMap['Environment']}`);
  if (customizationMap['Lighting']) environment.push(`Lighting: ${customizationMap['Lighting']}`);
  if (customizationMap['Cinematic Style']) environment.push(`Composition: ${customizationMap['Cinematic Style']}`);
  if (environment.length > 0) {
    sections.push({ title: 'Environment & Composition', items: environment });
  }

  // Art direction section
  const artDirection: string[] = [];
  if (customizationMap['Art Style']) artDirection.push(`Art style: ${customizationMap['Art Style']}`);
  if (artDirection.length > 0) {
    sections.push({ title: 'Art Direction', items: artDirection });
  }

  // Build final prompt
  let prompt = 'DETAILED CHARACTER PROMPT:\n\n';

  sections.forEach((section, index) => {
    prompt += `## ${section.title}\n`;
    section.items.forEach(item => {
      prompt += `• ${item}\n`;
    });
    if (index < sections.length - 1) {
      prompt += '\n';
    }
  });

  prompt += '\n## GENERATION QUALITY\n';
  prompt += '• Highly detailed and realistic\n';
  prompt += '• Professional quality\n';
  prompt += '• Studio lighting\n';
  prompt += '• Sharp focus\n';
  prompt += '• 4K resolution\n';

  return prompt;
};

export const generateStructuredPrompt = (character: CharacterData): string => {
  const prompt = generatePrompt(character);

  // Convert to a cleaner format suitable for image generation APIs
  return prompt
    .replace(/## /g, '')
    .replace(/• /g, '')
    .split('\n')
    .filter(line => line.trim())
    .join(', ');
};
