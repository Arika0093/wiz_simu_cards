{
	name: "禁界忌王 ユウェル・サクラリッジ",
	cardno: 4423,
	imageno: 6168,
	hp: 2599,
	atk: 2725,
	cost: 45,
	attr: [1, -1],
	species: [9],
	awakes: [
		Statusup(0, 100),
		Costdown(2),
		Fastskill(1),
		Costdown(2),
		Statusup(200, 0),
		Fastskill(1),
		Statusup(0, 200),
		Statusup(200, 0),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<分散攻撃>3チェインで敵全体へ分散攻撃/350％÷対象数",
		proc: ChainVarianceAttack(3.5, 3),
	},
	ss1: {
		desc: "<割合削り>敵単体のHPを25％減少させる",
		turn: 9,
		proc: [ss_ratiodamage_s(0.25)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<分散攻撃>3チェインで敵全体へ分散攻撃/450％÷対象数",
		proc: ChainVarianceAttack(4.5, 3),
	},
	ss2: {
		desc: "<割合削り>敵単体のHPを30％減少させる",
		turn: 13,
		proc: [ss_ratiodamage_s(0.30)],
	},
}