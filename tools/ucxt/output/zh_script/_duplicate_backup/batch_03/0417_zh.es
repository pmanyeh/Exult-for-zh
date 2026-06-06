#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func08B4 0x8B4 (var var0000, var var0001, var var0002);
extern void Func08B5 0x8B5 ();
extern void Func092E 0x92E (var var0000);
extern var Func092D 0x92D (var var0000);

void Func0417 object#(0x417) ()
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
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	var0000 = false;
	if (!(event == 0x0001)) goto labelFunc0417_0735;
labelFunc0417_000C:
	var0001 = Func0908();
	if (!gflags[0x001E]) goto labelFunc0417_0027;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「笨蛋！！你到底中什麼邪去施放那個該死的末日咒語 (Armageddon Spell) ？我就知道它很危險！你也知道它很危險！！現在看看我們！我們是整個星球上唯二剩下的人了！ Britannia 毀了！你算是哪門子的聖者！？！現在，沒有月之門可以運作，我們兩人都被迫要在這片荒蕪的廢墟中度過永恆！~~「當然，這也可以看作是解決我們所有問題的聰明辦法。畢竟，現在連這個所謂的守護者 (Guardian) 也不會想要 Britannia 了！」*");
	say();
	abort;
labelFunc0417_0027:
	if (!gflags[0x030C]) goto labelFunc0417_004C;
	if (!(!gflags[0x030D])) goto labelFunc0417_0049;
	var0000 = true;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我感覺到了 Exodus 的殘骸從這個領域消逝。這卸下了我肩上沉重的負擔。所以聖者，我不能讓這份功績得不到回報。請跪下，我的朋友。」當你遵從他的命令時， Lord British 伸出了他的雙手。");
	say();
	goto labelFunc0417_0743;
labelFunc0417_0049:
	goto labelFunc0417_005A;
labelFunc0417_004C:
	if (!(!gflags[0x02FE])) goto labelFunc0417_005A;
	UI_add_answer("隆隆聲");
labelFunc0417_005A:
	var0002 = UI_get_party_list();
	var0003 = Func08F7(0xFFFF);
	var0004 = Func08F7(0xFFFC);
	var0005 = Func08F7(0xFFFD);
	UI_show_npc_face(0xFFE9, 0x0000);
	var0006 = false;
	var0007 = false;
	var0008 = false;
	UI_add_answer(["姓名", "職業", "告辭", "友誼會"]);
	if (!(!gflags[0x00DD])) goto labelFunc0417_00B3;
	UI_add_answer("月之寶珠 (Orb of the Moons)");
labelFunc0417_00B3:
	if (!(gflags[0x00CD] && (!gflags[0x00CC]))) goto labelFunc0417_00C5;
	UI_add_answer("Weston");
labelFunc0417_00C5:
	if (!gflags[0x00D3]) goto labelFunc0417_00D2;
	UI_add_answer("治療");
labelFunc0417_00D2:
	if (!gflags[0x0127]) goto labelFunc0417_00DF;
	UI_add_answer("守護者 (The Guardian)");
labelFunc0417_00DF:
	if (!gflags[0x00D4]) goto labelFunc0417_00EC;
	UI_remove_answer("守護者 (The Guardian)");
labelFunc0417_00EC:
	if (!(!gflags[0x0098])) goto labelFunc0417_010B;
	message("你看到了你的老朋友 Lord British ，看起來比你上次見到他時老了一些。他看到你時雙眼閃閃發光。~~「歡迎，我的朋友，」他說著，擁抱了你。「請告訴我，是什麼風把你吹來 Britannia 的！或者，更重要的是，是什麼『帶』你來的？」");
	say();
	gflags[0x0098] = true;
	UI_add_answer(["紅色月之門", "月之寶珠 (Orb of the Moons)"]);
	goto labelFunc0417_0115;
labelFunc0417_010B:
	message("「是的，");
	message(var0001);
	message("？」 Lord British 問道。");
	say();
labelFunc0417_0115:
	converse attend labelFunc0417_072A;
	case "姓名" attend labelFunc0417_012B:
	message("Lord British 笑了。「怎麼，你在開玩笑嗎，聖者？你認不出你的老朋友了嗎？」");
	say();
	UI_remove_answer("姓名");
