#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func0422 object#(0x422) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0422_0271;
	UI_show_npc_face(0xFFDE, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFDE));
	var0002 = UI_wearing_fellowship();
	if (!(var0000 == 0x0007)) goto labelFunc0422_0067;
	var0003 = Func08FC(0xFFDE, 0xFFE6);
	if (!var0003) goto labelFunc0422_0052;
	message("Nanna 因為你在友誼會集會時打擾她而給了你一個嚴厲的眼神，就像你曾經遇到過的小學老師那樣。*");
	say();
	abort;
	goto labelFunc0422_0067;
labelFunc0422_0052:
	if (!gflags[0x00DA]) goto labelFunc0422_0062;
	message("「我無法想像 Batlin 在哪裡。他從未缺席過友誼會的集會！」");
	say();
	goto labelFunc0422_0067;
	goto labelFunc0422_0067;
labelFunc0422_0062:
	message("「喔！哈囉！我現在不能停下來說話。我正在去友誼會集會的路上！」*");
	say();
	abort;
labelFunc0422_0067:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00A3])) goto labelFunc0422_0089;
	message("你看到一位散發著和藹氣息的勞工階級年長婦女。");
	say();
	gflags[0x00A3] = true;
	goto labelFunc0422_008D;
labelFunc0422_0089:
	message("「是的，我能幫你嗎？」 Nanna 問。");
	say();
labelFunc0422_008D:
	converse attend labelFunc0422_026C;
	case "姓名" attend labelFunc0422_00A3:
	message("「喔，大家只叫我『Nanna』。」");
	say();
	UI_remove_answer("姓名");
labelFunc0422_00A3:
	case "職業" attend labelFunc0422_00BF:
	message("「我負責看管皇家育兒室。我是這些棒孩子們的保母。」");
	say();
	UI_add_answer(["皇家育兒室", "保母", "孩子們"]);
labelFunc0422_00BF:
	case "皇家育兒室" attend labelFunc0422_013C:
	message("「近年來 Britannia 出生了許多嬰兒，所以 Lord British 建立了這個育兒室。貴族男女能有這種奢侈的服務真是不錯，這樣他們就能專心處理日常職務了。」");
	say();
	UI_remove_answer("皇家育兒室");
	UI_add_answer("奢侈");
	var0004 = Func08F7(0xFFFE);
	if (!(var0001 == 0x0007)) goto labelFunc0422_0135;
	if (!var0004) goto labelFunc0422_0107;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「呼！你有聞到我聞到的味道嗎，聖者？」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0422_0107:
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0422_012B;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我相信那是尿布的味道，孩子。當有一天你成為父親時，你就會很熟悉那個味道了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0422_012B:
	UI_show_npc_face(0xFFDE, 0x0000);
labelFunc0422_0135:
	UI_remove_answer("皇家育兒室");
labelFunc0422_013C:
	case "保母" attend labelFunc0422_015C:
	message("「嗯，我餵他們吃飯、幫他們換尿布，並大聲朗讀你看到散落在一旁的所有書籍。幸運的是，我有 Sherry 來幫我。」");
	say();
	UI_remove_answer("保母");
	UI_add_answer(["書籍", "Sherry"]);
labelFunc0422_015C:
	case "書籍" attend labelFunc0422_016F:
	message("「Lord British 把這些書從他的家鄉帶來的。這些對我們 Britannia 來說非常陌生，但孩子們一樣很喜歡。」");
	say();
	UI_remove_answer("書籍");
labelFunc0422_016F:
	case "Sherry" attend labelFunc0422_0182:
	message("「Sherry 是一隻特別的老鼠，她在城堡裡住了很多、許多年了。她會為孩子們朗誦故事。」");
	say();
	UI_remove_answer("Sherry");
labelFunc0422_0182:
	case "孩子們" attend labelFunc0422_01B8:
	message("「他們很可愛，不是嗎？每一天他們似乎都學得越來越多。大部分時間他們都是一種快樂。」 Nanna 神秘兮兮地對你耳語，「而在其他時候，我真想把他們連同洗澡水一起倒掉！」");
	say();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFFE0));
	if (!(var0006 == 0x0019)) goto labelFunc0422_01B1;
	message("「孩子們現在一定在外面和 Sherry 玩。」");
	say();
	UI_add_answer("Sherry");
labelFunc0422_01B1:
	UI_remove_answer("孩子們");
labelFunc0422_01B8:
	case "奢侈" attend labelFunc0422_01D2:
	message("「是的，我想這真的是一種奢侈。Britannia 較貧窮的人當然沒有這種照顧他們孩子的服務。富人確實有優勢。」你從她的聲音中聽出了一絲苦澀。");
	say();
	UI_remove_answer("奢侈");
	UI_add_answer("優勢");
labelFunc0422_01D2:
	case "優勢" attend labelFunc0422_01F2:
	message("「我絕不是要抱怨。我很熱愛我的工作。但與許多貴族男女的想法相反，Britannia 的階級結構比以往任何時候都存在。稅收令人難以承受。俗話說，富人越來越富，窮人越來越窮。」");
	say();
	UI_remove_answer("優勢");
	UI_add_answer(["階級結構", "稅收"]);
labelFunc0422_01F2:
	case "稅收" attend labelFunc0422_0205:
	message("「Britannia 稅務委員會把我們都榨乾了。尤其是中下階層。」");
	say();
	UI_remove_answer("稅收");
labelFunc0422_0205:
	case "階級結構" attend labelFunc0422_0229:
	message("「嗯，你看看周圍！有錢人住在富麗堂皇的城堡裡。而就在外面，窮人住在破屋裡。你知道石像鬼（gargoyles）有分有翅膀和沒翅膀的嗎？嗯，看來人類也變得同樣分裂了。這片土地上不再有團結了。這就是為什麼我加入了友誼會。」");
	say();
	UI_remove_answer("階級結構");
	UI_add_answer(["友誼會", "理念"]);
	gflags[0x0082] = true;
labelFunc0422_0229:
	case "友誼會" attend labelFunc0422_023B:
	Func0919();
	UI_remove_answer("友誼會");
labelFunc0422_023B:
	case "理念" attend labelFunc0422_025E:
	if (!var0002) goto labelFunc0422_0250;
	message("她注意到了你的徽章。「但你已經知道這一切了！");
	say();
	goto labelFunc0422_0257;
labelFunc0422_0250:
	message("「你真的應該來參加集會。你會學到很多！」");
	say();
	Func091A();
labelFunc0422_0257:
	UI_remove_answer("理念");
labelFunc0422_025E:
	case "告辭" attend labelFunc0422_0269:
	goto labelFunc0422_026C;
labelFunc0422_0269:
	goto labelFunc0422_008D;
labelFunc0422_026C:
	endconv;
	message("「祝你有個美好的一天！一定要快點再回來拜訪喔！」*");
	say();
labelFunc0422_0271:
	if (!(event == 0x0000)) goto labelFunc0422_027F;
	Func092E(0xFFDE);
labelFunc0422_027F:
	return;
}


