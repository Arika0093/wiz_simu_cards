{
	name: "燼滅の鬼紅竜 ザノガラッゾ",
	cardno: 7440,
	imageno: 9425,
	hp: 2100,
	atk: 3877,
	cost: 50,
	attr: [0,2],
	species: [0],
	islegend: true,
	ape: "神竜降臨Ⅱ",
	as1: {
		desc: "<種族特効>敵全体へダメージ、龍族の敵へさらにダメージアップ(140%/200%)",
		proc: [ChainAllAttack(1.4, 0), ChainAllSpecAttack(2.0, [0], 0)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ火・雷属性のダメージ(150%)",
		turn: 6,
		proc: [ss_damage_all(1.5, [0,2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Statusup(200,0),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Fastskill(2),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,0,1,0,0,]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<種族特効>敵全体へダメージ、龍族の敵へさらにダメージアップ(170%/230%)",
		proc: [ChainAllAttack(1.7, 0), ChainAllSpecAttack(2.3, [0], 0)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ火・雷属性のダメージ(200%)",
		turn: 8,
		proc: [ss_damage_all(2.0, [0,2]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [1,0,1,0,0,]),
	],
}