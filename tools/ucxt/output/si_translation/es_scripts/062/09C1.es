#game "serpentisle"
void Func09C1 0x9C1 ()
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

	var0000 = UI_find_nearby(item, 0x020A, 0x0028, 0x00B0);
	var0001 = UI_get_array_size(var0000);
	if (!(var0001 > 0x0000)) goto labelFunc09C1_0118;
	var0002 = [0x02C7, 0x025C, 0x03B7, 0x03B8, 0x03A9, 0x025D, 0x025E, 0x022C, 0x022A, 0x0225, 0x0228, 0x0275, 0x0276, 0x0288];
	var0003 = [0x0000, 0x0000, 0x00FA, 0x00FA, 0x0000, 0x0000, 0x0000, 0x00C8, 0x00C8, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000];
	var0004 = [0x0000, 0x000A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x00FF, 0x00FF, 0x0000];
	var0005 = 0x0000;
	enum();
labelFunc09C1_00BC:
	for (var0008 in var0002 with var0006 to var0007) attend labelFunc09C1_0118;
	var0005 = (var0005 + 0x0001);
	var0009 = UI_create_new_object(var0008);
	if (!var0009) goto labelFunc09C1_0115;
	var000A = UI_set_item_quality(var0009, var0004[var0005]);
	var000A = UI_set_item_quantity(var0009, var0003[var0005]);
	var000A = UI_give_last_created(var0000[UI_die_roll(0x0001, var0001)]);
labelFunc09C1_0115:
	goto labelFunc09C1_00BC;
labelFunc09C1_0118:
	return;
}


