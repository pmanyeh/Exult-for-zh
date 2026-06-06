#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0483 object#(0x483) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0483_02B3;
	UI_show_npc_face(0xFF7D, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x017E] && (!gflags[0x017F]))) goto labelFunc0483_003A;
	UI_add_answer("吊飾盒");
labelFunc0483_003A:
	if (!gflags[0x0180]) goto labelFunc0483_0047;
	UI_add_answer("陌生人");
labelFunc0483_0047:
	if (!(!gflags[0x018C])) goto labelFunc0483_0059;
	message("你看到一位看起來很謙虛的年長婦女。她對你露出友好的微笑。");
	say();
	gflags[0x018C] = true;
	goto labelFunc0483_0063;
labelFunc0483_0059:
	message("Magenta 笑了笑。「日安，");
	message(var0000);
	message("。我能幫你什麼忙嗎？」");
	say();
labelFunc0483_0063:
	converse attend labelFunc0483_02AE;
	case "姓名" attend labelFunc0483_0080:
	message("「我是 Magenta ，來自 New Magincia 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("New Magincia");
labelFunc0483_0080:
	case "職業" attend labelFunc0483_0099:
	message("「我是 New Magincia 的鎮長，也是 Boris 的妻子。」");
	say();
	UI_add_answer(["鎮長", "Boris"]);
labelFunc0483_0099:
	case "鎮長" attend labelFunc0483_00B3:
	message("「這份工作其實不太需要實際的行政管理。我主要是確保大家都能和睦相處。除此之外，這個鎮幾乎是自行運作的。」");
	say();
	UI_remove_answer("鎮長");
	UI_add_answer("管理");
labelFunc0483_00B3:
	case "管理" attend labelFunc0483_00C6:
	message("「甚至這裡的稅收也比不列顛尼亞的任何其他地方都輕。不列顛尼亞稅務委員會甚至有時會連續好幾年忘記來這裡收稅。」");
	say();
	UI_remove_answer("管理");
labelFunc0483_00C6:
	case "Boris" attend labelFunc0483_00D9:
	message("「Boris 是當地的客棧老闆，說句實話，他有點像個無賴。但他很會倒酒，也很會說故事。雖然我得盯著他，但我愛他。」");
	say();
	UI_remove_answer("Boris");
labelFunc0483_00D9:
	case "New Magincia" attend labelFunc0483_00F3:
	message("「喔，就像這裡流傳的笑話說的， New Magincia 永遠沒有『新』鮮事。但我們就喜歡這樣。我們這裡很少有訪客。」");
	say();
	UI_add_answer("訪客");
	UI_remove_answer("New Magincia");
labelFunc0483_00F3:
	case "訪客", "陌生人" attend labelFunc0483_0116:
	message("「我聽說還有三個新來的人在附近徘徊。我總是盡量把人往好處想，但你還是要小心他們。」");
	say();
	UI_add_answer("新來的人");
	UI_remove_answer(["陌生人", "訪客"]);
labelFunc0483_0116:
	case "新來的人" attend labelFunc0483_0129:
	message("「鎮上的其他人現在肯定已經見過他們了。也許他們會有更多消息。」");
	say();
	UI_remove_answer("新來的人");
labelFunc0483_0129:
	case "吊飾盒" attend labelFunc0483_0143:
	message("你看到 Henry 描述的吊飾盒掛在 Magenta 的脖子上。「它不美嗎？這是我在我丈夫吧檯後面的祕密藏匿處找到的。」");
	say();
	UI_add_answer("發現");
	UI_remove_answer("吊飾盒");
labelFunc0483_0143:
	case "發現" attend labelFunc0483_0163:
	message("「我從沒想過 Boris 會這麼浪漫。這個吊飾盒一定是給我的驚喜！」");
	say();
	UI_add_answer(["浪漫", "驚喜"]);
	UI_remove_answer("發現");
labelFunc0483_0163:
	case "浪漫" attend labelFunc0483_018B:
	if (!(!gflags[0x017F])) goto labelFunc0483_0179;
	message("「在被我抓到那麼多次尋歡作樂和狂歡之後，他一定是在想辦法重新討我歡心。」");
	say();
	goto labelFunc0483_017D;
labelFunc0483_0179:
	message("「嗯，我『確實』認為他是想把它送給我，好彌補他被我抓到那麼多次尋歡作樂和狂歡的事。」");
	say();
labelFunc0483_017D:
	UI_add_answer("狂歡");
	UI_remove_answer("浪漫");
labelFunc0483_018B:
	case "狂歡" attend labelFunc0483_021C:
	message("「說真的，你覺得 Boris 會不會是想把這個吊飾盒送給別人？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0483_0211;
	message("Magenta 震驚地睜大眼睛。「誰？」");
	say();
	UI_push_answers();
	var0002 = Func090B(["Constance", "不知道是誰"]);
	if (!(var0002 == "Constance")) goto labelFunc0483_01F8;
	message("「我絕不可能戴著原本要送給別的女人的珠寶。作為鎮長，聖者，我將把它還給她（或者更確切地說，還給本來打算送她的人）的任務交給你。至於 Boris ……哼，我晚點再來收拾他！」");
	say();
	if (!(!gflags[0x017F])) goto labelFunc0483_01F8;
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, false);
	if (!var0003) goto labelFunc0483_01F4;
	message("「這是吊飾盒。拿去吧。」");
	say();
	gflags[0x017F] = true;
	goto labelFunc0483_01F8;
labelFunc0483_01F4:
	message("「我不能把吊飾盒交給你。你帶太多東西了。放下一點東西後再來吧。」");
	say();
labelFunc0483_01F8:
	if (!(var0002 == "不知道是誰")) goto labelFunc0483_020A;
	message("Magenta 看起來很困惑。「我想知道那是誰？」");
	say();
	message("然後 Magenta 眼神中閃過一絲凶光。「那麼，我就去把他打到招認為止！」");
	say();
labelFunc0483_020A:
	UI_pop_answers();
	goto labelFunc0483_0215;
labelFunc0483_0211:
	message("Magenta 鬆了一口氣。「我很高興你這麼說。現在我收下它就不會有罪惡感了。」");
	say();
labelFunc0483_0215:
	UI_remove_answer("狂歡");
labelFunc0483_021C:
	case "驚喜" attend labelFunc0483_02A0:
	if (!(!gflags[0x017F])) goto labelFunc0483_0295;
	message("「Boris 願意買這麼昂貴的禮物給我，我受寵若驚。但他怎麼買得起？」");
	say();
	UI_push_answers();
	var0004 = Func090B(["偷來的", "不知道怎麼買的"]);
	if (!(var0004 == "偷來的")) goto labelFunc0483_0280;
	message("雖然 Magenta 努力保持尊嚴，但她無法掩飾自己的失望。「作為鎮長，我將尋找這個吊飾盒的主人並物歸原主的任務交給你。」");
	say();
	if (!(!gflags[0x017F])) goto labelFunc0483_0280;
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, false);
	if (!var0003) goto labelFunc0483_027C;
	message("「拿去吧。」");
	say();
	gflags[0x017F] = true;
	goto labelFunc0483_0280;
