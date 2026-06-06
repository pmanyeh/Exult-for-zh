#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern var Func092B 0x92B (var var0000);

void Func0685 object#(0x685) ()
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

	if (!(event == 0x0001)) goto labelFunc0685_0057;
	UI_halt_scheduled(item);
	UI_item_say(item, "Kal Vas Xen");
	if (!Func0906()) goto labelFunc0685_003D;
	var0000 = UI_execute_usecode_array(item, [(byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x58, 0x0041, (byte)0x55, 0x0685]);
	goto labelFunc0685_0057;
labelFunc0685_003D:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0685_0057:
	if (!(event == 0x0002)) goto labelFunc0685_018F;
	var0001 = [0x0210, 0x01F8, 0x0151, 0x0215, 0x009A, 0x01F5, 0x01F9, 0x0373, 0x0112, 0x0202, 0x0162, 0x0295, 0x02C2];
	var0002 = [0x0005, 0x000F, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x000E, 0x0005, 0x000A, 0x0005, 0x0005];
	var0003 = [0x0005, 0x0001, 0x0005, 0x0001, 0x0002, 0x0002, 0x0002, 0x0001, 0x0001, 0x0003, 0x0001, 0x0005, 0x0002];
	var0004 = Func092B(var0001);
labelFunc0685_00EF:
	var0005 = UI_die_roll(0x0001, var0004);
	var0006 = UI_die_roll(0x0001, 0x0064);
	if (!(var0002[var0005] < var0006)) goto labelFunc0685_0119;
	goto labelFunc0685_00EF;
labelFunc0685_0119:
	var0007 = var0003[var0005];
	var0008 = (var0007 / 0x0002);
	if (!(var0008 < 0x0001)) goto labelFunc0685_013C;
	var0008 = 0x0001;
labelFunc0685_013C:
	var0009 = UI_die_roll(0x0001, var0008);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc0685_0164;
	var0009 = (0xFFFF * var0009);
labelFunc0685_0164:
	var0007 = (var0007 + var0009);
labelFunc0685_016E:
	if (!var0007) goto labelFunc0685_018F;
	var0000 = UI_summon(var0001[var0005], true);
	var0007 = (var0007 - 0x0001);
	goto labelFunc0685_016E;
labelFunc0685_018F:
	return;
}


