#game "serpentisle"
// externs
extern var Func08F7 0x8F7 ();
extern var Func0993 0x993 (var var0000);
extern var Func08F9 0x8F9 ();
extern var Func08B6 0x8B6 ();
extern var Func0995 0x995 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func08FA 0x8FA ()
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

	message("\"We have restored life to thy flesh, as promised, Hero from Another World. Now thou must continue thy quest.\"");
	say();
	message("\"We know not for certain from where thou wilt continue...\"");
	say();
	var0000 = [0x0408, 0x07CE];
	var0001 = [0x036B, 0x0ABB];
	var0002 = [0x0804, 0x0740];
	var0003 = [0x03FC, 0x03AC];
	var0004 = var0000;
	if (!gflags[0x01CC]) goto labelFunc08FA_0093;
	if (!gflags[0x01FE]) goto labelFunc08FA_008A;
	var0005 = UI_die_roll(0x0001, 0x0003);
	if (!(var0005 == 0x0001)) goto labelFunc08FA_0067;
	var0004 = var0000;
labelFunc08FA_0067:
	if (!(var0005 == 0x0002)) goto labelFunc08FA_0077;
	var0004 = var0001;
labelFunc08FA_0077:
	if (!(var0005 == 0x0003)) goto labelFunc08FA_0087;
	var0004 = var0002;
labelFunc08FA_0087:
	goto labelFunc08FA_0090;
labelFunc08FA_008A:
	var0004 = var0002;
labelFunc08FA_0090:
	goto labelFunc08FA_00B3;
labelFunc08FA_0093:
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc08FA_00AD;
	var0004 = var0000;
	goto labelFunc08FA_00B3;
labelFunc08FA_00AD:
	var0004 = var0001;
labelFunc08FA_00B3:
	var0006 = Func08F7();
	var0007 = Func0993(var0006);
	if (!((var0007 == 0x0005) || ((var0007 == 0x0008) || ((var0007 == 0x000A) || ((var0007 == 0x0011) || ((var0007 == 0x0012) || ((var0007 == 0x0014) || ((var0007 == 0x0015) || ((var0007 == 0x0016) || ((var0007 == 0x0017) || ((var0007 == 0x0018) || ((var0007 == 0x0019) || (var0007 == 0x001D))))))))))))) goto labelFunc08FA_012A;
	var0004 = var0003;
labelFunc08FA_012A:
	if (!Func08F9()) goto labelFunc08FA_0136;
	var0004 = Func08F7();
labelFunc08FA_0136:
	var0008 = Func08B6();
	var0008 = [0xFE9C, var0008];
	enum();
labelFunc08FA_0149:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc08FA_016B;
	UI_clear_item_flag(var000B, 0x0001);
	UI_move_object(var000B, var0004);
	goto labelFunc08FA_0149;
labelFunc08FA_016B:
	UI_sprite_effect(0x0007, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	gflags[0x026F] = false;
	if (!Func0995()) goto labelFunc08FA_01A5;
	UI_set_item_flag(0xFE9C, 0x0025);
labelFunc08FA_01A5:
	var000C = Func09A0(0x0005, 0x0001);
	var000D = Func09A0(0x0005, 0x0002);
	UI_halt_scheduled(var000C);
	UI_halt_scheduled(var000D);
	abort;
	return;
}


