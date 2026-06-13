#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func084C 0x84C ()
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

	UI_push_answers();
	var0000 = true;
	var0001 = ["nothing", "torch", "oil flasks", "shovel", "powder keg", "bucket", "jar", "cloth"];
	var0002 = [0x0000, 0x0253, 0x030E, 0x0271, 0x02C0, 0x032A, 0x0338, 0x0353];
	var0003 = [0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0x0000, 0x0000, 0xFE99];
	var0004 = [0x0000, 0x0004, 0x003C, 0x000C, 0x0019, 0x0004, 0x0002, 0x0003];
	var0005 = ["", "a ", "an ", "a ", "a ", "a ", "a ", ""];
	var0006 = ["", "", " for a dozen", "", "", "", "", " per bolt"];
	var0007 = [0x0000, 0x0001, 0x000C, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"To purchase what item?\"");
	say();
labelFunc084C_00DE:
	if (!var0000) goto labelFunc084C_0202;
	var0008 = Func090C(var0001);
	if (!(var0008 == 0x0001)) goto labelFunc084C_0102;
	message("\"To be fine.\"");
	say();
	var0000 = false;
	goto labelFunc084C_01FF;
labelFunc084C_0102:
	var0009 = 0x0001;
	var000A = 0x0001;
	var000B = Func091C(var0005[var0008], var0001[var0008], var0009, var0004[var0008], var0006[var0008]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(". To be acceptable?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc084C_01C2;
	if (!((var0002[var0008] == 0x0253) || (var0002[var0008] == 0x030E))) goto labelFunc084C_01A0;
	if (!(var0002[var0008] == 0x030E)) goto labelFunc084C_0177;
	message("\"To want to buy how many sets of twelve?\"");
	say();
	goto labelFunc084C_017B;
labelFunc084C_0177:
	message("\"To want to buy how many?\"");
	say();
labelFunc084C_017B:
	var000C = Func08F8(var0002[var0008], var0003, var0007[var0008], var0004[var0008], 0x0014, 0x0001, true);
	goto labelFunc084C_01C2;
labelFunc084C_01A0:
	var000C = Func08F8(var0002[var0008], var0003, var0007[var0008], var0004[var0008], 0x0000, 0x0001, false);
labelFunc084C_01C2:
	if (!(var000C == 0x0001)) goto labelFunc084C_01D3;
	message("\"To be done!\"");
	say();
	goto labelFunc084C_01F5;
labelFunc084C_01D3:
	if (!(var000C == 0x0002)) goto labelFunc084C_01E4;
	message("\"To be unable to carry that much, human.\"");
	say();
	goto labelFunc084C_01F5;
labelFunc084C_01E4:
	if (!(var000C == 0x0003)) goto labelFunc084C_01F5;
	message("\"To have not the right amount of gold!\"");
	say();
	goto labelFunc084C_01F5;
labelFunc084C_01F5:
	message("\"To buy something else?\"");
	say();
	var0000 = Func090A();
labelFunc084C_01FF:
	goto labelFunc084C_00DE;
labelFunc084C_0202:
	UI_pop_answers();
	return;
}


