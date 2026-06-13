#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A8 0x8A8 ()
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
	var0001 = ["再看看", "毒藥", "解毒藥水", "照明藥水", "睡眠藥水", "防護藥水", "隱形藥水", "治療藥水", "覺醒藥水"];
	var0002 = 0x0154;
	var0003 = [0xFE99, 0x0003, 0x0002, 0x0006, 0x0000, 0x0005, 0x0007, 0x0001, 0x0004];
	var0004 = [0x0000, 0x000F, 0x0096, 0x0032, 0x000F, 0x0096, 0x0064, 0x0096, 0x001E];
	var0005 = ["", "", "", "", "", "", "", "", ""];
	var0006 = 0x0000;
	var0007 = " (每瓶)";
	var0008 = 0x0001;
	message("「你想買些什麼？」");
	say();
labelFunc08A8_00A8:
	if (!var0000) goto labelFunc08A8_0169;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08A8_00CC;
	message("「很好。」");
	say();
	var0000 = false;
	goto labelFunc08A8_0166;
labelFunc08A8_00CC:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006, var0004[var0009], var0007);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message("。你還想交易嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08A8_0129;
	message("「你想要多少？」");
	say();
	var000B = Func08F8(var0002, var0003[var0009], var0008, var0004[var0009], 0x0014, 0x0001, false);
labelFunc08A8_0129:
	if (!(var000B == 0x0001)) goto labelFunc08A8_013A;
	message("「成交！」");
	say();
	goto labelFunc08A8_015C;
labelFunc08A8_013A:
	if (!(var000B == 0x0002)) goto labelFunc08A8_014B;
	message("「你不可能拿得動那麼多！」");
	say();
	goto labelFunc08A8_015C;
labelFunc08A8_014B:
	if (!(var000B == 0x0003)) goto labelFunc08A8_015C;
	message("「你沒有足夠的金幣買那個！」");
	say();
	goto labelFunc08A8_015C;
labelFunc08A8_015C:
	message("「你還需要其他的嗎？」");
	say();
	var0000 = Func090A();
labelFunc08A8_0166:
	goto labelFunc08A8_00A8;
labelFunc08A8_0169:
	UI_pop_answers();
	return;
}


