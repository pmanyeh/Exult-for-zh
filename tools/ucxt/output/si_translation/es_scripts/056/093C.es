#game "serpentisle"
void Func093C 0x93C (var var0000)
{
	var var0001;
	var var0002;
	var var0003;

	var0001 = [", come forward!@", ", stand before the Oracle!@", ", step forward!@", ", please come forward.@", ", come on down!@", "...@"];
	var0002 = (("@" + UI_get_npc_name(var0000)) + var0001[UI_get_random(UI_get_array_size(var0001))]);
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003, (byte)0x52, var0002, (byte)0x27, 0x0007, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6B]);
	var0003 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x000A, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61]);
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07F8], 0x0012);
	return;
}


