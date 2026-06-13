#game "blackgate"
// externs
extern var Func0908 0x908 ();

void Func08C1 0x8C1 ()
{
	var var0000;

	var0000 = Func0908();
	message("「親愛的 Rowena，我很高興能看到妳離開那座可怕的高塔。」Mordra 的眼中開始盈滿喜悅的淚水。*");
	say();
	UI_show_npc_face(0xFF70, 0x0001);
	message("「那真的很可怕，但最糟糕的是被迫遠離我的丈夫。我和 Horance 在那裡的整段時間，我覺得自己就像一個空殼。我必須和 Trent 在一起才能恢復完整。」*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「是的，妳說得完全正確。");
	message(var0000);
	message("，她必須迅速被帶去見她的丈夫。我相信你會這麼做的。」她把話說到這，便向 Rowena 道別了。*");
	say();
	abort;
	return;
}


