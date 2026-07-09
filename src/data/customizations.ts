import { CustomizationCategory, CustomizationOption } from '../types';

// Helper to generate SVG thumbnails (placeholder)
const generateThumbnail = (text: string, color: string) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect fill='${encodeURIComponent(color)}' width='48' height='48'/%3E%3Ctext x='50%25' y='50%25' font-size='10' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;

// Gender category
const genderOptions: CustomizationOption[] = [
  { id: 'gender-male', category: 'gender', name: 'Male', value: 'male', imageUrl: generateThumbnail('M', '%234CAF50') },
  { id: 'gender-female', category: 'gender', name: 'Female', value: 'female', imageUrl: generateThumbnail('F', '%23E91E63') },
  { id: 'gender-nonbinary', category: 'gender', name: 'Non-binary', value: 'nonbinary', imageUrl: generateThumbnail('NB', '%239C27B0') },
  { id: 'gender-androgynous', category: 'gender', name: 'Androgynous', value: 'androgynous', imageUrl: generateThumbnail('A', '%233F51B5') },
];

// Age category
const ageOptions: CustomizationOption[] = [
  { id: 'age-child', category: 'age', name: 'Child (5-12)', value: 'child', imageUrl: generateThumbnail('Kid', '%23FF9800') },
  { id: 'age-teen', category: 'age', name: 'Teen (13-19)', value: 'teen', imageUrl: generateThumbnail('Teen', '%23FF5722') },
  { id: 'age-young-adult', category: 'age', name: 'Young Adult (20-30)', value: 'young_adult', imageUrl: generateThumbnail('YA', '%23F44336') },
  { id: 'age-adult', category: 'age', name: 'Adult (30-50)', value: 'adult', imageUrl: generateThumbnail('Ad', '%238B0000') },
  { id: 'age-senior', category: 'age', name: 'Senior (50+)', value: 'senior', imageUrl: generateThumbnail('Sr', '%23808080') },
];

// Ethnicity category
const ethnicityOptions: CustomizationOption[] = [
  { id: 'eth-caucasian', category: 'ethnicity', name: 'Caucasian', value: 'caucasian', imageUrl: generateThumbnail('C', '%23D4A574') },
  { id: 'eth-african', category: 'ethnicity', name: 'African', value: 'african', imageUrl: generateThumbnail('A', '%238B4513') },
  { id: 'eth-asian', category: 'ethnicity', name: 'Asian', value: 'asian', imageUrl: generateThumbnail('As', '%23CD853F') },
  { id: 'eth-hispanic', category: 'ethnicity', name: 'Hispanic/Latin', value: 'hispanic', imageUrl: generateThumbnail('H', '%23C19A6B') },
  { id: 'eth-middle-eastern', category: 'ethnicity', name: 'Middle Eastern', value: 'middle_eastern', imageUrl: generateThumbnail('ME', '%23D2B48C') },
  { id: 'eth-mixed', category: 'ethnicity', name: 'Mixed', value: 'mixed', imageUrl: generateThumbnail('M', '%23F0E68C') },
  { id: 'eth-indigenous', category: 'ethnicity', name: 'Indigenous', value: 'indigenous', imageUrl: generateThumbnail('I', '%238B7355') },
];

