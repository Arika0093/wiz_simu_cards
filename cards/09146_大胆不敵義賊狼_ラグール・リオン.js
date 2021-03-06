{
	name: "大胆不敵義賊狼 ラグール・リオン",
	cardno: 9146,
	imageno: 11382,
	hp: 7005,
	atk: 3017,
	cost: 52,
	attr: [0,-1],
	species: [5],
	islegend: true,
	ape: "ウィズセレクション",
	as1: {
		desc: "<攻撃強化・ガード>全属性のダメージを10%軽減し、デッキに単色の精霊が多いほど、攻撃力をアップ(15%)（上限:5段階)",
		proc: [as_guard(0.1, [1,1,1,1,1], 0), add_cond(ChainEnhance(0, [1,0,0,0,0], 0), as_singleattr_num(0, 0.15))],
	},
	ss1: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力をアップ(15%,15%,100%)(発動中行動不可)",
		turn: 4,
		proc: [ss_reinforcement_all(4, [ss_regenerate(0.15, 1, "RF"), ss_attr_guard([1, 1, 1, 1, 1], 0.15, 1, "RF"), ss_enhance_all(1.0, 1, [1, 1, 1, 1, 1], "RF")])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([0,0,1,0,0,],20),
		Fastskill(3),
		Heal_afterbattle(10),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<攻撃強化・ガード>全属性のダメージを10%軽減し、デッキに単色の精霊が多いほど、攻撃力をアップ(20%)（上限:5段階)",
		proc: [as_guard(0.1, [1,1,1,1,1], 0), add_cond(ChainEnhance(0, [1,0,0,0,0], 0), as_singleattr_num(0, 0.2))],
	},
	ss2: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力をアップ(25%,25%,150%)(発動中行動不可)",
		turn: 6,
		proc: [ss_reinforcement_all(4, [ss_regenerate(0.25, 1, "RF"), ss_attr_guard([1, 1, 1, 1, 1], 0.25, 1, "RF"), ss_enhance_all(1.5, 1, [1, 1, 1, 1, 1], "RF")])],
	},
	Lawake: [
		Attr_statusup_oattr(0,300, [1,0,0,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
	],
}