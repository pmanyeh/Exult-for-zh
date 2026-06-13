#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0654 object#(0x654) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0654_0052;
	UI_item_say(item, "@Vas Uus Sanct@");
	if (!Func0951()) goto labelFunc0654_0038;
	UI_halt_scheduled(item);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0654]);
	goto labelFunc0654_0052;
labelFunc0654_0038:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0654_0052:
	if (!(event == 0x0002)) goto labelFunc0654_00A5;
	UI_play_sound_effect(0x005A);
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_get_party_list();
	var0001 = (var0001 & 0xFE9C);
	enum();
labelFunc0654_008D:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0654_00A5;
	UI_set_item_flag(var0004, 0x0009);
	goto labelFunc0654_008D;
labelFunc0654_00A5:
	return;
}


