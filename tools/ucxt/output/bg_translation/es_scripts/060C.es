#game "blackgate"
// externs
extern var Func0932 0x932 (var var0000);
extern void Func0933 0x933 (var var0000, var var0001, var var0002);

void Func060C object#(0x60C) ()
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

	if (!(UI_get_schedule_type(0xFF18) == 0x0009)) goto labelFunc060C_0018;
	UI_set_schedule_type(0xFF18, 0x000A);
labelFunc060C_0018:
	if (!(!UI_npc_nearby(0xFF18))) goto labelFunc060C_0057;
	var0000 = UI_find_nearby(0xFE9C, 0x02FC, 0x0032, 0x0000);
	enum();
labelFunc060C_0037:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc060C_0056;
	UI_set_item_frame(var0003, 0x0000);
	UI_halt_scheduled(var0003);
	goto labelFunc060C_0037;
labelFunc060C_0056:
	return;
labelFunc060C_0057:
	var0004 = UI_find_nearby(item, 0x0284, 0x0007, 0x0000);
	var0005 = UI_get_object_position(item);
	var0006 = 0x0000;
	var0007 = UI_find_nearby_avatar(0x02FB);
	enum();
labelFunc060C_0081:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc060C_00AF;
	if (!((UI_get_item_frame(var000A) == 0x0001) || (UI_get_item_frame(var000A) == 0x0002))) goto labelFunc060C_00AC;
	var0006 = var000A;
labelFunc060C_00AC:
	goto labelFunc060C_0081;
labelFunc060C_00AF:
	var0000 = UI_find_nearby_avatar(0x02FB);
	var000B = UI_get_object_position(var0006[0x0001]);
	if (!gflags[0x0006]) goto labelFunc060C_00D5;
	var000C = 0x0006;
	goto labelFunc060C_00DB;
labelFunc060C_00D5:
	var000C = 0x0003;
labelFunc060C_00DB:
	var000D = UI_execute_usecode_array(var0006, [(byte)0x46, 0x0001, (byte)0x58, 0x0049, (byte)0x46, 0x0002, (byte)0x58, 0x004A, (byte)0x46, 0x0001, (byte)0x58, 0x0049]);
	if (!(gflags[0x0022] == false)) goto labelFunc060C_0242;
	gflags[0x0022] = true;
	enum();
labelFunc060C_0113:
	for (var0010 in var0004 with var000E to var000F) attend labelFunc060C_023F;
	var0011 = UI_get_object_position(var0010);
	if (!((var0011[0x0001] <= var000B[0x0001]) && ((var0011[0x0001] >= (var000B[0x0001] - 0x0005)) && ((var0011[0x0002] <= (var000B[0x0002] + 0x0008)) && (var0011[0x0002] >= (var000B[0x0002] - 0x0008)))))) goto labelFunc060C_023C;
	if (!(var0011[0x0002] == var0005[0x0002])) goto labelFunc060C_0235;
	var0012 = UI_get_item_quantity(var0010, 0x0284);
	var0012 = (var0012 * var000C);
labelFunc060C_0195:
	if (!(var0012 > 0x0064)) goto labelFunc060C_01D3;
	var0013 = UI_create_new_object(0x0284);
	if (!var0013) goto labelFunc060C_01C6;
	var000D = UI_set_item_quantity(var0013, 0x0064);
	var000D = UI_update_last_created(var0011);
labelFunc060C_01C6:
	var0012 = (var0012 - 0x0064);
	goto labelFunc060C_0195;
labelFunc060C_01D3:
	var0013 = UI_create_new_object(0x0284);
	if (!var0013) goto labelFunc060C_01FA;
	var000D = UI_set_item_quantity(var0013, var0012);
	var000D = UI_update_last_created(var0011);
labelFunc060C_01FA:
	UI_set_item_flag(var0010, 0x000B);
	var0014 = Func0932(((var000B[0x0002] - var0005[0x0002]) - 0x0004));
	var0015 = (("@A winnah in lane " + var0014) + "!@");
	Func0933(0xFF18, var0015, 0x0001);
labelFunc060C_0235:
	UI_remove_item(var0010);
labelFunc060C_023C:
	goto labelFunc060C_0113;
labelFunc060C_023F:
	goto labelFunc060C_029C;
labelFunc060C_0242:
	if (!(!gflags[0x0023])) goto labelFunc060C_0250;
	gflags[0x0023] = true;
	goto labelFunc060C_029C;
labelFunc060C_0250:
	if (!(!gflags[0x0024])) goto labelFunc060C_025E;
	gflags[0x0024] = true;
	goto labelFunc060C_029C;
labelFunc060C_025E:
	if (!((!gflags[0x0025]) && gflags[0x0024])) goto labelFunc060C_029C;
	gflags[0x0022] = false;
	gflags[0x0023] = false;
	gflags[0x0024] = false;
	gflags[0x0025] = false;
	var0000 = UI_find_nearby_avatar(0x02FC);
	enum();
labelFunc060C_0284:
	for (var0003 in var0000 with var0016 to var0017) attend labelFunc060C_029C;
	UI_set_item_frame(var0003, 0x0000);
	goto labelFunc060C_0284;
labelFunc060C_029C:
	return;
}


