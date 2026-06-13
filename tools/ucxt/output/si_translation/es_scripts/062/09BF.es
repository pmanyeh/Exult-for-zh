#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func09BF 0x9BF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = [0x009A, 0x066C, 0x0000];
	var0001 = UI_die_roll(0x0001, 0x0006);
	var0002 = UI_die_roll(0x0001, 0x0006);
	var0000[0x0001] = (var0000[0x0001] + var0001);
	var0000[0x0002] = (var0000[0x0002] + var0002);
	UI_sprite_effect(0x0015, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	var0003 = UI_create_new_object(0x0200);
	if (!var0003) goto labelFunc09BF_0089;
	var0004 = UI_update_last_created(var0000);
labelFunc09BF_0089:
	var0005 = Func09A0(0x0004, 0x0002);
	var0006 = UI_set_item_quality(var0005, 0x0000);
	if (!(!var0004)) goto labelFunc09BF_00B0;
	UI_error_message("error, somebody stepped on the worm!-ewb");
labelFunc09BF_00B0:
	return;
}


