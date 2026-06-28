#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);

void Func0875 0x875 (var var0000, var var0001)
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

	var0002 = Func0920();
	var0003 = Func090F(var0002);
	var0004 = Func0908();
	if (!(var0003 == var0004)) goto labelFunc0875_0025;
	var0003 = "你";
labelFunc0875_0025:
	if (!(var0002 == 0x0000)) goto labelFunc0875_0032;
	goto labelFunc0875_01BA;
labelFunc0875_0032:
	var0005 = 0x0003;
	var0006 = Func0922(var0000, var0001, var0002, var0005);
	if (!(var0006 == 0x0000)) goto labelFunc0875_005B;
	message("「我很抱歉，但你目前没有足够的实战经验可以进行训练。如果你能在日后回来，我会很高兴为你训练。」");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_005B:
	if (!(var0006 == 0x0001)) goto labelFunc0875_0093;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中你的金币并数了数，发现你总共有 ");
	message(var0007);
	message(" 枚金币。");
	say();
	if (!(var0007 < var0001)) goto labelFunc0875_0093;
	message("「很遗憾，你似乎没有足够的金币在这里训练。也许下次，当你手头更宽裕的时候……」");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_0093:
	if (!(var0006 == 0x0002)) goto labelFunc0875_00A4;
	message("「你已经和我一样精通了！恐怕在这方面我无法再对你进行进一步的训练。」");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_00A4:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金币，训练课程开始了。");
	say();
	if (!(var0003 == "你")) goto labelFunc0875_00ED;
	var0009 = "完成";
	var000A = "感觉到";
	var000B = "你的";
	var000C = "花费";
	var000D = "你";
	goto labelFunc0875_010B;
labelFunc0875_00ED:
	var0009 = "完成";
	var000A = "感觉到";
	var000B = "他们的";
	var000C = "花费";
	var000D = "他们";
labelFunc0875_010B:
	message("Denby 递给");
	message(var0003);
	message("一张印有卢恩符文的图表。「研究这些符文并把它们记下来，」他说。在");
	message(var0003);
	message("完成这项任务后，");
	message(var0003);
	message("感觉到脑海中多了一些以前没有的知识。~~「现在我们要练习。每天至少练习两次，我教你的东西。这样你就会变得更敏捷、更柔软。」^");
	message(var0003);
	message("花了一段时间模仿 Denby 示范的动作。最后，Denby 教了");
	message(var0003);
	message("几句用于冥想的魔法咒语。当训练课程结束时，");
	message(var0003);
	message("感觉充满了活力，准备好迎接可能出现的任何挑战……*");
	say();
	var000E = Func0910(var0002, 0x0001);
	var000F = Func0910(var0002, 0x0002);
	var0010 = Func0910(var0002, 0x0006);
	if (!(var000E < 0x001E)) goto labelFunc0875_0194;
	Func0915(var0002, 0x0001);
labelFunc0875_0194:
	if (!(var000F < 0x001E)) goto labelFunc0875_01A7;
	Func0916(var0002, 0x0001);
labelFunc0875_01A7:
	if (!(var0010 < 0x001E)) goto labelFunc0875_01BA;
	Func0918(var0002, 0x0001);
labelFunc0875_01BA:
	return;
}


