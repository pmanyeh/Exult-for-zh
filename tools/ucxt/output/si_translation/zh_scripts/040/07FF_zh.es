#game "serpentisle"
// externs
extern var Func0930 0x930 (var var0000, var var0001, var var0002);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func0903 0x903 ();
extern var Func0932 0x932 (var var0000);
extern void Func09AA 0x9AA ();

void Func07FF object#(0x7FF) ()
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
	var var0015;
	var var0016;
	var var0017;

	var0000 = Func0930(item, 0x010E, 0x002D);
	if (!var0000) goto labelFunc07FF_0062;
	if (!Func0908(var0000, 0x0178, 0x0000, 0x0000, 0x0000, 0x0007)) goto labelFunc07FF_005F;
	Func0909(var0000, 0x01B0, 0x0001, 0x0001, 0x01B1, 0x0000, 0x0000, 0x0003, 0x0005);
	UI_play_sound_effect2(0x001F, var0000);
	Func0907(var0000, 0x0002);
	goto labelFunc07FF_0062;
labelFunc07FF_005F:
	Func0903();
labelFunc07FF_0062:
	var0001 = UI_find_nearby(item, 0x0320, 0x003C, 0x0000);
	enum();
labelFunc07FF_0074:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc07FF_009A;
	if (!(UI_get_item_quality(var0004) == 0x00EB)) goto labelFunc07FF_0097;
	UI_set_item_shape(var0004, 0x020A);
labelFunc07FF_0097:
	goto labelFunc07FF_0074;
labelFunc07FF_009A:
	var0005 = UI_find_nearby(0xFE9C, 0xFFFF, 0x002D, 0x0004);
	enum();
labelFunc07FF_00AE:
	for (var0000 in var0005 with var0006 to var0007) attend labelFunc07FF_00DB;
	if (!(UI_get_npc_id(var0000) == 0x000D)) goto labelFunc07FF_00D8;
	UI_add_to_party(var0000);
	UI_set_npc_id(var0000, 0x0000);
labelFunc07FF_00D8:
	goto labelFunc07FF_00AE;
labelFunc07FF_00DB:
	var0005 = [0xFFC1, 0xFFB1, 0xFFB6, 0xFFB9, 0xFF6A];
	enum();
labelFunc07FF_00F1:
	for (var0000 in var0005 with var0008 to var0009) attend labelFunc07FF_0123;
	if (!Func0932(var0000)) goto labelFunc07FF_0120;
	UI_clear_item_flag(var0000, 0x0004);
	UI_set_npc_id(var0000, 0x0000);
	UI_run_schedule(var0000);
labelFunc07FF_0120:
	goto labelFunc07FF_00F1;
labelFunc07FF_0123:
	if (!(item != UI_get_npc_object(0xFE9C))) goto labelFunc07FF_0137;
	UI_set_npc_id(item, 0x0000);
labelFunc07FF_0137:
	UI_set_alignment(item, 0x0001);
	if (!(!(item == UI_get_npc_object(0xFE9C)))) goto labelFunc07FF_015F;
	UI_set_camera(UI_get_npc_object(0xFE9C));
	UI_set_schedule_type(item, 0x001F);
labelFunc07FF_015F:
	var0005 = UI_find_nearby(item, 0x00E4, 0x0023, 0x0000);
	enum();
labelFunc07FF_0171:
	for (var0000 in var0005 with var000A to var000B) attend labelFunc07FF_0190;
	if (!(UI_get_npc_id(var0000) == 0x0009)) goto labelFunc07FF_018D;
	goto labelFunc07FF_0193;
labelFunc07FF_018D:
	goto labelFunc07FF_0171;
labelFunc07FF_0190:
	goto labelFunc07FF_01B7;
labelFunc07FF_0193:
	UI_clear_item_say(var0000);
	UI_si_path_run_usecode(var0000, [0x03FB, 0x0A77, 0x0006], 0x000D, var0000, 0x00E4, true);
labelFunc07FF_01B7:
	var0005 = UI_find_nearby(item, 0x020A, 0x002D, 0x0000);
	enum();
