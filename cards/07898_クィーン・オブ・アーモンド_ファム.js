{
	name: "クィーン・オブ・アーモンド ファム",
	cardno: 7898,
	imageno: 6097,
	hp: 3043,
	atk: 4214,
	cost: 59,
	attr: [0,2],
	species: [9],
	alias: ["デバフ", "巨乳"],
	islegend: true,
	ape: "グリコⅡ",
	as1: {
		desc: "<連撃・複属性攻撃強化>5チェインで敵単体を3回連続攻撃(450%)、さらに火属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(10%/40%)",
		proc: [ChainDualAttack(4.5, 5, 3),ChainEnhance_SubAttr(0.10, 0.40, [1,0,0,0,0], [0,0,1,0,0], 5)],
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],4),
		Attr_statusup(200,0,[1,0,1,0,0,]),
		Attr_statusup(0,100,[1,0,1,0,0,]),
		NEFTJOD(30),
		Awake_noeffect("経験値取得量アップ",2),
		Fastskill(3),
		Attr_statusup_sattr(100,0,[1,0,0,0,0,],300,0,[0,0,1,0,0,]),
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,300,[0,0,1,0,0,]),
		Abstate_invalid("as_sealed"),
		Awake_noeffect("スキル反射見破り",1),
	],
	as2: {
		desc: "<連撃・複属性攻撃強化>5チェインで敵単体を3回連続攻撃(550%)、さらに火属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(10%/40%)",
		proc: [ChainDualAttack(5.5, 5, 3),ChainEnhance_SubAttr(0.10, 0.40, [1,0,0,0,0], [0,0,1,0,0], 5)],
	},
	ss2: {
		desc: "<遅延>敵全体の攻撃ターンを3遅らせ、20チェインで更に1遅らせる",
		turn: 10,
		proc: [ss_delay_all(ss_chain_cond(20, 4, 3))],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
		Attr_statusup_sattr(100,0,[1,0,0,0,0,],100,0,[0,0,1,0,0,]),
	],
}