// Skin tone category (20+ options)
const skinToneOptions: CustomizationOption[] = [
  { id: 'skin-very-pale', category: 'skin_tone', name: 'Very Pale', value: 'very_pale', imageUrl: generateThumbnail('VP', '%23F8F8F8') },
  { id: 'skin-pale', category: 'skin_tone', name: 'Pale', value: 'pale', imageUrl: generateThumbnail('P', '%23F5DEB3') },
  { id: 'skin-fair', category: 'skin_tone', name: 'Fair', value: 'fair', imageUrl: generateThumbnail('F', '%23FFE4B5') },
  { id: 'skin-light', category: 'skin_tone', name: 'Light', value: 'light', imageUrl: generateThumbnail('L', '%23FDBCB4') },
  { id: 'skin-medium', category: 'skin_tone', name: 'Medium', value: 'medium', imageUrl: generateThumbnail('M', '%23C19A6B') },
  { id: 'skin-olive', category: 'skin_tone', name: 'Olive', value: 'olive', imageUrl: generateThumbnail('O', '%23808000') },
  { id: 'skin-tan', category: 'skin_tone', name: 'Tan', value: 'tan', imageUrl: generateThumbnail('T', '%23D2691E') },
  { id: 'skin-deep', category: 'skin_tone', name: 'Deep', value: 'deep', imageUrl: generateThumbnail('D', '%238B4513') },
  { id: 'skin-dark', category: 'skin_tone', name: 'Dark', value: 'dark', imageUrl: generateThumbnail('Dk', '%23654321') },
  { id: 'skin-very-dark', category: 'skin_tone', name: 'Very Dark', value: 'very_dark', imageUrl: generateThumbnail('VD', '%23000000') },
];

// Face shape category
const faceShapeOptions: CustomizationOption[] = [
  { id: 'face-oval', category: 'face_shape', name: 'Oval', value: 'oval', imageUrl: generateThumbnail('OV', '%23673AB7') },
  { id: 'face-round', category: 'face_shape', name: 'Round', value: 'round', imageUrl: generateThumbnail('RO', '%236A1B9A') },
  { id: 'face-square', category: 'face_shape', name: 'Square', value: 'square', imageUrl: generateThumbnail('SQ', '%23512DA8') },
  { id: 'face-heart', category: 'face_shape', name: 'Heart', value: 'heart', imageUrl: generateThumbnail('HT', '%233F51B5') },
  { id: 'face-oblong', category: 'face_shape', name: 'Oblong', value: 'oblong', imageUrl: generateThumbnail('OB', '%235C6BC0') },
  { id: 'face-diamond', category: 'face_shape', name: 'Diamond', value: 'diamond', imageUrl: generateThumbnail('DM', '%237986CB') },
  { id: 'face-pear', category: 'face_shape', name: 'Pear', value: 'pear', imageUrl: generateThumbnail('PE', '%239FA8DA') },
];

// Eyes category (30+ options)
const eyeOptions: CustomizationOption[] = [
  { id: 'eye-almond', category: 'eyes', name: 'Almond', value: 'almond', imageUrl: generateThumbnail('AL', '%238E24AA') },
  { id: 'eye-round', category: 'eyes', name: 'Round', value: 'round', imageUrl: generateThumbnail('RO', '%2390409C') },
  { id: 'eye-hooded', category: 'eyes', name: 'Hooded', value: 'hooded', imageUrl: generateThumbnail('HO', '%23AB47BC') },
  { id: 'eye-monolid', category: 'eyes', name: 'Monolid', value: 'monolid', imageUrl: generateThumbnail('MO', '%23BA68C8') },
  { id: 'eye-upturned', category: 'eyes', name: 'Upturned', value: 'upturned', imageUrl: generateThumbnail('UP', '%23CE93D8') },
  { id: 'eye-downturned', category: 'eyes', name: 'Downturned', value: 'downturned', imageUrl: generateThumbnail('DW', '%23E1BEE7') },
  { id: 'eye-close-set', category: 'eyes', name: 'Close-set', value: 'close_set', imageUrl: generateThumbnail('CS', '%23F8BBD0') },
  { id: 'eye-wide-set', category: 'eyes', name: 'Wide-set', value: 'wide_set', imageUrl: generateThumbnail('WS', '%23FCE4EC') },
];

