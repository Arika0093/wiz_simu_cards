{
	name: "直影流継承者 ミサギ・ヤノ",
	cardno: 7796,
	imageno: 9882,
	hp: 2865,
	atk: 3733,
	cost: 41,
	attr: [2,-1],
	species: [8],
	islegend: false,
	ape: "大魔道杯 with 魔轟三鉄傑",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(350%)",
		proc: ChainAttack(3.5, 5),
	},
	ss1: {
		desc: "<ダメージ強化>1ターン溜めた後、1ターン雷属性の味方の攻撃力をアップ(150%)",
		turn: 6,
		charged: 1,
		proc: [ss_enhance_all(1.5, 1, [0,0,1,0,0])],
	},
	awakes: [
		Statusup(0,200),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],1),
		Statusup(200,0),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Spec_statusup(0,200, [8,]),
		Spec_statusup(200,0, [8,]),
	],
}