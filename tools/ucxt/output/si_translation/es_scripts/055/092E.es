#game "serpentisle"
// externs
extern var Func0932 0x932 (var var0000);
extern var Func0930 0x930 (var var0000, var var0001, var var0002);
extern void Func092F 0x92F (var var0000, var var0001);
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func092E 0x92E (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = [0xFFC1, 0xFFB1, 0xFFB6, 0xFFB9, 0xFF6A];
	var0001 = (var0001 & var0000);
	UI_end_conversation();
	UI_set_item_flag(0xFE9C, 0x0010);
	enum();
labelFunc092E_002E:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc092E_0184;
	if (!Func0932(var0004)) goto labelFunc092E_0181;
	UI_set_opponent(var0004, 0xFFFF);
	UI_set_attack_mode(var0004, 0x0007);
	UI_set_oppressor(var0004, 0xFFFF);
	UI_set_item_flag(var0004, 0x0004);
	gflags[0x0009] = true;
	if (!(var0004 == var0000)) goto labelFunc092E_0181;
	if (!(!gflags[0x000A])) goto labelFunc092E_00AC;
	if (!(!gflags[0x0085])) goto labelFunc092E_00A9;
	gflags[0x0085] = true;
	UI_set_item_flag(var0000, 0x0004);
	var0004 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x07FD], 0x000C);
labelFunc092E_00A9:
	goto labelFunc092E_0181;
labelFunc092E_00AC:
	UI_clear_item_flag(var0000, 0x0004);
	var0004 = Func0930(var0000, 0x0178, 0x003C);
	if (!(!var0004)) goto labelFunc092E_00D5;
	Func092F(var0000, 0x0001);
labelFunc092E_00D5:
	if (!((var0000 == UI_get_npc_object(0xFE9C)) || (var0000 == 0xFE9C))) goto labelFunc092E_013F;
	UI_set_schedule_type(0xFE9C, 0x001F);
	UI_end_conversation();
	Func090D(var0004, [0xFFFC, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFC], [0xFFFF, 0xFFFE, 0x0000, 0xFFFD, 0xFFFF], 0x0000, 0x07F9, var0000, 0x0008);
	UI_set_path_failure(0x07F9, var0000, 0x000E);
	goto labelFunc092E_0181;
labelFunc092E_013F:
	UI_set_schedule_type(var0000, 0x000F);
	var0004 = UI_get_object_position(var0004);
	UI_si_path_run_usecode(var0000, [(var0004[0x0001] - 0x0004), (var0004[0x0002] - 0x0001), var0004[0x0003]], 0x0008, var0000, 0x07F9, true);
labelFunc092E_0181:
	goto labelFunc092E_002E;
labelFunc092E_0184:
	return;
}


