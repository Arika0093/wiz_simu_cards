{
	name: "竜を討つ者 バロン&ベルナデッタ",
	cardno: 10313,
	imageno: 12700,
	hp: 5021,
	atk: 2096,
	cost: 51,
	attr: [0,1],
	species: [9],
	islegend: true,
	ape: "レイド ドラゴンプロジェクト",
	is_dist: true,
	as1: {
		desc: "<回復・ガード>火・水属性の味方のHPを回復(10%)、5チェインで更に全属性のダメージを10%軽減",
		proc: [Heal(0.10, [1,1,0,0,0], 0), as_guard(0.10, [1,1,1,1,1], 5)],
	},
	ss1: {
		desc: "<AS倍率強化>5ターン溜めた後、5ターンの間、デッキ内の<主属性:火、複属性:水>の精霊のAS攻撃倍率をアップ。同属性の精霊が多いほどさらに倍率が上昇(上限値:3倍)",
		turn: 5,
		charged: 5,
		proc: [ss_asenhance_all(3, [1,0,0,0,0], [0,1,0,0,0], 5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,1,0,0,0,]),
		Fastskill(2),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復・ガード>火・水属性の味方のHPを回復(13%)、5チェインで更に全属性のダメージを10%軽減",
		proc: [Heal(0.13, [1,1,0,0,0], 0), as_guard(0.10, [1,1,1,1,1], 5)],
	},
	ss2: {
		desc: "<AS倍率強化>5ターン溜めた後、5ターンの間、デッキ内の<主属性:火、複属性:水>の精霊のAS攻撃倍率をアップ。同属性の精霊が多いほどさらに倍率が上昇(上限値:3倍)",
		turn: 5,
		charged: 5,
		proc: [ss_asenhance_all(3, [1,0,0,0,0], [0,1,0,0,0], 5)],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}