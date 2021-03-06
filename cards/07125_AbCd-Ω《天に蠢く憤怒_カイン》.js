{
	name: "AbCd-Ω:《天に蠢く憤怒 カイン》",
	cardno: 7125,
	imageno: 6785,
	hp: 3508,
	atk: 3304,
	cost: 53,
	attr: [2, 4],
	species: [11],
	ape: "AbCd",
	awakes: [
		Statusup(200, 0),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		NEFTJOD(60),
		Attr_relief([0, 0, 0, 1, 1, ], 30),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_relief([0, 1, 0, 0, 0, ], 20),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
	],
	as1: {
		desc: "<パネル色数攻撃>5チェインかつパネルが2色でダメージアップ、3色でさらにアップ(650%/800%)",
		proc: ChainPanelsAttack(0, 6.5, 8.0, 5),
	},
	ss1: {
		desc: "<効果解除>敵全体のガード&ダメージブロックを解除する",
		turn: 4,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all")],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<パネル色数攻撃>5チェインかつパネルが2色でダメージアップ、3色でさらにアップ(750%/900%)",
		proc: ChainPanelsAttack(0, 7.5, 9.0, 5),
	},
	ss2: {
		desc: "<効果解除大魔術>スキル反射を無視し、敵全体のガード&ダメージブロックを解除し、雷属性のダメージ。HP20%以下でさらにダメージアップ(300%/1500%)",
		turn: 7,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all"), ss_damage_all(ss_hp_less(0.20, 15.0, 3.0), [2]), ss_ignore_skillcounter()],
	},
}