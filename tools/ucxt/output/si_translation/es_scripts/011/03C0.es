#game "serpentisle"
// externs
extern void Func091A 0x91A (var var0000);

void Func03C0 shape#(0x3C0) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc03C0_000F;
	Func091A(0x03C0);
	abort;
labelFunc03C0_000F:
	var0000 = UI_get_npc_number(item);
	if (!((event == 0x0002) && UI_get_item_flag(var0000, 0x0024))) goto labelFunc03C0_0073;
	if (!UI_get_item_flag(var0000, 0x0006)) goto labelFunc03C0_0068;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x063D]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x03C0], UI_die_roll(0x0064, 0x00AF));
	goto labelFunc03C0_0072;
labelFunc03C0_0068:
	UI_clear_item_flag(var0000, 0x0024);
labelFunc03C0_0072:
	abort;
labelFunc03C0_0073:
	if (!((event == 0x0002) && (!UI_get_item_flag(var0000, 0x0024)))) goto labelFunc03C0_00A3;
	UI_item_say(item, "@Whoa. Bad shrooms.@");
	if (!(var0000 == 0xFE9C)) goto labelFunc03C0_00A3;
	UI_clear_item_flag(var0000, 0x0019);
labelFunc03C0_00A3:
	return;
}


