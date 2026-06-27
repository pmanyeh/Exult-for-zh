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
	var talked_book;

	var0000 = false;
	if (!(event == 0x0001)) goto labelFunc0417_0735;
	talked_book = false;
labelFunc0417_000C:
	var0001 = Func0908();
	if (!gflags[0x001E]) goto labelFunc0417_0027;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「愚蠢！！到底是什麼驅使你施展那個該死的『末日決戰（Armageddon Spell）』？我就知道那很危險！你也知道那很危險！！現在看看我們！我們是整個星球上唯二孤伶伶的人！不列顛尼亞全毀了！你算哪門子的聖者！？現在，沒有了月之門的運作，我們兩人都被迫要在這片被毀滅的荒原中度過永恆！~~」「當然，這也許可以看作是解決我們所有問題的聰明辦法。畢竟，現在就連那個所謂的守護者也不會想要不列顛尼亞了！」*");
	say();
	abort;
labelFunc0417_0027:
	if (!gflags[0x030C]) goto labelFunc0417_004C;
	if (!(!gflags[0x030D])) goto labelFunc0417_0049;
	var0000 = true;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我感覺到 Exodus 的殘骸已經從這個領域中消逝。這讓我肩上卸下了一塊大石。因此，聖者，我不能讓這項成就得不到獎賞。請跪下，我的朋友。」當你遵從指示時，不列顛王伸出了他的雙手。");
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
	UI_add_answer("月之寶珠");
labelFunc0417_00B3:
	if (!(gflags[0x00CD] && (!gflags[0x00CC]))) goto labelFunc0417_00C5;
	UI_add_answer("Weston");
labelFunc0417_00C5:
	if (!gflags[0x00D3]) goto labelFunc0417_00D2;
	UI_add_answer("治療");
labelFunc0417_00D2:
	if (!gflags[0x0127]) goto labelFunc0417_00DF;
	UI_add_answer("守護者");
labelFunc0417_00DF:
	if (!gflags[0x00D4]) goto labelFunc0417_00EC;
	UI_remove_answer("守護者");
labelFunc0417_00EC:
	if (!(!gflags[0x0098])) goto labelFunc0417_010B;
	message("你看到你的老朋友不列顛王，看起來比你上次見到他時老了一些。他看到你時眼睛閃爍著光芒。~~「歡迎，我的朋友，」他擁抱著你說道。「請告訴我，是什麼風把你吹來不列顛尼亞的！或者，更重要的是，是什麼『帶』你來的？」");
	say();
	gflags[0x0098] = true;
	UI_add_answer(["紅色月之門", "月之寶珠"]);
	goto labelFunc0417_0115;
labelFunc0417_010B:
	message("\"「是的，");
	message(var0001);
	message("？」不列顛王問道。");
	say();
labelFunc0417_0115:
	if (gflags[0x0345] && UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0 && !talked_book) {
		UI_add_answer("古文譯本");
	}
	converse attend labelFunc0417_072A;
	case "姓名" attend labelFunc0417_012B:
	message("不列顛王大笑。「什麼，你在開玩笑嗎，聖者？難道你認不出你的老朋友了？」");
	say();
	UI_remove_answer("姓名");
labelFunc0417_012B:
	case "職業" attend labelFunc0417_0148:
	message("不列顛王翻了個白眼。「我們一定要走這個過場嗎？」他搖著頭笑道。");
	say();
	message("「很好。如你所知，我是不列顛尼亞的統治者，而且已經統治一段時間了。儘管我來自你的家鄉，但我選擇在這裡生活。」");
	say();
	UI_add_answer(["不列顛尼亞", "家鄉"]);
labelFunc0417_0148:
	case "家鄉" attend labelFunc0417_0162:
	message("「我知道距離我造訪我們的地球已經有很多年了，但你肯定還記得我們兩人都來自同一個時間和地點吧？而且，身為同鄉兄弟，你也應該記得，你可以在需要時隨時向我尋求協助。」");
	say();
	UI_remove_answer("家鄉");
	UI_add_answer("協助");
