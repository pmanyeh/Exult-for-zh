#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func094E 0x94E ()
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

	UI_push_answers();
	var0000 = true;
	var0001 = ["再看看", "蜂蜜酒", "葡萄酒", "麥酒"];
	var0002 = [0x0000, 0x0005, 0x0001, 0x0001];
	var0003 = 0x0268;
	var0004 = [0xFE99, 0x0000, 0x0005, 0x0003];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = " 每瓶";
	var0008 = 0x0001;
	message("「你想買點什麼？」");
	say();
labelFunc094E_0060:
	if (!var0000) goto labelFunc094E_011A;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc094E_0084;
	message("「隨你高興。我知道那該死的不列顛尼亞稅務委員會什麼的，把物價弄得太高了！或許下次吧！」");
	say();
	var0000 = false;
	goto labelFunc094E_0117;
labelFunc094E_0084:
	var000A = Func091B(var0005, var0001[var0009], var0006, var0002[var0009], var0007);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message("。你覺得這個價格合適嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc094E_00DA;
	var000B = Func08F8(var0003, var0004[var0009], var0008, var0002[var0009], 0x0000, 0x0001, true);
labelFunc094E_00DA:
	if (!(var000B == 0x0001)) goto labelFunc094E_00EB;
	message("「成交！」");
	say();
	goto labelFunc094E_010D;
labelFunc094E_00EB:
	if (!(var000B == 0x0002)) goto labelFunc094E_00FC;
	message("「你得先減輕一下你的行囊！」");
	say();
	goto labelFunc094E_010D;
labelFunc094E_00FC:
	if (!(var000B == 0x0003)) goto labelFunc094E_010D;
	message("「你的金幣不夠。我不能這樣做生意！」");
	say();
	goto labelFunc094E_010D;
labelFunc094E_010D:
	message("「還想要別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc094E_0117:
	goto labelFunc094E_0060;
labelFunc094E_011A:
	UI_pop_answers();
	return;
}


