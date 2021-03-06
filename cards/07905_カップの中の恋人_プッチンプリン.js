{
	name: "カップの中の恋人 プッチンプリン",
	cardno: 7905,
	imageno: 5999,
	hp: 5003,
	atk: 3296,
	cost: 51,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "グリコⅡ",
	as1: {
		desc: "<回復>雷属性の味方のHPを回復(14%)",
		proc: Heal(0.14, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<ダメージブロック>5ターン600以下の全属性ダメージを無効化する",
		turn: 9,
		proc: [ss_damageblock_all(600, 5)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		NEFTJOD(30),
		Attr_statusup(400,0,[0,0,1,0,0,]),
		Attr_statusup(0,400,[0,0,1,0,0,]),
		Spec_statusup(0,200,[9,]),
		Fastskill(1),
		Attr_relief([0,1,0,0,0,],10),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(2),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>雷属性の味方のHPを回復(17%)",
		proc: Heal(0.17, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<ダメージブロック>5ターン800以下の全属性ダメージを無効化する",
		turn: 11,
		proc: [ss_damageblock_all(800, 5)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100,[0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
}