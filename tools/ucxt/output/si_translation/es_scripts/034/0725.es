#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0922 0x922 (var var0000);

void Func0725 object#(0x725) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc0725_0137;
	var0000 = UI_get_object_position(0xFE9C);
	if (!(var0000[0x0003] != 0x0005)) goto labelFunc0725_0020;
	abort;
labelFunc0725_0020:
	var0000 = Func09A0(0x0000, 0x0001);
	var0001 = Func09A0(0x0000, 0x0002);
	if (!(var0000 && var0001)) goto labelFunc0725_012F;
	var0002 = UI_set_item_quality(var0000, 0x0000);
	var0002 = UI_set_item_quality(var0001, 0x0001);
	var0002 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D6]);
	UI_set_item_flag(0xFE9C, 0x0010);
	var0003 = UI_get_object_position(item);
	UI_obj_sprite_effect(0xFE9C, 0x001A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(0xFE9C, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(0xFE9C, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0725]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0725], 0x0002);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0725], 0x0004);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x0725], 0x0014);
labelFunc0725_012F:
	UI_play_sound_effect(0x0051);
	abort;
labelFunc0725_0137:
	if (!((event == 0x0002) && (gflags[0x0009] == false))) goto labelFunc0725_0218;
	var0004 = UI_get_item_quality(item);
	if (!(var0004 == 0x0000)) goto labelFunc0725_01B5;
	var0003 = UI_get_object_position(0xFE9C);
	var0003[0x0001] = (var0003[0x0001] - (var0003[0x0003] / 0x0002));
	var0003[0x0002] = (var0003[0x0002] - (var0003[0x0003] / 0x0002));
	UI_sprite_effect(0x0011, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0074);
labelFunc0725_01B5:
	if (!(var0004 == 0x0001)) goto labelFunc0725_0217;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x093C, 0x0046, 0x0001]);
	UI_clear_item_flag(0xFE9C, 0x0010);
	gflags[0x0009] = true;
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0636], 0x000A);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0725], 0x0012);
labelFunc0725_0217:
	abort;
labelFunc0725_0218:
	if (!((event == 0x0002) && (gflags[0x0009] == true))) goto labelFunc0725_023B;
	gflags[0x0009] = false;
	if (!(!gflags[0x02B1])) goto labelFunc0725_0237;
	Func0922(0x0004);
labelFunc0725_0237:
	var0005 = true;
labelFunc0725_023B:
	return;
}


