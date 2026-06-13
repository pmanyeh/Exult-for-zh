#game "serpentisle"
void Func06E2 object#(0x6E2) ()
{
	var var0000;
	var var0001;

	if (!(gflags[0x0004] == true)) goto labelFunc06E2_003D;
	var0000 = UI_create_new_object(0x031D);
	if (!var0000) goto labelFunc06E2_0038;
	var0001 = UI_update_last_created([0x0707, 0x05C0, 0x0000]);
	var0001 = UI_set_item_quality(var0000, 0x003E);
labelFunc06E2_0038:
	UI_remove_item(item);
labelFunc06E2_003D:
	return;
}


