{
	name: "沈黙の襲撃、命令遂行 レイ",
	cardno: 6625,
	imageno: 8623,
	hp: 2289,
	atk: 2018,
	cost: 32,
	attr: [1,3],
	species: [8],
	islegend: true,
	ape: "コラボ(エヴァⅡ)",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>4チェインで水属性の攻撃力をアップ、複属性が光属性だとさらにアップ(40%/90%)",
		proc: ChainEnhance_SubAttr(0.4, 0.9, [0,1,0,0,0], [0,0,0,1,0], 4),
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを1遅らせる",
		turn: 4,
		proc: [ss_delay_all(1)],
	},
	awakes: [
		Statusup(100,0),
		Attr_relief([1,0,0,0,0,],10),
		Panel_boost([0,1,0,0,0,],1),
		Statusup(200,0),
		Fastskill(1),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Statusup(0,200),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
	],
	as2: {
		desc: "<複属性攻撃強化>4チェインで水属性の攻撃力をアップ、複属性が光属性だとさらにアップ(70%/120%)",
		proc: ChainEnhance_SubAttr(0.7, 1.2, [0,1,0,0,0], [0,0,0,1,0], 4),
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを1早め、敵全体の攻撃ターンを1遅らせる",
		turn: 6,
		proc: [ss_skillboost(1), ss_delay_all(1)],
	},
	Lawake: [
		Statusup(400,0),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}