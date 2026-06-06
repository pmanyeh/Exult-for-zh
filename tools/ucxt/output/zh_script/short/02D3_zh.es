#game "blackgate"
// externs
extern var Func0908 0x908 ();

void Func02D3 shape#(0x2D3) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc02D3_0033;
	var0000 = Func0908();
	if (!UI_npc_nearby(0xFFFF)) goto labelFunc02D3_0033;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"");
	message(var0000);
	message(" 注意到這些十字弓箭上獨特的 Iolo 商標了嗎？它們是專為真正的 IOLO 十字弓提供最大效能而設計的，在 Yew 附近有售。\"");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc02D3_0033:
	return;
}


