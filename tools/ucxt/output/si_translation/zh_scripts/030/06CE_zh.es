#game "serpentisle"
// externs
extern void Func09A3 0x9A3 (var var0000);
extern void Func09AD 0x9AD (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0971 0x971 (var var0000);
extern void Func07D2 object#(0x7D2) ();

void Func06CE object#(0x6CE) ()
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
	var var0017;

	if (!(event == 0x0003)) goto labelFunc06CE_0328;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0000)) goto labelFunc06CE_00D6;
	var0001 = UI_find_nearby(item, 0x01FB, 0x0014, 0x0000);
	enum();
labelFunc06CE_002C:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06CE_0098;
	var0005 = UI_get_object_position(var0004);
	var0005[0x0001] = (var0005[0x0001] - (var0005[0x0003] / 0x0002));
	var0005[0x0002] = (var0005[0x0002] - (var0005[0x0003] / 0x0002));
	UI_sprite_effect(0x0004, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	goto labelFunc06CE_002C;
labelFunc06CE_0098:
	enum();
labelFunc06CE_0099:
	for (var0004 in var0001 with var0006 to var0007) attend labelFunc06CE_00CA;
	var0005 = UI_get_object_position(var0004);
	Func09A3(var0004);
	var0008 = UI_create_new_object2(0x0210, var0005);
	Func09AD(var0008);
	goto labelFunc06CE_0099;
labelFunc06CE_00CA:
	Func097F(0xFE9C, "@Uh-oh...@", 0x0005);
labelFunc06CE_00D6:
	if (!(var0000 == 0x0001)) goto labelFunc06CE_019C;
	var0009 = UI_find_nearby(item, 0x03D1, 0x0014, 0x0000);
	enum();
labelFunc06CE_00F2:
	for (var000C in var0009 with var000A to var000B) attend labelFunc06CE_015E;
	var0005 = UI_get_object_position(var000C);
	var0005[0x0001] = (var0005[0x0001] - (var0005[0x0003] / 0x0002));
	var0005[0x0002] = (var0005[0x0002] - (var0005[0x0003] / 0x0002));
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0077);
	goto labelFunc06CE_00F2;
labelFunc06CE_015E:
	enum();
labelFunc06CE_015F:
	for (var000C in var0009 with var000D to var000E) attend labelFunc06CE_0190;
	var0005 = UI_get_object_position(var000C);
	Func0971(var000C);
	var000F = UI_create_new_object2(0x02F2, var0005);
	Func09AD(var000F);
	goto labelFunc06CE_015F;
labelFunc06CE_0190:
	Func097F(0xFE9C, "@By the Virtues!@", 0x0005);
labelFunc06CE_019C:
	if (!(var0000 == 0x0002)) goto labelFunc06CE_0268;
	var0001 = UI_find_nearby(item, 0x0356, 0x001E, 0x0000);
	enum();
labelFunc06CE_01B8:
	for (var0004 in var0001 with var0010 to var0011) attend labelFunc06CE_0224;
	var0005 = UI_get_object_position(var0004);
	var0005[0x0001] = (var0005[0x0001] - (var0005[0x0003] / 0x0002));
	var0005[0x0002] = (var0005[0x0002] - (var0005[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x005F);
	goto labelFunc06CE_01B8;
labelFunc06CE_0224:
	enum();
labelFunc06CE_0225:
	for (var0004 in var0001 with var0012 to var0013) attend labelFunc06CE_025C;
	var0005 = UI_get_object_position(var0004);
	Func09A3(var0004);
	var0008 = UI_create_new_object2(0x0226, var0005);
	Func09AD(var0008);
	var0008->Func07D2();
	goto labelFunc06CE_0225;
labelFunc06CE_025C:
	Func097F(0xFE9C, "@By the Virtues!@", 0x0005);
labelFunc06CE_0268:
	if (!(var0000 == 0x0003)) goto labelFunc06CE_0328;
	var0001 = UI_find_nearby(item, 0x0356, 0x0008, 0x0000);
	enum();
labelFunc06CE_0284:
	for (var0004 in var0001 with var0014 to var0015) attend labelFunc06CE_02F0;
	var0005 = UI_get_object_position(var0004);
	var0005[0x0001] = (var0005[0x0001] - (var0005[0x0003] / 0x0002));
	var0005[0x0002] = (var0005[0x0002] - (var0005[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x005F);
	goto labelFunc06CE_0284;
labelFunc06CE_02F0:
	enum();
labelFunc06CE_02F1:
	for (var0004 in var0001 with var0016 to var0017) attend labelFunc06CE_0328;
	var0005 = UI_get_object_position(var0004);
	Func09A3(var0004);
	var0008 = UI_create_new_object2(0x0226, var0005);
	Func09AD(var0008);
	var0008->Func07D2();
	goto labelFunc06CE_02F1;
labelFunc06CE_0328:
	return;
}


