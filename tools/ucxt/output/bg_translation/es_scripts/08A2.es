#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);

void Func08A2 0x8A2 (var var0000, var var0001)
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
	if (!(var0002 == 0x0000)) goto labelFunc08A2_001D;
	goto labelFunc08A2_012F;
labelFunc08A2_001D:
	var0004 = 0x0002;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc08A2_0046;
	message("\"I am sorry, but it appears thou dost not have enough knowledge of elementary studies to train at this time. If thou couldst return at a future date, I could instruct thee then.\"");
	say();
	goto labelFunc08A2_012F;
labelFunc08A2_0046:
	if (!(var0005 == 0x0001)) goto labelFunc08A2_007E;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0006);
	message(" gold altogether.");
	say();
	if (!(var0006 < var0001)) goto labelFunc08A2_007E;
	message("\"I am sorry, but thou dost not seem to have enough gold to train now.\"");
	say();
	goto labelFunc08A2_012F;
labelFunc08A2_007E:
	if (!(var0005 == 0x0002)) goto labelFunc08A2_008F;
	message("After giving a few test questions, she exclaims, \"Thou art easily as well educated as I! There is nothing I have that could help thee.\"");
	say();
	goto labelFunc08A2_012F;
labelFunc08A2_008F:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc08A2_00CC;
	var0008 = "You";
	var0009 = "you";
	var000A = "";
	goto labelFunc08A2_00DE;
labelFunc08A2_00CC:
	var0008 = var0003;
	var0009 = var0003;
	var000A = "s";
labelFunc08A2_00DE:
	message(var0008);
	message(" and Jillian study for some time. In addition, she teaches a little on the theory of magic. Afterwards, ");
	message(var0009);
	message(" notice");
	message(var000A);
	message(" an increase in knowledge and magical understanding.");
	say();
	var000B = Func0910(var0002, 0x0006);
	if (!(var000B < 0x001E)) goto labelFunc08A2_0110;
	Func0918(var0002, 0x0001);
labelFunc08A2_0110:
	var000C = Func0910(var0002, 0x0002);
	if (!(var000C < 0x001E)) goto labelFunc08A2_012F;
	Func0916(var0002, 0x0001);
labelFunc08A2_012F:
	return;
}


