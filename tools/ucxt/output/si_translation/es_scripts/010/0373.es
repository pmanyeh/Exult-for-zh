#game "serpentisle"
// externs
extern void Func0919 0x919 (var var0000);
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();

void Func0373 shape#(0x373) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_get_npc_number(item);
	var0001 = UI_get_npc_id(item);
	if (!(var0000 == 0xFEDB)) goto labelFunc0373_0021;
	Func0919(0xFEDB);
	abort;
labelFunc0373_0021:
	if (!(event == 0x0008)) goto labelFunc0373_0031;
	UI_set_polymorph(item, 0x01F5);
labelFunc0373_0031:
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc0373_005D;
	UI_set_schedule_type(item, 0x000F);
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x52, "@Master!@"]);
labelFunc0373_005D:
	if (!(var0001 == 0x0000)) goto labelFunc0373_00FB;
	var0003 = Func0954();
	var0004 = UI_is_pc_female();
	var0005 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0373_008C;
	UI_set_schedule_type(0x0373, 0x0003);
labelFunc0373_008C:
	if (!(event == 0x0000)) goto labelFunc0373_00FB;
	var0006 = UI_die_roll(0x0001, 0x0005);
	if (!(var0006 == 0x0001)) goto labelFunc0373_00B3;
	UI_item_say(item, "@To fight, these snakes!@");
labelFunc0373_00B3:
	if (!(var0006 == 0x0002)) goto labelFunc0373_00C5;
	UI_item_say(item, "@To win, if Balanced!@");
labelFunc0373_00C5:
	if (!(var0006 == 0x0003)) goto labelFunc0373_00D7;
	UI_item_say(item, "@To lose, if not in Balance!@");
labelFunc0373_00D7:
	if (!(var0006 == 0x0004)) goto labelFunc0373_00E9;
	UI_item_say(item, "@To run out of time, this fight!@");
labelFunc0373_00E9:
	if (!(var0006 == 0x0005)) goto labelFunc0373_00FB;
	UI_item_say(item, "@To lose hope, this fight!@");
labelFunc0373_00FB:
	if (!(var0001 == 0x0001)) goto labelFunc0373_0199;
	var0003 = Func0954();
	var0004 = UI_is_pc_female();
	var0005 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0373_012A;
	UI_set_schedule_type(0x0373, 0x0003);
labelFunc0373_012A:
	if (!(event == 0x0000)) goto labelFunc0373_0199;
	var0006 = UI_die_roll(0x0001, 0x0005);
	if (!(var0006 == 0x0001)) goto labelFunc0373_0151;
	UI_item_say(item, "@To seek help, for this fight!@");
labelFunc0373_0151:
	if (!(var0006 == 0x0002)) goto labelFunc0373_0163;
	UI_item_say(item, "@To risk all, a hero!@");
labelFunc0373_0163:
	if (!(var0006 == 0x0003)) goto labelFunc0373_0175;
	UI_item_say(item, "@To end world, this fight!@");
labelFunc0373_0175:
	if (!(var0006 == 0x0004)) goto labelFunc0373_0187;
	UI_item_say(item, "@To return home, these snakes!@");
labelFunc0373_0187:
	if (!(var0006 == 0x0005)) goto labelFunc0373_0199;
	UI_item_say(item, "@To fight, these snakes!@");
labelFunc0373_0199:
	if (!(var0001 == 0x0002)) goto labelFunc0373_0237;
	var0003 = Func0954();
	var0004 = UI_is_pc_female();
	var0005 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0373_01C8;
	UI_set_schedule_type(0x0373, 0x0003);
labelFunc0373_01C8:
	if (!(event == 0x0000)) goto labelFunc0373_0237;
	var0006 = UI_die_roll(0x0001, 0x0005);
	if (!(var0006 == 0x0001)) goto labelFunc0373_01EF;
	UI_item_say(item, "@To need unity, these snakes!@");
labelFunc0373_01EF:
	if (!(var0006 == 0x0002)) goto labelFunc0373_0201;
	UI_item_say(item, "@To be separate, these snakes!@");
labelFunc0373_0201:
	if (!(var0006 == 0x0003)) goto labelFunc0373_0213;
	UI_item_say(item, "@To fight, these snakes!@");
labelFunc0373_0213:
	if (!(var0006 == 0x0004)) goto labelFunc0373_0225;
	UI_item_say(item, "@To end all, this fight!@");
labelFunc0373_0225:
	if (!(var0006 == 0x0005)) goto labelFunc0373_0237;
	UI_item_say(item, "@To hope, this fight!@");
labelFunc0373_0237:
	return;
}


