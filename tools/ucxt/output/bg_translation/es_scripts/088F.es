#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func088F 0x88F ()
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
	var0001 = ["nothing", "wine", "ale"];
	var0002 = [0x0000, 0x0268, 0x0268];
	var0003 = [0xFE99, 0x0005, 0x0003];
	var0004 = [0x0000, 0x0005, 0x0005];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = ["", " for a bottle", " for a tankard"];
	var0008 = 0x0001;
	message("\"What wouldst thou like to whet thy palate?\"");
	say();
labelFunc088F_0069:
	if (!var0000) goto labelFunc088F_012D;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc088F_008D;
	message("\"Fine choice.\"");
	say();
	var0000 = false;
	goto labelFunc088F_012A;
labelFunc088F_008D:
	var000A = Func091B(var0005, var0001[var0009], var0006, var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Dost thou think it worth the cost?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc088F_00ED;
	message("\"Thou art correct!\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0000, 0x0001, true);
labelFunc088F_00ED:
	if (!(var000B == 0x0001)) goto labelFunc088F_00FE;
	message("\"Done!\"");
	say();
	goto labelFunc088F_0120;
labelFunc088F_00FE:
	if (!(var000B == 0x0002)) goto labelFunc088F_010F;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc088F_0120;
labelFunc088F_010F:
	if (!(var000B == 0x0003)) goto labelFunc088F_0120;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc088F_0120;
labelFunc088F_0120:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc088F_012A:
	goto labelFunc088F_0069;
labelFunc088F_012D:
	UI_pop_answers();
	return;
}


