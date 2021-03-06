{
	name: "蒼世界の双牙 クラヴィル・スティ(L1)",
	cardno: 3887,
	imageno: 5565,
	hp: 2551,
	atk: 2756,
	cost: 46,
	attr: [1, -1],
	species: [8],
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(0, 200),
		Costdown(2),
		Statusup(200, 0),
		Spec_statusup(200, 0, [8, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [8, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<全体攻撃>3チェインで敵全体へダメージ/180％",
		proc: ChainAllAttack(1.8, 3),
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを1早める",
		turn: 6,
		proc: [ss_skillboost(1)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(400, 0),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ/180％",
		proc: ChainAllAttack(1.8, 0),
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
}