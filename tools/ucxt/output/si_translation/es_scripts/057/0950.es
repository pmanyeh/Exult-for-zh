#game "serpentisle"
void Func0950 0x950 (var var0000)
{
	var var0001;

	UI_halt_scheduled(var0000);
	UI_set_light(var0000, true);
	UI_set_time_palette();
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0600], 0x0032);
	return;
}


