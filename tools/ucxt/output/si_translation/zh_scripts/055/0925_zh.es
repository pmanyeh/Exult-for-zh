#game "serpentisle"
void Func0925 0x925 ()
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

	var0000 = UI_find_nearby(item, 0x02CE, 0x000A, 0x0000);
	var0001 = UI_find_nearby(var0000, 0x034A, 0x0003, 0x0000);
	var0002 = [0x0000, 0x0000, 0x0000];
	enum();
labelFunc0925_0034:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0925_00C4;
	if (!(UI_get_item_frame(var0005) == 0x000B)) goto labelFunc0925_0068;
	var0002[0x0001] = (var0002[0x0001] + UI_get_item_quantity(var0005, 0x0000));
	var0006 = true;
labelFunc0925_0068:
	if (!(UI_get_item_frame(var0005) == 0x000C)) goto labelFunc0925_0091;
	var0002[0x0002] = (var0002[0x0002] + UI_get_item_quantity(var0005, 0x0000));
	var0007 = true;
labelFunc0925_0091:
	if (!(UI_get_item_frame(var0005) == 0x000D)) goto labelFunc0925_00BA;
	var0002[0x0003] = (var0002[0x0003] + UI_get_item_quantity(var0005, 0x0000));
	var0008 = true;
labelFunc0925_00BA:
	UI_remove_item(var0005);
	goto labelFunc0925_0034;
labelFunc0925_00C4:
	if (!(var0006 && (var0007 && var0008))) goto labelFunc0925_0183;
	var0009 = var0002[0x0001];
	if (!(var0002[0x0002] < var0009)) goto labelFunc0925_00F1;
	var0009 = var0002[0x0002];
labelFunc0925_00F1:
	if (!(var0002[0x0003] < var0009)) goto labelFunc0925_0107;
	var0009 = var0002[0x0003];
labelFunc0925_0107:
	var000A = UI_get_object_position(var0000);
	var000A[0x0003] = 0x0002;
	var000B = UI_create_new_object(0x034A);
	if (!var000B) goto labelFunc0925_014B;
	UI_set_item_frame(var000B, 0x000E);
	var000C = UI_set_item_quantity(var000B, var0009);
	var000C = UI_update_last_created(var000A);
labelFunc0925_014B:
	var000D = UI_create_new_object(0x0231);
	if (!var000D) goto labelFunc0925_016F;
	UI_set_item_frame(var000D, 0x0000);
	var000C = UI_update_last_created(var000A);
labelFunc0925_016F:
	var000C = UI_delayed_execute_usecode_array(var000D, [(byte)0x23, (byte)0x2D], 0x0019);
labelFunc0925_0183:
	var0006 = false;
	var0007 = false;
	var0008 = false;
	abort;
	return;
}


