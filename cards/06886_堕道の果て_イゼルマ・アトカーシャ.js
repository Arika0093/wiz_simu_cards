{
	name: "堕道の果て イゼルマ・アトカーシャ",
	cardno: 6886,
	imageno: 8866,
	hp: 3283,
	atk: 3512,
	cost: 42,
	attr: [0,-1],
	species: [2],
	islegend: true,
	as1: {
		desc: "<チェイン攻撃・攻撃強化>火属性の味方の攻撃力をアップ(30%)し、2チェインでダメージアップ(250%)",
		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainAttack(2.5, 2)],
	},
	ss1: {
		desc: "<特効大魔術>敵全体に火属性のダメージ、さらに雷属性の敵には特効ダメージ(200%/500%)",
		turn: 7,
		proc: [ss_damage_all(special_attr([0, 0, 1, 0, 0], 5.0, 2.0), [0])],
	},
	awakes: [
		Statusup(0,400),
		Statusup(400,0),
		Costdown(2),
		Fastskill(3),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(0,200, [2,]),
		NEFTJOD(30),
	],
	as2: {
		desc: "<チェイン攻撃・攻撃強化>火属性の味方の攻撃力をアップ(30%)し、2チェインでダメージアップ(350%)",
		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainAttack(3.5, 2)],
	},
	ss2: {
		desc: "<特効大魔術>敵全体に火属性のダメージ、さらに雷属性の敵には特効ダメージ(300%/1000%)",
		turn: 10,
		proc: [ss_damage_all(special_attr([0, 0, 1, 0, 0], 10.0, 2.0), [0])],
	},
	Lawake: [
		Statusup(0,400),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}