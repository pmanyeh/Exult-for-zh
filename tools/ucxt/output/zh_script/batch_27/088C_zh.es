#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func088C 0x88C ()
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
	var0001 = ["再看看", "羊肉", "牛肉", "家禽肉", "火腿", "鱒魚", "比目魚", "烤肉串", "肉乾"];
	var0002 = 0x0179;
	var0003 = [0xFE99, 0x0008, 0x0009, 0x000A, 0x000B, 0x000C, 0x000D, 0x000E, 0x000F];
	var0004 = [0x0000, 0x0003, 0x0014, 0x0003, 0x0014, 0x0005, 0x0007, 0x0003, 0x0002];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = ["", " (每份)", " (每份)", " (每個)", " (每片)", " (每個)", " (每個)", " (每份)", " (每十份)"];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x000A];
	message("「你想買些什麼？」");
	say();
labelFunc088C_00C3:
	if (!var0000) goto labelFunc088C_01B4;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc088C_00E7;
	message("「很好。」");
	say();
	var0000 = false;
	goto labelFunc088C_01B1;
labelFunc088C_00E7:
	var000A = Func091B(var0005, var0001[var0009], var0006, var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message("。這聽起來是個公平的價格嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc088C_0174;
	var000A = "你想要多少";
	if (!(var0008[var0009] > 0x0001)) goto labelFunc088C_013E;
	var000A = (var000A + "份");
labelFunc088C_013E:
	var000A = (var000A + "？");
	message("「");
	message(var000A);
	message("\"");
	say();
	var000B = Func08F8(var0002, var0003[var0009], var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
labelFunc088C_0174:
	if (!(var000B == 0x0001)) goto labelFunc088C_0185;
	message("「成交！」");
	say();
	goto labelFunc088C_01A7;
labelFunc088C_0185:
	if (!(var000B == 0x0002)) goto labelFunc088C_0196;
	message("「你不可能拿得動那麼多！」");
	say();
	goto labelFunc088C_01A7;
labelFunc088C_0196:
	if (!(var000B == 0x0003)) goto labelFunc088C_01A7;
	message("「你沒有足夠的金幣買那個！」");
	say();
	goto labelFunc088C_01A7;
labelFunc088C_01A7:
	message("「你還需要其他的嗎？」");
	say();
	var0000 = Func090A();
labelFunc088C_01B1:
	goto labelFunc088C_00C3;
labelFunc088C_01B4:
	UI_pop_answers();
	return;
}


