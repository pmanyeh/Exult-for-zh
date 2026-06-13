#game "serpentisle"
// externs
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func092E 0x92E (var var0000);
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0988 0x988 (var var0000, var var0001);

void Func0936 0x936 (var var0000, var var0001)
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

	var0002 = Func098D();
	var0002 = (var0002 & 0xFE9C);
	var0003 = [];
	enum();
labelFunc0936_0017:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0936_0033;
	var0003 = (var0003 & UI_get_npc_object(var0006));
	goto labelFunc0936_0017;
labelFunc0936_0033:
	if (!(!((var0000 in var0003) || (var0001 in var0003)))) goto labelFunc0936_0047;
	return;
labelFunc0936_0047:
	UI_init_conversation();
	if (!(var0000 in var0003)) goto labelFunc0936_02F8;
	UI_set_attack_mode(var0001, 0x0007);
	if (!(!gflags[0x0084])) goto labelFunc0936_0198;
	if (!(gflags[0x0043] && ((var0001 == UI_get_npc_object(0xFFB9)) && ((!gflags[0x0041]) && (var0000 == UI_get_npc_object(0xFE9C)))))) goto labelFunc0936_008F;
	goto labelFunc0936_0461;
	goto labelFunc0936_00A0;
labelFunc0936_008F:
	UI_clear_item_say(var0001);
	UI_item_say(var0001, "@Thou hast beaten me!@");
labelFunc0936_00A0:
	if (!(((!Func0932(0xFF6A)) || (Func0932(0xFF6A) && (UI_get_attack_mode(0xFF6A) == 0x0007))) && (((!Func0932(0xFFB9)) || (Func0932(0xFFB9) && (UI_get_attack_mode(0xFFB9) == 0x0007))) && (((!Func0932(0xFFB6)) || (Func0932(0xFFB6) && (UI_get_attack_mode(0xFFB6) == 0x0007))) && (((!Func0932(0xFFC1)) || (Func0932(0xFFC1) && (UI_get_attack_mode(0xFFC1) == 0x0007))) && ((!Func0932(0xFFB1)) || (Func0932(0xFFB1) && (UI_get_attack_mode(0xFFB1) == 0x0007)))))))) goto labelFunc0936_0191;
	UI_show_npc_face0(0xFEED, 0x0000);
	var0002 = UI_get_npc_name(var0000);
	message("\"Nice show, ");
	message(var0002);
	message(", thou hast beaten us all! Where didst thou learn to fight like that?\"");
	say();
	var0002 = (("@Hail, " + var0002) + "!@");
	var0007 = UI_find_nearby(var0000, 0xFFFF, 0x001E, 0x0008);
	enum();
labelFunc0936_0169:
	for (var0001 in var0007 with var0008 to var0009) attend labelFunc0936_0188;
	UI_clear_item_say(var0001);
	UI_item_say(var0001, var0002);
	goto labelFunc0936_0169;
labelFunc0936_0188:
	Func092E(var0000);
	goto labelFunc0936_0195;
labelFunc0936_0191:
	gflags[0x0007] = false;
labelFunc0936_0195:
	goto labelFunc0936_02F5;
labelFunc0936_0198:
	if (!(var0001 == UI_get_npc_object(0xFFB9))) goto labelFunc0936_0200;
	if (!((gflags[0x0043] && (!gflags[0x0041])) && (var0000 == UI_get_npc_object(0xFE9C)))) goto labelFunc0936_01C0;
	goto labelFunc0936_0461;
