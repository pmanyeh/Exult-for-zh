#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func066F object#(0x66F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc066F_0150;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	var0002 = UI_get_item_frame(var0000);
	var0003 = UI_get_object_position(var0000);
	var0004 = Func0979(item);
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Ort Xen@");
	if (!Func0951()) goto labelFunc066F_0150;
	if (!(((var0001 == 0x02FA) && ((var0002 == 0x001B) || (var0002 == 0x001C))) || ((var0001 == 0x0190) && (var0002 == 0x001E)))) goto labelFunc066F_0150;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0004, (byte)0x68, (byte)0x61, (byte)0x65, (byte)0x6D, (byte)0x61, (byte)0x58, 0x0043]);
	UI_obj_sprite_effect(var0000[0x0001], 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0005 = UI_get_body_npc(var0000);
	if (!(var0005 != 0xFFFF)) goto labelFunc066F_012F;
	var0006 = UI_resurrect(var0000);
	if (!var0006) goto labelFunc066F_010B;
	var0007 = UI_get_object_position(0xFE9C);
	Func09AC(var0005, var0007[0x0001], var0007[0x0002], 0x000C);
	UI_set_alignment(var0005, 0x0000);
	UI_set_item_flag(var0005, 0x001E);
	goto labelFunc066F_012C;
labelFunc066F_010B:
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0004, (byte)0x68, (byte)0x61, (byte)0x65, (byte)0x6D, (byte)0x61, (byte)0x55, 0x0606]);
labelFunc066F_012C:
	goto labelFunc066F_0150;
labelFunc066F_012F:
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0004, (byte)0x68, (byte)0x61, (byte)0x65, (byte)0x6D, (byte)0x61, (byte)0x55, 0x0606]);
labelFunc066F_0150:
	return;
}


