#game "blackgate"
// externs
extern var Func0934 0x934 (var var0000);
extern var Func0906 0x906 ();

void Func0673 object#(0x673) ()
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
	var var000C;
	var var000D;

	if (!(event == 0x0001)) goto labelFunc0673_0100;
	var0000 = 0x0019;
	UI_halt_scheduled(item);
	var0001 = Func0934(var0000);
	UI_item_say(item, "@Vas In Flam Grav@");
	if (!Func0906()) goto labelFunc0673_00E6;
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x6C, (byte)0x6D, (byte)0x6C, (byte)0x70, (byte)0x6A]);
	enum();
labelFunc0673_0045:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0673_00E3;
	var0006 = UI_get_object_position(var0005);
	var0007 = var0006[0x0001];
	var0008 = var0006[0x0002];
	var0009 = var0006[0x0003];
	var000A = [var0007, var0008, 0x0000];
	var000B = UI_create_new_object(0x037F);
	if (!var000B) goto labelFunc0673_00E0;
	var0002 = UI_update_last_created(var000A);
	var000C = UI_die_roll(0x0001, 0x000F);
	var000D = (0x001E + var000C);
	var0002 = UI_set_item_quality(var000B, var000D);
	UI_set_item_flag(var000B, 0x0012);
	var0002 = UI_delayed_execute_usecode_array(var000B, [(byte)0x23, (byte)0x2D], var000D);
labelFunc0673_00E0:
	goto labelFunc0673_0045;
labelFunc0673_00E3:
	goto labelFunc0673_0100;
labelFunc0673_00E6:
	var0002 = UI_execute_usecode_array(item, [(byte)0x6C, (byte)0x6D, (byte)0x6C, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0673_0100:
	return;
}


