#game "serpentisle"
void Func06AB object#(0x6AB) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0003)) goto labelFunc06AB_0065;
	var0000 = UI_find_nearby(item, 0x0113, 0x0014, 0x0010);
	enum();
labelFunc06AB_001A:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06AB_0065;
	var0004 = UI_get_item_frame(var0003);
	if (!(var0004 == 0x0000)) goto labelFunc06AB_0062;
	var0005 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x48]);
	var0005 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x06AB], 0x0005);
	abort;
labelFunc06AB_0062:
	goto labelFunc06AB_001A;
labelFunc06AB_0065:
	if (!(event == 0x0002)) goto labelFunc06AB_00B8;
	var0006 = UI_find_nearby(item, 0x0215, 0x0014, 0x0000);
	if (!var0006) goto labelFunc06AB_00B8;
	UI_set_npc_id(var0006[0x0001], 0x0001);
	UI_set_item_flag(var0006[0x0001], 0x001D);
	UI_set_npc_id(var0006[0x0002], 0x0002);
	UI_set_item_flag(var0006[0x0002], 0x001D);
labelFunc06AB_00B8:
	return;
}


