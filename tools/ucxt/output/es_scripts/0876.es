#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0876 0x876 ()
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
	var0002 = ["nothing", "mutton rations", "bread", "trout", "ham", "cake", "grapes", "cheese", "mead", "wine", "ale", "milk"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x000F, 0x0000, 0x000C, 0x000B, 0x0005, 0x0013, 0x001A, 0x0000, 0x0005, 0x0003, 0x0007];
	var0005 = [0x0000, 0x0010, 0x0006, 0x0003, 0x000F, 0x0001, 0x0003, 0x0003, 0x000A, 0x0005, 0x0002, 0x0004];
	var0006 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000];
	var0007 = ["", " for 10 pieces", " for one loaf", " for one portion", " for one slice", " for one piece", " for a bunch", " for a hunk", " for a bottle", " for a bottle", " for a bottle", " for a bottle"];
	var0008 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou choose to buy, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0876_013E:
	if (!var0001) goto labelFunc0876_0255;
	var0009 = Func090C(var0002);
	if (!(var0009 == 0x0001)) goto labelFunc0876_0168;
	message("\"Very well, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc0876_0252;
labelFunc0876_0168:
	var000A = "";
	var000B = 0x0000;
	var000C = Func091B(var000A, var0002[var0009], var0006[var0009], var0005[var0009], var0007[var0009]);
	message("\"^");
	message(var000C);
	message(". Dost thou find the price acceptable?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0876_0209;
	if (!(var0003[var0009] == 0x0268)) goto labelFunc0876_01E0;
	var000B = Func08F8(var0003[var0009], var0004[var0009], var0008[var0009], var0005[var0009], 0x0000, 0x0001, true);
	goto labelFunc0876_0209;
labelFunc0876_01E0:
	message("\"How many dost thou want to purchase?\"");
	say();
	var000B = Func08F8(var0003[var0009], var0004[var0009], var0008[var0009], var0005[var0009], 0x0014, 0x0001, true);
labelFunc0876_0209:
	if (!(var000B == 0x0001)) goto labelFunc0876_0220;
	message("\"Very good, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0876_0248;
labelFunc0876_0220:
	if (!(var000B == 0x0002)) goto labelFunc0876_0237;
	message("\"I believe thou cannot carry that much, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0876_0248;
labelFunc0876_0237:
	if (!(var000B == 0x0003)) goto labelFunc0876_0248;
	message("\"It would appear thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0876_0248;
labelFunc0876_0248:
	message("\"Wouldst thou care to buy something else?\"");
	say();
	var0001 = Func090A();
labelFunc0876_0252:
	goto labelFunc0876_013E;
labelFunc0876_0255:
	UI_pop_answers();
	return;
}


