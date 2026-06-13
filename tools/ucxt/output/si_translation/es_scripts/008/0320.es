#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0320 shape#(0x320) ()
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

	var0000 = 0xFE9C;
	var0001 = UI_get_item_quality(item);
	var0002 = UI_set_item_quality(item, 0x0000);
	var0003 = UI_get_object_position(item);
	var0004 = UI_get_object_position(0xFE9C);
	if (!(var0001 < 0x00FB)) goto labelFunc0320_0153;
	UI_sprite_effect(0x002F, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	if (!var0002) goto labelFunc0320_0153;
	Func097F(0xFE9C, "@Trapped!@", 0x0000);
	var0005 = UI_get_party_list();
	var0006 = 0x0010;
	enum();
labelFunc0320_007B:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc0320_00C7;
	UI_set_item_flag(var0009, 0x0008);
	UI_set_item_flag(var0009, 0x0007);
	UI_set_item_flag(var0009, 0x0002);
	UI_set_item_flag(var0009, 0x0003);
	var0006 = (var0006 + 0x0010);
	Func097F(0xFE9C, "@Arrrgh!@", var0006);
	goto labelFunc0320_007B;
labelFunc0320_00C7:
	UI_sprite_effect(0x0021, (var0004[0x0001] + 0x0002), var0004[0x0002], 0xFFFF, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0021, var0004[0x0001], (var0004[0x0002] + 0x0002), 0x0000, 0xFFFF, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0021, (var0004[0x0001] - 0x0002), var0004[0x0002], 0x0001, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0021, var0004[0x0001], (var0004[0x0002] - 0x0002), 0x0000, 0x0001, 0x0000, 0xFFFF);
labelFunc0320_0153:
	if (!(var0001 == 0x00FB)) goto labelFunc0320_01C4;
	UI_sprite_effect(0x001A, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x001D);
	Func097F(0xFE9C, "@Yow!", 0x0002);
	Func097F(0xFE9C, "'Twas trapped!@", 0x0012);
	UI_set_item_flag(0xFE9C, 0x0003);
	UI_sprite_effect(0x001A, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0320_01C4:
	if (!(var0001 == 0x00FC)) goto labelFunc0320_021A;
	UI_play_sound_effect(0x0052);
	var0002 = UI_create_new_object(0x0386);
	if (!var0002) goto labelFunc0320_021A;
	Func097F(0xFE9C, "@'Twas trapped!@", 0x0002);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_update_last_created(var0004);
labelFunc0320_021A:
	if (!(var0001 == 0x00FD)) goto labelFunc0320_026D;
	UI_play_sound_effect(0x005C);
	UI_sprite_effect(0x0006, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func097F(0xFE9C, "@Run away!@", 0x0000);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x060F], 0x0005);
labelFunc0320_026D:
	if (!(var0001 == 0x00FE)) goto labelFunc0320_02C3;
	UI_play_sound_effect(0x0068);
	var0002 = UI_create_new_object(0x0384);
	if (!var0002) goto labelFunc0320_02C3;
	Func097F(0xFE9C, "@Aagh! Poison!@", 0x0002);
	UI_sprite_effect(0x000D, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_update_last_created(var0004);
labelFunc0320_02C3:
	if (!(var0001 == 0x00FF)) goto labelFunc0320_0330;
	UI_sprite_effect(0x001B, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000A = UI_create_new_object(0x037F);
	if (!var000A) goto labelFunc0320_0330;
	UI_play_sound_effect(0x0027);
	var0002 = UI_update_last_created(var0004);
	var0002 = UI_delayed_execute_usecode_array(var000A, [(byte)0x23, (byte)0x55, 0x02C0], 0x0007);
	Func097F(0xFE9C, "@Run away!@", 0x0002);
labelFunc0320_0330:
	return;
}


