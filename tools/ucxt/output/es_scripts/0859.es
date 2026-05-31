#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0859 0x859 ()
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
	var0001 = ["nothing", "great helm", "plate armour", "plate leggings", "gorget", "scale armour", "gauntlets"];
	var0002 = [0x0000, 0x021D, 0x023D, 0x0240, 0x024A, 0x023A, 0x0244];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x00C8, 0x0145, 0x00C8, 0x0028, 0x0064, 0x0019];
	var0005 = ["", "a ", "", "", "a ", "", ""];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000, 0x0001];
	var0007 = ["", "", "", " for a pair", "", "", " for a pair"];
	var0008 = 0x0001;
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0859_00BA:
	if (!var0000) goto labelFunc0859_017D;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0859_00DE;
	message("\"Tsk tsk... I am broken-hearted...\"");
	say();
	var0000 = false;
	goto labelFunc0859_017A;
labelFunc0859_00DE:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Is that acceptable?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0859_013D;
	var000B = Func08F8(var0002[var0009], var0003, var0008, var0004[var0009], 0x0000, 0x0001, false);
labelFunc0859_013D:
	if (!(var000B == 0x0001)) goto labelFunc0859_014E;
	message("\"Done!\"");
	say();
	goto labelFunc0859_0170;
labelFunc0859_014E:
	if (!(var000B == 0x0002)) goto labelFunc0859_015F;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0859_0170;
labelFunc0859_015F:
	if (!(var000B == 0x0003)) goto labelFunc0859_0170;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0859_0170;
labelFunc0859_0170:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc0859_017A:
	goto labelFunc0859_00BA;
labelFunc0859_017D:
	UI_pop_answers();
	return;
}


