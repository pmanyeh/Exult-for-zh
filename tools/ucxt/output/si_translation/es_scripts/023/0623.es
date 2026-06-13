#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);
extern void Func0624 object#(0x624) ();

void Func0623 object#(0x623) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0002)) goto labelFunc0623_0080;
	var0000 = UI_get_party_list();
	if (!(UI_get_array_size(var0000) > 0x0001)) goto labelFunc0623_0035;
	var0001 = UI_get_npc_name(0xFE9C);
	Func094A((("Arise, " + var0001) + ". 'Tis time to continue the quest."));
labelFunc0623_0035:
	enum();
labelFunc0623_0036:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc0623_004E;
	UI_set_schedule_type(var0004, 0x001F);
	goto labelFunc0623_0036;
labelFunc0623_004E:
	UI_set_item_flag(0xFE9C, 0x0001);
	UI_clear_item_flag(0xFE9C, 0x0001);
	if (!((UI_get_item_shape(item) == 0x03F3) && (UI_get_item_frame(item) == 0x0015))) goto labelFunc0623_0080;
	event = 0x0001;
	item->Func0624();
labelFunc0623_0080:
	return;
}


