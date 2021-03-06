{
	name: "魔剣少女 フェルム",
	cardno: 6951,
	imageno: 8898,
	hp: 3018,
	atk: 3354,
	cost: 39,
	attr: [2,-1],
	species: [6],
	islegend: true,
	ape: "クロム・マグナ ゼロ",
	is_dist: true,
	as1: {
		desc: "<攻撃強化>5チェインで雷属性の味方の攻撃力をアップ(50%)",
		proc: ChainEnhance(0.5, [0,0,1,0,0], 5),
	},
	ss1: {
		desc: "<反動大魔術>敵全体へ雷属性のダメージ(300%)◆スキル使用後、1ターン封印状態に",
		turn: 4,
		proc: [ss_damage_all(3.0, [2]), ss_allsealed_own(1)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Statusup(200,0),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
	],
	as2: {
		desc: "<攻撃強化>5チェインで雷属性の味方の攻撃力をアップ(80%)",
		proc: ChainEnhance(0.8, [0,0,1,0,0], 5),
	},
	ss2: {
		desc: "<反動大魔術>敵全体へ雷属性のダメージ(500%)◆スキル使用後、1ターン封印状態に",
		turn: 6,
		proc: [ss_damage_all(5.0, [2]), ss_allsealed_own(1)],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}