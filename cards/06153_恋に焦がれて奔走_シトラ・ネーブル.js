{
	name: "恋に焦がれて奔走 シトラ・ネーブル",
	cardno: 6153,
	imageno: 8007,
	hp: 4256,
	atk: 2785,
	cost: 53,
	attr: [2, 0],
	species: [6],
	disable: true,
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<複属性攻撃強化>4チェインで雷属性の攻撃力をアップ、複属性が火属性だとさらにアップ(10%/120%)",
		proc: ChainEnhance_SubAttr(0.1, 1.2, [0, 0, 1, 0, 0], [1, 0, 0, 0, 0], 4),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 3,
		proc: [ss_panel_change([1,0,1,0,0])],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Costdown(2),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(500, 0, [6, ]),
		Attr_statusup(0, 200, [1, 0, 1, 0, 0, ]),
		Attr_statusup_sattr(200, 0, [0, 0, 1, 0, 0], 200, 0, [1, 0, 0, 0, 0]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup_sattr(0, 200, [0, 0, 1, 0, 0], 0, 200, [1, 0, 0, 0, 0]),
	],
	as2: {
		desc: "<複属性攻撃強化>4チェインで雷属性の攻撃力をアップ、複属性が火属性だとさらにアップ(40%/150%)",
		proc: ChainEnhance_SubAttr(0.4, 1.5, [0, 0, 1, 0, 0], [1, 0, 0, 0, 0], 4),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・雷属性化し、攻撃力アップの効果を付与(50%)",
		turn: 6,
		proc: [ss_panel_change([1,0,1,0,0]), panel_attackup(0.5)],
	},
	Lawake: [
		Attr_statusup(0, 200, [1, 0, 1, 0, 0, ]),
	],
}