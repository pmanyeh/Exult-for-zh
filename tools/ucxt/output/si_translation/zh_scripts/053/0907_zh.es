#game "serpentisle"
void Func0907 0x907 (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = UI_get_item_frame(var0000);
	var0003 = (var0002 % 0x0004);
	UI_set_item_frame(var0000, ((var0002 - var0003) + var0001));
	if (!(var0001 == 0x0002)) goto labelFunc0907_003A;
	UI_item_say(var0000, "Click");
labelFunc0907_003A:
	return;
}


