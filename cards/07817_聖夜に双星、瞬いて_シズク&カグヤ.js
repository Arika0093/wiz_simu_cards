{
	name: "聖夜に双星、瞬いて シズク&カグヤ",
	cardno: 7817,
	imageno: 7074,
	hp: 2653,
	atk: 6432,
	cost: 56,
	attr: [1,-1],
	species: [4],
	islegend: true,
	as1: {
		desc: "<属性特効連撃>火属性の敵単体へ特効3連撃(400%)",
		proc: ChainDualAttrAttack(4.0, 0, 3, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		Fastskill(3),
		NEFTJOD(30),
		Spec_statusup(0,500, [4,]),
		Spec_statusup(500,0, [4,]),
		Attr_relief([0,1,1,0,0,],10),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<属性特効連撃>火属性の敵単体へ特効3連撃(500%)",
		proc: ChainDualAttrAttack(5.0, 0, 3, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・雷属性化し、チェインがプラス2の効果と攻撃力アップの効果を付与(50%)",
		turn: 6,
		proc: [ss_panel_change([0,1,1,0,0]), panel_chainplus(2), panel_attackup(0.5)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Statusup(500,0),
		Abstate_invalid("discharge"),
	],
}