#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08BE 0x8BE (var var0000, var var0001)
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

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc08BE_0013;
	goto labelFunc08BE_0132;
labelFunc08BE_0013:
	var0003 = 0x0003;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc08BE_003C;
	message("\"I am sorry, but thou dost not have enough practical experience with weights to train at this time. Perhaps in the future, when thou art ready, I could train thee.\"");
	say();
	goto labelFunc08BE_0132;
labelFunc08BE_003C:
	if (!(var0004 == 0x0001)) goto labelFunc08BE_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0005);
	message(" gold altogether.");
	say();
	if (!(var0005 < var0001)) goto labelFunc08BE_0074;
	message("\"Thou dost not have enough gold to train here.\"");
	say();
	goto labelFunc08BE_0132;
labelFunc08BE_0074:
	var0006 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc08BE_0097;
	var0007 = "you begin";
	var0008 = "your";
	goto labelFunc08BE_00AB;
labelFunc08BE_0097:
	var0007 = (var0006 + " begins");
	var0008 = (var0006 + "'s");
labelFunc08BE_00AB:
	if (!(var0004 == 0x0002)) goto labelFunc08BE_00C2;
	message("\"Thou art already as strong as I!\" he exclaims, noticing ");
	message(var0008);
	message(" muscles and build. \"Thou dost certainly know as much as I about building strong muscles.\"");
	say();
	goto labelFunc08BE_0132;
labelFunc08BE_00C2:
	var0009 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	var0006 = UI_get_npc_name(var0002);
	message("He begins with a short, but extensive, weight training program, followed by a sparring match with heavy weaponry. Shortly, ");
	message(var0007);
	message(" to feel stronger, and better able to utilize that strength in battle.");
	say();
	var000A = Func0910(var0002, 0x0000);
	if (!(var000A < 0x001E)) goto labelFunc08BE_0113;
	Func0914(var0002, 0x0002);
labelFunc08BE_0113:
	var000B = Func0910(var0002, 0x0004);
	if (!(var000B < 0x001E)) goto labelFunc08BE_0132;
	Func0917(var0002, 0x0001);
labelFunc08BE_0132:
	return;
}


