#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func084F 0x84F ();
extern void Func084E 0x84E ();

void Func084D 0x84D ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_part_of_day();
	if (!(gflags[0x0096] && gflags[0x0097])) goto labelFunc084D_0059;
	message("「好吧，你确实尝试过完成任务。我不明白为什么 Destard 里的箱子是空的。但我们就忘了这回事吧，好吗？");
	say();
	message("「现在你已经为友谊会做了一点事，并且了解了我们的宗旨，你还想加入吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc084D_0051;
	gflags[0x008D] = true;
	message("「那么，非常欢迎你加入友谊会。");
	say();
	if (!(!(var0000 == 0x0007))) goto labelFunc084D_0040;
	message("「你将在今晚的夜间会议中被正式接纳。请务必前来，到时你将会收到你的奖章。我们再次感谢你，圣者。」*");
	say();
	abort;
	goto labelFunc084D_0047;
labelFunc084D_0040:
	message("「仪式即将开始。」");
	say();
	Func084F();
labelFunc084D_0047:
	UI_remove_answer("加入");
	goto labelFunc084D_0056;
labelFunc084D_0051:
	message("「我看得出来，你还没准备好在你的思想和生活中迈出这勇敢的一步。但请记住我们今天谈过的话，我的朋友！也许假以时日你就会准备好了。」*");
	say();
	abort;
labelFunc084D_0056:
	goto labelFunc084D_007C;
labelFunc084D_0059:
	message("「啊，但凡事总有先后。我建议你参加我们的考试，以确定你是否真正需要友谊会的教导。你想参加考试吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc084D_0077;
	UI_push_answers();
	Func084E();
	UI_pop_answers();
	goto labelFunc084D_007C;
labelFunc084D_0077:
	message("「那么，也许下次吧。」*");
	say();
	abort;
labelFunc084D_007C:
	return;
}


