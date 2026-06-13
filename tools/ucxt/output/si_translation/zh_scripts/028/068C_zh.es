#game "serpentisle"
void Func068C object#(0x68C) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	if (!(gflags[0x0004] == true)) goto labelFunc068C_014F;
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = [0x0125, 0x0351, 0x0274, 0x02CD, 0x0222, 0x019F, 0x012C, 0x01A5, 0x021A, 0x017A, 0x01A6];
	UI_move_object(0xFE9C, [0x0880, 0x0680, 0x0000]);
	enum();
labelFunc068C_004D:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc068C_007B;
	var0005 = UI_find_nearby_avatar(var0004);
	enum();
labelFunc068C_0063:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc068C_0078;
	UI_remove_item(var0008);
	goto labelFunc068C_0063;
labelFunc068C_0078:
	goto labelFunc068C_004D;
labelFunc068C_007B:
	UI_move_object(0xFE9C, [0x0980, 0x0680, 0x0000]);
	enum();
labelFunc068C_008F:
	for (var0004 in var0001 with var0009 to var000A) attend labelFunc068C_00BD;
	var0005 = UI_find_nearby_avatar(var0004);
	enum();
labelFunc068C_00A5:
	for (var0008 in var0005 with var000B to var000C) attend labelFunc068C_00BA;
	UI_remove_item(var0008);
	goto labelFunc068C_00A5;
labelFunc068C_00BA:
	goto labelFunc068C_008F;
labelFunc068C_00BD:
	UI_move_object(0xFE9C, [0x0880, 0x0780, 0x0000]);
	enum();
labelFunc068C_00D1:
	for (var0004 in var0001 with var000D to var000E) attend labelFunc068C_00FF;
	var0005 = UI_find_nearby_avatar(var0004);
	enum();
labelFunc068C_00E7:
	for (var0008 in var0005 with var000F to var0010) attend labelFunc068C_00FC;
	UI_remove_item(var0008);
	goto labelFunc068C_00E7;
labelFunc068C_00FC:
	goto labelFunc068C_00D1;
labelFunc068C_00FF:
	UI_move_object(0xFE9C, [0x0980, 0x0780, 0x0000]);
	enum();
labelFunc068C_0113:
	for (var0004 in var0001 with var0011 to var0012) attend labelFunc068C_0141;
	var0005 = UI_find_nearby_avatar(var0004);
	enum();
labelFunc068C_0129:
	for (var0008 in var0005 with var0013 to var0014) attend labelFunc068C_013E;
	UI_remove_item(var0008);
	goto labelFunc068C_0129;
labelFunc068C_013E:
	goto labelFunc068C_0113;
labelFunc068C_0141:
	UI_move_object(0xFE9C, var0000);
	gflags[0x0318] = true;
labelFunc068C_014F:
	return;
}


