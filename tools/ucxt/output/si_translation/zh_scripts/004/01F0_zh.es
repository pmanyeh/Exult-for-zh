#game "serpentisle"
void Func01F0 shape#(0x1F0) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc01F0_001A;
	UI_item_say(0xFE9C, "@Good pup.@");
	UI_set_schedule_type(item, 0x0009);
labelFunc01F0_001A:
	if (!(event == 0x0000)) goto labelFunc01F0_0044;
	var0000 = ["@Arf!@", "@Woof!@", "@Bark!@"];
	UI_item_say(item, var0000[UI_get_random(UI_get_array_size(var0000))]);
labelFunc01F0_0044:
	return;
}


