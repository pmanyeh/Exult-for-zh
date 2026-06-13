#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func0941 0x941 (var var0000);

void Func0687 object#(0x687) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0687_011F;
	UI_halt_scheduled(item);
	var0000 = UI_get_object_position(item);
	UI_item_say(item, "@Ex Por@");
	if (!Func0951()) goto labelFunc0687_0103;
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0xFFFD, 0xFFFD, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0003, 0xFFFD, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0003, 0x0003, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0xFFFD, 0x0003, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(item, 0x001A, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x69, (byte)0x6D, (byte)0x6D, (byte)0x69, (byte)0x58, 0x0043]);
	var0002 = (0x000F + Func0941(0xFE9C));
labelFunc0687_00CE:
	if (!(var0002 != 0x0000)) goto labelFunc0687_0100;
	var0002 = (var0002 - 0x0001);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0688], (var0002 + 0x000A));
	goto labelFunc0687_00CE;
labelFunc0687_0100:
	goto labelFunc0687_011F;
labelFunc0687_0103:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x69, (byte)0x6D, (byte)0x6D, (byte)0x69, (byte)0x55, 0x0606]);
labelFunc0687_011F:
	return;
}


