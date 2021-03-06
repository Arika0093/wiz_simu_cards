{
	name: "聖夜に微笑む巫女 アカリ・ヨトバリ",
	cardno: 7822,
	imageno: 9974,
	hp: 4321,
	atk: 3012,
	cost: 55,
	attr: [0,2],
	species: [9],
	islegend: true,
	as1: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(20%)、リーダー時さらにアップ(20%)。複属性が雷属性だとさらにアップ(50%)",
		proc: [ChainEnhance_SubAttr(0.2, 0.7, [1,0,0,0,0], [0,0,1,0,0], 0), add_cond( ChainEnhance_SubAttr(0.4, 0.9, [1,0,0,0,0], [0,0,1,0,0], 0),when_leader())],
	},
	ss1: {
		desc: "<複属性ダメージ強化>5ターンの間、火属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(100%/250%)",
		turn: 10,
		proc: [ss_enhance_all_subattr(1.0, 2.5, 5, [1,0,0,0,0], [0,0,1,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(50%)、リーダー時さらにアップ(20%)。複属性が雷属性だとさらにアップ(50%)",
		proc: [ChainEnhance_SubAttr(0.5, 1.0, [1,0,0,0,0], [0,0,1,0,0], 0), add_cond( ChainEnhance_SubAttr(0.7, 1.2, [1,0,0,0,0], [0,0,1,0,0], 0),when_leader())],
	},
	ss2: {
		desc: "<複属性ダメージ強化>5ターンの間、火属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(100%/250%)",
		turn: 10,
		proc: [ss_enhance_all_subattr(1.0, 2.5, 5, [1,0,0,0,0], [0,0,1,0,0])],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(1000,0),
	],
}