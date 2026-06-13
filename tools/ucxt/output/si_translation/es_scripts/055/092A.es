#game "serpentisle"
void Func092A 0x92A (var var0000)
{
	var var0001;
	var var0002;

	if (!(var0000 == 0x00C9)) goto labelFunc092A_0019;
	var0001 = [0x007B, 0x06BB, 0x0000];
labelFunc092A_0019:
	if (!(var0000 == 0x00CA)) goto labelFunc092A_0032;
	var0001 = [0x0087, 0x06BB, 0x0000];
labelFunc092A_0032:
	if (!(var0000 == 0x00CB)) goto labelFunc092A_004B;
	var0001 = [0x0093, 0x06BB, 0x0000];
labelFunc092A_004B:
	if (!(var0000 == 0x00CC)) goto labelFunc092A_0064;
	var0001 = [0x007B, 0x06D4, 0x0000];
labelFunc092A_0064:
	if (!(var0000 == 0x00CD)) goto labelFunc092A_007D;
	var0001 = [0x0087, 0x06D4, 0x0000];
labelFunc092A_007D:
	if (!(var0000 == 0x00CE)) goto labelFunc092A_0096;
	var0001 = [0x0093, 0x06D4, 0x0000];
labelFunc092A_0096:
	if (!(var0000 == 0x00CF)) goto labelFunc092A_00AF;
	var0001 = [0x0095, 0x06C7, 0x0000];
labelFunc092A_00AF:
	if (!(var0000 == 0x00D3)) goto labelFunc092A_00C8;
	var0001 = [0x0512, 0x08A0, 0x0006];
labelFunc092A_00C8:
	if (!(var0000 == 0x00D4)) goto labelFunc092A_00E1;
	var0001 = [0x0501, 0x0892, 0x0006];
labelFunc092A_00E1:
	if (!(var0000 == 0x00D5)) goto labelFunc092A_00FA;
	var0001 = [0x0504, 0x08A2, 0x0006];
labelFunc092A_00FA:
	if (!(var0000 == 0x00D6)) goto labelFunc092A_0113;
	var0001 = [0x04F4, 0x08B7, 0x0006];
labelFunc092A_0113:
	if (!(var0000 == 0x00D7)) goto labelFunc092A_012C;
	var0001 = [0x04F2, 0x08C7, 0x0006];
labelFunc092A_012C:
	if (!(var0000 == 0x00D8)) goto labelFunc092A_0145;
	var0001 = [0x0502, 0x08C7, 0x0006];
labelFunc092A_0145:
	if (!(var0000 == 0x00D9)) goto labelFunc092A_015E;
	var0001 = [0x0512, 0x08C7, 0x0006];
labelFunc092A_015E:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9B, var0001);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0003);
	return;
}


