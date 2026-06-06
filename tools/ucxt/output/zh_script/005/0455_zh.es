#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0455 object#(0x455) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0455_01D9;
	UI_show_npc_face(0xFFAB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0110])) goto labelFunc0455_0041;
	message("你看到一位英俊的工匠，有著強烈、敏銳的目光。");
	say();
	gflags[0x0110] = true;
	goto labelFunc0455_0045;
labelFunc0455_0041:
	message("Gladstone 和你握手，你能感覺到他的手掌上還沾著一絲雕塑用的黏土。雖然他幾乎不認識你，但他把你當老朋友一樣對待。");
	say();
labelFunc0455_0045:
	converse attend labelFunc0455_01D4;
	case "姓名" attend labelFunc0455_0061:
	message("「我的名字是 Gladstone ，");
	message(var0000);
	message("。為你服務。」");
	say();
	UI_remove_answer("姓名");
labelFunc0455_0061:
	case "職業" attend labelFunc0455_0095:
	if (!gflags[0x011F]) goto labelFunc0455_0086;
	message("「我是一名吹玻璃工和雕塑家。我主要製作瓶子和碗。但在過去，我也用玻璃製作過各種雕像。」");
	say();
	UI_add_answer(["玻璃", "藝術家公會", "Minoc"]);
	goto labelFunc0455_0095;
labelFunc0455_0086:
	message("男人的眼睛打量了你一會兒。「你不知道發生了什麼事嗎？我們當地的鋸木工 William 在他的鋸木廠裡發現兩個吉普賽人被謀殺了。」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺案");
labelFunc0455_0095:
	case "Minoc" attend labelFunc0455_00BB:
	message("「 Minoc 這裡活躍的商業足以讓藝術家公會在財務上保持償付能力。但在最近幾個星期裡，我開始擔心我們可能撐不了多久。不像友誼會或是 Owen 的紀念碑，我們沒有太大的政治權力。現在發生的其他事件讓我們的麻煩顯得不那麼重要了。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["友誼會", "紀念碑", "權力", "事件"]);
labelFunc0455_00BB:
	case "權力" attend labelFunc0455_00CE:
	message("「藝術家公會被不列顛尼亞稅務委員會無情地徵稅。即使在我們情況最好的一年，要維持收支平衡也是一場掙扎。看來我們並沒有被認為重要到能獲得公平的機會。」");
	say();
	UI_remove_answer("權力");
labelFunc0455_00CE:
	case "事件" attend labelFunc0455_00E8:
	message("「你肯定聽說過 Frederico 和 Tania 的謀殺案了吧？！」");
	say();
	UI_remove_answer("事件");
	UI_add_answer("謀殺案");
labelFunc0455_00E8:
	case "藝術家公會" attend labelFunc0455_00FB:
	message("「藝術家公會是一群當地工匠的組織。我們在 Minoc 這裡販賣我們的商品。雖然我們是一個由平等成員組成的公會，但我暫時擔任公會的會長。」");
	say();
	UI_remove_answer("藝術家公會");
labelFunc0455_00FB:
	case "謀殺案" attend labelFunc0455_0115:
	message("「一想到在我們美麗的城鎮裡竟會如此輕易地發生這種卑劣的行為，我就不寒而慄。你正在調查這件事嗎？我祝你在追查犯人時一切順利。我幾乎不認識 Frederico 或 Tania ，但我確實見過他們的兒子 Sasha 一次。」");
	say();
	UI_add_answer("Sasha");
	UI_remove_answer("謀殺案");
labelFunc0455_0115:
	case "Sasha" attend labelFunc0455_0128:
	message("「他與 Seara 交了朋友，並在我們這裡住過一晚。他似乎是個不錯的年輕人，但誤入歧途了。」");
	say();
	UI_remove_answer("Sasha");
labelFunc0455_0128:
	case "友誼會" attend labelFunc0455_015D:
	message("「我們和那些人相處得不是很好。我相信自從藝術家公會的所有成員都拒絕 Elynor 的入會邀請後，我們就已經被非正式地標記為友誼會的敵人了。他們不喜歡我們，因為他們認為我們無意於團結。」");
	say();
	if (!var0001) goto labelFunc0455_0156;
	message("「你把我們當作你的敵人嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0455_0152;
	message("「那就從我眼前消失！我不想跟你說話！」");
	say();
	abort;
	goto labelFunc0455_0156;
labelFunc0455_0152:
	message("「那麼我暫且相信你。但要知道，為了保護我們的公會，我必須做我該做的事。」");
	say();
labelFunc0455_0156:
	UI_remove_answer("友誼會");
labelFunc0455_015D:
	case "紀念碑" attend labelFunc0455_0186:
	if (!(!gflags[0x00F7])) goto labelFunc0455_017A;
	message("「造船匠 Owen 正委託人在城鎮中心建造一座他自己的雕像。藝術家公會當然決定與這種愚蠢的行為毫無牽扯。但光是這座雕像的消息傳開，現在訂單就從不列顛尼亞各地湧來。商人們希望由『著名的』 Minoc 造船大師 Owen 來建造船隻。」");
	say();
	UI_add_answer("雕像");
	goto labelFunc0455_017F;
labelFunc0455_017A:
	message("「哦，對了，這提醒了我！恐怕我不能聊太久。畢竟，城鎮中心有一塊空蕩蕩的石板，現在上面什麼也沒有。鎮長委託我們創作一些東西來填補那個空白。除了這會是非常棒的作品之外，我不想多說什麼。還需要相當長的一段時間才能準備好，但一旦完成，我希望你那時候能回到 Minoc 來看看它。也許在更好的時機。那麼，再會了。」*");
	say();
	abort;
labelFunc0455_017F:
	UI_remove_answer("紀念碑");
labelFunc0455_0186:
	case "雕像" attend labelFunc0455_01A0:
	message("「我擔心我們嚴重地失算了，以為如果我們抵制這座雕像，它就不會被建造。似乎所有的談論已經把 Owen 變成了這個地區某種奇怪的傳奇人物，而那該死的雕像甚至還沒立起來呢！但我擔心，這還不是情況最糟糕的部分。」");
	say();
	UI_remove_answer("雕像");
	UI_add_answer("最糟糕");
labelFunc0455_01A0:
	case "最糟糕" attend labelFunc0455_01B3:
	message("「一旦雕像建成，造船的訂單肯定會增加得更多！用不了多久，所有當地的商業都會受到影響。 Owen 將會購買更多當地資源，這會導致價格上漲，特別是在鋸木廠，而那肯定會迫使藝術家公會破產。」");
	say();
	UI_remove_answer("最糟糕");
labelFunc0455_01B3:
	case "玻璃" attend labelFunc0455_01C6:
	message("「我很遺憾目前沒有任何作品可供出售。就像我們其他的藝術家一樣，我積壓了許多訂單，在可預見的未來裡我都會很忙碌。但在公會大廳裡展出著幾件我最引以為傲的作品。如果你有興趣，請去看看。」");
	say();
	UI_remove_answer("玻璃");
labelFunc0455_01C6:
	case "告辭" attend labelFunc0455_01D1:
	goto labelFunc0455_01D4;
labelFunc0455_01D1:
	goto labelFunc0455_0045;
labelFunc0455_01D4:
	endconv;
	message("「旅途順利，我的朋友。」*");
	say();
labelFunc0455_01D9:
	if (!(event == 0x0000)) goto labelFunc0455_01E7;
	Func092E(0xFFAB);
labelFunc0455_01E7:
	return;
}


