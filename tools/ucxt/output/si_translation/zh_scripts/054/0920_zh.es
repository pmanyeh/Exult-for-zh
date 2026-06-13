#game "serpentisle"
var Func0920 0x920 ()
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

	var0000 = (UI_find_nearby(0xFE9C, 0x0114, 0x0019, 0x0000) & UI_find_nearby(0xFE9C, 0x0115, 0x0019, 0x0000));
	var0001 = (UI_find_nearby(0xFE9C, 0x010F, 0x0019, 0x0000) & UI_find_nearby(0xFE9C, 0x0110, 0x0019, 0x0000));
	enum();
labelFunc0920_0049:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0920_01E6;
	var0005 = UI_get_lift(var0004);
	if (!(var0005 == 0x0000)) goto labelFunc0920_00B2;
	var0006 = UI_execute_usecode_array(var0004, [(byte)0x58, 0x0059, (byte)0x55, 0x0607, (byte)0x0B, 0xFFFB, 0x0003]);
	enum();
labelFunc0920_0088:
	for (var0009 in var0000 with var0007 to var0008) attend labelFunc0920_00B2;
	var0006 = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0001, (byte)0x46, 0x0002, (byte)0x46, 0x0003]);
	goto labelFunc0920_0088;
labelFunc0920_00B2:
	if (!(var0005 == 0x0001)) goto labelFunc0920_0103;
	var0006 = UI_execute_usecode_array(var0004, [(byte)0x23, (byte)0x58, 0x0059, (byte)0x55, 0x0607, (byte)0x0B, 0xFFFB, 0x0002]);
	enum();
labelFunc0920_00DE:
	for (var0009 in var0000 with var000A to var000B) attend labelFunc0920_0103;
	var0006 = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0002, (byte)0x46, 0x0003]);
	goto labelFunc0920_00DE;
labelFunc0920_0103:
	if (!(var0005 == 0x0002)) goto labelFunc0920_014D;
	var0006 = UI_execute_usecode_array(var0004, [(byte)0x58, 0x0059, (byte)0x55, 0x0607, (byte)0x0B, 0xFFFB, 0x0001]);
	enum();
labelFunc0920_012D:
	for (var0009 in var0000 with var000C to var000D) attend labelFunc0920_014D;
	var0006 = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0003]);
	goto labelFunc0920_012D;
labelFunc0920_014D:
	if (!(var0005 == 0x0003)) goto labelFunc0920_018F;
	var0006 = UI_execute_usecode_array(var0004, [(byte)0x58, 0x0059, (byte)0x55, 0x0607]);
	enum();
labelFunc0920_016F:
	for (var0009 in var0000 with var000E to var000F) attend labelFunc0920_018F;
	var0006 = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0003]);
	goto labelFunc0920_016F;
labelFunc0920_018F:
	if (!(var0005 == 0x0004)) goto labelFunc0920_01B8;
	var0006 = UI_execute_usecode_array(var0004, [(byte)0x58, 0x0059, (byte)0x55, 0x0609, (byte)0x0B, 0xFFFB, 0x0003]);
labelFunc0920_01B8:
	enum();
labelFunc0920_01B9:
	for (var0009 in var0000 with var0010 to var0011) attend labelFunc0920_01E3;
	var0006 = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0002, (byte)0x46, 0x0001, (byte)0x46, 0x0000]);
	goto labelFunc0920_01B9;
labelFunc0920_01E3:
	goto labelFunc0920_0049;
labelFunc0920_01E6:
	return true;
	return 0;
}


