#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);
extern void Func0933 0x933 (var var0000, var var0001, var var0002);

void Func0296 shape#(0x296) ()
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

	if (!((event == 0x0001) || (event == 0x0004))) goto labelFunc0296_01C9;
	UI_close_gumps();
	var0000 = UI_click_on_item();
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x67, (byte)0x61]);
	if (!(!UI_is_water([var0000[0x0002], var0000[0x0003], var0000[0x0004]]))) goto labelFunc0296_004F;
	UI_flash_mouse(0x0000);
	return;
labelFunc0296_004F:
	var0002 = UI_get_object_position(0xFE9C);
	var0002[0x0001] = (var0002[0x0001] + 0x0001);
	var0003 = false;
	var0004 = 0x0000;
	var0005 = UI_find_nearby(0xFE9C, 0x01FD, 0x000F, 0x0000);
	enum();
labelFunc0296_0087:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0296_009F;
	var0004 = (var0004 + 0x0001);
	goto labelFunc0296_0087;
labelFunc0296_009F:
	if (!(var0004 != 0x0000)) goto labelFunc0296_00BE;
	if (!(UI_die_roll(0x0001, 0x000A) <= var0004)) goto labelFunc0296_00BE;
	var0003 = true;
labelFunc0296_00BE:
	if (!var0003) goto labelFunc0296_014E;
	var0008 = UI_create_new_object(0x0179);
	if (!var0008) goto labelFunc0296_014B;
	UI_set_item_frame(var0008, 0x000C);
	UI_set_item_flag(var0008, 0x000B);
	var0001 = UI_update_last_created(var0002);
	var0009 = UI_die_roll(0x0001, 0x0003);
	if (!(var0009 == 0x0001)) goto labelFunc0296_0125;
	Func08FE("@Indded, a whopper!@");
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc0296_0125;
	Func0933(0xFFFE, "@I have seen bigger.@", 0x0010);
labelFunc0296_0125:
	if (!(var0009 == 0x0002)) goto labelFunc0296_0135;
	Func08FE("@What a meal!@");
labelFunc0296_0135:
	if (!(var0009 == 0x0003)) goto labelFunc0296_014B;
	Func08FE(["@That fish does not", "look right.@"]);
labelFunc0296_014B:
	goto labelFunc0296_01C9;
labelFunc0296_014E:
	var0009 = UI_die_roll(0x0001, 0x0004);
	if (!(var0009 == 0x0001)) goto labelFunc0296_0171;
	Func0933(0xFE9C, "@Not even a bite!@", 0x0000);
labelFunc0296_0171:
	if (!(var0009 == 0x0002)) goto labelFunc0296_019D;
	Func0933(0xFE9C, "@It got away!@", 0x0000);
	if (!UI_npc_nearby(0xFFFF)) goto labelFunc0296_019D;
	Func0933(0xFFFF, "@It was the Big One!@", 0x0010);
labelFunc0296_019D:
	if (!(var0009 == 0x0003)) goto labelFunc0296_01B3;
	Func0933(0xFE9C, "@I've lost my bait.@", 0x0000);
labelFunc0296_01B3:
	if (!(var0009 == 0x0004)) goto labelFunc0296_01C9;
	Func0933(0xFE9C, "@I felt a nibble.@", 0x0000);
labelFunc0296_01C9:
	return;
}


