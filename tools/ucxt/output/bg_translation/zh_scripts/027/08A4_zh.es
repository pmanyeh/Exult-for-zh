#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A4 0x8A4 ()
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
	var0002 = ["再看看", "弓", "十字弓", "三重連發十字弓", "魔法弓"];
	var0003 = [0x0000, 0x0255, 0x0256, 0x0287, 0x025E];
	var0004 = 0xFE99;
	var0005 = [0x0000, 0x0023, 0x006E, 0x015E, 0x0190];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = "";
	var0009 = 0x0001;
	message("「你想買些什麼？」");
	say();
labelFunc08A4_006F:
	if (!var0001) goto labelFunc08A4_012F;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08A4_0093;
	message("「好的。」");
	say();
	var0001 = false;
	goto labelFunc08A4_012C;
labelFunc08A4_0093:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message("。這樣可以接受嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08A4_00E9;
	var000C = Func08F8(var0003[var000A], var0004, var0009, var0005[var000A], 0x0000, 0x0001, false);
labelFunc08A4_00E9:
	if (!(var000C == 0x0001)) goto labelFunc08A4_0100;
	message("「非常好，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc08A4_0122;
labelFunc08A4_0100:
	if (!(var000C == 0x0002)) goto labelFunc08A4_0111;
	message("「帶著那麼多東西你無法旅行！」");
	say();
	goto labelFunc08A4_0122;
labelFunc08A4_0111:
	if (!(var000C == 0x0003)) goto labelFunc08A4_0122;
	message("「你沒有買那個的金幣！」");
	say();
	goto labelFunc08A4_0122;
labelFunc08A4_0122:
	message("「你想買些別的嗎？」");
	say();
	var0001 = Func090A();
labelFunc08A4_012C:
	goto labelFunc08A4_006F;
labelFunc08A4_012F:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


