#game "serpentisle"
void Func0763 object#(0x763) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	if (!(event == 0x0003)) goto labelFunc0763_0155;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x00D1, 0x0001, 0x0000);
	var0002 = 0x0000;
	enum();
labelFunc0763_0028:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0763_0083;
	var0006 = UI_get_item_frame(var0005);
	var0007 = UI_get_object_position(item);
	var0008 = UI_get_object_position(var0005);
	if (!((var0000 > 0x0000) && ((var0006 > 0x0009) && ((var0006 < 0x000E) && (var0007[0x0003] == var0008[0x0003]))))) goto labelFunc0763_0080;
	var0002 = var0005;
	goto labelFunc0763_0083;
labelFunc0763_0080:
	goto labelFunc0763_0028;
labelFunc0763_0083:
	if (!var0002) goto labelFunc0763_0155;
	if (!(var0006 == 0x000A)) goto labelFunc0763_00A2;
	if (!(!gflags[0x02CD])) goto labelFunc0763_00A1;
	gflags[0x02CD] = true;
	goto labelFunc0763_00A2;
labelFunc0763_00A1:
	return;
labelFunc0763_00A2:
	if (!(var0006 == 0x000B)) goto labelFunc0763_00BB;
	if (!(!gflags[0x02CE])) goto labelFunc0763_00BA;
	gflags[0x02CE] = true;
	goto labelFunc0763_00BB;
labelFunc0763_00BA:
	return;
labelFunc0763_00BB:
	if (!(var0006 == 0x000C)) goto labelFunc0763_00D4;
	if (!(!gflags[0x02CF])) goto labelFunc0763_00D3;
	gflags[0x02CF] = true;
	goto labelFunc0763_00D4;
labelFunc0763_00D3:
	return;
labelFunc0763_00D4:
	if (!(var0006 == 0x000D)) goto labelFunc0763_00ED;
	if (!(!gflags[0x02D0])) goto labelFunc0763_00EC;
	gflags[0x02D0] = true;
	goto labelFunc0763_00ED;
labelFunc0763_00EC:
	return;
labelFunc0763_00ED:
	var0009 = UI_get_object_position(item);
	var0009[0x0001] = (var0009[0x0001] - (var0009[0x0003] / 0x0002));
	var0009[0x0002] = (var0009[0x0002] - (var0009[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	UI_remove_item(var0002);
	UI_remove_item(item);
labelFunc0763_0155:
	return;
}


