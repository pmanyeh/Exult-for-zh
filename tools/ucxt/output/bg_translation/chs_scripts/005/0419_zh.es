#game "blackgate"
/*
 * [翻譯註解] 關於 Chuckles (查克斯) 的「遊戲」對話在地化策略：
 * 
 * 原版英文的規則是「Words of one syllable」（只能說單音節的字）。
 * 由於中文每個字皆為單音節，若直譯會讓解謎失去意義。
 * 因此，在中文版中採用了「創譯 (Transcreation)」手法，
 * 將規則改為「四字遊戲」（每次開口只能說剛好四個字）。
 *
 * 玩家的正確選項皆為四個字。為了還原英文版中小丑也嚴格遵守規則的巧思，
 * 小丑進入遊戲後的所有台詞，也全部改寫成了「四言絕句」。
 * 若後續需修改對話字串，請務必維持此「四字限制」以保持謎題的一致性。
 */
// externs
extern var Func090A 0x90A ();
extern void Func0862 0x862 ();
extern void Func0861 0x861 ();
extern var Func090B 0x90B (var var0000);

void Func0419 object#(0x419) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0419_026D;
	UI_show_npc_face(0xFFE7, 0x0000);
	if (!(!gflags[0x009A])) goto labelFunc0419_0034;
	message("你对与那个爱恶作剧的 Chuckles 交谈感到警惕，但还是决定这么做。");
	say();
	gflags[0x009A] = true;
	UI_add_answer(["姓名", "职业", "告辞"]);
	goto labelFunc0419_0048;
labelFunc0419_0034:
	message("「如果你跟我玩『四字游戏』，我就会开口，朋友～记住，每次开口只能刚好说『四个字』！」 Chuckles 说。");
	say();
	UI_add_answer(["职业", "告辞", "游戏"]);
