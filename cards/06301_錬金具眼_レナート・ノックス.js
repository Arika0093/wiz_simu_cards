{
	name: "錬金具眼 レナート・ノックス",
	cardno: 6301,
	imageno: 8150,
	hp: 2312,
	atk: 4201,
	cost: 47,
	attr: [2,-1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ(400%)",
		proc: ChainAttrAttack(4.0, 0, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ雷属性のダメージ、さらに水属性の敵には特効ダメージ(200%/500%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0,1,0,0,0], 5.0, 2.0), [2])],
	},
	awakes: [
		Attr_relief([1,0,0,0,0,],10),
		Statusup(200,0),
		Costdown(2),
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],2),
		Spec_statusup(0,200, [9,]),
		Fastskill(2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Spec_statusup(200,0, [9,]),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ(500%)",
		proc: ChainAttrAttack(5.0, 0, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ雷属性のダメージ、さらに水属性の敵には特効ダメージ、3チェインを消費しさらに特効ダメージ(200%/500%/800%)",
		turn: 8,
		proc: [ss_damage_all(special_attr([0,1,0,0,0], ss_chain_cost(3, 8.0, 5.0), 2.0), [2])],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}