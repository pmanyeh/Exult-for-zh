#game "serpentisle"
void Func070F object#(0x70F) ()
{
	var var0000;
	var var0001;

	var0000 = UI_find_nearby(item, 0x00C8, 0x000F, 0x0010);
	if (!var0000) goto labelFunc070F_0029;
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x48], 0x0003);
labelFunc070F_0029:
	return;
}


