{
	name: "荒雷主の無二の友 ラエド・ファジ",
	cardno: 6419,
	imageno: 8358,
	hp: 2332,
	atk: 4568,
	cost: 43,
	attr: [2,-1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<種族特効>敵全体へダメージ、魔法生物の敵へさらにダメージアップ(100%/250%)",
		proc: [ChainAllAttack(1.0, 0), ChainAllSpecAttack(2.5, [7], 0)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Fastskill(2),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(2),
		Statusup(200,0),
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<種族特効>敵全体へダメージ、魔法生物の敵へさらにダメージアップ(100%/300%)",
		proc: [ChainAllAttack(1.0, 0), ChainAllSpecAttack(3.0, [7], 0)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [2]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}