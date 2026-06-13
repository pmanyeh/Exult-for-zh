#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0428 object#(0x428) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0428_0182;
	UI_show_npc_face(0xFFD8, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0428_003F;
	var0001 = Func08F7(0xFFCA);
	if (!var0001) goto labelFunc0428_003A;
	message("Judith 正忙著和『聖者旅團』一起表演，現在無法說話。*");
	say();
	abort;
	goto labelFunc0428_003F;
labelFunc0428_003A:
	message("「我得走了！我跟『聖者旅團』的表演要遲到了！晚點再跟你聊！」*");
	say();
	abort;
labelFunc0428_003F:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00A9])) goto labelFunc0428_0061;
	message("你看見一位眼中閃爍著音樂光芒、充滿魅力的中年婦女。");
	say();
	gflags[0x00A9] = true;
	goto labelFunc0428_0065;
labelFunc0428_0061:
	message("「你好！」 Judith 說。");
	say();
labelFunc0428_0065:
	converse attend labelFunc0428_017D;
	case "姓名" attend labelFunc0428_007B:
	message("「我是 Judith 。而且我已經知道你是誰了！」");
	say();
	UI_remove_answer("姓名");
labelFunc0428_007B:
	case "職業" attend labelFunc0428_0097:
	message("「我在音樂廳教音樂。我也會透過與『聖者旅團』一起演奏來賺點外快！」");
	say();
	UI_add_answer(["音樂", "音樂廳", "聖者旅團"]);
labelFunc0428_0097:
	case "音樂" attend labelFunc0428_00B1:
	message("「音樂就是我的生命。我知道我永遠不會成為一個著名的吟遊詩人，但我從演奏和表演中獲得了極大的樂趣。我也很享受教學。」");
	say();
	UI_remove_answer("音樂");
	UI_add_answer("教學");
labelFunc0428_00B1:
	case "音樂廳" attend labelFunc0428_00C4:
	message("「Lord British 幾年前任命我為音樂老師。這是一份很棒的工作！」");
	say();
	UI_remove_answer("音樂廳");
labelFunc0428_00C4:
	case "聖者旅團" attend labelFunc0428_00D7:
	message("「我們是一個合唱團。我們每晚在藍野豬酒館表演。請來聽我們的演出！我的學生 Neno 也在團裡。如果我們能籌到資金，我們希望明年能在全國巡迴演出。」");
	say();
	UI_remove_answer("聖者旅團");
labelFunc0428_00D7:
	case "教學" attend labelFunc0428_00F1:
	message("「教導他人實現了我人生的目標。這也讓我有時間離開家裡。」");
	say();
	UI_remove_answer("教學");
	UI_add_answer("家裡");
labelFunc0428_00F1:
	case "家裡" attend labelFunc0428_010B:
	message("「喔，我不想談論我的家。我的丈夫和我……嗯，我們並非完全……幸福。」");
	say();
	UI_remove_answer("家裡");
	UI_add_answer("丈夫");
labelFunc0428_010B:
	case "丈夫" attend labelFunc0428_0125:
	message("「你可能認識他。他是城鎮市長 Patterson。他是個聰明誠實的人，但我們之間存在分歧。~~「我不知道我為什麼要告訴你這些！」");
	say();
	UI_remove_answer("丈夫");
	UI_add_answer("分歧");
labelFunc0428_0125:
	case "分歧" attend labelFunc0428_0149:
	message("「嗯，首先，他是那個團體『友誼會』的成員。另一件事是他很少待在家裡。我真不敢相信他工作那麼辛苦。」");
	say();
	gflags[0x0081] = true;
	UI_remove_answer("分歧");
	UI_add_answer(["友誼會", "工作內容"]);
labelFunc0428_0149:
	case "友誼會" attend labelFunc0428_015C:
	message("「他們似乎已經接管了我們的生活。他們似乎已經接管了我們的國家！」");
	say();
	UI_remove_answer("友誼會");
labelFunc0428_015C:
	case "工作內容" attend labelFunc0428_016F:
	message("「他總是說他得工作到很晚。有些晚上他在黎明前回家。其他晚上他整夜都在外面。~~「嗯，我不能去想這件事。我只會感到難過。我必須專心於我的音樂。」");
	say();
	UI_remove_answer("工作內容");
labelFunc0428_016F:
	case "告辭" attend labelFunc0428_017A:
	goto labelFunc0428_017D;
labelFunc0428_017A:
	goto labelFunc0428_0065;
labelFunc0428_017D:
	endconv;
	message("Judith 帶著微笑並揮了揮手後，回到了她的樂器旁。*");
	say();
labelFunc0428_0182:
	if (!(event == 0x0000)) goto labelFunc0428_0190;
	Func092E(0xFFD8);
labelFunc0428_0190:
	return;
}


