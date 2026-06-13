#game "serpentisle"
void Func06B2 object#(0x6B2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(gflags[0x0004] != 0x0000)) goto labelFunc06B2_0072;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x0113, 0x000A, 0x0010);
	enum();
labelFunc06B2_0024:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06B2_0072;
	if (!((UI_get_item_frame(var0004) == 0x0000) || (UI_get_item_frame(var0004) == 0x0004))) goto labelFunc06B2_006F;
	var0005 = UI_die_roll(0x0001, var0000);
	if (!(var0005 < var0000)) goto labelFunc06B2_006F;
	var0006 = UI_execute_usecode_array(var0004, [(byte)0x48]);
labelFunc06B2_006F:
	goto labelFunc06B2_0024;
labelFunc06B2_0072:
	return;
}


