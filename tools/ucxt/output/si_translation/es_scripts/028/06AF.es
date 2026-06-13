#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0993 0x993 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0982 0x982 (var var0000, var var0001);

void Func06AF object#(0x6AF) ()
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

	if (!(event == 0x0003)) goto labelFunc06AF_003C;
	var0000 = Func09A0(0x0007, 0x0003);
	if (!var0000) goto labelFunc06AF_003C;
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x06AF], 0x012C);
	var0001 = UI_set_item_quality(var0000, 0x00FA);
labelFunc06AF_003C:
	if (!(event == 0x0002)) goto labelFunc06AF_01AC;
	var0002 = UI_get_object_position(0xFE9C);
	var0003 = var0002[0x0001];
	var0004 = var0002[0x0002];
	if (!((var0003 > 0x000D) && ((var0003 < 0x00AB) && ((var0004 > 0x061F) && (var0004 < 0x067B))))) goto labelFunc06AF_00A1;
	var0001 = UI_set_item_quality(item, 0x00FA);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x06AF], 0x00FA);
	abort;
labelFunc06AF_00A1:
	var0005 = Func0993(var0002);
	if (!(var0005 == 0x0004)) goto labelFunc06AF_01AC;
	if (!(!gflags[0x01FC])) goto labelFunc06AF_018E;
	var0006 = ["@'Tis hot!@", "@Yow!@", "@It feels like a steambath.@", "@I am drenched.@", "@Doth anyone have ice?@", "@Blistering heat...@", "@Dost thou possess any cold spells, Avatar?@", "@I am roasting!@", "@Think cool thoughts.@", "@'Sblood, 'tis hot.@", "@Britannia for a fan!@", "@Uugghh. I am hot.@", "@Damn this heat!@"];
	var0007 = UI_get_party_list();
	enum();
labelFunc06AF_00F0:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc06AF_014B;
	var000B = UI_die_roll(0x0001, 0x0002);
	if (!(var000B == 0x0001)) goto labelFunc06AF_013B;
	var000C = UI_die_roll(0x0001, 0x000D);
	var000D = UI_die_roll(0x0001, 0x0006);
	Func097F(var000A, var0006[var000C], var000D);
labelFunc06AF_013B:
	Func0982(UI_get_npc_object(var000A), 0x0001);
	goto labelFunc06AF_00F0;
labelFunc06AF_014B:
	var000D = UI_get_item_quality(item);
	var000D = (var000D / 0x0002);
	if (!(var000D < 0x000F)) goto labelFunc06AF_016D;
	var000D = 0x000F;
labelFunc06AF_016D:
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x06AF], var000D);
	var0001 = UI_set_item_quality(item, var000D);
	goto labelFunc06AF_01AC;
labelFunc06AF_018E:
	var0001 = UI_set_item_quality(item, 0x00FA);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x06AF], 0x00FA);
labelFunc06AF_01AC:
	return;
}


