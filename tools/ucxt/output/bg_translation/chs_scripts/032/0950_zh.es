#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func0950 0x950 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	var0004 = UI_is_pc_female();
	if (!(var0002 == 0xFE9C)) goto labelFunc0950_005A;
	var0003 = "你";
	var0005 = "你";
	var0006 = "模仿";
	var0007 = "培养出";
	var0008 = "你们";
	var0009 = "你已经";
	var000A = "觉得";
	var000B = "掌握了";
	var000C = "学会了";
	goto labelFunc0950_009F;
labelFunc0950_005A:
	if (!var0004) goto labelFunc0950_006F;
	var0005 = "她";
	var0009 = "她已经";
	goto labelFunc0950_007B;
labelFunc0950_006F:
	var0005 = "他";
	var0009 = "他已经";
labelFunc0950_007B:
	var0006 = "模仿";
	var0007 = "培养出";
	var0008 = "他们";
	var000A = "觉得";
	var000B = "掌握了";
	var000C = "学会了";
labelFunc0950_009F:
	if (!(var0002 == 0x0000)) goto labelFunc0950_00AC;
	goto labelFunc0950_01C6;
labelFunc0950_00AC:
	var000D = 0x0002;
	var000E = Func0922(var0000, var0001, var0002, var000D);
	if (!(var000E == 0x0000)) goto labelFunc0950_00D5;
	message("「看来你现在没有足够的实战经验来进行训练。如果你能获得更多经验后再来，我就可以帮助你。」");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_00D5:
	if (!(var000E == 0x0001)) goto labelFunc0950_010D;
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中精神数了数你的金币，发现你总共有 ");
	message(var000F);
	message(" 枚金币。");
	say();
	if (!(var000F < var0001)) goto labelFunc0950_010D;
	message("「看来你似乎没有足够的金币在这里训练。如果你能等口袋满了之后再来……」");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_010D:
	if (!(var000E == 0x0002)) goto labelFunc0950_011E;
	message("「看来你已经和我一样精通了！恐怕我不能再教你什么了。」");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_011E:
	message("你支付了 ");
	message(var0001);
	message(" 枚金币。");
	say();
	var0010 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("Zella 开始课程，向");
	message(var0003);
	message("展示『拳击』的正确姿势。~~「这全都取决于平衡。利用你的体重来控制动作。脚步要轻。这几乎就像跳舞一样。」Zella 向");
	message(var0003);
	message("示范了一些步法，并对着空气挥拳。");
	message(var0005);
	message("");
	message(var0006);
	message("着他，并慢慢");
	message(var0007);
	message("对这种技巧的感觉。过了一会儿，这成为了第二天性。");
	message(var0008);
	message("两人互相挥拳，而");
	message(var0003);
	message("");
	message(var000C);
	message("了正确的防御动作。课程结束时，");
	message(var0009);
	message("");
	message(var000A);
	message("");
	message(var0009);
	message("");
	message(var000B);
	message("更好地理解了『拳击』的概念。");
	say();
	var0011 = Func0910(var0002, 0x0001);
	var0012 = Func0910(var0002, 0x0004);
	if (!(var0011 < 0x001E)) goto labelFunc0950_01B3;
	Func0915(var0002, 0x0001);
labelFunc0950_01B3:
	if (!(var0012 < 0x001E)) goto labelFunc0950_01C6;
	Func0917(var0002, 0x0001);
labelFunc0950_01C6:
	return;
}


