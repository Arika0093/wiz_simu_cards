{
	name: "錬金アイドル アイラ・フラスカ",
	cardno: 10060,
	imageno: 10570,
	hp: 2975,
	atk: 4098,
	cost: 57,
	attr: [2,4],
	species: [9],
	islegend: true,
	ape: "アイドルキャッツ！",
	as1: {
		desc: "<全体攻撃>敵全体へダメージ(150%)、5チェインで更にダメージアップ(50%)",
		proc: [ChainAllAttack(1.5, 0), ChainAllAttack(2.0, 5)],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 7,
		proc: [ss_skillboost(2)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(60),
		Awake_noeffect("経験値取得量アップ",2),
		Abstate_invalid("as_sealed"),
		Fastskill(4),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ(180%)、5チェインで更にダメージアップ(50%)",
		proc: [ChainAllAttack(1.8, 0), ChainAllAttack(2.3, 5)],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める。HP20%以下でさらに5早める。",
		turn: 9,
		proc: [ss_skillboost(ss_hp_less(0.2, 7, 2))],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
}