labelFunc0417_0162:
	case "協助" attend labelFunc0417_0194:
	message("「別忘了，聖者，我有能力治癒你。那是我似乎仍然有效的一點魔法。而且我也許能為你提供一些裝備和一本法術書。」");
	say();
	UI_add_answer(["裝備", "法術書"]);
	if (!(!gflags[0x00D3])) goto labelFunc0417_0189;
	UI_add_answer("治療");
labelFunc0417_0189:
	gflags[0x00D3] = true;
	UI_remove_answer("協助");
labelFunc0417_0194:
	case "不列顛尼亞" attend labelFunc0417_01C5:
	message("「這個國家的狀況繁榮無比。你意識到你已經離開 200 個不列顛尼亞年了嗎？」不列顛王對你搖了搖手指。~~「我敢肯定你的朋友們都為你的缺席感到惋惜。你離開這麼久真是太可惜了！但是... 我真的很高興見到你。不列顛尼亞繁榮而豐饒。看看你周圍。探索這座新翻修的城堡。在各地旅行。四處都充滿了和平。~~」「是的，不列顛尼亞從未如此美好。嗯，幾乎從未。」");
	say();
	UI_remove_answer("不列顛尼亞");
	UI_add_answer(["朋友們", "城堡", "幾乎沒有"]);
	if (!(!gflags[0x0066])) goto labelFunc0417_01C5;
	UI_add_answer("魔法");
labelFunc0417_01C5:
	case "幾乎沒有" attend labelFunc0417_01D8:
	message("「嗯，『事情』確實很好。我擔心的是『人』。~~」「不列顛尼亞發生了一些不對勁的事情，但我不知道是什麼。有一種東西籠罩在不列顛尼亞人民的頭上。他們很不快樂。從他們的眼睛裡就能看出來。既然和平了這麼久，已經沒有什麼能將人民團結在一起了。~~」「也許你能查明發生了什麼事。我懇求你走到人群中去。觀察他們的日常工作。與他們交談。與他們一起工作。與他們共進一餐。也許他們需要像聖者這樣的人來關心他們的生活。」");
	say();
	UI_remove_answer("幾乎沒有");
labelFunc0417_01D8:
	case "紅色月之門" attend labelFunc0417_0207:
	message("你講述了一個紅色的月之門如何出現在你家後方，並神秘地將你帶到 Trinsic 的故事。~~不列顛王的眉頭隨著你的講述而皺起。最後他說：「我並沒有派紅色的月之門去接你。一定是有某人或某物啟動了那個月之門。這確實很奇怪，因為我們最近在月之門上遇到了一些麻煩。事實上，我們在魔法方面也普遍遇到了麻煩！」");
	say();
	UI_remove_answer("紅色月之門");
	if (!(!var0007)) goto labelFunc0417_01F9;
	UI_add_answer("月之門");
labelFunc0417_01F9:
	if (!(!var0008)) goto labelFunc0417_0207;
	UI_add_answer("魔法");
labelFunc0417_0207:
	case "月之寶珠" attend labelFunc0417_0278:
	message("「自從魔法出現問題以來，我的就一直無法運作。事實上，沒有任何一個月之門能夠可靠地運作已經有一段時間了！」");
	say();
	message("「你有帶來你的月之寶珠（Orb of the Moons）嗎？」");
	say();
	if (!Func090A()) goto labelFunc0417_0224;
	message("「真的嗎？它在哪裡？你身上並沒有帶著它！」");
	say();
	goto labelFunc0417_0228;
labelFunc0417_0224:
	message("「我懂了。」");
	say();
labelFunc0417_0228:
	message("「嗯。你可能會被困在不列顛尼亞。來，不如試試我的吧？我把它借給你。也許它對你有用。不過要小心。月之門已經變得危險了。」");
	say();
	var0009 = UI_add_party_items(0x0001, 0x0311, 0xFE99, 0xFE99, false);
	if (!var0009) goto labelFunc0417_0251;
	message("不列顛王將他的月之寶珠交給了你。");
	say();
	gflags[0x00DD] = true;
	goto labelFunc0417_0255;
