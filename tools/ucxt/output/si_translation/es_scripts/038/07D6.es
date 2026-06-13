#game "serpentisle"
void Func07D6 object#(0x7D6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_party_list2();
	var0001 = UI_get_npc_object(0xFE9C);
	enum();
labelFunc07D6_0012:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc07D6_0045;
	if (!(var0004 != var0001)) goto labelFunc07D6_0042;
	UI_remove_from_party(var0004);
	UI_set_npc_id(var0004, 0x001F);
	UI_set_schedule_type(var0004, 0x000F);
labelFunc07D6_0042:
	goto labelFunc07D6_0012;
labelFunc07D6_0045:
	return;
}


