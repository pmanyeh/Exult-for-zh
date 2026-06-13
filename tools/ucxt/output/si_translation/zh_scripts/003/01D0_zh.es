#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);

void Func01D0 shape#(0x1D0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!gflags[0x00BF]) goto labelFunc01D0_0007;
	abort;
labelFunc01D0_0007:
	var0000 = UI_set_npc_prop(item, 0x0003, 0x0005);
	if (!(UI_get_array_size(UI_find_nearby(0xFE9C, 0x00E4, 0x001E, 0x0000)) > 0x0006)) goto labelFunc01D0_0031;
	abort;
labelFunc01D0_0031:
	var0001 = UI_create_new_object2(0x00E4, [0x0000, 0x0000, 0x0000]);
	if (!var0001) goto labelFunc01D0_008F;
	var0000 = UI_approach_avatar(var0001, 0x005A, 0x0028);
	if (!var0000) goto labelFunc01D0_008F;
	Func09AD(var0001);
	var0002 = UI_get_party_list();
	enum();
labelFunc01D0_0071:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc01D0_008F;
	UI_set_opponent(item, var0001);
	UI_set_oppressor(item, var0001);
	goto labelFunc01D0_0071;
labelFunc01D0_008F:
	UI_set_item_flag(item, 0x0001);
	return;
}


