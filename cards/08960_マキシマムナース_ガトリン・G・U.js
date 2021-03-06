{
	name: "マキシマムナース ガトリン・G・U",
	cardno: 8960,
	imageno: 8261,
	hp: 3205,
	atk: 3854,
	cost: 57,
	attr: [0,2],
	species: [8],
	disable: true,
	islegend: true,
	ape: "GP2016",
	as1: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(350%)、20チェインで更にダメージアップ(1250%)",
		proc: [ChainDualAttack(3.5, 4, 3), ChainDualAttack(16, 20, 3)],
	},
	ss1: {
		desc: "<継続回復>3ターン味方全体を徐々に回復する、20チェインでさらに5ターン味方全体を徐々に回復する(15%/25%)",
		turn: 5,
		proc: [ss_chain_cond_skill(20, ss_regenerate(0.25, 8), ss_regenerate(0.15, 3))],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],4),
		Fastskill(3),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		NEFTJOD(30),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,1,0,0,]),
		Heal_afterbattle(10),
		Abstate_invalid("as_sealed"),
		Awake_noeffect("選ばれし者の証",1),
	],
	as2: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(450%)、20チェインで更にダメージアップ(1250%)",
		proc: [ChainDualAttack(4.5, 4, 3), ChainDualAttack(17, 20, 3)],
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する、20チェインでさらに5ターン味方全体を徐々に回復する(20%/30%)",
		turn: 8,
		proc: [ss_chain_cond_skill(20, ss_regenerate(0.30, 10), ss_regenerate(0.20, 5))],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Statusup(1000,0),
	],
}