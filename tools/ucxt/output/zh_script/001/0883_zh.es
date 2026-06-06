#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func0885 0x885 ();

void Func0883 0x883 ()
{
	var var0000;

	UI_show_npc_face(0xFFF4, 0x0000);
	var0000 = Func08F7(0xFFF5);
	if (!var0000) goto labelFunc0883_0035;
	message("「這裡的 Petre 知道這一切的內情。」");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	message("農夫插話說道。「我今天一大早發現了可憐的 Christopher 和 Gargoyle Inamo 。」*");
	say();
	UI_remove_npc_face(0xFFF5);
	goto labelFunc0883_0043;
labelFunc0883_0035:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("「馬廄管理員 Petre 今天一大早發現了可憐的 Christopher 和 Inamo 。」");
	say();
labelFunc0883_0043:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("市長繼續說道。「你搜查過馬廄了嗎？」");
	say();
	Func0885();
	return;
}


