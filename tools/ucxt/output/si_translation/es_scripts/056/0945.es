#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0945 0x945 (var var0000)
{
	var var0001;

	if (!((!UI_get_item_flag(var0000, 0x000B)) && (!UI_get_item_flag(var0000, 0x0017)))) goto labelFunc0945_003D;
	gflags[0x000E] = true;
	UI_close_gumps();
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0001), [(byte)0x55, 0x0633], 0x0003);
labelFunc0945_003D:
	return;
}


