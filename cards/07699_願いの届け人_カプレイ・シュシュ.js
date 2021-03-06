{
	name: "願いの届け人 カプレイ・シュシュ",
	cardno: 7699,
	imageno: 5562,
	hp: 4382,
	atk: 3758,
	cost: 50,
	attr: [2,-1],
	species: [4],
	islegend: true,
	ape: "ウィズセレクション",
	as1: {
		desc: "<回復>雷属性の味方を回復、5チェインで更に回復(11%/16%)",
		proc: [Heal(0.11, [0,0,1,0,0], 0), Heal(0.16, [0,0,1,0,0], 5)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 2,
		proc: [ss_panel_change([0,0,1,0,0])],
	},
	awakes: [
		Fastskill(1),
		Statusup(200,0),
		Spec_statusup(0,200, [4,6,]),
		Attr_relief([1,0,0,0,0,],10),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Spec_statusup(200,0, [4,6,]),
		Fastskill(2),
		Spec_statusup(400,0, [4,6,]),
		Spec_statusup(0,400, [4,6,]),
		Awake_noeffect("経験値取得量アップ",1),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復、5チェインで更に回復(14%/19%)",
		proc: [Heal(0.14, [0,0,1,0,0], 0), Heal(0.19, [0,0,1,0,0], 5)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、ダメージ25%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([0,0,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
		NEFTJOD(30),
	],
}