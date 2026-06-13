#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D7 object#(0x7D7) ();

void Func067D object#(0x67D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc067D_00A0;
	UI_halt_scheduled(item);
	UI_item_say(item, "@An Frio Xen Ex@");
	if (!(Func0951() && (!UI_get_item_flag(0xFE9C, 0x0023)))) goto labelFunc067D_007E;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x68, (byte)0x69, (byte)0x6A, (byte)0x69, (byte)0x61, (byte)0x6D, (byte)0x6E, (byte)0x6E, (byte)0x55, 0x07D6, (byte)0x58, 0x0043]);
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x2C, (byte)0x55, 0x067D], 0x012C);
	UI_set_polymorph(UI_get_npc_object(0xFE9C), 0x0212);
	goto labelFunc067D_00A0;
labelFunc067D_007E:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x68, (byte)0x69, (byte)0x6A, (byte)0x69, (byte)0x61, (byte)0x6D, (byte)0x6E, (byte)0x6E, (byte)0x55, 0x0606]);
labelFunc067D_00A0:
	if (!(event == 0x0002)) goto labelFunc067D_014F;
	var0001 = UI_get_object_position(item);
	var0002 = ((var0001[0x0001] + 0x0002) & ((var0001[0x0002] + 0x0002) & var0001[0x0003]));
	var0003 = false;
	if (!((var0001[0x0001] > 0x0550) && ((var0001[0x0001] < 0x0573) && ((var0001[0x0002] > 0x01EA) && (var0001[0x0002] < 0x0212))))) goto labelFunc067D_0105;
	var0003 = true;
labelFunc067D_0105:
	if (!((var0003 == false) && UI_is_not_blocked(var0002, 0x02D1, 0x0001))) goto labelFunc067D_0130;
	UI_set_polymorph(UI_get_npc_object(0xFE9C), 0x02D1);
	item->Func07D7();
	goto labelFunc067D_014F;
labelFunc067D_0130:
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x2C, (byte)0x55, 0x067D], 0x000A);
labelFunc067D_014F:
	return;
}


