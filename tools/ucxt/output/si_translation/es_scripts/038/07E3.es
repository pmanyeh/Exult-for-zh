#game "serpentisle"
void Func07E3 object#(0x7E3) ()
{
	if (!UI_is_npc(item)) goto labelFunc07E3_0018;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	goto labelFunc07E3_0025;
labelFunc07E3_0018:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
labelFunc07E3_0025:
	return;
}


