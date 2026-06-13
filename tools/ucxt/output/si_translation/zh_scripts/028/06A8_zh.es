#game "serpentisle"
void Func06A8 object#(0x6A8) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0003)) goto labelFunc06A8_004B;
	var0000 = UI_execute_usecode_array(item, [(byte)0x55, 0x0636]);
	var0001 = UI_find_nearby(item, 0x02EB, 0x0005, 0x0000);
	if (!var0001) goto labelFunc06A8_0047;
	var0000 = UI_delayed_execute_usecode_array(var0001, [(byte)0x55, 0x0464], 0x0002);
	goto labelFunc06A8_004B;
labelFunc06A8_0047:
	gflags[0x0007] = false;
labelFunc06A8_004B:
	return;
}