labelFunc0936_01C0:
	if (!(UI_get_npc_id(0xFFB9) == 0x0009)) goto labelFunc0936_01EA;
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("\"Thou hast beaten me. I am impressed.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0000);
	return;
	goto labelFunc0936_01FF;
labelFunc0936_01EA:
	UI_clear_item_say(var0001);
	UI_item_say(var0001, "@Thou hast beaten me!@");
	gflags[0x0007] = false;
labelFunc0936_01FF:
	return;
labelFunc0936_0200:
	if (!(var0001 == UI_get_npc_object(0xFFB6))) goto labelFunc0936_0243;
	if (!(UI_get_npc_id(0xFFB6) == 0x0009)) goto labelFunc0936_0238;
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("\"Quite amazing. I have been beaten by thee! Perhaps it is time for the teacher to learn from the student.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0000);
	return;
	goto labelFunc0936_0242;
labelFunc0936_0238:
	UI_item_say(var0001, "@Thou hast bested me!@");
labelFunc0936_0242:
	return;
labelFunc0936_0243:
	if (!(var0001 == UI_get_npc_object(0xFF6A))) goto labelFunc0936_0291;
	if (!(UI_get_npc_id(0xFF6A) == 0x0009)) goto labelFunc0936_027B;
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("\"A good showing! Thou hast gotten lucky and bested me! Perhaps it is time for the master to learn from his student!!!\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0000);
	return;
	goto labelFunc0936_0290;
labelFunc0936_027B:
	UI_clear_item_say(0xFF6A);
	UI_item_say(var0001, "@Thou hast bested me again!@");
	gflags[0x0007] = false;
labelFunc0936_0290:
	return;
labelFunc0936_0291:
	if (!(var0001 == UI_get_npc_object(0xFFC1))) goto labelFunc0936_02DF;
	if (!(UI_get_npc_id(0xFFC1) == 0x0009)) goto labelFunc0936_02C9;
	UI_show_npc_face0(0xFFC1, 0x0000);
	message("\"Thou hast gotten lucky and bested me! Do not consider this the image of the wilds. The goblins are fierce.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0000);
	return;
	goto labelFunc0936_02DE;
labelFunc0936_02C9:
	UI_clear_item_say(var0001);
	UI_item_say(var0001, "@I surrender to thee!@");
	gflags[0x0007] = false;
labelFunc0936_02DE:
	return;
labelFunc0936_02DF:
	UI_clear_item_say(var0001);
	UI_item_say(var0001, "@I can take it no longer!@");
	gflags[0x0007] = false;
	return;
labelFunc0936_02F5:
	goto labelFunc0936_0460;
labelFunc0936_02F8:
	if (!gflags[0x0084]) goto labelFunc0936_039D;
	if (!(UI_get_npc_id(0xFFB6) == 0x0009)) goto labelFunc0936_0325;
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("\"Thou hast been beaten by my blade. Remember this day, and learn.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0325:
	if (!(UI_get_npc_id(0xFFB9) == 0x0009)) goto labelFunc0936_034C;
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("\"Thou hast been beaten, as was expected. Though thou art insignificant, try to remember the lessons I have taught thee this day.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_034C:
	if (!(UI_get_npc_id(0xFF6A) == 0x0009)) goto labelFunc0936_0373;
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("\"Thou made a good showing, but fell to my superior skill in the end. With more experience, thou wilt make a fine warrior.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0373:
	if (!(UI_get_npc_id(0xFFC1) == 0x0009)) goto labelFunc0936_039A;
	UI_show_npc_face0(0xFFC1, 0x0000);
	message("\"I have overwhelmed thee with sheer strength. Learn from this lesson, my friend.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_039A:
	goto labelFunc0936_0460;
labelFunc0936_039D:
	if (!(var0000 == UI_get_npc_object(0xFFB6))) goto labelFunc0936_03C4;
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("\"Thou hast lost this match.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_03C4:
	if (!(var0000 == UI_get_npc_object(0xFFB9))) goto labelFunc0936_03EB;
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("\"Hah, I have bested thee. Away with thee!\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_03EB:
	if (!(var0000 == UI_get_npc_object(0xFF6A))) goto labelFunc0936_0412;
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("\"Thou hast been beaten in a fair spar. Perhaps now thou wilt be more humble.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0412:
	if (!(var0000 == UI_get_npc_object(0xFFC1))) goto labelFunc0936_0439;
	UI_show_npc_face0(0xFFC1, 0x0000);
	message("\"Thou hast lost to my prowess.\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0439:
	if (!(var0000 == UI_get_npc_object(0xFFB1))) goto labelFunc0936_0460;
	UI_show_npc_face0(0xFFB1, 0x0000);
	message("\"I have beaten thee!\"");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0460:
	return;
labelFunc0936_0461:
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("\"I wouldn't have believed it... thou didst beat me... in a fair fight...\"");
	say();
	var0002 = Func0953();
	if (!UI_is_pc_female()) goto labelFunc0936_0489;
	message("\"Thou art one hell of a warrior, ");
	message(var0002);
	message("!\"");
	say();
	goto labelFunc0936_0493;
labelFunc0936_0489:
	message("\"Thou art a better man than I am, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0936_0493:
	UI_revert_schedule(0xFFB9);
	gflags[0x0041] = true;
	var0002 = UI_set_npc_prop(0xFFB9, 0x0000, 0x0012);
	var0002 = UI_set_npc_prop(0xFFB9, 0x0004, 0x0009);
	var0002 = UI_set_npc_prop(0xFFB9, 0x0001, 0x0008);
	UI_clear_item_say(0xFFB9);
	Func097F(0xFFB9, "@Hail the Avatar!@", 0x0000);
	var0001 = UI_find_nearby(0xFE9C, 0xFFFF, 0x0032, 0x0008);
	var0001 = Func0988(UI_get_npc_object(0xFFB9), var0001);
	enum();
labelFunc0936_0505:
	for (var0002 in var0001 with var000A to var000B) attend labelFunc0936_052D;
	UI_clear_item_say(var0002);
	Func097F(var0002, "@Hail the Avatar!@", UI_die_roll(0x0000, 0x0001));
	goto labelFunc0936_0505;
labelFunc0936_052D:
	Func092E(var0000);
	return;
}


