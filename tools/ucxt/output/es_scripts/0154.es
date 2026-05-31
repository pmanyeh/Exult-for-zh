#game "blackgate"
// externs
extern void Func08FA 0x8FA (var var0000);
extern void Func092A 0x92A (var var0000, var var0001);
extern void Func08FF 0x8FF (var var0000);
extern var Func0909 0x909 ();
extern void Func08FD 0x8FD (var var0000);
extern void Func0925 0x925 (var var0000);

void Func0154 shape#(0x154) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0154_0172;
	Func08FA(item);
	var0000 = UI_get_item_frame(item);
	var0001 = UI_click_on_item();
	var0002 = UI_is_npc(var0001);
	UI_play_sound_effect2(0x005A, item);
	if (!var0002) goto labelFunc0154_0137;
	UI_play_sound_effect(0x0044);
	if (!(var0000 == 0x0000)) goto labelFunc0154_004E;
	UI_set_item_flag(var0001, 0x0001);
labelFunc0154_004E:
	if (!(var0000 == 0x0001)) goto labelFunc0154_006E;
	var0003 = UI_die_roll(0x0003, 0x000C);
	Func092A(var0001, var0003);
labelFunc0154_006E:
	if (!(var0000 == 0x0002)) goto labelFunc0154_00AA;
	UI_clear_item_flag(var0001, 0x0008);
	UI_clear_item_flag(var0001, 0x0007);
	UI_clear_item_flag(var0001, 0x0001);
	UI_clear_item_flag(var0001, 0x0002);
	UI_clear_item_flag(var0001, 0x0003);
labelFunc0154_00AA:
	if (!(var0000 == 0x0003)) goto labelFunc0154_00BE;
	UI_set_item_flag(var0001, 0x0008);
labelFunc0154_00BE:
	if (!(var0000 == 0x0004)) goto labelFunc0154_00EA;
	UI_clear_item_flag(var0001, 0x0001);
	if (!(UI_get_npc_number(var0001) == 0xFF6A)) goto labelFunc0154_00EA;
	UI_set_schedule_type(var0001, 0x0007);
labelFunc0154_00EA:
	if (!(var0000 == 0x0005)) goto labelFunc0154_00FE;
	UI_set_item_flag(var0001, 0x0009);
labelFunc0154_00FE:
	if (!(var0000 == 0x0006)) goto labelFunc0154_010F;
	UI_cause_light(0x0064);
labelFunc0154_010F:
	if (!(var0000 == 0x0007)) goto labelFunc0154_0123;
	UI_set_item_flag(var0001, 0x0000);
labelFunc0154_0123:
	if (!(var0000 >= 0x0008)) goto labelFunc0154_0134;
	Func08FF("@What is this!@");
	abort;
labelFunc0154_0134:
	goto labelFunc0154_016E;
labelFunc0154_0137:
	var0003 = UI_die_roll(0x0001, 0x0003);
	if (!(var0003 == 0x0001)) goto labelFunc0154_0167;
	var0004 = Func0909();
	var0005 = ("@Those are expensive, <Gender>! " + "Plese waste them not!@");
	Func08FF(var0005);
	goto labelFunc0154_016E;
labelFunc0154_0167:
	Func08FD(0x003C);
	return;
labelFunc0154_016E:
	Func0925(item);
labelFunc0154_0172:
	return;
}


