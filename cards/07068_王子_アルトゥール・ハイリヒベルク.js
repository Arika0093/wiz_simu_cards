{
	name: "王子 アルトゥール・ハイリヒベルク",
	cardno: 7068,
	imageno: 9061,
	hp: 3320,
	atk: 2510,
	cost: 45,
	attr: [0,1],
	species: [8],
	islegend: true,
	ape: "ドルキマスⅡ",
	is_dist: true,
	as1: {
		desc: "<連撃>2チェインで敵単体を2回連続攻撃(350%)",
		proc: ChainDualAttack(3.5, 2, 2),
	},
	ss1: {
		desc: "<ガード>4ターン全属性のダメージを20%軽減する",
		turn: 6,
		proc: [ss_attr_guard([1,1,1,1,1], 0.2, 4)],
	},
	awakes: [
		Attr_relief([1,0,0,0,0,],20),
		Costdown(2),
		Statusup(0,200),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(0,200, [8,]),
		Spec_statusup(200,0, [8,]),
		Fastskill(2),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<連撃>2チェインで敵単体を2回連続攻撃(450%)",
		proc: ChainDualAttack(4.5, 2, 2),
	},
	ss2: {
		desc: "<ガード>6ターン全属性のダメージを20%軽減する",
		turn: 10,
		proc: [ss_attr_guard([1,1,1,1,1], 0.2, 6)],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}