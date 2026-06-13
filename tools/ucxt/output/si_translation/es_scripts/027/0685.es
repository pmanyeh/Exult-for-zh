#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func0977 0x977 (var var0000);

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

	if (!(event == 0x0001)) goto labelFunc0685_005B;
	UI_halt_scheduled(item);
	UI_item_say(item, "Kal Vas Xen");
	if (!Func0951()) goto labelFunc0685_003F;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x58, 0x0014, (byte)0x55, 0x0685]);
	goto labelFunc0685_005B;
labelFunc0685_003F:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0685_005B:
	if (!(event == 0x0002)) goto labelFunc0685_015D;
	var0001 = [0x0210, 0x0151, 0x0215, 0x01F5, 0x0202, 0x0295, 0x02C2];
	var0002 = [0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005];
	var0003 = [0x0005, 0x0005, 0x0001, 0x0002, 0x0003, 0x0005, 0x0002];
	var0004 = Func0977(var0001);
labelFunc0685_00BD:
	var0005 = UI_die_roll(0x0001, var0004);
	var0006 = UI_die_roll(0x0001, 0x0064);
	if (!(var0002[var0005] < var0006)) goto labelFunc0685_00E7;
	goto labelFunc0685_00BD;
labelFunc0685_00E7:
	var0007 = var0003[var0005];
	var0008 = (var0007 / 0x0002);
	if (!(var0008 < 0x0001)) goto labelFunc0685_010A;
	var0008 = 0x0001;
labelFunc0685_010A:
	var0009 = UI_die_roll(0x0001, var0008);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc0685_0132;
	var0009 = (0xFFFF * var0009);
labelFunc0685_0132:
	var0007 = (var0007 + var0009);
labelFunc0685_013C:
	if (!var0007) goto labelFunc0685_015D;
	var0000 = UI_summon(var0001[var0005], true);
	var0007 = (var0007 - 0x0001);
	goto labelFunc0685_013C;
labelFunc0685_015D:
	return;
}


