#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func064F object#(0x64F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc064F_00AB;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_item_say(item, "@Uus Sanct@");
	if (!(Func0951() && UI_is_npc(var0000))) goto labelFunc064F_008E;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x005A, (byte)0x6F, (byte)0x65, (byte)0x6A]);
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x064F], 0x0005);
	var0004 = UI_get_object_position(var0000);
	UI_obj_sprite_effect(item, 0x000D, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc064F_00AB;
labelFunc064F_008E:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x65, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc064F_00AB:
	if (!(event == 0x0002)) goto labelFunc064F_00BB;
	UI_set_item_flag(item, 0x0009);
labelFunc064F_00BB:
	return;
}


