{
	name: "深淵の女王 ミュール&レベリオー",
	cardno: 4249,
	imageno: 5958,
	hp: 2905,
	atk: 2323,
	cost: 47,
	attr: [0, -1],
	species: [2],
	disable: true,
	awakes: [
		NEFTJOD(30),
		Spec_statusup(0, 100, [2]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(100, 0, [2]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Spec_statusup(200, 0, [2]),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(0, 200, [2]),
	],
	as1: {
		desc: "<攻撃強化>残りHPが80％以上で火属性の味方の攻撃力をアップ/+50％",
		proc: add_cond(ChainEnhance(0.5, [1,0,0,0,0], 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化>残りHPが80％以上で火属性の味方の攻撃力をアップ/+70％",
		proc: add_cond(ChainEnhance(0.7, [1,0,0,0,0], 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
}