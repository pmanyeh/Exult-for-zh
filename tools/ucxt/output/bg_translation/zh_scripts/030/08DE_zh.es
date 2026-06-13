#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08DE 0x8DE ()
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
	var0002 = ["再看看", "乳酪", "蜂蜜酒", "葡萄", "銀葉草", "麵包", "麥芽酒", "葡萄酒"];
	var0003 = [0x0000, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x001A, 0x0000, 0x0013, 0x001F, 0x0001, 0x0003, 0x0005];
	var0005 = [0x0000, 0x0007, 0x000A, 0x0002, 0x0023, 0x0003, 0x0003, 0x0005];
	var0006 = "";
	var0007 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000];
	var0008 = ["", " 每塊", " 每瓶", " 每串", " 每份", " 每條", " 每瓶", " 每瓶"];
	var0009 = 0x0001;
	message("「你想買些什麼？」");
	say();
labelFunc08DE_00D2:
	if (!var0001) goto labelFunc08DE_01E8;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08DE_00F6;
	message("「好吧。」");
	say();
	var0001 = false;
	goto labelFunc08DE_01E5;
labelFunc08DE_00F6:
	if (!(var000A == 0x0005)) goto labelFunc08DE_0113;
	if (!gflags[0x012B]) goto labelFunc08DE_0113;
	message("「我的銀葉草都賣完了，");
	message(var0000);
	message("。不知為什麼現在大缺貨，我沒辦法再進到貨了。」");
	say();
	goto labelFunc08DE_01DB;
labelFunc08DE_0113:
	var000B = Func091B(var0006, var0002[var000A], var0007[var000A], var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("「^");
	message(var000B);
	message(" 你還要嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08DE_01A8;
	if (!(var0003[var000A] == 0x0179)) goto labelFunc08DE_0186;
	message("「你想要多少？」");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0014, 0x0001, true);
	goto labelFunc08DE_01A8;
labelFunc08DE_0186:
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc08DE_01A8:
	if (!(var000C == 0x0001)) goto labelFunc08DE_01B9;
	message("「成交！盡情享用吧！」");
	say();
	goto labelFunc08DE_01DB;
labelFunc08DE_01B9:
	if (!(var000C == 0x0002)) goto labelFunc08DE_01CA;
	message("「根本沒有人拿得動那麼多東西！」");
	say();
	goto labelFunc08DE_01DB;
labelFunc08DE_01CA:
	if (!(var000C == 0x0003)) goto labelFunc08DE_01DB;
	message("「你的金幣不夠支付這些！」");
	say();
	goto labelFunc08DE_01DB;
labelFunc08DE_01DB:
	message("「你還想購買其他東西嗎？」");
	say();
	var0001 = Func090A();
labelFunc08DE_01E5:
	goto labelFunc08DE_00D2;
labelFunc08DE_01E8:
	UI_pop_answers();
	return;
}