#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func065B object#(0x65B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc065B_004E;
	UI_item_say(item, "@Vas Uus Sanct@");
	if (!Func0906()) goto labelFunc065B_0036;
	UI_halt_scheduled(item);
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x065B]);
	goto labelFunc065B_004E;
labelFunc065B_0036:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc065B_004E:
	if (!(event == 0x0002)) goto labelFunc065B_00B6;
	UI_play_sound_effect(0x006D);
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, (var0001[0x0001] - 0x0002), (var0001[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_get_party_list();
	var0002 = (var0002 & 0xFE9C);
	enum();
labelFunc065B_009E:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc065B_00B6;
	UI_set_item_flag(var0005, 0x0009);
	goto labelFunc065B_009E;
labelFunc065B_00B6:
	return;
}


