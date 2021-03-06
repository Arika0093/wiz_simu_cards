{
	name: "無銘の因果 オモテ・ソラゴト",
	cardno: 7110,
	imageno: 9195,
	hp: 2757,
	atk: 3315,
	cost: 37,
	attr: [2,-1],
	species: [2],
	islegend: true,
	ape: "古の森の千年桜",
	is_dist: true,
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃(250%)",
		proc: ChainDualAttack(2.5, 0, 3),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 4,
		proc: [ss_panel_change([0,0,1,0,0])],
	},
	awakes: [
		Costdown(2),
		Statusup(0,100),
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,100),
		Statusup(200,0),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃(350%)",
		proc: ChainDualAttack(3.5, 0, 3),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(30%)",
		turn: 7,
		proc: [ss_panel_change([0,0,1,0,0]), panel_attackup(0.3)],
	},
	Lawake: [
		Statusup(400,0),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}