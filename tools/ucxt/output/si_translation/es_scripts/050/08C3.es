#game "serpentisle"
void Func08C3 0x8C3 ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!((gflags[0x0170] || (gflags[0x0172] && (!gflags[0x0171]))) && (!(gflags[0x0170] && gflags[0x0172])))) goto labelFunc08C3_006F;
	var0000 = UI_find_nearby(item, 0x017D, 0x0001, 0x0008);
	if (!(!var0000)) goto labelFunc08C3_006F;
	var0001 = UI_get_object_position(item);
	var0000 = UI_create_new_object2(0x017D, var0001);
	UI_set_schedule_type(var0000, 0x000F);
	var0002 = UI_execute_usecode_array(var0000, [(byte)0x59, 0x0004, (byte)0x01, (byte)0x61]);
	UI_set_item_flag(var0000, 0x0012);
labelFunc08C3_006F:
	return;
}


