#game "serpentisle"
// externs
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func06FD object#(0x6FD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x000E)) goto labelFunc06FD_0010;
	UI_set_schedule_type(item, 0x000C);
labelFunc06FD_0010:
	if (!(event == 0x000D)) goto labelFunc06FD_0075;
	UI_set_schedule_type(0xFFAC, 0x000F);
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFAC, [0x0722, 0x0273, 0x0000]);
	UI_sprite_effect(0x0007, 0x0722, 0x0273, 0x0000, 0x0000, 0x000F, 0xFFFD);
labelFunc06FD_0075:
	if (!(event == 0x0002)) goto labelFunc06FD_00F1;
	var0000 = UI_get_object_position(item);
	if (!((UI_get_schedule_type(item) == 0x000F) || (UI_get_schedule_type(item) == 0x0018))) goto labelFunc06FD_009C;
	abort;
labelFunc06FD_009C:
	UI_set_schedule_type(0xFFAC, 0x000F);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFAC, [0x0722, 0x0273, 0x0000]);
	UI_sprite_effect(0x0007, 0x0722, 0x0273, 0x0000, 0x0000, 0x000F, 0xFFFD);
labelFunc06FD_00F1:
	if (!(event == 0x0003)) goto labelFunc06FD_0253;
	var0001 = UI_find_nearby(0xFE9C, 0x02EC, 0x000C, 0x0000);
	enum();
labelFunc06FD_010D:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06FD_012C;
	if (!(UI_get_item_frame(var0004) == 0x000A)) goto labelFunc06FD_0129;
	goto labelFunc06FD_0130;
labelFunc06FD_0129:
	goto labelFunc06FD_010D;
labelFunc06FD_012C:
	var0004 = false;
labelFunc06FD_0130:
	if (!var0004) goto labelFunc06FD_0253;
	UI_remove_item(var0004);
	if (!gflags[0x0229]) goto labelFunc06FD_024F;
	if (!gflags[0x022A]) goto labelFunc06FD_0248;
	if (!((UI_get_schedule_type(0xFFAC) != 0x000F) || UI_get_item_flag(0xFFAC, 0x001E))) goto labelFunc06FD_0163;
	abort;
labelFunc06FD_0163:
	UI_set_npc_id(0xFFAC, 0x000D);
	var0000 = UI_get_object_position(0xFFAC);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0000 = UI_get_object_position(item);
	UI_move_object(0xFFAC, [(var0000[0x0001] - 0x0004), var0000[0x0002], 0x0000]);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0004), var0000[0x0002], 0x0000, 0x0000, 0x000F, 0xFFFD);
	var0005 = UI_execute_usecode_array(0xFFAC, [(byte)0x23, (byte)0x27, 0x003C, (byte)0x55, 0x06FD]);
	UI_set_alignment(0xFFAC, 0x0003);
	UI_set_npc_id(0xFFAC, 0x000D);
	Func09AC(0xFFAC, (var0000[0x0001] - 0x0004), var0000[0x0002], 0x000C);
	UI_si_path_run_usecode(0xFFAC, [0x071E, 0x0277, 0x0000], 0x000D, UI_get_npc_object(0xFFAC), 0x06FD, false);
	goto labelFunc06FD_024C;
labelFunc06FD_0248:
	gflags[0x022A] = true;
labelFunc06FD_024C:
	goto labelFunc06FD_0253;
labelFunc06FD_024F:
	gflags[0x0229] = true;
labelFunc06FD_0253:
	return;
}


