{
	name: "黎明天無獄帝 アスモデウス・トビト",
	cardno: 7916,
	imageno: 6573,
	hp: 3458,
	atk: 3024,
	cost: 79,
	attr: [0,4],
	species: [2],
	islegend: true,
	is_dist: true,
	ape: "レイド Blader",
	as1: {
		desc: "<分散攻撃>3チェインで敵全体へ分散攻撃(400%)",
		proc: ChainVarianceAttack(4.0, 3),
	},
	ss1: {
		desc: "<ダメージ強化>味方全体のMAXHPの50％を使い、3ターン火属性の味方の攻撃力をアップ(+120%)",
		turn: 5,
		proc: [ss_enhance_all(1.2, 3, [1,0,0,0,0]), ss_consume_all(0.5)],
	},
	as2: {
		desc: "<分散攻撃>3チェインで敵全体へ分散攻撃(500%)",
		proc: ChainVarianceAttack(5.0, 3),
	},
	ss2: {
		desc: "<ダメージ強化>味方全体のMAXHPの50％を使い、4ターン火属性の味方の攻撃力をアップ(+150%)",
		turn: 8,
		proc: [ss_enhance_all(1.5, 4, [1,0,0,0,0]), ss_consume_all(0.5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		NEFTJOD(30),
		Attr_statusup(0,100,[1,0,0,0,0,]),
		Attr_statusup(100,0,[1,0,0,0,0,]),
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,200,[0,0,0,0,1,]),
		Attr_statusup_sattr(100,0,[1,0,0,0,0,],200,0,[0,0,0,0,1,]),
		Abstate_invalid("as_sealed"),
	],
	Lawake: [
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,100,[0,0,0,0,1,]),
		Statusup(0,500),
	],
}