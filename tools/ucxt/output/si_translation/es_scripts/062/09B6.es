#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();

void Func09B6 0x9B6 (var var0000, var var0001)
{
	var var0002;

	if (!((event == 0x0001) || ((event == 0x000D) || (event == 0x000E)))) goto labelFunc09B6_0052;
	if (!gflags[0x002A]) goto labelFunc09B6_001B;
	abort;
labelFunc09B6_001B:
	gflags[0x002A] = true;
	item->Func07D1();
	UI_obj_sprite_effect(item, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0207], 0x000A);
labelFunc09B6_0052:
	if (!(event == 0x0002)) goto labelFunc09B6_0113;
	if (!(var0000 == 0x01EF)) goto labelFunc09B6_008C;
	var0000 = UI_create_new_object2(var0000, var0001);
	UI_set_item_flag(var0000, 0x0012);
	UI_set_polymorph(var0000, 0x00EF);
	gflags[0x000D] = true;
	goto labelFunc09B6_00E0;
labelFunc09B6_008C:
	if (!(var0000 == 0x013E)) goto labelFunc09B6_00B0;
	var0000 = UI_create_new_object2(0x013E, var0001);
	UI_set_item_flag(var0000, 0x0012);
	goto labelFunc09B6_00E0;
labelFunc09B6_00B0:
	UI_move_object(var0000, var0001);
	if (!(var0000 != 0xFEF8)) goto labelFunc09B6_00E0;
	UI_set_new_schedules(var0000, 0x0000, 0x001D, [var0001[0x0001], var0001[0x0002]]);
labelFunc09B6_00E0:
	UI_set_schedule_type(var0000, 0x001D);
	UI_set_camera(var0000);
	UI_end_conversation();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_ambient_light(0x0000);
labelFunc09B6_0113:
	return;
}


