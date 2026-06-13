#game "serpentisle"
void Func060E object#(0x60E) ()
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
	var var0015;
	var var0016;
	var var0017;
	var var0018;

	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = false;
	var0007 = false;
	var0008 = false;
	var0009 = false;
	var000A = UI_get_item_frame(item);
	var000B = UI_get_item_quality(item);
	var000C = UI_find_nearby(item, 0x0314, 0x0064, 0x00B0);
	if (!(var000B == 0x00ED)) goto labelFunc060E_021B;
	enum();
labelFunc060E_0054:
	for (var000F in var000C with var000D to var000E) attend labelFunc060E_018E;
	var0010 = UI_get_item_quality(var000F);
	var0011 = UI_get_item_frame(var000F);
	if (!(var0010 == 0x00DD)) goto labelFunc060E_008F;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_008F;
	var0000 = true;
labelFunc060E_008F:
	if (!(var0010 == 0x00DE)) goto labelFunc060E_00AB;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_00AB;
	var0001 = true;
labelFunc060E_00AB:
	if (!(var0010 == 0x00DF)) goto labelFunc060E_00C7;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_00C7;
	var0002 = true;
labelFunc060E_00C7:
	if (!(var0010 == 0x00E0)) goto labelFunc060E_00E3;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_00E3;
	var0003 = true;
labelFunc060E_00E3:
	if (!(var0010 == 0x00E1)) goto labelFunc060E_00FF;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_00FF;
	var0004 = true;
labelFunc060E_00FF:
	if (!(var0010 == 0x00E2)) goto labelFunc060E_011B;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_011B;
	var0005 = true;
labelFunc060E_011B:
	if (!(var0010 == 0x00E3)) goto labelFunc060E_0137;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_0137;
	var0006 = true;
labelFunc060E_0137:
	if (!(var0010 == 0x00E4)) goto labelFunc060E_0153;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_0153;
	var0007 = true;
labelFunc060E_0153:
	if (!(var0010 == 0x00E5)) goto labelFunc060E_016F;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_016F;
	var0008 = true;
labelFunc060E_016F:
	if (!(var0010 == 0x00E6)) goto labelFunc060E_018B;
	if (!((var0011 % 0x0002) == 0x0000)) goto labelFunc060E_018B;
	var0009 = true;
labelFunc060E_018B:
	goto labelFunc060E_0054;
labelFunc060E_018E:
	if (!(var0000 && (var0001 && (var0002 && (var0003 && (var0004 && (var0005 && (var0006 && (var0007 && (var0008 && var0009)))))))))) goto labelFunc060E_021B;
	var0012 = UI_find_nearby(item, 0x010E, 0x0064, 0x00B0);
	enum();
labelFunc060E_01CA:
	for (var0015 in var0012 with var0013 to var0014) attend labelFunc060E_021B;
	if (!(UI_get_item_quality(var0015) == 0x00F1)) goto labelFunc060E_0218;
	var0016 = UI_get_object_position(var0015);
	UI_remove_item(var0015);
	var0017 = UI_create_new_object(0x0178);
	if (!var0017) goto labelFunc060E_0218;
	var0018 = UI_update_last_created(var0016);
	UI_set_item_frame(var0017, 0x000C);
labelFunc060E_0218:
	goto labelFunc060E_01CA;
labelFunc060E_021B:
	return;
}


