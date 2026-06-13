#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func064B object#(0x64B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc064B_00C7;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas An Flam@");
	if (!Func0906()) goto labelFunc064B_00B1;
	var0000 = UI_execute_usecode_array(item, [(byte)0x66, (byte)0x65, (byte)0x67]);
	var0001 = 0x0019;
	var0002 = [0x02BD, 0x020E, 0x0152, 0x01B3];
	enum();
labelFunc064B_0045:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc064B_00AE;
	var0006 = UI_find_nearby(item, var0005, var0001, 0x0000);
	enum();
labelFunc064B_0062:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc064B_00AB;
	var000A = UI_get_item_shape(var0009);
	var000B = ((UI_get_distance(item, var0009) / 0x0003) + 0x0002);
	UI_telekenesis(var000A);
	var0000 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, var000A], var000B);
	goto labelFunc064B_0062;
labelFunc064B_00AB:
	goto labelFunc064B_0045;
labelFunc064B_00AE:
	goto labelFunc064B_00C7;
labelFunc064B_00B1:
	var0000 = UI_execute_usecode_array(item, [(byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc064B_00C7:
	return;
}


