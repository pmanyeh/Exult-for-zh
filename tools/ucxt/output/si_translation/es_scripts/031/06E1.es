#game "serpentisle"
// externs
extern var Func097E 0x97E (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);

void Func06E1 object#(0x6E1) ()
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

	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc06E1_00AC;
	if (!(gflags[0x0004] == true)) goto labelFunc06E1_00AC;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0002 = UI_get_object_position(item);
	var0002[0x0002] = (var0002[0x0002] - 0x0007);
	var0003 = UI_create_new_object2(0x0151, var0002);
	if (!var0003) goto labelFunc06E1_0090;
	UI_set_schedule_type(var0003, 0x000F);
	var0004 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x59, (byte)0x34]);
	UI_play_sound_effect(0x0053);
labelFunc06E1_0090:
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x06E1], 0x000A);
	UI_remove_item(item);
labelFunc06E1_00AC:
	if (!(event == 0x0002)) goto labelFunc06E1_0234;
	var0005 = UI_get_party_list();
	var0003 = UI_find_nearby(item, 0x0151, 0x000A, 0x0000);
	if (!(0xFFFE in var0005)) goto labelFunc06E1_00F5;
	if (!var0003) goto labelFunc06E1_00F2;
	UI_show_npc_face0(0xFEEB, 0x0002);
	message("\"Traitor! Foul murderer! Thou didst kill my Beatrix, faithless liar!\"");
	say();
	message("\"Thou shalt see the power of the King of the White Dragon!\"");
	say();
	UI_remove_npc_face0();
labelFunc06E1_00F2:
	goto labelFunc06E1_0111;
labelFunc06E1_00F5:
	if (!var0003) goto labelFunc06E1_0111;
	UI_show_npc_face0(0xFEEB, 0x0002);
	message("\"I am the King of the White Dragon!\"");
	say();
	message("\"I shall protect thee... I shall take thee beyond all mortal concerns -- into my kingdom of death!\"");
	say();
	UI_remove_npc_face0();
labelFunc06E1_0111:
	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!var0003) goto labelFunc06E1_0234;
	var0002 = UI_get_object_position(var0003);
	var0002[0x0001] = (var0002[0x0001] - (var0002[0x0003] / 0x0002));
	var0002[0x0002] = (var0002[0x0002] - (var0002[0x0003] / 0x0002));
	UI_sprite_effect(0x000C, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	var0002 = UI_get_object_position(var0003);
	var0006 = UI_find_nearby(item, 0x0113, 0x000A, 0x0010);
	enum();
labelFunc06E1_019B:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc06E1_01CF;
	var000A = UI_get_item_frame(var0009);
	if (!(var000A == 0x0000)) goto labelFunc06E1_01CC;
	var0004 = UI_delayed_execute_usecode_array(var0009, [(byte)0x48], 0x0005);
labelFunc06E1_01CC:
	goto labelFunc06E1_019B;
labelFunc06E1_01CF:
	UI_remove_item(var0003);
	var000B = UI_find_nearby(item, 0x01B0, 0x0014, 0x0000);
	var000C = UI_find_nearby(item, 0x010E, 0x0014, 0x0000);
	if (!var000B) goto labelFunc06E1_0216;
	enum();
labelFunc06E1_01FF:
	for (var000F in var000B with var000D to var000E) attend labelFunc06E1_0216;
	Func0907(var000F, 0x0000);
	goto labelFunc06E1_01FF;
labelFunc06E1_0216:
	if (!var000C) goto labelFunc06E1_0234;
	enum();
labelFunc06E1_021D:
	for (var000F in var000C with var0010 to var0011) attend labelFunc06E1_0234;
	Func0907(var000F, 0x0000);
	goto labelFunc06E1_021D;
labelFunc06E1_0234:
	return;
}


