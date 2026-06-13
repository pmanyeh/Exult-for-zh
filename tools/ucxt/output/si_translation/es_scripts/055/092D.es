#game "serpentisle"
void Func092D 0x92D (var var0000, var var0001, var var0002)
{
	if (!((var0002 == 0x0001) || (var0002 == 0x0002))) goto labelFunc092D_0030;
	UI_set_item_shape(var0000, var0001);
	UI_halt_scheduled(var0000);
	UI_play_sound_effect(0x0021);
	UI_set_light(item, true);
labelFunc092D_0030:
	if (!(var0002 == 0x000A)) goto labelFunc092D_0058;
	UI_set_item_shape(var0000, var0001);
	UI_halt_scheduled(var0000);
	UI_play_sound_effect(0x0021);
	UI_set_light(item, true);
labelFunc092D_0058:
	if (!(var0002 == 0x0005)) goto labelFunc092D_0068;
	UI_set_light(item, true);
labelFunc092D_0068:
	if (!(var0002 == 0x0006)) goto labelFunc092D_0078;
	UI_set_light(item, false);
labelFunc092D_0078:
	return;
}


