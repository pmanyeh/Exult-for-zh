#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);

void Func046B object#(0x46B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc046B_0009;
	abort;
labelFunc046B_0009:
	UI_show_npc_face(0xFF95, 0x0000);
	var0000 = Func0908();
	var0001 = "聖者";
	var0002 = Func0909();
	if (!(!gflags[0x02CF])) goto labelFunc046B_0037;
	message("你看到一個巨大的獨眼巨人。牠看著你，惱怒地眨著眼睛。");
	say();
	gflags[0x02CF] = true;
	goto labelFunc046B_003B;
labelFunc046B_0037:
	message("「你要做什麼？」 Iskander 說。");
	say();
labelFunc046B_003B:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02DB]) goto labelFunc046B_0058;
	UI_add_answer("Eiko 和 Amanda");
labelFunc046B_0058:
	converse attend labelFunc046B_02B3;
	case "姓名" attend labelFunc046B_006E:
	message("「我是鐵心氏族 (Ironheart) 的人，是 Valador 的第十一個兒子。他們叫我 Iskander 。」");
	say();
	UI_remove_answer("姓名");
labelFunc046B_006E:
	case "職業" attend labelFunc046B_0087:
	message("「我的獨眼巨人族人說我是個英雄。你們許多人類說我是個怪物。毫無疑問，真相介於兩者之間。」");
	say();
	UI_add_answer(["英雄", "怪物"]);
labelFunc046B_0087:
	case "英雄" attend labelFunc046B_00AA:
	message("「一百八十九年前，當那七位凝視者 (Gazer) 王子用魔法偷走我們部落首領的眼睛時，我殺了他們，但這些事現在已經是古老的歷史，不再重要了。」");
	say();
	UI_remove_answer("英雄");
	UI_add_answer(["部落", "眼睛", "古老的歷史"]);
labelFunc046B_00AA:
	case "怪物" attend labelFunc046B_00C4:
	message("「在無數次的情況下，我讓那些誤以為我們種族只配被掠奪的人類入侵者落得悲慘的下場。但我跟你無冤無仇。」他停下來仔細端詳你。「目前是這樣。」");
	say();
	UI_remove_answer("怪物");
	UI_add_answer("你");
labelFunc046B_00C4:
	case "你" attend labelFunc046B_0110:
	message("「你知道我的名字，但我還不知道你的名字。我喜歡知道我在跟誰說話。你的名字是什麼？」");
	say();
	var0003 = Func090B([var0001, var0000]);
	if (!(var0003 == var0001)) goto labelFunc046B_00F1;
	message("「我聽過你的事，聖者。我知道你以前曾與我們同類發生過衝突。但我也聽過關於你的英雄事蹟和精神探索的故事，我相信你是一個公正高尚的人。你可以稱我為朋友。」");
	say();
	gflags[0x02D6] = true;
labelFunc046B_00F1:
	if (!(var0003 == var0000)) goto labelFunc046B_0109;
	message("「很高興認識你， ");
	message(var0000);
	message("。」");
	say();
	gflags[0x02D5] = true;
labelFunc046B_0109:
	UI_remove_answer("你");
labelFunc046B_0110:
	case "部落" attend labelFunc046B_012A:
	message("「我部落的人是安靜的人民。他們在岩石土壤上耕作，同時也是非常好的工具製造者。我被派去為他們尋找新的家園。」");
	say();
	UI_remove_answer("部落");
	UI_add_answer("家園");
labelFunc046B_012A:
	case "眼睛" attend labelFunc046B_013D:
	message("「獨眼巨人的眼睛對不列顛尼亞一些不那麼文明的種族來說，被視為一種珍饈。曾經有兩次邪惡的生物試圖奪取我的眼睛，而我也兩次吃了他們的心臟。」");
	say();
	UI_remove_answer("眼睛");
labelFunc046B_013D:
	case "古老的歷史" attend labelFunc046B_0157:
	message("「然後他們叫我『神奇男孩 (Wonder Boy) 』。近一百年來，那都是我的綽號。當他們不再那麼叫我時，我非常感激！」");
	say();
	UI_remove_answer("古老的歷史");
	UI_add_answer("神奇男孩");
labelFunc046B_0157:
	case "神奇男孩" attend labelFunc046B_016A:
	message("Iskander 瞇著眼睛看你。「別再提那個了！」");
	say();
	UI_remove_answer("神奇男孩");
labelFunc046B_016A:
	case "家園" attend labelFunc046B_018A:
	message("「我的村莊在很多天的路程之外。那裡的人們渴望一個能與周遭環境和平共處的地方。我還沒找到這樣的地方，但我會到處尋找，直到我找到為止。」");
	say();
	UI_remove_answer("家園");
	UI_add_answer(["和平", "到處"]);
labelFunc046B_018A:
	case "和平" attend labelFunc046B_019D:
	message("「雖然我兩百零六歲了，這對我們種族來說並不算老，但我已經有一顆老人的心。英雄的冒險對我已經沒有吸引力了。我渴望和我的族人安定下來，在田裡耕種，或在我的工坊裡製作東西度日。」");
	say();
	UI_remove_answer("和平");
