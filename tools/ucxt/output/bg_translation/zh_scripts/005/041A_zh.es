#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0852 0x852 ();
extern void Func0911 0x911 (var var0000);
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func084F 0x84F ();
extern void Func0850 0x850 ();
extern void Func084D 0x84D ();
extern void Func0851 0x851 ();
extern void Func092E 0x92E (var var0000);

void Func041A object#(0x41A) ()
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

	if (!(event == 0x0001)) goto labelFunc041A_0695;
	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFE6));
	var0001 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0001) goto labelFunc041A_0057;
	message("巴特林雙眼瞇成紅色的細縫，目光彷彿要將你看穿。");
	say();
	message("「你有立方體（Cube）！你不能用它來對付 -我- ！」");
	say();
	message("說完，巴特林猛然轉身，在你的眼前消失了！*");
	say();
	gflags[0x00DA] = true;
	UI_remove_npc(UI_get_npc_object(0xFFE6));
	abort;
labelFunc041A_0057:
	if (!gflags[0x001E]) goto labelFunc041A_0066;
	message("巴特林看著你，他的目光又回到了『末日決戰（Armageddon）』的冬季風暴中。「多年前，聖者，我去了幽靈之城 Skara Brae 。現在世界的樣子讓我想起了那個死寂的地方。在 Skara Brae ，我有過一次非常深刻的精神體驗，深刻到我從未對任何人提起過。我現在想與你分享那個體驗，聖者。");
	say();
	message("「在那裡，在 Skara Brae ，我看到一個被稱為『受折磨的人』的人。我問這個死人，請告訴我，生與死的問題的答案是什麼？他沒有回答我，我又問了他一次。我懇求他傳授我一些微小的智慧。生與死的問題的答案是什麼？！他什麼也沒說，但在他的眼中... 在他的眼中，我能看到，聖者，他無法回答我，因為根本沒有答案可以給。沒有生與死問題的答案！就在那時，我明白了。沒有意義！沒有美德！沒有價值觀！！！...我讚賞你，聖者，因為你達到了同樣令人解脫的啟蒙！」*");
	say();
	abort;
labelFunc041A_0066:
	if (!gflags[0x0038]) goto labelFunc041A_0103;
	message("「你準備好回答《友誼會之書》裡的問題了嗎？」");
	say();
	if (!Func090A()) goto labelFunc041A_00FE;
	Func0852();
	if (!(!gflags[0x0038])) goto labelFunc041A_00EA;
	if (!(var0000 == 0x001C)) goto labelFunc041A_0099;
	message("「太棒了，聖者！」");
	say();
	message("你壓抑著猶豫的顫抖，從高腳杯中深深地喝了一大口。巴特林走向你。「願這個消息傳遍四方，我們最新的成員正是聖者！」");
	say();
	message("其他的友誼會成員高興地歡呼起來。");
	say();
	goto labelFunc041A_009D;
labelFunc041A_0099:
	message("「很好，聖者。」");
	say();
labelFunc041A_009D:
	var0002 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	gflags[0x0091] = true;
	gflags[0x0006] = true;
	Func0911(0x01F4);
	if (!var0002) goto labelFunc041A_00D0;
	message("「請容我為你獻上你的友誼會徽章。」巴特林將徽章交給你。「請——隨時戴著你的徽章，因為它將向所有看到它的人象徵著你與友誼會同行。立刻把它戴在脖子上吧！喔，還有... 歡迎加入友誼會，聖者。」*");
	say();
	gflags[0x0090] = true;
	goto labelFunc041A_00D4;
labelFunc041A_00D0:
	message("「你的負載太重了，無法接受友誼會徽章。你必須減輕你的負擔。」*");
	say();
labelFunc041A_00D4:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x56, 0x0017]);
	abort;
	goto labelFunc041A_00FB;
