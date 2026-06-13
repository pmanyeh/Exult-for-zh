#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func0963 0x963 (var var0000, var var0001);
extern void Func0960 0x960 (var var0000, var var0001);

void Func0875 0x875 ()
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

	var0000 = 0x03B7;
	var0001 = [0x0000, 0x0004];
	var0002 = 0x001E;
	if (!((gflags[0x01E1] == false) || ((gflags[0x01E3] == true) || (gflags[0x01E2] == true)))) goto labelFunc0875_0042;
	message("\"I charge 30 monetari to instruct students in my knowledge of combat. Dost thou agree?\"");
	say();
	var0003 = Func0956(["Yes", "No"]);
	goto labelFunc0875_004F;
labelFunc0875_0042:
	message("\"Since I have joined thee, I will not ask for mine usual fee!\"");
	say();
	var0002 = 0x0000;
	goto labelFunc0875_0068;
labelFunc0875_004F:
	if (!(var0003 == "No")) goto labelFunc0875_005E;
	message("\"Thou art a lout not to pay me!\"");
	say();
	abort;
labelFunc0875_005E:
	if (!(var0003 == "Yes")) goto labelFunc0875_0216;
labelFunc0875_0068:
	message("\"Whom dost thou wish to train?\"");
	say();
	var0004 = Func098E();
	var0004 = (0x0000 & var0004);
	var0005 = ["Nobody"];
	enum();
labelFunc0875_0086:
	for (var0008 in var0004 with var0006 to var0007) attend labelFunc0875_00AD;
	if (!(!(var0008 == 0x0000))) goto labelFunc0875_00AA;
	var0005 = (var0005 & UI_get_npc_name(var0008));
labelFunc0875_00AA:
	goto labelFunc0875_0086;
labelFunc0875_00AD:
	var0009 = Func0957(var0005);
	var0009 = var0004[var0009];
	var000A = UI_get_npc_number(var0009);
	var000B = UI_get_npc_name(var0009);
	if (!(var0009 == 0x0000)) goto labelFunc0875_00E4;
	message("\"Very well, but thou shouldst make up thy mind!\"");
	say();
	goto labelFunc0875_0216;
labelFunc0875_00E4:
	if (!(var000A == 0xFFD3)) goto labelFunc0875_00F5;
	message("\"I do not train myself!\"");
	say();
	goto labelFunc0875_0216;
labelFunc0875_00F5:
	var000C = Func096E(var0001, var0000, var0002, var000A, 0x0002);
	if (!(Func095C(var0009, 0x0007) < 0x0002)) goto labelFunc0875_0120;
	var000C = 0x0000;
labelFunc0875_0120:
	if (!(var000C == 0x0000)) goto labelFunc0875_0145;
	if (!(var000A == 0xFE9C)) goto labelFunc0875_013B;
	message("\"Thou art not ready to learn yet!\"");
	say();
	goto labelFunc0875_0145;
labelFunc0875_013B:
	message("\"");
	message(var000B);
	message(" is not ready to learn yet!\"");
	say();
labelFunc0875_0145:
	if (!(var000C == 0x0001)) goto labelFunc0875_016B;
	if (!((gflags[0x01E1] == false) || ((gflags[0x01E3] == true) || (gflags[0x01E2] == true)))) goto labelFunc0875_0168;
	message("\"Thou dost not have 30 monetari! Talk to me again when thou canst pay me!\"");
	say();
	abort;
labelFunc0875_0168:
	goto labelFunc0875_01C0;
labelFunc0875_016B:
	if (!(var000C == 0x0002)) goto labelFunc0875_01B6;
	if (!(Func095C(var0009, 0x0004) < 0x001E)) goto labelFunc0875_0188;
	goto labelFunc0875_01C0;
labelFunc0875_0188:
	if (!(Func095C(var0009, 0x0000) < 0x001E)) goto labelFunc0875_019B;
	goto labelFunc0875_01C0;
labelFunc0875_019B:
	if (!(var000A == 0xFE9C)) goto labelFunc0875_01AC;
	message("\"Thou dost already possess more skill than I could teach thee!\"");
	say();
	goto labelFunc0875_01B6;
labelFunc0875_01AC:
	message("\"");
	message(var000B);
	message(" doth already possess more skill than I could ever teach!\"");
	say();
labelFunc0875_01B6:
	if (!(var000C == 0x0003)) goto labelFunc0875_0216;
labelFunc0875_01C0:
	message("\"First, let me see thy stance.\"");
	say();
	message("\"Hmmm... If thou dost hold thy weapon higher, thou wilt have better leverage with which to smash thy foes.\"");
	say();
	message("\"Secondly, thou shouldst always carry through with thy swing, as it will improve thy chances of recovering to land succeeding blows.\"");
	say();
	message("\"I do see some improvement in thee!\"");
	say();
	var000D = UI_remove_party_items(var0002, var0000, 0xFE99, 0xFE99, true);
	if (!(Func095C(var0009, 0x0004) < 0x001E)) goto labelFunc0875_01FD;
	Func0963(var0009, 0x0001);
labelFunc0875_01FD:
	if (!(Func095C(var0009, 0x0000) < 0x001E)) goto labelFunc0875_0216;
	Func0960(var0009, 0x0001);
labelFunc0875_0216:
	return;
}


