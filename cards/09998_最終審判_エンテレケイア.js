{
	name: "最終審判 エンテレケイア",
	cardno: 9998,
	imageno: 12347,
	hp: 6084,
	atk: 1243,
	cost: 49,
	attr: [0,3],
	species: [1],
	islegend: true,
	ape: "Birth of New Order",
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方のHPを回復(13%)",
		proc: Heal(0.13, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<精霊強化>味方全体で1ターン溜めた後、10ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力アップ(20%、20%、200%)(発動中行動不可)",
		turn: 10,
		charged: 1,
		isallcharge: true,
		proc: [ss_reinforcement_all(10, [ss_attr_guard([1, 1, 1, 1, 1], 0.2, 1, "RF"), ss_enhance_all(2.0, 1, [1, 1, 1, 1, 1], "RF"), ss_regenerate(0.2, 1, "RF")])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(4),
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Attr_statusup(0,200, [1,1,1,1,1,]),
		Attr_statusup(200,0, [1,1,1,1,1,]),
		Fastskill(4),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復(16%)",
		proc: Heal(0.16, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<精霊強化>味方全体で1ターン溜めた後、10ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力アップ(20%、20%、200%)(発動中行動不可)",
		turn: 10,
		charged: 1,
		isallcharge: true,
		proc: [ss_reinforcement_all(10, [ss_attr_guard([1, 1, 1, 1, 1], 0.2, 1, "RF"), ss_enhance_all(2.0, 1, [1, 1, 1, 1, 1], "RF"), ss_regenerate(0.2, 1, "RF")])],
	},
	Lawake: [
		Statusup(1000,0),
		NEFTJOD(30),
	],
}