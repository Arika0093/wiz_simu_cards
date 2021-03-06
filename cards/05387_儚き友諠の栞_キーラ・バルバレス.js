{
	name: "儚き友諠の栞 キーラ・バルバレス",
	cardno: 5387,
	imageno: 7148,
	hp: 4429,
	atk: 1650,
	cost: 50,
	attr: [2,3],
	species: [9],
	islegend: true,
	is_dist: true,
	disable: true,
	as1: {
		desc: "<回復>雷属性の味方を回復、7チェインでさらに回復(10%/17%)",
		proc: [Heal(0.10, [0,0,1,0,0], 0), Heal(0.17, [0,0,1,0,0], 7)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを500アップ(上限値:2000)、さらにHPを回復(50%)",
		turn: 5,
		proc: [ss_statusup_all([500, 0], [2000, 2000], -1), ss_heal(0.5)],
	},
	awakes: [
		Fastskill(1),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		NEFTJOD(30),
		Spec_statusup(0,200, [9,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Heal_afterbattle(10),
		Spec_statusup(200,0, [9,]),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復、7チェインでさらに回復(13%/20%)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), Heal(0.20, [0,0,1,0,0], 7)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体のHPを1000アップ(上限値:2000)、さらにHPを完全回復",
		turn: 8,
		proc: [ss_statusup_all([1000, 0], [2000, 2000], -1), ss_heal(1)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}