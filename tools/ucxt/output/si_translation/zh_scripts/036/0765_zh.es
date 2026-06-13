#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);
extern void Func0888 0x888 ();

void Func0765 object#(0x765) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x01C2, 0x0001, 0x0000);
	enum();
labelFunc0765_001A:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0765_02C8;
	var0005 = UI_get_item_frame(var0004);
	var0006 = UI_get_object_position(var0004);
	if (!(var0000 == 0x0001)) goto labelFunc0765_00DC;
	if (!(var0005 == 0x0008)) goto labelFunc0765_00B6;
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0015, var0006[0x0001], var0006[0x0002], 0x0002, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0004);
	var0007 = UI_create_new_object(0x01C2);
	if (!var0007) goto labelFunc0765_00A1;
	var0004 = UI_update_last_created([var0006]);
	UI_set_item_frame(var0007, 0x000C);
labelFunc0765_00A1:
	gflags[0x02F5] = true;
	Func095D(0x00FA);
	Func0888();
	UI_remove_item(item);
	goto labelFunc0765_00DC;
labelFunc0765_00B6:
	UI_sprite_effect(0x0009, var0006[0x0001], var0006[0x0002], 0x0002, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
labelFunc0765_00DC:
	if (!(var0000 == 0x0002)) goto labelFunc0765_017F;
	if (!(var0005 == 0x0009)) goto labelFunc0765_0159;
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0015, var0006[0x0001], var0006[0x0002], 0x0002, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0004);
	var0007 = UI_create_new_object(0x01C2);
	if (!var0007) goto labelFunc0765_0144;
	var0004 = UI_update_last_created([var0006]);
	UI_set_item_frame(var0007, 0x000C);
labelFunc0765_0144:
	gflags[0x02F6] = true;
	Func095D(0x00FA);
	Func0888();
	UI_remove_item(item);
	goto labelFunc0765_017F;
labelFunc0765_0159:
	UI_sprite_effect(0x0009, var0006[0x0001], var0006[0x0002], 0x0002, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
labelFunc0765_017F:
	if (!(var0000 == 0x0003)) goto labelFunc0765_0222;
	if (!(var0005 == 0x000A)) goto labelFunc0765_01FC;
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0015, var0006[0x0001], var0006[0x0002], 0x0002, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0004);
	var0007 = UI_create_new_object(0x01C2);
	if (!var0007) goto labelFunc0765_01E7;
	var0004 = UI_update_last_created([var0006]);
	UI_set_item_frame(var0007, 0x000C);
labelFunc0765_01E7:
	gflags[0x02F7] = true;
	Func095D(0x00FA);
	Func0888();
	UI_remove_item(item);
	goto labelFunc0765_0222;
labelFunc0765_01FC:
	UI_sprite_effect(0x0009, var0006[0x0001], var0006[0x0002], 0x0002, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
labelFunc0765_0222:
	if (!(var0000 == 0x0004)) goto labelFunc0765_02C5;
	if (!(var0005 == 0x000B)) goto labelFunc0765_029F;
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0015, var0006[0x0001], var0006[0x0002], 0x0002, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0004);
	var0007 = UI_create_new_object(0x01C2);
	if (!var0007) goto labelFunc0765_028A;
	var0004 = UI_update_last_created([var0006]);
	UI_set_item_frame(var0007, 0x000C);
labelFunc0765_028A:
	gflags[0x02F8] = true;
	Func095D(0x00FA);
	Func0888();
	UI_remove_item(item);
	goto labelFunc0765_02C5;
labelFunc0765_029F:
	UI_sprite_effect(0x0009, var0006[0x0001], var0006[0x0002], 0x0002, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
labelFunc0765_02C5:
	goto labelFunc0765_001A;
labelFunc0765_02C8:
	return;
}


