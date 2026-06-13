#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0675 object#(0x675) ()
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

	if (!(event == 0x0001)) goto labelFunc0675_00BA;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(item);
	var0001 = Func092D(var0000);
	UI_item_say(item, "@In Nox Grav@");
	if (!Func0906()) goto labelFunc0675_009F;
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x006E, (byte)0x65, (byte)0x66, (byte)0x67]);
	var0003 = UI_create_new_object(0x0384);
	if (!var0003) goto labelFunc0675_009C;
	var0004 = (var0000[0x0002] + 0x0001);
	var0005 = (var0000[0x0003] + 0x0001);
	var0006 = var0000[0x0004];
	var0007 = [var0004, var0005, var0006];
	UI_set_item_flag(var0003, 0x0012);
	var0002 = UI_update_last_created(var0007);
labelFunc0675_009C:
	goto labelFunc0675_00BA;
labelFunc0675_009F:
	var0008 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0675_00BA:
	return;
}


