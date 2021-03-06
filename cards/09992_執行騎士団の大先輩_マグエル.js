{
	name: "執行騎士団の大先輩 マグエル",
	cardno: 9992,
	imageno: 12341,
	hp: 4005,
	atk: 1155,
	cost: 22,
	attr: [1,-1],
	species: [1],
	islegend: true,
	ape: "Birth of New Order",
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<解答削り>解答選択肢を1つ削り、1チェインを消費しさらに1つ削る",
		turn: 1,
		proc: [ss_chain_cost_skill(1, ss_answer_narrow(2), ss_answer_narrow(1))],
	},
	awakes: [
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],2),
		Panel_boost([0,1,0,0,0,],2),
		Panel_boost([0,1,0,0,0,],3),
		Panel_boost([0,1,0,0,0,],3),
		Panel_boost([0,1,0,0,0,],4),
		Panel_boost([0,1,0,0,0,],4),
		Costdown(10),
		Heal_afterbattle(10),
		Awake_noeffect("心眼",1),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復(15%)",
		proc: Heal(0.15, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<解答削り>解答選択肢を2つ削る",
		turn: 2,
		proc: [ss_answer_narrow(2)],
	},
	Lawake: [
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}