{
	name: "今こそ我が力を グウィン・ネルビア",
	cardno: 6566,
	imageno: 8462,
	hp: 1445,
	atk: 3042,
	cost: 28,
	attr: [1,-1],
	species: [9],
	islegend: true,
	ape: "USG",
	is_dist: true,
	as1: {
		desc: "<分散攻撃>4チェインで敵全体へ分散攻撃(400%)",
		proc: ChainVarianceAttack(4.0, 4),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [1]), ss_ignore_skillcounter()],
	},
	awakes: [
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],1),
		Fastskill(1),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Statusup(0,300),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Spec_statusup(200,0, [9,]),
		Fastskill(2),
		Spec_statusup(0,200, [9,]),
	],
	as2: {
		desc: "<分散攻撃>4チェインで敵全体へ分散攻撃(500%)",
		proc: ChainVarianceAttack(5.0, 4),
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Abstate_invalid("ss_sealed"),
		Statusup(0,500),
	],
}