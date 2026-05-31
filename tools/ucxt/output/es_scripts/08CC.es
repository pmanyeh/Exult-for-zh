#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08CC 0x8CC ()
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
	var0006 = ["", "", ""];
	var0007 = [0x0000, 0x0000, 0x0000];
	var0008 = ["", " per bottle", " per bottle"];
	var0009 = [0x0000, 0x0001, 0x0001];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc08CC_008A:
	if (!var0001) goto labelFunc08CC_0159;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08CC_00B4;
	message("\"Very well, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc08CC_0156;
labelFunc08CC_00B4:
	var000B = 0x0000;
	var000C = Func091B(var0006[var000A], var0002[var000A], var0007[var000A], var0005[var000A], var0008[var000A]);
	message("\"^");
	message(var000C);
	message(". Is that price agreeable?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08CC_0119;
	var000B = Func08F8(var0003[var000A], var0004[var000A], var0009[var000A], var0005[var000A], 0x0000, 0x0001, true);
labelFunc08CC_0119:
	if (!(var000B == 0x0001)) goto labelFunc08CC_012A;
	message("\"Agreed.\"");
	say();
	goto labelFunc08CC_014C;
labelFunc08CC_012A:
	if (!(var000B == 0x0002)) goto labelFunc08CC_013B;
	message("\"Thou cannot carry that much!\"");
	say();
	goto labelFunc08CC_014C;
labelFunc08CC_013B:
	if (!(var000B == 0x0003)) goto labelFunc08CC_014C;
	message("\"Thou hast not the gold for that!\"");
	say();
	goto labelFunc08CC_014C;
labelFunc08CC_014C:
	message("\"Wouldst thou like something else?\"");
	say();
	var0001 = Func090A();
labelFunc08CC_0156:
	goto labelFunc08CC_008A;
labelFunc08CC_0159:
	UI_pop_answers();
	return;
}


