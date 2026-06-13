#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func067C object#(0x67C) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc067C_005B;
	UI_halt_scheduled(item);
	UI_item_say(item, "Kal Frio Xen");
	if (!Func0951()) goto labelFunc067C_003F;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x58, 0x0014, (byte)0x55, 0x067C]);
	goto labelFunc067C_005B;
labelFunc067C_003F:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc067C_005B:
	if (!(event == 0x0002)) goto labelFunc067C_006E;
	var0000 = UI_summon(0x02FB, true);
labelFunc067C_006E:
	return;
}


