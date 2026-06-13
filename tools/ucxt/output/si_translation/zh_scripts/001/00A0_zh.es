#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func00A0 shape#(0xA0) ()
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

	if (!(event == 0x0001)) goto labelFunc00A0_01C2;
	if (!gflags[0x0007]) goto labelFunc00A0_0019;
	UI_error_message("WARNING: $Temp1Flag is set!!! Report at what point in the game you are in.");
	gflags[0x0007] = false;
labelFunc00A0_0019:
	if (!gflags[0x0008]) goto labelFunc00A0_002A;
	UI_error_message("WARNING: $Temp2Flag is set!!! Report at what point in the game you are in.");
	gflags[0x0008] = false;
labelFunc00A0_002A:
	if (!gflags[0x0009]) goto labelFunc00A0_003B;
	UI_error_message("WARNING: $Temp3Flag is set!!! Report at what point in the game you are in.");
	gflags[0x0009] = false;
labelFunc00A0_003B:
	if (!gflags[0x000A]) goto labelFunc00A0_004C;
	UI_error_message("WARNING: $Temp4Flag is set!!! Report at what point in the game you are in.");
	gflags[0x000A] = false;
labelFunc00A0_004C:
	if (!gflags[0x0004]) goto labelFunc00A0_0148;
	var0000 = [0xFFC2, 0xFF6A, 0xFFB0, 0xFFC1, 0xFFBF, 0xFFB6, 0xFFBC, 0xFFB9, 0xFFB8, 0xFFB5, 0xFFB2, 0xFFB1, 0xFFBB, 0xFFB3, 0xFFBA, 0xFFF3, 0xFFD8, 0xFFEA, 0xFFE8, 0xFFE9, 0xFFE2, 0xFFE0, 0xFFE3, 0xFFE5, 0xFFEE, 0xFFEC, 0xFFD6, 0xFFD5, 0xFFEB, 0xFFF0, 0xFFF2, 0xFFD2, 0xFFD1, 0xFFCF, 0xFFCE, 0xFFCD, 0xFFCC, 0xFFCB, 0xFFCA, 0xFFD0, 0xFFC8, 0xFFC7, 0xFFC6, 0xFFC4, 0xFFC3, 0xFFAF, 0xFFDA, 0xFFD9, 0xFFD7, 0xFF71, 0xFF70, 0xFF6F, 0xFF67, 0xFF66];
	enum();
labelFunc00A0_00FB:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc00A0_0148;
	if (!((UI_get_schedule_type(var0003) != 0x000F) && (!UI_get_item_flag(var0003, 0x0004)))) goto labelFunc00A0_0145;
	UI_error_message((("NPC #" + var0003) + " is moving - get his schedule!"));
	UI_error_message(("His current activity is #" + UI_get_schedule_type(var0003)));
	UI_error_message("Save game, and report to Brendann NOW!");
labelFunc00A0_0145:
	goto labelFunc00A0_00FB;
labelFunc00A0_0148:
	var0000 = UI_find_nearby(item, 0x0113, 0x0008, 0x0010);
	enum();
labelFunc00A0_015A:
	for (var0006 in var0000 with var0004 to var0005) attend labelFunc00A0_01C2;
	if (!(UI_get_item_quality(var0006) && (UI_get_item_frame(var0006) == 0x0006))) goto labelFunc00A0_01BF;
	var0007 = UI_get_cont_items(0xFE9C, 0x022B, 0xFE99, 0xFE99);
	if (!var0007) goto labelFunc00A0_01BF;
	if (!UI_get_cont_items(var0007, 0x022F, 0xFE99, 0xFE99)) goto labelFunc00A0_01BF;
	Func090D(var0006, 0xFFFF, 0xFFFF, 0xFFFF, 0x00A0, var0006, 0x000A);
labelFunc00A0_01BF:
	goto labelFunc00A0_015A;
labelFunc00A0_01C2:
	if (!(event == 0x000A)) goto labelFunc00A0_022A;
	var0008 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x07DE, (byte)0x6D, (byte)0x0B, 0xFFFF, 0x000A]);
	var0009 = Func09A0(0x0000, 0x0004);
	var0008 = UI_execute_usecode_array(var0009, [(byte)0x23, (byte)0x27, 0x0012, (byte)0x55, 0x07E0]);
labelFunc00A0_022A:
	return;
}


