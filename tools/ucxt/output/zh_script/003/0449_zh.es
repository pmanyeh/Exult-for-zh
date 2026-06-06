#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0449 object#(0x449) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0449_01E2;
	UI_show_npc_face(0xFFB7, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0076]) goto labelFunc0449_002F;
	UI_add_answer("Nell");
labelFunc0449_002F:
	if (!gflags[0x007D]) goto labelFunc0449_003C;
	UI_add_answer("Jeanette");
labelFunc0449_003C:
	if (!gflags[0x007E]) goto labelFunc0449_0049;
	UI_add_answer("你運氣真好");
labelFunc0449_0049:
	if (!(!gflags[0x00CA])) goto labelFunc0449_005B;
	message("你看見一個端著酒杯托盤的年輕農民。");
	say();
	gflags[0x00CA] = true;
	goto labelFunc0449_005F;
labelFunc0449_005B:
	message("「你好，聖者。」");
	say();
labelFunc0449_005F:
	converse attend labelFunc0449_01DD;
	case "姓名" attend labelFunc0449_0075:
	message("「我是 Charles 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0449_0075:
	case "職業" attend labelFunc0449_008E:
	message("「我是 Lord British 城堡裡的僕人。我是貼身男僕，當然還有做其他事。現在我正在端酒。」");
	say();
	UI_add_answer(["僕人", "酒"]);
labelFunc0449_008E:
	case "僕人" attend labelFunc0449_00AE:
	message("「我的家族已經被 Lord British 僱用很多年了。我的父親 Bennie 曾經擔任我現在的職位。他是僕人總管。我想，總有一天我也會成為僕人總管。到那時，也許我的心上人就會愛我了。」");
	say();
	UI_remove_answer("僕人");
	UI_add_answer(["家族", "心上人"]);
labelFunc0449_00AE:
	case "家人" attend labelFunc0449_00C1:
	message("「你會遇到他們的。我母親在廚房做飯。我那古板的妹妹是女僕。」");
	say();
	UI_remove_answer("家人");
labelFunc0449_00C1:
	case "心上人" attend labelFunc0449_00DF:
	message("Charles 嘆了口氣。他顯然是被迷住了。「她是 Jeanette 。她在藍野豬酒館工作。但我恐怕『達不到她的標準』。我相信她看上別人了。我不知道該怎麼辦。」");
	say();
	gflags[0x007B] = true;
	UI_remove_answer("心上人");
	UI_add_answer("Jeanette");
labelFunc0449_00DF:
	case "Jeanette" attend labelFunc0449_00F2:
	message("「她不愛我，我知道。她寧願嫁個有錢人。我沒有機會。」");
	say();
	UI_remove_answer("Jeanette");
labelFunc0449_00F2:
	case "你運氣真好" attend labelFunc0449_0103:
	message("你告訴 Charles Jeanette 說了什麼。");
	say();
	message("「真的嗎？你是說我有機會了？」 Charles 興奮得差點把托盤弄掉。「喔，感謝你，聖者，給了我這個充滿希望的消息！我得趕快去送她花或什麼禮物！我必須表達我的愛！」他轉身背對著你，顯然已經樂得飄飄然了。*");
	say();
	abort;
labelFunc0449_0103:
	case "Nell" attend labelFunc0449_0127:
	message("「她和旋轉木馬經理訂婚了。這很難讓人習慣。我一直對我的小妹過度保護。我敢打賭她甚至從來沒有被親吻過！即使是 Carrocio 也沒有！這主要是因為我一直照顧著她。要是誰敢碰她一下，我絕對會痛扁他！再說， Nell 一直都很貞潔古板。她絕不會允許男人親她的。」");
	say();
	UI_remove_answer("Nell");
	gflags[0x007C] = true;
	if (!gflags[0x007A]) goto labelFunc0449_0127;
	UI_add_answer("孩子");
labelFunc0449_0127:
	case "小孩" attend labelFunc0449_015E:
	message("你回想起 Nell 告訴你關於她的『狀況』。你要跟 Charles 提這件事嗎？");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0449_0153;
	message("你將 Nell 私下透露的事告訴了 Charles 。");
	say();
	message("Charles 瞪大了眼睛，感到震驚。「什麼，那個蕩婦！我的妹妹！她根本就是個水性楊花的女人！等我抓到 Carrocio 就知道了！」");
	say();
	message("Charles 轉過身去。他的眼中充滿了殺氣。*");
	say();
	gflags[0x0089] = true;
	abort;
	goto labelFunc0449_015E;
labelFunc0449_0153:
	message("你的良心感到安寧，因為你知道你抵擋住了搬弄是非的誘惑。");
	say();
	UI_remove_answer("小孩");
labelFunc0449_015E:
	case "酒" attend labelFunc0449_01CF:
	message("「你想來點酒嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0449_01C4;
	var0002 = UI_get_party_list();
	var0003 = 0x0000;
	enum();
labelFunc0449_0184:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0449_019C;
	var0003 = (var0003 + 0x0001);
	goto labelFunc0449_0184;
labelFunc0449_019C:
	var0007 = UI_add_party_items(var0003, 0x0274, 0xFE99, 0x0000, true);
	if (!var0007) goto labelFunc0449_01BD;
	message("「算我請客。」 Charles 遞給你和你的朋友們幾杯酒。");
	say();
	goto labelFunc0449_01C1;
labelFunc0449_01BD:
	message("「哎呀。你身上拿太多東西了。等你雙手空出來再來跟我要吧！」");
	say();
labelFunc0449_01C1:
	goto labelFunc0449_01C8;
labelFunc0449_01C4:
	message("「那麼下次吧。」");
	say();
labelFunc0449_01C8:
	UI_remove_answer("酒");
labelFunc0449_01CF:
	case "告辭" attend labelFunc0449_01DA:
	goto labelFunc0449_01DD;
labelFunc0449_01DA:
	goto labelFunc0449_005F;
labelFunc0449_01DD:
	endconv;
	message("Charles 向你點點頭，然後繼續忙他的事。*");
	say();
labelFunc0449_01E2:
	if (!(event == 0x0000)) goto labelFunc0449_01F0;
	Func092E(0xFFB7);
labelFunc0449_01F0:
	return;
}


