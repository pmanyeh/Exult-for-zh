#game "blackgate"
// externs
extern var Func0900 0x900 ();
extern void Func093F 0x93F (var var0000, var var0001);
extern void Func0624 object#(0x624) ();

void Func0623 object#(0x623) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0002)) goto labelFunc0623_008F;
	var0000 = Func0900();
	if (!(!(var0000 == 0xFE9C))) goto labelFunc0623_003E;
	UI_show_npc_face(var0000, 0x0000);
	var0001 = UI_get_npc_name(0xFE9C);
	message("\"Arise, ");
	message(var0001);
	message(". Time to continue the quest.\"");
	say();
	UI_remove_npc_face(var0000);
labelFunc0623_003E:
	var0002 = UI_get_party_list();
	enum();
labelFunc0623_0046:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0623_005D;
	Func093F(var0005, 0x001F);
	goto labelFunc0623_0046;
labelFunc0623_005D:
	UI_set_item_flag(0xFE9C, 0x0001);
	UI_clear_item_flag(0xFE9C, 0x0001);
	if (!((UI_get_item_shape(item) == 0x03F3) && (UI_get_item_frame(item) == 0x0011))) goto labelFunc0623_008F;
	event = 0x0001;
	item->Func0624();
labelFunc0623_008F:
	return;
}


