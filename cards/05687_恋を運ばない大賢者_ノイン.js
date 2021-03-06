{
	name: "恋を運ばない大賢者 ノイン",
	cardno: 5687,
	imageno: 7492,
	hp: 2334,
	atk: 3962,
	cost: 46,
	attr: [0,2],
	species: [9],
	disable: true,
	islegend: true,
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、HP50%以上でさらにダメージアップ(300%/500%)",
		proc: [ChainAttack(3.0, 4), add_cond(ChainAttack(5.0, 4), when_hp_more(0.5))],
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを1遅らせる",
		turn: 4,
		proc: [ss_delay_all(1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Statusup(0,200),
		Fastskill(1),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		NEFTJOD(30),
		Heal_afterbattle(10),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Awake_noeffect("心眼", 1),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、HP50%以上でさらにダメージアップ(400%/600%)",
		proc: [ChainAttack(4.0, 4), add_cond(ChainAttack(6.0, 4), when_hp_more(0.5))],
	},
	ss2: {
		desc: "<多弾魔術>敵単体へ火・雷属性の5回連続ダメージ、5チェインを消費しさらにダメージアップ(320%/640%)",
		turn: 7,
		proc: [ss_chain_cost_skill(5, ss_damage_s(6.4, [0,2], 5), ss_damage_s(3.2, [0,2], 5))],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(0,500),
	],
}