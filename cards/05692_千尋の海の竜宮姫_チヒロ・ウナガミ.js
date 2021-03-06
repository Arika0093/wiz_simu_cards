{
	name: "千尋の海の竜宮姫 チヒロ・ウナガミ",
	cardno: 5692,
	imageno: 7513,
	hp: 3321,
	atk: 2628,
	cost: 41,
	attr: [1,-1],
	species: [9],
	islegend: true,
	alias: ["/sette_wiz", "/wiztools"],
	as1: {
		desc: "<回復>水属性の味方のHPを回復(13%)",
		proc: Heal(0.13, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)],
	},
	awakes: [
		Fastskill(1),
		Statusup(200,0),
		Panel_boost([0,1,0,0,0,],1),
		Costdown(2),
		Statusup(200,0),
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],2),
		Statusup(0,200),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_statusup(0,200, [0,1,0,0,0,]),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復(16%)",
		proc: Heal(0.16, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<遅延>敵全体の攻撃ターンを2遅らせる、さらに味方全体のHPを回復する(50%)",
		turn: 10,
		proc: [ss_delay_all(2), ss_heal(0.5)],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}