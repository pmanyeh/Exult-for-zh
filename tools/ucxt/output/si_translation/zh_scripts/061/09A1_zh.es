#game "serpentisle"
// externs
extern void Func09A2 0x9A2 (var var0000, var var0001);

var Func09A1 0x9A1 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = UI_create_new_object2(var0000, [0x0000, 0x0000, 0x0000]);
	if (!(!(var0001 == 0x0000))) goto labelFunc09A1_0063;
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_oppressor(var0001, UI_get_npc_object(0xFE9C));
	UI_set_alignment(var0001, 0x0003);
	var0002 = UI_approach_avatar(var0001, 0x0032, 0x0028);
	if (!(!var0002)) goto labelFunc09A1_0063;
	Func09A2(var0001, 0xFE9C);
labelFunc09A1_0063:
	return var0001;
	return 0;
}