// Eye color category (20+ options)
const eyeColorOptions: CustomizationOption[] = [
  { id: 'eyecolor-brown', category: 'eye_color', name: 'Brown', value: 'brown', imageUrl: generateThumbnail('BR', '%238B4513') },
  { id: 'eyecolor-dark-brown', category: 'eye_color', name: 'Dark Brown', value: 'dark_brown', imageUrl: generateThumbnail('DB', '%23654321') },
  { id: 'eyecolor-black', category: 'eye_color', name: 'Black', value: 'black', imageUrl: generateThumbnail('BK', '%23000000') },
  { id: 'eyecolor-blue', category: 'eye_color', name: 'Blue', value: 'blue', imageUrl: generateThumbnail('BL', '%232196F3') },
  { id: 'eyecolor-light-blue', category: 'eye_color', name: 'Light Blue', value: 'light_blue', imageUrl: generateThumbnail('LB', '%2364B5F6') },
  { id: 'eyecolor-green', category: 'eye_color', name: 'Green', value: 'green', imageUrl: generateThumbnail('GR', '%234CAF50') },
  { id: 'eyecolor-hazel', category: 'eye_color', name: 'Hazel', value: 'hazel', imageUrl: generateThumbnail('HZ', '%2DAA', '%23CD853F') },
  { id: 'eyecolor-gray', category: 'eye_color', name: 'Gray', value: 'gray', imageUrl: generateThumbnail('GY', '%23808080') },
  { id: 'eyecolor-amber', category: 'eye_color', name: 'Amber', value: 'amber', imageUrl: generateThumbnail('AM', '%23FFC107') },
  { id: 'eyecolor-violet', category: 'eye_color', name: 'Violet', value: 'violet', imageUrl: generateThumbnail('VI', '%239C27B0') },
];

// Nose category (20+ options)
const noseOptions: CustomizationOption[] = [
  { id: 'nose-straight', category: 'nose', name: 'Straight', value: 'straight', imageUrl: generateThumbnail('ST', '%23F57C00') },
  { id: 'nose-button', category: 'nose', name: 'Button', value: 'button', imageUrl: generateThumbnail('BT', '%23E65100') },
  { id: 'nose-pointed', category: 'nose', name: 'Pointed', value: 'pointed', imageUrl: generateThumbnail('PT', '%23D84315') },
  { id: 'nose-bulbous', category: 'nose', name: 'Bulbous', value: 'bulbous', imageUrl: generateThumbnail('BB', '%23BF360C') },
  { id: 'nose-crooked', category: 'nose', name: 'Crooked', value: 'crooked', imageUrl: generateThumbnail('CR', '%238D6E63') },
  { id: 'nose-hooked', category: 'nose', name: 'Hooked', value: 'hooked', imageUrl: generateThumbnail('HO', '%236D4C41') },
  { id: 'nose-greek', category: 'nose', name: 'Greek', value: 'greek', imageUrl: generateThumbnail('GR', '%235D4037') },
  { id: 'nose-roman', category: 'nose', name: 'Roman', value: 'roman', imageUrl: generateThumbnail('RO', '%233E2723') },
];

// Hair category (40+ options)
const hairOptions: CustomizationOption[] = [
  { id: 'hair-bald', category: 'hairstyle', name: 'Bald', value: 'bald', imageUrl: generateThumbnail('BD', '%23FFEBEE') },
  { id: 'hair-short', category: 'hairstyle', name: 'Short', value: 'short', imageUrl: generateThumbnail('SH', '%23F48FB1') },
  { id: 'hair-pixie', category: 'hairstyle', name: 'Pixie Cut', value: 'pixie', imageUrl: generateThumbnail('PX', '%23EC407A') },
  { id: 'hair-bob', category: 'hairstyle', name: 'Bob', value: 'bob', imageUrl: generateThumbnail('BO', '%23E91E63') },
  { id: 'hair-lob', category: 'hairstyle', name: 'Lob', value: 'lob', imageUrl: generateThumbnail('LB', '%23C2185B') },
  { id: 'hair-medium', category: 'hairstyle', name: 'Medium', value: 'medium', imageUrl: generateThumbnail('MD', '%23A01B5E') },
  { id: 'hair-long', category: 'hairstyle', name: 'Long', value: 'long', imageUrl: generateThumbnail('LG', '%23880E4F') },
  { id: 'hair-wavy', category: 'hairstyle', name: 'Wavy', value: 'wavy', imageUrl: generateThumbnail('WV', '%23AD1457') },
  { id: 'hair-curly', category: 'hairstyle', name: 'Curly', value: 'curly', imageUrl: generateThumbnail('CR', '%23C2185B') },
  { id: 'hair-braided', category: 'hairstyle', name: 'Braided', value: 'braided', imageUrl: generateThumbnail('BR', '%23E91E63') },
];

