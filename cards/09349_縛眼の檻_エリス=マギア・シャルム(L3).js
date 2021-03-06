{
	name: "縛眼の檻 エリス=マギア・シャルム(L3)",
	cardno: 9349,
	imageno: 6373,
	hp: 5722,
	atk: 1999,
	cost: 54,
	attr: [1,2],
	species: [9],
	islegend: true,
	ape: "UG",
	as1: {
		desc: "<回復>水・雷属性の味方を回復(10%)、7チェインで更に回復(7%)",
		proc: [Heal(0.10, [0,1,1,0,0], 0), Heal(0.17, [0,1,1,0,0], 7)],
	},
	ss1: {
		desc: "<複属性ダメージ強化>味方全体のMAXHPの50%を使い、5ターンの間、水属性の攻撃力をアップ(100%)、複属性が雷属性だとさらにアップ(50%)",
		turn: 6,
		proc: [ss_enhance_all_subattr(1.0, 1.5, 5, [0,1,0,0,0], [0,0,1,0,0]), ss_consume_all(0.5)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(4),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [0,0,1,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>水・雷属性の味方を回復(13%)、7チェインで更に回復(7%)",
		proc: [Heal(0.13, [0,1,1,0,0], 0), Heal(0.20, [0,1,1,0,0], 7)],
	},
	ss2: {
		desc: "<複属性ダメージ強化>味方全体のMAXHPの50%を使い、5ターンの間、水属性の攻撃力をアップ(100%)、複属性が雷属性だとさらにアップ(100%)",
		turn: 8,
		proc: [ss_enhance_all_subattr(1.0, 2.0, 5, [0,1,0,0,0], [0,0,1,0,0]), ss_consume_all(0.5)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Statusup(1000,0),
	],
}