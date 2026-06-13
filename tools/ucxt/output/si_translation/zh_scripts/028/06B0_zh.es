#game "serpentisle"
void Func06B0 object#(0x6B0) ()
{
	var var0000;
	var var0001;

	if (!(gflags[0x021B] == true)) goto labelFunc06B0_004B;
	var0000 = UI_find_nearby(item, 0x02CA, 0x000A, 0x0000);
	if (!var0000) goto labelFunc06B0_0029;
	UI_set_item_frame(var0000, 0x0000);
labelFunc06B0_0029:
	var0001 = UI_find_nearby(item, 0x019C, 0x000A, 0x0000);
	if (!var0001) goto labelFunc06B0_004A;
	UI_set_item_frame(var0001, 0x0001);
labelFunc06B0_004A:
	abort;
labelFunc06B0_004B:
	return;
}