// Hair color category (30+ options)
const hairColorOptions: CustomizationOption[] = [
  { id: 'haircolor-black', category: 'hair_color', name: 'Black', value: 'black', imageUrl: generateThumbnail('BK', '%23000000') },
  { id: 'haircolor-brown', category: 'hair_color', name: 'Brown', value: 'brown', imageUrl: generateThumbnail('BR', '%238B4513') },
  { id: 'haircolor-dark-brown', category: 'hair_color', name: 'Dark Brown', value: 'dark_brown', imageUrl: generateThumbnail('DB', '%23654321') },
  { id: 'haircolor-light-brown', category: 'hair_color', name: 'Light Brown', value: 'light_brown', imageUrl: generateThumbnail('LB', '%23A0522D') },
  { id: 'haircolor-auburn', category: 'hair_color', name: 'Auburn', value: 'auburn', imageUrl: generateThumbnail('AU', '%23822A2A') },
  { id: 'haircolor-red', category: 'hair_color', name: 'Red', value: 'red', imageUrl: generateThumbnail('RD', '%23D32F2F') },
  { id: 'haircolor-blonde', category: 'hair_color', name: 'Blonde', value: 'blonde', imageUrl: generateThumbnail('BL', '%23FFD700') },
  { id: 'haircolor-light-blonde', category: 'hair_color', name: 'Light Blonde', value: 'light_blonde', imageUrl: generateThumbnail('LBL', '%23FFEE58') },
  { id: 'haircolor-dark-blonde', category: 'hair_color', name: 'Dark Blonde', value: 'dark_blonde', imageUrl: generateThumbnail('DBL', '%23FBC02D') },
  { id: 'haircolor-white', category: 'hair_color', name: 'White', value: 'white', imageUrl: generateThumbnail('WH', '%23FFFFFF') },
  { id: 'haircolor-gray', category: 'hair_color', name: 'Gray', value: 'gray', imageUrl: generateThumbnail('GY', '%23808080') },
  { id: 'haircolor-silver', category: 'hair_color', name: 'Silver', value: 'silver', imageUrl: generateThumbnail('SV', '%23C0C0C0') },
  { id: 'haircolor-blue', category: 'hair_color', name: 'Blue', value: 'blue', imageUrl: generateThumbnail('BL', '%232196F3') },
  { id: 'haircolor-purple', category: 'hair_color', name: 'Purple', value: 'purple', imageUrl: generateThumbnail('PR', '%239C27B0') },
  { id: 'haircolor-pink', category: 'hair_color', name: 'Pink', value: 'pink', imageUrl: generateThumbnail('PK', '%23E91E63') },
  { id: 'haircolor-green', category: 'hair_color', name: 'Green', value: 'green', imageUrl: generateThumbnail('GR', '%234CAF50') },
];

// Facial hair category (20+ options)
const facialHairOptions: CustomizationOption[] = [
  { id: 'facehair-none', category: 'facial_hair', name: 'None', value: 'none', imageUrl: generateThumbnail('N', '%23E8F5E9') },
  { id: 'facehair-stubble', category: 'facial_hair', name: 'Stubble', value: 'stubble', imageUrl: generateThumbnail('SB', '%23C8E6C9') },
  { id: 'facehair-short-beard', category: 'facial_hair', name: 'Short Beard', value: 'short_beard', imageUrl: generateThumbnail('SB', '%23A5D6A7') },
  { id: 'facehair-full-beard', category: 'facial_hair', name: 'Full Beard', value: 'full_beard', imageUrl: generateThumbnail('FB', '%2381C784') },
  { id: 'facehair-goatee', category: 'facial_hair', name: 'Goatee', value: 'goatee', imageUrl: generateThumbnail('GT', '%234CAF50') },
  { id: 'facehair-mustache', category: 'facial_hair', name: 'Mustache', value: 'mustache', imageUrl: generateThumbnail('MS', '%2366BB6A') },
  { id: 'facehair-sideburns', category: 'facial_hair', name: 'Sideburns', value: 'sideburns', imageUrl: generateThumbnail('SB', '%232E7D32') },
];

