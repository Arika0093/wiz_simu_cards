{
	name: "聖夜に祝福を クレティア・ブライユ",
	cardno: 9506,
	imageno: 11766,
	hp: 5105,
	atk: 2547,
	cost: 56,
	attr: [0,1],
	species: [9],
	islegend: true,
	ape: "エステレラⅡ",
	as1: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ(60%)、解答が早いほどさらにアップ(20%)（上限:4段階)",
		proc: add_cond(ChainEnhance(0.6, [1,0,0,0,0], 0), as_timedep(0.2)),
	},
	ss1: {
		desc: "<融合強化>デッキ内の精霊が持つ属性数が多いほど、火属性の味方の攻撃力、HPのステータスをアップ(上限値:2000,2500)",
		turn: 4,
		proc: [ss_statusup_all([ss_multiattr_cond(2500), ss_multiattr_cond(2000)], [2500,2500], -1, [1,0,0,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(4),
		Attr_statusup(0,300, [1,1,1,1,1,]),
		Attr_statusup(300,0, [1,1,1,1,1,]),
		Abstate_invalid("ss_sealed"),
		Awake_noeffect("心眼",1),
	],
	as2: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ(90%)、解答が早いほどさらにアップ(20%)（上限:4段階)",
		proc: add_cond(ChainEnhance(0.9, [1,0,0,0,0], 0), as_timedep(0.2)),
	},
	ss2: {
		desc: "<融合強化>デッキ内の精霊が持つ属性数が多いほど、火属性の味方の攻撃力、HPのステータスをアップ(上限値:3000,3500)",
		turn: 8,
		proc: [ss_statusup_all([ss_multiattr_cond(3500), ss_multiattr_cond(3000)], [3500,3500], -1, [1,0,0,0,0])],
	},
	Lawake: [
		Attr_statusup(0,300, [1,1,1,1,1,]),
		Statusup(500,0),
	],
}