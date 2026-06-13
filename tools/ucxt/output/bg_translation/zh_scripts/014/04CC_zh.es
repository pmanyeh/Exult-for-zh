#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04CC object#(0x4CC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event == 0x0001)) goto labelFunc04CC_01F6;
	UI_show_npc_face(0xFF34, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_get_npc_object(0xFF34);
	var0004 = UI_get_npc_object(0xFF35);
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(var0003);
	var0007 = UI_get_alignment(var0003);
	if (!(var0007 == 0x0002)) goto labelFunc04CC_0081;
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
labelFunc04CC_0081:
	if (!(!gflags[0x0289])) goto labelFunc04CC_0093;
	message("你看到一個肌肉發達的女人抬起頭，以承認你的存在。");
	say();
	gflags[0x0289] = true;
	goto labelFunc04CC_009D;
labelFunc04CC_0093:
	message("「是的，");
	message(var0000);
	message("？」");
	say();
labelFunc04CC_009D:
	converse attend labelFunc04CC_01F1;
	case "姓名" attend labelFunc04CC_0111:
	message("女人抓住你的手用力搖晃。「哈囉。我的名字是 Mara 。」");
	say();
	if (!(var0006 == 0x001A)) goto labelFunc04CC_010A;
	message("「你是誰？」");
	say();
	var0008 = Func090B([var0001, var0002, var0000]);
	if (!(var0008 == var0002)) goto labelFunc04CC_0106;
	message("「聖者！」她憤怒地大喊。「你就是把那些可惡的石像鬼帶進我們美好土地的罪魁禍首！」*");
	say();
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_alignment(var0004, 0x0002);
	abort;
	goto labelFunc04CC_010A;
labelFunc04CC_0106:
	message("「很高興見到你！」");
	say();
labelFunc04CC_010A:
	UI_remove_answer("姓名");
labelFunc04CC_0111:
	case "職業" attend labelFunc04CC_0124:
	message("她自豪地展示肌肉，「我是 Vesper 的礦工。」");
	say();
	UI_add_answer("Vesper");
labelFunc04CC_0124:
	case "Vesper" attend labelFunc04CC_0144:
	message("「這裡以前是個令人愉快的城鎮，」她環顧四周，顯然在檢查是否有人在附近，「直到石像鬼變得如此不受控制。現在我們大多數人必須花太多時間擔心石像鬼什麼時候會決定要殺我們。」");
	say();
	UI_add_answer(["石像鬼", "我們"]);
	UI_remove_answer("Vesper");
labelFunc04CC_0144:
	case "石像鬼" attend labelFunc04CC_0157:
	message("她聳聳肩。「沒什麼好說的，只能說他們是個威脅。沒有他們，這個鎮會好得多。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc04CC_0157:
	case "我們" attend labelFunc04CC_017D:
	message("「嗯，我知道 Cador 的想法和我一樣，他的妻子也是。我聽說鎮長對他們表達了擔憂。我不太了解他的書記員 Liana 。」");
	say();
	UI_add_answer(["Cador", "妻子", "鎮長", "Liana"]);
	UI_remove_answer("我們");
labelFunc04CC_017D:
	case "妻子" attend labelFunc04CC_0190:
	message("「Yvella 是個可愛的女人。她每天照顧她們的女兒 Catherine 。」");
	say();
	UI_remove_answer("妻子");
labelFunc04CC_0190:
	case "Liana" attend labelFunc04CC_01A3:
	message("「我只見過她幾次。我不夠了解她所以不能這麼說，但我覺得她對某件事感到生氣，因為她總是心情不好。」");
	say();
	UI_remove_answer("Liana");
labelFunc04CC_01A3:
	case "Cador" attend labelFunc04CC_01BD:
	message("「他負責管理礦區。工作也做得不錯。他通常會和我一起在鍍金蜥蜴 (Gilded Lizard) 喝酒。」");
	say();
	UI_add_answer("鍍金蜥蜴 (Gilded Lizard)");
	UI_remove_answer("Cador");
labelFunc04CC_01BD:
	case "鎮長" attend labelFunc04CC_01D0:
	message("「他的名字是 Auston 。我喜歡他，但我懷疑真正讓 Vesper 保持秩序的是 Liana 。」");
	say();
	UI_remove_answer("鎮長");
labelFunc04CC_01D0:
	case "鍍金蜥蜴 (Gilded Lizard)" attend labelFunc04CC_01E3:
	message("「那是 Vesper 這裡的酒館。 Yongi 是酒保。他倒的麥酒還算過得去。」");
	say();
	UI_remove_answer("鍍金蜥蜴 (Gilded Lizard)");
labelFunc04CC_01E3:
	case "告辭" attend labelFunc04CC_01EE:
	goto labelFunc04CC_01F1;
labelFunc04CC_01EE:
	goto labelFunc04CC_009D;
labelFunc04CC_01F1:
	endconv;
	message("Mara 握著你的手並拍拍你的背，說道：「再會，朋友！」*");
	say();
labelFunc04CC_01F6:
	if (!(event == 0x0000)) goto labelFunc04CC_0204;
	Func092E(0xFF34);
labelFunc04CC_0204:
	return;
}


