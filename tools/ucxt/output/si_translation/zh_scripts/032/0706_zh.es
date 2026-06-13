#game "serpentisle"
void Func0706 object#(0x706) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_party_list();
	if (!(0xFFE6 in var0000)) goto labelFunc0706_006F;
	var0001 = UI_get_object_position(0xFFE6);
	var0001[0x0001] = (var0001[0x0001] - (var0001[0x0003] / 0x0002));
	var0001[0x0002] = (var0001[0x0002] - (var0001[0x0003] / 0x0002));
	UI_remove_npc(0xFFE6);
	UI_sprite_effect(0x0011, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0706_006F:
	return;
}


