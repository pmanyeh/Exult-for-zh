#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func065E object#(0x65E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc065E_00B2;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	var0002 = Func0979(item);
	UI_halt_scheduled(item);
	var0003 = UI_find_object(0xFE9B, 0x02F9, 0xFE99, 0xFE99);
	UI_item_say(item, "@Rel Ort Wis@");
	if (!(Func0951() && ((var0001 == 0x02CB) && var0003))) goto labelFunc065E_009B;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0002, (byte)0x58, 0x0043]);
	var0004 = UI_delayed_execute_usecode_array(var0000[0x0001], [(byte)0x2D], 0x0004);
	var0005 = UI_get_item_quality(var0000);
	var0004 = UI_add_spell(var0005, 0x0000, var0003);
	goto labelFunc065E_00B2;
labelFunc065E_009B:
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0002, (byte)0x55, 0x0606]);
labelFunc065E_00B2:
	return;
}


