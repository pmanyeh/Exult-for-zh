#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0858 0x858 ()
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
	var0001 = ["nothing", "club", "dagger", "bow", "sword", "halberd", "arrows", "bolts"];
	var0002 = [0x0000, 0x024E, 0x0252, 0x0255, 0x0257, 0x025B, 0x02D2, 0x02D3];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0014, 0x0014, 0x0028, 0x0064, 0x00FA, 0x0019, 0x001E];
	var0005 = ["", "a ", "a ", "a ", "a ", "a ", "", ""];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001];
	var0007 = ["", "", "", "", "", "", " per dozen", " per dozen"];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x000C, 0x000C];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0858_00E4:
	if (!var0000) goto labelFunc0858_01EB;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0858_0108;
	message("\"Tsk tsk... I am broken-hearted...\"");
	say();
	var0000 = false;
	goto labelFunc0858_01E8;
labelFunc0858_0108:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Art thou still interested?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0858_01AB;
	if (!((var0002[var0009] == 0x02D2) || (var0002[var0009] == 0x02D3))) goto labelFunc0858_0189;
	message("\"How many dozen wouldst thou like?\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0005, 0x0001, true);
	goto labelFunc0858_01AB;
labelFunc0858_0189:
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0000, 0x0001, false);
labelFunc0858_01AB:
	if (!(var000B == 0x0001)) goto labelFunc0858_01BC;
	message("\"Done!\"");
	say();
	goto labelFunc0858_01DE;
labelFunc0858_01BC:
	if (!(var000B == 0x0002)) goto labelFunc0858_01CD;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0858_01DE;
labelFunc0858_01CD:
	if (!(var000B == 0x0003)) goto labelFunc0858_01DE;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0858_01DE;
labelFunc0858_01DE:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc0858_01E8:
	goto labelFunc0858_00E4;
labelFunc0858_01EB:
	UI_pop_answers();
	return;
}


