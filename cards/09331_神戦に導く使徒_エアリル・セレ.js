{
	name: "神戦に導く使徒 エアリル・セレ",
	cardno: 9331,
	imageno: 5699,
	hp: 3834,
	atk: 4029,
	cost: 62,
	attr: [0,1],
	species: [3],
	islegend: true,
	ape: "ウィズセレクション",
	as1: {
		desc: "<連撃・複属性攻撃強化>3チェインで敵単体を3回連続攻撃(350%)、さらに火属性の攻撃力をアップ(10%)、複属性が水属性だとさらにアップ(30%)",
		proc: [ChainDualAttack(3.5, 3, 3), ChainEnhance_SubAttr(0.1, 0.4, [1,0,0,0,0], [0,1,0,0,0], 3)],
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(100%)",
		turn: 2,
		proc: [panel_attackup(1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Attr_relief([0,1,0,0,0,],20),
		Spec_statusup(200,0, [3,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(3),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,1,0,0,0,]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,1,0,0,0,]),
	],
	as2: {
		desc: "<連撃・複属性攻撃強化>3チェインで敵単体を3回連続攻撃(450%)、さらに火属性の攻撃力をアップ(10%)、複属性が水属性だとさらにアップ(30%)",
		proc: [ChainDualAttack(4.5, 3, 3), ChainEnhance_SubAttr(0.1, 0.4, [1,0,0,0,0], [0,1,0,0,0], 3)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(150%)",
		turn: 4,
		proc: [panel_attackup(1.5)],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200, [1,1,0,0,0,]),
	],
}