labelFunc0419_0048:
	converse attend labelFunc0419_025B;
	case "姓名" attend labelFunc0419_0065:
	message("「我不能说出我的名字，以免打破了四字游戏的规则！」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("游戏");
labelFunc0419_0065:
	case "职业" attend labelFunc0419_0078:
	message("「我过去是，现在是，将来也会是宫廷...小丑！如果我愿意，我可以给你一个线索，但现在我的工作是玩游戏。」");
	say();
	UI_add_answer("游戏");
labelFunc0419_0078:
	case "线索" attend labelFunc0419_00AF:
	if (!(!gflags[0x006F])) goto labelFunc0419_00A4;
	message("「你确定你会玩四字游戏吗？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0419_009D;
	Func0862();
	goto labelFunc0419_00A1;
labelFunc0419_009D:
	message("「你必须玩四字游戏才能得到线索！」");
	say();
labelFunc0419_00A1:
	goto labelFunc0419_00AF;
labelFunc0419_00A4:
	message("「哎呀。我确实给了你一个！」");
	say();
	UI_remove_answer("线索");
labelFunc0419_00AF:
	case "游戏" attend labelFunc0419_00DD:
	message("「如果你想和我说话，就必须玩四字游戏。」");
	say();
	UI_clear_answers();
	UI_add_answer(["我不明白你的意思", "游戏的规则是什么", "我懂游戏", "请你跟我解释一下"]);
	UI_remove_answer("游戏");
	gflags[0x0073] = true;
labelFunc0419_00DD:
	case "我不明白你的意思" attend labelFunc0419_00EF:
	Func0861();
	UI_remove_answer("我不明白你的意思");
labelFunc0419_00EF:
	case "请你跟我解释一下" attend labelFunc0419_0101:
	Func0861();
	UI_remove_answer("请你跟我解释一下");
labelFunc0419_0101:
	case "游戏的规则是什么" attend labelFunc0419_0114:
	message("「你只需要学会四字游戏的规则，然后直接加入玩！」");
	say();
	UI_remove_answer("游戏的规则是什么");
labelFunc0419_0114:
	case "我懂游戏" attend labelFunc0419_0168:
	message("「那就玩吧！」");
	say();
	UI_remove_answer("我懂游戏");
	UI_clear_answers();
	var0001 = Func090B(["我们来聊些什么呢", "我们要谈些什么话题", "要聊什么"]);
	if (!(var0001 == "要聊什么")) goto labelFunc0419_0165;
	message("「你喜欢啥。」");
	say();
	UI_clear_answers();
	UI_add_answer(["今天的天气", "伟大的不列颠王", "聊聊你吧", "说个笑话"]);
	goto labelFunc0419_0168;
labelFunc0419_0165:
	Func0861();
labelFunc0419_0168:
	case "今天的天气" attend labelFunc0419_017A:
	Func0861();
	UI_remove_answer("今天的天气");
labelFunc0419_017A:
	case "伟大的不列颠王" attend labelFunc0419_018C:
	Func0861();
	UI_remove_answer("伟大的不列颠王");
labelFunc0419_018C:
	case "聊聊你吧" attend labelFunc0419_01B6:
	message("「为何谈我？想不到吗？更有趣的？其他话题？」");
	say();
	UI_remove_answer("聊聊你吧");
	UI_clear_answers();
	UI_add_answer(["成熟的女人", "年轻女孩", "当地美食", "美味的晚餐"]);
labelFunc0419_01B6:
	case "说个笑话" attend labelFunc0419_01C9:
	message("「这太难了！边玩游戏，边讲笑话？实在太难！我想到了！母鸡为何，要过马路？为了走到，另外一边！」");
	say();
	UI_remove_answer("说个笑话");
labelFunc0419_01C9:
	case "成熟的女人" attend labelFunc0419_01DB:
	Func0861();
	UI_remove_answer("成熟的女人");
labelFunc0419_01DB:
	case "年轻女孩" attend labelFunc0419_01EE:
	message("「美丽城镇，很多女孩！还是说成，女孩很多，美丽城镇？」 Chuckles 耸了耸肩。");
	say();
	UI_remove_answer("年轻女孩");
labelFunc0419_01EE:
	case "当地美食" attend labelFunc0419_023B:
	message("「酒馆食物，非常美味！至于我呢，我喜欢在，房间地板，吃我的饭！」");
	say();
	UI_clear_answers();
	var0002 = Func090B(["当地的酒馆在哪里", "蓝猪客栈", "酒馆有供应羊肉吗", "这里有酒可以喝吗"]);
	if (!(var0002 == "蓝猪客栈")) goto labelFunc0419_0238;
	message("「那边可以，吃一顿饭！但我可以，给你一个，很棒线索！」");
	say();
	UI_clear_answers();
	UI_add_answer(["线索", "职业", "告辞"]);
	goto labelFunc0419_023B;
labelFunc0419_0238:
	Func0861();
labelFunc0419_023B:
	case "美味的晚餐" attend labelFunc0419_024D:
	Func0861();
	UI_remove_answer("美味的晚餐");
labelFunc0419_024D:
	case "告辞" attend labelFunc0419_0258:
	goto labelFunc0419_025B;
labelFunc0419_0258:
	goto labelFunc0419_0048;
labelFunc0419_025B:
	endconv;
	if (!gflags[0x0073]) goto labelFunc0419_0269;
	message("「再会了我的朋友！千万不要忘记……我是说，别忘游戏！」*");
	say();
	goto labelFunc0419_026D;
labelFunc0419_0269:
	message("「先告辞了！」*");
	say();
labelFunc0419_026D:
	if (!(event == 0x0000)) goto labelFunc0419_02E4;
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFE7));
	if (!(var0003 == 0x0004)) goto labelFunc0419_02E4;
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0004 == 0x0001)) goto labelFunc0419_02AA;
	var0005 = "@你好！@";
labelFunc0419_02AA:
	if (!(var0004 == 0x0002)) goto labelFunc0419_02BA;
	var0005 = "@你想玩四字游戏吗？@";
labelFunc0419_02BA:
	if (!(var0004 == 0x0003)) goto labelFunc0419_02CA;
	var0005 = "@让我们玩四字游戏吧！@";
labelFunc0419_02CA:
	if (!(var0004 == 0x0004)) goto labelFunc0419_02DA;
	var0005 = "@要跳舞吗？@";
labelFunc0419_02DA:
	UI_item_say(0xFFE7, var0005);
labelFunc0419_02E4:
	return;
}


