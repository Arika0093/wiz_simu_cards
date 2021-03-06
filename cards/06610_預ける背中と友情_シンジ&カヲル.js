{
	name: "預ける背中と友情 シンジ&カヲル",
	cardno: 6610,
	imageno: 8654,
	hp: 3128,
	atk: 4228,
	cost: 52,
	attr: [2,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(エヴァⅠ)",
	is_dist: true,
	as1: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(300%)、パネルの色が増す度にさらにアップ(400%/550%)",
		proc: add_cond(ChainPanelsAttack(3.0, 4.0, 5.5, 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 5,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		NEFTJOD(30),
		Fastskill(1),
		Statusup(200,0),
		Attr_relief([1,1,1,1,1,],10),
		Panel_boost([0,0,1,0,0,],3),
		Statusup(0,200),
		Fastskill(2),
		Statusup(0,200),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(400%)、パネルの色が増す度にさらにアップ(500%/650%)",
		proc: add_cond(ChainPanelsAttack(4.0, 5.0, 6.5, 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、ダメージ軽減(20%)・スキルチャージ(1)・攻撃(25%)の効果をランダムで付与",
		turn: 8,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.20), panel_skillboost(1), panel_attackup(0.25)],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}