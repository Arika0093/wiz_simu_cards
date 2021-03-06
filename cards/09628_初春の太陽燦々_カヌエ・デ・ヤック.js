{
	name: "初春の太陽燦々 カヌエ・デ・ヤック",
	cardno: 9628,
	imageno: 11901,
	hp: 2425,
	atk: 4318,
	cost: 56,
	attr: [1,3],
	species: [1],
	islegend: true,
	ape: "謹賀新年2018",
	as1: {
		desc: "<連撃>4チェインで敵単体を4回連続攻撃(350%)、解答が早いほどさらにアップ(70%)（上限:4段階)",
		proc: add_cond(ChainDualAttack(3.5, 4, 4), as_timedep(0.7)),
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ光属性のダメージ(800%)、さらに闇属性の敵には特効ダメージ(900%)、さらに敵にトドメを刺した数だけチェインプラス1",
		turn: 3,
		chadd_killing: 1,
		proc: [ss_damage_all(special_attr([0,0,0,0,1], 17.0, 8.0), [3])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		Spec_statusup(0,500, [1,]),
		NEFTJOD(60),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [0,0,0,1,0,]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<連撃>4チェインで敵単体を4回連続攻撃(450%)、解答が早いほどさらにアップ(70%)（上限:4段階)",
		proc: add_cond(ChainDualAttack(4.5, 4, 4), as_timedep(0.7)),
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ光属性のダメージ(800%)、さらに闇属性の敵には特効ダメージ(900%)、さらに敵にトドメを刺した数だけチェインプラス1",
		turn: 3,
		chadd_killing: 1,
		proc: [ss_damage_all(special_attr([0,0,0,0,1], 17.0, 8.0), [3])],
	},
	Lawake: [
		Statusup(0,2000),
	],
}