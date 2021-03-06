{
	name: "波間彩る月の音 ツクヨ・オトエヒナ",
	cardno: 8534,
	imageno: 6810,
	hp: 5612,
	atk: 2020,
	cost: 54,
	attr: [0,1],
	species: [1],
	disable: true,
	islegend: true,
	ape: "八百万神秘譚Ⅱ",
	as1: {
		desc: "<回復>火・水属性の味方を回復(10%)、7チェインで更に回復(7%)",
		proc: [Heal(0.10, [1,1,0,0,0], 0), Heal(0.17, [1,1,0,0,0], 7)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを1000アップ(上限値:3000)、さらにHPを回復(50%)",
		turn: 4,
		proc: [ss_statusup_all([1000, 0], [3000, 3000], -1), ss_heal(0.5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,100, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 100,0, [0,1,0,0,0,]),
		Heal_afterbattle(10),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<回復>火・水属性の味方を回復(13%)、7チェインで更に回復(7%)",
		proc: [Heal(0.13, [1,1,0,0,0], 0), Heal(0.20, [1,1,0,0,0], 7)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体のHPを1500アップ(上限値:3000)、さらにHPを完全回復",
		turn: 7,
		proc: [ss_statusup_all([1500, 0], [3000, 3000], -1), ss_heal(1)],
	},
	Lawake: [
		Statusup(1000,0),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		NEFTJOD(30),
	],
}