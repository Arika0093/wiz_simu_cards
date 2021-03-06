{
	name: "大魔道士の夏色 レナ・イラプション",
	cardno: 6550,
	imageno: 8444,
	hp: 2226,
	atk: 6102,
	cost: 52,
	attr: [0,-1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "USG",
	as1: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ(350%)、解答が早いほどさらにアップ(50%)【上限値:200】",
		proc: [add_cond(ChainAttrAttack(3.5, 0, [0,0,1,0,0]), as_timedep(0.5))],
	},
	ss1: {
		desc: "<ブースト>味方のMAXHP70%と毎ターン10%を使い、5ターンの間、味方の攻撃力をアップ(200%)、さらに極稀にクリティカル",
		turn: 7,
		proc: [ss_boost_enhance_all(2.0, 5, 0.10, [1,1,1,1,1]), ss_consume_all(0.7)],
	},
	awakes: [
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ(450%)、解答が早いほどさらにアップ(50%)【上限値:200】",
		proc: [add_cond(ChainAttrAttack(4.5, 0, [0,0,1,0,0]), as_timedep(0.5))],
	},
	ss2: {
		desc: "<ブースト>味方のMAXHP70%と毎ターン10%を使い、6ターンの間、味方の攻撃力をアップ(250%)、さらに極稀にクリティカル",
		turn: 10,
		proc: [ss_boost_enhance_all(2.5, 5, 0.10, [1,1,1,1,1]), ss_consume_all(0.7)],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}