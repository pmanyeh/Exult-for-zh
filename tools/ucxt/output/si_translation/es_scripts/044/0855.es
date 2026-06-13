#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0920 0x920 ();

void Func0855 0x855 (var var0000)
{
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

	var0001 = UI_find_nearby(item, 0x03B5, 0x0014, 0x0000);
	if (!(var0000 == 0x0009)) goto labelFunc0855_004A;
	Func097F(item, "@Stand back...@", 0x0000);
	if (!var0001) goto labelFunc0855_004A;
	var0002 = [0x0465, 0x099C, 0x0000];
	UI_si_path_run_usecode(item, var0002, 0x000A, item, 0x00E4, true);
labelFunc0855_004A:
	if (!(var0000 == 0x000A)) goto labelFunc0855_00D7;
	var0003 = (UI_find_nearby_avatar(0x010F) & UI_find_nearby_avatar(0x0110));
	var0004 = false;
	enum();
labelFunc0855_006B:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc0855_009F;
	var0008 = Func0920();
	var0008 = UI_execute_usecode_array(var0001, [(byte)0x46, 0x0001, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0006]);
	var0004 = true;
	goto labelFunc0855_006B;
labelFunc0855_009F:
	var0008 = UI_execute_usecode_array(item, [(byte)0x59, 0x0006, (byte)0x01, (byte)0x6C, (byte)0x61, (byte)0x0B, 0xFFFE, 0x0004]);
	var0008 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0014);
labelFunc0855_00D7:
	if (!(var0000 == 0x0002)) goto labelFunc0855_0156;
	Func097F(item, "@Oooh, my back...@", 0x000C);
	var0009 = UI_find_nearby(item, 0x010F, 0x0014, 0x0000);
	if (!var0009) goto labelFunc0855_0156;
	if (!UI_npc_nearby(var0009)) goto labelFunc0855_0129;
	var0008 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0014);
	goto labelFunc0855_0156;
labelFunc0855_0129:
	var000A = UI_get_object_position(var0009);
	var0008 = UI_set_last_created(var0009);
	if (!var0008) goto labelFunc0855_0156;
	var000A[0x0003] = 0x0000;
	var0008 = UI_update_last_created(var000A);
labelFunc0855_0156:
	var0009 = UI_find_nearby(item, 0x010F, 0x0014, 0x0000);
	enum();
labelFunc0855_0168:
	for (var0008 in var0009 with var000B to var000C) attend labelFunc0855_01A5;
	var000A = UI_get_object_position(var0009);
	if (!((var000A[0x0001] == 0x0469) && (var000A[0x0002] == 0x0998))) goto labelFunc0855_01A2;
	var0008 = UI_set_item_quality(var0009, 0x004B);
labelFunc0855_01A2:
	goto labelFunc0855_0168;
labelFunc0855_01A5:
	return;
}


