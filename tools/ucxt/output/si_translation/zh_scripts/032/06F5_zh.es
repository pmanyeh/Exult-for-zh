#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06F5 object#(0x6F5) ()
{
	var var0000;

	if (!((!gflags[0x0060]) || (gflags[0x0061] || (UI_npc_nearby(0xFFFE) && (UI_npc_nearby(0xFFFF) && UI_npc_nearby(0xFFFD)))))) goto labelFunc06F5_0024;
	abort;
labelFunc06F5_0024:
	var0000 = UI_approach_avatar(0xFF2D, 0x0050, 0x0028);
	UI_play_sound_effect(0x0051);
	Func097F(0xFF2D, "@Avatar!@", 0x0005);
	UI_set_schedule_type(0xFF2D, 0x0003);
	return;
}


