{
	name: "スーパー鬼家電ガール ティマ",
	cardno: 10533,
	imageno: 12958,
	hp: 2305,
	atk: 3501,
	cost: 48,
	attr: [0,2],
	species: [6],
	islegend: true,
	ape: "大魔道杯 in 桃娘伝",
	is_dist: true,
	as1: {
		desc: "<連撃>5チェインで敵単体を5回連続攻撃(450%)",
		proc: ChainDualAttack(4.5, 5, 5),
	},
	ss1: {
		desc: "<解答時間停止>1ターンの間、解答時間を停止する(一部特殊パネルを除く)(※協力バトル及び一部クエストは無効)",
		turn: 7,
		proc: [ss_astime_ext(20, 1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_subattr(0, 300),
		Attr_statusup_subattr(300, 0),
		Awake_noeffect("ゴールド取得量アップ",3),
		Fastskill(2),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<連撃>5チェインで敵単体を5回連続攻撃(550%)",
		proc: ChainDualAttack(5.5, 5, 5),
	},
	ss2: {
		desc: "<解答時間停止>2ターンの間、解答時間を停止する(一部特殊パネルを除く)(※協力バトル及び一部クエストは無効)",
		turn: 10,
		proc: [ss_astime_ext(20, 2)],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,1000),
	],
}