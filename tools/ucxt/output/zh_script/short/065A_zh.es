#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func065A object#(0x65A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc065A_004F;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Kal Bet Xen@");
	if (!Func0906()) goto labelFunc065A_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x58, 0x0041, (byte)0x55, 0x065A]);
	goto labelFunc065A_004F;
labelFunc065A_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc065A_004F:
	if (!(event == 0x0002)) goto labelFunc065A_008C;
	var0001 = UI_die_roll(0x0007, 0x000A);
labelFunc065A_0064:
	if (!(var0001 > 0x0000)) goto labelFunc065A_008C;
	var0001 = (var0001 - 0x0001);
	var0002 = 0x0205;
	var0003 = UI_summon(var0002, false);
	goto labelFunc065A_0064;
labelFunc065A_008C:
	return;
}


