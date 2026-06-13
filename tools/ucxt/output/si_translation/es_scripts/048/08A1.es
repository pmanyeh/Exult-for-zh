#game "serpentisle"
void Func08A1 0x8A1 ()
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

	var0000 = UI_get_object_position(item);
	var0001 = UI_find_nearby(item, 0x02D8, 0x000D, 0x00B0);
	var0002 = UI_find_nearby(item, 0xFE99, 0x0008, 0x0004);
	UI_sprite_effect(0x0004, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0003 = (UI_create_new_object(0x00D1) & (UI_create_new_object(0x00C9) & (UI_create_new_object(0x00C9) & (UI_create_new_object(0x00C9) & (UI_create_new_object(0x00C9) & UI_create_new_object(0x00C9))))));
	UI_set_item_frame(var0003[0x0001], 0x000D);
	UI_set_item_frame(var0003[0x0002], 0x000D);
	UI_set_item_frame(var0003[0x0003], 0x000E);
	UI_set_item_frame(var0003[0x0004], 0x000E);
	UI_set_item_frame(var0003[0x0005], 0x000F);
	UI_set_item_frame(var0003[0x0006], 0x000F);
	var0004 = [(var0000[0x0001] - 0x0003), (var0000[0x0002] + 0x0001), 0x0000];
	var0005 = UI_update_last_created(var0004);
	var0004 = [(var0000[0x0001] + 0x0002), (var0000[0x0002] - 0x0002), 0x0000];
	var0005 = UI_update_last_created(var0004);
	var0004 = [(var0000[0x0001] + 0x0001), (var0000[0x0002] + 0x0002), 0x0000];
	var0005 = UI_update_last_created(var0004);
	var0004 = [(var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0003), 0x0000];
	var0005 = UI_update_last_created(var0004);
	var0004 = [(var0000[0x0001] + 0x0003), var0000[0x0002], 0x0000];
	var0005 = UI_update_last_created(var0004);
	var0005 = UI_update_last_created(var0000);
	enum();
labelFunc08A1_0193:
	for (var0008 in var0002 with var0006 to var0007) attend labelFunc08A1_01D0;
	var0009 = UI_get_npc_prop(var0008, 0x0003);
	var0005 = UI_apply_damage(UI_get_npc_prop(var0008, 0x0000), ((var0009 / 0x0003) * 0x0002), 0x0001, var0008);
	goto labelFunc08A1_0193;
labelFunc08A1_01D0:
	if (!(UI_get_item_frame(var0001) == 0x0001)) goto labelFunc08A1_01FF;
	UI_set_item_frame(var0001, 0x0002);
	var0005 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@Thank thee.@"], 0x0005);
labelFunc08A1_01FF:
	return;
}