labelFunc0417_0251:
	message("「你的雙手太滿了，無法拿取寶珠！」");
	say();
labelFunc0417_0255:
	UI_remove_answer("月之寶珠");
	if (!(!var0007)) goto labelFunc0417_026A;
	UI_add_answer("月之門");
labelFunc0417_026A:
	if (!(!var0008)) goto labelFunc0417_0278;
	UI_add_answer("魔法");
labelFunc0417_0278:
	case "城堡" attend labelFunc0417_0292:
	message("「是的，自從你上次造訪以來，它已經重新裝潢過了。建築師和工人們做得很出色。」~~這位統治者向你傾身，臉上帶著不悅的表情。~~「整個建築群唯一的污點就是那個該死的育嬰室！」");
	say();
	UI_remove_answer("城堡");
	UI_add_answer("育嬰室");
labelFunc0417_0292:
	case "育嬰室" attend labelFunc0417_02A5:
	message("「我才不會靠近那個地方！國王和髒尿布是格格不入的。在我的幾名員工成家後，大議會說服我設立了育嬰室。雖然這可能是一個必要的設施，但我會假裝它不存在！」");
	say();
	UI_remove_answer("育嬰室");
labelFunc0417_02A5:
	case "Trinsic" attend labelFunc0417_02C9:
	message("「我已經很多年沒去過那裡了。那裡發生了什麼事嗎？」");
	say();
	UI_remove_answer("Trinsic");
	UI_push_answers();
	UI_add_answer(["一樁謀殺案", "沒什麼"]);
labelFunc0417_02C9:
	case "沒什麼" attend labelFunc0417_02E0:
	message("「確實如此。那麼看來 Trinsic 自從我上次見到它以來並沒有太大的改變。」他的眼睛閃爍著光芒。");
	say();
	UI_pop_answers();
	UI_remove_answer("沒什麼");
