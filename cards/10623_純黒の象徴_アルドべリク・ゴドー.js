{
	name: "純黒の象徴 アルドべリク・ゴドー",
	cardno: 10623,
	imageno: 8267,
	hp: 3566,
	atk: 4444,
	cost: 65,
	attr: [1,4],
	species: [2],
	islegend: true,
	ape: "GP2016",
	as1: {
		desc: "<連撃>敵単体を4回連続攻撃(200%)、20チェインで更にダメージアップ(1400%)、40チェインでさらにダメージアップ(1500%)",
		proc: [ChainDualAttack(2.0, 0, 4), ChainDualAttack(16.0, 20, 4), ChainDualAttack(31.0, 40, 4)],
	},
	ss1: {
		desc: "<斬撃大魔術>8ターン溜めた後、スキル反射を無視し、水・闇属性の10連撃(2000%)、さらに連撃数分チェインプラス",
		turn: 8,
		charged: 8,
		proc: [ss_damage_slash(20, [1,4], 10), ss_ignore_skillcounter()],
	},
	awakes: [
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Fastskill(4),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_subattr(0, 500),
		Fastskill(4),
		Awake_noeffect("選ばれし者の証",1),
	],
	as2: {
		desc: "<連撃>敵単体を4回連続攻撃(200%)、20チェインで更にダメージアップ(1500%)、40チェインでさらにダメージアップ(1500%)",
		proc: [ChainDualAttack(2.0, 0, 4), ChainDualAttack(17.0, 20, 4), ChainDualAttack(32.0, 40, 4)],
	},
	ss2: {
		desc: "<斬撃大魔術>8ターン溜めた後、スキル反射を無視し、水・闇属性の10連撃(2000%)、さらに連撃数分チェインプラス",
		turn: 8,
		charged: 8,
		proc: [ss_damage_slash(20, [1,4], 10), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup_subattr(0, 200),
		Statusup(0,1000),
	],
}