{
	name: "煉獄華 リエン・ユー",
	cardno: 7718,
	imageno: 7256,
	hp: 3054,
	atk: 3749,
	cost: 55,
	attr: [2,0],
	species: [8],
	islegend: true,
	as1: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(400%)",
		proc: ChainDualAttack(4, 4, 3),
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを500ダウンし、攻撃力を1000アップ(上限値2000)",
		turn: 3,
		proc: [ss_statusup_all([-500, 1000], [2000, 2000], -1)],
	},
	awakes: [
		Fastskill(1),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([0,0,1,0,0,],20),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		NEFTJOD(30),
		Attr_statusup_sattr(0, 200, [0,0,1,0,0], 0, 200, [1,0,0,0,0]),
		Attr_statusup_sattr(200, 0, [0,0,1,0,0], 200, 0, [1,0,0,0,0]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
	],
	as2: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(500%)",
		proc: ChainDualAttack(5, 4, 3),
	},
	ss2: {
		desc: "<犠牲魔術>味方全体のMAXHP50%を使い敵全体へ雷属性のダメージ(人数×200%)",
		turn: 10,
		proc: [ss_damage_all(ss_consume_all_cond(2.0, 0.5), [2])],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(0,500),
		NEFTJOD(30),
	],
}