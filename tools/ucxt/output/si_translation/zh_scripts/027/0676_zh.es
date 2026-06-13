#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0676 object#(0x676) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0676_00AA;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	var0002 = Func0979(item);
	UI_halt_scheduled(item);
	UI_item_say(item, "@Ex Por@");
	if (!(Func0951() && (UI_is_npc(var0000) && ((var0000[0x0001] != 0x0000) && (var0001 != 0x02D1))))) goto labelFunc0676_0089;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0002, (byte)0x68, (byte)0x69, (byte)0x65, (byte)0x66, (byte)0x6A, (byte)0x58, 0x0043]);
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0676], 0x000A);
	goto labelFunc0676_00AA;
labelFunc0676_0089:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0002, (byte)0x68, (byte)0x69, (byte)0x65, (byte)0x66, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0676_00AA:
	if (!(event == 0x0002)) goto labelFunc0676_01B1;
	var0004 = UI_get_cont_items(item, 0xFE99, 0xFE99, 0xFE99);
	if (!UI_get_array_size(var0004)) goto labelFunc0676_01B1;
	var0005 = UI_set_last_created(var0004[0x0001]);
	if (!var0005) goto labelFunc0676_01B1;
	var0006 = UI_get_object_position(item);
	var0003 = UI_update_last_created(var0006);
	if (!(!var0003)) goto labelFunc0676_0119;
	var0003 = UI_update_last_created([(var0006[0x0001] - 0x0002), var0006[0x0002], var0006[0x0003]]);
labelFunc0676_0119:
	if (!(!var0003)) goto labelFunc0676_0140;
	var0003 = UI_update_last_created([var0006[0x0001], (var0006[0x0002] - 0x0002), var0006[0x0003]]);
labelFunc0676_0140:
	if (!(!var0003)) goto labelFunc0676_0167;
	var0003 = UI_update_last_created([(var0006[0x0001] + 0x0002), var0006[0x0002], var0006[0x0003]]);
labelFunc0676_0167:
	if (!(!var0003)) goto labelFunc0676_018E;
	var0003 = UI_update_last_created([var0006[0x0001], (var0006[0x0002] + 0x0002), var0006[0x0003]]);
labelFunc0676_018E:
	if (!(!var0003)) goto labelFunc0676_019F;
	UI_remove_item(var0005);
	goto labelFunc0676_01B1;
labelFunc0676_019F:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0676]);
labelFunc0676_01B1:
	return;
}


