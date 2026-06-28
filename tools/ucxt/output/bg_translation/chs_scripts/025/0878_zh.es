#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func0878 0x878 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc0878_0013;
	goto labelFunc0878_00EB;
labelFunc0878_0013:
	var0003 = 0x0002;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc0878_003C;
	message("「你现在还没有足够的实战经验来向我学习战斗！」他嘲笑着说。");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_003C:
	if (!(var0004 == 0x0001)) goto labelFunc0878_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中你的金币并数了数，发现你总共有 ");
	message(var0005);
	message(" 枚金币。");
	say();
	if (!(var0005 < var0001)) goto labelFunc0878_0074;
	message("「嗯……看来你没有足够的金币。当你的金库更满时，我也许能帮上你。」他得意地笑着。");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_0074:
	if (!(var0004 == 0x0002)) goto labelFunc0878_0085;
	message("「你的技术已经接近我了！你已经达到了你自身潜力的顶峰。我无法为你做更多的事了。」");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_0085:
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金币，训练课程开始了。");
	say();
	var0007 = Func090F(var0002);
	var0008 = Func0908();
	if (!(var0007 == var0008)) goto labelFunc0878_00C2;
	var0007 = "你";
labelFunc0878_00C2:
	message("这堂课包含各种手法和假动作攻击的技巧，花费了相当短的时间。~~De Snel 突然挺直身子并收起他的刀刃。「今天就到此为止。如果你希望进行更多训练，你绝对能从我的经验中获益。」他傲慢地上下打量着");
	message(var0007);
	message("。「你似乎是个聪明的学生。你以后可以再回来高端你的训练。」");
	say();
	var0009 = Func0910(var0002, 0x0004);
	if (!(var0009 < 0x001E)) goto labelFunc0878_00EB;
	Func0917(var0002, 0x0002);
labelFunc0878_00EB:
	return;
}


