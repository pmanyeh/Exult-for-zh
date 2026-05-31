#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A7 0x8A7 ()
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
	var0001 = ["nothing", "eggs", "apple", "banana", "carrot", "pumpkin", "grapes"];
	var0002 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0003 = [0xFE99, 0x0018, 0x0010, 0x0011, 0x0012, 0x0015, 0x0013];
	var0004 = [0x0000, 0x000C, 0x0003, 0x0003, 0x0003, 0x0004, 0x0003];
	var0005 = ["", "", "an ", "a ", "a ", "a ", ""];
	var0006 = [0x0000, 0x000C, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001];
	var0007 = ["", " for one dozen", "", "", "", "", " for a bunch"];
	var0008 = [0x0000, 0x000C, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc08A7_00E4:
	if (!var0000) goto labelFunc08A7_01DE;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08A7_0108;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc08A7_01DB;
labelFunc08A7_0108:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Wilt thou pay my price?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08A7_019E;
	var000A = "How many ";
	if (!(var0008[var0009] > 0x0001)) goto labelFunc08A7_0165;
	var000A = (var000A + "dozen ");
labelFunc08A7_0165:
	var000A = (var000A + "wouldst thou like?");
	message("\"");
	message(var000A);
	message("\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
labelFunc08A7_019E:
	if (!(var000B == 0x0001)) goto labelFunc08A7_01AF;
	message("\"Thou wilt indeed be pleased with thy purchase. We have only the finest produce.\"");
	say();
	goto labelFunc08A7_01D1;
labelFunc08A7_01AF:
	if (!(var000B == 0x0002)) goto labelFunc08A7_01C0;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc08A7_01D1;
labelFunc08A7_01C0:
	if (!(var000B == 0x0003)) goto labelFunc08A7_01D1;
	message("\"Thou dost not have enough coin to pay for that!\"");
	say();
	goto labelFunc08A7_01D1;
labelFunc08A7_01D1:
	message("\"Wouldst thou like to purchase something else?\"");
	say();
	var0000 = Func090A();
labelFunc08A7_01DB:
	goto labelFunc08A7_00E4;
labelFunc08A7_01DE:
	UI_pop_answers();
	return;
}


