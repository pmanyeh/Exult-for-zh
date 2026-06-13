#game "serpentisle"
// externs
extern var Func09A6 0x9A6 (var var0000);

void Func08B3 0x8B3 (var var0000)
{
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

	abort;
	var0001 = UI_find_nearby(0xFFB5, 0x0320, 0x0064, 0x0000);
	var0002 = 0x0000;
	enum();
labelFunc08B3_001B:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc08B3_003D;
	if (!(UI_get_item_quality(var0005) == 0x0000)) goto labelFunc08B3_003A;
	var0002 = var0005;
labelFunc08B3_003A:
	goto labelFunc08B3_001B;
labelFunc08B3_003D:
	if (!(var0002 == 0x0000)) goto labelFunc08B3_0082;
	var0006 = UI_create_new_object(0x0320);
	if (!var0006) goto labelFunc08B3_007B;
	var0007 = UI_set_item_quality(var0006, 0x0000);
	var0007 = UI_update_last_created(UI_get_object_position(0xFE9C));
	var0002 = var0006;
	goto labelFunc08B3_0082;
labelFunc08B3_007B:
	UI_error_message("backup chest creation failed.");
labelFunc08B3_0082:
	var0008 = 0x0000;
	var0009 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
labelFunc08B3_009B:
	if (!(var0008 < 0x0002)) goto labelFunc08B3_0130;
	enum();
labelFunc08B3_00A6:
	for (var000C in var0009 with var000A to var000B) attend labelFunc08B3_0110;
	if (!(Func09A6(var000C) || (var0008 == 0x0001))) goto labelFunc08B3_010D;
	var000D = UI_get_item_shape(var000C);
	if (!(!((var000D == 0x01E6) || ((var000D == 0x025F) || (var000D in var0000))))) goto labelFunc08B3_010D;
	if (!(!UI_set_last_created(var000C))) goto labelFunc08B3_00FA;
	UI_error_message(" failed the push!");
	abort;
labelFunc08B3_00FA:
	if (!(!UI_give_last_created(var0002))) goto labelFunc08B3_010D;
	UI_error_message(" failed the pop!");
	abort;
labelFunc08B3_010D:
	goto labelFunc08B3_00A6;
labelFunc08B3_0110:
	var0008 = (var0008 + 0x0001);
	var0009 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc08B3_009B;
labelFunc08B3_0130:
	return;
}


