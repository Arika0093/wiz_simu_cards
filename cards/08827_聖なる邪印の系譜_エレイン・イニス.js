{
	name: "聖なる邪印の系譜 エレイン・イニス",
	cardno: 8827,
	imageno: 11026,
	hp: 5415,
	atk: 2156,
	cost: 54,
	attr: [2,4],
	species: [2],
	islegend: true,
	ape: "聖サタニック女学院2",
	as1: {
		desc: "<回復・複属性攻撃強化>雷属性の味方を回復(10%)し、攻撃力もアップ(30%)。複属性が闇属性だとさらに攻撃力アップ(30%)",
		proc: [Heal(0.1, [0,0,1,0,0], 0), ChainEnhance_SubAttr(0.3, 0.6, [0,0,1,0,0], [0,0,0,0,1], 0)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを250アップ、のろい状態でさらに1500アップ(上限値:2000)し、さらに味方全体のHPを回復(25%)",
		turn: 4,
		proc: [ss_statusup_all(ss_is_cursed_own([1750, 1750], [250, 250]), [2000, 2000], -1), ss_heal(0.25)],
	},
	as2: {
		desc: "<回復・複属性攻撃強化>雷属性の味方を回復(13%)し、攻撃力もアップ(30%)。複属性が闇属性だとさらに攻撃力アップ(30%)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), ChainEnhance_SubAttr(0.3, 0.6, [0,0,1,0,0], [0,0,0,0,1], 0)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ、のろい状態でさらに1500アップ(上限値:2000)し、さらに味方全体のHPを回復(50%)",
		turn: 7,
		proc: [ss_statusup_all(ss_is_cursed_own([2000, 2000], [500, 500]), [2000, 2000], -1), ss_heal(0.5)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200,[0,0,1,0,0,]),
		Attr_statusup(200,0,[0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(3),
		Heal_afterbattle(10),
		Attr_statusup_sattr(0,100,[0,0,1,0,0,],0,300,[0,0,0,0,1,]),
		Attr_statusup_sattr(100,0,[0,0,1,0,0,],300,0,[0,0,0,0,1,]),
		Abstate_invalid(["poison", "attr_weaken", "death_limit", "all_sealed"]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	Lawake: [
		Attr_statusup_sattr(0,100,[0,0,1,0,0,],0,300,[0,0,0,0,1,]),
		Statusup(1000,0),
	],
}