#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08AC 0x8AC (var var0000, var var0001, var var0002);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04C9 object#(0x4C9) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04C9_01D8;
	UI_show_npc_face(0xFF37, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF37));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0259]) goto labelFunc04C9_0049;
	if (!gflags[0x027A]) goto labelFunc04C9_0049;
	UI_add_answer("檢查石片");
labelFunc04C9_0049:
	if (!(!gflags[0x0272])) goto labelFunc04C9_005B;
	message("這位迷人的女士對你投以讚許的目光。");
	say();
	gflags[0x0272] = true;
	goto labelFunc04C9_0065;
labelFunc04C9_005B:
	message("「你好，");
	message(var0000);
	message("。」Leigh 對你微笑。");
	say();
labelFunc04C9_0065:
	converse attend labelFunc04C9_01CD;
	case "姓名" attend labelFunc04C9_007B:
	message("她紅著臉說。「我是 Leigh 女士。」");
	say();
	UI_remove_answer("姓名");
labelFunc04C9_007B:
	case "職業" attend labelFunc04C9_00A5:
	message("「我是 Serpent's Hold 的治療師。」");
	say();
	UI_add_answer(["Serpent's Hold", "治療"]);
	gflags[0x027A] = true;
	if (!gflags[0x0259]) goto labelFunc04C9_00A5;
	UI_add_answer("檢查石片");
labelFunc04C9_00A5:
	case "治療" attend labelFunc04C9_00D1:
	if (!(var0001 == 0x0007)) goto labelFunc04C9_00C6;
	Func08AC(0x0019, 0x0008, 0x0181);
	goto labelFunc04C9_00CA;
labelFunc04C9_00C6:
	message("「對不起，但我現在有太多其他病人要幫忙。或許等我下次開店的時候。」");
	say();
labelFunc04C9_00CA:
	UI_remove_answer("治療");
labelFunc04C9_00D1:
	case "Serpent's Hold" attend labelFunc04C9_00F1:
	message("「Jean-Paul 領主負責維持這裡的秩序，但 Denton 爵士會是了解 Serpent's Hold 的更好消息來源。」");
	say();
	UI_add_answer(["John-Paul", "Denton"]);
	UI_remove_answer("Serpent's Hold");
labelFunc04C9_00F1:
	case "John-Paul" attend labelFunc04C9_0120:
	message("「他很容易找到，因為 Horffe 爵士幾乎從未離開過他身邊。留意那個高大、肌肉發達的石像鬼。」");
	say();
	if (!(!gflags[0x025E])) goto labelFunc04C9_0108;
	message("「事實上，」她望著遠方說，「我相信他可能有話想對你說。或許你真的該去找他談談。」");
	say();
labelFunc04C9_0108:
	message("「如果你有堡壘事務要處理，卻找不到 John-Paul，你或許可以去跟 Richter 爵士談談。」");
	say();
	UI_remove_answer("John-Paul");
	UI_add_answer(["Horffe", "Richter"]);
labelFunc04C9_0120:
	case "Horffe" attend labelFunc04C9_0133:
	message("「他在很小的時候被發現，顯然被他的父親遺棄了。兩個人帶走並把他當作自己的孩子撫養。正如你見到他所能看出的那樣，他是一個非常高尚的人，也是一名堅定的戰士。」");
	say();
	UI_remove_answer("Horffe");
labelFunc04C9_0133:
	case "Richter" attend labelFunc04C9_0146:
	message("「他是軍械士。他的店在堡壘的後方。」");
	say();
	UI_remove_answer("Richter");
labelFunc04C9_0146:
	case "Denton" attend labelFunc04C9_0159:
	message("「他是神聖碼頭的酒保，就在堡壘大門內。他非常擅長記住和討論重要的事實。」");
	say();
	UI_remove_answer("Denton");
labelFunc04C9_0159:
	case "檢查石片" attend labelFunc04C9_01A6:
	var0002 = Func0931(0xFE9B, 0x0001, 0x032F, 0xFE99, 0x0004);
	if (!var0002) goto labelFunc04C9_019B;
	if (!gflags[0x0268]) goto labelFunc04C9_0189;
	message("她困惑地看著你。「我不是已經做過了嗎？」");
	say();
	goto labelFunc04C9_0198;
labelFunc04C9_0189:
	message("她接過你的石片並仔細檢查。使用幾瓶奇怪且不尋常的混合物，她分析了血液。最後，在幾分鐘的沉默後，她抬起頭，咧嘴笑著。~~「我已經確認了血液的性質。這絕對不是人類的。事實上，」她低頭看著樣本並挑起一邊眉毛，「這是石像鬼的血。」");
	say();
	UI_add_answer("石像鬼的血");
	gflags[0x025F] = true;
labelFunc04C9_0198:
	goto labelFunc04C9_019F;
labelFunc04C9_019B:
	message("「恐怕我必須能夠看到它們才能進行檢查。」");
	say();
labelFunc04C9_019F:
	UI_remove_answer("檢查石片");
labelFunc04C9_01A6:
	case "石像鬼的血" attend labelFunc04C9_01BF:
	message("她若有所思。~~「奇怪的是，");
	message(var0000);
	message("，在 Serpent's Hold 裡只有一隻石像鬼。但我無法想像 Horffe 爵士會跟這種惡意破壞有任何關係。」");
	say();
	UI_remove_answer("石像鬼的血");
labelFunc04C9_01BF:
	case "告辭" attend labelFunc04C9_01CA:
	goto labelFunc04C9_01CD;
labelFunc04C9_01CA:
	goto labelFunc04C9_0065;
labelFunc04C9_01CD:
	endconv;
	message("「再會，");
	message(var0000);
	message("。」*");
	say();
labelFunc04C9_01D8:
	if (!(event == 0x0000)) goto labelFunc04C9_01E6;
	Func092E(0xFF37);
labelFunc04C9_01E6:
	return;
}


