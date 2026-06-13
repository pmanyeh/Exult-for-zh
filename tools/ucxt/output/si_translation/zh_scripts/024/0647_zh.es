#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0647 object#(0x647) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0647_0096;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	if (!(var0000[0x0001] == 0x0000)) goto labelFunc0647_0022;
	return;
labelFunc0647_0022:
	var0001 = Func0979(var0000);
	UI_item_say(item, "@Ort Por Ylem@");
	if (!(Func0951() && ((!UI_is_npc(var0000)) && (var0000[0x0001] != 0x0000)))) goto labelFunc0647_007B;
	var0002 = UI_set_to_attack(item, var0000, 0x01BB);
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0082, (byte)0x65, (byte)0x67, (byte)0x7A]);
	goto labelFunc0647_0096;
labelFunc0647_007B:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0647_0096:
	if (!(event == 0x0004)) goto labelFunc0647_0122;
	var0003 = [0x0105, 0x028E, 0x028B, 0x028D, 0x032A, 0x01AF, 0x0102, 0x01B2, 0x01D6, 0x0369, 0x0247, 0x02B8, 0x03F3];
	var0004 = [0x03B5, 0x03B6, 0x0314, 0x0313];
	var0005 = UI_get_item_shape(item);
	if (!(var0005 in var0004)) goto labelFunc0647_0100;
	var0002 = UI_execute_usecode_array(item, [(byte)0x55, var0005]);
	return;
labelFunc0647_0100:
	if (!(!(var0005 in var0003))) goto labelFunc0647_0122;
	UI_telekenesis(var0005);
	var0002 = UI_execute_usecode_array(item, [(byte)0x55, var0005]);
labelFunc0647_0122:
	return;
}


