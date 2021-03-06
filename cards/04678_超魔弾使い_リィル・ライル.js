{
	name: "超魔弾使い リィル・ライル",
	cardno: 4678,
	imageno: 6437,
	hp: 1980,
	atk: 3622,
	cost: 45,
	attr: [1, -1],
	species: [8],
	awakes: [
		Fastskill(1),
		Statusup(200, 0),
		Costdown(2),
		Costdown(2),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ/400％",
		proc: ChainAttrAttack(4.0, 0, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<大魔術>敵単体へ水属性のダメージ(200％)",
		turn: 5,
		proc: [ss_damage_s(2.0, [1], 1)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ/500％",
		proc: ChainAttrAttack(5.0, 0, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<大魔術>敵単体へ水属性のダメージ(400％)",
		turn: 8,
		proc: [ss_damage_s(4.0, [1], 1)],
	},
}