#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A3 0x8A3 ()
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
	var0002 = ["nothing", "arrows", "bolts"];
	var0003 = [0x0000, 0x02D2, 0x02D3];
	var0004 = 0xFE99;
	var0005 = 0x0014;
	var0006 = "";
	var0007 = 0x0001;
	var0008 = " for a dozen";
	var0009 = 0x000C;
	message("\"What dost thou wish to buy?\"");
	say();
labelFunc08A3_0054:
	if (!var0001) goto labelFunc08A3_0112;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08A3_0078;
	message("\"All right.\"");
	say();
	var0001 = false;
	goto labelFunc08A3_010F;
labelFunc08A3_0078:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005, var0008);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" Is that agreeable?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08A3_00CC;
	message("\"How many dozen wouldst thou like?\"");
	say();
	var000C = Func08F8(var0003[var000A], var0004, var0009, var0005, 0x0014, 0x0001, true);
labelFunc08A3_00CC:
	if (!(var000C == 0x0001)) goto labelFunc08A3_00E3;
	message("\"Very good, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc08A3_0105;
labelFunc08A3_00E3:
	if (!(var000C == 0x0002)) goto labelFunc08A3_00F4;
	message("\"Thou cannot travel with that much!\"");
	say();
	goto labelFunc08A3_0105;
labelFunc08A3_00F4:
	if (!(var000C == 0x0003)) goto labelFunc08A3_0105;
	message("\"Thou dost not have the gold for that!\"");
	say();
	goto labelFunc08A3_0105;
labelFunc08A3_0105:
	message("\"Wouldst thou like to buy something else?\"");
	say();
	var0001 = Func090A();
labelFunc08A3_010F:
	goto labelFunc08A3_0054;
labelFunc08A3_0112:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