// Facial features (20+ options)
const facialFeatureOptions: CustomizationOption[] = [
  { id: 'feature-freckles-none', category: 'facial_features', name: 'No Freckles', value: 'no_freckles', imageUrl: generateThumbnail('NF', '%23F1F8E9') },
  { id: 'feature-freckles-light', category: 'facial_features', name: 'Light Freckles', value: 'light_freckles', imageUrl: generateThumbnail('LF', '%23DCEDC8') },
  { id: 'feature-freckles-moderate', category: 'facial_features', name: 'Moderate Freckles', value: 'moderate_freckles', imageUrl: generateThumbnail('MF', '%23C5E1A5') },
  { id: 'feature-freckles-heavy', category: 'facial_features', name: 'Heavy Freckles', value: 'heavy_freckles', imageUrl: generateThumbnail('HF', '%239CCC65') },
  { id: 'feature-scars-none', category: 'facial_features', name: 'No Scars', value: 'no_scars', imageUrl: generateThumbnail('NS', '%23F1F8E9') },
  { id: 'feature-scars-light', category: 'facial_features', name: 'Light Scars', value: 'light_scars', imageUrl: generateThumbnail('LS', '%237CB342') },
  { id: 'feature-scars-prominent', category: 'facial_features', name: 'Prominent Scars', value: 'prominent_scars', imageUrl: generateThumbnail('PS', '%23558B2F') },
];

// Body type (15+ options)
const bodyTypeOptions: CustomizationOption[] = [
  { id: 'body-slim', category: 'body_type', name: 'Slim', value: 'slim', imageUrl: generateThumbnail('SL', '%23B3E5FC') },
  { id: 'body-lean', category: 'body_type', name: 'Lean', value: 'lean', imageUrl: generateThumbnail('LN', '%2381D4FA') },
  { id: 'body-athletic', category: 'body_type', name: 'Athletic', value: 'athletic', imageUrl: generateThumbnail('AT', '%234FC3F7') },
  { id: 'body-muscular', category: 'body_type', name: 'Muscular', value: 'muscular', imageUrl: generateThumbnail('MS', '%232196F3') },
  { id: 'body-curvy', category: 'body_type', name: 'Curvy', value: 'curvy', imageUrl: generateThumbnail('CV', '%231565C0') },
  { id: 'body-average', category: 'body_type', name: 'Average', value: 'average', imageUrl: generateThumbnail('AV', '%230D47A1') },
  { id: 'body-overweight', category: 'body_type', name: 'Overweight', value: 'overweight', imageUrl: generateThumbnail('OW', '%23BBDEFB') },
];

// Clothing style (50+ options, partial list)
const clothingStyleOptions: CustomizationOption[] = [
  { id: 'clothing-casual', category: 'clothing_style', name: 'Casual', value: 'casual', imageUrl: generateThumbnail('CA', '%23FFE0B2') },
  { id: 'clothing-business', category: 'clothing_style', name: 'Business', value: 'business', imageUrl: generateThumbnail('BS', '%23FFB74D') },
  { id: 'clothing-formal', category: 'clothing_style', name: 'Formal', value: 'formal', imageUrl: generateThumbnail('FM', '%23FFA726') },
  { id: 'clothing-athletic', category: 'clothing_style', name: 'Athletic', value: 'athletic', imageUrl: generateThumbnail('AT', '%23FF9800') },
  { id: 'clothing-gothic', category: 'clothing_style', name: 'Gothic', value: 'gothic', imageUrl: generateThumbnail('GT', '%23E65100') },
  { id: 'clothing-bohemian', category: 'clothing_style', name: 'Bohemian', value: 'bohemian', imageUrl: generateThumbnail('BH', '%23BF360C') },
  { id: 'clothing-punk', category: 'clothing_style', name: 'Punk', value: 'punk', imageUrl: generateThumbnail('PK', '%236D4C41') },
  { id: 'clothing-vintage', category: 'clothing_style', name: 'Vintage', value: 'vintage', imageUrl: generateThumbnail('VG', '%235D4037') },
  { id: 'clothing-steampunk', category: 'clothing_style', name: 'Steampunk', value: 'steampunk', imageUrl: generateThumbnail('SP', '%233E2723') },
  { id: 'clothing-fantasy', category: 'clothing_style', name: 'Fantasy', value: 'fantasy', imageUrl: generateThumbnail('FN', '%23D7CCC8') },
];

