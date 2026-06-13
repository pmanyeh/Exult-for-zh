#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func067A object#(0x67A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc067A_0135;
	var0000 = false;
	UI_halt_scheduled(item);
	var0001 = UI_click_on_item();
	var0002 = Func0979(var0001);
	var0003 = [var0001[0x0002], var0001[0x0003], var0001[0x0004]];
	UI_item_say(item, "@Tym Vas Flam@");
	if (!Func0951()) goto labelFunc067A_010C;
	var0004 = UI_create_new_object(0x026D);
	if (!var0004) goto labelFunc067A_0105;
	UI_set_item_flag(var0004, 0x0012);
	UI_set_item_flag(var0004, 0x0000);
	var0005 = UI_update_last_created(var0003);
	if (!var0005) goto labelFunc067A_00FE;
	var0005 = UI_set_npc_prop(var0004, 0x0003, 0x0001);
	var0005 = UI_set_to_attack(item, var0004, 0x026D);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x7A], 0x000C);
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x2D], 0x000E);
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0002, (byte)0x58, 0x0014, (byte)0x6A, (byte)0x70, (byte)0x6F]);
	UI_obj_sprite_effect(var0001[0x0001], 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc067A_0102;
labelFunc067A_00FE:
	var0000 = true;
labelFunc067A_0102:
	goto labelFunc067A_0109;
labelFunc067A_0105:
	var0000 = true;
labelFunc067A_0109:
	goto labelFunc067A_0110;
labelFunc067A_010C:
	var0000 = true;
labelFunc067A_0110:
	if (!var0000) goto labelFunc067A_0135;
	var0005 = UI_execute_usecode_array(var0004, [(byte)0x23, (byte)0x59, var0002, (byte)0x6A, (byte)0x70, (byte)0x6F, (byte)0x55, 0x0606]);
labelFunc067A_0135:
	return;
}


