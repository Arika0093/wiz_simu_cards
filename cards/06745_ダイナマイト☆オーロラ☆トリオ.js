{
	name: "ダイナマイト☆オーロラ☆トリオ",
	cardno: 6745,
	imageno: 8699,
	hp: 3649,
	atk: 3121,
	cost: 52,
	attr: [1,3],
	species: [9],
	disable: true,
	islegend: true,
	ape: "真夏のグレート・クイズ・ウォー",
	alias: ["ピピア"],
	as1: {
		desc: "<連撃・ガード>6チェインで敵単体を3回連続攻撃(400%)、さらに全属性のダメージを10%軽減",
		proc: [ChainDualAttack(4.0, 6, 3), as_guard(0.1, [1, 1, 1, 1, 1], 6)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Statusup(200,0),
		Fastskill(2),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_sattr(200, 0, [0,1,0,0,0], 200, 0, [0,0,0,1,0]),
		Attr_statusup_sattr(0, 200, [0,1,0,0,0], 0, 200, [0,0,0,1,0]),
	],
	as2: {
		desc: "<連撃・ガード>6チェインで敵単体を3回連続攻撃(500%)、さらに全属性のダメージを10%軽減",
		proc: [ChainDualAttack(5.0, 6, 3), as_guard(0.1, [1, 1, 1, 1, 1], 6)],
	},
	ss2: {
		desc: "<ガード>6ターン全属性のダメージを25%軽減し、さらに味方全体のHPを完全回復する",
		turn: 10,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 6), ss_heal(1.0)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}