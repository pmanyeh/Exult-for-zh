#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0927 0x927 ()
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

	UI_play_music(0x001C, Func09A0(0x0005, 0x0001));
	var0000 = [0xFF55, 0xFF54, 0xFF53, 0xFF52, 0xFF51];
	var0001 = ["@Ohh! Yes!@", "@Most pleasant!@", "@Oh, my!@", "@Do thou that again!@", "@Oh, baby...@"];
	enum();
labelFunc0927_003B:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc0927_0069;
	var0005 = UI_die_roll(0x0001, 0x0005);
	Func097F(var0004, var0001[var0005], UI_get_random(0x000A));
	goto labelFunc0927_003B;
labelFunc0927_0069:
	if (!(gflags[0x01EE] == true)) goto labelFunc0927_0089;
	var0006 = UI_delayed_execute_usecode_array(0xFF4D, [(byte)0x55, 0x04B3], 0x0019);
	goto labelFunc0927_0157;
labelFunc0927_0089:
	if (!UI_is_pc_female()) goto labelFunc0927_00F5;
	UI_clear_item_say(0xFF51);
	Func097F(0xFF51, "@I can't resist...@", 0x0000);
	var0007 = UI_find_nearby(item, 0x0178, 0x000A, 0x0000);
	if (!var0007) goto labelFunc0927_00F2;
	var0008 = UI_get_object_position(var0007);
	UI_si_path_run_usecode(0xFF51, [(var0008[0x0001] + 0x0001), var0008[0x0002], var0008[0x0003]], 0x0007, UI_get_npc_object(0xFF51), 0x04B3, true);
labelFunc0927_00F2:
	goto labelFunc0927_0157;
labelFunc0927_00F5:
	UI_clear_item_say(0xFF53);
	Func097F(0xFF53, "@I can't resist...@", 0x0000);
	var0007 = UI_find_nearby(item, 0x0178, 0x000A, 0x0000);
	if (!var0007) goto labelFunc0927_0157;
	var0008 = UI_get_object_position(var0007);
	UI_si_path_run_usecode(0xFF53, [(var0008[0x0001] + 0x0001), var0008[0x0002], var0008[0x0003]], 0x0007, UI_get_npc_object(0xFF53), 0x04B3, true);
labelFunc0927_0157:
	abort;
	return;
}


