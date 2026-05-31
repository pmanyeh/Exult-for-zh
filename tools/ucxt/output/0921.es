#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func08FB 0x8FB ();
extern var Func090C 0x90C (var var0000);

var Func0921 0x921 (var var0000)
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
	var0001 = Func090A();
	if (!var0001) goto labelFunc0921_00AE;
	message("\"Which of you wishes to train?\"");
	say();
	var0002 = Func08FB();
	var0003 = UI_get_party_list();
	var0004 = [];
	var0005 = [];
	enum();
labelFunc0921_002E:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc0921_005E;
	if (!(var0008 != var0000)) goto labelFunc0921_005B;
	var0004 = (var0004 & UI_get_npc_name(var0008));
	var0005 = (var0005 & var0008);
labelFunc0921_005B:
	goto labelFunc0921_002E;
labelFunc0921_005E:
	var0002 = var0004;
	var0003 = var0005;
	var0009 = [0x0000, var0003];
	var000A = Func090C(["Nobody", var0002]);
	var000B = var0009[var000A];
	if (!(var000B == 0x0000)) goto labelFunc0921_00A1;
	var000C = 0x0000;
	goto labelFunc0921_00AB;
labelFunc0921_00A1:
	var000C = UI_get_npc_number(var000B);
labelFunc0921_00AB:
	goto labelFunc0921_00B8;
labelFunc0921_00AE:
	message("\"Perhaps at a later time.\"");
	say();
	var000C = 0x0000;
labelFunc0921_00B8:
	return var000C;
	return 0;
}


