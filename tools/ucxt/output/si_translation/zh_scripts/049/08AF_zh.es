#game "serpentisle"
// externs
extern var Func08B0 0x8B0 (var var0000, var var0001, var var0002);
extern void Func08B1 0x8B1 (var var0000, var var0001, var var0002, var var0003);

void Func08AF 0x8AF (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(gflags[0x00CF] == false)) goto labelFunc08AF_0009;
	abort;
labelFunc08AF_0009:
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x004C);
	var0002 = 0x0001;
	var0003 = UI_get_container(var0000);
	if (!(!var0003)) goto labelFunc08AF_0053;
	var0002 = 0x0000;
	var0003 = UI_get_object_position(var0000);
labelFunc08AF_0053:
	if (!(!var0001)) goto labelFunc08AF_005D;
	goto labelFunc08AF_014B;
labelFunc08AF_005D:
	var0004 = UI_get_readied(0xFE9C, 0x0001);
	var0005 = UI_get_readied(0xFE9C, 0x0000);
	if (!(var0004 || var0005)) goto labelFunc08AF_014B;
	var0006 = Func08B0(var0004, var0005, 0x0001);
	var0006 = UI_set_last_created(var0000);
	if (!(!UI_give_last_created(0xFE9C))) goto labelFunc08AF_010E;
	if (!var0002) goto labelFunc08AF_00B8;
	var0006 = UI_give_last_created(var0003);
	goto labelFunc08AF_00C2;
labelFunc08AF_00B8:
	var0006 = UI_update_last_created(var0003);
labelFunc08AF_00C2:
	Func08B1(0xFE9C, var0000, 0x0001, 0xFF5B);
	if (!(!Func08B0(var0004, var0005, 0x0000))) goto labelFunc08AF_010B;
	var0007 = UI_get_object_position(0xFE9C);
	if (!var0004) goto labelFunc08AF_00FB;
	var0006 = UI_update_last_created(var0007);
labelFunc08AF_00FB:
	if (!var0005) goto labelFunc08AF_010B;
	var0006 = UI_update_last_created(var0007);
labelFunc08AF_010B:
	goto labelFunc08AF_0148;
labelFunc08AF_010E:
	if (!(!Func08B0(var0004, var0005, 0x0000))) goto labelFunc08AF_0148;
	var0007 = UI_get_object_position(0xFE9C);
	if (!var0004) goto labelFunc08AF_0138;
	var0006 = UI_update_last_created(var0007);
labelFunc08AF_0138:
	if (!var0005) goto labelFunc08AF_0148;
	var0006 = UI_update_last_created(var0007);
labelFunc08AF_0148:
	goto labelFunc08AF_018C;
labelFunc08AF_014B:
	var0006 = UI_set_last_created(var0000);
	if (!(!UI_give_last_created(0xFE9C))) goto labelFunc08AF_018C;
	if (!var0002) goto labelFunc08AF_0173;
	var0006 = UI_give_last_created(var0003);
	goto labelFunc08AF_017D;
labelFunc08AF_0173:
	var0006 = UI_update_last_created(var0003);
labelFunc08AF_017D:
	Func08B1(0xFE9C, var0000, var0002, var0003);
labelFunc08AF_018C:
	return;
}


