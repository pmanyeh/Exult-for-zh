#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func0950 0x950 (var var0000, var var0001)
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
	var var0010;
	var var0011;
	var var0012;

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	var0004 = UI_is_pc_female();
	if (!(var0002 == 0xFE9C)) goto labelFunc0950_005A;
	var0003 = "you";
	var0005 = "You";
	var0006 = "mimic";
	var0007 = "develop";
	var0008 = "you";
	var0009 = "you";
	var000A = "feel";
	var000B = "have";
	var000C = "learn";
	goto labelFunc0950_009F;
labelFunc0950_005A:
	if (!var0004) goto labelFunc0950_006F;
	var0005 = "She";
	var0009 = "she";
	goto labelFunc0950_007B;
labelFunc0950_006F:
	var0005 = "He";
	var0009 = "he";
labelFunc0950_007B:
	var0006 = "mimics";
	var0007 = "develops";
	var0008 = "them";
	var000A = "feels";
	var000B = "has";
	var000C = "learns";
labelFunc0950_009F:
	if (!(var0002 == 0x0000)) goto labelFunc0950_00AC;
	goto labelFunc0950_01C6;
labelFunc0950_00AC:
	var000D = 0x0002;
	var000E = Func0922(var0000, var0001, var0002, var000D);
	if (!(var000E == 0x0000)) goto labelFunc0950_00D5;
	message("\"It appears that thou dost not have enough practical experience to train at this time. If thou couldst return later after thou hast gained more experience, I can help thee.\"");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_00D5:
	if (!(var000E == 0x0001)) goto labelFunc0950_010D;
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var000F);
	message(" gold altogether.");
	say();
	if (!(var000F < var0001)) goto labelFunc0950_010D;
	message("\"It appears that thou dost not seem to have enough gold to train here. If thou couldst return later after thy pockets are filled...\"");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_010D:
	if (!(var000E == 0x0002)) goto labelFunc0950_011E;
	message("\"It appears that thou art already as proficient as I! I am afraid that thou cannot be trained further here.\"");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_011E:
	message("You pay ");
	message(var0001);
	message(" gold.");
	say();
	var0010 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("Zella begins the session by showing ");
	message(var0003);
	message(" the proper stance when 'boxing'.~~\"'Tis all contingent on balance. Use thy weight to control thy movement. Step lightly. 'Tis almost like a dance.\" Zella shows ");
	message(var0003);
	message(" some steps, sparring into the air. ");
	message(var0005);
	message(" ");
	message(var0006);
	message(" him and slowly ");
	message(var0007);
	message(" a feel for the technique. After a while it becomes second nature. The two of ");
	message(var0008);
	message(" take jabs at each other, and ");
	message(var0003);
	message(" ");
	message(var000C);
	message(" proper defensive maneuvers. When the session is over, ");
	message(var0009);
	message(" ");
	message(var000A);
	message(" ");
	message(var0009);
	message(" ");
	message(var000B);
	message(" a better grip on the concept of 'boxing'.");
	say();
	var0011 = Func0910(var0002, 0x0001);
	var0012 = Func0910(var0002, 0x0004);
	if (!(var0011 < 0x001E)) goto labelFunc0950_01B3;
	Func0915(var0002, 0x0001);
labelFunc0950_01B3:
	if (!(var0012 < 0x001E)) goto labelFunc0950_01C6;
	Func0917(var0002, 0x0001);
labelFunc0950_01C6:
	return;
}


