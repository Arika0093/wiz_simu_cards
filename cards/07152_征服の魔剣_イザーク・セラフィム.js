{
	name: "征服の魔剣 イザーク・セラフィム",
	cardno: 7152,
	imageno: 9123,
	hp: 2890,
	atk: 3780,
	cost: 54,
	attr: [2,4],
	species: [3],
	disable: true,
	islegend: true,
	ape: "ロストエデンⅡ WWMF",
	as1: {
		desc: "<チェイン攻撃・属性特効>4チェインでダメージアップ、光属性の敵だとさらにダメージアップ(400%/600%)",
		proc: [ChainAttack(4.0, 4), ChainAttrAttack(6.0, 4, [0,0,0,1,0])],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のMAXHPの60%を使い、味方全体のスペシャルスキルの発動ターンを5早める",
		turn: 11,
		proc: [ss_consume_all(0.6), ss_skillboost(5)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 200,0, [0,0,0,0,1,]),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [0,0,0,0,1,]),
		Abstate_invalid("discharge"),
	],
	as2: {
		desc: "<チェイン攻撃・属性特効>4チェインでダメージアップ、光属性の敵だとさらにダメージアップ(500%/700%)",
		proc: [ChainAttack(5.0, 4), ChainAttrAttack(7.0, 4, [0,0,0,1,0])],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のMAXHPの60%を使い、味方全体のスペシャルスキルの発動ターンを5早める",
		turn: 11,
		proc: [ss_consume_all(0.6), ss_skillboost(5)],
	},
	Lawake: [
		Abstate_invalid("ss_sealed"),
		Statusup(500,0),
		Statusup(0,500),
	],
}