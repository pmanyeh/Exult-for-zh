#game "serpentisle"
// externs
extern void Func0907 0x907 (var var0000, var var0001);

void Func071A object#(0x71A) ()
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

	if (!(event == 0x0003)) goto labelFunc071A_021C;
	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = UI_find_nearby(item, 0x014A, 0x0008, 0x0000);
	enum();
labelFunc071A_002A:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc071A_008C;
	var0008 = UI_get_item_frame(var0007);
	var0009 = ("I see f " + var0008);
	if (!(var0008 == 0x0019)) goto labelFunc071A_0059;
	var0000 = var0007;
labelFunc071A_0059:
	if (!(var0008 == 0x0015)) goto labelFunc071A_0069;
	var0001 = var0007;
labelFunc071A_0069:
	if (!(var0008 == 0x0017)) goto labelFunc071A_0079;
	var0002 = var0007;
labelFunc071A_0079:
	if (!(var0008 == 0x0018)) goto labelFunc071A_0089;
	var0003 = var0007;
labelFunc071A_0089:
	goto labelFunc071A_002A;
labelFunc071A_008C:
	if (!(var0000 && (var0001 && (var0002 && var0003)))) goto labelFunc071A_021C;
	var000A = UI_get_object_position(var0000);
	var000B = UI_get_object_position(var0001);
	var000C = UI_get_object_position(var0002);
	var000D = UI_get_object_position(var0003);
	var0009 = (((((((" B=" + var000A[0x0001]) + " C=") + var000B[0x0001]) + " O=") + var000C[0x0001]) + " W=") + var000D[0x0001]);
	var000E = var000A[0x0002];
	var000F = var000A[0x0002];
	if (!(var000B[0x0002] < var000F)) goto labelFunc071A_011C;
	var000F = var000B[0x0002];
labelFunc071A_011C:
	if (!(var000C[0x0002] < var000F)) goto labelFunc071A_0132;
	var000F = var000C[0x0002];
labelFunc071A_0132:
	if (!(var000D[0x0002] < var000F)) goto labelFunc071A_0148;
	var000F = var000D[0x0002];
labelFunc071A_0148:
	if (!(var000B[0x0002] > var000E)) goto labelFunc071A_015E;
	var000E = var000B[0x0002];
labelFunc071A_015E:
	if (!(var000C[0x0002] > var000E)) goto labelFunc071A_0174;
	var000E = var000C[0x0002];
labelFunc071A_0174:
	if (!(var000D[0x0002] > var000E)) goto labelFunc071A_018A;
	var000E = var000D[0x0002];
labelFunc071A_018A:
	var0010 = (var000E - var000F);
	if (!((var000A[0x0001] < var000B[0x0001]) && ((var000B[0x0001] < var000C[0x0001]) && ((var000C[0x0001] < var000D[0x0001]) && (var0010 < 0x0002))))) goto labelFunc071A_021C;
	var0011 = UI_find_nearby(item, 0x010E, 0x0008, 0x0000);
	if (!var0011) goto labelFunc071A_01E8;
	Func0907(var0011, 0x0000);
labelFunc071A_01E8:
	var0012 = UI_find_nearby(item, 0x01B0, 0x0008, 0x0000);
	if (!var0012) goto labelFunc071A_021C;
	Func0907(var0012, 0x0000);
	var0013 = UI_execute_usecode_array(var0012, [(byte)0x23, (byte)0x55, 0x01B0]);
labelFunc071A_021C:
	return;
}


