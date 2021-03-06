{
	name: "凱旋の聖唱 リース・ヴァレリア",
	cardno: 8316,
	imageno: 5679,
	hp: 4704,
	atk: 2757,
	cost: 55,
	attr: [0,2],
	species: [8],
	disable: true,
	islegend: true,
	ape: "GW2015",
	as1: {
		desc: "<回復・攻撃強化>火・雷属性の味方のHPを回復(13%)、さらに火・雷属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.13, [1,0,1,0,0], 0), ChainEnhance(0.3, [1,0,1,0,0], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 3,
		proc: [ss_panel_change([1,0,1,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Abstate_invalid("as_sealed"),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,1,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復・攻撃強化>火・雷属性の味方のHPを回復(16%)、さらに火・雷属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [1,0,1,0,0], 0), ChainEnhance(0.3, [1,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、ダメージ25%軽減の効果を付与。HP20%以下でさらにダメージ35%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attr_guard([1,1,1,1,1], ss_hp_less(0.20, 0.60, 0.25))],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_relief([1,1,1,1,1,],20),
	],
}