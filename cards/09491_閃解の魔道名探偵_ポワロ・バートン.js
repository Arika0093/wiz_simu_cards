{
	name: "閃解の魔道名探偵 ポワロ・バートン",
	cardno: 9491,
	imageno: 7615,
	hp: 3315,
	atk: 6450,
	cost: 51,
	attr: [1,-1],
	species: [9],
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(300%)、パネルの色が2色以上でさらにアップ(300%)",
		proc: ChainPanelsAttrAttack(3.0, 6.0, 6.0, [1, 0, 0, 0, 0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(5),
		NEFTJOD(30),
		Attr_relief([1,0,0,0,0,],20),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Awake_noeffect("心眼",1),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(400%)、パネルの色が2色以上でさらにアップ(300%)",
		proc: ChainPanelsAttrAttack(4.0, 7.0, 7.0, [1, 0, 0, 0, 0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、チェインがプラス2の効果と攻撃力アップの効果を付与(50%)",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0]), panel_chainplus(2), panel_attackup(0.5)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,300, [0,1,0,0,0,]),
	],
}