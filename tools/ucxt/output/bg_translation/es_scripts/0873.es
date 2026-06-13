#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0873 0x873 ()
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
	var0001 = ["nothing", "leather helm", "wooden shield", "leather leggings", "chain leggings", "leather armour"];
	var0002 = [0x0000, 0x03EC, 0x023C, 0x023E, 0x023F, 0x0239];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0019, 0x000F, 0x0019, 0x0046, 0x0028];
	var0005 = ["", "a ", "a ", "", "", ""];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0001, 0x0000];
	var0007 = ["", "", "", " for a pair", " for a pair", ""];
	var0008 = 0x0001;
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0873_00A8:
	if (!var0000) goto labelFunc0873_016B;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0873_00CC;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc0873_0168;
labelFunc0873_00CC:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Is that acceptable?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0873_012B;
	var000B = Func08F8(var0002[var0009], var0003, var0008, var0004[var0009], 0x0000, 0x0001, false);
labelFunc0873_012B:
	if (!(var000B == 0x0001)) goto labelFunc0873_013C;
	message("\"Very good. At last we are getting somewhere!\"");
	say();
	goto labelFunc0873_015E;
labelFunc0873_013C:
	if (!(var000B == 0x0002)) goto labelFunc0873_014D;
	message("\"Thou hast thine hands full, idiot!\"");
	say();
	goto labelFunc0873_015E;
labelFunc0873_014D:
	if (!(var000B == 0x0003)) goto labelFunc0873_015E;
	message("\"Thou hast a lot of gall attempting to buy something from my shop without enough gold in thy possession!\"");
	say();
	goto labelFunc0873_015E;
labelFunc0873_015E:
	message("\"Anything else for thee today?\"");
	say();
	var0000 = Func090A();
labelFunc0873_0168:
	goto labelFunc0873_00A8;
labelFunc0873_016B:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


