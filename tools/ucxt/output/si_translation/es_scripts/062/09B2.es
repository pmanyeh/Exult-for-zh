#game "serpentisle"
void Func09B2 0x9B2 ()
{
	var var0000;

	var0000 = (0x0406 + ((0x0002 - UI_get_skin_colour()) * 0x0002));
	if (!UI_is_pc_female()) goto labelFunc09B2_002B;
	UI_set_polymorph(0xFE9C, (var0000 + 0x0001));
	goto labelFunc09B2_0035;
labelFunc09B2_002B:
	UI_set_polymorph(0xFE9C, var0000);
labelFunc09B2_0035:
	return;
}


