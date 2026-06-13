#game "serpentisle"
// externs
extern var Func0941 0x941 (var var0000);

void Func0761 object#(0x761) ()
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

	UI_play_sound_effect(0x001E);
	var0000 = [0x038E, 0x0BB8, 0x0000];
	var0001 = (0x000F + Func0941(0xFE9C));
labelFunc0761_0023:
	if (!(var0001 != 0x0000)) goto labelFunc0761_00FA;
	var0001 = (var0001 - 0x0001);
	var0002 = (var0000[0x0001] + UI_die_roll(0xFFF7, 0x000A));
	var0003 = (var0000[0x0002] + UI_die_roll(0xFFEE, 0x000F));
	var0004 = var0000[0x0003];
	var0005 = [var0002, var0003, 0x0000];
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!((var0006 == 0x0001) || (var0006 == 0x0002))) goto labelFunc0761_00A0;
	var0007 = UI_create_new_object(0x037F);
labelFunc0761_00A0:
	if (!((var0006 == 0x0003) || (var0006 == 0x0004))) goto labelFunc0761_00BC;
	var0007 = UI_create_new_object(0x0231);
labelFunc0761_00BC:
	if (!var0007) goto labelFunc0761_00F7;
	var0008 = UI_die_roll(0x0005, 0x000F);
	var0006 = UI_set_item_quality(var0007, var0008);
	var0009 = UI_update_last_created(var0005);
	UI_set_item_flag(var0007, 0x0012);
	UI_play_sound_effect(0x0029);
labelFunc0761_00F7:
	goto labelFunc0761_0023;
labelFunc0761_00FA:
	return;
}


