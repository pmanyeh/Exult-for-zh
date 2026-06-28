#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0908 0x908 ();
extern var Func090F 0x90F (var var0000);
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08A6 0x8A6 (var var0000, var var0001)
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

	var0002 = Func0920();
	var0003 = Func0908();
	if (!(var0002 == 0x0000)) goto labelFunc08A6_0019;
	goto labelFunc08A6_017C;
labelFunc08A6_0019:
	var0004 = Func090F(var0002);
	if (!(var0004 == var0003)) goto labelFunc08A6_0047;
	var0004 = "你";
	var0005 = "妳";
	var0006 = "你的";
	var0007 = "找到";
	goto labelFunc08A6_0082;
labelFunc08A6_0047:
	var0007 = "找到";
	if (!((var0002 == 0xFFFB) || ((var0002 == 0xFFF8) || (var0002 == 0xFFF7)))) goto labelFunc08A6_0076;
	var0005 = "她";
	var0006 = "她的";
	goto labelFunc08A6_0082;
labelFunc08A6_0076:
	var0005 = "他";
	var0006 = "他的";
labelFunc08A6_0082:
	var0008 = 0x0003;
	var0009 = Func0922(var0000, var0001, var0002, var0008);
	if (!(var0009 == 0x0000)) goto labelFunc08A6_00B1;
	message("Karenna 看着");
	message(var0004);
	message("并微微一笑。「你并非没有技巧，但你还没准备好。」");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_00B1:
	if (!(var0009 == 0x0001)) goto labelFunc08A6_00E9;
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中你的金币并数了数，发现你总共有 ");
	message(var000A);
	message(" 枚金币。");
	say();
	if (!(var000A < var0001)) goto labelFunc08A6_00E9;
	message("Karenna 生气地看着你。「我不是在开慈善机构。等你有多点钱的时候再来吧！」");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_00E9:
	if (!(var0009 == 0x0002)) goto labelFunc08A6_0100;
	message("Karenna 瞪着");
	message(var0004);
	message("。「你只是在浪费我的时间。你和我一样敏捷且狡猾，我敢打赌你早就知道了。我没时间应付你这种人。」");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_0100:
	var000B = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金币，训练课程开始了。");
	say();
	message("Karenna 像一只豹一样在训练场的软垫上跳跃。她的动作快到模糊不清。她发动攻击。起初她能随意击中目标，引起一阵阵疼痛，让");
	message(var0004);
	message("摇摇晃晃，但随着课程的进行，");
	message(var0004);
	message("发现自己的反射神经明显变敏锐了。");
	say();
	message("「我感谢你带来一场精彩的练习。你会再来的。」她自信地笑着。");
	say();
	var000C = Func0910(var0002, 0x0001);
	var000D = Func0910(var0002, 0x0004);
	if (!(var000C < 0x001E)) goto labelFunc08A6_0169;
	Func0915(var0002, 0x0002);
labelFunc08A6_0169:
	if (!(var000D < 0x001E)) goto labelFunc08A6_017C;
	Func0917(var0002, 0x0001);
labelFunc08A6_017C:
	return;
}


