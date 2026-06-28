#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0924 0x924 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func094C 0x94C ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	UI_push_answers();
	var0000 = true;
	var0001 = [0x001E, 0x0032, 0x0046, 0x005A, 0x0078, 0x008C];
labelFunc094C_0020:
	if (!var0000) goto labelFunc094C_0257;
	message("「对哪一环的法术感兴趣？」");
	say();
	var0002 = Func090C(["再看看", "First (第一环)", "Second (第二环)", "Third (第三环)", "Fourth (第四环)", "Fifth (第五环)", "Sixth (第六环)"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc094C_0070;
	if (!gflags[0x0003]) goto labelFunc094C_0069;
	message("「明白。」");
	say();
	goto labelFunc094C_006D;
labelFunc094C_0069:
	message("「怀疑你为何要来烦我！」");
	say();
labelFunc094C_006D:
	goto labelFunc094C_0257;
labelFunc094C_0070:
	if (!(var0002 == 0x0001)) goto labelFunc094C_00A7;
	var0003 = ["无", "大点火术 (Great Ignite)", "大熄灭术 (Great Douse)", "定位术 (Locate)", "造光术 (Light)"];
	var0004 = [0x0000, 0x000C, 0x000B, 0x000E, 0x000D];
	goto labelFunc094C_01AD;
labelFunc094C_00A7:
	if (!(var0002 == 0x0002)) goto labelFunc094C_00DE;
	var0003 = ["无", "爆炎术 (Fire Blast)", "附魔术 (Enchant)", "破坏陷阱 (Destroy Trap)", "大造光术 (Great Light)"];
	var0004 = [0x0000, 0x0012, 0x0011, 0x0010, 0x0013];
	goto labelFunc094C_01AD;
labelFunc094C_00DE:
	if (!(var0002 == 0x0003)) goto labelFunc094C_0115;
	var0003 = ["无", "麻痹术 (Paralyze)", "施毒术 (Poison)", "诅咒术 (Curse)", "虫群术 (Swarm)"];
	var0004 = [0x0000, 0x001C, 0x001E, 0x0018, 0x001A];
	goto labelFunc094C_01AD;
labelFunc094C_0115:
	if (!(var0002 == 0x0004)) goto labelFunc094C_014C;
	var0003 = ["无", "落雷术 (Lightning)", "群体诅咒 (Mass Curse)", "洞察术 (Reveal)", "物资幻化 (Conjure)"];
	var0004 = [0x0000, 0x0021, 0x0023, 0x0025, 0x0020];
	goto labelFunc094C_01AD;
labelFunc094C_014C:
	if (!(var0002 == 0x0005)) goto labelFunc094C_0183;
	var0003 = ["无", "群体催眠 (Mass Sleep)", "爆炸术 (Explosion)", "解除力场 (Dispel Field)", "火炎力场 (Fire Field)"];
	var0004 = [0x0000, 0x002F, 0x002B, 0x002A, 0x002E];
	goto labelFunc094C_01AD;
labelFunc094C_0183:
	var0003 = ["无", "火轮术 (Fire Ring)", "幻影术 (Clone)", "烈焰连击 (Flame Strike)", "地震术 (Tremor)"];
	var0004 = [0x0000, 0x0032, 0x0031, 0x0033, 0x0037];
labelFunc094C_01AD:
	message("「想要买哪种法术？」");
	say();
	var0005 = Func090C(var0003);
	if (!(var0005 == 0x0001)) goto labelFunc094C_01CB;
	message("「很好。」");
	say();
	goto labelFunc094C_0257;
labelFunc094C_01CB:
	var0006 = var0004[var0005];
	var0007 = var0001[var0002];
	var0008 = var0003[var0005];
	message("「");
	message(var0008);
	message(" 的花费是 ");
	message(var0007);
	message(" 枚金币。」");
	say();
	var0009 = Func0924(var0006, var0007);
	if (!(var0009 == 0x0001)) goto labelFunc094C_0213;
	message("「同意！」");
	say();
	goto labelFunc094C_024A;
labelFunc094C_0213:
	if (!(var0009 == 0x0002)) goto labelFunc094C_0228;
	message("「人类，你没有法术书。」");
	say();
	var0000 = false;
	goto labelFunc094C_0257;
labelFunc094C_0228:
	if (!(var0009 == 0x0003)) goto labelFunc094C_0239;
	message("「金币不够买那个！」");
	say();
	goto labelFunc094C_024A;
labelFunc094C_0239:
	if (!(var0009 == 0x0004)) goto labelFunc094C_024A;
	message("「看见你已经有这个法术了。」");
	say();
	goto labelFunc094C_024A;
labelFunc094C_024A:
	message("「对其他法术感兴趣吗？」");
	say();
	var0000 = Func090A();
	goto labelFunc094C_0020;
labelFunc094C_0257:
	UI_pop_answers();
	return;
}


