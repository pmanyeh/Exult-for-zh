#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0760 object#(0x760) ()
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

	var0000 = [0x0225];
	var0001 = UI_find_nearby(item, var0000, 0x0002, 0x0000);
	var0002 = UI_get_object_position(var0001);
	if (!var0001) goto labelFunc0760_0143;
	Func095D(0x0064);
	UI_remove_item(var0001);
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0019, var0002[0x0001], var0002[0x0002], 0x0001, 0x0000, 0x0000, 0xFFFF);
	var0003 = UI_find_nearby(item, 0x0121, 0x0006, 0x0000);
	enum();
labelFunc0760_006F:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0760_0084;
	UI_remove_item(var0006);
	goto labelFunc0760_006F;
labelFunc0760_0084:
	var0007 = UI_create_new_object(0x0121);
	if (!var0007) goto labelFunc0760_00B1;
	var0008 = UI_update_last_created([0x09B8, 0x0B5C, 0x0001]);
	UI_set_item_frame(var0007, 0x0000);
labelFunc0760_00B1:
	var0009 = UI_find_nearby(item, 0x0300, 0x000C, 0x0000);
	enum();
labelFunc0760_00C3:
	for (var000C in var0009 with var000A to var000B) attend labelFunc0760_00FE;
	UI_play_sound_effect(0x0021);
	UI_remove_item(var000C);
	UI_sprite_effect(0x0020, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0760_00C3;
labelFunc0760_00FE:
	var000D = UI_find_nearby(0xFE9C, 0x0113, 0x0010, 0x0010);
	enum();
labelFunc0760_0112:
	for (var0010 in var000D with var000E to var000F) attend labelFunc0760_013B;
	var0011 = UI_get_item_frame(var0010);
	if (!(var0011 == 0x0000)) goto labelFunc0760_0138;
	UI_remove_item(var0010);
labelFunc0760_0138:
	goto labelFunc0760_0112;
labelFunc0760_013B:
	UI_remove_item(item);
	goto labelFunc0760_0171;
labelFunc0760_0143:
	var0002 = UI_get_object_position(item);
	UI_sprite_effect(0x0009, var0002[0x0001], var0002[0x0002], 0x0001, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
labelFunc0760_0171:
	return;
}


