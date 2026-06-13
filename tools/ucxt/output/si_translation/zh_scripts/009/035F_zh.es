#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0949 0x949 (var var0000);

void Func035F shape#(0x35F) ()
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

	if (!(event == 0x0001)) goto labelFunc035F_01FD;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc035F_00ED;
	var0001 = UI_click_on_item();
	var0002 = UI_get_object_position(var0001);
	var0003 = UI_get_item_shape(var0001);
	var0004 = 0xFFFF;
	if (!(var0003 == 0x03FA)) goto labelFunc035F_006F;
	var0004 = (var0002[0x0001] - UI_die_roll(0x0000, 0x0003));
	var0005 = var0002[0x0002];
	var0006 = (var0002[0x0003] + 0x0002);
labelFunc035F_006F:
	if (!(var0003 == 0x03EB)) goto labelFunc035F_00A3;
	var0004 = var0002[0x0001];
	var0005 = (var0002[0x0002] - UI_die_roll(0x0000, 0x0002));
	var0006 = (var0002[0x0003] + 0x0002);
labelFunc035F_00A3:
	if (!(var0004 == 0xFFFF)) goto labelFunc035F_00B6;
	Func094A("@Do not pour flour on that!@");
	goto labelFunc035F_00ED;
labelFunc035F_00B6:
	var0007 = UI_create_new_object(0x035F);
	if (!var0007) goto labelFunc035F_00ED;
	UI_set_item_flag(var0007, 0x0012);
	UI_set_item_frame(var0007, 0x0010);
	var0008 = UI_update_last_created([var0004, var0005, var0006]);
labelFunc035F_00ED:
	if (!((var0000 == 0x0008) || (var0000 == 0x0009))) goto labelFunc035F_013B;
	var0001 = UI_click_on_item();
	if (!(UI_get_item_shape(var0001) == 0x035F)) goto labelFunc035F_012F;
	if (!(UI_get_item_frame(var0001) == 0x0012)) goto labelFunc035F_012C;
	UI_set_item_frame(var0001, 0x0011);
labelFunc035F_012C:
	goto labelFunc035F_013B;
labelFunc035F_012F:
	Func097F(var0001, "@Zounds! That did hurt!@", 0x0000);
labelFunc035F_013B:
	if (!((var0000 == 0x000D) || (var0000 == 0x000E))) goto labelFunc035F_0155;
	UI_set_item_frame(item, 0x0000);
labelFunc035F_0155:
	if (!((var0000 == 0x0011) || (var0000 == 0x0012))) goto labelFunc035F_01FD;
	var0001 = UI_click_on_item();
	var0009 = UI_get_item_shape(var0001);
	if (!(var0009 == 0x033F)) goto labelFunc035F_01FD;
	var0008 = UI_set_last_created(item);
	if (!var0008) goto labelFunc035F_01FD;
	var0002 = UI_get_object_position(var0001);
	var0002[0x0001] = (var0002[0x0001] - UI_die_roll(0x0001, 0x0002));
	var0002[0x0003] = (var0002[0x0003] + 0x0001);
	var0008 = UI_update_last_created(var0002);
	if (!var0008) goto labelFunc035F_01FD;
	var0008 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x035F], 0x003C);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc035F_01FD;
	Func0949("@Do not thou overcook it!@");
labelFunc035F_01FD:
	if (!(event == 0x0002)) goto labelFunc035F_0290;
	var0002 = UI_get_object_position(item);
	var000A = UI_find_nearby(item, 0x033F, 0x0002, 0x0000);
	if (!(UI_get_array_size(var000A) > 0x0000)) goto labelFunc035F_0290;
	UI_remove_item(item);
	var000B = UI_create_new_object(0x0179);
	if (!var000B) goto labelFunc035F_0290;
	UI_set_item_flag(var000B, 0x0012);
	UI_set_item_frame(item, 0x0000);
	var0008 = UI_update_last_created(var0002);
	if (!var0008) goto labelFunc035F_0290;
	var000C = UI_die_roll(0x0001, 0x0003);
	if (!(var000C == 0x0001)) goto labelFunc035F_0280;
	Func0949("@I believe the bread is ready.@");
labelFunc035F_0280:
	if (!(var000C == 0x0002)) goto labelFunc035F_0290;
	Func0949("@Mmm... 'Tis a wonderful aroma.@");
labelFunc035F_0290:
	return;
}


