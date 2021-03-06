{
	name: "永久凍土の女皇 レリア・フェリズ",
	cardno: 7111,
	imageno: 9196,
	hp: 2008,
	atk: 4111,
	cost: 38,
	attr: [1,-1],
	species: [4],
	islegend: true,
	ape: "古の森の千年桜",
	is_dist: true,
	as1: {
		desc: "<分散攻撃>敵全体へ分散攻撃、パネルの色が増す度さらにダメージアップ(250%/350%/500%)",
		proc: [ChainVarianceAttack(2.5, 0), add_cond(ChainVarianceAttack(3.5, 0), as_panel_over2()), add_cond(ChainVarianceAttack(5.0, 0), as_panel_over3())],
	},
	ss1: {
		desc: "<大魔術>敵全体へ水属性のダメージ(120%)",
		turn: 5,
		proc: [ss_damage_all(1.2, [1])],
	},
	awakes: [
		Costdown(2),
		Fastskill(1),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Fastskill(2),
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],1),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Attr_statusup(100,0, [0,1,0,0,0,]),
	],
	as2: {
		desc: "<分散攻撃>敵全体へ分散攻撃、パネルの色が増す度さらにダメージアップ(350%/450%/600%)",
		proc: [ChainVarianceAttack(3.5, 0), add_cond(ChainVarianceAttack(4.5, 0), as_panel_over2()), add_cond(ChainVarianceAttack(6.0, 0), as_panel_over3())],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(180%)",
		turn: 8,
		proc: [ss_damage_all(1.8, [1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,400),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}