{
	name: "海風流るる焔々と セイ&スオウ",
	cardno: 8532,
	imageno: 6804,
	hp: 3010,
	atk: 3813,
	cost: 55,
	attr: [1,0],
	species: [1],
	disable: true,
	islegend: true,
	ape: "八百万神秘譚Ⅱ",
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(800%)",
		proc: ChainAttack(8.0, 10),
	},
	ss1: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵単体へ水属性のダメージ(精霊数×300%)",
		turn: 9,
		proc: [ss_damage_s(ss_consume_all_cond(3.0, 0.5), [1], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],3),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,100, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 100,0, [1,0,0,0,0,]),
		Awake_Chainboost(1),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(900%)",
		proc: ChainAttack(9.0, 10),
	},
	ss2: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵単体へ水属性のダメージ(精霊数×360%)",
		turn: 12,
		proc: [ss_damage_s(ss_consume_all_cond(3.6, 0.5), [1], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,1000),
	],
}