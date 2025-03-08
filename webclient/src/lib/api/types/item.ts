export type ItemType = string
export type ItemSubType = string
export enum ItemElement {
	Fire = "fire",
	Water = "water",
	Ice = "ice",
	Electricity = "electricity",
	Acid = "acid",
	Life = "life",
	Death = "death",
}
export type Intensity = string
export type TokenName = string
export type WeaponHands = 1 | 2
export type Damage = {
	Attacks: number;
	DiceRoll: string;
	CritBuffIds: number[];
	DiceCount: number;
	SideCount: number;
	BonusDamage: number;
}

export type ItemSpec = {
	ItemId: number;
	Value: number;
	Uses: number;
	BuffIds: number[];
	WornBuffIds: number[];
	DamageReduction: number;
	WaitRounds: number;
	Hands: WeaponHands;
	Name: string;
	DisplayName: string;
	NameSimple: string;
	Description: string;
	QuestToken: string;
	Type: ItemType;
	Subtype: ItemSubType;
	Damage: Damage;
	Element: ItemElement;
	// StatMods: statmods.StatMods;
	BreakChance: number;
	Cursed: boolean;
	KeyLockId: string;
}

export type ItemTypeInfo = {
	Type: string
	Description: string
	Count: number
	MinItemId: number
	MaxItemId: number
}
