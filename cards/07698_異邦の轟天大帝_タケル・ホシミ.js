{
	name: "異邦の轟天大帝 タケル・ホシミ",
	cardno: 7698,
	imageno: 9780,
	hp: 3345,
	atk: 3304,
	cost: 52,
	attr: [2,3],
	species: [9],
	islegend: true,
	ape: "ウィズセレクション",
	as1: {
		desc: "<攻撃・種族数攻撃>敵単体へのダメージアップ、龍族と術士の仲間の数だけさらにアップ(280%/310%/340%/370%/400%)",
		proc: ChainDeckSpecsAttack(0.3, [0,9], 0, 1.5),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷・光属性のダメージ(150%)",
		turn: 6,
		proc: [ss_damage_all(1.5, [2, 3]), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(200,0),
		Fastskill(1),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		NEFTJOD(30),
		Spec_statusup(300,0, [0,9,]),
		Panel_boost([0,0,1,0,0,],1),
		Spec_statusup(0,300, [0,9,]),
		Fastskill(2),
	],
	as2: {
		desc: "<攻撃・種族数攻撃>敵単体へのダメージアップ、龍族と術士の仲間の数だけさらにアップ(380%/410%/440%/470%/500%)",
		proc: ChainDeckSpecsAttack(0.3, [0,9], 0, 2.5),
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷・光属性のダメージ(220%)",
		turn: 9,
		proc: [ss_damage_all(2.2, [2, 3]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
}