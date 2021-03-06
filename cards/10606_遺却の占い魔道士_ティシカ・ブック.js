{
	name: "遺却の占い魔道士 ティシカ・ブック",
	cardno: 10606,
	imageno: 9252,
	hp: 3266,
	atk: 6924,
	cost: 53,
	attr: [0,-1],
	species: [9],
	islegend: true,
	ape: "追憶のレディアント",
	as1: {
		desc: "<属性特効>4チェインで雷属性の敵単体へ特効ダメージ(600%)、デッキに単色の精霊が多いほど、さらにダメージアップ(90%)(上限:5段階)",
		proc: add_cond(ChainAttrAttack(6.0, 4, [0,0,1,0,0]), as_singleattr_num(0, 0.9)),
	},
	ss1: {
		desc: "<反動大魔術・蝕>スキル反射を無視し、敵単体へ火属性のダメージ(精霊数×400%)(スキル使用後、味方全員が1ターン封印状態に)",
		turn: 4,
		proc: [ss_damage_s(ss_seal_all_cond(4.0), [0], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_relief([1,1,0,0,0,],10),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<属性特効>4チェインで雷属性の敵単体へ特効ダメージ(700%)、デッキに単色の精霊が多いほど、さらにダメージアップ(90%)(上限:5段階)",
		proc: add_cond(ChainAttrAttack(7.0, 4, [0,0,1,0,0]), as_singleattr_num(0, 0.9)),
	},
	ss2: {
		desc: "<反動大魔術・蝕>スキル反射を無視し、敵単体へ火属性のダメージ(精霊数×480%)(スキル使用後、味方全員が1ターン封印状態に)",
		turn: 6,
		proc: [ss_damage_s(ss_seal_all_cond(4.8), [0], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,2000),
	],
}