labelFunc0417_012B:
	case "職業" attend labelFunc0417_0148:
	message("Lord British 翻了個白眼。「我們一定要走這種形式嗎？」他笑著搖頭。");
	say();
	message("「很好。如你所知，我是 Britannia 的統治者，而且已經當了一段時間了。雖然我來自你的故鄉，但我選擇在這裡生活。」");
	say();
	UI_add_answer(["Britannia", "故鄉"]);
labelFunc0417_0148:
	case "故鄉" attend labelFunc0417_0162:
	message("「我知道自從我造訪我們的地球以來已經過了很多年，但你肯定還記得我們兩人來自同一個時間和地點吧？而且，作為同源的兄弟，你也應該記得，在你需要的任何時候都可以向我尋求援助。」");
	say();
	UI_remove_answer("故鄉");
	UI_add_answer("援助");
labelFunc0417_0162:
	case "援助" attend labelFunc0417_0194:
	message("「別忘了，聖者，我有能力治療你。這似乎是我少數還能運作的魔法。我也許能提供你一些裝備和一本法術書。」");
	say();
	UI_add_answer(["裝備", "法術書"]);
	if (!(!gflags[0x00D3])) goto labelFunc0417_0189;
	UI_add_answer("治療");
labelFunc0417_0189:
	gflags[0x00D3] = true;
	UI_remove_answer("援助");
labelFunc0417_0194:
	case "Britannia" attend labelFunc0417_01C5:
	message("「這片土地的狀態再繁榮不過了。你意識到你已經離開了 200 個 Britannia 年了嗎？」 Lord British 對你搖了搖手指。~~「我敢肯定你的朋友們都很遺憾你的缺席。真遺憾你離開了這麼久！但是……我非常高興見到你。 Britannia 繁榮又豐饒。看看你周圍。探索這座新翻修的城堡。在這片土地上旅行。和平在各個角落都很顯著。~~「是的， Britannia 從來沒有這麼好過。嗯，幾乎從未。」");
	say();
	UI_remove_answer("Britannia");
	UI_add_answer(["朋友們", "城堡", "幾乎從未"]);
	if (!(!gflags[0x0066])) goto labelFunc0417_01C5;
	UI_add_answer("魔法");
labelFunc0417_01C5:
	case "幾乎從未" attend labelFunc0417_01D8:
	message("「嗯，『事情』確實很好。我關心的是『人』。~~「 Britannia 出了點問題，但我不知道是什麼。有某種東西籠罩在 Britannia 人民的頭上。他們很不快樂。人們可以從他們的眼中看出來。既然和平了這麼久，就沒有什麼能將人們團結在一起了。~~「也許你能查明發生了什麼事。我懇求你走到人民中去。觀察他們的日常工作。跟他們說話。和他們一起工作。與他們共進餐點。也許他們需要像聖者這樣的人來關心他們的生活。」");
	say();
	UI_remove_answer("幾乎從未");
labelFunc0417_01D8:
	case "紅色月之門" attend labelFunc0417_0207:
	message("你講述了紅色月之門如何出現在你家後面，並神祕地將你帶到 Trinsic 的故事。~~當你說話時， Lord British 皺起了眉頭。最後他說，「我沒有派紅色月之門去接你。一定是有某人或某物啟動了那個月之門。這確實很奇怪，因為我們最近在月之門方面遇到了一些麻煩。事實上，我們在整體魔法上都遇到了麻煩！」");
	say();
	UI_remove_answer("紅色月之門");
	if (!(!var0007)) goto labelFunc0417_01F9;
	UI_add_answer("月之門");
labelFunc0417_01F9:
	if (!(!var0008)) goto labelFunc0417_0207;
	UI_add_answer("魔法");
labelFunc0417_0207:
	case "月之寶珠 (Orb of the Moons)" attend labelFunc0417_0278:
	message("\"Mine has not worked since the troubles with magic began. In fact, none of the Moongates have been working reliably for quite a while!");
	say();
	message("「你帶了你的月之寶珠來嗎？」");
	say();
	if (!Func090A()) goto labelFunc0417_0224;
	message("「真的嗎？在哪裡？你身上並沒有帶啊！ ");
	say();
	goto labelFunc0417_0228;
labelFunc0417_0224:
	message("「我明白了。 ");
	say();
labelFunc0417_0228:
	message("「嗯。你可能會被困在 Britannia 。來。何不試試我的？我借給你。也許它對你有用。不過要小心。月之門已經變得很危險了。」");
	say();
	var0009 = UI_add_party_items(0x0001, 0x0311, 0xFE99, 0xFE99, false);
	if (!var0009) goto labelFunc0417_0251;
	message("Lord British 把他的月之寶珠交給你。");
	say();
	gflags[0x00DD] = true;
	goto labelFunc0417_0255;
