#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);

void Func06B9 object#(0x6B9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_find_nearby(item, 0x02EB, 0x0014, 0x0000);
	enum();
labelFunc06B9_0012:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06B9_0039;
	if (!UI_get_item_flag(var0003, 0x001E)) goto labelFunc06B9_0036;
	var0000 = Func0988(var0003, var0000);
labelFunc06B9_0036:
	goto labelFunc06B9_0012;
labelFunc06B9_0039:
	if (!var0000) goto labelFunc06B9_005F;
	var0004 = (UI_get_npc_number(var0000) + 0x0400);
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, var0004]);
labelFunc06B9_005F:
	return;
}


