{
	name: "華麗なる魔王 アルドベリク・ゴドー",
	cardno: 9437,
	imageno: 9114,
	hp: 2632,
	atk: 4324,
	cost: 58,
	attr: [1,4],
	species: [2],
	disable: true,
	islegend: true,
	ape: "ロストエデンⅡ WWMF",
	as1: {
		desc: "<属性特効連撃・複属性攻撃強化>4チェインで火・光属性の敵単体へ特効3連撃(500%)、さらに水属性の攻撃力をアップ(10%)、複属性が闇属性だとさらにアップ(30%)",
		proc: [ChainDualAttrAttack(5.0, 4, 3, [1,0,0,1,0]), ChainEnhance_SubAttr(0.10, 0.40, [0,1,0,0,0], [0,0,0,0,1], 4)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水・闇属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [1, 4]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		NEFTJOD(30),
		Abstate_invalid("as_sealed"),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,0,0,1,]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<属性特効連撃・複属性攻撃強化>4チェインで火・光属性の敵単体へ特効3連撃(600%)、さらに水属性の攻撃力をアップ(10%)、複属性が闇属性だとさらにアップ(30%)",
		proc: [ChainDualAttrAttack(6.0, 4, 3, [1,0,0,1,0]), ChainEnhance_SubAttr(0.10, 0.40, [0,1,0,0,0], [0,0,0,0,1], 4)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水・闇属性のダメージ(150%)",
		turn: 6,
		proc: [ss_damage_all(1.5, [1, 4]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		Abstate_invalid("ss_sealed"),
		Abstate_invalid("discharge"),
	],
}