#game "serpentisle"
void Func0798 object#(0x798) ()
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

	if (!((event == 0x0003) || (event == 0x0002))) goto labelFunc0798_024F;
	var0000 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	var0001 = UI_get_party_list();
	var0002 = UI_get_item_quality(item);
	if (!(var0002 == 0x0000)) goto labelFunc0798_003E;
	var0002 = 0x001E;
labelFunc0798_003E:
	var0003 = UI_get_item_flag(item, 0x0006);
	enum();
labelFunc0798_004A:
	for (var0006 in var0000 with var0004 to var0005) attend labelFunc0798_0248;
	if (!((!var0003) || (!(var0006 in var0001)))) goto labelFunc0798_0245;
	var0007 = 0x0000;
	var0008 = "";
labelFunc0798_0071:
	if (!(var0007 < var0002)) goto labelFunc0798_020C;
	var0009 = UI_die_roll(0x0000, 0x0008);
	if (!(var0009 == 0x0000)) goto labelFunc0798_00AA;
	var000A = [(byte)0x6D, (byte)0x6C, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_00AA:
	if (!(var0009 == 0x0001)) goto labelFunc0798_00CC;
	var000A = [(byte)0x6D, (byte)0x61, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_00CC:
	if (!(var0009 == 0x0002)) goto labelFunc0798_00EE;
	var000A = [(byte)0x6C, (byte)0x6E, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_00EE:
	if (!(var0009 == 0x0003)) goto labelFunc0798_0110;
	var000A = [(byte)0x61, (byte)0x61, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_0110:
	if (!(var0009 == 0x0004)) goto labelFunc0798_0132;
	var000A = [(byte)0x6D, (byte)0x64, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_0132:
	if (!(var0009 == 0x0005)) goto labelFunc0798_0154;
	var000A = [(byte)0x64, (byte)0x6D, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_0154:
	if (!(var0009 == 0x0006)) goto labelFunc0798_018D;
	var000B = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000A = [(byte)0x59, var000B, (byte)0x6C, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_018D:
	if (!(var0009 == 0x0007)) goto labelFunc0798_01C6;
	var000B = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000A = [(byte)0x59, var000B, (byte)0x6D, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_01C6:
	if (!(var0009 == 0x0008)) goto labelFunc0798_01FF;
	var000B = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000A = [(byte)0x59, var000B, (byte)0x64, (byte)0x61];
	var0008 = [var0008, var000A];
labelFunc0798_01FF:
	var0007 = (var0007 + 0x0003);
	goto labelFunc0798_0071;
labelFunc0798_020C:
	UI_halt_scheduled(var0006);
	var000C = UI_die_roll(0x0001, 0x0005);
	if (!(var000C == 0x0001)) goto labelFunc0798_0238;
	var0008 = [(byte)0x52, "Aaahhh!", var0008];
labelFunc0798_0238:
	var000D = UI_execute_usecode_array(var0006, var0008);
labelFunc0798_0245:
	goto labelFunc0798_004A;
labelFunc0798_0248:
	UI_earthquake(var0002);
labelFunc0798_024F:
	return;
}


