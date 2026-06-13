#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func06A6 object#(0x6A6) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0002)) goto labelFunc06A6_00AE;
	var0000 = UI_get_npc_id(item);
	if (!(var0000 == 0x0000)) goto labelFunc06A6_002A;
	var0001 = UI_execute_usecode_array(item, [(byte)0x52, "@Help me!@"]);
labelFunc06A6_002A:
	if (!(var0000 == 0x0001)) goto labelFunc06A6_0044;
	var0001 = UI_execute_usecode_array(item, [(byte)0x52, "@The button! Press the button!@"]);
labelFunc06A6_0044:
	if (!(var0000 == 0x0002)) goto labelFunc06A6_005E;
	var0001 = UI_execute_usecode_array(item, [(byte)0x52, "@The flames -- burning me!@"]);
labelFunc06A6_005E:
	if (!(var0000 == 0x0003)) goto labelFunc06A6_0078;
	var0001 = UI_execute_usecode_array(item, [(byte)0x52, "@Please!@"]);
labelFunc06A6_0078:
	if (!(var0000 == 0x0004)) goto labelFunc06A6_00A2;
	var0002 = Func09A0(0x0000, 0x0001);
	var0001 = UI_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x07D9]);
labelFunc06A6_00A2:
	UI_set_npc_id(item, (var0000 + 0x0001));
labelFunc06A6_00AE:
	return;
}


