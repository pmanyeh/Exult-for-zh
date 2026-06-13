#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0971 0x971 (var var0000);

void Func0721 object#(0x721) ()
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;

	if (!(event == 0x0002)) goto labelFunc0721_0080;
	var0000 = [0x01FF, 0x0211, 0x0218, 0x02C2, 0x020C, 0x035D];
	enum();
labelFunc0721_0021:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0721_007F;
	var0004 = UI_find_nearby(item, var0003, 0x0014, 0x0000);
	enum();
labelFunc0721_003E:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0721_007C;
	var0008 = UI_get_object_position(var0007);
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0011, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0721_003E;
labelFunc0721_007C:
	goto labelFunc0721_0021;
labelFunc0721_007F:
	abort;
labelFunc0721_0080:
	var0009 = UI_get_item_quality(item);
	var000A = UI_find_nearby(item, 0x00D1, 0x0001, 0x0000);
	var000B = UI_get_item_frame(var000A);
	var0003 = true;
	if (!(var0009 == 0x0000)) goto labelFunc0721_00C3;
	if (!(var000B == 0x0003)) goto labelFunc0721_00C3;
	gflags[0x02AB] = true;
	var0003 = false;
labelFunc0721_00C3:
	if (!(var0009 == 0x0001)) goto labelFunc0721_00DF;
	if (!(var000B == 0x0012)) goto labelFunc0721_00DF;
	gflags[0x02AC] = true;
	var0003 = false;
labelFunc0721_00DF:
	if (!(var0009 == 0x0002)) goto labelFunc0721_00FB;
	if (!(var000B == 0x0004)) goto labelFunc0721_00FB;
	gflags[0x02AD] = true;
	var0003 = false;
labelFunc0721_00FB:
	if (!(var0009 == 0x0003)) goto labelFunc0721_0117;
	if (!(var000B == 0x0008)) goto labelFunc0721_0117;
	gflags[0x02AE] = true;
	var0003 = false;
labelFunc0721_0117:
	if (!(var0009 == 0x0004)) goto labelFunc0721_0133;
	if (!(var000B == 0x0006)) goto labelFunc0721_0133;
	gflags[0x02AF] = true;
	var0003 = false;
labelFunc0721_0133:
	if (!(var0009 == 0x0005)) goto labelFunc0721_014F;
	if (!(var000B == 0x0007)) goto labelFunc0721_014F;
	gflags[0x02B0] = true;
	var0003 = false;
labelFunc0721_014F:
	if (!var0003) goto labelFunc0721_01B0;
	var000C = UI_find_nearby(item, 0x0113, 0x0019, 0x0010);
	enum();
labelFunc0721_0167:
	for (var000F in var000C with var000D to var000E) attend labelFunc0721_01AD;
	var0010 = UI_execute_usecode_array(var000F, [(byte)0x48]);
	var0011 = Func09A0(0x0000, 0x0001);
	if (!var0011) goto labelFunc0721_01AA;
	var0010 = UI_delayed_execute_usecode_array(var0011, [(byte)0x23, (byte)0x55, 0x0721], 0x0005);
labelFunc0721_01AA:
	goto labelFunc0721_0167;
labelFunc0721_01AD:
	goto labelFunc0721_02FA;
labelFunc0721_01B0:
	var0008 = UI_get_object_position(item);
	UI_sprite_effect(0x0015, var0008[0x0001], (var0008[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func097F(0xFE9C, "@That did it!@", 0x0005);
	var0000 = [0x01FF, 0x0211, 0x0218, 0x02C2, 0x020C, 0x035D];
	enum();
labelFunc0721_0200:
	for (var0003 in var0000 with var0012 to var0013) attend labelFunc0721_0265;
	var0004 = UI_find_nearby(item, var0003, 0x0028, 0x0000);
	enum();
labelFunc0721_021D:
	for (var0007 in var0004 with var0014 to var0015) attend labelFunc0721_0262;
	var0008 = UI_get_object_position(var0007);
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0011, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_kill_npc(var0007);
	goto labelFunc0721_021D;
labelFunc0721_0262:
	goto labelFunc0721_0200;
labelFunc0721_0265:
	if (!(gflags[0x02AB] && (gflags[0x02AC] && (gflags[0x02AD] && (gflags[0x02AE] && (gflags[0x02AF] && gflags[0x02B0])))))) goto labelFunc0721_02FA;
	UI_sprite_effect(0x0007, var0008[0x0001], (var0008[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0016 = UI_create_new_object(0x02C1);
	if (!var0016) goto labelFunc0721_02FA;
	UI_clear_item_flag(var0016, 0x0012);
	var0010 = UI_set_item_quality(var0016, 0x00F1);
	var000A = UI_find_nearby(item, 0x00D1, 0x0001, 0x0000);
	if (!var000A) goto labelFunc0721_02F0;
	var0008 = UI_get_object_position(var000A);
	Func0971(var000A);
labelFunc0721_02F0:
	var0010 = UI_update_last_created(var0008);
labelFunc0721_02FA:
	return;
}


