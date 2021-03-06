{
	name: "想いの結実 ピリア・オルピス",
	cardno: 10282,
	imageno: 12659,
	hp: 5365,
	atk: 2621,
	cost: 58,
	attr: [2,1],
	species: [9],
	islegend: true,
	ape: "幻魔特区RELOADEDⅡ",
	as1: {
		desc: "<攻撃強化>雷属性の味方の攻撃力をアップ(60%)、解答が早いほどさらにアップ(20%)(上限:4段階)",
		proc: add_cond(ChainEnhance(0.6, [0,0,1,0,0], 0), as_timedep(0.2)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 2,
		proc: [ss_panel_change([0,0,1,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Fastskill(3),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_subattr(0, 500),
		NEFTJOD(30),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(3),
	],
	as2: {
		desc: "<攻撃強化>雷属性の味方の攻撃力をアップ(90%)、解答が早いほどさらにアップ(20%)(上限:4段階)",
		proc: add_cond(ChainEnhance(0.9, [0,0,1,0,0], 0), as_timedep(0.2)),
	},
	ss2: {
		desc: "<融合パネル変換>ジャンルパネルを雷属性化し、スキルチャージの効果を付与、デッキ内の精霊がもつ属性数が多いほどさらに効果値アップ(上限値:3)(効果は、SPスキルを使うまで重複しません)",
		turn: 8,
		proc: [ss_panel_change([0,0,1,0,0]), panel_skillboost(1), panel_skillboost(3)],
	},
	Lawake: [
		Attr_statusup_subattr(0, 200),
		Statusup(1000,0),
	],
}