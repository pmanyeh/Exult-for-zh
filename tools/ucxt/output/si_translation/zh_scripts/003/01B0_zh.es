#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func0903 0x903 ();
extern void Func0904 0x904 (var var0000);
extern void Func0905 0x905 (var var0000);

void Func01B0 shape#(0x1B0) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!((event != 0x0001) && (event != 0x0002))) goto labelFunc01B0_000F;
	return;
labelFunc01B0_000F:
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0032)) goto labelFunc01B0_0050;
	if (!((gflags[0x007E] && (gflags[0x003E] && gflags[0x0091])) && ((!gflags[0x0048]) && (gflags[0x00A5] || (!gflags[0x002D]))))) goto labelFunc01B0_0050;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01C3]);
	abort;
labelFunc01B0_0050:
	if (!(var0000 == 0x00B3)) goto labelFunc01B0_0080;
	if (!((gflags[0x0170] || gflags[0x0172]) && (!(gflags[0x0170] && gflags[0x0172])))) goto labelFunc01B0_0080;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07F8]);
	abort;
labelFunc01B0_0080:
	var0002 = Func0906(item);
	if (!(var0002 == 0x0001)) goto labelFunc01B0_00D1;
	if (!Func0908(item, 0x01B1, 0x0000, 0x0000, 0x0003, 0x0005)) goto labelFunc01B0_00CE;
	Func0909(item, 0x010E, 0x0001, 0x0001, 0x0178, 0x0000, 0x0000, 0x0000, 0x0007);
	UI_play_sound_effect2(0x001F, item);
	goto labelFunc01B0_00D1;
labelFunc01B0_00CE:
	Func0903();
labelFunc01B0_00D1:
	if (!(var0002 == 0x0000)) goto labelFunc01B0_011B;
	if (!Func0908(item, 0x01B1, 0x0001, 0xFFFD, 0x0000, 0x0007)) goto labelFunc01B0_0118;
	Func0909(item, 0x010E, 0x0000, 0x0002, 0x0178, 0x0001, 0x0000, 0x0000, 0x0007);
	UI_play_sound_effect2(0x0020, item);
	goto labelFunc01B0_011B;
labelFunc01B0_0118:
	Func0903();
labelFunc01B0_011B:
	if (!(var0002 == 0x0002)) goto labelFunc01B0_0129;
	Func0904(item);
labelFunc01B0_0129:
	if (!(var0002 == 0x0003)) goto labelFunc01B0_0137;
	Func0905(item);
labelFunc01B0_0137:
	return;
}


