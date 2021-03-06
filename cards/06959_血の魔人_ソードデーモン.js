{
	name: "血の魔人 ソードデーモン",
	cardno: 6959,
	imageno: 8906,
	hp: 3057,
	atk: 4021,
	cost: 44,
	attr: [0,-1],
	species: [2],
	islegend: true,
	ape: "クロム・マグナ ゼロ",
	is_dist: true,
	as1: {
		desc: "<属性特効>3チェインで雷属性の敵単体へ特効ダメージ(475%)",
		proc: ChainAttrAttack(4.75, 3, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<残滅大魔術>敵全体へ火属性のダメージ(100%)、さらに3ターンの間火属性のダメージ(100%)",
		turn: 6,
		proc: [ss_continue_damage(1.0, 1.0, [0], 3)],
	},
	awakes: [
		NEFTJOD(30),
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Spec_statusup(200,0, [2,]),
		Spec_statusup(0,200, [2,]),
	],
	as2: {
		desc: "<属性特効>3チェインで雷属性の敵単体へ特効ダメージ(575%)",
		proc: ChainAttrAttack(5.75, 3, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<残滅大魔術>敵全体へ火属性のダメージ(200%)、さらに3ターンの間火属性のダメージ(200%)",
		turn: 8,
		proc: [ss_continue_damage(2.0, 2.0, [0], 3)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,500),
	],
}