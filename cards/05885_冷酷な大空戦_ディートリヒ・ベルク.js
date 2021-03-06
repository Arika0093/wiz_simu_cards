{
	name: "冷酷な大空戦 ディートリヒ・ベルク",
	cardno: 5885,
	imageno: 7702,
	hp: 2451,
	atk: 3220,
	cost: 45,
	attr: [2, 0],
	species: [8],
	alias: ["元帥"],
	islegend: true,
	as1: {
		desc: "<全体攻撃>3チェインで敵全体へダメージ(180%)",
		proc: ChainAllAttack(1.8, 3),
	},
	ss1: {
		desc: "<ダメージ強化>3ターン自分の攻撃力をアップ(150%)",
		turn: 6,
		proc: [ss_enhance_own(1.5, 3)],
	},
	awakes: [
		Statusup(200, 0),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<全体攻撃>3チェインで敵全体へダメージ(220%)",
		proc: ChainAllAttack(2.2, 3),
	},
	ss2: {
		desc: "<ダメージ強化>4ターン自分の攻撃力をアップ(250%)、3チェインを消費しさらに3ターン継続",
		turn: 8,
		proc: [ss_chain_cost_skill(3, ss_enhance_own(2.5, 7), ss_enhance_own(2.5, 4))],
	},
	Lawake: [
		Statusup(400, 0),
		NEFTJOD(30),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
	],
}