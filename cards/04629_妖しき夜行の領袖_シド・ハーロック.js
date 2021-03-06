{
	name: "妖しき夜行の領袖 シド・ハーロック",
	cardno: 4629,
	imageno: 6405,
	hp: 2762,
	atk: 3251,
	cost: 46,
	attr: [0, -1],
	species: [9],
	disable: true,
	awakes: [
		Costdown(2),
		Statusup(0, 100),
		NEFTJOD(30),
		Fastskill(1),
		Costdown(2),
		Statusup(0, 100),
		Panel_boost([1,0,0,0,0], 2),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(2),
		Spec_statusup(0, 200, [9]),
	],
	as1: {
		desc: "<属性特効>味方のMAXHP10％を使い、雷属性の敵単体へ特効ダメージ/500％",
		proc: add_cond(ChainAttrAttack(5.0, 0, [0,0,1,0,0]), as_consume_all(0.1)),
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵全体へダメージ(260％)",
		turn: 7,
		proc: [ss_damage_all(2.6, [0]), ss_consume_own(0.5)],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効>味方のMAXHP10％を使い、雷属性の敵単体へ特効ダメージ/600％",
		proc: add_cond(ChainAttrAttack(6.0, 0, [0,0,1,0,0]), as_consume_all(0.1)),
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵全体へダメージ(330％)",
		turn: 9,
		proc: [ss_damage_all(3.3, [0]), ss_consume_own(0.5)],
	},
}