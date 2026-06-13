#game "serpentisle"
void Func082F 0x82F ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = [0x03B4, 0x03B8, 0x03B7, 0x0284, 0x0285, 0x0286, 0x02F8];
	enum();
labelFunc082F_001C:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc082F_0061;
	var0004 = UI_find_nearby(0xFE9C, var0003, 0x0014, 0x0000);
	if (!var0004) goto labelFunc082F_005E;
	var0005 = UI_set_last_created(var0004);
	var0006 = UI_get_npc_object(0xFE9C);
	var0005 = UI_give_last_created(var0006);
labelFunc082F_005E:
	goto labelFunc082F_001C;
labelFunc082F_0061:
	return;
}