// Occupation (50+ options, partial list)
const occupationOptions: CustomizationOption[] = [
  { id: 'occu-student', category: 'occupation', name: 'Student', value: 'student', imageUrl: generateThumbnail('ST', '%23CEEAD6') },
  { id: 'occu-doctor', category: 'occupation', name: 'Doctor', value: 'doctor', imageUrl: generateThumbnail('DR', '%23A5D6A7') },
  { id: 'occu-engineer', category: 'occupation', name: 'Engineer', value: 'engineer', imageUrl: generateThumbnail('EN', '%2381C784') },
  { id: 'occu-artist', category: 'occupation', name: 'Artist', value: 'artist', imageUrl: generateThumbnail('AR', '%234CAF50') },
  { id: 'occu-musician', category: 'occupation', name: 'Musician', value: 'musician', imageUrl: generateThumbnail('MS', '%2366BB6A') },
  { id: 'occu-warrior', category: 'occupation', name: 'Warrior', value: 'warrior', imageUrl: generateThumbnail('WR', '%232E7D32') },
  { id: 'occu-mage', category: 'occupation', name: 'Mage', value: 'mage', imageUrl: generateThumbnail('MG', '%231B5E20') },
  { id: 'occu-rogue', category: 'occupation', name: 'Rogue', value: 'rogue', imageUrl: generateThumbnail('RG', '%23C8E6C9') },
];

// Emotion (20+ options)
const emotionOptions: CustomizationOption[] = [
  { id: 'emotion-neutral', category: 'emotion', name: 'Neutral', value: 'neutral', imageUrl: generateThumbnail('N', '%23F3E5F5') },
  { id: 'emotion-happy', category: 'emotion', name: 'Happy', value: 'happy', imageUrl: generateThumbnail('H', '%23E1BEE7') },
  { id: 'emotion-sad', category: 'emotion', name: 'Sad', value: 'sad', imageUrl: generateThumbnail('S', '%23CE93D8') },
  { id: 'emotion-angry', category: 'emotion', name: 'Angry', value: 'angry', imageUrl: generateThumbnail('A', '%23BA68C8') },
  { id: 'emotion-surprised', category: 'emotion', name: 'Surprised', value: 'surprised', imageUrl: generateThumbnail('SR', '%23AB47BC') },
  { id: 'emotion-fearful', category: 'emotion', name: 'Fearful', value: 'fearful', imageUrl: generateThumbnail('F', '%239C27B0') },
  { id: 'emotion-disgusted', category: 'emotion', name: 'Disgusted', value: 'disgusted', imageUrl: generateThumbnail('D', '%238E24AA') },
  { id: 'emotion-confident', category: 'emotion', name: 'Confident', value: 'confident', imageUrl: generateThumbnail('C', '%236A1B9A') },
];

