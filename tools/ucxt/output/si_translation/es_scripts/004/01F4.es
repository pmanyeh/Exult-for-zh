#game "serpentisle"
// externs
extern var Func098E 0x98E ();

void Func01F4 shape#(0x1F4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc01F4_0059;
	var0000 = Func098E();
	enum();
labelFunc01F4_000F:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc01F4_0059;
	var0004 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x52, "@Moo!@"], UI_die_roll(0x0001, 0x000A));
	var0004 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x52, "@Moo!@"], UI_die_roll(0x0015, 0x001E));
	goto labelFunc01F4_000F;
labelFunc01F4_0059:
	if (!(event == 0x0000)) goto labelFunc01F4_0073;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Moo!@"]);
labelFunc01F4_0073:
	return;
}


