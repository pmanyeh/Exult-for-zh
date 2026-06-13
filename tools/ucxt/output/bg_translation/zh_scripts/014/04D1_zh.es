#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();

void Func04D1 object#(0x4D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D1_0224;
	UI_show_npc_face(0xFF2F, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0088]) goto labelFunc04D1_0043;
	UI_add_answer("Elizabeth 與 Abraham");
labelFunc04D1_0043:
	if (!(!gflags[0x028E])) goto labelFunc04D1_0055;
	message("你看到一個眉頭緊鎖的中年男子，彷彿他一直在擔憂。");
	say();
	gflags[0x028E] = true;
	goto labelFunc04D1_005F;
labelFunc04D1_0055:
	message("「我能怎麼幫助你，");
	message(var0001);
	message("？」");
	say();
labelFunc04D1_005F:
	converse attend labelFunc04D1_0219;
	case "姓名" attend labelFunc04D1_0075:
	message("「請叫我 Auston。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D1_0075:
	case "職業" attend labelFunc04D1_0088:
	message("他嘆了口氣才回答。「我是 Vesper 的鎮長。」");
	say();
	UI_add_answer("Vesper");
labelFunc04D1_0088:
	case "Vesper" attend labelFunc04D1_00AE:
	message("「過去這裡是個宜人的地方。但現在，");
	message(var0001);
	message("，我們的人民和那些石像鬼之間的動亂造成了許多問題。」");
	say();
	UI_add_answer(["問題", "人民"]);
	UI_remove_answer("Vesper");
labelFunc04D1_00AE:
	case "問題" attend labelFunc04D1_00E4:
	message("「我擔心石像鬼可能會變得不安並攻擊我們。 Blorn 並沒有幫上忙。」他指著自己的胸口。「我負責維持這裡的秩序。如果沒有秩序，那就是我的責任。我已經問過 Eldroth 如果發生暴動該怎麼辦，我正在嘗試制定相應的計劃。」");
	say();
	UI_add_answer("石像鬼");
	if (!(!var0003)) goto labelFunc04D1_00CF;
	UI_add_answer("Eldroth");
labelFunc04D1_00CF:
	if (!(!var0002)) goto labelFunc04D1_00DD;
	UI_add_answer("Blorn");
labelFunc04D1_00DD:
	UI_remove_answer("問題");
labelFunc04D1_00E4:
	case "石像鬼" attend labelFunc04D1_00FD:
	message("「我和你一樣不信任他們，");
	message(var0000);
	message("，但在官方層面上，他們也是公民。恐怕有一天他們會試圖以武力奪取城鎮的控制權。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc04D1_00FD:
	case "Liana" attend labelFunc04D1_0110:
	message("「她是我的書記員。她非常有效率。沒有她，我無法治理 Vesper 。」");
	say();
	UI_remove_answer("Liana");
labelFunc04D1_0110:
	case "人民" attend labelFunc04D1_017F:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0004) goto labelFunc04D1_013C;
	UI_add_answer("羞恥");
	var0005 = " -- 關於他的遭遇，真是令人遺憾。 -- ";
	goto labelFunc04D1_0142;
labelFunc04D1_013C:
	var0005 = " ";
labelFunc04D1_0142:
	message("「我盡可能與盡多市民保持聯繫，但我並不是非常了解所有人。我認識 Cador");
	message(var0005);
	message("自從 Britannia 礦業公司地方分部開設以來，就一直負責該分部。他與 Yvella 結婚了。我相信他們是那個友誼會組織的成員。~~「當然，還有 Eldroth ，還有一位訓練師，以及 Yongi 。還有，」他皺著眉頭補充最後一個，「Blorn 。另外，你應該跟 Liana 談談。她認識一些我不認識的人。恐怕我對每個人的了解不如我應該有的那麼多。」");
	say();
	UI_add_answer(["訓練師", "Yongi", "Liana"]);
	if (!(!var0003)) goto labelFunc04D1_016A;
	UI_add_answer("Eldroth");
labelFunc04D1_016A:
	if (!(!var0002)) goto labelFunc04D1_0178;
	UI_add_answer("Blorn");
labelFunc04D1_0178:
	UI_remove_answer("人民");
labelFunc04D1_017F:
	case "羞恥" attend labelFunc04D1_0192:
	message("「我以為你會知道。」他撫摸著鬍鬚。~~「Cador 在鍍金蜥蜴 (Gilded Lizard) 的一場戰鬥中被殺。這是 Vesper 首次發生這種行為。相當奇怪。」");
	say();
	UI_remove_answer("羞恥");
labelFunc04D1_0192:
	case "Eldroth" attend labelFunc04D1_01A9:
	message("「Eldroth 擔任我們的顧問。他一直在為我們鎮上的人們提供建議……嗯，比我能記得的時間還長。他擁有一家物資商店。」");
	say();
	var0003 = true;
	UI_remove_answer("Eldroth");
labelFunc04D1_01A9:
	case "訓練師" attend labelFunc04D1_01BC:
	message("「Zaksam 是我們的訓練師。他可以教你如何更好地保護自己。如果石像鬼惹事，我很慶幸他會保護我們這邊。」");
	say();
	UI_remove_answer("訓練師");
labelFunc04D1_01BC:
	case "Yongi" attend labelFunc04D1_01CF:
	message("「他在酒館供應飲料。許多人稱他為沙漠這一側最好的酒保。來自全 Britannia 的人都來找他談話，」他自豪地說。");
	say();
	UI_remove_answer("Yongi");
labelFunc04D1_01CF:
	case "Blorn" attend labelFunc04D1_01E6:
	message("「我不確定該怎麼看他。我不知道他以什麼為生，但我知道石像鬼比恨我們其他人更恨他。我很害怕會發生什麼事，因為很明顯他也對他們抱有同樣的感覺。」");
	say();
	var0002 = true;
	UI_remove_answer("Blorn");
labelFunc04D1_01E6:
	case "Elizabeth 與 Abraham" attend labelFunc04D1_020B:
	if (!(!gflags[0x01EF])) goto labelFunc04D1_0200;
	message("「他們是友誼會成員。他們剛剛來到這裡是為了看看在 Vesper 設立分部的事。我想我們會允許的。我相信這對夫婦已經前往 Moonglow 了。他們說他們正在前往那裡為當地的分部負責人進行培訓課程。但我知道他們在出城的路上會停在 Britannia 礦業公司的分部。我不知道為什麼。」");
	say();
	gflags[0x0284] = true;
	goto labelFunc04D1_0204;
labelFunc04D1_0200:
	message("「我已經很多很多天沒見到那對友誼會夫婦了。我不知道他們現在會在哪裡。」");
	say();
labelFunc04D1_0204:
	UI_remove_answer("Elizabeth 與 Abraham");
labelFunc04D1_020B:
	case "告辭" attend labelFunc04D1_0216:
	goto labelFunc04D1_0219;
labelFunc04D1_0216:
	goto labelFunc04D1_005F;
labelFunc04D1_0219:
	endconv;
	message("「再見，");
	message(var0001);
	message("。」*");
	say();
labelFunc04D1_0224:
	if (!(event == 0x0000)) goto labelFunc04D1_022D;
	abort;
labelFunc04D1_022D:
	return;
}


