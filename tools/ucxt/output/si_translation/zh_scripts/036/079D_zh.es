#game "serpentisle"
// externs
extern void Func0620 object#(0x620) ();

void Func079D object#(0x79D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc079D_0071;
	UI_play_sound_effect(0x0046);
	var0000 = UI_get_party_list();
	enum();
labelFunc079D_0017:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc079D_0071;
	if (!(!UI_roll_to_win(UI_get_npc_prop(var0003, 0x0000), UI_get_item_quality(item)))) goto labelFunc079D_006E;
	UI_set_item_flag(UI_get_npc_object(var0003), 0x0007);
	var0004 = UI_get_npc_object(var0003);
	var0004->Func0620();
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x061F], 0x0064);
labelFunc079D_006E:
	goto labelFunc079D_0017;
labelFunc079D_0071:
	return;
}


