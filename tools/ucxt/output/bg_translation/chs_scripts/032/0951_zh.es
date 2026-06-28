#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0951 0x951 ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	var0000 = Func0909();
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "羊肉", "面包", "蜂蜜酒", "鳟鱼", "银树叶", "蛋糕", "葡萄酒", "麦酒"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0008, 0x0001, 0x0000, 0x000C, 0x001F, 0x0005, 0x0005, 0x0003];
	var0005 = [0x0000, 0x0003, 0x0002, 0x0007, 0x0003, 0x001E, 0x0002, 0x0003, 0x0002];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " 每份", " 每个", " 每瓶", " 每份", " 每份", " 每片", " 每瓶", " 每瓶"];
	var0009 = 0x0001;
	message("「你想买点什么？」");
	say();
labelFunc0951_00C9:
	if (!var0001) goto labelFunc0951_01DC;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0951_00ED;
	message("「好的。」");
	say();
	var0001 = false;
	goto labelFunc0951_01D9;
labelFunc0951_00ED:
	if (!(var000A == 0x0006)) goto labelFunc0951_010A;
	if (!gflags[0x012B]) goto labelFunc0951_010A;
	message("「我很遗憾地告诉你，这家优良的店铺将不再能为我们尊贵的顾客提供银叶树了。为我提供这份精致餐点的人已经无法再获得它。我非常抱歉，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0951_01CF;
labelFunc0951_010A:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("「^");
	message(var000B);
	message(" 这是个公道的价格，不是吗？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0951_019C;
	if (!(var0003[var000A] == 0x0179)) goto labelFunc0951_017A;
	message("「你想要多少？」");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0014, 0x0001, true);
	goto labelFunc0951_019C;
labelFunc0951_017A:
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc0951_019C:
	if (!(var000C == 0x0001)) goto labelFunc0951_01AD;
	message("「成交！」");
	say();
	goto labelFunc0951_01CF;
labelFunc0951_01AD:
	if (!(var000C == 0x0002)) goto labelFunc0951_01BE;
	message("「你不可能拿得下这么多！」");
	say();
	goto labelFunc0951_01CF;
labelFunc0951_01BE:
	if (!(var000C == 0x0003)) goto labelFunc0951_01CF;
	message("「你没有足够的金币！」");
	say();
	goto labelFunc0951_01CF;
labelFunc0951_01CF:
	message("「你还想要点别的吗？」");
	say();
	var0001 = Func090A();
labelFunc0951_01D9:
	goto labelFunc0951_00C9;
labelFunc0951_01DC:
	UI_pop_answers();
	return;
}


