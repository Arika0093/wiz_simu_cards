{
	name: "初春の御園は花盛り フレイ・エレン",
	cardno: 7977,
	imageno: 7338,
	hp: 4203,
	atk: 5354,
	cost: 59,
	attr: [1,-1],
	species: [4],
	islegend: true,
	ape: "謹賀新年2015",
	as1: {
		desc: "<属性特効>火属性の敵単体への特効ダメージ、パネルの色が増す度さらにアップ(350%/500%/600%)",
		proc: ChainPanelsAttrAttack(3.5, 5.0, 6.0, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		NEFTJOD(60),
		Fastskill(3),
		Abstate_invalid("all_sealed"),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Attr_relief([1,0,0,0,0,],20),
		Spec_statusup(0,500, [4,]),
		Spec_statusup(500,0, [4,]),
		Awake_noeffect("スキル反射見破り", 1),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体への特効ダメージ、パネルの色が増す度さらにアップ(450%/600%/700%)",
		proc: ChainPanelsAttrAttack(4.5, 6.0, 7.0, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<遅延>敵全体の攻撃ターンを3遅らせ、20チェインでさらに1遅らせる",
		turn: 10,
		proc: [ss_delay_all(ss_chain_cond(20, 4, 3))],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
}