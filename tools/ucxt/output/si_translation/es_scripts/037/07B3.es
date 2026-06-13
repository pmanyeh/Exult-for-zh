#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func08E7 0x8E7 (var var0000);

void Func07B3 object#(0x7B3) ()
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

	var0000 = UI_get_npc_id(0xFFD8);
	var0001 = 0x0019;
	var0002 = UI_find_nearby(item, 0x03C1, 0x0064, 0x0010);
	if (!(var0000 == 0x0002)) goto labelFunc07B3_0084;
	if (!var0002) goto labelFunc07B3_0084;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0003 = Func0992(0x0001, "@We should find a seat.@", "@I should sit.@", true);
	var0003 = Func08E7(var0002);
	if (!var0003) goto labelFunc07B3_0084;
	gflags[0x01CB] = true;
	UI_set_npc_id(0xFFD8, 0x0003);
	var0000 = 0x0003;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07B3], var0001);
	abort;
labelFunc07B3_0084:
	if (!(var0000 == 0x0003)) goto labelFunc07B3_0210;
	var0003 = Func08E7(var0002);
	if (!UI_on_barge()) goto labelFunc07B3_01FA;
	var0004 = UI_create_new_object(0x025F);
	if (!var0004) goto labelFunc07B3_00E2;
	UI_set_item_frame(var0004, 0x0000);
	var0003 = UI_set_item_quality(var0004, 0x0000);
	UI_clear_item_flag(var0004, 0x0012);
	var0003 = UI_update_last_created([0x0552, 0x08A7, 0x0002]);
labelFunc07B3_00E2:
	var0004 = UI_create_new_object(0x025F);
	if (!var0004) goto labelFunc07B3_0126;
	UI_clear_item_flag(var0004, 0x0012);
	var0003 = UI_set_item_quality(var0004, 0x0000);
	UI_set_item_frame(var0004, 0x0001);
	var0003 = UI_update_last_created([0x0564, 0x08A7, 0x0002]);
labelFunc07B3_0126:
	var0004 = UI_create_new_object(0x025F);
	if (!var0004) goto labelFunc07B3_016A;
	UI_clear_item_flag(var0004, 0x0012);
	var0003 = UI_set_item_quality(var0004, 0x000F);
	UI_set_item_frame(var0004, 0x0002);
	var0003 = UI_update_last_created([0x056E, 0x08A4, 0x0001]);
labelFunc07B3_016A:
	var0005 = [0x0551, 0x08A7, 0x0002];
	var0006 = [0xFFD8, 0xFFD6, 0xFFDB, 0xFFD5];
	enum();
labelFunc07B3_018C:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc07B3_01CA;
	UI_move_object(var0009, var0005);
	UI_set_new_schedules(var0009, [0x0000], [0x001D], [0x055B, 0x08A7]);
	UI_set_schedule_type(var0009, 0x001D);
	goto labelFunc07B3_018C;
labelFunc07B3_01CA:
	UI_clear_item_flag(0xFFDB, 0x0024);
	UI_set_npc_id(0xFFD8, 0x0004);
	var0000 = 0x0004;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07B3], var0001);
	abort;
labelFunc07B3_01FA:
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07B3], var0001);
	abort;
labelFunc07B3_0210:
	if (!((var0000 > 0x0003) && (var0000 < 0x0008))) goto labelFunc07B3_0238;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07B3], var0001);
	abort;
labelFunc07B3_0238:
	if (!(var0000 == 0x0008)) goto labelFunc07B3_027B;
	if (!UI_on_barge()) goto labelFunc07B3_0265;
	UI_halt_scheduled(item);
	var0003 = UI_execute_usecode_array(0xFFD8, [(byte)0x23, (byte)0x55, 0x0428]);
	goto labelFunc07B3_027A;
labelFunc07B3_0265:
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07B3], var0001);
labelFunc07B3_027A:
	abort;
labelFunc07B3_027B:
	return;
}


