export interface Item {
  id: string;
  name: null | string;
  description?: null | string;
  rarity?: Rarity;
  collections?: Collection[];
  team?: Category;
  image?: string;
  type?: Type | null;
  contains?: Contain[];
  first_sale_date?: null | string;
  contains_rare?: Contain[];
  special_notes?: SpecialNote[];
  crates?: Collection[];
  exclusive?: boolean;
  skin_id?: string;
  weapon?: Category;
  category?: Category;
  pattern?: Category;
  wear?: Category;
  market_hash_name?: string;
  phase?: Phase;
}

export interface Category {
  id: string;
  name: string;
}

export interface Collection {
  id: string;
  name: null | string;
  image?: string;
}

export interface Contain {
  id: string;
  name: string;
  rarity: Rarity;
  paint_index?: null | string;
  image?: string;
  phase?: Phase | null;
}

export enum Phase {
  BlackPearl = 'Black Pearl',
  Emerald = 'Emerald',
  Phase1 = 'Phase 1',
  Phase2 = 'Phase 2',
  Phase3 = 'Phase 3',
  Phase4 = 'Phase 4',
  Ruby = 'Ruby',
  Sapphire = 'Sapphire',
}

export interface Rarity {
  id: ID;
  name: Name;
  color: Color;
}

export enum Color {
  B0C3D9 = '#b0c3d9',
  D32Ce6 = '#d32ce6',
  Ded6Cc = '#ded6cc',
  E4Ae39 = '#e4ae39',
  Eb4B4B = '#eb4b4b',
  The4B69Ff = '#4b69ff',
  The5E98D9 = '#5e98d9',
  The8847Ff = '#8847ff',
}

export enum ID {
  RarityAncient = 'rarity_ancient',
  RarityAncientCharacter = 'rarity_ancient_character',
  RarityAncientWeapon = 'rarity_ancient_weapon',
  RarityCommon = 'rarity_common',
  RarityCommonWeapon = 'rarity_common_weapon',
  RarityContrabandWeapon = 'rarity_contraband_weapon',
  RarityDefault = 'rarity_default',
  RarityLegendary = 'rarity_legendary',
  RarityLegendaryCharacter = 'rarity_legendary_character',
  RarityLegendaryWeapon = 'rarity_legendary_weapon',
  RarityMythical = 'rarity_mythical',
  RarityMythicalCharacter = 'rarity_mythical_character',
  RarityMythicalWeapon = 'rarity_mythical_weapon',
  RarityRare = 'rarity_rare',
  RarityRareCharacter = 'rarity_rare_character',
  RarityRareWeapon = 'rarity_rare_weapon',
  RarityUncommonWeapon = 'rarity_uncommon_weapon',
}

export enum Name {
  BaseGrade = 'Base Grade',
  Classified = 'Classified',
  ConsumerGrade = 'Consumer Grade',
  Contraband = 'Contraband',
  Covert = 'Covert',
  Default = 'Default',
  Distinguished = 'Distinguished',
  Exceptional = 'Exceptional',
  Exotic = 'Exotic',
  Extraordinary = 'Extraordinary',
  HighGrade = 'High Grade',
  IndustrialGrade = 'Industrial Grade',
  Master = 'Master',
  MilSpecGrade = 'Mil-Spec Grade',
  Remarkable = 'Remarkable',
  Restricted = 'Restricted',
  Superior = 'Superior',
}

export interface SpecialNote {
  source: string;
  text: string;
}

export enum Type {
  AutographCapsule = 'Autograph Capsule',
  Case = 'Case',
  FantasyTrophy = 'Fantasy Trophy',
  Graffiti = 'Graffiti',
  MapContributorCoin = 'Map Contributor Coin',
  MusicKitBox = 'Music Kit Box',
  OldPickEmTrophy = "Old Pick'Em Trophy",
  OperationCoin = 'Operation Coin',
  Pass = 'Pass',
  PatchCapsule = 'Patch Capsule',
  PickEmCoin = "Pick'Em Coin",
  Pin = 'Pin',
  Pins = 'Pins',
  ServiceMedal = 'Service Medal',
  Souvenir = 'Souvenir',
  StarsForOperation = 'Stars for Operation',
  StickerCapsule = 'Sticker Capsule',
  TournamentFinalistTrophy = 'Tournament Finalist Trophy',
}
