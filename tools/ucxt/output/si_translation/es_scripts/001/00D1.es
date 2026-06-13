#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func00D1 shape#(0xD1) ()
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
	var var000B;

	if (!(event == 0x0001)) goto labelFunc00D1_0067;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0016)) goto labelFunc00D1_0067;
	UI_set_item_frame(item, 0x0017);
	UI_play_sound_effect(0x0027);
	Func097F(0xFE9C, "@Pretty@", 0x0004);
	UI_obj_sprite_effect(item, 0x000C, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0014, (byte)0x46, 0x0015]);
	abort;
labelFunc00D1_0067:
	if (!(event == 0x0005)) goto labelFunc00D1_0186;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x000A)) goto labelFunc00D1_0186;
	UI_close_gumps();
	var0002 = UI_find_nearby(item, 0x0210, 0x001E, 0x0000);
	var0003 = UI_find_nearby(item, 0x0113, 0x000F, 0x00B0);
	enum();
labelFunc00D1_00A8:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc00D1_00BD;
	UI_remove_item(var0006);
	goto labelFunc00D1_00A8;
labelFunc00D1_00BD:
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Die, you cursed fiends!@", (byte)0x6F, (byte)0x70, (byte)0x6A]);
	Func097F(UI_get_npc_object(0xFE9C), "@I despise you all!@", 0x0002);
	enum();
labelFunc00D1_00E8:
	for (var0009 in var0002 with var0007 to var0008) attend labelFunc00D1_0186;
	var000A = UI_get_object_position(var0009);
	var000A[0x0001] = (var000A[0x0001] - (var000A[0x0003] / 0x0002));
	var000A[0x0002] = (var000A[0x0002] - (var000A[0x0003] / 0x0002));
	UI_play_sound_effect(0x0047);
	UI_sprite_effect(0x0011, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000A = UI_get_object_position(var0009);
	UI_play_sound_effect(0x0029);
	UI_remove_item(var0009);
	var000B = UI_create_new_object(0x00E0);
	if (!var000B) goto labelFunc00D1_0183;
	var0001 = UI_update_last_created(var000A);
labelFunc00D1_0183:
	goto labelFunc00D1_00E8;
labelFunc00D1_0186:
	return;
}


