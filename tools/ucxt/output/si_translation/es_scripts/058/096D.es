#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0946 0x946 ();
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);

var Func096D 0x96D (var var0000)
{
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

	message("\"One of you wishes to train?\"");
	say();
	var0001 = Func0955();
	if (!var0001) goto labelFunc096D_00AD;
	message("\"Which of you wishes to train?\"");
	say();
	var0002 = Func0946();
	var0003 = Func098E();
	var0004 = [];
	var0005 = [];
	enum();
labelFunc096D_002D:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc096D_005D;
	if (!(var0008 != var0000)) goto labelFunc096D_005A;
	var0004 = (var0004 & UI_get_npc_name(var0008));
	var0005 = (var0005 & var0008);
labelFunc096D_005A:
	goto labelFunc096D_002D;
labelFunc096D_005D:
	var0002 = var0004;
	var0003 = var0005;
	var0009 = [0x0000, var0003];
	var000A = Func0957(["Nobody", var0002]);
	var000B = var0009[var000A];
	if (!(var000B == 0x0000)) goto labelFunc096D_00A0;
	var000C = 0x0000;
	goto labelFunc096D_00AA;
labelFunc096D_00A0:
	var000C = UI_get_npc_number(var000B);
labelFunc096D_00AA:
	goto labelFunc096D_00B7;
labelFunc096D_00AD:
	message("\"Perhaps at a later time.\"");
	say();
	var000C = 0x0000;
labelFunc096D_00B7:
	return var000C;
	return 0;
}


