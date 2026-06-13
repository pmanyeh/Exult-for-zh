#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);

void Func0303 shape#(0x303) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0004)) goto labelFunc0303_000F;
	var0000 = item;
	goto labelFunc0303_0016;
labelFunc0303_000F:
	var0000 = UI_click_on_item();
labelFunc0303_0016:
	if (!var0000) goto labelFunc0303_00E0;
	UI_close_gumps();
	var0001 = UI_get_item_shape(var0000);
	if (!(var0001 == 0x0392)) goto labelFunc0303_007B;
	var0002 = Func092D(var0000);
	var0003 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0005, (byte)0x2D]);
	var0003 = UI_set_to_attack(0xFE9C, var0000, 0x02C0);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0002, (byte)0x01, (byte)0x67, (byte)0x61, (byte)0x7A]);
labelFunc0303_007B:
	if (!(var0001 == 0x0131)) goto labelFunc0303_00D5;
	var0004 = UI_find_nearby(item, 0x00A8, 0x000C, 0x00B0);
	var0005 = UI_find_nearby(0xFE9C, 0x0193, 0x0050, 0x0000);
	if (!(!var0005)) goto labelFunc0303_00BF;
	if (!(!var0004)) goto labelFunc0303_00BC;
	UI_run_endgame(true);
labelFunc0303_00BC:
	goto labelFunc0303_00D5;
labelFunc0303_00BF:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("法杖發出微弱的光芒。Batlin 假笑著。\"時候未到，聖者。\"");
	say();
	UI_remove_npc_face(0xFFE6);
	abort;
labelFunc0303_00D5:
	UI_play_sound_effect(0x003E);
	UI_lightning();
labelFunc0303_00E0:
	return;
}


