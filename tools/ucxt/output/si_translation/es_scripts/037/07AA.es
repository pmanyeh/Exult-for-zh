#game "serpentisle"
// externs
extern var Func09A7 0x9A7 (var var0000, var var0001);
extern void Func098B 0x98B (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func07AA object#(0x7AA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0003)) goto labelFunc07AA_0071;
	var0000 = UI_find_nearby(item, 0x02F7, 0x0019, 0x0000);
	var0001 = UI_get_array_size(var0000);
	var0000 = Func09A7(var0001, var0000);
	enum();
labelFunc07AA_0030:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc07AA_004B;
	UI_play_sound_effect(0x0010);
	Func098B(var0004);
	goto labelFunc07AA_0030;
labelFunc07AA_004B:
	var0005 = Func09A0(0x0005, 0x0001);
	var0006 = UI_execute_usecode_array(var0005, [(byte)0x27, 0x0064, (byte)0x55, 0x00FA, 0x0000]);
labelFunc07AA_0071:
	return;
}


