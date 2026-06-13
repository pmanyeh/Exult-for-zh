#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0956 0x956 (var var0000);
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func0963 0x963 (var var0000, var var0001);
extern void Func0960 0x960 (var var0000, var var0001);

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
	var var000D;
	var var000E;

	var0000 = Func0953();
	var0001 = 0x0284;
	var0002 = [0x0000, 0x0004];
	var0003 = 0x00C8;
	message("\"I charge 200 gold coins to instruct students in the ways of war. Dost thou agree?\"");
	say();
	var0004 = Func0956(["Yes", "No"]);
	if (!(var0004 == "No")) goto labelFunc0873_0040;
	message("\"I knew thou didst lack Discipline!\"");
	say();
	abort;
labelFunc0873_0040:
	if (!(var0004 == "Yes")) goto labelFunc0873_01DE;
	message("\"Whom dost thou wish to train?\"");
	say();
	var0005 = Func098E();
	var0005 = (0x0000 & var0005);
	var0006 = ["Nobody"];
	enum();
labelFunc0873_0068:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc0873_008F;
	if (!(!(var0009 == 0x0000))) goto labelFunc0873_008C;
	var0006 = (var0006 & UI_get_npc_name(var0009));
labelFunc0873_008C:
	goto labelFunc0873_0068;
labelFunc0873_008F:
	var000A = Func0957(var0006);
	var000A = var0005[var000A];
	var000B = UI_get_npc_number(var000A);
	var000C = UI_get_npc_name(var000A);
	if (!(var000A == 0x0000)) goto labelFunc0873_00C6;
	message("\"Thou wilt never be warrior with such weak resolve!\"");
	say();
	goto labelFunc0873_01DE;
labelFunc0873_00C6:
	var000D = Func096E(var0002, var0001, var0003, var000B, 0x0002);
	if (!(Func095C(var000A, 0x0007) < 0x0002)) goto labelFunc0873_00F1;
	var000D = 0x0000;
labelFunc0873_00F1:
	if (!(var000D == 0x0000)) goto labelFunc0873_0116;
	if (!(var000B == 0xFE9C)) goto labelFunc0873_010C;
	message("\"Thou art not ready to learn yet!\"");
	say();
	goto labelFunc0873_0116;
labelFunc0873_010C:
	message("\"");
	message(var000C);
	message(" is not ready to learn yet!\"");
	say();
labelFunc0873_0116:
	if (!(var000D == 0x0001)) goto labelFunc0873_0129;
	message("\"Thou dost not have 200 gold coins! I am not so easily cheated!");
	say();
	message("\"Speak with me again when thou art serious about learning the secrets of combat.\"");
	say();
	abort;
labelFunc0873_0129:
	if (!(var000D == 0x0002)) goto labelFunc0873_0174;
	if (!(Func095C(var000A, 0x0004) < 0x001E)) goto labelFunc0873_0146;
	goto labelFunc0873_017E;
labelFunc0873_0146:
	if (!(Func095C(var000A, 0x0000) < 0x001E)) goto labelFunc0873_0159;
	goto labelFunc0873_017E;
labelFunc0873_0159:
	if (!(var000B == 0xFE9C)) goto labelFunc0873_016A;
	message("\"Thou dost already possess more skill than I could teach thee!\"");
	say();
	goto labelFunc0873_0174;
labelFunc0873_016A:
	message("\"");
	message(var000C);
	message(" doth already possess more skill than I could ever teach!\"");
	say();
labelFunc0873_0174:
	if (!(var000D == 0x0003)) goto labelFunc0873_01DE;
labelFunc0873_017E:
	message("\"Hold thy weapon at ready... Now swing... Again.");
	say();
	message("\"I think I can see thy problem, ");
	message(var000C);
	message(". Thou dost hold thy weapon too tightly.");
	say();
	message("\"If thou dost clutch it so thou shalt never have the proper fluidness to meet a foe's attack.");
	say();
	message("\"Here, hold it like so. Seest thou? Thou hast sacrificed nothing of control, and have gained much in speed.");
	say();
	message("\"I know this feels awkward. Practice with this and thou wilt see no loss of accuracy.\"");
	say();
	var000E = UI_remove_party_items(var0003, var0001, 0xFE99, 0xFE99, true);
	if (!(Func095C(var000A, 0x0004) < 0x001E)) goto labelFunc0873_01C5;
	Func0963(var000A, 0x0001);
labelFunc0873_01C5:
	if (!(Func095C(var000A, 0x0000) < 0x001E)) goto labelFunc0873_01DE;
	Func0960(var000A, 0x0001);
labelFunc0873_01DE:
	return;
}