labelFunc07FF_01C9:
	for (var0000 in var0005 with var000C to var000D) attend labelFunc07FF_01EE;
	if (!(UI_get_item_quality(var0000) == 0x00EB)) goto labelFunc07FF_01EB;
	var000E = var0000;
	goto labelFunc07FF_01F1;
labelFunc07FF_01EB:
	goto labelFunc07FF_01C9;
labelFunc07FF_01EE:
	goto labelFunc07FF_0280;
labelFunc07FF_01F1:
	var0005 = UI_get_cont_items(var000E, 0xFE99, 0xFE99, 0xFE99);
	if (!var0005) goto labelFunc07FF_024C;
	var0005 = UI_get_cont_items(item, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc07FF_021C:
	for (var0000 in var0005 with var000F to var0010) attend labelFunc07FF_024C;
	if (!(!((UI_get_item_shape(var0000) == 0x01E6) || (UI_get_item_shape(var0000) == 0x025F)))) goto labelFunc07FF_0249;
	UI_remove_item(var0000);
labelFunc07FF_0249:
	goto labelFunc07FF_021C;
labelFunc07FF_024C:
	var0005 = UI_get_cont_items(var000E, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc07FF_0260:
	for (var0000 in var0005 with var0011 to var0012) attend labelFunc07FF_0280;
	if (!UI_set_last_created(var0000)) goto labelFunc07FF_027D;
	var0001 = UI_give_last_created(item);
labelFunc07FF_027D:
	goto labelFunc07FF_0260;
labelFunc07FF_0280:
	Func09AA();
	UI_show_npc_face0(0xFEED, 0x0000);
	var0013 = UI_get_object_position(item);
	var0014 = var0013[0x0001];
	var0015 = var0013[0x0003];
	var0013 = var0013[0x0002];
	var0016 = (0x0000 - UI_get_npc_number(item));
	var0017 = UI_game_hour();
	message("\"Failed out of tournament code at hour ");
	message(var0017);
	message(" gametime. Npc #");
	message(var0016);
	message(" was training, and he was at coord (");
	message(var0014);
	message(",");
	message(var0013);
	message(",");
	message(var0015);
	message(").\"");
	say();
	if (!gflags[0x0007]) goto labelFunc07FF_02EF;
	message("\"$Temp1Flag was set to true.\"");
	say();
labelFunc07FF_02EF:
	if (!gflags[0x0008]) goto labelFunc07FF_02F9;
	message("\"$Temp2Flag was set to true.\"");
	say();
labelFunc07FF_02F9:
	if (!gflags[0x0009]) goto labelFunc07FF_0303;
	message("\"$Temp3Flag was set to true.\"");
	say();
labelFunc07FF_0303:
	if (!gflags[0x000A]) goto labelFunc07FF_030D;
	message("\"$Temp4Flag was set to true.\"");
	say();
labelFunc07FF_030D:
	if (!gflags[0x0085]) goto labelFunc07FF_0317;
	message("\"We had just finished the tournament and were on our way to the list field door.\"");
	say();
labelFunc07FF_0317:
	if (!gflags[0x0084]) goto labelFunc07FF_0321;
	message("\"The training flag was set.\"");
	say();
labelFunc07FF_0321:
	if (!gflags[0x0083]) goto labelFunc07FF_032B;
	message("\"And, of course, the tournament flag was set.\"");
	say();
labelFunc07FF_032B:
	if (!Func0932(item)) goto labelFunc07FF_0336;
	message("\"Moreover, the student was in the list fields.\"");
	say();
labelFunc07FF_0336:
	if (!Func0932(item)) goto labelFunc07FF_0355;
	UI_move_object(item, [0x03F8, 0x0A7D, 0x0006]);
	message("\"All right, thy time is over!\"");
	say();
	goto labelFunc07FF_0359;
labelFunc07FF_0355:
	message("\"Ummm.... I cannot seem to find my keys. Thou mightest return later.\"");
	say();
labelFunc07FF_0359:
	UI_remove_npc_face0();
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	gflags[0x0085] = false;
	gflags[0x0084] = false;
	gflags[0x0083] = false;
	return;
}