labelFunc0417_0251:
	message("「你的手太滿了，拿不下寶珠！」");
	say();
labelFunc0417_0255:
	UI_remove_answer("月之寶珠 (Orb of the Moons)");
	if (!(!var0007)) goto labelFunc0417_026A;
	UI_add_answer("月之門");
labelFunc0417_026A:
	if (!(!var0008)) goto labelFunc0417_0278;
	UI_add_answer("魔法");
labelFunc0417_0278:
	case "城堡" attend labelFunc0417_0292:
	message("「是的，自從你上次造訪後，這裡已經重新裝潢過了。建築師和工人們做得很出色。」~~這位統治者面帶苦澀地向你傾身。~~「整個建築群裡唯一的污點就是那個該死的育嬰室！」");
	say();
	UI_remove_answer("城堡");
	UI_add_answer("育嬰室");
labelFunc0417_0292:
	case "育嬰室" attend labelFunc0417_02A5:
	message("「我絕不會靠近那個地方！國王和髒尿布是不搭的。在我的幾位幕僚開始有家庭後，大議會說服我設立了育嬰室。雖然這可能是必需的，但我會假裝它不存在！」");
	say();
	UI_remove_answer("育嬰室");
labelFunc0417_02A5:
	case "Trinsic" attend labelFunc0417_02C9:
	message("「我已經很多年沒去過那裡了。那裡發生了什麼事嗎？」");
	say();
	UI_remove_answer("Trinsic");
	UI_push_answers();
	UI_add_answer(["謀殺案", "沒什麼"]);
labelFunc0417_02C9:
	case "沒什麼" attend labelFunc0417_02E0:
	message("「的確。看來 Trinsic 自從我上次看到它之後並沒有太大的變化。」他的眼睛閃爍著。");
	say();
	UI_pop_answers();
	UI_remove_answer("沒什麼");
