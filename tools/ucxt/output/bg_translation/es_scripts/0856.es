#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);

void Func0856 0x856 (var var0000, var var0001)
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
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc0856_0020;
	var0003 = "you";
labelFunc0856_0020:
	if (!(var0002 == 0x0000)) goto labelFunc0856_002D;
	goto labelFunc0856_015A;
labelFunc0856_002D:
	if (!((var0002 == 0xFFFF) || (var0002 == 0xFFF6))) goto labelFunc0856_004D;
	var0001 = (var0001 / 0x0002);
	message("\"I cannot charge a master such as thyself full price.\"");
	say();
labelFunc0856_004D:
	var0004 = 0x0002;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc0856_0076;
	message("After a bit of target practice, he says, \"I am sorry to say this, but thou dost need more practice before I will be able to train thee. Perhaps at a later time thou wilt be in a better position to receive mine instruction.\"");
	say();
	goto labelFunc0856_015A;
labelFunc0856_0076:
	if (!(var0005 == 0x0001)) goto labelFunc0856_00AE;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0006);
	message(" gold altogether.");
	say();
	if (!(var0006 < var0001)) goto labelFunc0856_00AE;
	message("\"Thou hast not the gold to train.\"");
	say();
	goto labelFunc0856_015A;
labelFunc0856_00AE:
	if (!(var0005 == 0x0002)) goto labelFunc0856_00BF;
	message("After a few target shots, he exclaims, \"Thou art already as proficient as I! I can do nothing to improve thy coordination of hand and eye!\"");
	say();
	goto labelFunc0856_015A;
labelFunc0856_00BF:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc0856_00F0;
	var0008 = "You";
	goto labelFunc0856_00F6;
labelFunc0856_00F0:
	var0008 = var0003;
labelFunc0856_00F6:
	if (!(var0002 == 0xFE9C)) goto labelFunc0856_0109;
	var0009 = "you";
	goto labelFunc0856_010F;
labelFunc0856_0109:
	var0009 = var0003;
labelFunc0856_010F:
	if (!(var0002 == 0xFE9C)) goto labelFunc0856_0122;
	var000A = "";
	goto labelFunc0856_0128;
labelFunc0856_0122:
	var000A = "s";
labelFunc0856_0128:
	message(var0008);
	message(" and Bradman spend some time taking target practice with the bow. Shortly, ");
	message(var0009);
	message(" notice");
	message(var000A);
	message(" a significant increase in hand-eye coordination.");
	say();
	var000B = Func0910(var0002, 0x0001);
	if (!(var000B < 0x001E)) goto labelFunc0856_015A;
	Func0915(var0002, 0x0002);
labelFunc0856_015A:
	return;
}


