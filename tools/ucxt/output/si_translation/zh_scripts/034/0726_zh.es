#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0922 0x922 (var var0000);

void Func0726 object#(0x726) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!((event == 0x0002) && gflags[0x000A])) goto labelFunc0726_0029;
	gflags[0x000A] = false;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	Func097F(0xFFFD, "@Where didst thou go?@", 0x001B);
labelFunc0726_0029:
	if (!(event == 0x0002)) goto labelFunc0726_0072;
	UI_move_object(0xFE9C, [0x0684, 0x007B, 0x0000]);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x0005);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x000A);
labelFunc0726_0072:
	if (!(event == 0x0003)) goto labelFunc0726_01B4;
	if (!gflags[0x02B1]) goto labelFunc0726_0087;
	Func0922(0x0004);
	abort;
labelFunc0726_0087:
	var0001 = UI_get_npc_object(0xFE9C);
	var0002 = UI_find_object(var0001, 0x0280, 0xFE99, 0xFE99);
	var0003 = UI_find_object(var0001, 0x027E, 0xFE99, 0xFE99);
	var0004 = UI_find_object(var0001, 0x03EC, 0xFE99, 0x0002);
	var0005 = UI_find_object(var0001, 0x0106, 0xFE99, 0x0001);
	var0006 = UI_find_object(var0001, 0x0106, 0xFE99, 0x0002);
	var0007 = UI_find_object(var0001, 0x0106, 0xFE99, 0x0003);
	if (!(!(var0002 && (var0003 && var0004)))) goto labelFunc0726_015B;
	Func0922(0x0005);
	gflags[0x02E7] = true;
	gflags[0x000A] = true;
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0726], 0x000A);
	UI_obj_sprite_effect(0xFE9C, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	abort;
labelFunc0726_015B:
	if (!(!(var0006 && (var0005 && var0007)))) goto labelFunc0726_01B3;
	Func0922(0x0006);
	gflags[0x02E6] = true;
	gflags[0x000A] = true;
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0726], 0x0008);
	UI_obj_sprite_effect(0xFE9C, 0x001A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	abort;
labelFunc0726_01B3:
	abort;
labelFunc0726_01B4:
	return;
}


