#game "serpentisle"
// externs
extern void Func0950 0x950 (var var0000);

void Func098A 0x98A (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0002 = UI_get_item_frame(var0000);
	if (!(!UI_get_item_quality(var0000))) goto labelFunc098A_0029;
	var0003 = UI_set_item_quality(var0000, UI_die_roll(0x001E, 0x003C));
labelFunc098A_0029:
	if (!(UI_get_item_shape(var0000) == 0x0253)) goto labelFunc098A_0050;
	if (!(UI_get_item_quality(var0000) == 0x00FF)) goto labelFunc098A_0050;
	UI_item_say(var0000, "Spent");
	return;
labelFunc098A_0050:
	var0004 = UI_get_container(var0000);
	if (!UI_is_npc(var0004)) goto labelFunc098A_007D;
	if (!(UI_get_readied(var0004, 0x000B) == var0000)) goto labelFunc098A_007D;
	UI_flash_mouse(0x0000);
	return;
labelFunc098A_007D:
	if (!((var0004 == 0x0000) || UI_is_npc(var0004))) goto labelFunc098A_00B3;
	UI_set_item_shape(var0000, var0001);
	var0005 = UI_get_party_list();
	if (!(var0004 in var0005)) goto labelFunc098A_00B0;
	Func0950(var0000);
labelFunc098A_00B0:
	goto labelFunc098A_00BA;
labelFunc098A_00B3:
	UI_flash_mouse(0x0000);
labelFunc098A_00BA:
	UI_set_light(var0000, true);
	UI_set_time_palette();
	return;
}


