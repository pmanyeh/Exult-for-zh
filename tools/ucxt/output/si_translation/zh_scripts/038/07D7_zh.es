#game "serpentisle"
// externs
extern var Func098D 0x98D ();

void Func07D7 object#(0x7D7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func098D();
	enum();
labelFunc07D7_0007:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc07D7_003A;
	var0004 = UI_get_npc_id(var0003);
	if (!(var0004 == 0x001F)) goto labelFunc07D7_0037;
	UI_add_to_party(var0003);
	UI_set_npc_id(var0003, 0x0000);
labelFunc07D7_0037:
	goto labelFunc07D7_0007;
labelFunc07D7_003A:
	return;
}


