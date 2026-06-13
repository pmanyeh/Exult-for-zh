#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func090C 0x90C (var var0000, var var0001);

void Func03CA shape#(0x3CA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc03CA_0092;
	var0000 = UI_get_npc_id(item);
	if (!(var0000 < 0x0003)) goto labelFunc03CA_002A;
	UI_set_npc_id(item, (var0000 + 0x0001));
	abort;
	goto labelFunc03CA_0092;
labelFunc03CA_002A:
	if (!(UI_die_roll(0x0001, 0x000A) == 0x0001)) goto labelFunc03CA_0092;
	UI_set_npc_id(item, 0x0000);
	var0001 = Func0992(0x0001, "@That's baaaad!@", "@I'm baaaad!@", true);
	UI_halt_scheduled(item);
	UI_set_schedule_type(item, 0x000F);
	var0002 = [0x0001, 0x0001];
	var0003 = [0x0000, 0x0000];
	var0004 = 0xFFFF;
	Func090D(item, var0002, var0003, var0004, 0x03CA, item, 0x000A);
labelFunc03CA_0092:
	if (!(event == 0x000A)) goto labelFunc03CA_0169;
	var0005 = Func090C(0xFE9C, item);
	var0006 = Func090C(item, 0xFE9C);
	UI_halt_scheduled(0xFE9C);
	UI_set_item_flag(0xFE9C, 0x0010);
	if (!UI_is_pc_female()) goto labelFunc03CA_0119;
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0005, (byte)0x6E]);
	if (!(!var0001)) goto labelFunc03CA_00EB;
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc03CA_00EB:
	var0001 = UI_execute_usecode_array(item, [(byte)0x59, var0006, (byte)0x27, 0x0014, (byte)0x55, 0x03CA]);
	if (!(!var0001)) goto labelFunc03CA_0116;
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc03CA_0116:
	goto labelFunc03CA_0169;
labelFunc03CA_0119:
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0005, (byte)0x6D]);
	if (!(!var0001)) goto labelFunc03CA_013E;
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc03CA_013E:
	var0001 = UI_execute_usecode_array(item, [(byte)0x59, var0005, (byte)0x27, 0x0014, (byte)0x55, 0x03CA]);
	if (!(!var0001)) goto labelFunc03CA_0169;
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc03CA_0169:
	if (!(event == 0x0002)) goto labelFunc03CA_0193;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(item, 0x0014);
	var0001 = Func0992(0x0001, "@Thou art SICK!@", "@That felt good!@", true);
labelFunc03CA_0193:
	return;
}


