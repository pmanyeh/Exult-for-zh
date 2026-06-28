#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A0 0x8A0 ()
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
	var0002 = ["再看看", "羊肉", "牛肉", "蜂蜜酒", "鳟鱼", "火腿", "银叶草", "面包", "蛋糕", "麦酒", "葡萄酒"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0008, 0x0009, 0x0000, 0x000C, 0x000B, 0x001F, 0x0000, 0x0004, 0x0003, 0x0005];
	var0005 = [0x0000, 0x0005, 0x0012, 0x000C, 0x0004, 0x0012, 0x002D, 0x0003, 0x0002, 0x0004, 0x0004];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " (每份)", " (每排)", " (每瓶)", " (每份)", " (每片)", " (每份)", " (每条)", " (每块)", " (每瓶)", " (每瓶)"];
	var0009 = 0x0001;
	message("「你想买些什么？」");
	say();
labelFunc08A0_00E7:
	if (!var0001) goto labelFunc08A0_01FA;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08A0_010B;
	message("「很好。」");
	say();
	var0001 = false;
	goto labelFunc08A0_01F7;
labelFunc08A0_010B:
	if (!(var000A == 0x0007)) goto labelFunc08A0_0128;
	if (!gflags[0x012B]) goto labelFunc08A0_0128;
	message("「全卖光了，");
	message(var0000);
	message("。而且伐木工将不再砍伐银叶草树了。我预计它会变成更加珍贵的美食，而且更昂贵，如果我还能弄到任何可以卖的话。」");
	say();
	goto labelFunc08A0_01ED;
labelFunc08A0_0128:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message("。这听起来是个公平的价格吗？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08A0_01BA;
	if (!(var0003[var000A] == 0x0179)) goto labelFunc08A0_0198;
	message("「你想要多少？」");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0014, 0x0001, true);
	goto labelFunc08A0_01BA;
labelFunc08A0_0198:
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc08A0_01BA:
	if (!(var000C == 0x0001)) goto labelFunc08A0_01CB;
	message("「成交！」");
	say();
	goto labelFunc08A0_01ED;
labelFunc08A0_01CB:
	if (!(var000C == 0x0002)) goto labelFunc08A0_01DC;
	message("「你不可能拿得动那么多！」");
	say();
	goto labelFunc08A0_01ED;
labelFunc08A0_01DC:
	if (!(var000C == 0x0003)) goto labelFunc08A0_01ED;
	message("「你没有足够的金币买那个！」");
	say();
	goto labelFunc08A0_01ED;
labelFunc08A0_01ED:
	message("「你还需要其他的吗？」");
	say();
	var0001 = Func090A();
labelFunc08A0_01F7:
	goto labelFunc08A0_00E7;
labelFunc08A0_01FA:
	UI_pop_answers();
	return;
}


