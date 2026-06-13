#game "serpentisle"
void Func072C object#(0x72C) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0002)) goto labelFunc072C_0060;
	var0000 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x001A, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc072C_0060:
	if (!(event == 0x0003)) goto labelFunc072C_00D5;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFE9C, [0x0687, 0x0072, 0x0000]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x0001);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x072C], 0x0006);
	abort;
labelFunc072C_00D5:
	return;
}


