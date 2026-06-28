#game "blackgate"
// externs
extern var Func0908 0x908 ();

void Func08C1 0x8C1 ()
{
	var var0000;

	var0000 = Func0908();
	message("「亲爱的 Rowena，我很高兴能看到妳离开那座可怕的高塔。」Mordra 的眼中开始盈满喜悦的泪水。*");
	say();
	UI_show_npc_face(0xFF70, 0x0001);
	message("「那真的很可怕，但最糟糕的是被迫远离我的丈夫。我和 Horance 在那里的整段时间，我觉得自己就像一个空壳。我必须和 Trent 在一起才能恢复完整。」*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「是的，妳说得完全正确。");
	message(var0000);
	message("，她必须迅速被带去见她的丈夫。我相信你会这么做的。」她把话说到这，便向 Rowena 道别了。*");
	say();
	abort;
	return;
}


