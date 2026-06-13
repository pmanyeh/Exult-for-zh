#game "serpentisle"
// externs
extern var Func0977 0x977 (var var0000);
extern void Func0971 0x971 (var var0000);

void Func0202 shape#(0x202) ()
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

	if (!(event == 0x0008)) goto labelFunc0202_0042;
	var0000 = [0x0210, 0x0151, 0x0215, 0x01F5, 0x0373, 0x0202, 0x0295, 0x02C2];
	var0001 = Func0977(var0000);
	var0002 = UI_get_npc_id(item);
	UI_set_polymorph(item, var0000[var0002]);
labelFunc0202_0042:
	if (!(event == 0x0007)) goto labelFunc0202_0162;
	var0003 = UI_get_object_position(item);
	if (!(UI_get_npc_id(item) > 0x0000)) goto labelFunc0202_0162;
	var0004 = UI_set_npc_prop(item, 0x0003, 0x0001);
	var0005 = UI_die_roll(0x0001, 0x000A);
	if (!(var0005 <= 0x0005)) goto labelFunc0202_00B3;
	var0003[0x0001] = (0x06B1 + UI_die_roll(0x0000, 0x002D));
	var0003[0x0002] = (0x0751 + UI_die_roll(0x0000, 0x001D));
	UI_move_object(item, var0003);
labelFunc0202_00B3:
	if (!((var0005 > 0x0005) && (var0005 <= 0x0009))) goto labelFunc0202_014C;
	var0000 = [0x0210, 0x0151, 0x0215, 0x01F5, 0x0373, 0x0202, 0x0295, 0x02C2];
	var0001 = Func0977(var0000);
	var0002 = UI_die_roll(0x0001, var0001);
	var0006 = UI_find_nearby(0xFE9C, 0x0202, 0x003C, 0x0000);
	enum();
labelFunc0202_010D:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc0202_0139;
	if (!UI_get_npc_id(var0009)) goto labelFunc0202_0136;
	UI_clear_item_flag(var0009, 0x0020);
	UI_set_npc_id(var0009, var0002);
labelFunc0202_0136:
	goto labelFunc0202_010D;
labelFunc0202_0139:
	UI_set_polymorph(item, var0000[var0002]);
	UI_set_npc_id(item, var0002);
labelFunc0202_014C:
	if (!(var0005 == 0x000A)) goto labelFunc0202_0162;
	UI_clear_item_flag(item, 0x001D);
	Func0971(item);
labelFunc0202_0162:
	return;
}


