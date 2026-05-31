#game "blackgate"
var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006)
{
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

	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 == 0x0000)) goto labelFunc08F8_0026;
	var0008 = 0x0001;
	goto labelFunc08F8_0039;
labelFunc08F8_0026:
	var0008 = UI_input_numeric_value(var0005, var0004, 0x0001, 0x0001);
labelFunc08F8_0039:
	if (!(var0002 > 0x0001)) goto labelFunc08F8_0050;
	var0009 = (var0002 * var0008);
	goto labelFunc08F8_0056;
labelFunc08F8_0050:
	var0009 = var0008;
labelFunc08F8_0056:
	if (!(var0008 == 0x0000)) goto labelFunc08F8_0069;
	var000A = 0x0000;
	goto labelFunc08F8_0145;
labelFunc08F8_0069:
	if (!(var0007 >= (var0003 * var0008))) goto labelFunc08F8_013F;
	var000B = UI_add_party_items(var0009, var0000, 0xFE99, var0001, var0006);
	if (!(!(var000B == 0x0000))) goto labelFunc08F8_0136;
	var000A = 0x0001;
	var000C = UI_remove_party_items((var0003 * var0008), 0x0284, 0xFE99, 0xFE99, true);
	var000D = 0x0000;
	var000E = false;
	enum();
labelFunc08F8_00C1:
	for (var0011 in var000B with var000F to var0010) attend labelFunc08F8_0129;
	var0012 = UI_get_npc_number(var0011);
	if (!(!(var0012 == 0xFE9C))) goto labelFunc08F8_0126;
	var000D = (var000D + 0x0001);
	UI_show_npc_face(var0012, 0x0000);
	var000E = true;
	if (!(var0002 == 0x0001)) goto labelFunc08F8_010A;
	message("\"I will carry that.\"");
	say();
	goto labelFunc08F8_011F;
labelFunc08F8_010A:
	if (!(var000D == 0x0001)) goto labelFunc08F8_011B;
	message("\"I will carry some.\"");
	say();
	goto labelFunc08F8_011F;
labelFunc08F8_011B:
	message("\"I will carry some, as well.\"");
	say();
labelFunc08F8_011F:
	UI_remove_npc_face(var0012);
labelFunc08F8_0126:
	goto labelFunc08F8_00C1;
labelFunc08F8_0129:
	if (!var000E) goto labelFunc08F8_0133;
	UI_reset_conv_face();
labelFunc08F8_0133:
	goto labelFunc08F8_013C;
labelFunc08F8_0136:
	var000A = 0x0002;
labelFunc08F8_013C:
	goto labelFunc08F8_0145;
labelFunc08F8_013F:
	var000A = 0x0003;
labelFunc08F8_0145:
	return var000A;
	return 0;
}


