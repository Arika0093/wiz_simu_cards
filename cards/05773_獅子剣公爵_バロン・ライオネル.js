{
	name: "獅子剣公爵 バロン・ライオネル",
	cardno: 5773,
	imageno: 7599,
	hp: 1953,
	atk: 2225,
	cost: 17,
	attr: [2, 1],
	species: [5],
	disable: true,
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<攻撃>敵単体へダメージアップ(160%)",
		proc: ChainAttack(1.6, 0),
	},
	ss1: {
		desc: "<回復>味方のHPを回復する(50%)",
		turn: 7,
		proc: [ss_heal(0.5)],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Costdown(2),
		Statusup(0, 100),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(100, 0),
		Spec_statusup(0, 200, [5, ]),
		Spec_statusup(200, 0, [5, ]),
		Fastskill(2),
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
	],
	as2: {
		desc: "<種族攻撃強化・攻撃>敵単体へダメージアップ、さらに亜人の味方の攻撃力をアップ(190%/50%)",
		proc: [ChainAttack(1.9, 0), ChainSpecEnhance(0.5, [1, 1, 1, 1, 1], [5], 0)],
	},
	ss2: {
		desc: "<回復>味方のHPを完全に回復する",
		turn: 9,
		proc: [ss_heal(1)],
	},
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
		Spec_statusup(0, 500, [5, ]),
	],
}