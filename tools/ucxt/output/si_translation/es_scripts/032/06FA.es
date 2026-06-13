#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func06FA object#(0x6FA) ()
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

	if (!(event == 0x0003)) goto labelFunc06FA_02EB;
	var0000 = (UI_find_nearby(0xFE9C, 0x010F, 0x0064, 0x0000) & UI_find_nearby(0xFE9C, 0x0110, 0x0064, 0x0000));
	var0001 = false;
	enum();
labelFunc06FA_0031:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc06FA_005A;
	var0005 = UI_get_object_position(var0004);
	if (!(var0005[0x0003] != 0x0000)) goto labelFunc06FA_0057;
	var0001 = true;
labelFunc06FA_0057:
	goto labelFunc06FA_0031;
labelFunc06FA_005A:
	if (!var0001) goto labelFunc06FA_02E2;
	var0006 = (UI_find_nearby(0xFE9C, 0x0114, 0x003C, 0x0000) & UI_find_nearby(0xFE9C, 0x0115, 0x003C, 0x0000));
	var0007 = (UI_find_nearby(0xFE9C, 0x010F, 0x003C, 0x0000) & UI_find_nearby(0xFE9C, 0x0110, 0x003C, 0x0000));
	enum();
labelFunc06FA_00A9:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc06FA_0205;
	var000B = UI_get_lift(var000A);
	if (!(var000B == 0x0001)) goto labelFunc06FA_0109;
	var000C = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x58, 0x0059, (byte)0x55, 0x0609]);
	enum();
labelFunc06FA_00E2:
	for (var000F in var0006 with var000D to var000E) attend labelFunc06FA_0109;
	var000C = UI_execute_usecode_array(var000F, [(byte)0x23, (byte)0x46, 0x0002, (byte)0x46, 0x0003]);
	goto labelFunc06FA_00E2;
labelFunc06FA_0109:
	if (!(var000B == 0x0002)) goto labelFunc06FA_015C;
	var000C = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x58, 0x0059, (byte)0x55, 0x0609, (byte)0x0B, 0xFFFB, 0x0002]);
	enum();
labelFunc06FA_0135:
	for (var000F in var0006 with var0010 to var0011) attend labelFunc06FA_015C;
	var000C = UI_execute_usecode_array(var000F, [(byte)0x23, (byte)0x46, 0x0002, (byte)0x46, 0x0003]);
	goto labelFunc06FA_0135;
labelFunc06FA_015C:
	if (!(var000B == 0x0003)) goto labelFunc06FA_01AA;
	var000C = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x58, 0x0059, (byte)0x55, 0x0609, (byte)0x0B, 0xFFFB, 0x0003]);
	enum();
labelFunc06FA_0188:
	for (var000F in var0006 with var0012 to var0013) attend labelFunc06FA_01AA;
	var000C = UI_execute_usecode_array(var000F, [(byte)0x23, (byte)0x46, 0x0003]);
	goto labelFunc06FA_0188;
labelFunc06FA_01AA:
	if (!(var000B == 0x0004)) goto labelFunc06FA_01D5;
	var000C = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x58, 0x0059, (byte)0x55, 0x0609, (byte)0x0B, 0xFFFB, 0x0003]);
labelFunc06FA_01D5:
	enum();
labelFunc06FA_01D6:
	for (var000F in var0006 with var0014 to var0015) attend labelFunc06FA_0202;
	var000C = UI_execute_usecode_array(var000F, [(byte)0x23, (byte)0x46, 0x0002, (byte)0x46, 0x0001, (byte)0x46, 0x0000]);
	goto labelFunc06FA_01D6;
labelFunc06FA_0202:
	goto labelFunc06FA_00A9;
labelFunc06FA_0205:
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06FA], 0x000A);
	var0016 = Func0992(0x0001, "@Look -- the gates!@", "@The gates are closing!@", true);
	UI_set_alignment(0xFFAB, 0x0002);
	UI_set_item_flag(0xFFAB, 0x001D);
	UI_move_object(0xFFAB, [0x0723, 0x0A65]);
	UI_set_schedule_type(0xFFAB, 0x000F);
	UI_set_alignment(0xFFA9, 0x0002);
	UI_set_item_flag(0xFFA9, 0x001D);
	UI_move_object(0xFFA9, [0x074C, 0x0A67]);
	UI_set_schedule_type(0xFFA9, 0x000F);
	UI_set_alignment(0xFFA4, 0x0002);
	UI_set_item_flag(0xFFA4, 0x001D);
	UI_move_object(0xFFA4, [0x071B, 0x0A66]);
	UI_set_schedule_type(0xFFA4, 0x000F);
	UI_set_alignment(0xFFA3, 0x0002);
	UI_set_item_flag(0xFFA3, 0x001D);
	UI_move_object(0xFFA3, [0x0754, 0x0A64]);
	UI_set_schedule_type(0xFFA3, 0x000F);
labelFunc06FA_02E2:
	gflags[0x0208] = true;
	UI_remove_item(item);
labelFunc06FA_02EB:
	return;
}


