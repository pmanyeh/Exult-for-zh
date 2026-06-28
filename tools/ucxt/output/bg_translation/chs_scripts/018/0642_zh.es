#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();
extern void Func08FD 0x8FD (var var0000);

void Func0642 object#(0x642) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0642_006B;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_item_say(item, "@An Flam@");
	if (!Func0906()) goto labelFunc0642_0052;
	var0002 = UI_set_to_attack(item, var0000, 0x021C);
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x65, (byte)0x67, (byte)0x7A]);
	goto labelFunc0642_006B;
labelFunc0642_0052:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0642_006B:
	if (!(event == 0x0004)) goto labelFunc0642_00B8;
	var0003 = UI_get_item_shape(item);
	if (!(var0003 in [0x02BD, 0x020E, 0x0152, 0x01B3])) goto labelFunc0642_00B2;
	UI_telekenesis(var0003);
	var0002 = UI_execute_usecode_array(item, [(byte)0x55, var0003]);
	UI_play_sound_effect(0x002E);
	goto labelFunc0642_00B8;
labelFunc0642_00B2:
	Func08FD(0x003C);
labelFunc0642_00B8:
	return;
}


