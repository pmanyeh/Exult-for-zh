#game "serpentisle"
// externs
extern void Func0949 0x949 (var var0000);
extern void Func0971 0x971 (var var0000);

void Func0288 shape#(0x288) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0288_00EC;
	var0000 = UI_get_item_frame(item);
	if (!((var0000 == 0x0000) || (var0000 == 0x0001))) goto labelFunc0288_004A;
	var0001 = UI_click_on_item();
	if (!UI_is_npc(var0001)) goto labelFunc0288_0040;
	UI_set_item_flag(var0001, 0x0001);
	goto labelFunc0288_0046;
labelFunc0288_0040:
	Func0949("@Do not waste that!@");
labelFunc0288_0046:
	Func0971(item);
labelFunc0288_004A:
	if (!(var0000 == 0x0002)) goto labelFunc0288_009B;
	var0001 = UI_click_on_item();
	if (!UI_is_npc(var0001)) goto labelFunc0288_0072;
	UI_set_item_flag(var0001, 0x0000);
	goto labelFunc0288_008F;
labelFunc0288_0072:
	if (!UI_get_item_flag(var0001, 0x0012)) goto labelFunc0288_0089;
	UI_set_item_flag(var0001, 0x0000);
labelFunc0288_0089:
	Func0949("@Waste that not!@");
labelFunc0288_008F:
	UI_play_sound_effect2(0x0082, item);
	Func0971(item);
labelFunc0288_009B:
	if (!(var0000 == 0x0003)) goto labelFunc0288_00EC;
	var0001 = UI_click_on_item();
	if (!UI_is_npc(var0001)) goto labelFunc0288_00C3;
	UI_set_item_flag(var0001, 0x0003);
	goto labelFunc0288_00E0;
labelFunc0288_00C3:
	if (!UI_get_item_flag(var0001, 0x0012)) goto labelFunc0288_00DA;
	UI_set_item_flag(var0001, 0x0003);
labelFunc0288_00DA:
	Func0949("@Is that a good idea!@");
labelFunc0288_00E0:
	UI_play_sound_effect2(0x0082, item);
	Func0971(item);
labelFunc0288_00EC:
	return;
}


