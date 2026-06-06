#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func088E 0x88E ()
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
	var0001 = ["再看看", "鞋子", "護腰", "皮靴", "束腰外衣", "洋裝", "褲子", "沼澤靴"];
	var0002 = [0x0000, 0x0249, 0x0248, 0x024B, 0x00F9, 0x00F9, 0x02E2, 0x024C];
	var0003 = [0xFE99, 0xFE99, 0xFE99, 0xFE99, 0x0000, 0x0001, 0x0000, 0xFE99];
	var0004 = [0x0000, 0x0014, 0x0014, 0x0028, 0x001E, 0x001E, 0x001E, 0x0032];
	var0005 = ["", "", "a ", "", "a ", "a ", "", ""];
	var0006 = [0x0000, 0x0001, 0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0001];
	var0007 = ["", " (每雙)", "", " (每雙)", "", "", " (每雙)", " (每雙)"];
	var0008 = 0x0001;
	message("「你想買些什麼？」");
	say();
labelFunc088E_00E4:
	if (!var0000) goto labelFunc088E_01AA;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc088E_0108;
	message("「很好。」");
	say();
	var0000 = false;
	goto labelFunc088E_01A7;
labelFunc088E_0108:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	message("\"^");
	message(var000A);
	message("。這樣可以接受嗎？」");
	say();
	var000B = 0x0000;
	var000C = Func090A();
	if (!var000C) goto labelFunc088E_016A;
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0000, 0x0001, true);
labelFunc088E_016A:
	if (!(var000B == 0x0001)) goto labelFunc088E_017B;
	message("「成交！」");
	say();
	goto labelFunc088E_019D;
labelFunc088E_017B:
	if (!(var000B == 0x0002)) goto labelFunc088E_018C;
	message("「你不可能拿得動那麼多！」");
	say();
	goto labelFunc088E_019D;
labelFunc088E_018C:
	if (!(var000B == 0x0003)) goto labelFunc088E_019D;
	message("「你沒有足夠的金幣買那個！」");
	say();
	goto labelFunc088E_019D;
labelFunc088E_019D:
	message("「你還要買其他東西嗎？」");
	say();
	var0000 = Func090A();
labelFunc088E_01A7:
	goto labelFunc088E_00E4;
labelFunc088E_01AA:
	UI_pop_answers();
	return;
}


