{
	name: "フゥウウウウ！サフィナ・ファウト",
	cardno: 9523,
	imageno: 11783,
	hp: 4655,
	atk: 1245,
	cost: 41,
	attr: [2,1],
	species: [1],
	islegend: true,
	ape: "エステレラⅡ",
	is_dist: true,
	as1: {
		desc: "<回復>水・雷属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [0,1,1,0,0], 0),
	},
	ss1: {
		desc: "<複属性回復>雷属性の味方HPを回復(40%)、複属性が水属性だとさらに回復(20%)",
		turn: 3,
		proc: [ss_heal_subattr([0,0,1,0,0], 0.4, [0,1,0,0,0], 0.6)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(2),
		Spec_statusup(0,200, [1,]),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 200,0, [0,0,1,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>水・雷属性の味方のHPを回復(15%)",
		proc: Heal(0.15, [0,1,1,0,0], 0),
	},
	ss2: {
		desc: "<複属性回復>雷属性の味方HPを回復(40%)、複属性が水属性だとさらに回復(20%)",
		turn: 3,
		proc: [ss_heal_subattr([0,0,1,0,0], 0.4, [0,1,0,0,0], 0.6)],
	},
	Lawake: [
		Abstate_invalid("ss_sealed"),
		Statusup(500,0),
	],
}