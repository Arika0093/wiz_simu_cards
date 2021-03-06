{
	name: "大魔道びっくり箱 アリエッタ・トワ",
	cardno: 8957,
	imageno: 8252,
	hp: 3125,
	atk: 7075,
	cost: 53,
	attr: [1,-1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "GP2016",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(350%)、解答が早いほどさらにアップ(50%)(上限:4段階)",
		proc: add_cond(ChainAttack(3.5, 4), as_timedep(0.5)),
	},
	ss1: {
		desc: "<特効大魔術>敵単体へ水属性のダメージ(400%)、さらに火属性の敵には特効ダメージ(1500%)",
		turn: 9,
		proc: [ss_damage_s(special_attr([1,0,0,0,0], 19, 4), [1], 1)],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Fastskill(3),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Awake_noeffect("選ばれし者の証",1),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(450%)、解答が早いほどさらにアップ(50%)(上限:4段階)",
		proc: add_cond(ChainAttack(4.5, 4), as_timedep(0.5)),
	},
	ss2: {
		desc: "<特効大魔術>敵単体へ水属性のダメージ(400%)、さらに火属性の敵には特効ダメージ(2000%)",
		turn: 12,
		proc: [ss_damage_s(special_attr([1,0,0,0,0], 24, 4), [1], 1)],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}