#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func06AD object#(0x6AD) ()
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

	if (!(event == 0x0003)) goto labelFunc06AD_00A1;
	if (!(!gflags[0x00C8])) goto labelFunc06AD_0010;
	abort;
labelFunc06AD_0010:
	var0000 = UI_find_nearby(item, 0x0268, 0x0001, 0x0000);
	enum();
labelFunc06AD_0022:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06AD_004A;
	if (!(UI_get_item_frame(var0003) != 0x0007)) goto labelFunc06AD_0047;
	var0000 = Func0988(var0003, var0000);
labelFunc06AD_0047:
	goto labelFunc06AD_0022;
labelFunc06AD_004A:
	if (!(UI_get_array_size(var0000) == 0x0000)) goto labelFunc06AD_00A1;
	gflags[0x0045] = true;
	UI_set_alignment(0xFFB4, 0x0003);
	UI_set_item_flag(0xFFB4, 0x001D);
	var0004 = Func0992(0x0001, "@A clue...@", "@A clue...@", true);
	if (!(var0004 != 0xFE9C)) goto labelFunc06AD_00A1;
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x06AD], 0x000A);
labelFunc06AD_00A1:
	if (!(event == 0x0002)) goto labelFunc06AD_0128;
	var0006 = UI_find_nearby(item, 0x0113, 0x0014, 0x0010);
	enum();
labelFunc06AD_00BB:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc06AD_00DE;
	if (!(UI_get_item_frame(var0009) == 0x0007)) goto labelFunc06AD_00DB;
	UI_remove_item(var0009);
labelFunc06AD_00DB:
	goto labelFunc06AD_00BB;
labelFunc06AD_00DE:
	var0004 = UI_get_npc_number(item);
	if (!(UI_get_item_shape(var0004) == 0x02EB)) goto labelFunc06AD_0101;
	UI_show_npc_face0(0xFED6, 0x0000);
	goto labelFunc06AD_010B;
labelFunc06AD_0101:
	UI_show_npc_face0(var0004, 0x0000);
labelFunc06AD_010B:
	if (!gflags[0x00B8]) goto labelFunc06AD_0120;
	message("\"Avatar! This bottle is identical to the one from which thou didst drink at the inn in Monitor!\"");
	say();
	message("\"'Tis a bottle of Fawnish ale.\"");
	say();
	gflags[0x005F] = true;
	goto labelFunc06AD_0128;
labelFunc06AD_0120:
	message("\"I cannot help but think that this strange bottle must be a clue as to the identity of Monitor's traitor.\"");
	say();
	message("\"Perhaps if we can find whom this bottle doth belong to, we shall find our traitor!\"");
	say();
labelFunc06AD_0128:
	return;
}


