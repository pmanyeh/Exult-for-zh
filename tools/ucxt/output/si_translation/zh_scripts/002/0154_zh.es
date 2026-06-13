#game "serpentisle"
// externs
extern void Func0945 0x945 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0954 0x954 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0154 shape#(0x154) ()
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

	var0000 = false;
	if (!(event == 0x0001)) goto labelFunc0154_0208;
	Func0945(item);
	var0001 = UI_get_item_frame(item);
	var0002 = UI_click_on_item();
	var0003 = UI_is_npc(var0002);
	UI_play_sound_effect2(0x0024, item);
	if (!var0003) goto labelFunc0154_019E;
	UI_play_sound_effect(0x0039);
	if (!(var0001 == 0x0000)) goto labelFunc0154_0052;
	UI_set_item_flag(var0002, 0x0001);
labelFunc0154_0052:
	if (!(var0001 == 0x0001)) goto labelFunc0154_0072;
	var0004 = UI_die_roll(0x0003, 0x000C);
	Func0976(var0002, var0004);
labelFunc0154_0072:
	if (!(var0001 == 0x0002)) goto labelFunc0154_00AE;
	UI_clear_item_flag(var0002, 0x0008);
	UI_clear_item_flag(var0002, 0x0007);
	UI_clear_item_flag(var0002, 0x0001);
	UI_clear_item_flag(var0002, 0x0002);
	UI_clear_item_flag(var0002, 0x0003);
labelFunc0154_00AE:
	if (!(var0001 == 0x0003)) goto labelFunc0154_00C2;
	UI_set_item_flag(var0002, 0x0008);
labelFunc0154_00C2:
	if (!(var0001 == 0x0004)) goto labelFunc0154_00D6;
	UI_clear_item_flag(var0002, 0x0001);
labelFunc0154_00D6:
	if (!(var0001 == 0x0005)) goto labelFunc0154_00EA;
	UI_set_item_flag(var0002, 0x0009);
labelFunc0154_00EA:
	if (!(var0001 == 0x0006)) goto labelFunc0154_00FB;
	UI_cause_light(0x00C8);
labelFunc0154_00FB:
	if (!(var0001 == 0x0007)) goto labelFunc0154_010F;
	UI_set_item_flag(var0002, 0x0000);
labelFunc0154_010F:
	if (!(var0001 == 0x0008)) goto labelFunc0154_0166;
	if (!(var0002 == UI_get_npc_object(0xFE9C))) goto labelFunc0154_0166;
	var0005 = UI_get_npc_prop(0xFE9C, 0x0005);
	var0006 = UI_get_random(0x000A);
	if (!((var0005 + var0006) > 0x001F)) goto labelFunc0154_0156;
	var0006 = (0x001F - var0005);
labelFunc0154_0156:
	var0007 = UI_set_npc_prop(0xFE9C, 0x0005, var0006);
labelFunc0154_0166:
	if (!(var0001 == 0x0009)) goto labelFunc0154_017A;
	UI_set_temperature(var0002, 0x0000);
labelFunc0154_017A:
	if (!(var0001 >= 0x000A)) goto labelFunc0154_0195;
	var0008 = Func0992(0x0001, "@What is this!@", 0x0000, false);
	abort;
labelFunc0154_0195:
	UI_remove_item(item);
	abort;
	goto labelFunc0154_0203;
labelFunc0154_019E:
	var0009 = [var0002[0x0002], var0002[0x0003], var0002[0x0004]];
	var0008 = Func0992(0x0001, (("@Please, " + Func0954()) + ", waste them not!@"), 0x0000, false);
	var000A = UI_create_new_object(0x0390);
	if (!var000A) goto labelFunc0154_0203;
	UI_set_item_flag(var000A, 0x0012);
	UI_set_item_frame(var000A, UI_die_roll(0x0004, 0x0017));
	var0007 = UI_update_last_created(var0009);
labelFunc0154_0203:
	UI_remove_item(item);
labelFunc0154_0208:
	return;
}


