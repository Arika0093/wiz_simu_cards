﻿{
	name: "滅魂の預言者 ヴェレフキナ・アマン",
	cardno: 10694,
	imageno: 9126,
	hp: 4651,
	atk: 3475,
	cost: 62,
	attr: [0,1],
	species: [2],
	islegend: true,
	ape: "ロストエデンⅡ WWMF",
	as1: {
		desc: "<チェイン攻撃>敵単体へのダメージアップ(200%)、4チェインでさらにアップ(150%)、8チェインでさらにアップ(150%)",
		proc: [ChainAttack(2.0, 0), ChainAttack(3.5, 4), ChainAttack(5.0, 8)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを2000ダウンし、攻撃力を3000アップ(上限値:3000)",
		turn: 1,
		proc: [ss_statusup_all([-2000, 3000], [3000, 3000], -1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],3),
		NEFTJOD(60),
		Fastskill(1),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_sattr(0, 100, [1,0,0,0,0,], 0,300, [0,1,0,0,0,]),
		Attr_statusup_sattr(100, 0, [1,0,0,0,0,], 300, 0, [0,1,0,0,0,]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<チェイン攻撃>敵単体へのダメージアップ(300%)、4チェインでさらにアップ(150%)、8チェインでさらにアップ(150%)",
		proc: [ChainAttack(3.0, 0), ChainAttack(4.5, 4), ChainAttack(6.0, 8)],
	},
	ss2: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ(150%)。さらに極稀にクリティカル",
		turn: 4,
		proc: [ss_boost_enhance_all(1.5, 4, 0.1, [1,1,1,1,1])],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(200,0, [1,1,0,0,0,]),
	],
}