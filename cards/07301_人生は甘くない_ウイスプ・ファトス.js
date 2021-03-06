{
	name: "人生は甘くない ウイスプ・ファトス",
	cardno: 7301,
	imageno: 9336,
	hp: 3130,
	atk: 2545,
	cost: 44,
	attr: [2,0],
	species: [9],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<連撃>敵単体を3回連続で攻撃、4チェインで更にアップ(250%/350%)",
		proc: [ChainDualAttack(2.5, 0, 3), ChainDualAttack(3.5, 4, 3)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,1,1])],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Awake_noeffect("ゴールド取得量アップ",2),
		Awake_noeffect("経験値取得量アップ",2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Fastskill(2),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続で攻撃、4チェインで更にアップ(350%/450%)",
		proc: [ChainDualAttack(3.5, 0, 3), ChainDualAttack(4.5, 4, 3)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、お菓子を配る(ダメージ軽減25%・スキルチャージ1・チェイン+2・攻撃力アップ50%の効果をランダムで付与)",
		turn: 8,
		proc: [ss_panel_change([1,1,1,1,1]), panel_skillboost(1), panel_chainplus(2), panel_attackup(1.0), panel_attr_guard([1,1,1,1,1], 0.25)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(400,0),
	],
}