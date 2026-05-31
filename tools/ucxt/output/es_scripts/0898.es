#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0898 0x898 ()
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
	var0001 = ["nothing", "sling", "dagger", "spear", "mace", "sword", "throwing axe", "2-handed axe", "2-handed sword"];
	var0002 = [0x0000, 0x01DA, 0x0252, 0x0250, 0x0293, 0x0257, 0x0251, 0x0259, 0x025A];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0014, 0x0014, 0x0019, 0x0014, 0x0064, 0x0019, 0x0064, 0x00FA];
	var0005 = ["", "a ", "a ", "a ", "a ", "a ", "a ", "a ", "a "];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001];
	var0007 = ["", "", "", "", "", "", "", "", ""];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0898_0102:
	if (!var0000) goto labelFunc0898_0209;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0898_0126;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc0898_0206;
labelFunc0898_0126:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" A fair price, yes?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0898_01C9;
	if (!((var0002[var0009] == 0x02D2) || (var0002[var0009] == 0x02D3))) goto labelFunc0898_01A7;
	message("\"How many dozen wouldst thou like?\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0005, 0x0001, true);
	goto labelFunc0898_01C9;
labelFunc0898_01A7:
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0000, 0x0001, false);
labelFunc0898_01C9:
	if (!(var000B == 0x0001)) goto labelFunc0898_01DA;
	message("\"Done!\"");
	say();
	goto labelFunc0898_01FC;
labelFunc0898_01DA:
	if (!(var000B == 0x0002)) goto labelFunc0898_01EB;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0898_01FC;
labelFunc0898_01EB:
	if (!(var000B == 0x0003)) goto labelFunc0898_01FC;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0898_01FC;
labelFunc0898_01FC:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc0898_0206:
	goto labelFunc0898_0102;
labelFunc0898_0209:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


