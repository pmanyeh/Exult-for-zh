#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func0941 0x941 (var var0000);
extern var Func0980 0x980 (var var0000);

void Func0683 object#(0x683) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0683_0322;
	UI_halt_scheduled(item);
	UI_item_say(item, "Uus Vas Jux Ylem@");
	if (!Func0951()) goto labelFunc0683_0306;
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x68, (byte)0x68, (byte)0x6A, (byte)0x69, (byte)0x58, 0x0043]);
	var0001 = (Func0941(0xFE9C) + UI_die_roll(0x0001, 0x0004));
	if (!(var0001 > 0x0008)) goto labelFunc0683_012C;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0005);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0006);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0007);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0008);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0009);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000A);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000B);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000C);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000D);
labelFunc0683_012C:
	if (!(var0001 == 0x0008)) goto labelFunc0683_01DE;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0005);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0006);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0007);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0008);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0009);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000A);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000B);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000C);
labelFunc0683_01DE:
	if (!(var0001 == 0x0007)) goto labelFunc0683_027B;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0005);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0006);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0007);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0008);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0009);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000A);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000B);
labelFunc0683_027B:
	if (!(var0001 < 0x0007)) goto labelFunc0683_0303;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0005);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0006);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0007);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0008);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x0009);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0683], 0x000A);
labelFunc0683_0303:
	goto labelFunc0683_0322;
labelFunc0683_0306:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x68, (byte)0x68, (byte)0x6A, (byte)0x69, (byte)0x55, 0x0606]);
labelFunc0683_0322:
	if (!(event == 0x0002)) goto labelFunc0683_0379;
	var0002 = 0x0019;
	var0003 = Func0980(var0002);
	var0004 = UI_get_array_size(var0003);
	if (!var0003) goto labelFunc0683_0379;
	var0005 = UI_get_random(var0004);
	var0006 = var0003[var0005];
	var0007 = UI_set_to_attack(item, var0006, 0x0327);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x7A]);
labelFunc0683_0379:
	return;
}


