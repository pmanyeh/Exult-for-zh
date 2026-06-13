#game "serpentisle"
void Func0796 object#(0x796) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc0796_0085;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_party_list();
	enum();
labelFunc0796_0018:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0796_0085;
	if (!(var0004 != UI_get_npc_object(0xFE9C))) goto labelFunc0796_0082;
	if (!(!UI_roll_to_win(UI_get_npc_prop(var0004, 0x0002), 0x000F))) goto labelFunc0796_0082;
	UI_halt_scheduled(var0004);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_attack_mode(var0004, 0x0007);
	UI_set_oppressor(var0004, 0xFE9C);
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x0796], var0000);
labelFunc0796_0082:
	goto labelFunc0796_0018;
labelFunc0796_0085:
	if (!(event == 0x0002)) goto labelFunc0796_0095;
	UI_set_schedule_type(item, 0x001F);
labelFunc0796_0095:
	return;
}


