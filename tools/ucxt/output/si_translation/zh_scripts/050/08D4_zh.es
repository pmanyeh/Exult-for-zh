#game "serpentisle"
// externs
extern void Func090E 0x90E (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);

void Func08D4 0x8D4 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0003)) goto labelFunc08D4_006A;
	var0000 = UI_find_nearby(item, 0x0375, 0x000C, 0x0000);
	if (!var0000) goto labelFunc08D4_006A;
	UI_set_schedule_type(0xFF27, 0x000F);
	var0001 = 0xFFFF;
	var0002 = 0xFFFF;
	var0003 = 0xFFFD;
	Func090E(0xFF27, item, var0001, var0002, var0003, 0x07DF, UI_get_npc_object(0xFF27), 0x000A, true);
	UI_set_path_failure(0x07DF, UI_get_npc_object(0xFF27), 0x000A);
labelFunc08D4_006A:
	if (!(event == 0x000A)) goto labelFunc08D4_00F8;
	UI_set_schedule_type(item, 0x000A);
	var0000 = UI_find_nearby(item, 0x0375, 0x000A, 0x0000);
	if (!var0000) goto labelFunc08D4_00F8;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0004 = UI_direction_from(item, var0000);
	var0005 = UI_execute_usecode_array(item, [(byte)0x52, "@Wake up, girl!@", (byte)0x59, var0004, (byte)0x27, 0x000F, (byte)0x52, "@Dost thou crave a carrot?@"]);
	var0006 = UI_direction_from(var0000, item);
	var0005 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x000A, (byte)0x61, (byte)0x27, 0x0006, (byte)0x59, var0006, (byte)0x27, 0x000C, (byte)0x55, 0x07DF]);
labelFunc08D4_00F8:
	if (!(event == 0x0002)) goto labelFunc08D4_01B5;
	if (!(UI_get_item_shape(item) == 0x0375)) goto labelFunc08D4_016A;
	var0007 = UI_get_cont_items(0xFF27, 0x0179, 0xFE99, 0x0012);
	if (!var0007) goto labelFunc08D4_016A;
	var0005 = UI_execute_usecode_array(item, [(byte)0x27, 0x0005, (byte)0x64, (byte)0x27, 0x0001, (byte)0x65, (byte)0x27, 0x0001, (byte)0x66, (byte)0x27, 0x0001, (byte)0x67, (byte)0x27, 0x0001, (byte)0x61]);
	var0005 = UI_execute_usecode_array(var0007, [(byte)0x27, 0x000C, (byte)0x55, 0x07DF]);
labelFunc08D4_016A:
	if (!(UI_get_item_shape(item) == 0x0179)) goto labelFunc08D4_01B5;
	var0000 = UI_find_nearby(item, 0x0375, 0x000A, 0x0000);
	if (!var0000) goto labelFunc08D4_01B5;
	UI_kill_npc(0xFF27);
	UI_clear_item_flag(var0000, 0x0004);
	var0005 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0005, (byte)0x55, 0x0375]);
labelFunc08D4_01B5:
	return;
}


