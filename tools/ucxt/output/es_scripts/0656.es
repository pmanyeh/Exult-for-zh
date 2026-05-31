#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0656 object#(0x656) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0656_0092;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	if (!(var0000[0x0001] == 0x0000)) goto labelFunc0656_0022;
	return;
labelFunc0656_0022:
	var0001 = Func092D(var0000);
	UI_item_say(item, "@Ort Por Ylem@");
	if (!(Func0906() && ((!UI_is_npc(var0000)) && (var0000[0x0001] != 0x0000)))) goto labelFunc0656_0079;
	var0002 = UI_set_to_attack(item, var0000, 0x01BB);
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x0043, (byte)0x65, (byte)0x67, (byte)0x7A]);
	goto labelFunc0656_0092;
labelFunc0656_0079:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0656_0092:
	if (!(event == 0x0004)) goto labelFunc0656_012A;
	var0003 = [0x0105, 0x028E, 0x028B, 0x028D, 0x0149, 0x032A, 0x01AF, 0x0102, 0x01B2, 0x02E7, 0x01D6, 0x02E4, 0x0369, 0x0247, 0x02B8, 0x03F3, 0x0311];
	var0004 = [0x03B5, 0x03B6, 0x0314, 0x0313];
	var0005 = UI_get_item_shape(item);
	if (!(var0005 in var0004)) goto labelFunc0656_0108;
	var0002 = UI_execute_usecode_array(item, [(byte)0x55, var0005]);
	return;
labelFunc0656_0108:
	if (!(!(var0005 in var0003))) goto labelFunc0656_012A;
	UI_telekenesis(var0005);
	var0002 = UI_execute_usecode_array(item, [(byte)0x55, var0005]);
labelFunc0656_012A:
	return;
}


