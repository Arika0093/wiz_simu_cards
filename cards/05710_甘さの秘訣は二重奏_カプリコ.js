{
	name: "甘さの秘訣は二重奏 カプリコ",
	cardno: 5710,
	imageno: 7524,
	hp: 3515,
	atk: 2141,
	cost: 46,
	attr: [0, 3],
	species: [9],
	disable: true,
	islegend: true,
	ape: "大魔道杯 with グリコ",
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方を回復、5チェインでさらに回復(10%/15%)",
		proc: [Heal(0.10, [1, 0, 0, 0, 0], 0), Heal(0.15, [1, 0, 0, 0, 0], 5)],
	},
	ss1: {
		desc: "<状態異常無効>2ターン敵の状態異常攻撃を無効化する、5チェインを消費さらに2ターン無効化",
		turn: 7,
		proc: [ss_chain_cost_skill(5, ss_absattack_disable(4), ss_absattack_disable(2))],
	},
	awakes: [
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Statusup(200, 0),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Fastskill(1),
		Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
		NEFTJOD(30),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Fastskill(2),
		Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
		Awake_noeffect("経験値取得量アップ", 1),
	],
	as2: {
		desc: "<回復>火属性の味方を回復、5チェインでさらに回復(13%/18%)",
		proc: [Heal(0.13, [1, 0, 0, 0, 0], 0), Heal(0.18, [1, 0, 0, 0, 0], 5)],
	},
	ss2: {
		desc: "<状態異常無効>3ターン敵の状態異常攻撃を無効化する、5チェインを消費さらに3ターン無効化",
		turn: 9,
		proc: [ss_chain_cost_skill(5, ss_absattack_disable(6), ss_absattack_disable(3))],
	},
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		Statusup(500, 0),
	],
}