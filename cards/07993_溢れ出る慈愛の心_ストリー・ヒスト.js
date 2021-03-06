{
    name: "溢れ出る慈愛の心 ストリー・ヒスト",
    cardno: 7993,
    imageno: 10108,
    imageno_prefix: "5cxek1_",
    hp: 3455,
    atk: 5665,
    cost: 57,
    attr: [1,-1],
    species: [9],
　　disable: true,
    islegend: true,
    ape: "DL限定精霊",
    as1: {
        desc: "<属性特効>4チェインで火属性の敵単体へ特効ダメージ、リーダー時さらにダメージアップ(600%/750%)",
        proc: [ChainAttrAttack(6, 4, [1, 0, 0, 0, 0]), add_cond(ChainAttrAttack(7.5, 4, [0, 1, 0, 0, 0]), when_leader())],
    },
    ss1: {
        desc: "<弱体化大魔術>スキル反射を無視し、敵単体へ水属性のダメージ(1200%)、さらに3ターンの間、敵の防御力を弱体化(50%)",
        turn: 12,
        proc: [ss_damage_s(12.0, [1], 1), ss_attr_weaken_s([1,1,1,1,1], 0.5, 3), ss_ignore_skillcounter()],
    },
    awakes: [
        Panel_boost([0,1,0,0,0,],2),
        NEFTJOD(30),
        Fastskill(2),
        Panel_boost([0,1,0,0,0,],2),
        Attr_statusup(0,400, [0,1,0,0,0,]),
        Attr_statusup(400,0, [0,1,0,0,0,]),
        Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
        Abstate_invalid("ss_sealed"),
        Attr_relief([1,0,0,0,0,],20),
        Awake_noeffect("心眼",1),
    ],
    as2: {
        desc: "<属性特効>4チェインで火属性の敵単体へ特効ダメージ、リーダー時さらにダメージアップ(700%/850%)",
        proc: [ChainAttrAttack(7, 4, [1, 0, 0, 0, 0]), add_cond(ChainAttrAttack(8.5, 4, [0, 1, 0, 0, 0]), when_leader())],
    },
    ss2: {
        desc: "<弱体化大魔術>スキル反射を無視し、敵単体へ水属性のダメージ(1200%)、さらに3ターンの間、敵の防御力を弱体化(50%)",
        turn: 12,
        proc: [ss_damage_s(12.0, [1], 1), ss_attr_weaken_s([1,1,1,1,1], 0.5, 3), ss_ignore_skillcounter()],
    },
    Lawake: [
        Statusup(0,500),
        Abstate_invalid("as_sealed"),
        Attr_statusup(0,200, [0,1,0,0,0,]),
    ],
}