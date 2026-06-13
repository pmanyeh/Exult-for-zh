#game "serpentisle"
// externs
extern void Func0922 0x922 (var var0000);
extern void Func09AD 0x9AD (var var0000);

void Func0733 object#(0x733) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc0733_00C2;
	var0000 = 0x0000;
	Func0922(0x001A);
labelFunc0733_0014:
	if (!(var0000 < 0x000A)) goto labelFunc0733_00C2;
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x0007, (0x0680 + (var0000 * 0x0002)), 0x003E, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_create_new_object2(0x03C8, [(0x0680 + (var0000 * 0x0002)), 0x003A, 0x0000]);
	UI_sprite_effect(0x0007, (0x0681 + (var0000 * 0x0002)), 0x0052, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_create_new_object2(0x03C8, [(0x0681 + (var0000 * 0x0002)), 0x005A, 0x0000]);
	if (!var0001) goto labelFunc0733_00B5;
	Func09AD(var0001);
	Func09AD(var0002);
labelFunc0733_00B5:
	var0000 = (var0000 + 0x0003);
	goto labelFunc0733_0014;
labelFunc0733_00C2:
	return;
}


