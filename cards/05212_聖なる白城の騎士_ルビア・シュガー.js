{
	name: "聖なる白城の騎士 ルビア・シュガー",
	cardno: 5212,
	imageno: 7123,
	hp: 3015,
	atk: 2229,
	cost: 45,
	attr: [0,2],
	species: [8],
	disable: true,
	islegend: true,
	ape: "大魔道杯 ケーキ",
	is_dist: true,
	as1: {
		desc: "<回復>火・雷属性の味方のHPを回復(14%)",
		proc: Heal(0.14, [1,0,1,0,0], 0),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにスキルチャージプラス1の効果を付与(スキルチャージの効果は、SPスキルを使うまで重複しません)",
		turn: 6,
		proc: [panel_skillboost(1)],
	},
	awakes: [
		Statusup(200,0),
		Fastskill(1),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Statusup(200,0),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Spec_statusup(0,200, [8,]),
	],
	as2: {
		desc: "<回復>火・雷属性の味方のHPを回復(16%)",
		proc: Heal(0.16, [1,0,1,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・雷属性化し、スキルチャージプラス1の効果を付与(スキルチャージの効果は、SPスキルを使うまで重複しません)",
		turn: 8,
		proc: [ss_panel_change([1,0,1,0,0]), panel_skillboost(1)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(500,0),
	],
}