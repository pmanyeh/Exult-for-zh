#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func07E4 object#(0x7E4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func09A0(0x0002, 0x0001);
	var0001 = UI_get_item_quality(var0000);
	var0002 = UI_find_nearby(0xFE9C, 0x03C1, 0x0064, 0x0010);
	if (!(var0001 == 0x0000)) goto labelFunc07E4_00A2;
	UI_play_music(0x0010, var0000);
	UI_set_schedule_type(0xFFD8, 0x000C);
	UI_set_schedule_type(0xFFD5, 0x000C);
	UI_set_schedule_type(0xFFDB, 0x000C);
	UI_set_schedule_type(0xFFD6, 0x000C);
	UI_set_barge_dir(var0002, 0x0002);
	var0003 = [(byte)0x2C, (byte)0x32, (byte)0x21, (byte)0x0B, 0xFFFE, 0x0008, (byte)0x55, 0x07E4];
	var0004 = UI_execute_usecode_array(var0002, var0003);
	var0004 = UI_set_item_quality(var0000, 0x0001);
labelFunc07E4_00A2:
	if (!(var0001 == 0x0001)) goto labelFunc07E4_00E9;
	UI_set_barge_dir(var0002, 0x0004);
	var0003 = [(byte)0x2C, (byte)0x34, (byte)0x21, (byte)0x0B, 0xFFFE, 0x0011, (byte)0x55, 0x07E4];
	var0004 = UI_execute_usecode_array(var0002, var0003);
	var0004 = UI_set_item_quality(var0000, 0x0002);
labelFunc07E4_00E9:
	if (!(var0001 == 0x0002)) goto labelFunc07E4_0130;
	UI_set_barge_dir(var0002, 0x0002);
	var0003 = [(byte)0x2C, (byte)0x32, (byte)0x21, (byte)0x0B, 0xFFFE, 0x0009, (byte)0x55, 0x07E4];
	var0004 = UI_execute_usecode_array(var0002, var0003);
	var0004 = UI_set_item_quality(var0000, 0x0003);
labelFunc07E4_0130:
	if (!(var0001 == 0x0003)) goto labelFunc07E4_0177;
	UI_set_barge_dir(var0002, 0x0004);
	var0003 = [(byte)0x2C, (byte)0x34, (byte)0x21, (byte)0x0B, 0xFFFE, 0x0009, (byte)0x55, 0x07E4];
	var0004 = UI_execute_usecode_array(var0002, var0003);
	var0004 = UI_set_item_quality(var0000, 0x0004);
labelFunc07E4_0177:
	if (!(var0001 == 0x0004)) goto labelFunc07E4_01BE;
	UI_set_barge_dir(var0002, 0x0002);
	var0003 = [(byte)0x2C, (byte)0x32, (byte)0x21, (byte)0x0B, 0xFFFE, 0x0038, (byte)0x55, 0x07E4];
	var0004 = UI_execute_usecode_array(var0002, var0003);
	var0004 = UI_set_item_quality(var0000, 0x0005);
labelFunc07E4_01BE:
	if (!(var0001 == 0x0005)) goto labelFunc07E4_0205;
	UI_set_barge_dir(var0002, 0x0004);
	var0003 = [(byte)0x2C, (byte)0x34, (byte)0x21, (byte)0x0B, 0xFFFE, 0x0006, (byte)0x55, 0x07E4];
	var0004 = UI_execute_usecode_array(var0002, var0003);
	var0004 = UI_set_item_quality(var0000, 0x0006);
labelFunc07E4_0205:
	if (!(var0001 == 0x0006)) goto labelFunc07E4_027E;
	UI_set_barge_dir(var0002, 0x0002);
	UI_show_npc_face0(0xFFD8, 0x0000);
	message("\"Reef the sails an' hang on! There be one of those damned storms a bearin' down on us! Heavens help us!\"");
	say();
	UI_remove_npc_face0();
	UI_play_music(0x0016, var0000);
	UI_set_barge_dir(var0002, 0x0002);
	var0003 = [(byte)0x2C, (byte)0x32, (byte)0x55, 0x07E5, (byte)0x21, (byte)0x0B, 0xFFFB, 0x005A, (byte)0x55, 0x07E6];
	UI_set_weather(0x0002);
	var0004 = UI_execute_usecode_array(var0002, var0003);
	var0004 = UI_set_item_quality(var0000, 0x0000);
labelFunc07E4_027E:
	return;
}


