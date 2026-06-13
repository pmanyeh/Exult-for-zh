#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0994 0x994 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func084D 0x84D (var var0000, var var0001);
extern var Func084E 0x84E (var var0000, var var0001);

void Func00FA shape#(0xFA) ()
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

	var0000 = Func09A0(0x0005, 0x0001);
	var0001 = Func09A0(0x0005, 0x0002);
	if (!((item == var0000) || (item == var0001))) goto labelFunc00FA_02BE;
	var0002 = [0xFF31, 0xFF2D, 0xFF2F, 0xFF2C, 0xFF2B];
	if (!gflags[0x0270]) goto labelFunc00FA_004B;
	var0002 = (var0002 & 0xFF29);
labelFunc00FA_004B:
	var0003 = (var0002 & [0xFF2A, 0xFF30, 0xFF2E]);
	var0004 = UI_get_item_quality(var0000);
	if (!(item == var0000)) goto labelFunc00FA_01EA;
	if (!(Func0994() != 0x0002)) goto labelFunc00FA_007B;
	abort;
labelFunc00FA_007B:
	if (!(var0004 == UI_get_item_quality(item))) goto labelFunc00FA_0094;
	var0004 = UI_get_random(0x0009);
	goto labelFunc00FA_007B;
labelFunc00FA_0094:
	if (!(gflags[0x00D4] && (gflags[0x00D5] && (gflags[0x00D3] && ((!UI_get_item_flag(0xFFFE, 0x001E)) && ((!UI_get_item_flag(0xFFFD, 0x001E)) && ((!UI_get_item_flag(0xFFFF, 0x001E)) && (!UI_get_item_flag(0xFF29, 0x001C))))))))) goto labelFunc00FA_00D8;
	var0004 = 0x000A;
labelFunc00FA_00D8:
	var0005 = UI_set_item_quality(item, var0004);
	gflags[0x0271] = false;
	var0005 = UI_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x58, 0x0006, (byte)0x27, 0x0007, (byte)0x0B, 0xFFFC, var0004]);
	if (!(var0004 == 0x000A)) goto labelFunc00FA_0133;
	var0006 = ["@The time hath come!@", "@The sacred bells!@", "@Xenka comes!@", "@What joy!@", "@To the chapel!@", "@The prophetess comes!@"];
	goto labelFunc00FA_016C;
labelFunc00FA_0133:
	if (!gflags[0x0270]) goto labelFunc00FA_0154;
	var0006 = ["@The bells!@", "@The end is near!@", "@It is time!@", "@Hasten!@", "@Quickly!@", "@Hear the bells!@"];
	goto labelFunc00FA_016C;
labelFunc00FA_0154:
	var0006 = ["@The bells!@", "@Xenka calls!@", "@It is time!@", "@Hasten!@", "@Quickly!@", "@Hear the bells!@"];
labelFunc00FA_016C:
	enum();
labelFunc00FA_016D:
	for (var0009 in var0002 with var0007 to var0008) attend labelFunc00FA_0196;
	Func097F(var0009, var0006[UI_get_random(UI_get_array_size(var0006))], UI_get_random(0x0014));
	goto labelFunc00FA_016D;
labelFunc00FA_0196:
	enum();
labelFunc00FA_0197:
	for (var0009 in var0003 with var000A to var000B) attend labelFunc00FA_01CB;
	var000C = UI_get_schedule_type(var0009);
	if (!((var000C != 0x000F) && (var000C != 0x0003))) goto labelFunc00FA_01C8;
	UI_set_schedule_type(var0009, 0x000C);
labelFunc00FA_01C8:
	goto labelFunc00FA_0197;
labelFunc00FA_01CB:
	gflags[0x0272] = false;
	var0005 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x00FA, 0x0000], 0x0014);
	abort;
labelFunc00FA_01EA:
	if (!(item == var0001)) goto labelFunc00FA_02BE;
	enum();
labelFunc00FA_01F3:
	for (var0009 in var0003 with var000D to var000E) attend labelFunc00FA_026F;
	var000C = UI_get_schedule_type(var0009);
	if (!(((var000C != 0x000F) && ((var000C != 0x0003) && (var000C != Func084D(var0009, var0004)))) || (var000C == 0x000C))) goto labelFunc00FA_0256;
	UI_set_new_schedules(var0009, 0x0000, Func084D(var0009, var0004), Func084E(var0009, var0004));
	UI_run_schedule(var0009);
	goto labelFunc00FA_026C;
labelFunc00FA_0256:
	if (!((var000C == 0x0003) || (var000C == 0x000F))) goto labelFunc00FA_026C;
	gflags[0x0272] = true;
labelFunc00FA_026C:
	goto labelFunc00FA_01F3;
labelFunc00FA_026F:
	if (!gflags[0x0272]) goto labelFunc00FA_028F;
	var0005 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x00FA, 0x0000], 0x0014);
labelFunc00FA_028F:
	if (!(!gflags[0x0271])) goto labelFunc00FA_02BE;
	gflags[0x0271] = true;
	if (!(var0004 != 0x000A)) goto labelFunc00FA_02BE;
	var0005 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x00FA, 0x0000], 0x03E8);
labelFunc00FA_02BE:
	return;
}


