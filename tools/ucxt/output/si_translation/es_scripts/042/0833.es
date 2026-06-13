#game "serpentisle"
// externs
extern var Func0920 0x920 ();

void Func0833 0x833 (var var0000)
{
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

	var0001 = UI_find_nearby(0xFFB0, 0x03B5, 0x0014, 0x0000);
	if (!(var0000 == 0x0001)) goto labelFunc0833_0045;
	if (!var0001) goto labelFunc0833_0045;
	var0002 = UI_get_object_position(var0001);
	UI_si_path_run_usecode(0xFFB0, var0002, 0x000A, UI_get_npc_object(0xFFB0), 0x0450, true);
labelFunc0833_0045:
	if (!(var0000 == 0x000A)) goto labelFunc0833_00DB;
	UI_set_schedule_type(0xFFB0, 0x000F);
	var0003 = (UI_find_nearby_avatar(0x010F) & UI_find_nearby_avatar(0x0110));
	var0004 = false;
	enum();
labelFunc0833_0070:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc0833_00A4;
	var0008 = Func0920();
	var0008 = UI_execute_usecode_array(var0001, [(byte)0x46, 0x0001, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0006]);
	var0004 = true;
	goto labelFunc0833_0070;
labelFunc0833_00A4:
	var0008 = UI_execute_usecode_array(0xFFB0, [(byte)0x59, 0x0006, (byte)0x01, (byte)0x6C, (byte)0x61, (byte)0x0B, 0xFFFE, 0x0004]);
	var0008 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x0450], 0x0014);
labelFunc0833_00DB:
	if (!(var0000 == 0x0002)) goto labelFunc0833_0160;
	UI_run_schedule(0xFFB0);
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0009 = UI_find_nearby(0xFFB0, 0x010F, 0x0014, 0x0000);
	if (!var0009) goto labelFunc0833_0160;
	if (!UI_npc_nearby(var0009)) goto labelFunc0833_0133;
	var0008 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x0450], 0x0014);
	goto labelFunc0833_0160;
labelFunc0833_0133:
	var000A = UI_get_object_position(var0009);
	var0008 = UI_set_last_created(var0009);
	if (!var0008) goto labelFunc0833_0160;
	var000A[0x0003] = 0x0000;
	var0008 = UI_update_last_created(var000A);
labelFunc0833_0160:
	return;
}


