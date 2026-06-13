#game "serpentisle"
void Func067E object#(0x67E) ()
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

	if (!(event == 0x0001)) goto labelFunc067E_00C2;
	var0000 = (UI_get_object_position(0xFE9C) & (0x0096 & 0x001F));
	var0001 = UI_find_nearby(var0000, 0x025F, 0x0050, 0x0010);
	enum();
labelFunc067E_002E:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc067E_00C2;
	var0005 = UI_get_item_quality(var0004);
	var0006 = UI_get_item_frame(var0004);
	if (!((var0005 == 0x0096) && (var0006 == 0x001F))) goto labelFunc067E_00AA;
	var0007 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	var0008 = (var0007[0x0003] + 0x0001);
	var0008 = (var0008 / 0x0002);
	UI_obj_sprite_effect(0xFE9C, 0x0009, var0008, var0008, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	goto labelFunc067E_00BF;
labelFunc067E_00AA:
	var0009 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07E9], 0x0001);
labelFunc067E_00BF:
	goto labelFunc067E_002E;
labelFunc067E_00C2:
	return;
}