labelFunc041A_00EA:
	message("「我親愛的聖者。你必須明白，在我引導你入會之前，你必須了解關於友誼會的所有知識。請研讀你的《友誼會之書》然後再來找我。");
	say();
	message("你的思緒似乎不太清晰。如果你無法理解\t與你交談的另一個靈魂，我也不會感到驚訝。」");
	say();
	UI_set_item_flag(item, 0x0019);
	abort;
labelFunc041A_00FB:
	goto labelFunc041A_0103;
labelFunc041A_00FE:
	message("「準備好了再來吧。」*");
	say();
	abort;
labelFunc041A_0103:
	var0004 = Func0909();
	var0005 = UI_wearing_fellowship();
	var0006 = UI_part_of_day();
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFE6));
	var0007 = Func0908();
	if (!(var0000 == 0x001C)) goto labelFunc041A_0149;
	if (!(gflags[0x008D] && (!gflags[0x0091]))) goto labelFunc041A_0146;
	Func084F();
	goto labelFunc041A_0149;
labelFunc041A_0146:
	Func0850();
labelFunc041A_0149:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0041]) goto labelFunc041A_0166;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc041A_0166:
	if (!gflags[0x0096]) goto labelFunc041A_017A;
	if (!(!gflags[0x0006])) goto labelFunc041A_017A;
	UI_add_answer("加入");
labelFunc041A_017A:
	if (!(gflags[0x00D7] || (gflags[0x00D6] && (!gflags[0x0109])))) goto labelFunc041A_0190;
	UI_add_answer("包裹");
labelFunc041A_0190:
	if (!gflags[0x0109]) goto labelFunc041A_01A4;
	UI_add_answer("已送達的包裹");
	UI_remove_answer("包裹");
labelFunc041A_01A4:
	if (!gflags[0x0102]) goto labelFunc041A_01B1;
	UI_add_answer("包裹已送達");
labelFunc041A_01B1:
	if (!gflags[0x011E]) goto labelFunc041A_01BE;
	UI_add_answer("包裹已送達");
labelFunc041A_01BE:
	if (!gflags[0x008E]) goto labelFunc041A_01DE;
	UI_remove_answer(["已送達的包裹", "包裹已送達"]);
	if (!gflags[0x0097]) goto labelFunc041A_01DE;
	UI_add_answer("箱子");
labelFunc041A_01DE:
	if (!gflags[0x008D]) goto labelFunc041A_01EB;
	UI_remove_answer("箱子");
labelFunc041A_01EB:
	if (!gflags[0x0091]) goto labelFunc041A_01FF;
	if (!(!gflags[0x0090])) goto labelFunc041A_01FF;
	UI_add_answer("medallion");
labelFunc041A_01FF:
	if (!gflags[0x0094]) goto labelFunc041A_020C;
	UI_add_answer("蘋果");
labelFunc041A_020C:
	if (!(gflags[0x008A] || (gflags[0x008C] || gflags[0x000A]))) goto labelFunc041A_0221;
	UI_add_answer("理智的聲音");
labelFunc041A_0221:
	if (!gflags[0x008B]) goto labelFunc041A_022E;
	UI_add_answer("冥想靜修院");
labelFunc041A_022E:
	if (!(!gflags[0x009B])) goto labelFunc041A_0254;
	message("你看到一位圓潤的年長紳士，他既謙遜又端莊。他溫和的眼神流露出對同胞的關懷。");
	say();
	gflags[0x009B] = true;
	if (!(var0005 && (!gflags[0x0006]))) goto labelFunc041A_0251;
	message("男人的目光集中在你脖子上的友誼會徽章上。");
	say();
	message("「我親愛的朋友，你冒充友誼會成員！立刻摘下那枚徽章！」*");
	say();
	abort;
labelFunc041A_0251:
	goto labelFunc041A_0271;
labelFunc041A_0254:
	if (!(var0005 && (!gflags[0x0006]))) goto labelFunc041A_0267;
	message("「除非你摘下那枚友誼會徽章，否則我不會和你說話。你冒充友誼會成員！」*");
	say();
	abort;
	goto labelFunc041A_0271;
