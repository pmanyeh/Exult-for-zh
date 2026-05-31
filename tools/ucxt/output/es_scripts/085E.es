#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func085E 0x85E ()
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
	var0002 = ["nothing", "wine", "ale"];
	var0003 = [0x0000, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0005, 0x0003];
	var0005 = [0x0000, 0x0004, 0x0003];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = " per bottle";
	var0009 = 0x0001;
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc085E_0066:
	if (!var0001) goto labelFunc085E_0129;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc085E_0090;
	message("\"Very well, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc085E_0126;
labelFunc085E_0090:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" Dost thou accept my price?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc085E_00E9;
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc085E_00E9:
	if (!(var000C == 0x0001)) goto labelFunc085E_00FA;
	message("\"Agreed.\"");
	say();
	goto labelFunc085E_011C;
labelFunc085E_00FA:
	if (!(var000C == 0x0002)) goto labelFunc085E_010B;
	message("\"Thou cannot carry that much!\"");
	say();
	goto labelFunc085E_011C;
labelFunc085E_010B:
	if (!(var000C == 0x0003)) goto labelFunc085E_011C;
	message("\"Thou hast not the gold for that!\"");
	say();
	goto labelFunc085E_011C;
labelFunc085E_011C:
	message("\"Wouldst thou like something else?\"");
	say();
	var0001 = Func090A();
labelFunc085E_0126:
	goto labelFunc085E_0066;
labelFunc085E_0129:
	UI_pop_answers();
	return;
}


