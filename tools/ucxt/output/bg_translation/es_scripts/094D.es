#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func094D 0x94D ()
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
	var0001 = ["nothing", "mutton rations", "bread", "flounder"];
	var0002 = [0x0000, 0x0014, 0x0004, 0x0004];
	var0003 = 0x0179;
	var0004 = [0xFE99, 0x000F, 0x0000, 0x000D];
	var0005 = "";
	var0006 = [0x0000, 0x0001, 0x0000, 0x0000];
	var0007 = ["", " for 10 portions", " for one loaf", " for one portion"];
	var0008 = [0x0000, 0x000A, 0x0001, 0x0001];
	message("\"What would ye like?\"");
	say();
labelFunc094D_0084:
	if (!var0000) goto labelFunc094D_014B;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc094D_00A8;
	message("\"If ye say so. I know that blasted Britannian Tax Council or what have ye has made the cost o' things too high! Maybe next time!\"");
	say();
	var0000 = false;
	goto labelFunc094D_0148;
labelFunc094D_00A8:
	var000A = Func091B(var0005, var0001[var0009], var0006[var0009], var0002[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Is that acceptable?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc094D_010B;
	message("\"How much do ye want?\"");
	say();
	var000B = Func08F8(var0003, var0004[var0009], var0008[var0009], var0002[var0009], 0x0014, 0x0001, true);
labelFunc094D_010B:
	if (!(var000B == 0x0001)) goto labelFunc094D_011C;
	message("\"Done!\"");
	say();
	goto labelFunc094D_013E;
labelFunc094D_011C:
	if (!(var000B == 0x0002)) goto labelFunc094D_012D;
	message("\"Ye got ta lighten yer load first!\"");
	say();
	goto labelFunc094D_013E;
labelFunc094D_012D:
	if (!(var000B == 0x0003)) goto labelFunc094D_013E;
	message("\"Ye've not got the gold. I kinna do business like that!\"");
	say();
	goto labelFunc094D_013E;
labelFunc094D_013E:
	message("\"Anything else ye want?\"");
	say();
	var0000 = Func090A();
labelFunc094D_0148:
	goto labelFunc094D_0084;
labelFunc094D_014B:
	UI_pop_answers();
	return;
}


