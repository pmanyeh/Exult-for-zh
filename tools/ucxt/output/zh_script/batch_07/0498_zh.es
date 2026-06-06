#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func0498 object#(0x498) ()
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

	if (!(event == 0x0001)) goto labelFunc0498_02EE;
	UI_show_npc_face(0xFF68, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0003 = UI_is_pc_female();
	if (!(!gflags[0x01FA])) goto labelFunc0498_004B;
	message("你看到一位用冰冷目光迎接你視線的女人。");
	say();
	gflags[0x01FA] = true;
	goto labelFunc0498_0069;
labelFunc0498_004B:
	message("「你現在需要什麼？」");
	say();
	if (!gflags[0x01DB]) goto labelFunc0498_005C;
	UI_add_answer("Brion 的感覺");
labelFunc0498_005C:
	if (!gflags[0x01DC]) goto labelFunc0498_0069;
	UI_add_answer("Nelson 的感覺");
labelFunc0498_0069:
	converse attend labelFunc0498_02E9;
	case "姓名" attend labelFunc0498_0099:
	message("「我是 Zelda 。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x01DB]) goto labelFunc0498_008C;
	UI_add_answer("Brion 的感覺");
labelFunc0498_008C:
	if (!gflags[0x01DC]) goto labelFunc0498_0099;
	UI_add_answer("Nelson 的感覺");
labelFunc0498_0099:
	case "職業" attend labelFunc0498_00BF:
	message("「我是露加翁 (Lycaeum) 的顧問。」");
	say();
	UI_add_answer(["Lycaeum", "顧問"]);
	if (!gflags[0x01F6]) goto labelFunc0498_00BF;
	UI_add_answer("東北海");
labelFunc0498_00BF:
	case "Lycaeum" attend labelFunc0498_00D2:
	message("她翻了個白眼。「露加翁就是你現在站的這棟建築。它是一座偉大的圖書館，旨在收藏豐富的知識。雖然在過去的兩百年間建築結構有些改變，但學習的本質並沒有變。」");
	say();
	UI_remove_answer("Lycaeum");
labelFunc0498_00D2:
	case "顧問" attend labelFunc0498_00F2:
	message("「是的，」她說。「我的工作是管理和規範露加翁的活動。而且，」她補充道，「為月光城 (Moonglow) 的人們提供協助——當他們需要的時候！」");
	say();
	UI_remove_answer("顧問");
	UI_add_answer(["活動", "鎮民"]);
labelFunc0498_00F2:
	case "活動" attend labelFunc0498_0113:
	message("「我負責維護閱讀區並引進新書。此外，我還幫忙為 Jillian 的輔導課程組織特殊的小組活動，並設立教育娛樂項目。」");
	say();
	UI_remove_answer("活動");
	if (!(!var0002)) goto labelFunc0498_0113;
	UI_add_answer("Jillian");
labelFunc0498_0113:
	case "東北海" attend labelFunc0498_0126:
	message("「我沒時間回答這些瑣碎的地理問題。去查地圖集！」");
	say();
	UI_remove_answer("東北海");
labelFunc0498_0126:
	case "鎮民" attend labelFunc0498_015A:
	message("「我沒什麼時間處理這個，」她嘆了口氣。「我只跟露加翁的負責人 (Lycaeum head) 和他的雙胞胎兄弟 Brion 比較熟。訓練師 (trainer) 也在這間露加翁裡學習。」她抬頭看著天花板，彷彿在讀一份隱形懸在半空中的清單。~~「你已經知道 Penumbra 了。 Mariah 也在這裡。如果你想了解友誼會 的成員，去問那邊的書記員。否則，」她冷冷地看著你，「讓我回到我的工作上。」她事後又補充了一句：「還有，降低你的音量。大家正在努力閱讀。」");
	say();
	UI_add_answer(["Mariah", "Lycaeum 負責人", "Brion", "Penumbra"]);
	if (!(!var0002)) goto labelFunc0498_0153;
	UI_add_answer("訓練師");
labelFunc0498_0153:
	UI_remove_answer("鎮民");
labelFunc0498_015A:
	case "Mariah" attend labelFunc0498_016D:
	message("「嗯，他們說她曾經是個熟練的法師，但我看到的只是一個到處遊蕩、稱讚傢俱的女人。如果你想的話可以和她說話，但我懷疑你能聽懂她在說什麼。還有，找她的時候別把書架弄亂了！」");
	say();
	UI_remove_answer("Mariah");
labelFunc0498_016D:
	case "Jillian", "訓練師" attend labelFunc0498_0194:
	message("「Jillian ？她非常守規矩。而且安靜又整潔。我相信她是一位優秀的學者。如果你要去找她，盡量不要弄翻任何書架。剛到了一些新書，我還沒把它們全部擺好。」");
	say();
	UI_remove_answer(["Jillian", "訓練師"]);
	var0002 = true;
	UI_add_answer("新書");
labelFunc0498_0194:
	case "新書" attend labelFunc0498_01AE:
	message("「是的，它們是不久前到達的，其中包括最近重新發現的 DeMaria 和 Spector 的著作《聖者歷險記 (The Avatar Adventures) 》。如果你能避免製造太多干擾，我推薦你閱讀。」");
	say();
	UI_remove_answer("新書");
	UI_add_answer("聖者歷險記 (Avatar Adventures)");
labelFunc0498_01AE:
	case "聖者歷險記 (Avatar Adventures)" attend labelFunc0498_01EE:
	message("「如果我告訴你這最後一件事，你會離開好讓我回去工作嗎？」");
	say();
	if (!var0003) goto labelFunc0498_01C9;
	var0004 = "她";
	goto labelFunc0498_01CF;
labelFunc0498_01C9:
	var0004 = "他";
labelFunc0498_01CF:
	var0005 = Func090A();
	if (!var0005) goto labelFunc0498_01E9;
	message("「我們在地下室的深處發現了這本巨著。我們無法證實其內容的準確性，但已經注意到這部作品中的事件與不列顛尼亞最近歷史中的事件有許多相似之處。~~「這本書是聖者日記的副本，大約寫於兩百年前，也就是");
	message(var0004);
	message("最近一次造訪不列顛尼亞的期間。當然，」她諷刺地笑著，「它已經被其他人加上了註解。~~「最近出版是為了給予大眾更多的勇氣和信心。~~「現在，再見了。」");
	say();
	abort;
	goto labelFunc0498_01EE;
labelFunc0498_01E9:
	message("「很好。」");
	say();
	abort;
labelFunc0498_01EE:
	case "Penumbra" attend labelFunc0498_021C:
	if (!var0003) goto labelFunc0498_0205;
	var0006 = "她";
	goto labelFunc0498_020B;
labelFunc0498_0205:
	var0006 = "他";
labelFunc0498_020B:
	message("她搖了搖頭，咕噥著：「為什麼");
	message(var0006);
	message("要這樣浪費我的時間？」她重新抬頭看著你說：「Penumbra 是那位在兩個世紀前讓自己沉睡的聖人。傳聞只有聖者才能喚醒她。」");
	say();
	UI_remove_answer("Penumbra");
labelFunc0498_021C:
	case "Lycaeum 負責人" attend labelFunc0498_022F:
	message("「Nelson 非常能幹，雖然有點古怪。我真希望他能克制一下，不要向每個進入這棟建築的人炫耀他收集的小玩意。這總是會引起一陣騷動。」");
	say();
	UI_remove_answer("Lycaeum 負責人");
labelFunc0498_022F:
	case "Brion" attend labelFunc0498_0290:
	message("她冰冷的表情融化了。「Brion ，」她笑著說，「非常開明且理想主義。他對天文學 (heavens) 非常了解。」她抬起頭來強調『天文學』。「我覺得他非常有吸引力。但是，我不知道該如何傳達我的心意。」她害羞地轉過頭去。~~「除非，或許，");
	message(var0001);
	message("願意幫我？」她滿懷希望地問。「你同意替我告訴他嗎，");
	message(var0001);
	message("？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0498_0280;
	message("「謝謝你，");
	message(var0001);
	message("。謝謝你。」她臉紅了。");
	say();
	var0008 = UI_add_party_items(0x0001, 0x0154, 0xFE99, 0x0006, 0x0000);
	if (!var0008) goto labelFunc0498_027D;
	message("「為了報答你的好意，我給你這瓶白色的藥水，這是我有一次在整理地下室時發現的。」");
	say();
labelFunc0498_027D:
	goto labelFunc0498_0285;
labelFunc0498_0280:
	message("她冰冷的目光又回來了。「很好。」*");
	say();
	abort;
labelFunc0498_0285:
	gflags[0x01DA] = true;
	UI_remove_answer("Brion");
labelFunc0498_0290:
	case "Brion 的感覺" attend labelFunc0498_029D:
	message("她低頭看了一會兒。「我就知道。」當她抬起頭時，眼裡閃爍著淚光。「我感謝你的嘗試。」*");
	say();
	abort;
labelFunc0498_029D:
	case "Nelson 的感覺" attend labelFunc0498_02C8:
	message("「Nelson ？我從來沒真正想過他。」她聳了聳肩。「嗯，我想他也不失為一個次佳的選擇。我會試試看的，」她笑著說。");
	say();
	gflags[0x01E3] = true;
	Func0911(0x0014);
	UI_remove_answer("Nelson 的感覺");
	if (!(!gflags[0x01DA])) goto labelFunc0498_02C8;
	UI_add_answer("次佳選擇？");
labelFunc0498_02C8:
	case "次佳選擇？" attend labelFunc0498_02DB:
	message("「嗯，我覺得他的兄弟 Brion 相當有吸引力。」");
	say();
	UI_remove_answer("次佳選擇？");
labelFunc0498_02DB:
	case "告辭" attend labelFunc0498_02E6:
	goto labelFunc0498_02E9;
labelFunc0498_02E6:
	goto labelFunc0498_0069;
labelFunc0498_02E9:
	endconv;
	message("「祝你有個美好的一天。」*");
	say();
labelFunc0498_02EE:
	if (!(event == 0x0000)) goto labelFunc0498_02F7;
	abort;
labelFunc0498_02F7:
	return;
}


