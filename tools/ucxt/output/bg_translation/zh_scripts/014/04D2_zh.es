#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();

void Func04D2 object#(0x4D2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D2_0221;
	UI_show_npc_face(0xFF2E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x028F])) goto labelFunc04D2_0044;
	message("你看到一個個子不高的女人，臉上帶著心不在焉的表情。");
	say();
	gflags[0x028F] = true;
	goto labelFunc04D2_0048;
labelFunc04D2_0044:
	message("「你在擔心什麼？」");
	say();
labelFunc04D2_0048:
	converse attend labelFunc04D2_021C;
	case "姓名" attend labelFunc04D2_005E:
	message("這位女士停下手邊的工作，轉過頭來看你，回答道：「我的名字是 Liana 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D2_005E:
	case "職業" attend labelFunc04D2_0077:
	message("「我是鎮長的書記員。我負責記錄 Vesper 的官方記錄和文件。」");
	say();
	UI_add_answer(["Vesper", "市長"]);
labelFunc04D2_0077:
	case "Vesper" attend labelFunc04D2_0097:
	message("「我喜歡這個城鎮，但它離 Britain 太遠了，以至於吸引了一些真正……不尋常的人。」");
	say();
	UI_add_answer(["居民", "奇怪的人"]);
	UI_remove_answer("Vesper");
labelFunc04D2_0097:
	case "市長" attend labelFunc04D2_00AA:
	message("「我在非官方身分上尊重 Auston 。但是，」她挑起眉毛補充道，「作為一名鎮長，他太沒有骨氣了。他害怕在任何問題上選邊站。我不認為他當初應該自願參選。」");
	say();
	UI_remove_answer("市長");
labelFunc04D2_00AA:
	case "奇怪的人" attend labelFunc04D2_00D3:
	message("「嗯，有幾個奇怪的人： Mara 和 Yongi 。還有 Blorn ——他是個刻薄的人，還有……嗯……當然，還有 Eldroth 。而且，」她打了個寒顫說，「還有石像鬼。」");
	say();
	UI_add_answer(["Mara", "Yongi", "Blorn", "Eldroth", "石像鬼"]);
	UI_remove_answer("奇怪的人");
labelFunc04D2_00D3:
	case "Mara" attend labelFunc04D2_0101:
	var0003 = UI_is_dead(UI_get_npc_object(0xFF34));
	if (!var0003) goto labelFunc04D2_00F6;
	message("「既然她已經走了，我對我說過的話感到抱歉。太可惜她死在那場酒吧鬥毆中了。」");
	say();
	goto labelFunc04D2_00FA;
labelFunc04D2_00F6:
	message("「Mara ？她需要學習如何表現得像個女人。她那男人般的態度騙不了任何人。」");
	say();
labelFunc04D2_00FA:
	UI_remove_answer("Mara");
labelFunc04D2_0101:
	case "Yongi" attend labelFunc04D2_0114:
	message("「Yongi 不過是個酒鬼。他開酒館的唯一原因，就是有藉口以批發價大量購買酒精飲料。不要問他關於石像鬼的事，除非你想讓他對你喋喋不休。他幾乎和 Blorn 一樣恨他們！」");
	say();
	UI_remove_answer("Yongi");
labelFunc04D2_0114:
	case "Eldroth" attend labelFunc04D2_0127:
	message("「我想他人很好，但他也是個老糊塗。我不認為他有腦子已經超過十年了。」");
	say();
	UI_remove_answer("Eldroth");
labelFunc04D2_0127:
	case "Blorn" attend labelFunc04D2_0141:
	message("「如果我見過的話，他就是個惹事生非的傢伙和小偷。如果他知道什麼對他最好的話，他應該考慮離開這個城鎮——快點。不過，有一件事我倒是很欣賞他——他比任何人都恨石像鬼！」");
	say();
	UI_add_answer("石像鬼");
	UI_remove_answer("Blorn");
labelFunc04D2_0141:
	case "石像鬼" attend labelFunc04D2_017D:
	message("「那對你來說就是個噁心的生物。我覺得以前我們叫他們惡魔 (daemons) 的時候名字取得更好！」");
	say();
	if (!(!var0002)) goto labelFunc04D2_0176;
	var0004 = UI_add_party_items(0x0001, 0x031D, 0x0002, 0xFE99, true);
	if (!var0004) goto labelFunc04D2_0176;
	message("「事實上……」她遞給你一張紙。");
	say();
	var0002 = true;
labelFunc04D2_0176:
	UI_remove_answer("石像鬼");
labelFunc04D2_017D:
	case "居民" attend labelFunc04D2_01A0:
	message("「嗯，有 Cador 、 Yvella 和 Zaksam ——那些是正常人。」");
	say();
	UI_add_answer(["Cador", "Yvella", "Zaksam"]);
	UI_remove_answer("居民");
labelFunc04D2_01A0:
	case "Zaksam" attend labelFunc04D2_01B3:
	message("「他是訓練師。據我所知是個相當好的戰士。」");
	say();
	UI_remove_answer("Zaksam");
labelFunc04D2_01B3:
	case "Cador" attend labelFunc04D2_01E8:
	var0005 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0005) goto labelFunc04D2_01DD;
	message("「太可惜他死了。我聽過許多人稱讚他在礦區作為領導者的能力。」");
	say();
	UI_add_answer("死去的");
	goto labelFunc04D2_01E8;
labelFunc04D2_01DD:
	message("「Cador 是這裡 Vesper 的 Britannia 礦業公司分部的負責人。」");
	say();
	UI_remove_answer("Cador");
labelFunc04D2_01E8:
	case "死去的" attend labelFunc04D2_01FB:
	message("「他在 Yongi 的酒館裡的一場殘忍屠殺中被殺。沒有人真正知道發生了什麼事，但我想許多喝酒的人都是這樣迎來死亡的。」她聳了聳肩。");
	say();
	UI_remove_answer("死去的");
labelFunc04D2_01FB:
	case "Yvella" attend labelFunc04D2_020E:
	message("「她是 Cador 的妻子。」");
	say();
	UI_remove_answer("Yvella");
labelFunc04D2_020E:
	case "告辭" attend labelFunc04D2_0219:
	goto labelFunc04D2_021C;
labelFunc04D2_0219:
	goto labelFunc04D2_0048;
labelFunc04D2_021C:
	endconv;
	message("她對你點點頭，然後回到她的事情上。*");
	say();
labelFunc04D2_0221:
	if (!(event == 0x0000)) goto labelFunc04D2_022A;
	abort;
labelFunc04D2_022A:
	return;
}


