#game "blackgate"
void Func01F4 shape#(0x1F4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc01F4_005A;
	var0000 = UI_get_party_list();
	enum();
labelFunc01F4_0010:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc01F4_005A;
	var0004 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x52, "@Moo!@"], UI_die_roll(0x0001, 0x000A));
	var0004 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x52, "@Moo!@"], UI_die_roll(0x0015, 0x001E));
	goto labelFunc01F4_0010;
labelFunc01F4_005A:
	if (!(event == 0x0000)) goto labelFunc01F4_006A;
	UI_item_say(item, "@Moo@");
labelFunc01F4_006A:
	return;
}


