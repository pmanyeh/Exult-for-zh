#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0853 0x853 ()
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
	var0001 = ["nothing", "torch", "oil flasks", "bag", "shovel", "powder keg", "bucket", "jar", "jug", "wing scratcher", "nail file", "horn polish"];
	var0002 = [0x0000, 0x0253, 0x030E, 0x0322, 0x0271, 0x02C0, 0x032A, 0x02A9, 0x0006, 0x03A9, 0x03A9, 0x03A9];
	var0003 = [0x0000, 0x0004, 0x0048, 0x0006, 0x000E, 0x0023, 0x0003, 0x0003, 0x0002, 0x0005, 0x0005, 0x0002];
	var0004 = ["", "a ", "", "a ", "a ", "a ", "a ", "a ", "a ", "a ", "a ", ""];
	var0005 = 0x0001;
	var0006 = ["", "", " per dozen", "", "", "", "", "", "", "", "", " per application"];
	var0007 = [0x0000, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0x0000, 0x0001, 0x0003];
	var0008 = [0x0000, 0x0001, 0x000C, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"To make what purchase?\"");
	say();
labelFunc0853_0138:
	if (!var0000) goto labelFunc0853_0250;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0853_015C;
	message("\"To be acceptable.\"");
	say();
	var0000 = false;
	goto labelFunc0853_024D;
labelFunc0853_015C:
	var000A = Func091C(var0004[var0009], var0001[var0009], var0005, var0003[var0009], var0006[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(". To be an acceptable price?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0853_0210;
	if (!((var0002[var0009] == 0x0253) || (var0002[var0009] == 0x030E))) goto labelFunc0853_01EE;
	if (!(var0002[var0009] == 0x030E)) goto labelFunc0853_01C5;
	message("\"To want how many sets of twelve?\"");
	say();
	goto labelFunc0853_01C9;
labelFunc0853_01C5:
	message("\"To want how many?\"");
	say();
labelFunc0853_01C9:
	var000B = Func08F8(var0002[var0009], var0007, var0008[var0009], var0003[var0009], 0x0014, 0x0001, false);
	goto labelFunc0853_0210;
labelFunc0853_01EE:
	var000B = Func08F8(var0002[var0009], var0007, var0008[var0009], var0003[var0009], 0x0000, 0x0001, false);
labelFunc0853_0210:
	if (!(var000B == 0x0001)) goto labelFunc0853_0221;
	message("\"To accept!\"");
	say();
	goto labelFunc0853_0243;
labelFunc0853_0221:
	if (!(var000B == 0x0002)) goto labelFunc0853_0232;
	message("\"To be unable to travel with that much weight!\"");
	say();
	goto labelFunc0853_0243;
labelFunc0853_0232:
	if (!(var000B == 0x0003)) goto labelFunc0853_0243;
	message("\"To have not the money for that!\"");
	say();
	goto labelFunc0853_0243;
labelFunc0853_0243:
	message("\"To make another purchase?\"");
	say();
	var0000 = Func090A();
labelFunc0853_024D:
	goto labelFunc0853_0138;
labelFunc0853_0250:
	UI_pop_answers();
	return;
}


