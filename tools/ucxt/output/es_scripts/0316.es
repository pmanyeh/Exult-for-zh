#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);
extern void Func0925 0x925 (var var0000);

void Func0316 shape#(0x316) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0316_004F;
	var0000 = UI_click_on_item();
	if (!UI_is_npc(var0000)) goto labelFunc0316_0026;
	UI_set_item_flag(var0000, 0x0000);
	goto labelFunc0316_0043;
labelFunc0316_0026:
	if (!UI_get_item_flag(var0000, 0x0012)) goto labelFunc0316_003D;
	UI_set_item_flag(var0000, 0x0000);
labelFunc0316_003D:
	Func08FE("@Do not waste that!@");
labelFunc0316_0043:
	UI_play_sound_effect2(0x0043, item);
	Func0925(item);
labelFunc0316_004F:
	return;
}


