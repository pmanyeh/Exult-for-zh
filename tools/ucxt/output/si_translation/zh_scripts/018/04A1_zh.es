#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern void Func080F 0x80F ();
extern void Func0810 0x810 ();

void Func04A1 object#(0x4A1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04A1_000F;
	Func0809();
	abort;
labelFunc04A1_000F:
	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0000)) goto labelFunc04A1_0073;
	var0003 = UI_die_roll(0x0001, 0x0003);
	if (!(var0003 == 0x0001)) goto labelFunc04A1_004B;
	UI_item_say(0xFF5F, "@Healing potions!@");
labelFunc04A1_004B:
	if (!(var0003 == 0x0002)) goto labelFunc04A1_005F;
	UI_item_say(0xFF5F, "@Food!@");
labelFunc04A1_005F:
	if (!(var0003 == 0x0003)) goto labelFunc04A1_0073;
	UI_item_say(0xFF5F, "@Bandages!@");
labelFunc04A1_0073:
	if (!(event == 0x0001)) goto labelFunc04A1_00DF;
	0xFF5F->Func07D1();
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Greetings, felon!\"");
	say();
	message("\"Art thou in need of food or healing?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04A1_00D8;
	message("\"Such items are very valuable here, felon. Thou mayest find the prices steep...\"");
	say();
	message("\"What dost thou wish, food or healing?\"");
	say();
	var0004 = Func0956(["food", "healing"]);
	if (!(var0004 == "food")) goto labelFunc04A1_00C2;
	Func080F();
	goto labelFunc04A1_00C5;
labelFunc04A1_00C2:
	Func0810();
labelFunc04A1_00C5:
	message("\"Thou art always welcome here, felon... As long as thou dost have money, that is.\"");
	say();
	UI_remove_npc_face0();
	UI_item_say(item, "@Goodbye, felon!@");
	goto labelFunc04A1_00DF;
labelFunc04A1_00D8:
	message("\"Then thou wilt have to move on...\"");
	say();
	goto labelFunc04A1_0162;
labelFunc04A1_00DF:
	if (!(event == 0x0007)) goto labelFunc04A1_0162;
	var0005 = UI_get_object_position(item);
labelFunc04A1_00EF:
	if (!(var0005[0x0003] > 0x0000)) goto labelFunc04A1_012F;
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] - 0x0001);
	var0005[0x0003] = (var0005[0x0003] - 0x0002);
	goto labelFunc04A1_00EF;
labelFunc04A1_012F:
	UI_sprite_effect(0x001B, (var0005[0x0001] - 0x0001), (var0005[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_remove_item(item);
labelFunc04A1_0162:
	return;
}


