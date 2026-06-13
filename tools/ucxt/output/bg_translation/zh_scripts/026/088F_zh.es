#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func088F 0x88F ()
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
	var0001 = ["再看看", "葡萄酒", "麥酒"];
	var0002 = [0x0000, 0x0268, 0x0268];
	var0003 = [0xFE99, 0x0005, 0x0003];
	var0004 = [0x0000, 0x0005, 0x0005];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = ["", " (每瓶)", " (每杯)"];
	var0008 = 0x0001;
	message("「你想來點什麼潤潤喉？」");
	say();
labelFunc088F_0069:
	if (!var0000) goto labelFunc088F_012D;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc088F_008D;
	message("「好選擇。」");
	say();
	var0000 = false;
	goto labelFunc088F_012A;
labelFunc088F_008D:
	var000A = Func091B(var0005, var0001[var0009], var0006, var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message("。你覺得這個價格值得嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc088F_00ED;
	message("「你說得對！」");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0000, 0x0001, true);
labelFunc088F_00ED:
	if (!(var000B == 0x0001)) goto labelFunc088F_00FE;
	message("「成交！」");
	say();
	goto labelFunc088F_0120;
labelFunc088F_00FE:
	if (!(var000B == 0x0002)) goto labelFunc088F_010F;
	message("「你不可能拿得動那麼多！」");
	say();
	goto labelFunc088F_0120;
labelFunc088F_010F:
	if (!(var000B == 0x0003)) goto labelFunc088F_0120;
	message("「你沒有足夠的金幣買那個！」");
	say();
	goto labelFunc088F_0120;
labelFunc088F_0120:
	message("「你還要點其他東西嗎？」");
	say();
	var0000 = Func090A();
labelFunc088F_012A:
	goto labelFunc088F_0069;
labelFunc088F_012D:
	UI_pop_answers();
	return;
}


