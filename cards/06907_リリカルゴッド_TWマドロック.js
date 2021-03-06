{
	name: "リリカルゴッド T.W.マドロック",
	cardno: 6907,
	imageno: 8968,
	hp: 4102,
	atk: 2202,
	cost: 39,
	attr: [0,-1],
	species: [1],
	islegend: true,
	ape: "大魔道杯 in YAOYORO Z",
	is_dist: true,
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃、5チェインで更にダメージアップ(250%/350%)",
		proc: [ChainDualAttack(2.5, 0, 3), ChainDualAttack(3.5, 5, 3)],
	},
	ss1: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復し(15%)、味方の攻撃力をアップ(100%)",
		turn: 1,
		proc: [ss_reinforcement_all(4, [ss_regenerate(0.15, 1, "RF"), ss_enhance_all(1, 1, [1,1,1,1,1], "RF")])],
	},
	awakes: [
		Fastskill(1),
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],1),
		Statusup(0,200),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃、5チェインで更にダメージアップ(350%/450%)",
		proc: [ChainDualAttack(3.5, 0, 3), ChainDualAttack(4.5, 5, 3)],
	},
	ss2: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復し(15%)、味方の攻撃力をアップ(100%)",
		turn: 1,
		proc: [ss_reinforcement_all(4, [ss_regenerate(0.15, 1, "RF"), ss_enhance_all(1, 1, [1,1,1,1,1], "RF")])],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,500),
	],
}