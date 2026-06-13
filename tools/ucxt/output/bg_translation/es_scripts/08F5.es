#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func093C 0x93C (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090F 0x90F (var var0000);

var Func08F5 0x8F5 (var var0000, var var0001)
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

	UI_push_answers();
	var0002 = "nobody";
	var0003 = [];
	enum();
labelFunc08F5_0011:
	for (var0006 in var0001 with var0004 to var0005) attend labelFunc08F5_002D;
	var0003 = (var0003 & UI_get_npc_name(var0006));
	goto labelFunc08F5_0011;
labelFunc08F5_002D:
	var0003 = (var0003 & var0002);
	var0007 = false;
	var0008 = UI_get_array_size(var0003);
labelFunc08F5_0045:
	if (!(var0008 > 0x0001)) goto labelFunc08F5_0234;
	var0009 = Func090C(var0003);
	if (!(var0009 == var0008)) goto labelFunc08F5_0065;
	goto labelFunc08F5_0234;
labelFunc08F5_0065:
	var000A = var0001[var0009];
	var000B = UI_get_npc_number(var000A);
	var0001 = Func093C(var000A, var0001);
	var0003 = Func093C(var0003[var0009], var0003);
	var000C = false;
	if (!(var000B == 0xFFFF)) goto labelFunc08F5_011E;
	message("\"Thy good health, sir. Many campaigns sit upon thy brow. It is an honor.\"");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Avatar, this stranger grows upon me by the moment. Surely he would be a boon travelling companion.\"");
	say();
	var000D = 0x0000;
	if (!Func08F7(0xFFFD)) goto labelFunc08F5_00C8;
	var000D = 0xFFFD;
labelFunc08F5_00C8:
	if (!Func08F7(0xFFFC)) goto labelFunc08F5_00D7;
	var000D = 0xFFFC;
labelFunc08F5_00D7:
	if (!(var000D != 0x0000)) goto labelFunc08F5_010C;
	UI_show_npc_face(var000D, 0x0000);
	message("\"Oh, please.\"");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	var000E = Func090F(var000D);
	message("\"Hush, ");
	message(var000E);
	message(".\"");
	say();
labelFunc08F5_010C:
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
	var0007 = true;
labelFunc08F5_011E:
	if (!(var000B == 0xFFFD)) goto labelFunc08F5_014C;
	message("\"How art thou, Shamino? Thy woodcraft is renowned in Britannia.\"");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Renown follows those who travel with the Avatar. I thank thee.\"");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
	var0007 = true;
labelFunc08F5_014C:
	if (!(var000B == 0xFFFE)) goto labelFunc08F5_0192;
	message("\"Greetings young man. How comes one so young into such company?\"");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"I am an orphan! My father has been most cruelly murdered, mutilated in the stables of Trinsic.\"");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("\"That is a grievous tale! But surely the time for grief is past. Thou art in the company of great companions.\"");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Thou speakest rightly. I shall bring my father's murderer to justice or die in the attempt.\"");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
labelFunc08F5_0192:
	if (!(!var000C)) goto labelFunc08F5_01F1;
	var000E = Func090F(var000A);
	message("\"Greetings ");
	message(var000E);
	message(".\"");
	say();
	var000F = ["Thou art looking quite well today.", "Good health to thee.", "May good fortune be thine."];
	var0010 = var000F[UI_die_roll(0x0001, 0x0003)];
	message("\"");
	message(var0010);
	message("\"");
	say();
	UI_show_npc_face(var000B, 0x0000);
	message("\"Glad to make thine aquaintance.\"");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
labelFunc08F5_01F1:
	if (!(var0007 && (!gflags[0x0161]))) goto labelFunc08F5_0220;
	message("\"But did I hear thee say 'Avatar?' Say not that thy leader is the one -true- Avatar!\"");
	say();
	UI_show_npc_face(var000B, 0x0000);
	message("\"It is indeed true.\"");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("\"'Tis an honor to meet thee, Avatar.\"");
	say();
	gflags[0x0161] = true;
labelFunc08F5_0220:
	UI_remove_npc_face(var000B);
	var0008 = UI_get_array_size(var0003);
	goto labelFunc08F5_0045;
labelFunc08F5_0234:
	UI_pop_answers();
	if (!(var0008 == 0x0001)) goto labelFunc08F5_0246;
	gflags[0x015F] = true;
labelFunc08F5_0246:
	return var0001;
	return 0;
}


