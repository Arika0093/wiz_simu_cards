{
	name: "紅打のルウガと蒼閃のシェオ",
	cardno: 7481,
	imageno: 9534,
	hp: 3223,
	atk: 3323,
	cost: 52,
	attr: [0,1],
	species: [0],
	disable: true,
	islegend: true,
	ape: "大魔道杯 in 心竜天翔",
	is_dist: true,
	as1: {
		desc: "<種族数攻撃>4チェインでダメージアップ(320%)、龍族の仲間の数だけさらにアップ(50%/100%/150%/200%/250%)",
		proc: ChainDeckSpecsAttack(0.5, [0], 4, 3.2),
	},
	ss1: {
		desc: "<ダメージ強化>3ターン溜めた後、8ターン自分の攻撃力をアップ(700%)",
		turn: 8,
		charged: 3,
		proc: [ss_enhance_own(7.0, 8)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(2),
		Spec_statusup(0,400, [0,]),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,1,0,0,0,]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,1,0,0,0,]),
	],
	as2: {
		desc: "<種族数攻撃>4チェインでダメージアップ(420%)、龍族の仲間の数だけさらにアップ(50%/100%/150%/200%/250%)",
		proc: ChainDeckSpecsAttack(0.5, [0], 4, 4.2),
	},
	ss2: {
		desc: "<ダメージ強化>3ターン溜めた後、8ターン自分の攻撃力をアップ(1000%)",
		turn: 11,
		charged: 3,
		proc: [ss_enhance_own(10.0, 8)],
	},
	Lawake: [
		Awake_dragonmode(2000, 1.5),
	],
}