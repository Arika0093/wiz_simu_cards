{
	name: "永遠なる愛 アンジェリカ・ヴァイル",
	cardno: 5796,
	imageno: 7579,
	hp: 4908,
	atk: 2315,
	cost: 48,
	attr: [2, 3],
	species: [1],
	disable: true,
	islegend: true,
	as1: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が光属性だとさらにアップ(30%/80%)",
		proc: ChainEnhance_SubAttr(0.3, 0.8, [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], 0),
	},
	ss1: {
		desc: "<起死回生>2ターン、致死ダメージを受けたら一度だけHP25%で起死回生",
		turn: 9,
		proc: [ss_revival(0.25, 2)],
	},
	awakes: [
		Statusup(0, 200),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Spec_statusup(400, 0, [1, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Fastskill(2),
		Spec_statusup(0, 400, [1, ]),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が光属性だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], 0),
	},
	ss2: {
		desc: "<起死回生>2ターン、致死ダメージを受けたら一度だけHP25%で起死回生、10チェインを消費しさらに3ターン継続しHP100%で起死回生",
		turn: 11,
		proc: [ss_chain_cost_skill(10, ss_revival(1.0, 5), ss_revival(0.25, 2))],
	},
	Lawake: [
		Statusup(0, 600),
		Statusup(600, 0),
	],
}