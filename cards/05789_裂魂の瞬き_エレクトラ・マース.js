{
	name: "裂魂の瞬き エレクトラ・マース",
	cardno: 5789,
	imageno: 7614,
	hp: 2425,
	atk: 4035,
	cost: 45,
	attr: [2, -1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<属性特効連撃>3チェインで水属性の敵単体へ特効10連撃(525%)",
		proc: ChainDualAttrAttack(5.25, 3, 10, [0, 1, 0, 0, 0]),
	},
	ss1: {
		desc: "<多弾魔術>敵単体へ雷属性の10回連続ダメージ(180%)",
		turn: 5,
		proc: [ss_damage_s(1.8, [2], 10)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(0, 200),
		Statusup(200, 0),
		Fastskill(2),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Spec_statusup(0, 200, [8, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Spec_statusup(200, 0, [8, ]),
	],
	as2: {
		desc: "<属性特効連撃>3チェインで水属性の敵単体へ特効10連撃(625%)",
		proc: ChainDualAttrAttack(6.25, 3, 10, [0, 1, 0, 0, 0]),
	},
	ss2: {
		desc: "<多弾魔術>敵単体へ雷属性の10回連続ダメージ、5チェイン消費しさらにダメージアップ(320%/640%)",
		turn: 8,
		proc: [ss_chain_cost_skill(5, ss_damage_s(6.4, [2], 10), ss_damage_s(3.2, [2], 10))],
	},
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 500),
	],
}