// Art style (30+ options)
const artStyleOptions: CustomizationOption[] = [
  { id: 'art-photorealistic', category: 'art_style', name: 'Photorealistic', value: 'photorealistic', imageUrl: generateThumbnail('PR', '%23FFF9C4') },
  { id: 'art-oil-painting', category: 'art_style', name: 'Oil Painting', value: 'oil_painting', imageUrl: generateThumbnail('OP', '%23FFF59D') },
  { id: 'art-watercolor', category: 'art_style', name: 'Watercolor', value: 'watercolor', imageUrl: generateThumbnail('WC', '%23FFF176') },
  { id: 'art-pencil-sketch', category: 'art_style', name: 'Pencil Sketch', value: 'pencil_sketch', imageUrl: generateThumbnail('PS', '%23FFEE58') },
  { id: 'art-anime', category: 'art_style', name: 'Anime', value: 'anime', imageUrl: generateThumbnail('AN', '%23FFEB3B') },
  { id: 'art-manga', category: 'art_style', name: 'Manga', value: 'manga', imageUrl: generateThumbnail('MG', '%23FDD835') },
  { id: 'art-cartoon', category: 'art_style', name: 'Cartoon', value: 'cartoon', imageUrl: generateThumbnail('CT', '%23FBC02D') },
  { id: 'art-3d-render', category: 'art_style', name: '3D Render', value: '3d_render', imageUrl: generateThumbnail('3D', '%23F9A825') },
  { id: 'art-pixel-art', category: 'art_style', name: 'Pixel Art', value: 'pixel_art', imageUrl: generateThumbnail('PA', '%23F57F17') },
  { id: 'art-cyberpunk', category: 'art_style', name: 'Cyberpunk', value: 'cyberpunk', imageUrl: generateThumbnail('CP', '%23FF6F00') },
];

// Environment (30+ options)
const environmentOptions: CustomizationOption[] = [
  { id: 'env-studio', category: 'environment', name: 'Studio', value: 'studio', imageUrl: generateThumbnail('ST', '%23FFFFFF') },
  { id: 'env-urban', category: 'environment', name: 'Urban', value: 'urban', imageUrl: generateThumbnail('UR', '%23F5F5F5') },
  { id: 'env-nature', category: 'environment', name: 'Nature', value: 'nature', imageUrl: generateThumbnail('NT', '%23E8F5E9') },
  { id: 'env-forest', category: 'environment', name: 'Forest', value: 'forest', imageUrl: generateThumbnail('FR', '%23C8E6C9') },
  { id: 'env-mountain', category: 'environment', name: 'Mountain', value: 'mountain', imageUrl: generateThumbnail('MT', '%23A5D6A7') },
  { id: 'env-beach', category: 'environment', name: 'Beach', value: 'beach', imageUrl: generateThumbnail('BC', '%2381C784') },
  { id: 'env-desert', category: 'environment', name: 'Desert', value: 'desert', imageUrl: generateThumbnail('DS', '%234CAF50') },
  { id: 'env-castle', category: 'environment', name: 'Castle', value: 'castle', imageUrl: generateThumbnail('CS', '%2366BB6A') },
  { id: 'env-space', category: 'environment', name: 'Space', value: 'space', imageUrl: generateThumbnail('SP', '%232E7D32') },
];

// Lighting (20+ options)
const lightingOptions: CustomizationOption[] = [
  { id: 'light-natural', category: 'lighting', name: 'Natural', value: 'natural', imageUrl: generateThumbnail('NT', '%23FFECB3') },
  { id: 'light-golden-hour', category: 'lighting', name: 'Golden Hour', value: 'golden_hour', imageUrl: generateThumbnail('GH', '%23FFD54F') },
  { id: 'light-blue-hour', category: 'lighting', name: 'Blue Hour', value: 'blue_hour', imageUrl: generateThumbnail('BH', '%23FFCA28') },
  { id: 'light-dramatic', category: 'lighting', name: 'Dramatic', value: 'dramatic', imageUrl: generateThumbnail('DR', '%23FBC02D') },
  { id: 'light-soft', category: 'lighting', name: 'Soft', value: 'soft', imageUrl: generateThumbnail('SF', '%23F9A825') },
  { id: 'light-neon', category: 'lighting', name: 'Neon', value: 'neon', imageUrl: generateThumbnail('NE', '%23FF6F00') },
  { id: 'light-candlelight', category: 'lighting', name: 'Candlelight', value: 'candlelight', imageUrl: generateThumbnail('CL', '%235D4037') },
];