labelFunc0417_02E0:
	case "謀殺案" attend labelFunc0417_031F:
	message("「謀殺？在 Trinsic ？」統治者看起來很擔憂。~~「我什麼都沒聽說。你在調查這件事嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0417_02FF;
	message("「很好。很高興你關心我的人民。」");
	say();
	goto labelFunc0417_0303;
labelFunc0417_02FF:
	message("「啊，但或許你應該這麼做！」");
	say();
labelFunc0417_0303:
	message("國王停頓了一會兒。「既然你提到了，過去幾個月我確實收到過其他類似謀殺案的報告。事實上，三四年前在 Britain 這裡就發生過一起。屍體以儀式性的方式被肢解了。顯然有一個瘋狂的殺手在逃。但我毫不懷疑，像你這樣的人，聖者，一定能找到他！」");
	say();
	UI_remove_answer("謀殺案");
	UI_pop_answers();
	UI_add_answer(["儀式性", "殺手"]);
labelFunc0417_031F:
	case "儀式性" attend labelFunc0417_0336:
	message("「我記不太清細節了。你應該問問鎮長 Patterson 。他可能記得更多。」");
	say();
	UI_remove_answer("儀式性");
	gflags[0x00D1] = true;
labelFunc0417_0336:
	case "殺手" attend labelFunc0417_0363:
	message("「當然，這只是我的假設。但這是我們僅有的線索。除非你已經發現了一些有用的資訊？」");
	say();
	UI_remove_answer("殺手");
	if (!gflags[0x0043]) goto labelFunc0417_0356;
	UI_add_answer("Hook");
labelFunc0417_0356:
	if (!gflags[0x0040]) goto labelFunc0417_0363;
	UI_add_answer("皇冠寶石號 (Crown Jewel)");
labelFunc0417_0363:
	case "友誼會" attend labelFunc0417_0383:
	message("「他們是一群極其有用且多產的公民。你絕對應該去拜訪設在 Britain 的友誼會總部，並與 Batlin 談談。友誼會在整個 Britannia 做了許多善事，包括賑濟窮人、教育和幫助有需要的人，以及促進普遍的善意與和平。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer(["Batlin", "總部"]);
labelFunc0417_0383:
	case "總部" attend labelFunc0417_0396:
	message("「是的，離城堡不遠，在西南方。就在劇院的南邊。」");
	say();
	UI_remove_answer("總部");
labelFunc0417_0396:
	case "Batlin" attend labelFunc0417_03A9:
	message("「他是一位大約二十年前創立友誼會的德魯伊。他非常聰明，而且是個溫暖、溫和的人。」");
	say();
	UI_remove_answer("Batlin");
labelFunc0417_03A9:
	case "Hook" attend labelFunc0417_03BC:
	message("「一個裝著鐵鉤的人？」國王摸了摸下巴。~~「不，我不記得見過這樣的人。」");
	say();
	UI_remove_answer("Hook");
labelFunc0417_03BC:
	case "皇冠寶石號 (Crown Jewel)" attend labelFunc0417_03CF:
	message("「恐怕我不可能知道每一艘經過我們港口的船隻。如果你還沒問過，你應該去問問造船匠 Clint 。」");
	say();
	UI_remove_answer("皇冠寶石號 (Crown Jewel)");
labelFunc0417_03CF:
	case "朋友們" attend labelFunc0417_03F2:
	message("「你當然是指 Iolo 、 Shamino 和 Dupre 。」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0417_03F2:
	case "Iolo" attend labelFunc0417_0435:
	message("「這些年來我很少見到我們的朋友。我了解他大部分時間都待在 Trinsic 。」");
	say();
	if (!var0003) goto labelFunc0417_0427;
	message("「哈囉， Iolo ！你好嗎？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我很好，我的君主！很高興見到你！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_0427:
	UI_remove_answer("Iolo");
	UI_add_answer("Trinsic");
labelFunc0417_0435:
	case "Shamino" attend labelFunc0417_049B:
	message("「那個無賴不常來，雖然我聽說他最近大部分時間都待在 Britain ！」");
	say();
	if (!var0005) goto labelFunc0417_0494;
	message("「你對自己有什麼要說的嗎， Shamino ？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我很抱歉，大人，」 Shamino 說。*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我聽說的關於一個女人的事是怎麼回事？一個女演員？嗯？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino 臉紅了，不安地挪動著腳步。*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我就猜到是這樣！」統治者笑著說。");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_0494:
	UI_remove_answer("Shamino");
labelFunc0417_049B:
	case "Dupre" attend labelFunc0417_04FA:
	message("「自從我封他為騎士後就沒見過他了。很典型的作風——我幫了那傢伙一個忙，然後他不見了！我聽說他可能在 Jhelom 。」");
	say();
	if (!var0004) goto labelFunc0417_04EC;
	message("「你去了哪裡， Dupre 爵士？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「噢，到處跑，大人，」戰士回答。*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「在 Britannia 這裡，來自我們故鄉的朋友很少。你必須特地多來拜訪！特別是因為你是個騎士！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「如您所願，大人，」 Dupre 鞠躬說道。*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_04EC:
	UI_remove_answer("Dupre");
	UI_add_answer("Jhelom");
labelFunc0417_04FA:
	case "Jhelom" attend labelFunc0417_050D:
	message("「據說那裡是個相當暴力的地方。我已經很久沒有造訪的榮幸了。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc0417_050D:
	case "魔法" attend labelFunc0417_054E:
	message("「有些事情不對勁。魔法已經很長一段時間不靈光了。我甚至很難用魔法變出食物！這一定跟魔法以太有關。~~「有人說魔法正在消亡，因為月之門的問題和 Nystul 的情況。我開始懷疑他們可能是對的！」");
	say();
	message("Lord British 打量了你一會兒。");
	say();
	message("「也許魔法對你會更有效。你來 Britannia 沒多久。可能影響魔法的東西還沒在你身上留下印記。請試試看。有一本法術書和你其他的裝備存放在一起。」");
	say();
	gflags[0x0066] = true;
	UI_remove_answer("魔法");
	UI_add_answer(["Nystul", "法術書", "裝備"]);
	var0008 = true;
	if (!(!var0007)) goto labelFunc0417_054E;
	UI_add_answer("月之門");
labelFunc0417_054E:
	case "Nystul" attend labelFunc0417_057D:
	if (!(!gflags[0x0003])) goto labelFunc0417_0572;
	if (!(!gflags[0x0099])) goto labelFunc0417_056B;
	message("「呃……試著跟他說話吧。」");
	say();
	goto labelFunc0417_056F;
labelFunc0417_056B:
	message("國王壓低了聲音。~~「他表現得很古怪，不是嗎？他的大腦出了點問題。他似乎再也無法集中精神施展魔法了。」");
	say();
labelFunc0417_056F:
	goto labelFunc0417_0576;
labelFunc0417_0572:
	message("「他開始表現得正常多了。」");
	say();
labelFunc0417_0576:
	UI_remove_answer("Nystul");
labelFunc0417_057D:
	case "月之門" attend labelFunc0417_05A1:
	message("「月之門無法運作！我們不能像過去那樣使用它們了。它們不僅功能失調，事實上，它們還很危險！我信任的一位智者使用我自己的月之寶珠前往謙遜神殿 (Shrine of Humility) ，他的身體在進入大門時粉碎了！要是 Cove 的那個法師沒瘋就好了！」");
	say();
	UI_remove_answer("月之門");
	UI_add_answer(["瘋狂的法師", "Cove"]);
	var0007 = true;
labelFunc0417_05A1:
	case "瘋狂的法師" attend labelFunc0417_05C5:
	message("統治者向前傾身，小聲地說。~~「在 Cove 有一個瘋狂的法師，名叫 Rudyom 。你還記得他嗎？ Rudyom 一直在研究一種名為『黑岩 (blackrock) 』的魔法物質。在他發瘋之前，他聲稱這種礦石可以解決月之門的問題。我建議你應該去 Cove 找他。試著了解他用這種黑岩物質在做什麼。這可能是我們唯一的希望。」");
	say();
	gflags[0x0065] = true;
	Func0911(0x0014);
	UI_remove_answer("瘋狂的法師");
	UI_add_answer("Rudyom");
labelFunc0417_05C5:
	case "Rudyom" attend labelFunc0417_05E2:
	message("「他曾是一位傑出且受人尊敬的法師。但近年來他發生了一些事。他似乎完全老番顛了。」");
	say();
	if (!gflags[0x0099]) goto labelFunc0417_05DB;
	message("突然，有什麼觸動了 Lord British 的記憶。「我想知道發生在 Rudyom 身上的事，跟降臨在 Nystul 身上的事是否有關聯！」");
	say();
labelFunc0417_05DB:
	UI_remove_answer("Rudyom");
labelFunc0417_05E2:
	case "Cove" attend labelFunc0417_05F5:
	message("「你肯定還記得 Cove 。那是 Britain 東邊一個非常宜人的小鎮。相當令人放鬆。」");
	say();
	UI_remove_answer("Cove");
labelFunc0417_05F5:
	case "守護者 (The Guardian)" attend labelFunc0417_060C:
	message("「我不知道有什麼『守護者』。你確定他真的存在嗎？你應該進一步調查。」");
	say();
	gflags[0x00D4] = true;
	UI_remove_answer("守護者 (The Guardian)");
labelFunc0417_060C:
	case "法術書" attend labelFunc0417_061F:
	message("「是的，我有一本法術書和其他裝備存放在一起。」");
	say();
	UI_remove_answer("法術書");
labelFunc0417_061F:
	case "裝備" attend labelFunc0417_063F:
	message("「歡迎你使用我的任何裝備。我把它們保存在城堡裡的一間上鎖的儲藏室裡。你可以在我的書房裡找到鑰匙。」");
	say();
	UI_remove_answer("裝備");
	UI_add_answer(["儲藏室", "書房"]);
labelFunc0417_063F:
	case "儲藏室" attend labelFunc0417_0652:
	message("「我確定你能找到它。」~~統治者狡黠地笑了笑。「把它當作一場遊戲吧！」");
	say();
	UI_remove_answer("儲藏室");
labelFunc0417_0652:
	case "書房" attend labelFunc0417_0665:
	message("「在城堡的西端。」");
	say();
	UI_remove_answer("書房");
labelFunc0417_0665:
	case "治療" attend labelFunc0417_067D:
	Func08B4(0x0000, 0x0000, 0x0000);
	var0006 = true;
labelFunc0417_067D:
	case "Weston" attend labelFunc0417_06A1:
	message("Lord British 聽了你關於 Weston 的故事。他看起來很擔憂。~~「我不記得這個案子。讓我查一下……嗯……」他快速瀏覽了一大卷卷軸。~~「因為從皇家果園偷了一顆蘋果而被監禁……太荒唐了！一定是有人篡奪了我的權威。你可以認為這個人被赦免了。將立即對他被捕的情況以及這個叫 Figg 的傢伙展開調查。感謝你，聖者。」");
	say();
	gflags[0x00CC] = true;
	Func0911(0x0014);
	UI_remove_npc(0xFFBB);
	UI_remove_answer("Weston");
labelFunc0417_06A1:
	case "隆隆聲" attend labelFunc0417_06BB:
	message("Lord British 神情嚴肅地看著你，「 Britannia 的根基因為一座島嶼的升起而動搖了。這個事件不是隨機的災難，而是出於邪惡法術的意圖。」");
	say();
	UI_add_answer("島嶼");
	UI_remove_answer("隆隆聲");
labelFunc0417_06BB:
	case "島嶼" attend labelFunc0417_06E1:
	message("「是的，");
	message(var0001);
	message(". I felt a great disturbance in the ether when this island arose from the sea. The island is none other than the Isle of Fire where thou defeated the Hellspawn Exodus.\"");
	say();
	UI_add_answer(["火之島 (Isle of Fire)", "Exodus"]);
	UI_remove_answer("島嶼");
labelFunc0417_06E1:
	case "火之島 (Isle of Fire)" attend labelFunc0417_0709:
	message("\"");
	message(var0001);
	message(", 你應該知道，當我創造美德神殿時，我也在這座島上設立了三座偉大的神殿，致力於真實 (Truth) 、愛 (Love) 和勇氣 (Courage) 的原則。");
	say();
	message("它們位於火之城堡 (Castle of Fire) 的城牆內。我以前從未向你透露過這點，因為當火之島神祕地沉入海浪之下時，我以為它們永遠消失了。");
	say();
	message("這些神殿只供聖者使用，因此需要一個護身符 (talisman) 才能使用。");
	say();
	message("這些護身符由試煉守護著，如果你希望尋求它們的指引，你應該能毫無困難地通過。」");
	say();
	Func08B5();
	UI_remove_answer("火之島 (Isle of Fire)");
labelFunc0417_0709:
	case "Exodus" attend labelFunc0417_071C:
	message("「你與那個機器和靈魂的奇異混合體之間的戰鬥，現在已經成為傳奇。如果你要去那座島，請務必小心，因為那個存在的遺骸現在存放在火之城堡的其中一個房間裡。」");
	say();
	UI_remove_answer("Exodus");
labelFunc0417_071C:
	case "告辭" attend labelFunc0417_0727:
	goto labelFunc0417_072A;
labelFunc0417_0727:
	goto labelFunc0417_0115;
labelFunc0417_072A:
	endconv;
	message("「再見，");
	message(var0001);
	message("。有空常來。」*");
	say();
labelFunc0417_0735:
	if (!(event == 0x0000)) goto labelFunc0417_0743;
	Func092E(0xFFE9);
labelFunc0417_0743:
	if (!(var0000 == true)) goto labelFunc0417_07CA;
	var000B = Func092D(item);
	var000C = ((var000B + 0x0004) % 0x0008);
	var000D = UI_execute_usecode_array(item, [(byte)0x59, var000C, (byte)0x27, 0x0001, (byte)0x27, 0x0002, (byte)0x27, 0x0003, (byte)0x55, 0x0417, (byte)0x27, 0x0003, (byte)0x27, 0x0002, (byte)0x27, 0x000B, (byte)0x55, 0x0417]);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var000B, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0006, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61]);
labelFunc0417_07CA:
	if (!(event == 0x0002)) goto labelFunc0417_08BD;
	if (!gflags[0x001E]) goto labelFunc0417_07E0;
	event = 0x0001;
	goto labelFunc0417_000C;
	abort;
labelFunc0417_07E0:
	if (!(!gflags[0x030D])) goto labelFunc0417_08A2;
	gflags[0x030D] = true;
	var000F = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var000F[0x0001] - 0x0001), (var000F[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0010 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0000);
	var0010 = (var0010 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0003));
	if (!(!(var0010[0x0001] >= 0x003C))) goto labelFunc0417_0876;
	var0011 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0000, (0x003C - var0010[0x0001]));
labelFunc0417_0876:
	if (!(!(var0010[0x0002] >= 0x003C))) goto labelFunc0417_089F;
	var0011 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0003, (0x003C - var0010[0x0002]));
labelFunc0417_089F:
	goto labelFunc0417_08BD;
labelFunc0417_08A2:
	UI_show_npc_face(0xFFE9, 0x0000);
	var0001 = Func0908();
	message("「我恭喜你並感謝你，");
	message(var0001);
	message("。你的事蹟繼續為你贏得讚譽。」");
	say();
	abort;
labelFunc0417_08BD:
	return;
}


