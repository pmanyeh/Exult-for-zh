#game "serpentisle"
void Func0814 0x814 ()
{
	var var0000;
	var var0001;
	var var0002;

	UI_item_say(0xFF4E, "@Thy loss, Avatar.@");
	var0000 = UI_find_nearby(0xFF4E, 0x0360, 0x0019, 0x0000);
	if (!var0000) goto labelFunc0814_0062;
	var0001 = UI_get_distance(0xFF4E, var0000);
	var0002 = UI_get_object_position(var0000);
	var0002[0x0001] = (var0002[0x0001] - 0x0002);
	UI_si_path_run_usecode(0xFF4E, var0002, 0x000D, UI_get_npc_object(0xFF4E), 0x04B2, true);
labelFunc0814_0062:
	return;
}


