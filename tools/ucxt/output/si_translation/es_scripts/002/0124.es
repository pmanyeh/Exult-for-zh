#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);
extern var Func08E7 0x8E7 (var var0000);
extern void Func088D 0x88D (var var0000, var var0001);
extern var Func088E 0x88E (var var0000);

void Func0124 shape#(0x124) ()
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
	var var0012;
	var var0013;
	var var0014;

	if (!(event == 0x0001)) goto labelFunc0124_0076;
	if (!UI_get_barge(item)) goto labelFunc0124_004B;
	var0000 = UI_find_nearby(item, 0x0316, 0x0014, 0x0000);
	if (!var0000) goto labelFunc0124_0041;
	if (!((UI_get_item_quality(var0000) == 0x0001) && (!gflags[0x00EC]))) goto labelFunc0124_0041;
	Func094A("This is Filbercio's barge!");
	abort;
labelFunc0124_0041:
	var0001 = Func08E7(item);
	goto labelFunc0124_0076;
labelFunc0124_004B:
	Func088D(item, 0x0124);
	var0002 = (UI_get_distance(item, 0xFE9C) + 0x000F);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0124], var0002);
labelFunc0124_0076:
	if (!(event == 0x0002)) goto labelFunc0124_0295;
	var0003 = UI_get_object_position(0xFE9C);
	var0004 = [0x0AE7, 0x09D5, 0x0A37, 0x09D5, 0x0AA7, 0x08E5, 0x0A37, 0x09A5];
	var0005 = [0x0AD7, 0x0885];
	var0006 = 0x0000;
	if (!((var0003[0x0001] == var0005[0x0001]) && ((var0003[0x0002] == var0005[0x0002]) && (gflags[0x0001] == false)))) goto labelFunc0124_0140;
	gflags[0x0001] = true;
	var0005[0x0002] = (var0005[0x0002] + 0x0002);
	UI_sprite_effect(0x0011, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0x0001);
	UI_play_sound_effect2(0x0074, item);
	UI_lightning();
	var0007 = UI_create_new_object(0x037F);
	if (!var0007) goto labelFunc0124_013F;
	UI_set_item_flag(var0007, 0x0012);
	var0001 = UI_update_last_created(var0005);
labelFunc0124_013F:
	abort;
labelFunc0124_0140:
	var0008 = 0x0001;
labelFunc0124_0146:
	if (!((var0003[0x0001] == var0004[var0008]) && (var0003[0x0002] == var0004[(var0008 + 0x0001)]))) goto labelFunc0124_0190;
	var0008 = Func088E(var0008);
	var0006[0x0001] = var0004[var0008];
	var0006[0x0002] = var0004[(var0008 + 0x0001)];
	goto labelFunc0124_01A6;
labelFunc0124_0190:
	var0008 = Func088E(var0008);
	if (!(var0008 > 0x0001)) goto labelFunc0124_01A6;
	goto labelFunc0124_0146;
labelFunc0124_01A6:
	if (!var0006) goto labelFunc0124_0295;
	var0009 = UI_get_party_list();
	var000A = [];
	var000B = [];
	var000C = [];
	var000D = UI_get_object_position(0xFE9C);
	var000E = 0x0001;
	enum();
labelFunc0124_01D6:
	for (var0011 in var0009 with var000F to var0010) attend labelFunc0124_022B;
	var0012 = UI_get_object_position(var0011);
	var000A[var000E] = (var000D[0x0001] - var0012[0x0001]);
	var000B[var000E] = (var000D[0x0002] - var0012[0x0002]);
	var000C[var000E] = UI_get_item_frame_rot(var0011);
	var000E = (var000E + 0x0001);
	goto labelFunc0124_01D6;
labelFunc0124_022B:
	UI_move_object(0xFE9B, var0006);
	var000D = UI_get_object_position(0xFE9C);
	var000E = 0x0001;
	enum();
labelFunc0124_0246:
	for (var0011 in var0009 with var0013 to var0014) attend labelFunc0124_0295;
	UI_move_object(var0011, [(var000D[0x0001] - var000A[var000E]), (var000D[0x0002] - var000B[var000E]), var000D[0x0003]]);
	UI_set_item_frame_rot(var0011, var000C[var000E]);
	var000E = (var000E + 0x0001);
	goto labelFunc0124_0246;
labelFunc0124_0295:
	return;
}


