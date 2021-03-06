{
	name: "My Favorite Triangles エニィ",
	cardno: 10152,
	imageno: 12519,
	hp: 3515,
	atk: 4211,
	cost: 62,
	attr: [0,3],
	species: [8],
	islegend: true,
	ape: "ゴールデン2018",
	as1: {
		desc: "<攻撃・回復>敵単体へのダメージアップ(250%)、さらに火属性の味方のHPを回復(7%)",
		proc: [ChainAttack(2.5, 0), Heal(0.07, [1,0,0,0,0], 0)],
	},
	ss1: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵全体へ光属性のダメージ(100%)、さらにクエスト中の累計回復量に応じてダメージアップ(上限値:25万回復で7000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_all(70.0, 250000, [3]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,1,0,]),
		Fastskill(5),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid("ss_sealed"),
		Fastskill(5),
		Heal_afterbattle(20),
	],
	as2: {
		desc: "<攻撃・回復>敵単体へのダメージアップ(350%)、さらに火属性の味方のHPを回復(10%)",
		proc: [ChainAttack(3.5, 0), Heal(0.10, [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵全体へ光属性のダメージ(100%)、さらにクエスト中の累計回復量に応じてダメージアップ(上限値:25万回復で7000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_all(70.0, 250000, [3]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,1000),
	],
}