{
	name: "血の運命を断つ者 アベル・グラハム",
	cardno: 6302,
	imageno: 8151,
	hp: 2111,
	atk: 3606,
	cost: 44,
	attr: [0,-1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<チェイン攻撃>2チェインでダメージアップ(200%)、さらに敵HPを吸収する(12%)",
		proc: add_cond(ChainAttack(2.0, 2), as_hp_absorption(0.12)),
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの50%を使い敵単体へダメージ(330%)",
		turn: 6,
		proc: [ss_damage_s(3.3, [0], 1), ss_consume_own(0.5)],
	},
	awakes: [
		Statusup(0,200),
		Statusup(0,200),
		Costdown(2),
		Fastskill(1),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Spec_statusup(0,200, [8,]),
		Fastskill(2),
		Spec_statusup(200,0, [8,]),
	],
	as2: {
		desc: "<チェイン攻撃>2チェインでダメージアップ(250%)、さらに敵HPを吸収する(12%)",
		proc: add_cond(ChainAttack(2.5, 2), as_hp_absorption(0.12)),
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの50%を使い敵単体へダメージ(500%)",
		turn: 9,
		proc: [ss_damage_s(5.0, [0], 1), ss_consume_own(0.5)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}