#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func03A6 shape#(0x3A6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc03A6_02E5;
	var0000 = UI_get_item_frame(item);
	if (!(Func0994() == 0x000B)) goto labelFunc03A6_0037;
	var0001 = UI_create_new_object2(0x01EF, [0x0259, 0x0255, 0x0000]);
	gflags[0x0295] = true;
	goto labelFunc03A6_024E;
labelFunc03A6_0037:
	var0002 = UI_get_random(0x0008);
	if (!(var0000 == 0x0000)) goto labelFunc03A6_014E;
	if (!(var0002 == 0x0001)) goto labelFunc03A6_006B;
	var0001 = UI_create_new_object2(0x01EF, [0x0816, 0x052F, 0x0000]);
labelFunc03A6_006B:
	if (!(var0002 == 0x0002)) goto labelFunc03A6_008B;
	var0001 = UI_create_new_object2(0x01EF, [0x0258, 0x0255, 0x000E]);
labelFunc03A6_008B:
	if (!(var0002 == 0x0003)) goto labelFunc03A6_00AB;
	var0001 = UI_create_new_object2(0x01EF, [0x02BD, 0x0687, 0x0000]);
labelFunc03A6_00AB:
	if (!(var0002 == 0x0004)) goto labelFunc03A6_00CB;
	var0001 = UI_create_new_object2(0x01EF, [0x0896, 0x054D, 0x000E]);
labelFunc03A6_00CB:
	if (!(var0002 == 0x0005)) goto labelFunc03A6_00EB;
	var0001 = UI_create_new_object2(0x01EF, [0x02DB, 0x0554, 0x0000]);
labelFunc03A6_00EB:
	if (!(var0002 == 0x0006)) goto labelFunc03A6_010B;
	var0001 = UI_create_new_object2(0x01EF, [0x01B0, 0x006D, 0x000E]);
labelFunc03A6_010B:
	if (!(var0002 == 0x0007)) goto labelFunc03A6_012B;
	var0001 = UI_create_new_object2(0x01EF, [0x0419, 0x0686, 0x0000]);
labelFunc03A6_012B:
	if (!(var0002 == 0x0008)) goto labelFunc03A6_014B;
	var0001 = UI_create_new_object2(0x01EF, [0x0929, 0x07C5, 0x0000]);
labelFunc03A6_014B:
	goto labelFunc03A6_024E;
labelFunc03A6_014E:
	if (!(var0002 == 0x0001)) goto labelFunc03A6_016E;
	var0001 = UI_create_new_object2(0x01EF, [0x0507, 0x08C0, 0x0000]);
labelFunc03A6_016E:
	if (!(var0002 == 0x0002)) goto labelFunc03A6_018E;
	var0001 = UI_create_new_object2(0x01EF, [0x0896, 0x054D, 0x000E]);
labelFunc03A6_018E:
	if (!(var0002 == 0x0003)) goto labelFunc03A6_01AE;
	var0001 = UI_create_new_object2(0x01EF, [0x05C6, 0x0998, 0x0002]);
labelFunc03A6_01AE:
	if (!(var0002 == 0x0004)) goto labelFunc03A6_01CE;
	var0001 = UI_create_new_object2(0x01EF, [0x03C0, 0x0A1C, 0x000E]);
labelFunc03A6_01CE:
	if (!(var0002 == 0x0005)) goto labelFunc03A6_01EE;
	var0001 = UI_create_new_object2(0x01EF, [0x0965, 0x04A0, 0x000E]);
labelFunc03A6_01EE:
	if (!(var0002 == 0x0006)) goto labelFunc03A6_020E;
	var0001 = UI_create_new_object2(0x01EF, [0x090E, 0x0889, 0x0000]);
labelFunc03A6_020E:
	if (!(var0002 == 0x0007)) goto labelFunc03A6_022E;
	var0001 = UI_create_new_object2(0x01EF, [0x0248, 0x09B0, 0x000E]);
labelFunc03A6_022E:
	if (!(var0002 == 0x0008)) goto labelFunc03A6_024E;
	var0001 = UI_create_new_object2(0x01EF, [0x01D0, 0x04A0, 0x000E]);
labelFunc03A6_024E:
	if (!(!var0001)) goto labelFunc03A6_0266;
	var0003 = Func0992(0x0001, "@It doesn't work!@", "@'Tis broken...@", true);
	abort;
labelFunc03A6_0266:
	UI_set_schedule_type(var0001, 0x000F);
	UI_set_item_flag(var0001, 0x001D);
	UI_set_polymorph(var0001, 0x00EF);
	UI_end_conversation();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_set_item_flag(var0001, 0x0012);
	UI_set_camera(var0001);
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x0636], 0x0001);
	var0004 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x03A6], 0x0032);
	abort;
labelFunc03A6_02E5:
	if (!(event == 0x0002)) goto labelFunc03A6_0334;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_polymorph(item, 0x01EF);
	UI_set_camera(0xFE9C);
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x0003);
labelFunc03A6_0334:
	return;
}


