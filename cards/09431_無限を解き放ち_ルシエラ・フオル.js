{
	name: "無限を解き放ち ルシエラ・フオル",
	cardno: 9431,
	imageno: 6871,
	hp: 5010,
	atk: 2456,
	cost: 54,
	attr: [2,3],
	species: [3],
	islegend: true,
	ape: "ロストエデンⅠ",
	as1: {
		desc: "<回復>味方全体のHPを回復(14%)",
		proc: Heal(0.14, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<チェインガード>3ターンの間、チェインを保護する",
		turn: 3,
		proc: [ss_chain_protect(3)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(4),
		Abstate_invalid("ss_sealed"),
		NEFTJOD(30),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,0,0,1,0,]),
		Awake_noeffect("チェイン保護",1),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(17%)",
		proc: Heal(0.17, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<チェインガード>チェインプラス2の効果、6ターンの間、チェインを保護する",
		turn: 6,
		proc: [ss_chain_protect(6), ss_addchain(2)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,300, [0,0,1,0,0,]),
	],
}