labelFunc0417_02E0:
	case "一樁謀殺案" attend labelFunc0417_031F:
	message("「謀殺？在 Trinsic ？」這位統治者看起來很擔憂。~~「我沒有聽說過這件事。你正在調查它嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0417_02FF;
	message("「很好。我很高興你能關心我的人民。」");
	say();
	goto labelFunc0417_0303;
labelFunc0417_02FF:
	message("「啊，你也許應該調查一下！」");
	say();
labelFunc0417_0303:
	message("國王停頓了一會兒。「既然你提到了這點，我在過去幾個月裡也收到過其他類似謀殺案的報告。事實上，三四年前在不列顛城就發生過一起。屍體以儀式性的方式被肢解。顯然有一個瘋狂的殺手在逃。但我毫不懷疑，像你這樣的聖者，一定能找到他！」");
	say();
	UI_remove_answer("一樁謀殺案");
	UI_pop_answers();
	UI_add_answer(["儀式性的", "殺手"]);
labelFunc0417_031F:
	case "儀式性的" attend labelFunc0417_0336:
	message("「我不記得太多細節了。你應該去問問鎮長 Patterson 關於這件事的情況。他也許記得更多。」");
	say();
	UI_remove_answer("儀式性的");
	gflags[0x00D1] = true;
labelFunc0417_0336:
	case "殺手" attend labelFunc0417_0363:
	message("「這當然只是我的假設。但這就是我們所能掌握的全部線索了。除非你已經發現了一些有用的資訊？」");
	say();
	UI_remove_answer("殺手");
	if (!gflags[0x0043]) goto labelFunc0417_0356;
	UI_add_answer("Hook");
labelFunc0417_0356:
	if (!gflags[0x0040]) goto labelFunc0417_0363;
	UI_add_answer("皇冠寶石號（The Crown Jewel）");
labelFunc0417_0363:
	case "友誼會" attend labelFunc0417_0383:
	message("「他們是一群非常有用和有生產力的公民。你絕對應該去參觀一下位於不列顛城的友誼會總部，並與巴特林交談。友誼會在不列顛尼亞各地做了許多善事，包括提供食物給窮人、教育和幫助有需要的人，以及促進普遍的善意與和平。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer(["巴特林", "總部"]);
labelFunc0417_0383:
	case "總部" attend labelFunc0417_0396:
	message("「是的，它離城堡不遠，在西南方。就在劇院的南邊。」");
	say();
	UI_remove_answer("總部");
labelFunc0417_0396:
	case "巴特林" attend labelFunc0417_03A9:
	message("「他是一名德魯伊，大約二十年前創立了友誼會。他非常聰明，而且是一個溫暖而溫和的人。」");
	say();
	UI_remove_answer("巴特林");
labelFunc0417_03A9:
	case "Hook" attend labelFunc0417_03BC:
	message("「一個帶著鐵鉤的男人？」國王摸了摸下巴。~~「不，我不記得曾經見過一個帶著鐵鉤的男人。」");
	say();
	UI_remove_answer("Hook");
labelFunc0417_03BC:
	case "皇冠寶石號（The Crown Jewel）" attend labelFunc0417_03CF:
	message("「恐怕我不可能知道每一艘經過我們港口的船隻。如果你還沒有去確認的話，你應該去問問造船匠 Clint 。」");
	say();
	UI_remove_answer("皇冠寶石號（The Crown Jewel）");
labelFunc0417_03CF:
	case "朋友們" attend labelFunc0417_03F2:
	message("「你當然是指 Iolo 、 Shamino 和 Dupre 。」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0417_03F2:
	case "Iolo" attend labelFunc0417_0435:
	message("「這些年來我很少見到我們的朋友。據我所知，他大部分時間都在 Trinsic 。」");
	say();
	if (!var0003) goto labelFunc0417_0427;
	message("「哈囉， Iolo ！你好嗎？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我很好，陛下！很高興見到你！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_0427:
	UI_remove_answer("Iolo");
	UI_add_answer("Trinsic");
labelFunc0417_0435:
	case "Shamino" attend labelFunc0417_049B:
	message("「那個無賴不常來，雖然我知道他最近大部分時間都在不列顛城！」");
	say();
	if (!var0005) goto labelFunc0417_0494;
	message("「你對自己有什麼要說的嗎， Shamino ？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我的歉意，大人，」 Shamino 說道。*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我聽說的關於一個女人的事是怎麼回事？一位女演員？嗯？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino 臉紅了，不安地挪動著雙腳。*");
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
	message("「自從我封他為騎士後就沒見過他了。很典型的作風——我幫了這個人一個忙，然後他就消失了！我聽說他也許在 Jhelom 。」");
	say();
	if (!var0004) goto labelFunc0417_04EC;
	message("「你都去了哪裡， Dupre 爵士？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「哦，到處跑，大人，」戰士回答道。*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我在不列顛尼亞這裡很少有來自我們家鄉的朋友。你必須特地多來拜訪！尤其既然你是一位騎士！」*");
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
	message("「據說那是個相當暴力的地方。我已經有很長一段時間沒有榮幸去拜訪了。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc0417_050D:
	case "魔法" attend labelFunc0417_054E:
	message("「有些不對勁。魔法已經很長一段時間無法運作了。我甚至連用魔法變出食物都有困難！這一定與魔法以太有關。~~」「有些人說魔法正在消亡，因為月之門的麻煩和 Nystul 的情況。我開始懷疑他們可能是對的！」");
	say();
	message("不列顛王端詳了你一會兒。");
	say();
	message("「也許魔法對你來說會更有用。你來不列顛尼亞還沒多久。有可能無論是什麼影響了魔法，都還沒有在你身上留下印記。請試試看。一本法術書和你的其他裝備存放在一起。」");
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
	message("「呃...試著和他談談吧。」");
	say();
	goto labelFunc0417_056F;
labelFunc0417_056B:
	message("國王壓低了聲音。~~「他表現得很古怪，不是嗎？他的心智發生了一些變化。他似乎再也無法專注於魔法了。」");
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
	message("「月之門無法運作！我們不能像過去那樣使用它們。它們不僅功能失常，事實上，它們還很危險！我的一位值得信賴的賢者使用了我自己的月之寶珠前往謙卑神殿（Shrine of Humility），他的身體在進入傳送門時竟然粉碎了！要是 Cove 的那個法師沒有發瘋就好了！」");
	say();
	UI_remove_answer("月之門");
	UI_add_answer(["瘋狂法師", "Cove"]);
	var0007 = true;
labelFunc0417_05A1:
	case "瘋狂法師" attend labelFunc0417_05C5:
	message("統治者向前傾身，平靜地說道。~~「 Cove 有一個名叫 Rudyom 的瘋狂法師。你記得他嗎？ Rudyom 當時正在研究一種名為『黑石（blackrock）』的魔法物質。在他發瘋之前，他聲稱這種礦物可以解決月之門的問題。我建議你應該去 Cove 找到他。試著了解他用這種黑石物質在做什麼。這可能是我們唯一的希望。」");
	say();
	gflags[0x0065] = true;
	Func0911(0x0014);
	UI_remove_answer("瘋狂法師");
	UI_add_answer("Rudyom");
labelFunc0417_05C5:
	case "Rudyom" attend labelFunc0417_05E2:
	message("「他是一位才華洋溢且受人尊敬的法師。但近年來他發生了一些事。他似乎完全變得老態龍鍾了。」");
	say();
	if (!gflags[0x0099]) goto labelFunc0417_05DB;
	message("突然間，某件事喚醒了不列顛王的記憶。「我想知道 Rudyom 身上發生的事和 Nystul 遭遇的事之間是否有所關聯！」");
	say();
labelFunc0417_05DB:
	UI_remove_answer("Rudyom");
labelFunc0417_05E2:
	case "Cove" attend labelFunc0417_05F5:
	message("「你肯定還記得 Cove 。那是不列顛城東邊一個非常宜人的小鎮。相當令人放鬆。」");
	say();
	UI_remove_answer("Cove");
labelFunc0417_05F5:
	case "守護者" attend labelFunc0417_060C:
	message("「我不知道有什麼『守護者』。你確定他真的存在嗎？你應該進一步調查。」");
	say();
	gflags[0x00D4] = true;
	UI_remove_answer("守護者");
labelFunc0417_060C:
	case "法術書" attend labelFunc0417_061F:
	message("「是的，我有一本法術書和其餘的裝備一起收著。」");
	say();
	UI_remove_answer("法術書");
labelFunc0417_061F:
	case "裝備" attend labelFunc0417_063F:
	message("「歡迎你使用我的任何裝備。我把它們保存在這座城堡裡一間上了鎖的儲藏室中。你可以在我的書房裡找到鑰匙。」");
	say();
	UI_remove_answer("裝備");
	UI_add_answer(["儲藏室", "書房"]);
labelFunc0417_063F:
	case "儲藏室" attend labelFunc0417_0652:
	message("「我相信你能找到它的。」~~統治者狡黠地笑了笑。「把它當作是一場遊戲吧！」");
	say();
	UI_remove_answer("儲藏室");
labelFunc0417_0652:
	case "書房" attend labelFunc0417_0665:
	message("「就在城堡的西邊。」");
	say();
	UI_remove_answer("書房");
labelFunc0417_0665:
	case "治療" attend labelFunc0417_067D:
	Func08B4(0x0000, 0x0000, 0x0000);
	var0006 = true;
labelFunc0417_067D:
	case "Weston" attend labelFunc0417_06A1:
	message("不列顛王聽了你關於 Weston 的故事。他看起來很擔憂。~~「我不記得這個案子。讓我查一下...嗯...」他快速掃視了一大卷卷軸。~~「因為從皇家果園偷了一顆蘋果而被監禁... 太荒謬了！一定是有人篡奪了我的權力。你可以認為這個人已經被赦免了。我們將立即針對他被捕的情況以及這個叫 Figg 的傢伙展開調查。感謝你，聖者。」");
	say();
	gflags[0x00CC] = true;
	Func0911(0x0014);
	UI_remove_npc(0xFFBB);
	UI_remove_answer("Weston");
labelFunc0417_06A1:
	case "隆隆聲" attend labelFunc0417_06BB:
	message("不列顛王神情凝重地看著你，「一座島嶼的升起動搖了不列顛尼亞的根基。這起事件並非隨機的災難，而是出於某種巫術意圖。」");
	say();
	UI_add_answer("島嶼");
	UI_remove_answer("隆隆聲");
labelFunc0417_06BB:
	case "島嶼" attend labelFunc0417_06E1:
	message("「是的，");
	message(var0001);
	message("。當這座島嶼從海中升起時，我感覺到了以太之中，有巨大的擾動。這座島嶼正是你擊敗地獄之子 Exodus 的火之島（Isle of Fire）。」");
	say();
	UI_add_answer(["火之島", "Exodus"]);
	UI_remove_answer("島嶼");
labelFunc0417_06E1:
	case "火之島" attend labelFunc0417_0709:
	message("「");
	message(var0001);
	message("，你應該知道，當我創造美德神殿時，我也在這座島上設立了三座偉大的神殿，分別獻給真理（Truth）、愛（Love）與勇氣（Courage）的原則。」");
	say();
	message("「它們位於火之城堡（Castle of Fire）的城牆內。我以前從未向你透露過這點，因為當火之島神秘地沉入波濤之下時，我以為它們永遠消失了。」");
	say();
	message("「這些神殿僅供聖者使用，因此必須有護身符（talisman）才能使用它們。」");
	say();
	message("「護身符由測試守護著，如果你希望尋求它們的指引，你通過這些測試應該沒有問題。」");
	say();
	Func08B5();
	UI_remove_answer("火之島");
labelFunc0417_0709:
	case "Exodus" attend labelFunc0417_071C:
	message("「你與那種由機器和靈魂組成的奇怪混合體的戰鬥現在已成為傳奇。如果你要去那座島，請務必小心，因為那個存在的殘骸現在就存放在火之城堡的其中一個房間裡。」");
	say();
	UI_remove_answer("Exodus");
labelFunc0417_071C:
	case "古文譯本" attend labelFunc0417_0722:
	if (!gflags[0x0346]) {
		message("「哦？你說你遇到了一些看不懂的古文招牌？」不列顛王沉思了一會。");
		say();
		message("「的確，那些是古老的不列顛盧恩符文。現在已經很少人使用了。」");
		say();
		message("「既然你需要，這本『古文譯本』就交給你吧，它能幫助你解讀那些古老的文字。」");
		say();
		UI_add_party_items(1, 0x0282, 149, 0, false);
		gflags[0x0346] = true;
	} else {
		message("「你弄丟了我給你的那本『古文譯本』嗎？」不列顛王嘆了口氣。");
		say();
		message("「好吧，看在你身負重任的份上，我再給你一本。這次可別再弄丟了！」");
		say();
		UI_add_party_items(1, 0x0282, 149, 0, false);
	}
	talked_book = true;
	UI_remove_answer("古文譯本");
labelFunc0417_0722:
	case "告辭" attend labelFunc0417_0727:
	goto labelFunc0417_072A;
labelFunc0417_0727:
	goto labelFunc0417_0115;
labelFunc0417_072A:
	endconv;
	message("「告辭，");
	message(var0001);
	message("。請務必盡快回來。」*");
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
	message("「我祝賀並感謝你，");
	message(var0001);
	message("！你的事蹟繼續為你贏得好名聲。」");
	say();
	abort;
labelFunc0417_08BD:
	return;
}


