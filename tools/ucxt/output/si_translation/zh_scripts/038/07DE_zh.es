#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func084E 0x84E (var var0000, var var0001);
extern var Func084D 0x84D (var var0000, var var0001);

void Func07DE object#(0x7DE) ()
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

	if (!((UI_get_item_shape(item) == 0x02D1) || (UI_get_item_shape(item) == 0x03DD))) goto labelFunc07DE_002D;
	UI_play_sound_effect(0x0066);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	goto labelFunc07DE_012B;
labelFunc07DE_002D:
	if (!(Func0994() == 0x0002)) goto labelFunc07DE_00FA;
	var0000 = [0x0974, 0x0470, 0x0000];
	var0001 = [0xFF31, 0xFF2D, 0xFF2F, 0xFF2C, 0xFF2B, 0xFF2A, 0xFF30, 0xFF2E];
	if (!UI_get_item_flag(0xFF29, 0x001C)) goto labelFunc07DE_007B;
	var0001 = (var0001 & 0xFF29);
labelFunc07DE_007B:
	var0002 = UI_get_random(0x0008);
	var0003 = Func09A0(0x0005, 0x0001);
	var0004 = UI_set_item_quality(var0003, var0002);
	var0004 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x00FA, 0x0000], 0x001E);
	enum();
labelFunc07DE_00B9:
	for (var0007 in var0001 with var0005 to var0006) attend labelFunc07DE_00FA;
	UI_move_object(var0007, Func084E(var0007, var0002));
	UI_set_new_schedules(var0007, 0x0000, Func084D(var0007, var0002), Func084E(var0007, var0002));
	UI_run_schedule(var0007);
	goto labelFunc07DE_00B9;
labelFunc07DE_00FA:
	var0008 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0002]);
	UI_fade_palette(0x000C, 0x0001, 0x0001);
labelFunc07DE_012B:
	return;
}


