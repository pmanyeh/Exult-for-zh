#game "serpentisle"
// externs
extern void Func08AD 0x8AD (var var0000, var var0001, var var0002, var var0003);
extern void Func0971 0x971 (var var0000);

void Func034A shape#(0x34A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(UI_get_item_frame(item) == 0x0004)) goto labelFunc034A_0020;
	var0000 = UI_click_on_item();
	Func08AD(item, 0x0002, 0x0026, var0000);
labelFunc034A_0020:
	if (!(UI_get_item_frame(item) == 0x000F)) goto labelFunc034A_0080;
	var0000 = UI_click_on_item();
	if (!((UI_get_item_shape(var0000) == 0x032A) && (UI_get_item_frame(var0000) == 0x0002))) goto labelFunc034A_0080;
	UI_set_item_frame(var0000, 0x0000);
	UI_set_item_frame(item, 0x0008);
	UI_play_sound_effect(0x0021);
	UI_obj_sprite_effect(item, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc034A_0080:
	if (!(UI_get_item_frame(item) == 0x000E)) goto labelFunc034A_012F;
	var0001 = UI_click_on_item();
	if (!(var0001[0x0001] == UI_get_npc_object(0xFE9C))) goto labelFunc034A_00A5;
	return;
labelFunc034A_00A5:
	if (!((UI_get_item_shape(var0001[0x0001]) == 0x0379) && ((UI_get_item_frame(var0001[0x0001]) == 0x0000) || ((UI_get_item_frame(var0001[0x0001]) == 0x0001) || ((UI_get_item_frame(var0001[0x0001]) == 0x0004) || (UI_get_item_frame(var0001[0x0001]) == 0x0005)))))) goto labelFunc034A_012F;
	Func0971(item);
	UI_set_item_shape(var0001[0x0001], 0x020E);
	var0002 = UI_find_nearby(var0001[0x0001], 0x0211, 0x0028, 0x0000);
	enum();
labelFunc034A_011A:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc034A_012F;
	UI_kill_npc(var0005);
	goto labelFunc034A_011A;
labelFunc034A_012F:
	return;
}


