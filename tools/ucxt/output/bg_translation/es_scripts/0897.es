#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0897 0x897 ()
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
	var0001 = ["nothing", "crested helm", "spiked shield", "leather armour", "chain armour", "plate armour", "leather gloves"];
	var0002 = [0x0000, 0x021E, 0x0242, 0x0239, 0x023B, 0x023D, 0x0243];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x004B, 0x003C, 0x0032, 0x0096, 0x012C, 0x0014];
	var0005 = ["", "a ", "a ", "", "", "", ""];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001];
	var0007 = ["", "", "", "", "", "", " for a pair"];
	var0008 = 0x0001;
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0897_00BA:
	if (!var0000) goto labelFunc0897_017D;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0897_00DE;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc0897_017A;
labelFunc0897_00DE:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" A fair price, yes?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0897_013D;
	var000B = Func08F8(var0002[var0009], var0003, var0008, var0004[var0009], 0x0000, 0x0001, false);
labelFunc0897_013D:
	if (!(var000B == 0x0001)) goto labelFunc0897_014E;
	message("\"Done!\"");
	say();
	goto labelFunc0897_0170;
labelFunc0897_014E:
	if (!(var000B == 0x0002)) goto labelFunc0897_015F;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0897_0170;
labelFunc0897_015F:
	if (!(var000B == 0x0003)) goto labelFunc0897_0170;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0897_0170;
labelFunc0897_0170:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc0897_017A:
	goto labelFunc0897_00BA;
labelFunc0897_017D:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


