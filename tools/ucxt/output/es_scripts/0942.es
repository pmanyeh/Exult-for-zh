#game "blackgate"
// externs
extern void Func0905 0x905 (var var0000);

void Func0942 0x942 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0002 = UI_get_item_frame(var0000);
	if (!(!UI_get_item_quality(var0000))) goto labelFunc0942_0029;
	var0003 = UI_set_item_quality(var0000, UI_die_roll(0x001E, 0x003C));
labelFunc0942_0029:
	if (!(UI_get_item_shape(var0000) == 0x0253)) goto labelFunc0942_0050;
	if (!(UI_get_item_quality(var0000) == 0x00FF)) goto labelFunc0942_0050;
	UI_item_say(var0000, "Spent");
	return;
labelFunc0942_0050:
	var0004 = UI_get_container(var0000);
	if (!((var0004 == 0x0000) || UI_is_npc(var0004))) goto labelFunc0942_008E;
	UI_set_item_shape(item, var0001);
	var0005 = UI_get_party_list();
	if (!(var0004 in var0005)) goto labelFunc0942_008B;
	Func0905(var0000);
labelFunc0942_008B:
	goto labelFunc0942_0095;
labelFunc0942_008E:
	UI_flash_mouse(0x0000);
labelFunc0942_0095:
	UI_set_light(var0000, true);
	UI_set_time_palette();
	return;
}


