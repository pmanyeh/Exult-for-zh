#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08C8 0x8C8 (var var0000, var var0001)
{
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

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0x0000)) goto labelFunc08C8_001D;
	goto labelFunc08C8_0149;
labelFunc08C8_001D:
	var0004 = 0x0002;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc08C8_0046;
	message("\"I am sorry, but thou hast overextended thy muscles. If thou couldst return at a later date, I would be quite willing to train thee.\"");
	say();
	goto labelFunc08C8_0149;
labelFunc08C8_0046:
	if (!(var0005 == 0x0001)) goto labelFunc08C8_007E;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0006);
	message(" gold altogether.");
	say();
	if (!(var0006 < var0001)) goto labelFunc08C8_007E;
	message("\"I regret that thou dost not seem to have the right amount of gold to train here. Mayhaps, at another time, when thy purses are more full...\"");
	say();
	goto labelFunc08C8_0149;
labelFunc08C8_007E:
	if (!(var0005 == 0x0002)) goto labelFunc08C8_008F;
	message("She seems amazed.~~\"Thou art already stronger than I! I am sorry, but I cannot help thee grow any further.\"");
	say();
	goto labelFunc08C8_0149;
labelFunc08C8_008F:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc08C8_00C0;
	var0008 = "You";
	goto labelFunc08C8_00C6;
labelFunc08C8_00C0:
	var0008 = var0003;
labelFunc08C8_00C6:
	if (!(var0002 == 0xFE9C)) goto labelFunc08C8_00D9;
	var0009 = "you";
	goto labelFunc08C8_00DF;
labelFunc08C8_00D9:
	var0009 = var0003;
labelFunc08C8_00DF:
	if (!(var0002 == 0xFE9C)) goto labelFunc08C8_00F2;
	var000A = "";
	goto labelFunc08C8_00F8;
labelFunc08C8_00F2:
	var000A = "s";
labelFunc08C8_00F8:
	message(var0008);
	message(" and Penni work out and spar for some time. After stretching, ");
	message(var0009);
	message(" feel");
	message(var000A);
	message(" a little stronger and a bit more skilled in combat.");
	say();
	var000B = Func0910(var0002, 0x0000);
	if (!(var000B < 0x001E)) goto labelFunc08C8_012A;
	Func0914(var0002, 0x0001);
labelFunc08C8_012A:
	var000C = Func0910(var0002, 0x0004);
	if (!(var000C < 0x001E)) goto labelFunc08C8_0149;
	Func0917(var0002, 0x0001);
labelFunc08C8_0149:
	return;
}


