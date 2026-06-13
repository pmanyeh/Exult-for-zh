#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func08AA 0x8AA ()
{
	var var0000;

	if (!gflags[0x01B6]) goto labelFunc08AA_0007;
	abort;
labelFunc08AA_0007:
	if (!(gflags[0x018F] && (gflags[0x015D] && (gflags[0x0190] && ((((((((((((UI_get_item_flag(0xFFD2, 0x001C) + UI_get_item_flag(0xFFD1, 0x001C)) + UI_get_item_flag(0xFFD0, 0x001C)) + UI_get_item_flag(0xFFCD, 0x001C)) + UI_get_item_flag(0xFFCC, 0x001C)) + UI_get_item_flag(0xFFCB, 0x001C)) + UI_get_item_flag(0xFFCA, 0x001C)) + UI_get_item_flag(0xFFC6, 0x001C)) + UI_get_item_flag(0xFFCF, 0x001C)) + UI_get_item_flag(0xFFCE, 0x001C)) + UI_get_item_flag(0xFFC3, 0x001C)) > 0x0004) && UI_npc_nearby(0xFFFD)))))) goto labelFunc08AA_00BB;
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0435], 0x00C8);
	gflags[0x01B6] = true;
labelFunc08AA_00BB:
	return;
}


