{
	name: "慈愛と悲別の眼 ミツィオラ&ルミア",
	cardno: 8262,
	imageno: 10403,
	hp: 6421,
	atk: 1253,
	cost: 52,
	attr: [0,3],
	species: [8],
	islegend: true,
	ape: "大魔道杯 in 覇眼戦線Ⅲ",
	is_dist: true,
	as1: {
		desc: "<回復・複属性攻撃強化>火属性の味方を回復(10%)し、攻撃力もアップ(30%)。複属性が光属性だとさらに攻撃力アップ(30%)",
		proc: [Heal(0.1, [1,0,0,0,0], 0), ChainEnhance_SubAttr(0.3, 0.6, [1,0,0,0,0], [0,0,0,1,0], 0)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを250アップ、のろい状態でさらに1500アップ(上限値:2000)し、さらに味方全体のHPを回復(25%)",
		turn: 4,
		proc: [ss_statusup_all(ss_is_cursed_own([1750, 1750], [250, 250]), [2000, 2000], -1), ss_heal(0.25)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(2),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,1,0,]),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,1,0,]),
		Heal_afterbattle(10),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復・複属性攻撃強化>火属性の味方を回復(13%)し、攻撃力もアップ(30%)。複属性が光属性だとさらに攻撃力アップ(30%)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), ChainEnhance_SubAttr(0.3, 0.6, [1,0,0,0,0], [0,0,0,1,0], 0)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ、のろい状態でさらに1500アップ(上限値:2000)し、さらに味方全体のHPを回復(50%)",
		turn: 7,
		proc: [ss_statusup_all(ss_is_cursed_own([2000, 2000], [250, 250]), [2000, 2000], -1), ss_heal(0.5)],
	},
	Lawake: [
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}