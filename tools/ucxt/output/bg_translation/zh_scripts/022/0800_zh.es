#game "blackgate"
// externs
extern var Func0900 0x900 ();
extern var Func0801 0x801 (var var0000);
extern void Func0624 object#(0x624) ();
extern var Func093C 0x93C (var var0000, var var0001);

void Func0800 0x800 (var var0000)
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

	UI_close_gumps();
	gflags[0x02E8] = false;
	var0001 = Func0900();
	if (!UI_in_combat()) goto labelFunc0800_005A;
	UI_show_npc_face(var0001, 0x0000);
	var0002 = UI_get_npc_name(var0001);
	if (!(var0001 == 0xFE9C)) goto labelFunc0800_003A;
	message("「現在不是睡覺的時候！振作點！」");
	say();
	goto labelFunc0800_0041;
labelFunc0800_003A:
	message(var0002);
	message(" 怒視著。「現在不是睡覺的時候！振作點！」");
	say();
labelFunc0800_0041:
	if (!Func0801(var0000)) goto labelFunc0800_0050;
	var0000->Func0624();
labelFunc0800_0050:
	UI_remove_npc_face(var0001);
	goto labelFunc0800_013A;
labelFunc0800_005A:
	var0003 = UI_get_item_frame(var0000);
	var0004 = UI_get_item_shape(var0000);
	if (!((var0003 > 0x0003) && (!Func0801(var0000)))) goto labelFunc0800_00FA;
	var0005 = UI_get_object_position(var0000);
	var0006 = UI_find_nearby(var0000, var0004, 0x0002, 0x0000);
	enum();
labelFunc0800_009E:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc0800_00FA;
	if (!(UI_get_item_frame(var0009) <= 0x0002)) goto labelFunc0800_00F7;
	var000A = UI_get_object_position(var0009);
	if (!((var000A[0x0001] == var0005[0x0001]) && ((var000A[0x0002] == var0005[0x0002]) && ((var000A[0x0003] + 0x0001) == var0005[0x0003])))) goto labelFunc0800_00F7;
	var0000 = var0009;
labelFunc0800_00F7:
	goto labelFunc0800_009E;
labelFunc0800_00FA:
	if (!Func0801(item)) goto labelFunc0800_0118;
	var000B = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x54, 0x001E, 0x0000]);
labelFunc0800_0118:
	var000C = Func093C(UI_get_npc_object(0xFE9C), UI_get_party_list());
	UI_set_schedule_type(0xFE9C, 0x000E);
	UI_nap_time(var0000);
labelFunc0800_013A:
	return;
}


