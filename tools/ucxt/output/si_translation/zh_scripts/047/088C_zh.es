#game "serpentisle"
void Func088C 0x88C ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_find_nearby(0xFE9C, 0x032A, 0x0001, 0x0000);
	if (!var0000) goto labelFunc088C_005D;
	var0001 = UI_get_object_position(var0000);
	var0002 = UI_set_last_created(var0000);
	if (!var0002) goto labelFunc088C_0059;
	var0002 = UI_give_last_created(0xFE9C);
	if (!(!var0002)) goto labelFunc088C_0056;
	var0002 = UI_update_last_created(var0001);
	UI_flash_mouse(0x0005);
	abort;
labelFunc088C_0056:
	goto labelFunc088C_005A;
labelFunc088C_0059:
	abort;
labelFunc088C_005A:
	goto labelFunc088C_005E;
labelFunc088C_005D:
	abort;
labelFunc088C_005E:
	return;
}


