#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0655 object#(0x655) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0655_00A7;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_item_say(item, "@Uus Sanct@");
	if (!(Func0906() && UI_is_npc(var0000))) goto labelFunc0655_008C;
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x006D, (byte)0x6F, (byte)0x65, (byte)0x6A]);
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0655], 0x0005);
	var0004 = UI_get_object_position(var0000);
	UI_obj_sprite_effect(item, 0x000D, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0655_00A7;
labelFunc0655_008C:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x65, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0655_00A7:
	if (!(event == 0x0002)) goto labelFunc0655_00B7;
	UI_set_item_flag(item, 0x0009);
labelFunc0655_00B7:
	return;
}


