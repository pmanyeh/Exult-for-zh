#game "serpentisle"
void Func08C2 0x8C2 ()
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

	var0000 = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0006));
	var0001 = UI_find_nearby(var0000, 0x0113, 0x0050, 0x0010);
	enum();
labelFunc08C2_0026:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc08C2_022C;
	var0005 = UI_get_object_position(var0004);
	var0006 = UI_get_item_quality(var0004);
	var0007 = false;
	if (!(var0006 == 0x0002)) goto labelFunc08C2_005F;
	var0007 = 0xFFC9;
	var0008 = 0x0002;
labelFunc08C2_005F:
	if (!(var0006 == 0x0004)) goto labelFunc08C2_0075;
	var0007 = 0xFFCE;
	var0008 = 0x0006;
labelFunc08C2_0075:
	if (!(var0006 == 0x0005)) goto labelFunc08C2_008B;
	var0007 = 0xFFCF;
	var0008 = 0x0006;
labelFunc08C2_008B:
	if (!(var0006 == 0x0006)) goto labelFunc08C2_00B1;
	if (!gflags[0x0170]) goto labelFunc08C2_00AA;
	var0007 = 0xFFCD;
	var0008 = 0x0006;
	goto labelFunc08C2_00B1;
labelFunc08C2_00AA:
	UI_remove_npc(0xFFCD);
labelFunc08C2_00B1:
	if (!(var0006 == 0x0007)) goto labelFunc08C2_00D9;
	if (!(gflags[0x0170] == true)) goto labelFunc08C2_00D2;
	var0007 = 0xFFCB;
	var0008 = 0x0002;
	goto labelFunc08C2_00D9;
labelFunc08C2_00D2:
	UI_remove_npc(0xFFCB);
labelFunc08C2_00D9:
	if (!(var0006 == 0x0008)) goto labelFunc08C2_00FF;
	if (!gflags[0x0170]) goto labelFunc08C2_00F8;
	var0007 = 0xFFC4;
	var0008 = 0x0002;
	goto labelFunc08C2_00FF;
labelFunc08C2_00F8:
	UI_remove_npc(0xFFC4);
labelFunc08C2_00FF:
	if (!(var0006 == 0x000A)) goto labelFunc08C2_0115;
	var0007 = 0xFFC3;
	var0008 = 0x0002;
labelFunc08C2_0115:
	if (!(var0006 == 0x000B)) goto labelFunc08C2_0131;
	if (!gflags[0x0170]) goto labelFunc08C2_0131;
	var0007 = 0xFFC8;
	var0008 = 0x0002;
labelFunc08C2_0131:
	if (!(var0006 == 0x000C)) goto labelFunc08C2_014F;
	if (!(gflags[0x0170] == true)) goto labelFunc08C2_014F;
	var0007 = 0xFFC5;
	var0008 = 0x0002;
labelFunc08C2_014F:
	if (!(var0006 == 0x000D)) goto labelFunc08C2_0177;
	if (!(gflags[0x0170] == true)) goto labelFunc08C2_0170;
	var0007 = 0xFFCA;
	var0008 = 0x0006;
	goto labelFunc08C2_0177;
labelFunc08C2_0170:
	UI_remove_npc(0xFFCA);
labelFunc08C2_0177:
	if (!(var0006 == 0x000E)) goto labelFunc08C2_018D;
	var0007 = 0xFFD1;
	var0008 = 0x0006;
labelFunc08C2_018D:
	if (!(var0006 == 0x000F)) goto labelFunc08C2_01B3;
	if (!gflags[0x0170]) goto labelFunc08C2_01AC;
	var0007 = 0xFFD2;
	var0008 = 0x0006;
	goto labelFunc08C2_01B3;
labelFunc08C2_01AC:
	UI_remove_npc(0xFFD2);
labelFunc08C2_01B3:
	if (!(var0006 == 0x0010)) goto labelFunc08C2_01C9;
	var0007 = 0xFFCC;
	var0008 = 0x0006;
labelFunc08C2_01C9:
	if (!(var0006 == 0x0011)) goto labelFunc08C2_01DF;
	var0007 = 0xFFC6;
	var0008 = 0x0006;
labelFunc08C2_01DF:
	if (!(var0006 == 0x0012)) goto labelFunc08C2_01F5;
	var0007 = 0xFFD0;
	var0008 = 0x0006;
labelFunc08C2_01F5:
	if (!var0007) goto labelFunc08C2_0229;
	UI_move_object(UI_get_npc_object(var0007), var0005);
	UI_set_schedule_type(var0007, 0x000F);
	var0009 = UI_execute_usecode_array(var0007, [(byte)0x59, var0008, (byte)0x01, (byte)0x6B]);
labelFunc08C2_0229:
	goto labelFunc08C2_0026;
labelFunc08C2_022C:
	return;
}


