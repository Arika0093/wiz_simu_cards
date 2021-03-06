{
	name: "ぼんぼり金魚と舞う夜空 初音ミク",
	cardno: 8025,
	imageno: 6627,
	hp: 5121,
	atk: 2339,
	cost: 54,
	attr: [0,2],
	species: [9],
	islegend: true,
	ape: "コラボ(ミク)",
	as1: {
		desc: "<複属性攻撃強化>5チェインで火属性の味方の攻撃力をアップ、複属性が雷属性だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [1,0,0,0,0], [0,0,1,0,0], 5),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)],
	},
	as2: {
		desc: "<複属性攻撃強化>5チェインで火属性の味方の攻撃力をアップ、複属性が雷属性だとさらにアップ(90%/140%)",
		proc: ChainEnhance_SubAttr(0.9, 1.4, [1,0,0,0,0], [0,0,1,0,0], 5),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス2の効果を付与",
		turn: 5,
		proc: [panel_chainplus(2)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200,[1,0,0,0,0,]),
		Attr_statusup(200,0,[1,0,0,0,0,]),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([0,0,1,0,0,],20),
		Attr_statusup_sattr(100,0,[1,0,0,0,0,],300,0,[0,0,1,0,0,]),
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,300,[0,0,1,0,0,]),
		Fastskill(2),
	],
	Lawake: [
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,200,[0,0,1,0,0,]),
		Statusup(500,0),
	],
}