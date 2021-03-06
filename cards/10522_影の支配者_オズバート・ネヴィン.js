{
	name: "影の支配者 オズバート・ネヴィン",
	cardno: 10522,
	imageno: 12943,
	hp: 3125,
	atk: 3111,
	cost: 49,
	attr: [0,3],
	species: [9],
	islegend: true,
	ape: "MARELESS2 夢現の狭間",
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [1,0,0,0,0,]),
	},
	ss1: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵全体へ光属性のダメージ(100%)、さらにクエスト中の累計回復量に応じてダメージアップ(上限値:15万回復で3000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_all(30.0, 150000, [3]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,0,0,1,0,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_subattr(0, 300),
		Attr_statusup_subattr(300, 0),
		Abstate_invalid("ss_sealed"),
		Fastskill(5),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復(15%)",
		proc: Heal(0.15, [1,0,0,0,0,]),
	},
	ss2: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵全体へ光属性のダメージ(100%)、さらにクエスト中の累計回復量に応じてダメージアップ(上限値:15万回復で3000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_all(30.0, 150000, [3]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,500),
	],
}