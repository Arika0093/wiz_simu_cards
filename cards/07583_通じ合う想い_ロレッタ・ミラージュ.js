{
	name: "通じ合う想い ロレッタ・ミラージュ",
	cardno: 7583,
	imageno: 9646,
	hp: 3491,
	atk: 2674,
	cost: 47,
	attr: [1,3],
	species: [9],
	islegend: true,
	ape: "ギルドマスターとChristmas",
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<多弾魔術>スキル反射を無視し、敵単体へ水・光属性の5回連続ダメージ(250%)",
		turn: 5,
		proc: [ss_damage_s(2.5, [1,3], 5), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0,200),
		Costdown(10),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Fastskill(2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Guild_statusup(0, 1000),
		Guild_statusup(1000, 0),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復(14%)",
		proc: Heal(0.14, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<多弾魔術>チェインプラス1の効果、スキル反射を無視し、敵単体へ水・光属性の5回連続ダメージ(250%)",
		turn: 7,
		proc: [panel_chainplus(1), ss_damage_s(2.5, [1,3], 5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}