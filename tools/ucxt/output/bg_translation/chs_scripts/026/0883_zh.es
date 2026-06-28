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
	message("「这里的 Petre 知道这一切的内情。」");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	message("农夫插话说道。「我今天一大早发现了可怜的 Christopher 和 Gargoyle Inamo 。」*");
	say();
	UI_remove_npc_face(0xFFF5);
	goto labelFunc0883_0043;
labelFunc0883_0035:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("「马厩管理员 Petre 今天一大早发现了可怜的 Christopher 和 Inamo 。」");
	say();
labelFunc0883_0043:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("市长继续说道。「你搜查过马厩了吗？」");
	say();
	Func0885();
	return;
}


