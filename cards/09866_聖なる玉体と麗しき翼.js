{
	name: "聖なる玉体と麗しき翼",
	cardno: 9866,
	imageno: 9720,
	hp: 2003,
	atk: 6981,
	cost: 46,
	attr: [2,-1],
	species: [9],
	alias: ["デバフ", "巨乳"],
	islegend: true,
	ape: "Christmas2016",
	alias: ["主上", "しゅじょう", "シエオラ", "セルマ", "リシア"],
	as1: {
		desc: "<属性特効連撃>味方のMAXHP10%を使い、水属性の敵単体へ特効5連撃(700%)",
		proc: add_cond(ChainDualAttrAttack(7.0, 0, 5, [0,1,0,0,0]), as_consume_all(0.1)),
	},
	ss1: {
		desc: "<特効大魔術>味方全体で1ターン溜めた後、スキル反射を無視し、敵全体へ雷属性のダメージ(400%)、さらに水属性の敵には特効ダメージ(1050%)",
		turn: 3,
		charged: 1,
		isallcharge: true,
		proc: [ss_damage_all(special_attr([0,1,0,0,0], 14.5, 4.0), [2]), ss_ignore_skillcounter(),],
	},
	awakes: [
		Attr_statusup_oattr(300,0, [0,0,1,0,0,]),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		NEFTJOD(30),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Fastskill(3),
		Spec_statusup(0,300, [8,9,]),
		Spec_statusup(300,0, [8,9,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<属性特効連撃>味方のMAXHP10%を使い、水属性の敵単体へ特効5連撃(800%)",
		proc: add_cond(ChainDualAttrAttack(8.0, 0, 5, [0,1,0,0,0]), as_consume_all(0.1)),
	},
	ss2: {
		desc: "<特効大魔術>味方全体で1ターン溜めた後、スキル反射を無視し、敵全体へ雷属性のダメージ(400%)、さらに水属性の敵には特効ダメージ(2050%)",
		turn: 7,
		charged: 1,
		isallcharge: true,
		proc: [ss_damage_all(special_attr([0,1,0,0,0], 24.5, 4.0), [2]), ss_ignore_skillcounter(),],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
	],
}