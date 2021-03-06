{
	name: "天淵の煌き アニマ・アウローラ",
	cardno: 7423,
	imageno: 9479,
	hp: 2355,
	atk: 3201,
	cost: 45,
	attr: [1,3],
	species: [0],
	islegend: true,
	ape: "心竜天翔 Rising Dragon",
	is_dist: true,
	as1: {
		desc: "<属性特効連撃>火・闇属性の敵単体へ特効3連撃(400%)",
		proc: ChainDualAttrAttack(4.0, 0, 3, [1,0,0,0,1]),
	},
	ss1: {
		desc: "<残滅大魔術>6ターン溜めた後、スキル反射を無視し、敵全体へ水属性のダメージ(500%)、さらに10ターンの間、水属性のダメージ(500%)",
		turn: 7,
		charged: 6,
		proc: [ss_continue_damage(5.0, 5.0, [1], 10), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(1),
		Attr_relief([0,0,0,0,1,],10),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 100,0, [0,0,0,1,0,]),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,100, [0,0,0,1,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<属性特効連撃>火・闇属性の敵単体へ特効3連撃(500%)",
		proc: ChainDualAttrAttack(5.0, 0, 3, [1,0,0,0,1]),
	},
	ss2: {
		desc: "<残滅大魔術>6ターン溜めた後、スキル反射を無視し、敵全体へ水属性のダメージ(600%)、さらに10ターンの間、水属性のダメージ(600%)",
		turn: 9,
		charged: 6,
		proc: [ss_continue_damage(6.0, 6.0, [1], 10), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
	],
}