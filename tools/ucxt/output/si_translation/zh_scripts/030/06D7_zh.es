#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func06D7 object#(0x6D7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x000A)) goto labelFunc06D7_0018;
	var0000 = Func0992(0x0001, "@Let us leave here.@", "@Unusual place...@", true);
labelFunc06D7_0018:
	if (!(event == 0x0003)) goto labelFunc06D7_0178;
	var0001 = UI_get_item_quality(item);
	var0002 = UI_get_object_position(item);
	if (!(var0001 == 0x0001)) goto labelFunc06D7_00C1;
	UI_sprite_effect(0x0004, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	var0003 = 0xFFFD;
labelFunc06D7_0066:
	if (!(var0003 < 0x0002)) goto labelFunc06D7_00C1;
	var0004 = [(var0002[0x0001] + var0003), var0002[0x0002], 0x0000];
	var0005 = UI_create_new_object2(0x0373, var0004);
	UI_set_alignment(var0005, 0x0002);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	var0003 = (var0003 + 0x0002);
	goto labelFunc06D7_0066;
labelFunc06D7_00C1:
	if (!(var0001 == 0x0002)) goto labelFunc06D7_0103;
	UI_sprite_effect(0x001A, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = [0x0A26, 0x001A, 0x0000];
	UI_move_object(0xFE9B, var0004);
labelFunc06D7_0103:
	if (!(var0001 == 0x0003)) goto labelFunc06D7_0178;
	var0006 = UI_get_object_position(0xFE9C);
	if (!(var0006[0x0003] < 0x0003)) goto labelFunc06D7_0178;
	UI_sprite_effect(0x001A, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFE9B, [0x0508, 0x062F, 0x0000]);
	var0007 = [0x0508, 0x0636, 0x0000];
	var0000 = UI_path_run_usecode(var0007, 0x06D7, 0xFE9C, 0x000A);
labelFunc06D7_0178:
	return;
}


