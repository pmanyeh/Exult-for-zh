#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func07D3 object#(0x7D3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	if (!((event == 0x0002) && (gflags[0x0007] == false))) goto labelFunc07D3_016A;
	var0000 = Func09A0(0x0000, 0x0001);
	var0001 = UI_set_item_quality(var0000, 0x0028);
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0798], 0x000A);
	UI_play_sound_effect(0x0027);
	UI_set_weather(0x0003);
	Func097F(0xFE9C, "@Oh...@", 0x0002);
	Func097F(0xFE9C, "@AAAAHHHH!!!!!@", 0x002D);
	Func097F(0xFE9C, "@NOOOO!!!!!@", 0x003C);
	var0002 = UI_find_nearby(0xFE9C, 0x00A0, 0x0005, 0x0000);
	enum();
labelFunc07D3_0084:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc07D3_00C3;
	var0006 = UI_get_object_position(var0005);
	UI_sprite_effect(0x0007, (var0006[0x0001] - 0x0002), (var0006[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc07D3_0084;
labelFunc07D3_00C3:
	UI_play_sound_effect(0x0077);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x58, 0x0027, (byte)0x54, 0x0031, 0x0000, (byte)0x61, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0006, (byte)0x61, (byte)0x27, 0x0002, (byte)0x70, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x27, 0x0008, (byte)0x55, 0x07D3, (byte)0x27, 0x0004, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0002, (byte)0x70, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x27, 0x0008, (byte)0x55, 0x07D3, (byte)0x27, 0x0004, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x07D4], 0x0023);
	gflags[0x0007] = true;
	abort;
labelFunc07D3_016A:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc07D3_0203;
	var0007 = UI_find_nearby(item, 0x00A0, 0x0014, 0x0000);
	var0008 = 0x0000;
	enum();
labelFunc07D3_0190:
	for (var000B in var0007 with var0009 to var000A) attend labelFunc07D3_0203;
	var0006 = UI_get_object_position(var000B);
	UI_sprite_effect((0x0028 + var0008), var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001B, (var0006[0x0001] - 0x0002), (var0006[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	var0008 = (var0008 + 0x0001);
	goto labelFunc07D3_0190;
labelFunc07D3_0203:
	return;
}


