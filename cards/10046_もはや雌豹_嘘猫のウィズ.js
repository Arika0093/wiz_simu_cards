{
	name: "もはや雌豹 嘘猫のウィズ",
	cardno: 10046,
	imageno: 12400,
	hp: 5002,
	atk: 1605,
	cost: 46,
	attr: [0,1],
	species: [9],
	islegend: true,
	ape: "アイドルキャッツ2",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(30%)、複属性が水属性だとさらにアップ(40%)",
		proc: [ChainEnhance_SubAttr(0.3, 0.7, [1,0,0,0,0], [0,1,0,0,0], 0)],
	},
	ss1: {
		desc: "<精霊強化>1ターン溜めた後、4ターンの間、味方全体を徐々に回復し、さらに攻撃力をアップ(20%、150%)(発動中行動不可)",
		turn: 5,
		charged: 1,
		proc: [ss_reinforcement_all(4, [ss_regenerate(0.2, 1, "RF"), ss_enhance_all(1.5, 1, [1,1,1,1,1], "RF")])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(5),
		NEFTJOD(30),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,1,0,0,0,]),
		Awake_noeffect("ゴールド取得量アップ",2),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(60%)、複属性が水属性だとさらにアップ(40%)",
		proc: [ChainEnhance_SubAttr(0.6, 1.1, [1,0,0,0,0], [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<精霊強化>1ターン溜めた後、4ターンの間、味方全体を徐々に回復し、さらに攻撃力をアップ(20%、150%)(発動中行動不可)",
		turn: 5,
		charged: 1,
		proc: [ss_reinforcement_all(4, [ss_regenerate(0.2, 1, "RF"), ss_enhance_all(1.5, 1, [1,1,1,1,1], "RF")])],
	},
	Lawake: [
		Attr_statusup(0,200, [1,1,0,0,0,]),
	],
}