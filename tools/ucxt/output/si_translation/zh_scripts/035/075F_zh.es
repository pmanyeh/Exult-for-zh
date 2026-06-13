#game "serpentisle"
// externs
extern void Func0884 0x884 (var var0000);
extern void Func0885 0x885 (var var0000);

void Func075F object#(0x75F) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_find_nearby(item, 0x0376, 0x0005, 0x0000);
	var0001 = UI_get_item_frame(var0000);
	if (!((var0001 % 0x0002) == 0x0000)) goto labelFunc075F_003A;
	UI_set_item_frame(var0000, (var0001 + 0x0001));
	goto labelFunc075F_0048;
labelFunc075F_003A:
	UI_set_item_frame(var0000, (var0001 - 0x0001));
labelFunc075F_0048:
	UI_play_sound_effect2(0x0046, var0000);
	var0002 = UI_get_item_quality(var0000);
	if (!(var0002 == 0x0000)) goto labelFunc075F_006C;
	Func0884(var0002);
labelFunc075F_006C:
	if (!(var0002 == 0x0001)) goto labelFunc075F_0083;
	if (!(!gflags[0x02ED])) goto labelFunc075F_0083;
	Func0884(var0002);
labelFunc075F_0083:
	if (!(var0002 == 0x0002)) goto labelFunc075F_009A;
	if (!(!gflags[0x02EF])) goto labelFunc075F_009A;
	Func0884(var0002);
labelFunc075F_009A:
	if (!(var0002 == 0x0003)) goto labelFunc075F_00B1;
	if (!(!gflags[0x02F0])) goto labelFunc075F_00B1;
	Func0884(var0002);
labelFunc075F_00B1:
	if (!((var0002 >= 0x0004) && (var0002 <= 0x0006))) goto labelFunc075F_00C9;
	Func0885(var0002);
labelFunc075F_00C9:
	return;
}


