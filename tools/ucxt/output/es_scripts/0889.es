#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0889 0x889 ()
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
	var0001 = ["nothing", "jerky", "flounder", "ham", "bread", "cheese", "grapes", "milk", "mead", "ale", "wine"];
	var0002 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268, 0x0268, 0x0268];
	var0003 = [0xFE99, 0x000F, 0x000D, 0x000B, 0x0000, 0x001B, 0x0013, 0x0007, 0x0000, 0x0003, 0x0005];
	var0004 = [0x0000, 0x000C, 0x0002, 0x0009, 0x0001, 0x0003, 0x0001, 0x0003, 0x0007, 0x0001, 0x0002];
	var0005 = ["", "", "", "", "", "", "", "", "", "", ""];
	var0006 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0007 = ["", " for ten pieces", " for one portion", " for a slice", " for a loaf", " per wedge", " for a bunch", " for a bottle", " for a bottle", " for a bottle", " for a bottle"];
	var0008 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"To desire what item?\"");
	say();
labelFunc0889_014A:
	if (!var0000) goto labelFunc0889_0249;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0889_016E;
	message("\"To understand.\"");
	say();
	var0000 = false;
	goto labelFunc0889_0246;
labelFunc0889_016E:
	var000A = Func091C(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" To agree to the price?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0889_0209;
	if (!(var0002 == 0x0268)) goto labelFunc0889_01E0;
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0000, 0x0001, true);
	goto labelFunc0889_0209;
labelFunc0889_01E0:
	message("\"To request how many?\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
labelFunc0889_0209:
	if (!(var000B == 0x0001)) goto labelFunc0889_021A;
	message("\"To be done!\"");
	say();
	goto labelFunc0889_023C;
labelFunc0889_021A:
	if (!(var000B == 0x0002)) goto labelFunc0889_022B;
	message("\"To carry too much already!\"");
	say();
	goto labelFunc0889_023C;
labelFunc0889_022B:
	if (!(var000B == 0x0003)) goto labelFunc0889_023C;
	message("\"To be without enough gold!\"");
	say();
	goto labelFunc0889_023C;
labelFunc0889_023C:
	message("\"To request something else?\"");
	say();
	var0000 = Func090A();
labelFunc0889_0246:
	goto labelFunc0889_014A;
labelFunc0889_0249:
	UI_pop_answers();
	return;
}


