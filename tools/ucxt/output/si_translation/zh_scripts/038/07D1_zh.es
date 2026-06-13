#game "serpentisle"
// externs
extern var Func098E 0x98E ();

void Func07D1 object#(0x7D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func098E();
	enum();
labelFunc07D1_0007:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc07D1_0040;
	if (!UI_npc_nearby(var0003)) goto labelFunc07D1_003D;
	var0004 = UI_direction_from(var0003, item);
	var0005 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x61, (byte)0x59, var0004]);
labelFunc07D1_003D:
	goto labelFunc07D1_0007;
labelFunc07D1_0040:
	return;
}


