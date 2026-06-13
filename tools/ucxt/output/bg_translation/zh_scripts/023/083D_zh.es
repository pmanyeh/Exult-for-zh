#game "blackgate"
// externs
extern var Func083A 0x83A ();
extern var Func083B 0x83B ();
extern var Func083C 0x83C (var var0000);
extern void Func0933 0x933 (var var0000, var var0001, var var0002);

void Func083D 0x83D ()
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

	if (!(UI_get_schedule_type(0xFF18) == 0x0009)) goto labelFunc083D_0018;
	UI_set_schedule_type(0xFF18, 0x000A);
labelFunc083D_0018:
	var0000 = Func083A();
	var0001 = Func083B();
	var0002 = var0001[0x0001];
	var0003 = var0001[0x0002];
	var0004 = Func083C(var0000);
	if (!(!UI_npc_nearby(0xFF18))) goto labelFunc083D_0064;
	enum();
labelFunc083D_004B:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc083D_0063;
	UI_set_item_flag(var0007, 0x000B);
	goto labelFunc083D_004B;
labelFunc083D_0063:
	return;
labelFunc083D_0064:
	var0008 = "@真可惜...@";
	if (!(UI_get_array_size(var0004) == 0x0000)) goto labelFunc083D_0084;
	Func0933(0xFF18, var0008, 0x0000);
labelFunc083D_0084:
	if (!(var0002 == 0x0006)) goto labelFunc083D_00EB;
	if (!var0003) goto labelFunc083D_00C1;
	var0009 = [0x0005, 0x0005, 0x0005];
	var000A = [0x0001, 0x0002, 0x0003];
	var000B = 0x001B;
	var0008 = "@三個二！@";
	goto labelFunc083D_00EB;
labelFunc083D_00C1:
	var0009 = [0x0003, 0x0003, 0x0003];
	var000A = [0x0001, 0x0002, 0x0003];
	var000B = 0x0004;
	var0008 = "@全輪！@";
labelFunc083D_00EB:
	if (!(var0002 == 0x0009)) goto labelFunc083D_011F;
	var0009 = [0x0007, 0x0007, 0x0007];
	var000A = [0x0001, 0x0002, 0x0003];
	var000B = 0x001B;
	var0008 = "@三個三！@";
labelFunc083D_011F:
	if (!(var0002 == 0x0003)) goto labelFunc083D_0153;
	var0009 = [0x0001, 0x0001, 0x0001];
	var000A = [0x0001, 0x0002, 0x0003];
	var000B = 0x001B;
	var0008 = "@三個一！@";
labelFunc083D_0153:
	if (!var0003) goto labelFunc083D_017F;
	var0009 = (var0009 & [0x0004, 0x0004, 0x0004]);
	var000A = (var000A & [0x0001, 0x0002, 0x0003]);
labelFunc083D_017F:
	if (!(var0002 == 0x0004)) goto labelFunc083D_01A1;
	var0009 = 0x0002;
	var000A = 0x0003;
	var000B = 0x0008;
	var0008 = "@總和 4！@";
labelFunc083D_01A1:
	if (!(var0002 == 0x0005)) goto labelFunc083D_01C3;
	var0009 = 0x0002;
	var000A = 0x0001;
	var000B = 0x0004;
	var0008 = "@總和 5！@";
labelFunc083D_01C3:
	if (!(var0002 == 0x0007)) goto labelFunc083D_01E5;
	var0009 = 0x0006;
	var000A = 0x0003;
	var000B = 0x0003;
	var0008 = "@七！@";
labelFunc083D_01E5:
	if (!(var0002 == 0x0008)) goto labelFunc083D_0207;
	var0009 = 0x0006;
	var000A = 0x0001;
	var000B = 0x0008;
	var0008 = "@大 8！@";
labelFunc083D_0207:
	if (!gflags[0x0006]) goto labelFunc083D_0217;
	var000B = (var000B * 0x0002);
labelFunc083D_0217:
	enum();
labelFunc083D_0218:
	for (var0007 in var0004 with var000C to var000D) attend labelFunc083D_0310;
	var000E = 0x0000;
	var000F = false;
	enum();
labelFunc083D_022E:
	for (var0012 in var0009 with var0010 to var0011) attend labelFunc083D_0306;
	var000E = (var000E + 0x0001);
	var0013 = UI_get_object_position(var0007);
	if (!(var0013[0x0001] == ((var0000[0x0001] - var0009[var000E]) + 0x0001))) goto labelFunc083D_0303;
	if (!(var0013[0x0002] == ((var0000[0x0002] - var000A[var000E]) + 0x0001))) goto labelFunc083D_0303;
	var0014 = UI_get_item_quantity(var0007, 0x0009);
	var0014 = (var0014 * var000B);
labelFunc083D_029A:
	if (!(var0014 > 0x0064)) goto labelFunc083D_02D8;
	var0015 = UI_create_new_object(0x0284);
	if (!var0015) goto labelFunc083D_02CB;
	var0016 = UI_set_item_quantity(var0015, 0x0064);
	var0016 = UI_update_last_created(var0013);
labelFunc083D_02CB:
	var0014 = (var0014 - 0x0064);
	goto labelFunc083D_029A;
labelFunc083D_02D8:
	var0015 = UI_create_new_object(0x0284);
	if (!var0015) goto labelFunc083D_02FF;
	var0016 = UI_set_item_quantity(var0015, var0014);
	var0016 = UI_update_last_created(var0013);
labelFunc083D_02FF:
	var000F = true;
labelFunc083D_0303:
	goto labelFunc083D_022E;
labelFunc083D_0306:
	UI_remove_item(var0007);
	goto labelFunc083D_0218;
labelFunc083D_0310:
	Func0933(0xFF18, var0008, 0x0000);
	return;
}


