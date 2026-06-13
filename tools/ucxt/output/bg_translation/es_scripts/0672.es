#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0672 object#(0x672) ()
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

	if (!(event == 0x0001)) goto labelFunc0672_019C;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(item);
	var0001 = Func092D(var0000);
	UI_item_say(item, "@Kal Flam Grav@");
	if (!Func0906()) goto labelFunc0672_0181;
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x0041, (byte)0x66, (byte)0x67, (byte)0x65]);
	var0003 = [0xFFFF, 0x0000, 0x0001, 0x0002, 0x0002, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFE, 0xFFFE];
	var0004 = [0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF, 0x0000, 0x0001, 0x0002, 0x0002, 0x0002, 0x0001, 0x0000, 0xFFFF];
	var0005 = 0x0000;
labelFunc0672_00A0:
	if (!(var0005 < 0x000C)) goto labelFunc0672_017E;
	var0005 = (var0005 + 0x0001);
	var0006 = (var0000[0x0002] + var0003[var0005]);
	var0007 = (var0000[0x0003] + var0004[var0005]);
	var0008 = var0000[0x0004];
	var0009 = [var0006, var0007, var0008];
	var000A = [var0006, var0007, (var0008 + 0x0001)];
	if (!(!UI_is_not_blocked(var0009, 0x026D, 0x0000))) goto labelFunc0672_0116;
	var0009 = var000A;
labelFunc0672_0116:
	if (!UI_is_not_blocked(var0009, 0x026D, 0x0000)) goto labelFunc0672_017B;
	var000B = UI_create_new_object(0x026D);
	if (!var000B) goto labelFunc0672_017B;
	UI_set_item_flag(var000B, 0x0012);
	UI_set_item_flag(var000B, 0x0000);
	var0002 = UI_update_last_created(var0009);
	var0002 = UI_set_npc_prop(var000B, 0x0003, 0x0001);
	var0002 = UI_delayed_execute_usecode_array(var000B, [(byte)0x23, (byte)0x55, 0x0672], var0005);
labelFunc0672_017B:
	goto labelFunc0672_00A0;
labelFunc0672_017E:
	goto labelFunc0672_019C;
labelFunc0672_0181:
	var000C = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x66, (byte)0x67, (byte)0x65, (byte)0x55, 0x0606]);
labelFunc0672_019C:
	if (!(event == 0x0002)) goto labelFunc0672_0213;
	var0009 = UI_get_object_position(item);
	var0002 = UI_set_last_created(item);
	if (!var0002) goto labelFunc0672_01C4;
	var0002 = UI_update_last_created(0xFE9A);
labelFunc0672_01C4:
	var000B = UI_create_new_object(0x037F);
	if (!var000B) goto labelFunc0672_0213;
	UI_set_item_flag(var000B, 0x0012);
	var0002 = UI_update_last_created(var0009);
	var000D = 0x001E;
	var000D = (var000D + UI_die_roll(0x0001, 0x0005));
	var0002 = UI_delayed_execute_usecode_array(var000B, [(byte)0x23, (byte)0x2D], var000D);
labelFunc0672_0213:
	return;
}


