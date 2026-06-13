#game "serpentisle"
// externs
extern var Func08BE 0x8BE (var var0000);
extern void Func08BD 0x8BD ();
extern void Func0924 0x924 (var var0000, var var0001);

void Func014A shape#(0x14A) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_object_position(item);
	var0001 = UI_get_item_frame(item);
	if (!((var0000[0x0001] == 0x03A7) && ((var0000[0x0002] == 0x041E) && (var0000[0x0003] == 0x0002)))) goto labelFunc014A_0051;
	if (!((var0001 == 0x0013) && Func08BE(0x0001))) goto labelFunc014A_004E;
	gflags[0x0243] = true;
	goto labelFunc014A_018C;
	goto labelFunc014A_0051;
labelFunc014A_004E:
	goto labelFunc014A_015A;
labelFunc014A_0051:
	if (!((var0000[0x0001] == 0x03AF) && ((var0000[0x0002] == 0x041B) && (var0000[0x0003] == 0x0002)))) goto labelFunc014A_0092;
	if (!((var0001 == 0x0014) && Func08BE(0x0002))) goto labelFunc014A_008F;
	gflags[0x0244] = true;
	goto labelFunc014A_018C;
	goto labelFunc014A_0092;
labelFunc014A_008F:
	goto labelFunc014A_015A;
labelFunc014A_0092:
	if (!((var0000[0x0001] == 0x03A9) && ((var0000[0x0002] == 0x0418) && (var0000[0x0003] == 0x0002)))) goto labelFunc014A_00D3;
	if (!((var0001 == 0x0015) && Func08BE(0x0003))) goto labelFunc014A_00D0;
	gflags[0x0245] = true;
	goto labelFunc014A_018C;
	goto labelFunc014A_00D3;
labelFunc014A_00D0:
	goto labelFunc014A_015A;
labelFunc014A_00D3:
	if (!((var0000[0x0001] == 0x03AB) && ((var0000[0x0002] == 0x0425) && (var0000[0x0003] == 0x0002)))) goto labelFunc014A_0114;
	if (!((var0001 == 0x0016) && Func08BE(0x0004))) goto labelFunc014A_0111;
	gflags[0x0246] = true;
	goto labelFunc014A_018C;
	goto labelFunc014A_0114;
labelFunc014A_0111:
	goto labelFunc014A_015A;
labelFunc014A_0114:
	if (!((var0000[0x0001] == 0x03B7) && ((var0000[0x0002] == 0x041F) && (var0000[0x0003] == 0x0002)))) goto labelFunc014A_0159;
	if (!((var0001 == 0x0013) && Func08BE(0x0005))) goto labelFunc014A_0152;
	gflags[0x0247] = true;
	goto labelFunc014A_018C;
	goto labelFunc014A_0159;
labelFunc014A_0152:
	gflags[0x0247] = false;
	goto labelFunc014A_015A;
labelFunc014A_0159:
	abort;
labelFunc014A_015A:
	Func08BD();
	UI_sprite_effect(0x0009, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	abort;
labelFunc014A_018C:
	if (!(gflags[0x0243] && (gflags[0x0244] && (gflags[0x0245] && (gflags[0x0246] && gflags[0x0247]))))) goto labelFunc014A_020A;
	var0002 = UI_find_nearest(item, 0x012F, 0x0014);
	if (!(!var0002)) goto labelFunc014A_01CD;
	var0002 = UI_find_nearest(item, 0x03A8, 0x0014);
	if (!(!var0002)) goto labelFunc014A_01CD;
	abort;
labelFunc014A_01CD:
	UI_sprite_effect(0x001A, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x001E);
	Func0924(var0002, 0xFE99);
	Func08BD();
	goto labelFunc014A_0238;
labelFunc014A_020A:
	UI_sprite_effect(0x000D, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0046);
labelFunc014A_0238:
	return;
}


