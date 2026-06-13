#game "serpentisle"
// externs
extern var Func0942 0x942 (var var0000);

void Func0303 shape#(0x303) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0004)) goto labelFunc0303_000F;
	var0000 = item;
	goto labelFunc0303_0016;
labelFunc0303_000F:
	var0000 = UI_click_on_item();
labelFunc0303_0016:
	if (!(!gflags[0x0006])) goto labelFunc0303_001E;
	return;
labelFunc0303_001E:
	if (!var0000) goto labelFunc0303_010A;
	UI_close_gumps();
	if (!UI_is_npc(var0000)) goto labelFunc0303_003B;
	var0001 = var0000;
	goto labelFunc0303_0041;
labelFunc0303_003B:
	var0001 = 0xFE9C;
labelFunc0303_0041:
	UI_obj_sprite_effect(var0001, 0x0009, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_get_random(0x0003);
	if (!((var0002 == 0x0001) || (var0002 == 0x0002))) goto labelFunc0303_00D1;
	var0003 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x65, (byte)0x52, "Ah... ah... CHOO!", (byte)0x6C, (byte)0x27, 0x0002, (byte)0x65, (byte)0x61], 0x0005);
	if (!((var0001 == 0xFE9C) && (Func0942(0xFFFE) && (UI_get_random(0x0002) == 0x0001)))) goto labelFunc0303_00D1;
	var0003 = UI_delayed_execute_usecode_array(0xFFFE, [(byte)0x23, (byte)0x52, "Gesundheit!"], 0x000C);
labelFunc0303_00D1:
	if (!(var0002 == 0x0003)) goto labelFunc0303_00FF;
	var0003 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x68, (byte)0x52, "I am late again! Oh, no!", (byte)0x6F, (byte)0x27, 0x0002, (byte)0x65, (byte)0x61], 0x0005);
labelFunc0303_00FF:
	UI_play_sound_effect(0x0074);
	UI_lightning();
labelFunc0303_010A:
	return;
}


