{
	name: "私たち、超無敵の ソフィ&リルム",
	cardno: 4440,
	imageno: 6134,
	hp: 2203,
	atk: 2507,
	cost: 47,
	attr: [1, 0],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ/400％",
		proc: ChainAttack(4.0, 4),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火・水属性のダメージ(150％)",
		turn: 7,
		proc: [ss_damage_all(1.5, [0,1])],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ/500％",
		proc: ChainAttack(5.0, 4),
	},
	ss2: {
		desc: "<大魔術>敵全体へ火・水属性のダメージ(220％)",
		turn: 10,
		proc: [ss_damage_all(2.2, [0,1])],
	},
}