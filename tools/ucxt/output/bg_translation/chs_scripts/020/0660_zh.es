#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern var Func08F6 0x8F6 (var var0000);

void Func0660 object#(0x660) ()
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

	if (!(event == 0x0001)) goto labelFunc0660_004F;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Kal Xen@");
	if (!Func0906()) goto labelFunc0660_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0660]);
	goto labelFunc0660_004F;
labelFunc0660_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0660_004F:
	if (!(event == 0x0002)) goto labelFunc0660_0104;
	var0001 = [0x02CC, 0x032B, 0x020B, 0x01FE, 0x0212, 0x01F6, 0x0219];
	var0002 = UI_get_array_size(var0001);
	var0003 = Func08F6(0xFE9C);
	if (!(var0003 > var0002)) goto labelFunc0660_0095;
	var0003 = var0002;
labelFunc0660_0095:
	if (!(var0003 < 0x0002)) goto labelFunc0660_00A5;
	var0003 = 0x0002;
labelFunc0660_00A5:
	var0004 = (var0003 / 0x0002);
	if (!(var0004 < 0x0001)) goto labelFunc0660_00BF;
	var0004 = 0x0001;
labelFunc0660_00BF:
	var0005 = UI_die_roll(var0004, var0003);
labelFunc0660_00CC:
	if (!(var0005 > 0x0000)) goto labelFunc0660_0104;
	var0005 = (var0005 - 0x0001);
	var0006 = UI_die_roll(var0004, var0003);
	var0007 = var0001[var0006];
	var0008 = UI_summon(var0007, false);
	goto labelFunc0660_00CC;
labelFunc0660_0104:
	return;
}


