{
	name: "Wild Witch ソフィ・ハーネット",
	cardno: 9274,
	imageno: 11539,
	hp: 6515,
	atk: 1475,
	cost: 54,
	attr: [2,0],
	species: [9],
	alias: ["デバフ", "巨乳"],
	islegend: true,
	ape: "UHG",
	as1: {
		desc: "<回復・複属性攻撃強化>雷属性の味方を回復(10%)し、攻撃力もアップ(30%)。複属性が火属性だとさらに攻撃力アップ(30%)",
		proc: [Heal(0.1, [0,0,1,0,0], 0), ChainEnhance_SubAttr(0.3, 0.6, [0,0,1,0,0], [1,0,0,0,0], 0)],
	},
	ss1: {
		desc: "<ダメージブロック>1ターン500以下の全属性ダメージを無効化する,3チェインを消費しさらに1500以下の全属性ダメージを無効化",
		turn: 3,
		proc: [ss_chain_cost_skill(3, ss_damageblock_all(2000, 1), ss_damageblock_all(500, 1))],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(3),
		Attr_relief([1,1,1,1,1,],10),
		Awake_noeffect("行動見破り",1),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [1,0,0,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復・複属性攻撃強化>雷属性の味方を回復(13%)し、攻撃力もアップ(30%)。複属性が火属性だとさらに攻撃力アップ(30%)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), ChainEnhance_SubAttr(0.3, 0.6, [0,0,1,0,0], [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<ダメージブロック>1ターン500以下の全属性ダメージを無効化する, 5チェインを消費しさらに2500以下の全属性ダメージを無効化",
		turn: 6,
		proc: [ss_chain_cost_skill(5, ss_damageblock_all(3000, 1), ss_damageblock_all(500, 1))],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,200, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}