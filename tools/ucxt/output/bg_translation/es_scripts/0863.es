#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0863 0x863 ()
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
	var0001 = ["nothing", "bow", "crossbow", "triple crossbow", "arrows", "bolts"];
	var0002 = [0x0000, 0x0255, 0x0256, 0x0287, 0x02D2, 0x02D3];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0028, 0x007D, 0x0190, 0x0019, 0x001E];
	var0005 = ["", "a ", "a ", "a ", "", ""];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001];
	var0007 = ["", "", "", "", " for a dozen", " for a dozen"];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x000C, 0x000C];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0863_00BA:
	if (!var0000) goto labelFunc0863_01C1;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0863_00DE;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc0863_01BE;
labelFunc0863_00DE:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Wouldst thou still like to buy?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0863_0181;
	if (!((var0002[var0009] == 0x02D2) || (var0002[var0009] == 0x02D3))) goto labelFunc0863_015F;
	message("\"How many dozen wouldst thou like?\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
	goto labelFunc0863_0181;
labelFunc0863_015F:
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0000, 0x0001, false);
labelFunc0863_0181:
	if (!(var000B == 0x0001)) goto labelFunc0863_0192;
	message("\"Done!\"");
	say();
	goto labelFunc0863_01B4;
labelFunc0863_0192:
	if (!(var000B == 0x0002)) goto labelFunc0863_01A3;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0863_01B4;
labelFunc0863_01A3:
	if (!(var000B == 0x0003)) goto labelFunc0863_01B4;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0863_01B4;
labelFunc0863_01B4:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc0863_01BE:
	goto labelFunc0863_00BA;
labelFunc0863_01C1:
	UI_pop_answers();
	return;
}


