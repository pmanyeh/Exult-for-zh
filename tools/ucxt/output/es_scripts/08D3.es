#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08D3 0x8D3 ()
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
	var0002 = ["nothing", "dagger", "spear", "morning star", "mace", "sword", "two-handed sword", "halberd"];
	var0003 = [0x0000, 0x0252, 0x0250, 0x0254, 0x0293, 0x0257, 0x025A, 0x025B];
	var0004 = [0x0000, 0x000C, 0x0019, 0x0019, 0x0014, 0x0041, 0x00AF, 0x00C8];
	var0005 = "a ";
	var0006 = 0x0000;
	var0007 = "";
	var0008 = 0x0001;
	var0009 = 0xFE99;
	message("\"What weapon wouldst thou like to buy?\"");
	say();
labelFunc08D3_008A:
	if (!var0001) goto labelFunc08D3_0150;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08D3_00B4;
	message("\"I completely understand, ");
	message(var0000);
	message(". Ever since the Britannian Tax Council set such outrageous taxes, prices have risen throughout the land.\"");
	say();
	var0001 = false;
	goto labelFunc08D3_014D;
labelFunc08D3_00B4:
	var000B = Func091B(var0005, var0002[var000A], var0006, var0004[var000A], var0007);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(".\" Is this price acceptable to thee?");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08D3_010A;
	var000C = Func08F8(var0003[var000A], var0009, var0008, var0004[var000A], 0x0000, 0x0001, true);
labelFunc08D3_010A:
	if (!(var000C == 0x0001)) goto labelFunc08D3_011B;
	message("\"Done!\"");
	say();
	goto labelFunc08D3_0143;
labelFunc08D3_011B:
	if (!(var000C == 0x0002)) goto labelFunc08D3_0132;
	message("\"I am sorry, ");
	message(var0000);
	message(", but not even I could carry that much!\"");
	say();
	goto labelFunc08D3_0143;
labelFunc08D3_0132:
	if (!(var000C == 0x0003)) goto labelFunc08D3_0143;
	message("\"Thou hast not enough gold for that!\"");
	say();
	goto labelFunc08D3_0143;
labelFunc08D3_0143:
	message("\"Dost thou want for anything else?\"");
	say();
	var0001 = Func090A();
labelFunc08D3_014D:
	goto labelFunc08D3_008A;
labelFunc08D3_0150:
	UI_pop_answers();
	return;
}


