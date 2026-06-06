#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern var Func0934 0x934 (var var0000);
extern void Func093F 0x93F (var var0000, var var0001);
extern void Func0933 0x933 (var var0000, var var0001, var var0002);

void Func0669 object#(0x669) ()
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

	if (!(event == 0x0001)) goto labelFunc0669_0057;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Por Xen@");
	if (!Func0906()) goto labelFunc0669_0041;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0043, (byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0669]);
	UI_item_say(item, "@大家現在跳起來！@");
	goto labelFunc0669_0057;
labelFunc0669_0041:
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0669_0057:
	if (!(event == 0x0002)) goto labelFunc0669_0140;
	var0001 = 0x0019;
	var0002 = Func0934(var0001);
	enum();
labelFunc0669_006F:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0669_0140;
	var0006 = UI_get_npc_prop(var0005, 0x0002);
	if (!((var0006 > 0x0005) && (var0006 < 0x0019))) goto labelFunc0669_013D;
	var0007 = UI_get_object_position(var0005);
	UI_sprite_effect(0x0010, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func093F(var0005, 0x0004);
	UI_set_item_flag(var0005, 0x000F);
	var0008 = ["@跳舞！@", "@耶！@", "@哈！@", "@喔耶！@", "@太酷了！@", "@搖擺！@", "@呀呼！@"];
	var0009 = UI_die_roll(0x0001, 0x0007);
	var000A = UI_die_roll(0x000A, 0x0028);
	Func0933(var0005, var0008[var0009], var000A);
	var000A = UI_die_roll(0x0032, 0x004B);
	var0000 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0688], var000A);
labelFunc0669_013D:
	goto labelFunc0669_006F;
labelFunc0669_0140:
	return;
}


