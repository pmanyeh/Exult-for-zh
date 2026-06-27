#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0429 object#(0x429) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0429_023D;
	UI_show_npc_face(0xFFD7, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFD7));
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	if (!(var0002 == 0x0007)) goto labelFunc0429_0067;
	var0003 = Func08FC(0xFFD7, 0xFFE6);
	if (!var0003) goto labelFunc0429_0052;
	message("Candice 正專心聆聽友誼會的聚會。*");
	say();
	abort;
	goto labelFunc0429_0067;
labelFunc0429_0052:
	if (!gflags[0x00DA]) goto labelFunc0429_0062;
	message("「你有看到巴特林嗎？他沒有出席友誼會的聚會！」");
	say();
	goto labelFunc0429_0067;
	goto labelFunc0429_0067;
labelFunc0429_0062:
	message("「喔！我不能停下來跟你說話！我去參加友誼會聚會要遲到了！」*");
	say();
	abort;
labelFunc0429_0067:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00AA])) goto labelFunc0429_008D;
	message("這是一位看起來比實際年齡年輕許多的聰慧女子。");
	say();
	message("「哎呀！你真是名不虛傳！聖者本尊！你來到不列顛城的消息已經傳開了！」");
	say();
	gflags[0x00AA] = true;
	goto labelFunc0429_00B9;
labelFunc0429_008D:
	if (!(var0002 == 0x0000)) goto labelFunc0429_00B5;
	var0004 = Func08F7(0xFFD5);
	if (!var0004) goto labelFunc0429_00AE;
	message("Candice 看起來對某件事感到心虛。她向你輕輕揮了揮手，但什麼也沒說。她看著 Patterson，希望由他來發言。*");
	say();
	abort;
	goto labelFunc0429_00B2;
labelFunc0429_00AE:
	message("「是，聖者？」 Candice 說。");
	say();
labelFunc0429_00B2:
	goto labelFunc0429_00B9;
labelFunc0429_00B5:
	message("「是，聖者？」 Candice 說。");
	say();
labelFunc0429_00B9:
	converse attend labelFunc0429_0238;
	case "姓名" attend labelFunc0429_00CF:
	message("「我的名字是 Candice ，」她輕快地說。「我必須說我很榮幸能見到聖者！」她屈膝行禮。");
	say();
	UI_remove_answer("姓名");
labelFunc0429_00CF:
	case "職業" attend labelFunc0429_0104:
	message("「我是皇家博物館的館長。」");
	say();
	if (!(var0000 == 0x0007)) goto labelFunc0429_00EC;
	message("「歡迎隨時詢問關於展品的任何事。」");
	say();
	goto labelFunc0429_00F0;
labelFunc0429_00EC:
	message("「我希望在博物館開放時能在那裡見到你。」");
	say();
labelFunc0429_00F0:
	message("「我把其餘的時間都花在與友誼會合作上。」");
	say();
	UI_add_answer(["皇家博物館", "展品", "友誼會"]);
labelFunc0429_0104:
	case "皇家博物館" attend labelFunc0429_0124:
	message("「它在不列顛城已經很多很多年了。它收藏了歷史文物，以及藝術品。」");
	say();
	UI_remove_answer("皇家博物館");
	UI_add_answer(["文物", "藝術品"]);
labelFunc0429_0124:
	case "展品" attend labelFunc0429_014F:
	if (!(var0000 == 0x0007)) goto labelFunc0429_0144;
	message("「我們剛開放了一個你可能會感興趣的特別區域——『聖者文物』特展！」");
	say();
	UI_add_answer("聖者文物");
	goto labelFunc0429_0148;
labelFunc0429_0144:
	message("「在博物館開放時過來參觀吧！」");
	say();
labelFunc0429_0148:
	UI_remove_answer("展品");
labelFunc0429_014F:
	case "文物" attend labelFunc0429_0162:
	message("「那裡有早期不列顛尼亞的遺物，甚至還有黑暗三時期 (Three Ages of Darkness) 的遺物——那是不列顛尼亞還被稱為 Sosaria 時的事。」");
	say();
	UI_remove_answer("文物");
