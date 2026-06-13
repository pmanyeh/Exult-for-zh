#game "serpentisle"
void Func0728 object#(0x728) ()
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

	if (!(event == 0x0002)) goto labelFunc0728_000D;
	UI_remove_item(item);
labelFunc0728_000D:
	if (!(event == 0x0003)) goto labelFunc0728_0198;
	var0000 = UI_get_object_position(item);
	var0001 = false;
	var0002 = UI_get_item_quality(item);
	if (!(var0002 == 0x0000)) goto labelFunc0728_00A4;
	if (!(UI_die_roll(0x0001, 0x0006) > 0x0001)) goto labelFunc0728_00A4;
	var0003 = UI_find_nearby(item, 0x02D6, 0x0003, 0x0010);
	enum();
labelFunc0728_0056:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0728_0068;
	var0001 = true;
	goto labelFunc0728_0056;
labelFunc0728_0068:
	if (!(!var0001)) goto labelFunc0728_00A4;
	var0007 = UI_create_new_object(0x02D6);
	if (!var0007) goto labelFunc0728_00A4;
	UI_clear_item_flag(var0007, 0x0012);
	UI_set_item_frame(var0007, UI_die_roll(0x0000, 0x001A));
	var0008 = UI_update_last_created(var0000);
labelFunc0728_00A4:
	if (!(var0002 == 0x0001)) goto labelFunc0728_0198;
	var0007 = UI_create_new_object(0x014C);
	if (!var0007) goto labelFunc0728_013C;
	UI_clear_item_flag(var0007, 0x0012);
	UI_play_sound_effect(0x006A);
	if (!(UI_die_roll(0x0001, 0x0004) > 0x0002)) goto labelFunc0728_013C;
	UI_set_item_frame(var0007, 0x0009);
	var0008 = UI_update_last_created(var0000);
	if (!var0008) goto labelFunc0728_013C;
	var0009 = UI_execute_usecode_array(var0007, [(byte)0x23, (byte)0x27, 0x0001, (byte)0x46, 0x000A, (byte)0x27, 0x0001, (byte)0x46, 0x000B, (byte)0x27, 0x0001, (byte)0x46, 0x000C, (byte)0x27, 0x0001, (byte)0x46, 0x000D, (byte)0x27, 0x0001, (byte)0x55, 0x0728]);
	abort;
labelFunc0728_013C:
	UI_set_item_frame(var0007, 0x000E);
	var0008 = UI_update_last_created(var0000);
	if (!var0008) goto labelFunc0728_0198;
	var0009 = UI_execute_usecode_array(var0007, [(byte)0x23, (byte)0x27, 0x0001, (byte)0x46, 0x000F, (byte)0x27, 0x0001, (byte)0x46, 0x0010, (byte)0x27, 0x0001, (byte)0x46, 0x0011, (byte)0x27, 0x0001, (byte)0x46, 0x0012, (byte)0x27, 0x0001, (byte)0x55, 0x0728]);
	abort;
labelFunc0728_0198:
	return;
}