labelFunc046B_019D:
	case "到處" attend labelFunc046B_01BD:
	message("「我的尋找把我帶到了這個可怕的地方。我錯誤地以為既然魔法失效了，這裡會相對安全。但在這裡，我被一個可怕的謎團困惑住了。」");
	say();
	UI_remove_answer("到處");
	UI_add_answer(["魔法", "謎團"]);
labelFunc046B_01BD:
	case "謎團" attend labelFunc046B_01DD:
	message("「站在這個地方其中一個房間的門口，我看到了一個巨大的四面體影像。當我試圖靠近它時，一陣失憶的感覺襲來。我又回到了門口。我什麼都不記得了。」");
	say();
	UI_remove_answer("謎團");
	UI_add_answer(["四面體", "失憶"]);
labelFunc046B_01DD:
	case "四面體" attend labelFunc046B_01F0:
	message("「我相信那是你們人類用來描述有四個面的多面體的詞。」");
	say();
	UI_remove_answer("四面體");
labelFunc046B_01F0:
	case "失憶" attend labelFunc046B_020A:
	message("「每次我試圖靠近四面體時，這種失憶的感覺都會襲來。我不知道這是什麼邪惡的魔法。」");
	say();
	UI_remove_answer("失憶");
	UI_add_answer("邪惡的魔法");
labelFunc046B_020A:
	case "邪惡的魔法" attend labelFunc046B_023A:
	if (!gflags[0x0003]) goto labelFunc046B_021F;
	message("「既然你已經摧毀了神秘的四面體，我將完成我對這個地方的探索。我有一種感覺，我尋找的家園非常遙遠，但誰知道下一個能指引我找到它的線索會在哪裡呢。」");
	say();
	goto labelFunc046B_0233;
labelFunc046B_021F:
	if (!gflags[0x02D6]) goto labelFunc046B_0229;
	message("「或許你能解開這個謎團。我到目前為止都無法解開。但我會留在這裡，直到它的秘密被揭開。」");
	say();
labelFunc046B_0229:
	if (!gflags[0x02D5]) goto labelFunc046B_0233;
	message("「我警告你這個地方不安全。它潛藏著未知的危險。或許你離開這裡會比較好。」");
	say();
labelFunc046B_0233:
	UI_remove_answer("邪惡的魔法");
labelFunc046B_023A:
	case "魔法" attend labelFunc046B_025B:
	if (!(!gflags[0x0003])) goto labelFunc046B_0250;
	message("「你肯定知道魔法不再像以前那樣有效了。有人說魔法的時代已經結束了。如果是這樣，我擔心這個世界上可能沒有我族人的容身之處了。」");
	say();
	goto labelFunc046B_0254;
labelFunc046B_0250:
	message("「當然，既然你已經摧毀了四面體，所有的魔法都已經恢復了。我祝賀你的英雄事蹟！」");
	say();
labelFunc046B_0254:
	UI_remove_answer("魔法");
labelFunc046B_025B:
	case "Eiko 和 Amanda" attend labelFunc046B_027B:
	message("「是的，我以前聽過這些名字。那是兩名一直追著我尋仇的戰士的名字。她們說我殺了她們的父親，我必須向你承認這是真的。我確實殺了她們的父親。」");
	say();
	UI_remove_answer("Eiko 和 Amanda");
	UI_add_answer(["復仇", "殺了她們的父親"]);
labelFunc046B_027B:
	case "復仇" attend labelFunc046B_028E:
	message("「我知道 Eiko 和 Amanda 一直在追捕我尋求復仇。我說讓她們來吧。我不會站在原地等她們，也不會逃避她們。當她們找到我時，歡迎她們試著從我這裡討回她們的正義。如果她們贏了，那也是命中注定。如果她們輸了，我也沒有遺憾。」");
	say();
	UI_remove_answer("復仇");
labelFunc046B_028E:
	case "殺了她們的父親" attend labelFunc046B_02A5:
	message("「她們父親的名字是 Kalideth 。他患有法師的瘋狂症。他對我的攻擊是毫無理由的。出於某種原因，他把我族人歸咎於魔法失效的原因。他自己的魔法依然相當強大，我勉強在戰鬥中活了下來。我出於自衛殺了 Kalideth ，但我並不想殺他。我希望這個世界上還留存一些魔法，我和其他人一樣哀悼他的離世。」");
	say();
	var0004 = true;
	UI_remove_answer("殺了她們的父親");
labelFunc046B_02A5:
	case "告辭" attend labelFunc046B_02B0:
	goto labelFunc046B_02B3;
labelFunc046B_02B0:
	goto labelFunc046B_0058;
labelFunc046B_02B3:
	endconv;
	if (!gflags[0x02D6]) goto labelFunc046B_02BF;
	message("「再見，聖者。」*");
	say();
	abort;
labelFunc046B_02BF:
	if (!gflags[0x02D5]) goto labelFunc046B_02D2;
	message("「再見， ");
	message(var0000);
	message("。」*");
	say();
	goto labelFunc046B_02D6;
labelFunc046B_02D2:
	message("「再見。」*");
	say();
labelFunc046B_02D6:
	return;
}


