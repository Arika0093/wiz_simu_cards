{
	name: "真理と安らぎの永劫 アウラ・アマタ",
	cardno: 7116,
	imageno: 6397,
	hp: 4210,
	atk: 4230,
	cost: 52,
	attr: [1,-1],
	species: [3],
	islegend: true,
	ape: "Blader",
	as1: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃(350%)",
		proc: ChainDualAttack(3.5, 3, 3),
	},
	ss1: {
		desc: "<状態異常無効>2ターン敵の状態異常攻撃を無効化し、さらに味方全体のHPを回復(50%)",
		turn: 7,
		proc: [ss_absattack_disable(2), ss_heal(0.5)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Heal_afterbattle(10),
		Fastskill(2),
		Spec_statusup(0,400, [3,]),
		Spec_statusup(400,0, [3,]),
	],
	as2: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃(450%)",
		proc: ChainDualAttack(4.5, 3, 3),
	},
	ss2: {
		desc: "<状態異常無効>3ターン敵の状態異常攻撃を無効化し、さらに味方全体のHPを回復(50%)",
		turn: 9,
		proc: [ss_absattack_disable(3), ss_heal(0.5)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}