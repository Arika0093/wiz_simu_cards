{
	name: "博愛の慈母 ベルナデッタ･イルマ",
	cardno: 6476,
	imageno: 8416,
	hp: 3452,
	atk: 2314,
	cost: 46,
	attr: [1,2],
	species: [9],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<回復>水・雷属性の味方のHP回復、パネルの色が2色以上でさらに回復(11%/16%)",
		proc: ChainPanelsHeal(0.11, 0.16, 0.16, [0,1,1,0,0], 0),
	},
	ss1: {
		desc: "<回復>チェインプラス1の効果、味方全体のHPを回復する(50%)",
		turn: 4,
		proc: [ss_addchain(1), ss_heal(0.5)],
	},
	awakes: [
		Costdown(2),
		Fastskill(3),
		Statusup(200,0),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Heal_afterbattle(10),
		Spec_statusup(200,0, [9,]),
		Guild_statusup(0, 500),
		Guild_statusup(1000, 0),
	],
	as2: {
		desc: "<回復>水・雷属性の味方のHP回復、パネルの色が2色以上でさらに回復(13%/18%)",
		proc: ChainPanelsHeal(0.13, 0.18, 0.18, [0,1,1,0,0], 0),
	},
	ss2: {
		desc: "<回復>チェインプラス2の効果、さらに味方全体のHPを完全に回復する",
		turn: 8,
		proc: [ss_addchain(2), ss_heal(1)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [0,1,1,0,0,]),
	],
}