#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A3 0x8A3 ()
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
	var0002 = ["再看看", "弓箭", "十字弓箭"];
	var0003 = [0x0000, 0x02D2, 0x02D3];
	var0004 = 0xFE99;
	var0005 = 0x0014;
	var0006 = "";
	var0007 = 0x0001;
	var0008 = " 一打";
	var0009 = 0x000C;
	message("「你想買些什麼？」");
	say();
labelFunc08A3_0054:
	if (!var0001) goto labelFunc08A3_0112;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08A3_0078;
	message("「好的。」");
	say();
	var0001 = false;
	goto labelFunc08A3_010F;
labelFunc08A3_0078:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005, var0008);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message("。這樣可以接受嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08A3_00CC;
	message("「你想要多少打？」");
	say();
	var000C = Func08F8(var0003[var000A], var0004, var0009, var0005, 0x0014, 0x0001, true);
labelFunc08A3_00CC:
	if (!(var000C == 0x0001)) goto labelFunc08A3_00E3;
	message("「非常好，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc08A3_0105;
labelFunc08A3_00E3:
	if (!(var000C == 0x0002)) goto labelFunc08A3_00F4;
	message("「帶著那麼多東西你無法旅行！」");
	say();
	goto labelFunc08A3_0105;
labelFunc08A3_00F4:
	if (!(var000C == 0x0003)) goto labelFunc08A3_0105;
	message("「你沒有買那個的金幣！」");
	say();
	goto labelFunc08A3_0105;
labelFunc08A3_0105:
	message("「你想買些別的嗎？」");
	say();
	var0001 = Func090A();
labelFunc08A3_010F:
	goto labelFunc08A3_0054;
labelFunc08A3_0112:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


