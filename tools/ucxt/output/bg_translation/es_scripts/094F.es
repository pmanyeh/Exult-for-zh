#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func094F 0x94F (var var0000, var var0001)
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

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0x0000)) goto labelFunc094F_001D;
	goto labelFunc094F_0151;
labelFunc094F_001D:
	var0004 = 0x0003;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc094F_0046;
	message("After a very quick run, he turns and says, \"Thou dost not yet have the stamina. If thou so wishest, I could train thee at a later date.\"");
	say();
	goto labelFunc094F_0151;
labelFunc094F_0046:
	if (!(var0005 == 0x0001)) goto labelFunc094F_007E;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0006);
	message(" gold altogether.");
	say();
	if (!(var0006 < var0001)) goto labelFunc094F_007E;
	message("\"It seems thou dost not have enough gold to train at this time.\"");
	say();
	goto labelFunc094F_0151;
labelFunc094F_007E:
	if (!(var0005 == 0x0002)) goto labelFunc094F_008F;
	message("After a short run, he turns and says, \"Thou art already as strong as I! I am afraid that there is nothing further I can show thee.\"");
	say();
	goto labelFunc094F_0151;
labelFunc094F_008F:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc094F_00C0;
	var0008 = "you feel ";
	goto labelFunc094F_00CA;
labelFunc094F_00C0:
	var0008 = (var0003 + " feels ");
labelFunc094F_00CA:
	if (!(var0002 == 0xFE9C)) goto labelFunc094F_00DD;
	var0009 = "you have ";
	goto labelFunc094F_0103;
labelFunc094F_00DD:
	var000A = UI_is_pc_female();
	if (!var000A) goto labelFunc094F_00F3;
	var000B = "she ";
	goto labelFunc094F_00F9;
labelFunc094F_00F3:
	var000B = "he ";
labelFunc094F_00F9:
	var0009 = (var000B + "has ");
labelFunc094F_0103:
	message("After sparring for half an hour, ");
	message(var0008);
	message(" as though ");
	message(var0009);
	message(" learned how to better apply force when fighting.");
	say();
	var000C = Func0910(var0002, 0x0000);
	if (!(var000C < 0x001E)) goto labelFunc094F_0132;
	Func0914(var0002, 0x0001);
labelFunc094F_0132:
	var000D = Func0910(var0002, 0x0004);
	if (!(var000D < 0x001E)) goto labelFunc094F_0151;
	Func0917(var0002, 0x0002);
labelFunc094F_0151:
	return;
}


