#game "serpentisle"
void Func08C9 0x8C9 ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;

	var0000 = UI_find_nearest(item, 0x012F, 0x0002);
	if (!(!var0000)) goto labelFunc08C9_0055;
	var0000 = UI_find_nearest(item, 0x036C, 0x0002);
	if (!(!var0000)) goto labelFunc08C9_0055;
	var0000 = UI_find_nearest(item, 0x03A8, 0x0002);
	if (!(!var0000)) goto labelFunc08C9_0055;
	var0000 = UI_find_nearest(item, 0x03A7, 0x0002);
	if (!(!var0000)) goto labelFunc08C9_0055;
	abort;
labelFunc08C9_0055:
	var0001 = UI_get_item_shape(var0000);
	var0002 = UI_get_item_quality(var0000);
	if (!(var0002 <= 0x001A)) goto labelFunc08C9_02E4;
	var0003 = UI_get_cont_items(0xFE9C, 0x022B, 0xFE99, 0xFE99);
	var0004 = UI_get_cont_items(var0003, 0x022F, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc08C9_02E4;
	var0005 = UI_get_array_size(var0004);
	var0006 = 0x0000;
	if (!(!var0004)) goto labelFunc08C9_00B9;
	goto labelFunc08C9_0238;
labelFunc08C9_00B9:
	enum();
labelFunc08C9_00BA:
	for (var0009 in var0004 with var0007 to var0008) attend labelFunc08C9_02E4;
	var000A = (UI_get_item_frame(var0009) + 0x0001);
	var0006 = (var0006 + 0x0001);
	if (!((var0002 == 0x0013) && ((var000A == 0x0002) || (var000A == 0x0003)))) goto labelFunc08C9_00FA;
	goto labelFunc08C9_01B5;
labelFunc08C9_00FA:
	if (!((var0002 == 0x0014) && ((var000A == 0x0004) || (var000A == 0x0005)))) goto labelFunc08C9_0117;
	goto labelFunc08C9_01B5;
labelFunc08C9_0117:
	if (!((var0002 == 0x0015) && ((var000A == 0x000A) || ((var000A == 0x000B) || ((var000A == 0x000C) || (var000A == 0x000D)))))) goto labelFunc08C9_0144;
	goto labelFunc08C9_01B5;
labelFunc08C9_0144:
	if (!((var0002 == 0x0016) && ((var000A == 0x0006) || ((var000A == 0x0007) || ((var000A == 0x0008) || (var000A == 0x0009)))))) goto labelFunc08C9_0171;
	goto labelFunc08C9_01B5;
labelFunc08C9_0171:
	if (!((var0002 == 0x0017) && ((var000A == 0x000E) || (var000A == 0x000F)))) goto labelFunc08C9_018E;
	goto labelFunc08C9_01B5;
labelFunc08C9_018E:
	if (!((var0002 == 0x0018) && ((var000A == 0x0011) || (var000A == 0x0012)))) goto labelFunc08C9_01AB;
	goto labelFunc08C9_01B5;
labelFunc08C9_01AB:
	if (!(var000A == var0002)) goto labelFunc08C9_022E;
labelFunc08C9_01B5:
	var000B = false;
	if (!(var0001 == 0x012F)) goto labelFunc08C9_01CD;
	var000C = 0x03A8;
	var000B = true;
labelFunc08C9_01CD:
	if (!(var0001 == 0x036C)) goto labelFunc08C9_01E1;
	var000C = 0x03A7;
	var000B = true;
labelFunc08C9_01E1:
	if (!var000B) goto labelFunc08C9_022D;
	var000D = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0001, (byte)0x46, 0x000D, (byte)0x27, 0x0001, (byte)0x46, 0x000C, (byte)0x27, 0x0001, (byte)0x46, 0x000B, (byte)0x27, 0x0001, (byte)0x46, 0x000A, (byte)0x27, 0x0001, (byte)0x55, var000C]);
	UI_play_sound_effect(0x0059);
labelFunc08C9_022D:
	abort;
labelFunc08C9_022E:
	if (!(var0006 == var0005)) goto labelFunc08C9_02E1;
labelFunc08C9_0238:
	var000B = false;
	if (!(var0001 == 0x03A8)) goto labelFunc08C9_0254;
	var000B = true;
	var000E = UI_create_new_object(0x012F);
labelFunc08C9_0254:
	if (!(var0001 == 0x03A7)) goto labelFunc08C9_026C;
	var000B = true;
	var000E = UI_create_new_object(0x036C);
labelFunc08C9_026C:
	if (!var000B) goto labelFunc08C9_02E0;
	var000F = UI_get_object_position(var0000);
	UI_set_item_frame(var000E, 0x000A);
	var000D = UI_set_item_quality(var000E, var0002);
	UI_remove_item(var0000);
	var000D = UI_update_last_created(var000F);
	var000D = UI_execute_usecode_array(var000E, [(byte)0x27, 0x0001, (byte)0x46, 0x000B, (byte)0x27, 0x0001, (byte)0x46, 0x000C, (byte)0x27, 0x0001, (byte)0x46, 0x000D, (byte)0x27, 0x0001, (byte)0x46, 0x000E]);
	UI_play_sound_effect(0x0058);
labelFunc08C9_02E0:
	abort;
labelFunc08C9_02E1:
	goto labelFunc08C9_00BA;
labelFunc08C9_02E4:
	return;
}


