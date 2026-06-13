#game "serpentisle"
//DID NOT FIND ALL OPCODE PARAMETERS.原本再轉出時，有發生問題，要注意 Pman
//DID NOT FIND ALL OPCODE PARAMETERS.
//DID NOT FIND ALL OPCODE PARAMETERS.
// externs
extern var Func08AC 0x8AC (var var0000);
extern void Func08C5 0x8C5 ();
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0939 0x939 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(var0000 == 0x00F8)) goto labelFunc0939_0072;
	var0001 = Func08AC(true);
	UI_move_object(var0001, [0x0407, 0x0679]);
	UI_si_path_run_usecode(var0001, [0x0407, 0x066B], 0x000D, UI_get_npc_object(var0001), 0x07F8, false);
	Func08C5();
	//Func097F("@", 0x000A, 0x0000/*stack underflow*/);
	//((0x0000/*stack underflow*/ + 0x0000/*stack underflow*/) + "...@");
	Func097F(var0001, ("@" + var0001 + "...@"), 0x000A);
	Func097F(0xFE9C, ("@" + var0001 + "!@"), 0x0005);
	//var0001;
	Func0954();
	var0001 = Func08AC(false);
	//0x0005;
	//(("@" + var0001) + "!@");
	//0xFE9C;
	Func0954();
	abort;
labelFunc0939_0072:
	if (!(var0000 == 0x00F9)) goto labelFunc0939_00D2;
	UI_add_to_party(Func08AC(true));
	var0001 = UI_get_party_list2();
	enum();
labelFunc0939_008C:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0939_00A4;
	UI_set_schedule_type(var0004, 0x000F);
	goto labelFunc0939_008C;
labelFunc0939_00A4:
	var0001 = UI_create_new_object2(0x017D, [0x0407, 0x0679]);
	UI_si_path_run_usecode(var0001, [0x0408, 0x066F], 0x000D, var0001, 0x07F8, false);
	abort;
labelFunc0939_00D2:
	if (!(var0000 == 0x00FA)) goto labelFunc0939_010C;
	UI_set_schedule_type(item, 0x000F);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x6C]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F8], 0x0005);
	abort;
labelFunc0939_010C:
	if (!(var0000 == 0x00FB)) goto labelFunc0939_0189;
	var0001 = UI_create_new_object(0x017A);
	if (!var0001) goto labelFunc0939_014A;
	UI_set_item_frame(var0001, 0x0005);
	UI_play_sound_effect(0x0075);
	var0001 = UI_update_last_created([0x0408, 0x066E, 0x0000]);
labelFunc0939_014A:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x07F8]);
	var0001 = UI_execute_usecode_array(0xFFC3, [(byte)0x52, "@This trial will now come to order.@", (byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6B]);
	abort;
labelFunc0939_0189:
	if (!(var0000 == 0x00FC)) goto labelFunc0939_01BC;
	var0001 = UI_get_object_position(item);
	var0001[0x0001] = (var0001[0x0001] + 0x0003);
	UI_si_path_run_usecode(item, var0001, 0x000D, item, 0x07F8, false);
	abort;
labelFunc0939_01BC:
	if (!(var0000 == 0x00FD)) goto labelFunc0939_0271;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0004, (byte)0x01, (byte)0x61]);
	if (!gflags[0x0170]) goto labelFunc0939_0235;
	var0001 = UI_execute_usecode_array(0xFFCA, [(byte)0x23, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x52, "@Hear ye!@", (byte)0x61, (byte)0x27, 0x0003, (byte)0x6F, (byte)0x58, 0x001E, (byte)0x27, 0x0003, (byte)0x70, (byte)0x58, 0x001E, (byte)0x27, 0x0003, (byte)0x61, (byte)0x58, 0x001E, (byte)0x27, 0x0003, (byte)0x55, 0x07F8]);
	goto labelFunc0939_0270;
labelFunc0939_0235:
	// [已重建] 原組合語言: pushi 000FH / pushs "@Zulith...@" / pushi FFC9H / call Func097F
	Func097F(0xFFC9, "@Zulith...@", 0x000F);
	var0001 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0002, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x55, 0x07F8], 0x000A);
labelFunc0939_0270:
	abort;
labelFunc0939_0271:
	return;
}


