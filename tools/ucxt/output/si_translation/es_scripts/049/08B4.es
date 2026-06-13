#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);

void Func08B4 0x8B4 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list());
	enum();
labelFunc08B4_0012:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc08B4_002A;
	UI_set_schedule_type(var0003, 0x000F);
	goto labelFunc08B4_0012;
labelFunc08B4_002A:
	return;
}