// Cinematic style (20+ options)
const cinematicStyleOptions: CustomizationOption[] = [
  { id: 'cinema-portrait', category: 'cinematic_style', name: 'Portrait', value: 'portrait', imageUrl: generateThumbnail('PT', '%23E0F2F1') },
  { id: 'cinema-wide', category: 'cinematic_style', name: 'Wide Shot', value: 'wide_shot', imageUrl: generateThumbnail('WS', '%23B2DFDB') },
  { id: 'cinema-closeup', category: 'cinematic_style', name: 'Close-up', value: 'closeup', imageUrl: generateThumbnail('CU', '%2380CBC4') },
  { id: 'cinema-full-body', category: 'cinematic_style', name: 'Full Body', value: 'full_body', imageUrl: generateThumbnail('FB', '%2326A69A') },
  { id: 'cinema-action', category: 'cinematic_style', name: 'Action', value: 'action', imageUrl: generateThumbnail('AC', '%234DB6AC') },
  { id: 'cinema-romantic', category: 'cinematic_style', name: 'Romantic', value: 'romantic', imageUrl: generateThumbnail('RM', '%2300897B') },
];

// Personality traits (30+ options)
const personalityOptions: CustomizationOption[] = [
  { id: 'pers-brave', category: 'personality', name: 'Brave', value: 'brave', imageUrl: generateThumbnail('BRV', '%23EF5350') },
  { id: 'pers-kind', category: 'personality', name: 'Kind', value: 'kind', imageUrl: generateThumbnail('KND', '%23F44336') },
  { id: 'pers-mysterious', category: 'personality', name: 'Mysterious', value: 'mysterious', imageUrl: generateThumbnail('MYS', '%23E53935') },
  { id: 'pers-playful', category: 'personality', name: 'Playful', value: 'playful', imageUrl: generateThumbnail('PLY', '%23D32F2F') },
  { id: 'pers-serious', category: 'personality', name: 'Serious', value: 'serious', imageUrl: generateThumbnail('SRS', '%23C62828') },
  { id: 'pers-wise', category: 'personality', name: 'Wise', value: 'wise', imageUrl: generateThumbnail('WIS', '%23B71C1C') },
];

export const customizationCategories: CustomizationCategory[] = [
  { id: 'gender', name: 'gender', displayName: 'Gender', options: genderOptions },
  { id: 'age', name: 'age', displayName: 'Age', options: ageOptions },
  { id: 'ethnicity', name: 'ethnicity', displayName: 'Ethnicity', options: ethnicityOptions },
  { id: 'skin_tone', name: 'skin_tone', displayName: 'Skin Tone', options: skinToneOptions },
  { id: 'face_shape', name: 'face_shape', displayName: 'Face Shape', options: faceShapeOptions },
  { id: 'eyes', name: 'eyes', displayName: 'Eyes', options: eyeOptions },
  { id: 'eye_color', name: 'eye_color', displayName: 'Eye Color', options: eyeColorOptions },
  { id: 'nose', name: 'nose', displayName: 'Nose', options: noseOptions },
  { id: 'hairstyle', name: 'hairstyle', displayName: 'Hairstyle', options: hairOptions },
  { id: 'hair_color', name: 'hair_color', displayName: 'Hair Color', options: hairColorOptions },
  { id: 'facial_hair', name: 'facial_hair', displayName: 'Facial Hair', options: facialHairOptions },
  { id: 'facial_features', name: 'facial_features', displayName: 'Facial Features', options: facialFeatureOptions },
  { id: 'body_type', name: 'body_type', displayName: 'Body Type', options: bodyTypeOptions },
  { id: 'clothing_style', name: 'clothing_style', displayName: 'Clothing Style', options: clothingStyleOptions },
  { id: 'occupation', name: 'occupation', displayName: 'Occupation', options: occupationOptions },
  { id: 'emotion', name: 'emotion', displayName: 'Emotion', options: emotionOptions },
  { id: 'art_style', name: 'art_style', displayName: 'Art Style', options: artStyleOptions },
  { id: 'environment', name: 'environment', displayName: 'Environment', options: environmentOptions },
  { id: 'lighting', name: 'lighting', displayName: 'Lighting', options: lightingOptions },
  { id: 'cinematic_style', name: 'cinematic_style', displayName: 'Cinematic Style', options: cinematicStyleOptions },
  { id: 'personality', name: 'personality', displayName: 'Personality', options: personalityOptions },
];
