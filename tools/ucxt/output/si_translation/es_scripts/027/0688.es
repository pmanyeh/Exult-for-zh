#game "serpentisle"
// externs
extern var Func0941 0x941 (var var0000);

void Func0688 object#(0x688) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	var0000 = [];
	var0001 = (0x000A + Func0941(0xFE9C));
	var0002 = UI_find_nearby(item, 0xFE99, var0001, 0x0008);
	var0003 = UI_get_party_list();
	var0004 = [];
	enum();
labelFunc0688_0032:
	for (var0007 in var0002 with var0005 to var0006) attend labelFunc0688_0055;
	if (!(!(var0007 in var0003))) goto labelFunc0688_0052;
	var0004 = (var0004 & var0007);
labelFunc0688_0052:
	goto labelFunc0688_0032;
labelFunc0688_0055:
	var0008 = UI_get_array_size(var0004);
	var0009 = UI_die_roll(0x0001, 0x0003);
	if (!(var0009 == 0x0001)) goto labelFunc0688_00C3;
	var000A = UI_get_object_position(0xFE9C);
	var000B = (var000A[0x0001] + UI_die_roll(0xFFF4, 0x000C));
	var000C = (var000A[0x0002] + UI_die_roll(0xFFF4, 0x000C));
	var000D = var000A[0x0003];
	var0000 = [var000B, var000C, 0x0000];
	goto labelFunc0688_0111;
labelFunc0688_00C3:
	if (!(var0008 != 0x0000)) goto labelFunc0688_0111;
	var000E = UI_die_roll(0x0001, var0008);
	var000A = UI_get_object_position(var0004[var000E]);
	var000B = var000A[0x0001];
	var000C = var000A[0x0002];
	var000D = var000A[0x0003];
	var0000 = [var000B, var000C, var000D];
labelFunc0688_0111:
	if (!(var0000 != [])) goto labelFunc0688_01B9;
	var000F = UI_die_roll(0x0001, 0x0005);
	var0010 = 0x0000;
	if (!((var000F == 0x0001) || (var000F == 0x0002))) goto labelFunc0688_014A;
	var0010 = UI_create_new_object(0x037F);
labelFunc0688_014A:
	if (!((var000F == 0x0003) || (var000F == 0x0004))) goto labelFunc0688_0166;
	var0010 = UI_create_new_object(0x0231);
labelFunc0688_0166:
	if (!var0010) goto labelFunc0688_01B9;
	var000F = UI_update_last_created(var0000);
	if (!var000F) goto labelFunc0688_01B9;
	var0011 = UI_die_roll(0x0005, 0x000F);
	var000F = UI_set_item_quality(var0010, var0011);
	UI_set_item_flag(var0010, 0x0012);
	var000F = UI_delayed_execute_usecode_array(var0010, [(byte)0x23, (byte)0x55, 0x0688, (byte)0x2D], var0011);
labelFunc0688_01B9:
	return;
}


