#game "blackgate"
void Func02A3 shape#(0x2A3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc02A3_0293;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc02A3_00B3;
	var0001 = UI_click_on_item();
	UI_play_sound_effect2(0x000F, item);
	if (!UI_is_npc(var0001)) goto labelFunc02A3_003E;
	UI_item_say(var0001, "@Hey, that hurt!@");
	return;
labelFunc02A3_003E:
	if (!(UI_get_item_shape(var0001) == 0x02A3)) goto labelFunc02A3_00B3;
	if (!(UI_get_item_frame(var0001) == 0x000A)) goto labelFunc02A3_00B3;
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@I will tell!@"]);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@The treasure is at@"], 0x0010);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@169 South@"], 0x0020);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@28 East@"], 0x0030);
labelFunc02A3_00B3:
	if (!(var0000 == 0x000A)) goto labelFunc02A3_01D0;
	var0003 = UI_die_roll(0x0001, 0x0007);
	if (!(var0003 == 0x0001)) goto labelFunc02A3_00E6;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Squawk!@"]);
labelFunc02A3_00E6:
	if (!(var0003 == 0x0002)) goto labelFunc02A3_0102;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Polly want a cracker?@"]);
labelFunc02A3_0102:
	if (!((var0003 == 0x0003) || (var0003 == 0x0004))) goto labelFunc02A3_013B;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@I know where@"]);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@the treasure is!@"], 0x0010);
labelFunc02A3_013B:
	if (!(var0003 == 0x0005)) goto labelFunc02A3_0157;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Gimmee a cracker!@"]);
labelFunc02A3_0157:
	if (!((var0003 == 0x0006) || (var0003 == 0x0007))) goto labelFunc02A3_01D0;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Pretty bird!@"]);
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc02A3_01D0;
	var0002 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFE), [(byte)0x23, (byte)0x52, "@Ugly Bird!@"], 0x0010);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Ugly Boy!@"], 0x0020);
	var0002 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFE), [(byte)0x23, (byte)0x52, "@Hey!!@"], 0x0030);
labelFunc02A3_01D0:
	if (!((var0000 == 0x0011) || ((var0000 == 0x0012) || (var0000 == 0x0013)))) goto labelFunc02A3_0242;
	if (!(!UI_in_usecode(item))) goto labelFunc02A3_0242;
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x0011, (byte)0x46, 0x0011, (byte)0x58, 0x0012, (byte)0x46, 0x0013, (byte)0x0B, 0xFFF8, 0x000C, (byte)0x46, 0x0012]);
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc02A3_0242;
	var0002 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFE), [(byte)0x52, "@That is really weird.@"], 0x0004);
labelFunc02A3_0242:
	if (!(var0000 == 0x000B)) goto labelFunc02A3_0271;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	var0005 = ("Party gold: " + var0004);
	UI_item_say(item, var0005);
labelFunc02A3_0271:
	if (!(var0000 == 0x0014)) goto labelFunc02A3_0293;
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x0017, (byte)0x0B, 0xFFFE, 0x0004]);
labelFunc02A3_0293:
	return;
}


