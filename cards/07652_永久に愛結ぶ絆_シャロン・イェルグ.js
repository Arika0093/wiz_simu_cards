{
	name: "永久に愛結ぶ絆 シャロン・イェルグ",
	cardno: 7652,
	imageno: 9722,
	hp: 4751,
	atk: 2678,
	cost: 55,
	attr: [1,3],
	species: [3],
	disable: true,
	islegend: true,
	ape: "Christmas2014",
	as1: {
		desc: "<攻撃強化・ガード>水属性の味方の攻撃力をアップ、さらに全属性のダメージを10%軽減、パネルの色が増す度さらに攻撃力アップ(30%/50%/80%)",
		proc: [ChainPanelsEnhance(0.3, 0.5, 0.8, [0,1,0,0,0], 0), as_guard(0.1, [1,1,1,1,1], 0)],
	},
	ss1: {
		desc: "<状態異常回復>味方全体のHPを回復し、状態異常を回復(50%)",
		turn: 7,
		proc: [ss_abstate_cure(), ss_heal(0.5)],
	},
	awakes: [
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,0,1,0,]),
		Heal_afterbattle(10),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [0,0,0,1,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Spec_statusup(400,0, [3,]),
		Spec_statusup(0,400, [3,]),
	],
	as2: {
		desc: "<攻撃強化・ガード>水属性の味方の攻撃力をアップ、さらに全属性のダメージを10%軽減、パネルの色が増す度さらに攻撃力アップ(60%/80%/110%)",
		proc: [ChainPanelsEnhance(0.6, 0.8, 1.1, [0,1,0,0,0], 0), as_guard(0.1, [1,1,1,1,1], 0)],
	},
	ss2: {
		desc: "<状態異常回復&蘇生>味方全体のHPを完全回復し、状態異常を回復、さらに水属性の味方を100%で蘇生",
		turn: 11,
		proc: [ss_abstate_cure(), ss_heal(1), ss_resurrection([0,1,0,0,0], 1)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
}