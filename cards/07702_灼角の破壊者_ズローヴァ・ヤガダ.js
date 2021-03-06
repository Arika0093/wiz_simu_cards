{
	name: "灼角の破壊者 ズローヴァ・ヤガダ",
	cardno: 7702,
	imageno: 5571,
	hp: 3662,
	atk: 4490,
	cost: 50,
	attr: [0, -1],
	species: [2],
	awakes: [
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0], 2),
		Attr_statusup(0, 200, [1,0,0,0,0]),
		Attr_relief([0, 1, 0, 0, 0], 10),
		Attr_statusup(200, 0, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 2),
		Attr_relief([1,0,0,0,0], 10),
		Fastskill(2),
		Spec_statusup(400, 0, [2]),
		Spec_statusup(0, 400, [2]),
	],
	as1: {
		desc: "<属性特効>5チェインで雷属性の敵単体へダメージ(650％)",
		proc: ChainAttrAttack(6.5, 5, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<特効大魔術>敵単体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(400%/1200%)",
		turn: 6,
		proc: [ss_damage_s(special_attr([0,0,1,0,0], 12, 4.0), [0], 1)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		NEFTJOD(30),
	],
	as2: {
		desc: "<属性特効>5チェインで雷属性の敵単体へダメージ(750％)",
		proc: ChainAttrAttack(7.5, 5, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<特効大魔術>敵単体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(400%/1900%)",
		turn: 9,
		proc: [ss_damage_s(special_attr([0,0,1,0,0], 19, 4.0), [0], 1)],
	},
}