labelFunc0483_027C:
	message("「你連這麼小的東西都帶不下了！如果你能放下一些東西，我就把吊飾盒交給你。」");
	say();
labelFunc0483_0280:
	if (!(var0004 == "不知道怎麼買的")) goto labelFunc0483_028E;
	message("Magenta 看起來很困惑。然後她笑了。「喔，好吧。它真的很漂亮，不是嗎？如果他認為這樣能改善我們的夫妻關係，那他也沒完全錯！」");
	say();
labelFunc0483_028E:
	UI_pop_answers();
	goto labelFunc0483_0299;
labelFunc0483_0295:
	message("「嗯，我起初還以為 Boris 買了這個吊飾盒要給我個驚喜！等我抓到那個沒用的……」Magenta 氣得滿臉通紅。");
	say();
labelFunc0483_0299:
	UI_remove_answer("驚喜");
labelFunc0483_02A0:
	case "告辭" attend labelFunc0483_02AB:
	goto labelFunc0483_02AE;
labelFunc0483_02AB:
	goto labelFunc0483_0063;
labelFunc0483_02AE:
	endconv;
	message("「我期待下次見到你。」*");
	say();
labelFunc0483_02B3:
	if (!(event == 0x0000)) goto labelFunc0483_02C1;
	Func092E(0xFF7D);
labelFunc0483_02C1:
	return;
}