labelFunc041A_0267:
	message("「");
	message(var0007);
	message("，我親愛的朋友！很高興再次見到你！」巴特林說。");
	say();
labelFunc041A_0271:
	converse attend labelFunc041A_0690;
	case "姓名" attend labelFunc041A_0287:
	message("「我的名字，好朋友，是巴特林。能親眼見到聖者確實是我的榮幸。」");
	say();
	UI_remove_answer("姓名");
labelFunc041A_0287:
	case "職業" attend labelFunc041A_029A:
	message("「我曾經是一名德魯伊。現在我是友誼會的領袖和創始人。它在整個不列顛尼亞迅速發展，讓我非常忙碌，你可以想像。哈哈哈！」");
	say();
	UI_add_answer("友誼會");
labelFunc041A_029A:
	case "友誼會" attend labelFunc041A_02B4:
	message("「友誼會是二十年前在不列顛王的完全批准和支持下成立的。這是一個精神追求者的協會，他們努力達到人類潛能的最高境界，並與所有人自由分享這些知識。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer("精神上的");
labelFunc041A_02B4:
	case "精神上的" attend labelFunc041A_02D4:
	message("「友誼會推廣『自信認知（sanguine cognition）』的理念，這是一種透過所謂的『內在力量的三位一體（Triad of Inner Strength）』，將積極的思維秩序應用於個人生活的方式。」");
	say();
	UI_remove_answer("精神上的");
	UI_add_answer(["自信認知", "三位一體"]);
labelFunc041A_02D4:
	case "自信認知" attend labelFunc041A_02EE:
	message("「我們努力避免自古以來神秘主義者和賢哲所犯的錯誤。他們將過去的標準（例如美德）應用於衡量現在，因此他們無法正確地感知現在。我們尋求以我們自己的方式來審視我們現在的生活，並看清世界本來的面目。」");
	say();
	UI_remove_answer("自信認知");
	UI_add_answer("美德");
labelFunc041A_02EE:
	case "美德" attend labelFunc041A_0301:
	message("「對於那些出於某種原因覺得自己仍然需要它們的人來說，它們非常合適。但沒有人，甚至連你自己，聖者，你也必須承認，沒有人能完美地實踐它們。因此，它們最終是一種建立在失敗之上的理念。我們從未聲稱我們的教義可以替代美德。然而，我們的信仰是建立在成功而非失敗之上的。」");
	say();
	UI_remove_answer("美德");
labelFunc041A_0301:
	case "三位一體" attend labelFunc041A_031B:
	message("「『內在力量三位一體（Triad of Inner Strength）』簡單來說就是三個基本的價值觀，當它們被統一起來應用時，就能使一個人在生活中更具創造力、更滿足、更成功。」");
	say();
	UI_remove_answer("三位一體");
	UI_add_answer("價值觀");
labelFunc041A_031B:
	case "價值觀" attend labelFunc041A_033E:
	message("「內在力量三原則的三個價值觀是：『致力合一（Strive For Unity）』、『信賴你的兄弟 (Trust Thy Brother)』和『價值先行於報償 (Worthiness Precedes Reward)』。」");
	say();
	UI_remove_answer("價值觀");
	UI_add_answer(["致力合一", "信賴你的兄弟", "價值先行於報償"]);
labelFunc041A_033E:
	case "致力合一" attend labelFunc041A_0358:
	message("「當我們說『致力合一』時，這只是我們表達不列顛尼亞人民應該如何合作與共同努力的方式。這是一種非常有價值的觀念，我相信你也會同意。」");
	say();
	UI_remove_answer("致力合一");
	UI_add_answer("加入");
labelFunc041A_0358:
	case "信賴你的兄弟" attend labelFunc041A_0372:
	message("「友誼會的意思是，人人都是一樣的，而世界大體上是一個支持與孕育生命的地方。我們對彼此的信任就像是將我們社會維繫在一起的樞紐。相當真實，難道你不同意嗎？」");
	say();
	UI_remove_answer("信賴你的兄弟");
	UI_add_answer("加入");
labelFunc041A_0372:
	case "價值先行於報償" attend labelFunc041A_038C:
	message("「請允許我解釋『價值先行於報償』的含義。我們每個人都在尋求我們在生活中所渴望的東西，而我們必須努力讓自己配得上我們所追求的東西。我很確定你很難反對這一點。」");
	say();
	UI_remove_answer("價值先行於報償");
	UI_add_answer("加入");
labelFunc041A_038C:
	case "Elizabeth 和 Abraham" attend labelFunc041A_03E5:
	if (!(!gflags[0x0105])) goto labelFunc041A_03A3;
	message("「啊，我的好同事 Elizabeth 和 Abraham 剛才還在這裡。他們今天早上為友誼會的事務前往 Minoc 了。他們負責資金的分配和收集。」");
	say();
	gflags[0x0087] = true;
labelFunc041A_03A3:
	if (!(gflags[0x0105] && (!gflags[0x016B]))) goto labelFunc041A_03B2;
	message("「自從他們上次來過之後，我就沒見過我的同事們了。他們都是大忙人。」");
	say();
labelFunc041A_03B2:
	if (!(gflags[0x0217] && (!gflags[0x016B]))) goto labelFunc041A_03C1;
	message("「自從他們上次來過之後，我就沒見過我的同事們了。他們都是大忙人。」");
	say();
labelFunc041A_03C1:
	if (!(gflags[0x016B] && (!gflags[0x0284]))) goto labelFunc041A_03D4;
	message("巴特林笑了笑，搖了搖頭。「你追蹤他們的運氣不太好，是吧？他們來過這裡，在 Jhelom 處理了一些工作，但現在他們已經去了 Vesper ，看看能不能在那裡成立分會。」");
	say();
	gflags[0x0088] = true;
labelFunc041A_03D4:
	if (!gflags[0x0284]) goto labelFunc041A_03DE;
	message("「自從他們上次來過之後，我就沒見過我的同事們了。他們都是大忙人。」");
	say();
labelFunc041A_03DE:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc041A_03E5:
	case "加入" attend labelFunc041A_0416:
	if (!gflags[0x0006]) goto labelFunc041A_03FA;
	message("「但你已經是會員了，聖者！一個人只能加入一次！」");
	say();
	goto labelFunc041A_040F;
labelFunc041A_03FA:
	if (!(gflags[0x0096] && (!gflags[0x0097]))) goto labelFunc041A_040C;
	message("「你還沒完成你的任務。記住『價值先於回報』。一旦你完成了任務，你就可以加入。」");
	say();
	goto labelFunc041A_040F;
labelFunc041A_040C:
	Func084D();
labelFunc041A_040F:
	UI_remove_answer("加入");
labelFunc041A_0416:
	case "包裹" attend labelFunc041A_0478:
	if (!(gflags[0x00D7] && (!gflags[0x008F]))) goto labelFunc041A_0475;
	message("「啊！我真希望你的雙手沒有滿到拿不下這個包裹。」");
	say();
	var0008 = UI_find_object(0xFFE6, 0x031E, 0xFE99, 0xFE99);
	var0009 = UI_set_last_created(var0008);
	var000A = UI_give_last_created(0xFE9C);
	if (!var000A) goto labelFunc041A_0463;
	message("「太棒了！這就是了。你現在必須上路了！」*");
	say();
	gflags[0x008F] = true;
	abort;
labelFunc041A_0463:
	var000A = UI_give_last_created(0xFFE6);
	message("「聖者！我對此感到厭煩了！請在你的物品欄中騰出空間來裝包裹！」*");
	say();
	abort;
	goto labelFunc041A_0478;
labelFunc041A_0475:
	Func0851();
labelFunc041A_0478:
	case "已送達的包裹" attend labelFunc041A_0492:
	message("「恭喜，聖者，我們感謝你成功地將我們的包裹送交給 Minoc 的 Elynor 。現在，在你加入友誼會之前，我們還有另一個任務要處理。因為你送達了包裹，你已經證明自己有資格執行另一個任務。」");
	say();
	UI_remove_answer("已送達的包裹");
	UI_add_answer("任務");
labelFunc041A_0492:
	case "包裹已送達" attend labelFunc041A_0512:
	message("「聖者，你有把包裹送交給 Minoc 的 Elynor 嗎？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc041A_04E4;
	message("「你打開了包裹嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc041A_04C8;
	message("「你明知道我們指示過你不要打開它。我們信任你能一字不差地執行我們的指示，但這份信任被打破了。」");
	say();
	UI_add_answer("任務");
	goto labelFunc041A_04CC;
labelFunc041A_04C8:
	message("「Minoc 的 Elynor 可不是這麼告訴我們的。我們信任你能一字不差地執行我們的指示，但這份信任被打破了。");
	say();
labelFunc041A_04CC:
	if (!gflags[0x011E]) goto labelFunc041A_04D6;
	message("「據我了解，包裹裡的內容物也不見了，這確實非常嚴重！");
	say();
labelFunc041A_04D6:
	message("「恐怕你必須為我們執行一項任務作為信任的測試，這樣你才能開始真正與友誼會同行。」");
	say();
	UI_add_answer("任務");
	goto labelFunc041A_050B;
labelFunc041A_04E4:
	message("巴特林驚訝地睜大了眼睛。");
	say();
	message("「發生了什麼事？你把包裹弄丟了嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc041A_0506;
	message("「嘖。嘖。嘖。這真是不幸。我們信任你能送達包裹，但這份信任被打破了。恐怕你必須為我們執行一項任務作為信任的測試，這樣你才能開始真正與友誼會同行。」");
	say();
	UI_add_answer("任務");
	goto labelFunc041A_050B;
labelFunc041A_0506:
	message("「請去送我們的包裹，聖者。等你完成後，我們還有更多事情要談。」*");
	say();
	abort;
labelFunc041A_050B:
	UI_remove_answer("包裹已送達");
labelFunc041A_0512:
	case "任務" attend labelFunc041A_0530:
	message("「你將前往 Destard 地城，它位於 Trinsic 以西的群山中。別擔心，那裡已經完全廢棄了。在那裡，你會找到一個裝有友誼會資金的箱子，這是幾天前為了安全起見藏起來的。你會認出這個箱子，因為它不僅裝有黃金，還有兩枚友誼會徽章。那個地點也很可能標有友誼會的法杖。將這些資金帶回給我們，不要遺失任何一枚硬幣，你將成功完成你的任務。不需要帶回箱子，只要帶回黃金。現在，你必須上路了！」*");
	say();
	gflags[0x008E] = true;
	Func0911(0x0064);
	UI_remove_answer("任務");
	abort;
labelFunc041A_0530:
	case "箱子" attend labelFunc041A_0556:
	message("「啊，是的，你從 Destard 地城回來了！但等等！我沒有看到你要帶回來的友誼會資金！發生了什麼事？！」");
	say();
	UI_add_answer(["攔路強盜", "怪物", "海盜", "船沉了"]);
	UI_remove_answer("箱子");
labelFunc041A_0556:
	case "攔路強盜" attend labelFunc041A_0570:
	message("「哎呀，你的故事太離譜了！我拒絕相信！」巴特林惱火地嗤之以鼻。");
	say();
	UI_remove_answer("攔路強盜");
	UI_add_answer("加入");
labelFunc041A_0570:
	case "怪物" attend labelFunc041A_0596:
	message("「怪物！ Destard 地城裡潛伏著怪物？！好吧，那我為你的不便道歉。」");
	say();
	UI_remove_answer(["怪物", "攔路強盜", "船沉了", "海盜"]);
	UI_add_answer("加入");
labelFunc041A_0596:
	case "海盜" attend labelFunc041A_05B0:
	message("「你肯定能找到更好的藉口！如果你只是不想回答我的問題，你為什麼不直說呢？」");
	say();
	UI_remove_answer("海盜");
	UI_add_answer("加入");
labelFunc041A_05B0:
	case "船沉了" attend labelFunc041A_05CA:
	message("巴特林緩慢地翻了個白眼。「你應該去當個吟遊詩人，你用這種故事來款待我！」");
	say();
	UI_remove_answer("船沉了");
	UI_add_answer("加入");
labelFunc041A_05CA:
	case "medallion" attend labelFunc041A_0605:
	var0002 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	if (!var0002) goto labelFunc041A_05FE;
	message("「請容我為你獻上你的友誼會徽章。」巴特林將徽章交給你。「請——隨時戴著這枚徽章。立刻把它戴在脖子上吧！喔，還有... 歡迎加入友誼會，聖者。」");
	say();
	gflags[0x0090] = true;
	UI_remove_answer("medallion");
	goto labelFunc041A_0605;
labelFunc041A_05FE:
	message("「你無法接受你的友誼會徽章。你的負載太重了！」*");
	say();
	goto labelFunc041A_0690;
labelFunc041A_0605:
	case "蘋果" attend labelFunc041A_0618:
	message("「當你在這裡的時候，請隨意享用蘋果。我敢肯定你會發現這是全不列顛尼亞最好的蘋果。它們是由皇家果園提供給友誼會的。」");
	say();
	UI_remove_answer("蘋果");
labelFunc041A_0618:
	case "理智的聲音" attend labelFunc041A_0645:
	if (!gflags[0x0096]) goto labelFunc041A_0633;
	message("「一旦一個人與友誼會同行夠久，並將『內在力量三位一體（Triad of Inner Strength）』應用於他的生活，他就能清除腦海中所有衝突、適得其反的念頭，達到他能實際聽到他內在理智聲音的地步。這個理智的聲音是你內心的核心，透過純粹的本能、智慧和無懈可擊的邏輯引導著你。一旦有人開始聆聽它並遵循它的指引，他就達到了啟蒙的最高境界。也許有一天你也會聽到它。」");
	say();
	Func0911(0x0014);
	goto labelFunc041A_063E;
labelFunc041A_0633:
	message("「只有活躍的或潛在的友誼會成員才能接觸到『聲音』的概念。當你接受友誼會的測試時，我可以告訴你更多。」");
	say();
	UI_add_answer("測試");
labelFunc041A_063E:
	UI_remove_answer("理智的聲音");
labelFunc041A_0645:
	case "測試" attend labelFunc041A_066F:
	message("「喔，你準備好加入友誼會了嗎？」");
	say();
	if (!Func090A()) goto labelFunc041A_065D;
	Func084D();
	goto labelFunc041A_0668;
labelFunc041A_065D:
	message("「除非你準備好加入，否則我不能再告訴你關於測試的更多細節。」");
	say();
	UI_add_answer("加入");
labelFunc041A_0668:
	UI_remove_answer("測試");
labelFunc041A_066F:
	case "冥想靜修院" attend labelFunc041A_0682:
	message("「那是一個遠離日常生活壓力和干擾的靜修之處，友誼會的新成員可以去那裡學習友誼會的理念。它位於 Serpent's Hold 東方的一個島上。」");
	say();
	UI_remove_answer("冥想靜修院");
labelFunc041A_0682:
	case "告辭" attend labelFunc041A_068D:
	goto labelFunc041A_0690;
labelFunc041A_068D:
	goto labelFunc041A_0271;
labelFunc041A_0690:
	endconv;
	message("「直到我們再次相會，聖者。」*");
	say();
labelFunc041A_0695:
	if (!(event == 0x0000)) goto labelFunc041A_06A3;
	Func092E(0xFFE6);
labelFunc041A_06A3:
	return;
}


