{
	name: "無敵の美少女戦士 セーラームーン",
	cardno: 10026,
	imageno: 12379,
	imageno_prefix: "iruohw_",
	hp: 4569,
	atk: 3354,
	cost: 39,
	attr: [2,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(セーラームーン)",
	is_dist: true,
	as1: {
		desc: "<全体攻撃>敵全体へダメージ(150%)",
		proc: ChainAllAttack(1.5, 0),
	},
	ss1: {
		desc: "<ダメージブロック>6ターン500以下の全属性ダメージを無効化する",
		turn: 8,
		proc: [ss_damageblock_all(500, 6)],
	},
	awakes: [
		Costdown(10),
		Attr_statusup(300,0, [0,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup(0,300, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup_oattr(300,0, [0,0,1,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ(180%)",
		proc: ChainAllAttack(1.8, 0),
	},
	ss2: {
		desc: "<ダメージブロック>6ターン600以下の全属性ダメージを無効化する",
		turn: 10,
		proc: [ss_damageblock_all(600, 6)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		NEFTJOD(30),
		Statusup(500,0),
	],
}