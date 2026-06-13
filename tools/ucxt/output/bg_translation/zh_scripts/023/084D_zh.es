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
	message("「好吧，你確實嘗試過完成任務。我不明白為什麼 Destard 裡的箱子是空的。但我們就忘了這回事吧，好嗎？");
	say();
	message("「現在你已經為友誼會做了一點事，並且了解了我們的宗旨，你還想加入嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc084D_0051;
	gflags[0x008D] = true;
	message("「那麼，非常歡迎你加入友誼會。");
	say();
	if (!(!(var0000 == 0x0007))) goto labelFunc084D_0040;
	message("「你將在今晚的夜間會議中被正式接納。請務必前來，到時你將會收到你的獎章。我們再次感謝你，聖者。」*");
	say();
	abort;
	goto labelFunc084D_0047;
labelFunc084D_0040:
	message("「儀式即將開始。」");
	say();
	Func084F();
labelFunc084D_0047:
	UI_remove_answer("加入");
	goto labelFunc084D_0056;
labelFunc084D_0051:
	message("「我看得出來，你還沒準備好在你的思想和生活中邁出這勇敢的一步。但請記住我們今天談過的話，我的朋友！也許假以時日你就會準備好了。」*");
	say();
	abort;
labelFunc084D_0056:
	goto labelFunc084D_007C;
labelFunc084D_0059:
	message("「啊，但凡事總有先後。我建議你參加我們的考試，以確定你是否真正需要友誼會的教導。你想參加考試嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc084D_0077;
	UI_push_answers();
	Func084E();
	UI_pop_answers();
	goto labelFunc084D_007C;
labelFunc084D_0077:
	message("「那麼，也許下次吧。」*");
	say();
	abort;
labelFunc084D_007C:
	return;
}


