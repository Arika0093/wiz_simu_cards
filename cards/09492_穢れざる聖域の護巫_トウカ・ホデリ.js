{
	name: "穢れざる聖域の護巫 トウカ・ホデリ",
	cardno: 9492,
	imageno: 7616,
	hp: 3120,
	atk: 8025,
	cost: 59,
	attr: [0,-1],
	species: [8],
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<種族特効>5チェインで敵単体へのダメージアップ(450%)、妖精と亜人の敵へさらにダメージアップ(350%)",
		proc: [ChainAttack(4.5, 5), ChainSpecAttack(8.0, 5, [4, 5])],
	},
	ss1: {
		desc: "<シャッフル>ジャンルパネルをシャッフル",
		turn: 1,
		proc: [ss_panel_shuffle()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(3),
		Awake_Chainboost(1),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Spec_statusup(0,400, [8,]),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<種族特効>5チェインで敵単体へのダメージアップ(550%)、妖精と亜人の敵へさらにダメージアップ(350%)",
		proc: [ChainAttack(5.5, 5), ChainSpecAttack(9.0, 5, [4, 5])],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)],
	},
	Lawake: [
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Statusup(0,500),
	],
}