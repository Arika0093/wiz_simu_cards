{
	name: "深遠の女王 ミュール&レベリオー",
	cardno: 6319,
	imageno: 8242,
	hp: 2950,
	atk: 3479,
	cost: 54,
	attr: [0,4],
	species: [2],
	islegend: true,
	disable: true,
	ape: "幻魔特区スザクⅡ",
	as1: {
		desc: "<複属性攻撃強化>残りHPが80%以上で火属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(50%/100%)",
		proc: add_cond(ChainEnhance_SubAttr(0.5, 1.0, [1,0,0,0,0], [0,0,0,0,1], 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	awakes: [
		NEFTJOD(30),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(1),
		Spec_statusup(300,0, [2,]),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Spec_statusup(0,300, [2,]),
	],
	as2: {
		desc: "<複属性攻撃強化>残りHPが80%以上で火属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(80%/130%)",
		proc: add_cond(ChainEnhance_SubAttr(0.8, 1.3, [1,0,0,0,0], [0,0,0,0,1], 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	Lawake: [
		Statusup(0,800),
		Statusup(500,0),
	],
}