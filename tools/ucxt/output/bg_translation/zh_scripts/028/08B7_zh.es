#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08B7 0x8B7 ()
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
	var var000E;

	var0000 = Func0909();
	UI_push_answers();
	var0001 = true;
	var0002 = ["無", "羊肉", "牛肉", "蜂蜜酒", "鱒魚", "火腿", "銀樹葉", "麵包", "蛋糕", "麥芽酒", "葡萄酒"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0008, 0x0009, 0x0000, 0x000C, 0x000B, 0x001F, 0x0000, 0x0004, 0x0003, 0x0005];
	var0005 = [0x0000, 0x0006, 0x0014, 0x000F, 0x0005, 0x0014, 0x0032, 0x0004, 0x0003, 0x0005, 0x0005];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " 一份", " 一排", " 一瓶", " 一份", " 一片", " 一份", " 一條", " 一塊", " 一瓶", " 一瓶"];
	var0009 = 0x0001;
	var000A = 0xFFDB;
	message("「你想買些什麼？」");
	say();
labelFunc08B7_00ED:
	if (!var0001) goto labelFunc08B7_0200;
	var000B = Func090C(var0002);
	if (!(var000B == 0x0001)) goto labelFunc08B7_0111;
	message("「好吧。」");
	say();
	var0001 = false;
	goto labelFunc08B7_01FD;
labelFunc08B7_0111:
	if (!(var000B == 0x0007)) goto labelFunc08B7_012E;
	if (!gflags[0x012B]) goto labelFunc08B7_012E;
	message("「喔，我真是太抱歉了，");
	message(var0000);
	message("，但我沒有存貨了。Yew 的伐木工拒絕再砍伐任何銀葉樹。我個人認為這是一個糟糕的決定。」");
	say();
	goto labelFunc08B7_01F3;
labelFunc08B7_012E:
	var000C = Func091B(var0006, var0002[var000B], var0007, var0005[var000B], var0008[var000B]);
	var000D = 0x0000;
	message("「^");
	message(var000C);
	message(" 你還想要嗎？」");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc08B7_01C0;
	if (!(var0003[var000B] == 0x0179)) goto labelFunc08B7_019E;
	message("「你想買多少？」");
	say();
	var000D = Func08F8(var0003[var000B], var0004[var000B], var0009, var0005[var000B], 0x0014, 0x0001, true);
	goto labelFunc08B7_01C0;
labelFunc08B7_019E:
	var000D = Func08F8(var0003[var000B], var0004[var000B], var0009, var0005[var000B], 0x0000, 0x0001, true);
labelFunc08B7_01C0:
	if (!(var000D == 0x0001)) goto labelFunc08B7_01D1;
	message("「成交！」");
	say();
	goto labelFunc08B7_01F3;
labelFunc08B7_01D1:
	if (!(var000D == 0x0002)) goto labelFunc08B7_01E2;
	message("「你不可能帶得走那麼多！」");
	say();
	goto labelFunc08B7_01F3;
labelFunc08B7_01E2:
	if (!(var000D == 0x0003)) goto labelFunc08B7_01F3;
	message("「你的金幣不足以支付這個！」");
	say();
	goto labelFunc08B7_01F3;
labelFunc08B7_01F3:
	message("「你還需要別的嗎？」");
	say();
	var0001 = Func090A();
labelFunc08B7_01FD:
	goto labelFunc08B7_00ED;
labelFunc08B7_0200:
	UI_pop_answers();
	return;
}