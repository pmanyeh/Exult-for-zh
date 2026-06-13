#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func07AF object#(0x7AF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(UI_get_npc_object(0xFFE6) in UI_get_party_list())) goto labelFunc07AF_01F8;
	if (!(event == 0x0002)) goto labelFunc07AF_01DD;
	var0000 = UI_get_object_position(0xFFE6);
	var0000[0x0001] = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0000[0x0002] = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	UI_play_sound_effect(0x0074);
	UI_lightning();
	UI_sprite_effect(0x0029, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0009, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0000 = UI_get_object_position(0xFFE6);
	UI_remove_from_party(0xFFE6);
	var0001 = UI_get_cont_items(0xFFE6, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc07AF_00BD:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc07AF_01D3;
	var0005 = UI_get_item_shape(var0004);
	if (!((var0005 == 0x0118) || ((var0005 == 0x0119) || ((var0005 == 0x011F) || ((var0005 == 0x0198) || ((var0005 == 0x01A8) || ((var0005 == 0x020F) || (var0005 == 0x0327)))))))) goto labelFunc07AF_0116;
	UI_remove_item(var0004);
	goto labelFunc07AF_01D0;
labelFunc07AF_0116:
	if (!UI_set_last_created(var0004)) goto labelFunc07AF_01D0;
	UI_set_item_flag(var0004, 0x000B);
	var0006 = UI_update_last_created(var0000);
	if (!(!var0006)) goto labelFunc07AF_015B;
	var0006 = UI_update_last_created([(var0000[0x0001] - 0x0002), var0000[0x0002], var0000[0x0003]]);
labelFunc07AF_015B:
	if (!(!var0006)) goto labelFunc07AF_0182;
	var0006 = UI_update_last_created([var0000[0x0001], (var0000[0x0002] - 0x0002), var0000[0x0003]]);
labelFunc07AF_0182:
	if (!(!var0006)) goto labelFunc07AF_01A9;
	var0006 = UI_update_last_created([(var0000[0x0001] + 0x0002), var0000[0x0002], var0000[0x0003]]);
labelFunc07AF_01A9:
	if (!(!var0006)) goto labelFunc07AF_01D0;
	var0006 = UI_update_last_created([var0000[0x0001], (var0000[0x0002] + 0x0002), var0000[0x0003]]);
labelFunc07AF_01D0:
	goto labelFunc07AF_00BD;
labelFunc07AF_01D3:
	UI_remove_npc(0xFFE6);
	goto labelFunc07AF_01F8;
labelFunc07AF_01DD:
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0000, 0x0001), [(byte)0x55, 0x07AF], 0x000A);
labelFunc07AF_01F8:
	return;
}


