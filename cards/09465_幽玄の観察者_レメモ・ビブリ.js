{
	name: "幽玄の観察者 レメモ・ビブリ",
	cardno: 9465,
	imageno: 11718,
	hp: 5915,
	atk: 4107,
	cost: 52,
	attr: [0,-1],
	species: [3],
	islegend: true,
	ape: "大魔道杯 in ロストエデン",
	is_dist: true,
	as1: {
		desc: "<回復・攻撃強化>火属性の味方のHPを回復(13%)、さらに火属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), ChainEnhance(0.3, [1,0,0,0,0], 0)],
	},
	ss1: {
		desc: "<スキルチャージ>隣接する精霊のスペシャルスキルの発動ターンを3早める",
		turn: 8,
		proc: [ss_toselect_ownside(ss_skillboost(3))],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_relief([0,0,1,0,0,],20),
		Fastskill(4),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復・攻撃強化>火属性の味方のHPを回復(16%)、さらに火属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [1,0,0,0,0], 0), ChainEnhance(0.3, [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<スキルチャージ>隣接する精霊のスペシャルスキルの発動ターンを4早める",
		turn: 10,
		proc: [ss_toselect_ownside(ss_skillboost(4))],
	},
	Lawake: [
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Abstate_invalid("discharge"),
	],
}