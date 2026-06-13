#game "serpentisle"
void Func0884 0x884 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(var0000 == 0x0001)) goto labelFunc0884_0019;
	var0001 = [0x09E9, 0x0B90, 0x0000];
labelFunc0884_0019:
	if (!(var0000 == 0x0002)) goto labelFunc0884_0032;
	var0001 = [0x09E9, 0x0B70, 0x0000];
labelFunc0884_0032:
	if (!(var0000 == 0x0003)) goto labelFunc0884_004B;
	var0001 = [0x0B79, 0x0ADE, 0x0000];
labelFunc0884_004B:
	var0002 = (UI_find_nearby(item, 0x010E, 0x000A, 0x0000) & UI_find_nearby(item, 0x0178, 0x000A, 0x0000));
	enum();
labelFunc0884_006C:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0884_0106;
	var0001 = UI_get_object_position(var0005);
	var0006 = UI_get_item_shape(var0005);
	UI_remove_item(var0005);
	if (!(var0006 == 0x010E)) goto labelFunc0884_00A5;
	var0006 = 0x0178;
	goto labelFunc0884_00AB;
labelFunc0884_00A5:
	var0006 = 0x010E;
labelFunc0884_00AB:
	var0007 = UI_create_new_object(var0006);
	if (!var0007) goto labelFunc0884_0103;
	var0005 = UI_update_last_created([var0001]);
	UI_play_sound_effect(0x0069);
	UI_set_item_frame(var0007, 0x0007);
	if (!(var0000 == 0x0001)) goto labelFunc0884_00E7;
	gflags[0x02ED] = true;
labelFunc0884_00E7:
	if (!(var0000 == 0x0002)) goto labelFunc0884_00F5;
	gflags[0x02EF] = true;
labelFunc0884_00F5:
	if (!(var0000 == 0x0003)) goto labelFunc0884_0103;
	gflags[0x02F0] = true;
labelFunc0884_0103:
	goto labelFunc0884_006C;
labelFunc0884_0106:
	return;
}


