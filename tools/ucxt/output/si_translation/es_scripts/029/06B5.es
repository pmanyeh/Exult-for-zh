#game "serpentisle"
void Func06B5 object#(0x6B5) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!gflags[0x00C0]) goto labelFunc06B5_004D;
	if (!(!gflags[0x00C8])) goto labelFunc06B5_004D;
	var0000 = UI_create_new_object(0x0268);
	if (!var0000) goto labelFunc06B5_004D;
	UI_set_item_frame(var0000, 0x0009);
	UI_clear_item_flag(var0000, 0x0012);
	var0001 = UI_get_object_position(item);
	var0002 = UI_update_last_created(var0001);
	if (!var0002) goto labelFunc06B5_004D;
	gflags[0x00C8] = true;
labelFunc06B5_004D:
	return;
}


