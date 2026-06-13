#game "serpentisle"
void Func06AC object#(0x6AC) ()
{
	var var0000;

	if (!((event == 0x0002) || (event == 0x0003))) goto labelFunc06AC_0042;
	var0000 = UI_find_nearby(item, 0x0280, 0x0001, 0x0000);
	if (!(!var0000)) goto labelFunc06AC_0042;
	gflags[0x01F9] = true;
	if (!(!((item == UI_get_npc_object(0xFE9C)) || (item == 0xFE9C)))) goto labelFunc06AC_0042;
	UI_remove_item(item);
labelFunc06AC_0042:
	return;
}


