#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08B9 0x8B9 ()
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
	var0002 = ["无", "羊肉", "面包", "比目鱼", "银树叶", "葡萄酒", "麦芽酒"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0008, 0x0001, 0x000D, 0x001F, 0x0005, 0x0003];
	var0005 = [0x0000, 0x0006, 0x0005, 0x0005, 0x0032, 0x0005, 0x0005];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " 一份", " 一条", " 一份", " 一份", " 每瓶", " 每瓶"];
	var0009 = 0x0001;
	message("「你想来点什么？」");
	say();
labelFunc08B9_00AB:
	if (!var0001) goto labelFunc08B9_01BC;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08B9_00CF;
	message("「嗯，你会喜欢的。」");
	say();
	var0001 = false;
	goto labelFunc08B9_01B9;
labelFunc08B9_00CF:
	if (!(var000A == 0x0005)) goto labelFunc08B9_00E9;
	if (!gflags[0x012B]) goto labelFunc08B9_00E9;
	message("「我已经没有存货了，");
	message(var0000);
	message("。银叶树已不再砍伐，我的供应量也减少了。」");
	say();
labelFunc08B9_00E9:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("「^");
	message(var000B);
	message(" 对你来说太贵了吗？」");
	say();
	var000D = Func090A();
	if (!(!var000D)) goto labelFunc08B9_017C;
	if (!(var0003[var000A] == 0x0179)) goto labelFunc08B9_015A;
	message("「你想买多少？」");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0014, 0x0001, true);
	goto labelFunc08B9_017C;
labelFunc08B9_015A:
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc08B9_017C:
	if (!(var000C == 0x0001)) goto labelFunc08B9_018D;
	message("「成交！」");
	say();
	goto labelFunc08B9_01AF;
labelFunc08B9_018D:
	if (!(var000C == 0x0002)) goto labelFunc08B9_019E;
	message("「你不可能带得走那么多！」");
	say();
	goto labelFunc08B9_01AF;
labelFunc08B9_019E:
	if (!(var000C == 0x0003)) goto labelFunc08B9_01AF;
	message("「你的金币不足以支付这个！」");
	say();
	goto labelFunc08B9_01AF;
labelFunc08B9_01AF:
	message("「你还需要别的吗？」");
	say();
	var0001 = Func090A();
labelFunc08B9_01B9:
	goto labelFunc08B9_00AB;
labelFunc08B9_01BC:
	UI_pop_answers();
	return;
}