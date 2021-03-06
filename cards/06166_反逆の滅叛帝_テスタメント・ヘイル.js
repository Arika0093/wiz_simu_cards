{
	name: "反逆の滅叛帝 テスタメント・ヘイル",
	cardno: 6166,
	imageno: 7986,
	hp: 3033,
	atk: 3288,
	cost: 50,
	attr: [1,4],
	species: [2],
	disable: true,
	islegend: true,
	ape: "GW2016",
	as1: {
		desc: "<種族特効>6チェインでダメージアップ、天使の敵へさらにダメージアップ(500%/700%)",
		proc: [ChainAttack(5.0, 6), ChainSpecAttack(7.0, 6, [3])],
	},
	ss1: {
		desc: "<ブースト>5ターンの間、MAXHPを毎ターン15%消費し、攻撃力をアップ(1200%)。さらに極稀にクリティカル",
		turn: 10,
		proc: [ss_boost_enhance_s(12, 5, 0.15)],
	},
	awakes: [
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_statusup_sattr(0, 200, [0,1,0,0,0], 0, 200, [0,0,0,0,1]),
	],
	as2: {
		desc: "<種族特効>6チェインでダメージアップ、天使の敵へさらにダメージアップ(600%/800%)",
		proc: [ChainAttack(6.0, 6), ChainSpecAttack(8.0, 6, [3])],
	},
	ss2: {
		desc: "<ブースト>5ターンの間、MAXHPを毎ターン15%消費し、攻撃力をアップ(1500%)。さらに極稀にクリティカル",
		turn: 13,
		proc: [ss_boost_enhance_s(15, 5, 0.15)],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}