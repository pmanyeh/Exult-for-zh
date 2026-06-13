#game "serpentisle"
// externs
extern var Func0980 0x980 (var var0000);
extern var Func0951 0x951 ();

void Func066D object#(0x66D) ()
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

	if (!(event == 0x0001)) goto labelFunc066D_010A;
	var0000 = 0x0019;
	UI_halt_scheduled(item);
	var0001 = Func0980(var0000);
	UI_item_say(item, "@Vas In Frio Grav@");
	if (!Func0951()) goto labelFunc066D_00EE;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0014, (byte)0x6C, (byte)0x6D, (byte)0x6C, (byte)0x70, (byte)0x6A]);
	enum();
labelFunc066D_0047:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc066D_00EB;
	var0006 = UI_get_object_position(var0005);
	var0007 = var0006[0x0001];
	var0008 = var0006[0x0002];
	var0009 = var0006[0x0003];
	var000A = [var0007, var0008, 0x0000];
	var000B = UI_create_new_object(0x0231);
	if (!var000B) goto labelFunc066D_00E8;
	var0002 = UI_update_last_created(var000A);
	if (!var0002) goto labelFunc066D_00E8;
	var000C = UI_die_roll(0x0001, 0x000F);
	var000D = (0x001E + var000C);
	var0002 = UI_set_item_quality(var000B, var000D);
	UI_set_item_flag(var000B, 0x0012);
	var0002 = UI_delayed_execute_usecode_array(var000B, [(byte)0x23, (byte)0x2D], var000D);
labelFunc066D_00E8:
	goto labelFunc066D_0047;
labelFunc066D_00EB:
	goto labelFunc066D_010A;
labelFunc066D_00EE:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x6C, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc066D_010A:
	return;
}


