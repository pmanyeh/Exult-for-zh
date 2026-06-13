#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern void Func0933 0x933 (var var0000, var var0001, var var0002);

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

	if (!(event == 0x0001)) goto labelFunc035F_0152;
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
	Func08FF("@Why not put the flour on the table first?@");
	goto labelFunc035F_00ED;
labelFunc035F_00B6:
	var0007 = UI_create_new_object(0x0292);
	if (!var0007) goto labelFunc035F_00ED;
	UI_set_item_flag(var0007, 0x0012);
	UI_set_item_frame(var0007, 0x0000);
	var0008 = UI_update_last_created([var0004, var0005, var0006]);
labelFunc035F_00ED:
	if (!((var0000 == 0x0008) || (var0000 == 0x0009))) goto labelFunc035F_0138;
	var0001 = UI_click_on_item();
	if (!(UI_get_item_shape(var0001) == 0x0292)) goto labelFunc035F_012C;
	if (!(UI_get_item_frame(var0001) == 0x0002)) goto labelFunc035F_012C;
	UI_set_item_frame(var0001, 0x0001);
labelFunc035F_012C:
	Func0933(var0001, "@Hey! That really hurt!@", 0x0000);
labelFunc035F_0138:
	if (!((var0000 == 0x000D) || (var0000 == 0x000E))) goto labelFunc035F_0152;
	UI_set_item_frame(item, 0x0000);
labelFunc035F_0152:
	return;
}


