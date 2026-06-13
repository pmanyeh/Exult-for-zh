#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);
extern var Func0937 0x937 (var var0000);
extern void Func0904 0x904 (var var0000, var var0001);

void Func060A object#(0x60A) ()
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

	if (!(event != 0x0002)) goto labelFunc060A_0009;
	return;
labelFunc060A_0009:
	if (!(UI_get_schedule_type(0xFF18) == 0x0009)) goto labelFunc060A_0021;
	UI_set_schedule_type(0xFF18, 0x000A);
labelFunc060A_0021:
	var0000 = UI_find_nearby(item, 0x0208, 0x0007, 0x0000);
	var0001 = UI_find_nearby(var0000, 0x0284, 0x0005, 0x0000);
	var0002 = 0x0000;
	var0003 = 0x0000;
	var0004 = UI_get_item_frame(item);
	var0005 = (var0004 / 0x0004);
	if (!(var0005 == 0x0000)) goto labelFunc060A_007F;
	var0002 = 0xFFFD;
	var0003 = 0xFFFF;
	var0006 = "Blue";
labelFunc060A_007F:
	if (!(var0005 == 0x0001)) goto labelFunc060A_009B;
	var0002 = 0x0000;
	var0003 = 0x0000;
	var0006 = "Black";
labelFunc060A_009B:
	if (!(var0005 == 0x0002)) goto labelFunc060A_00B7;
	var0002 = 0xFFFF;
	var0003 = 0x0000;
	var0006 = "White";
labelFunc060A_00B7:
	if (!(var0005 == 0x0003)) goto labelFunc060A_00D3;
	var0002 = 0xFFFE;
	var0003 = 0x0000;
	var0006 = "Purple";
labelFunc060A_00D3:
	if (!(var0005 == 0x0004)) goto labelFunc060A_00EF;
	var0002 = 0xFFFD;
	var0003 = 0x0000;
	var0006 = "Orange";
labelFunc060A_00EF:
	if (!(var0005 == 0x0005)) goto labelFunc060A_010B;
	var0002 = 0x0000;
	var0003 = 0xFFFF;
	var0006 = "Green";
labelFunc060A_010B:
	if (!(var0005 == 0x0006)) goto labelFunc060A_0127;
	var0002 = 0xFFFF;
	var0003 = 0xFFFF;
	var0006 = "Red";
labelFunc060A_0127:
	if (!(var0005 == 0x0007)) goto labelFunc060A_0143;
	var0002 = 0xFFFE;
	var0003 = 0xFFFF;
	var0006 = "Yellow";
labelFunc060A_0143:
	var0007 = false;
	if (!(!UI_npc_nearby(0xFF18))) goto labelFunc060A_0161;
	var0008 = [];
	var0009 = "";
	goto labelFunc060A_0167;
labelFunc060A_0161:
	Func08FE("@Didst thou win?@");
labelFunc060A_0167:
	if (!gflags[0x0006]) goto labelFunc060A_0176;
	var000A = 0x000E;
	goto labelFunc060A_017C;
labelFunc060A_0176:
	var000A = 0x0007;
labelFunc060A_017C:
	enum();
labelFunc060A_017D:
	for (var000D in var0001 with var000B to var000C) attend labelFunc060A_0270;
	var000E = UI_get_object_position(var000D);
	var000F = UI_get_object_position(var0000);
	if (!((var000E[0x0001] == (var000F[0x0001] + var0002)) && (var000E[0x0002] == (var000F[0x0002] + var0003)))) goto labelFunc060A_0266;
	UI_set_item_flag(var000D, 0x000B);
	var0010 = UI_get_item_quantity(var000D, 0x0000);
	var0010 = (var0010 * var000A);
labelFunc060A_01E3:
	if (!(var0010 > 0x0064)) goto labelFunc060A_0221;
	var0008 = UI_create_new_object(0x0284);
	if (!var0008) goto labelFunc060A_0214;
	var0011 = UI_set_item_quantity(var0008, 0x0064);
	var0011 = UI_update_last_created(var000E);
labelFunc060A_0214:
	var0010 = (var0010 - 0x0064);
	goto labelFunc060A_01E3;
labelFunc060A_0221:
	var0008 = UI_create_new_object(0x0284);
	if (!var0008) goto labelFunc060A_0248;
	var0011 = UI_set_item_quantity(var0008, var0010);
	var0011 = UI_update_last_created(var000E);
labelFunc060A_0248:
	if (!Func0937(0xFF18)) goto labelFunc060A_0262;
	Func0904(0xFF18, (("@A winner on " + var0006) + ".@"));
labelFunc060A_0262:
	var0007 = true;
labelFunc060A_0266:
	UI_remove_item(var000D);
	goto labelFunc060A_017D;
labelFunc060A_0270:
	if (!(!var0007)) goto labelFunc060A_0291;
	if (!Func0937(0xFF18)) goto labelFunc060A_0291;
	Func0904(0xFF18, (("@It is " + var0006) + ".@"));
labelFunc060A_0291:
	return;
}


