#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern var Func0934 0x934 (var var0000);

void Func0674 object#(0x674) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0674_008B;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Oort Hur@");
	if (!Func0906()) goto labelFunc0674_0073;
	var0000 = 0x0046;
	gflags[0x02ED] = true;
	UI_set_weather(0x0002);
	var0001 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x61]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0674], 0x0008);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x068A], var0000);
	goto labelFunc0674_008B;
labelFunc0674_0073:
	var0001 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0674_008B:
	if (!(event == 0x0002)) goto labelFunc0674_00FA;
	if (!(gflags[0x02ED] == true)) goto labelFunc0674_00FA;
	var0002 = 0x002D;
	var0003 = Func0934(var0002);
	var0004 = var0003[UI_die_roll(0x0001, UI_get_array_size(var0003))];
	if (!var0004) goto labelFunc0674_00D8;
	var0001 = UI_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x060F]);
labelFunc0674_00D8:
	var0005 = UI_die_roll(0x0003, 0x0008);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0674], var0005);
labelFunc0674_00FA:
	return;
}


