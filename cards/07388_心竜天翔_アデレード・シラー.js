﻿{
	name: "心竜天翔 アデレード・シラー",
	cardno: 7388,
	imageno: 9443,
	hp: 3859,
	atk: 5254,
	cost: 56,
	attr: [0,-1],
	species: [8],
	islegend: true,
	ape: "心竜天翔 Rising Dragon",
	as1: {
		desc: "<種族特効>4チェインでダメージアップ、龍族の敵へさらにダメージアップ(400%/800%)",
		proc: [ChainAttack(4.0, 4), ChainSpecAttack(8.0, 4, [0])],
	},
	ss1: {
		desc: "<残滅大魔術>4ターン溜めた後、スキル反射を無視し、敵全体へ火属性のダメージ(500%)、さらに10ターンの間、火属性のダメージ(500%)",
		turn: 7,
		charged: 4,
		proc: [ss_continue_damage(5.0, 5.0, [0], 10), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Statusup(0,200),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Fastskill(1),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Fastskill(2),
		Spec_statusup(0,500, [0,8,]),
	],
	as2: {
		desc: "<種族特効>4チェインでダメージアップ、龍族の敵へさらにダメージアップ(500%/900%)",
		proc: [ChainAttack(5.0, 4), ChainSpecAttack(9.0, 4, [0])],
	},
	ss2: {
		desc: "<残滅大魔術>4ターン溜めた後、スキル反射を無視し、敵全体へ火属性のダメージ(600%)、さらに10ターンの間、火属性のダメージ(600%)",
		turn: 9,
		charged: 4,
		proc: [ss_continue_damage(6.0, 6.0, [0], 10), ss_ignore_skillcounter()],
	},
	Lawake: [
		Awake_dragonmode(2000, 1.5) ,
	],
}