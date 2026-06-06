#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A9 0x8A9 ()
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
	var0001 = ["再看看", "木棒", "左手短劍", "匕首", "釘頭鎚", "晨星鎚", "劍", "戟"];
	var0002 = [0x0000, 0x024E, 0x024F, 0x0252, 0x0293, 0x0254, 0x0257, 0x025B];
	var0003 = [0x0000, 0x0005, 0x0014, 0x000A, 0x000F, 0x000F, 0x003C, 0x0096];
	var0004 = ["", "", "", "", "", "", "", ""];
	var0005 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000];
	var0006 = ["", "", "", "", "", "", "", ""];
	var0007 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0008 = 0xFE99;
	message("「你想買些什麼？」");
	say();
labelFunc08A9_00E4:
	if (!var0000) goto labelFunc08A9_01E0;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08A9_0108;
	message("「很好。」");
	say();
	var0000 = false;
	goto labelFunc08A9_01DD;
labelFunc08A9_0108:
	var000A = Func091B(var0004[var0009], var0001[var0009], var0005[var0009], var0003[var0009], var0006[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message("。這樣可以接受嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08A9_01A0;
	if (!(var0002[var0009] == 0x02D3)) goto labelFunc08A9_017E;
	message("「你想要多少打？」");
	say();
	var000B = Func08F8(var0002[var0009], var0008, var0007[var0009], var0003[var0009], 0x0014, 0x0001, true);
	goto labelFunc08A9_01A0;
labelFunc08A9_017E:
	var000B = Func08F8(var0002[var0009], var0008, var0007[var0009], var0003[var0009], 0x0000, 0x0001, true);
labelFunc08A9_01A0:
	if (!(var000B == 0x0001)) goto labelFunc08A9_01B1;
	message("「成交！」");
	say();
	goto labelFunc08A9_01D3;
labelFunc08A9_01B1:
	if (!(var000B == 0x0002)) goto labelFunc08A9_01C2;
	message("「你不可能拿得動那麼多！」");
	say();
	goto labelFunc08A9_01D3;
labelFunc08A9_01C2:
	if (!(var000B == 0x0003)) goto labelFunc08A9_01D3;
	message("「你沒有足夠的金幣買那個！」");
	say();
	goto labelFunc08A9_01D3;
labelFunc08A9_01D3:
	message("「你還需要其他的嗎？」");
	say();
	var0000 = Func090A();
labelFunc08A9_01DD:
	goto labelFunc08A9_00E4;
labelFunc08A9_01E0:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