labelFunc0429_0162:
	case "聖者文物" attend labelFunc0429_01A3:
	message("「嗯，你肯定認得它們。它們應該是真品！像是銀角 (Silver Horn) 和八顆石頭。據我了解，這些石頭曾用於傳送，如果現今的法師腦子沒那麼有問題，他們可以在石頭上施放『喚回術（Recall）』法術傳送到不列顛尼亞各地的特定地點。我相信如果有人在上面施放『標記術（Mark）』法術，你就能重新指定傳送地點！但我想現在這些都不起作用了。」");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0429_019C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 對你耳語：「呃，聖者，你知道我不贊同偷竊。但是，呃，我確實相信這些石頭對我們會有用。也許我們該等博物館關門後再來，如果你懂我的意思？畢竟～從技術上來說，這些物品是屬於你的！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFD7, 0x0000);
labelFunc0429_019C:
	UI_remove_answer("聖者文物");
labelFunc0429_01A3:
	case "藝術品" attend labelFunc0429_01B6:
	message("「不列顛尼亞為那些將作品捐贈給博物館的藝術家感到自豪。你將會在全國各地看到由不列顛尼亞藝術家 Watson、Richard Fox、Randi Frank、Glen Johnson 和 Denis Loubet 所創作的作品。」");
	say();
	UI_remove_answer("藝術品");
labelFunc0429_01B6:
	case "友誼會" attend labelFunc0429_01E8:
	if (!(!var0001)) goto labelFunc0429_01CC;
	message("「我們每晚在大廳聚會。你一定要來參觀！");
	say();
	goto labelFunc0429_01D0;
labelFunc0429_01CC:
	message("「你現在一定已經完全了解了吧！我希望能在晚間的聚會上見到你！");
	say();
labelFunc0429_01D0:
	message("「友誼會給了我一個偉大的人生目標。我結交了新朋友，甚至找到了愛情！」她咯咯地笑。「糟糕！我洩漏了我的秘密！我不能談論這個。請忘掉我說的話，好嗎？」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer(["目標", "秘密"]);
labelFunc0429_01E8:
	case "目標" attend labelFunc0429_0202:
	message("「我想要在友誼會中獲得更高層次的認可。我想要聽到『聲音』。那是我唯一真正的目標。」");
	say();
	UI_remove_answer("目標");
	UI_add_answer("聲音");
labelFunc0429_0202:
	case "聲音" attend labelFunc0429_0219:
	message("「你不知道嗎？成為友誼會成員的時間越長，聽到『聲音』的機會就越大。據說，你將會聽到一個男人的聲音——也許在你的夢中，也許當你在專注於其他事情時——這是一個告訴你事情、給你建議的聲音。我真的不知道。我還沒聽過，所以我只是說說從其他比我幸運的人那裡聽來的事。」");
	say();
	UI_remove_answer("聲音");
	gflags[0x008C] = true;
labelFunc0429_0219:
	case "秘密" attend labelFunc0429_022A:
	message("「什麼秘密？我 -沒有- 秘密！那是口誤。我真的不能跟任何人談論它。哎呀，如果市長和我的事傳出去……我是說，嗯，-可不可以- 請你……呃，請你忘記我說過的話？」~~Candice 羞得滿臉通紅，轉過身去。*");
	say();
	gflags[0x0080] = true;
	abort;
labelFunc0429_022A:
	case "告辭" attend labelFunc0429_0235:
	goto labelFunc0429_0238;
labelFunc0429_0235:
	goto labelFunc0429_00B9;
labelFunc0429_0238:
	endconv;
	message("「祝你有美好的一天，聖者。」*");
	say();
labelFunc0429_023D:
	if (!(event == 0x0000)) goto labelFunc0429_024B;
	Func092E(0xFFD7);
labelFunc0429_024B:
	return;
}


