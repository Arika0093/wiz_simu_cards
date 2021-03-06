{
	name: "月夜にさざめく波音色 オウギ・セツ",
	cardno: 8406,
	imageno: 10547,
	hp: 6043,
	atk: 2301,
	cost: 52,
	attr: [1,-1],
	species: [1],
	islegend: true,
	ape: "大魔道杯 in 喰牙RIZE",
	is_dist: true,
	as1: {
		desc: "<回復>味方全体のHPを回復(7%)、デッキに単色の精霊が多いほど、さらに回復(2%)（上限:5段階)",
		proc: add_cond(Heal(0.07, [1, 1, 1, 1, 1]), as_singleattr_num(0, 0.02)),
	},
	ss1: {
		desc: "<ダメージブロック>5ターン300以下の全属性ダメージを無効化し、デッキに単色の精霊が多いほど、さらにアップ(100)(上限:5段階)",
		turn: 9,
		proc: [ss_damageblock_all(ss_singleattr_num(300, 100), 5)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(2),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Heal_afterbattle(10),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(10%)、デッキに単色の精霊が多いほど、さらに回復(2%)（上限:5段階)",
		proc: add_cond(Heal(0.10, [1, 1, 1, 1, 1]), as_singleattr_num(0, 0.02)),
	},
	ss2: {
		desc: "<ダメージブロック>5ターン500以下の全属性ダメージを無効化し、デッキに単色の精霊が多いほど、さらにアップ(100)(上限:5段階)",
		turn: 11,
		proc: [ss_damageblock_all(ss_singleattr_num(500, 100), 5)],
	},
	Lawake: [
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}