#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);

void Func085F 0x85F (var var0000, var var0001)
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
	var var000D;
	var var000E;
	var var000F;

	var0002 = Func0908();
	var0003 = Func0909();
	var0004 = "the Avatar";
	if (!gflags[0x01F1]) goto labelFunc085F_001E;
	var0005 = var0002;
labelFunc085F_001E:
	if (!gflags[0x01F3]) goto labelFunc085F_002A;
	var0005 = var0004;
labelFunc085F_002A:
	if (!gflags[0x01F2]) goto labelFunc085F_0036;
	var0005 = var0003;
labelFunc085F_0036:
	var0006 = Func0920();
	var0007 = UI_get_npc_name(var0006);
	if (!(var0006 == 0x0000)) goto labelFunc085F_0053;
	goto labelFunc085F_0166;
labelFunc085F_0053:
	var0008 = 0x0003;
	var0009 = Func0922(var0000, var0001, var0006, var0008);
	if (!(var0009 == 0x0000)) goto labelFunc085F_007C;
	message("\"It seems that thou dost need a little more time to hone thy reflexes. If thou dost wish to return later, when thou hast more experience, I would be most happy to train thee.\"");
	say();
	goto labelFunc085F_0166;
labelFunc085F_007C:
	if (!(var0009 == 0x0001)) goto labelFunc085F_00B4;
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var000A);
	message(" gold altogether.");
	say();
	if (!(var000A < var0001)) goto labelFunc085F_00B4;
	message("\"Thou hast not enough gold to pay me. I am sorry but I cannot train thee now.\"");
	say();
	goto labelFunc085F_0166;
labelFunc085F_00B4:
	if (!(var0009 == 0x0002)) goto labelFunc085F_00CB;
	message("\"Zounds! Thou art quick. Too quick, in fact, for me to be able to help thee become faster. I am sorry, ");
	message(var0005);
	message(".\"");
	say();
	goto labelFunc085F_0166;
labelFunc085F_00CB:
	var000B = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	if (!(var0006 == 0xFE9C)) goto labelFunc085F_00FC;
	var000C = "You";
	goto labelFunc085F_0102;
labelFunc085F_00FC:
	var000C = var0007;
labelFunc085F_0102:
	if (!(var0006 == 0xFE9C)) goto labelFunc085F_0115;
	var000D = "you";
	goto labelFunc085F_011B;
labelFunc085F_0115:
	var000D = var0007;
labelFunc085F_011B:
	message(var000C);
	message(" and Chad spar for a few minutes. He teaches ");
	message(var000D);
	message(" several expert maneuvers that better utilize speed and agility in combat.");
	say();
	var000E = Func0910(var0006, 0x0001);
	if (!(var000E < 0x001E)) goto labelFunc085F_0147;
	Func0917(var0006, 0x0001);
labelFunc085F_0147:
	var000F = Func0910(var0006, 0x0004);
	if (!(var000F < 0x001E)) goto labelFunc085F_0166;
	Func0915(var0006, 0x0002);
labelFunc085F_0166:
	return;
}


