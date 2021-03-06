{
	name: "焔騎士の忠誠 エルト・ファレンツ",
	cardno: 3890,
	imageno: 5568,
	hp: 2894,
	atk: 2443,
	cost: 45,
	attr: [0, -1],
	species: [8],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		NEFTJOD(30),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(200, 0, [8]),
		Fastskill(2),
		Spec_statusup(0, 200, [8]),
	],
	as1: {
		desc: "<種族攻撃強化>3チェインで火属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+30％ / 火戦士：+60％)",
		proc: multi_as(ChainEnhance(0.3, [1,0,0,0,0], 3), ChainSpecEnhance(0.6, [1,0,0,0,0], [8], 3)),
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを1早める",
		turn: 6,
		proc: [ss_skillboost(1)],
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<種族攻撃強化>3チェインで火属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+40％ / 火戦士：+80％)",
		proc: multi_as(ChainEnhance(0.4, [1,0,0,0,0], 3), ChainSpecEnhance(0.8, [1,0,0,0,0], [8], 3)),
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
}