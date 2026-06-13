#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0710 object#(0x710) ()
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

	var0000 = UI_get_party_list();
	var0001 = 0x001E;
	var0002 = 0xFE9C;
	enum();
labelFunc0710_0014:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc0710_00A3;
	var0006 = UI_get_distance(var0005, item);
	if (!(var0006 < var0001)) goto labelFunc0710_00A0;
	if (!UI_get_item_flag(0xFE9C, 0x0023)) goto labelFunc0710_0072;
	if (!((var0005 != 0xFE9C) && ((var0005 != UI_get_npc_object(0xFE9C)) && (UI_get_item_shape(var0005) != 0x02EB)))) goto labelFunc0710_006F;
	var0001 = var0006;
	var0002 = var0005;
labelFunc0710_006F:
	goto labelFunc0710_00A0;
labelFunc0710_0072:
	if (!((var0005 != 0xFFE4) && ((var0005 != UI_get_npc_object(0xFFE4)) && (UI_get_item_shape(var0005) != 0x02EB)))) goto labelFunc0710_00A0;
	var0001 = var0006;
	var0002 = var0005;
labelFunc0710_00A0:
	goto labelFunc0710_0014;
labelFunc0710_00A3:
	if (!(var0002 != 0xFE9C)) goto labelFunc0710_00BA;
	UI_reduce_health(var0002, 0x0005, 0x0005);
labelFunc0710_00BA:
	gflags[0x0226] = true;
	if (!(UI_die_roll(0x0001, 0x0003) == 0x0002)) goto labelFunc0710_00DF;
	var0007 = Func0992(0xFFE4, "@Acid!@", "@Acid!@", true);
labelFunc0710_00DF:
	var0008 = UI_get_object_position(var0002);
	var0009 = UI_create_new_object(0x0390);
	if (!var0009) goto labelFunc0710_010D;
	UI_set_item_frame(var0009, 0x0018);
	var0007 = UI_update_last_created(var0008);
labelFunc0710_010D:
	return;
}


