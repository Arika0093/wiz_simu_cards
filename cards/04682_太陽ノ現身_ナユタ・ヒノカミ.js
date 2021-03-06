{
	name: "太陽ノ現身 ナユタ・ヒノカミ",
	cardno: 4682,
	imageno: 6441,
	hp: 3043,
	atk: 2661,
	cost: 39,
	attr: [0, -1],
	species: [9],
	awakes: [
		Spec_statusup(0, 200, [9]),
		Spec_statusup(200, 0, [9]),
		Statusup(200, 0),
		Attr_relief([0, 1, 0, 0, 0], 10),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		NEFTJOD(60),
		Fastskill(2),
		Panel_boost([1,0,0,0,0], 2),
		Spec_statusup(200, 0, [9]),
		Panel_boost([1,0,0,0,0], 2),
	],
	as1: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ/+35％",
		proc: ChainEnhance(0.35, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<自己犠牲蘇生>自分を犠牲に全員をHP75％蘇生",
		turn: 11,
		proc: [ss_resurrection([1, 1, 1, 1, 1], 0.75), ss_consume_own(1)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ/+55％",
		proc: ChainEnhance(0.55, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<自己犠牲蘇生>自分を犠牲に全員をHP100％蘇生",
		turn: 12,
		proc: [ss_resurrection([1, 1, 1, 1, 1], 1.0), ss_consume_own(1)],
	},
}