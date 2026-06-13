#game "serpentisle"
void Func09B7 0x9B7 ()
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

	var0000 = [0xFF85, 0xFF86, 0xFF87, 0xFF88, 0xFF89];
	var0001 = 0x0000;
	enum();
labelFunc09B7_001C:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc09B7_003B;
	var0001 = (var0001 + UI_get_item_flag(var0004, 0x0004));
	goto labelFunc09B7_001C;
labelFunc09B7_003B:
	if (!(var0001 == (UI_get_array_size(var0000) - 0x0001))) goto labelFunc09B7_005A;
	gflags[0x014E] = true;
	var0005 = "@Damn thee!@";
	goto labelFunc09B7_0060;
labelFunc09B7_005A:
	var0005 = "@Grok...@";
labelFunc09B7_0060:
	var0006 = UI_get_object_position(item);
	UI_set_item_flag(item, 0x0004);
	UI_remove_npc(item);
	var0007 = UI_create_new_object(0x019E);
	if (!var0007) goto labelFunc09B7_014E;
	UI_set_item_frame(var0007, 0x0004);
	UI_set_item_flag(var0007, 0x0012);
	var0008 = UI_add_cont_items(var0007, 0x0001, 0x024B, 0x0000, 0x0006, true);
	var0008 = UI_add_cont_items(var0007, 0x0001, 0x0344, 0x0000, 0x0000, true);
	var0009 = UI_die_roll(0x0001, 0x0009);
	if (!(var0009 > 0x0005)) goto labelFunc09B7_0116;
	var0008 = UI_add_cont_items(var0007, 0x0001, 0x025D, 0x0000, 0x0000, true);
	var0008 = UI_add_cont_items(var0007, var0009, 0x0179, 0x0000, UI_die_roll(0x0001, 0x0008), true);
	goto labelFunc09B7_0144;
labelFunc09B7_0116:
	var0008 = UI_add_cont_items(var0007, 0x0001, 0x0268, 0x0004, 0x0006, true);
	var0008 = UI_add_cont_items(var0007, var0009, 0x0250, 0x0000, 0x0000, true);
labelFunc09B7_0144:
	var0008 = UI_update_last_created(var0006);
labelFunc09B7_014E:
	if (!(var0007 && var0008)) goto labelFunc09B7_016C;
	var0008 = UI_execute_usecode_array(var0007, [(byte)0x23, (byte)0x52, var0005]);
labelFunc09B7_016C:
	return;
}


