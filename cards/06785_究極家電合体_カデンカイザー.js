{
	name: "究極家電合体 カデンカイザー",
	cardno: 6785,
	imageno: 8739,
	hp: 2803,
	atk: 2376,
	cost: 40,
	attr: [0,2],
	species: [6],
	islegend: true,
	ape: "真夏のグレート・クイズ・ウォー",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(450%)",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<多弾魔術>スキル反射を無視し、敵単体へ火・雷属性の2回連続ダメージ(200%)",
		turn: 4,
		proc: [ss_damage_s(2.0, [0, 2], 2), ss_ignore_skillcounter()],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],1),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,0,1,0,0,]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(550%)",
		proc: ChainAttack(5.5, 5),
	},
	ss2: {
		desc: "<多弾魔術>スキル反射を無視し、敵単体へ火・雷属性の2回連続ダメージ(400%)",
		turn: 6,
		proc: [ss_damage_s(4.0, [0, 2], 2), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100,[1,0,1,0,0,]),
		Statusup(0,500),
	],
}