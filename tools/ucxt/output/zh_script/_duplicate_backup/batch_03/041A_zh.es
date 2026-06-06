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
	message("Batlin 的眼睛瞇成了紅色的細縫，幾乎要看穿你。");
	say();
	message("「你有立方體 (Cube) ！你不能用它來對付『我』！」");
	say();
	message("說完， Batlin 華麗地轉身，並在你眼前消失了！*");
	say();
	gflags[0x00DA] = true;
	UI_remove_npc(UI_get_npc_object(0xFFE6));
	abort;
labelFunc041A_0057:
	if (!gflags[0x001E]) goto labelFunc041A_0066;
	message("Batlin 看著你，他的目光又回到了末日的冬季風暴中。「多年前，聖者，我去了鬼城 Skara Brae 。現在這個世界的樣子讓我想起了那個死寂的地方。在 Skara Brae ，我有一段非常深刻的精神體驗，我從未向任何人提起過。我現在想與你分享那段體驗，聖者。");
	say();
	message("「在 Skara Brae 那裡，我看到了一個被稱為受盡折磨者 (The Tortured One) 的人。我問這個死人，請告訴我，生與死問題的答案是什麼？他沒有回答我，我又問了他一次。我懇求他傳授給我哪怕一丁點的智慧。生與死問題的答案是什麼？！他什麼也沒說，但在他的眼中……在他的眼中我可以看到，聖者，他無法回答我，因為根本沒有答案可以給。對生與死的問題沒有答案！那時我才明白。沒有意義！沒有美德！沒有價值！！！……我讚賞你，聖者，因為你達到了同樣解放人心的覺悟！」*");
	say();
	abort;
labelFunc041A_0066:
	if (!gflags[0x0038]) goto labelFunc041A_0103;
	message("「你準備好回答《友誼會之書》中的問題了嗎？」");
	say();
	if (!Func090A()) goto labelFunc041A_00FE;
	Func0852();
	if (!(!gflags[0x0038])) goto labelFunc041A_00EA;
	if (!(var0000 == 0x001C)) goto labelFunc041A_0099;
	message("「太棒了，聖者！」");
	say();
	message("你強忍住一絲猶豫的顫抖，從高腳杯裡深深地喝了一大口。 Batlin 走向你。「願這個消息傳遍四方，我們最新的成員正是聖者！」");
	say();
	message("其他友誼會成員高興地歡呼。");
	say();
	goto labelFunc041A_009D;
labelFunc041A_0099:
	message("「非常好，聖者。」");
	say();
labelFunc041A_009D:
	var0002 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	gflags[0x0091] = true;
	gflags[0x0006] = true;
	Func0911(0x01F4);
	if (!var0002) goto labelFunc041A_00D0;
	message("「容我為你獻上你的友誼會徽章。」 Batlin 把徽章交給你。「請——隨時佩戴你的徽章，因為對所有看到它的人來說，這將是與友誼會同行的象徵。立刻把它戴到你的脖子上！喔，還有……歡迎加入友誼會，聖者。」*");
	say();
	gflags[0x0090] = true;
	goto labelFunc041A_00D4;
labelFunc041A_00D0:
	message("「你的負重太多，無法接收你的友誼會徽章。你必須減輕負重。」*");
	say();
labelFunc041A_00D4:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x56, 0x0017]);
	abort;
	goto labelFunc041A_00FB;
labelFunc041A_00EA:
	message("「我親愛的聖者。你必須明白，在我引導你入門之前，你必須了解關於友誼會的一切。請研讀你的《友誼會之書》後再來找我。");
	say();
	message("你的思緒似乎不清楚。如果你不了解與你交談的另一個靈魂，我也不會感到驚訝。」");
	say();
	UI_set_item_flag(item, 0x0019);
	abort;
labelFunc041A_00FB:
	goto labelFunc041A_0103;
labelFunc041A_00FE:
	message("「等你準備好再來。」*");
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
	UI_add_answer("送達的包裹");
	UI_remove_answer("包裹");
labelFunc041A_01A4:
	if (!gflags[0x0102]) goto labelFunc041A_01B1;
	UI_add_answer("包裹已送達");
labelFunc041A_01B1:
	if (!gflags[0x011E]) goto labelFunc041A_01BE;
	UI_add_answer("包裹已送達");
labelFunc041A_01BE:
	if (!gflags[0x008E]) goto labelFunc041A_01DE;
	UI_remove_answer(["送達的包裹", "包裹已送達"]);
	if (!gflags[0x0097]) goto labelFunc041A_01DE;
	UI_add_answer("箱子");
labelFunc041A_01DE:
	if (!gflags[0x008D]) goto labelFunc041A_01EB;
	UI_remove_answer("箱子");
labelFunc041A_01EB:
	if (!gflags[0x0091]) goto labelFunc041A_01FF;
	if (!(!gflags[0x0090])) goto labelFunc041A_01FF;
	UI_add_answer("徽章");
labelFunc041A_01FF:
	if (!gflags[0x0094]) goto labelFunc041A_020C;
	UI_add_answer("蘋果");
labelFunc041A_020C:
	if (!(gflags[0x008A] || (gflags[0x008C] || gflags[0x000A]))) goto labelFunc041A_0221;
	UI_add_answer("聲音");
labelFunc041A_0221:
	if (!gflags[0x008B]) goto labelFunc041A_022E;
	UI_add_answer("冥想靜修處");
labelFunc041A_022E:
	if (!(!gflags[0x009B])) goto labelFunc041A_0254;
	message("你看到一位圓潤的年長紳士，他既謙遜又莊嚴。他溫柔的雙眼流露出對同胞的關懷。");
	say();
	gflags[0x009B] = true;
	if (!(var0005 && (!gflags[0x0006]))) goto labelFunc041A_0251;
	message("男人的目光集中在你脖子上的友誼會徽章上。");
	say();
	message("「我親愛的朋友，你假冒友誼會成員！立刻拿下那個徽章！」*");
	say();
	abort;
labelFunc041A_0251:
	goto labelFunc041A_0271;
labelFunc041A_0254:
	if (!(var0005 && (!gflags[0x0006]))) goto labelFunc041A_0267;
	message("「除非你拿下那個友誼會徽章，否則我不會跟你說話。你假冒友誼會成員！」*");
	say();
	abort;
	goto labelFunc041A_0271;
labelFunc041A_0267:
	message("\"");
	message(var0007);
	message("，我親愛的朋友！能再次見到你真是太好了！」 Batlin 說。");
	say();
labelFunc041A_0271:
	converse attend labelFunc041A_0690;
	case "姓名" attend labelFunc041A_0287:
	message("「好朋友，我的名字是 Batlin 。能親眼見到聖者本人，實在是莫大的榮幸。」");
	say();
	UI_remove_answer("姓名");
labelFunc041A_0287:
	case "職業" attend labelFunc041A_029A:
	message("「我曾經是個德魯伊。現在我是友誼會的領袖和創始人。它在整個 Britannia 迅速發展，讓我非常忙碌，你可以想像得到。哈！哈！哈！」");
	say();
	UI_add_answer("友誼會");
labelFunc041A_029A:
	case "友誼會" attend labelFunc041A_02B4:
	message("「友誼會是在二十年前，在 Lord British 的完全批准和支持下成立的。這是一個由精神探索者組成的協會，他們致力於達到人類潛能的最高水平，並與所有人自由分享這些知識。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer("精神");
labelFunc041A_02B4:
	case "精神" attend labelFunc041A_02D4:
	message("「友誼會提倡樂觀認知 (sanguine cognition) 的理念，這是一種透過所謂的『內在力量三位一體 (Triad of Inner Strength) 』將積極的思考模式應用於生活的方法。」");
	say();
	UI_remove_answer("精神");
	UI_add_answer(["樂觀認知", "三位一體"]);
labelFunc041A_02D4:
	case "樂觀認知" attend labelFunc041A_02EE:
	message("「我們努力避免自古以來神秘主義者和智者所犯的錯誤。他們用過去的標準（例如美德）來衡量現在，因此他們無法正確地認知現在。我們尋求以自己的方式審視我們現在的生活，並看清這個世界真實的樣子。」");
	say();
	UI_remove_answer("樂觀認知");
	UI_add_answer("美德");
labelFunc041A_02EE:
	case "美德" attend labelFunc041A_0301:
	message("「對於那些無論出於何種原因仍覺得需要它們的人來說，它們是完全足夠的。但沒有人，甚至連你自己，聖者，你也必須承認，沒有人能完美地實現它們。因此，它們最終是一種建立在失敗之上的哲學。我們從未聲稱我們的教義可以替代美德。然而，我們這是一種建立在成功而非失敗之上的信仰。」");
	say();
	UI_remove_answer("美德");
labelFunc041A_0301:
	case "三位一體" attend labelFunc041A_031B:
	message("「內在力量三位一體僅僅是三個基本價值觀，當它們結合應用時，能讓人更具創造力、更滿足，並在生活中獲得成功。」");
	say();
	UI_remove_answer("三位一體");
	UI_add_answer("價值觀");
labelFunc041A_031B:
	case "價值觀" attend labelFunc041A_033E:
	message("「內在力量三位一體的三個價值觀是：為團結而奮鬥、信任你的兄弟，以及配得才有回報。」");
	say();
	UI_remove_answer("價值觀");
	UI_add_answer(["團結", "信任", "配得"]);
labelFunc041A_033E:
	case "團結" attend labelFunc041A_0358:
	message("「當我們說為團結而奮鬥時，這只是我們表達 Britannia 人民應該合作並共同努力的方式。這是一種有價值的理念，我確信你會同意的。」");
	say();
	UI_remove_answer("團結");
	UI_add_answer("加入");
labelFunc041A_0358:
	case "信任" attend labelFunc041A_0372:
	message("「友誼會對此的意思是，人都是一樣的，而世界，整體來說，是一個支持和孕育的地方。我們對彼此的信任就像是維繫我們社會的齒輪。很真實，難道你不同意嗎？」");
	say();
	UI_remove_answer("信任");
	UI_add_answer("加入");
labelFunc041A_0372:
	case "配得" attend labelFunc041A_038C:
	message("「請允許我解釋一下『配得才有回報』的含義。我們每個人都在生活中尋求我們渴望的東西，而我們必須努力讓自己配得上我們所尋求的東西。我很確定你很難反對這一點。」");
	say();
	UI_remove_answer("配得");
	UI_add_answer("加入");
labelFunc041A_038C:
	case "Elizabeth 和 Abraham" attend labelFunc041A_03E5:
	if (!(!gflags[0x0105])) goto labelFunc041A_03A3;
	message("「啊，我的好同事 Elizabeth 和 Abraham 剛才還在這裡。他們今早為了友誼會的公務前往 Minoc 了。他們負責資金的分配和募集。」");
	say();
	gflags[0x0087] = true;
labelFunc041A_03A3:
	if (!(gflags[0x0105] && (!gflags[0x016B]))) goto labelFunc041A_03B2;
	message("「自從他們上次來過之後，我就沒見過我的同事們了。他們是大忙人。」");
	say();
labelFunc041A_03B2:
	if (!(gflags[0x0217] && (!gflags[0x016B]))) goto labelFunc041A_03C1;
	message("「自從他們上次來過之後，我就沒見過我的同事們了。他們是大忙人。」");
	say();
labelFunc041A_03C1:
	if (!(gflags[0x016B] && (!gflags[0x0284]))) goto labelFunc041A_03D4;
	message("Batlin 笑了笑並搖頭。「你追蹤他們沒什麼運氣，對吧？他們來過這裡，在 Jhelom 做了一些工作，但現在他們去了 Vesper ，看看能不能在那裡設立分會。」");
	say();
	gflags[0x0088] = true;
labelFunc041A_03D4:
	if (!gflags[0x0284]) goto labelFunc041A_03DE;
	message("「自從他們上次來過之後，我就沒見過我的同事們了。他們是大忙人。」");
	say();
labelFunc041A_03DE:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc041A_03E5:
	case "加入" attend labelFunc041A_0416:
	if (!gflags[0x0006]) goto labelFunc041A_03FA;
	message("「但你已經是成員了，聖者！一個人只能加入一次！」");
	say();
	goto labelFunc041A_040F;
labelFunc041A_03FA:
	if (!(gflags[0x0096] && (!gflags[0x0097]))) goto labelFunc041A_040C;
	message("「你還沒完成你的任務。記住，配得才有回報。一旦你完成了這些任務，你就可以加入。」");
	say();
	goto labelFunc041A_040F;
labelFunc041A_040C:
	Func084D();
labelFunc041A_040F:
	UI_remove_answer("加入");
labelFunc041A_0416:
	case "包裹" attend labelFunc041A_0478:
	if (!(gflags[0x00D7] && (!gflags[0x008F]))) goto labelFunc041A_0475;
	message("「啊！我真希望你的手沒有滿到拿不下這個包裹。」");
	say();
	var0008 = UI_find_object(0xFFE6, 0x031E, 0xFE99, 0xFE99);
	var0009 = UI_set_last_created(var0008);
	var000A = UI_give_last_created(0xFE9C);
	if (!var000A) goto labelFunc041A_0463;
	message("「太好了！這就交給你了。你現在必須上路了！」*");
	say();
	gflags[0x008F] = true;
	abort;
labelFunc041A_0463:
	var000A = UI_give_last_created(0xFFE6);
	message("「聖者！我厭倦了！請在你的物品欄騰出空間來放包裹！」*");
	say();
	abort;
	goto labelFunc041A_0478;
labelFunc041A_0475:
	Func0851();
labelFunc041A_0478:
	case "送達的包裹" attend labelFunc041A_0492:
	message("「恭喜，聖者，我們感謝你成功地將包裹送到 Minoc 的 Elynor 手中。現在，在你加入友誼會之前，我們還有另一項任務要交給你。因為你成功送達了包裹，證明了你配得執行另一項任務。」");
	say();
	UI_remove_answer("送達的包裹");
	UI_add_answer("任務");
labelFunc041A_0492:
	case "包裹已送達" attend labelFunc041A_0512:
	message("「聖者，你把包裹交給 Minoc 的 Elynor 了嗎？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc041A_04E4;
	message("「你打開包裹了嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc041A_04C8;
	message("「你知道你被指示不能打開它。我們信任你會嚴格遵守指示，但這份信任被打破了。」");
	say();
	UI_add_answer("任務");
	goto labelFunc041A_04CC;
labelFunc041A_04C8:
	message("「Minoc 的 Elynor 可不是這麼跟我們說的。我們信任你會嚴格遵守指示，但這份信任被打破了。");
	say();
labelFunc041A_04CC:
	if (!gflags[0x011E]) goto labelFunc041A_04D6;
	message("「我了解到包裹裡的內容物也不見了，這確實非常嚴重！");
	say();
labelFunc041A_04D6:
	message("「恐怕如果你要真正開始與友誼會同行，你必須為我們執行一項任務作為信任的考驗。」");
	say();
	UI_add_answer("任務");
	goto labelFunc041A_050B;
labelFunc041A_04E4:
	message("Batlin 驚訝地睜大了眼睛。");
	say();
	message("「發生了什麼事？你把包裹弄丟了嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc041A_0506;
	message("「嘖，嘖，嘖。這太不幸了。我們信任你能送達包裹，但這份信任被打破了。恐怕如果你要真正開始與友誼會同行，你必須為我們執行一項任務作為信任的考驗。」");
	say();
	UI_add_answer("任務");
	goto labelFunc041A_050B;
labelFunc041A_0506:
	message("「請送達我們的包裹，聖者。等你完成了，我們還有更多事要談。」*");
	say();
	abort;
labelFunc041A_050B:
	UI_remove_answer("包裹已送達");
labelFunc041A_0512:
	case "任務" attend labelFunc041A_0530:
	message("「你要去 Destard 地城，它就在 Trinsic 西邊的山裡。別擔心，那裡完全荒廢了。在那裡你會找到一個裝有友誼會資金的箱子，那是幾天前為了安全起見而藏起來的。你會認出這個箱子，因為裡面不僅有金幣，還有兩個友誼會徽章。那個地點也很可能標有友誼會的法杖。把這些資金帶回來給我們，一塊金幣都不能少，你就能成功完成你的任務。不用把箱子帶回來，只要帶金幣就好。現在，你該上路了！」*");
	say();
	gflags[0x008E] = true;
	Func0911(0x0064);
	UI_remove_answer("任務");
	abort;
labelFunc041A_0530:
	case "箱子" attend labelFunc041A_0556:
	message("「啊對，你從 Destard 地城回來了！等等！我沒看到你要帶回來的友誼會資金！發生了什麼事？！」");
	say();
	UI_add_answer(["攔路強盜", "怪物", "海盜", "船沉了"]);
	UI_remove_answer("箱子");
labelFunc041A_0556:
	case "攔路強盜" attend labelFunc041A_0570:
	message("「哎呀，你的故事太荒誕了！我拒絕相信！」 Batlin 惱怒地嗤之以鼻。");
	say();
	UI_remove_answer("攔路強盜");
	UI_add_answer("加入");
labelFunc041A_0570:
	case "怪物" attend labelFunc041A_0596:
	message("「怪物！ Destard 地城裡潛伏著怪物？！好吧，我對你遭遇的不便感到抱歉。」");
	say();
	UI_remove_answer(["怪物", "攔路強盜", "船沉了", "海盜"]);
	UI_add_answer("加入");
labelFunc041A_0596:
	case "海盜" attend labelFunc041A_05B0:
	message("「你肯定能編出更好的理由！如果你只是不想回答我的問題，你為什麼直說？」");
	say();
	UI_remove_answer("海盜");
	UI_add_answer("加入");
labelFunc041A_05B0:
	case "船沉了" attend labelFunc041A_05CA:
	message("Batlin 慢慢地翻了個白眼。「你應該去當吟遊詩人，你總是拿這種故事來娛樂我！」");
	say();
	UI_remove_answer("船沉了");
	UI_add_answer("加入");
labelFunc041A_05CA:
	case "徽章" attend labelFunc041A_0605:
	var0002 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	if (!var0002) goto labelFunc041A_05FE;
	message("「容我為你獻上你的友誼會徽章。」 Batlin 把徽章交給你。「請——隨時佩戴徽章。立刻把它戴到你的脖子上！喔，還有……歡迎加入友誼會，聖者。」");
	say();
	gflags[0x0090] = true;
	UI_remove_answer("徽章");
	goto labelFunc041A_0605;
labelFunc041A_05FE:
	message("「你無法接收友誼會徽章。你負重太多了！」*");
	say();
	goto labelFunc041A_0690;
labelFunc041A_0605:
	case "蘋果" attend labelFunc041A_0618:
	message("「既然你來了，請隨意享用蘋果。我確信你會發現這是全 Britannia 最棒的。它們是皇家果園提供給友誼會的。」");
	say();
	UI_remove_answer("蘋果");
labelFunc041A_0618:
	case "聲音" attend labelFunc041A_0645:
	if (!gflags[0x0096]) goto labelFunc041A_0633;
	message("「一旦一個人與友誼會同行夠久，並將內在力量三位一體應用於生活，他就能清除大腦中所有衝突、起反效果的思想，達到可以實際聽到內無理智聲音的程度。這個理智的聲音是你內心的核心，透過純粹的本能、智慧和無可挑剔的邏輯來引導你。一旦人開始傾聽它並跟隨它的引導，人就達到了啟迪的最高境界。也許有一天你也能聽到它。」");
	say();
	Func0911(0x0014);
	goto labelFunc041A_063E;
labelFunc041A_0633:
	message("「只有現任或潛在的友誼會成員才能了解『聲音』的概念。當你參加友誼會考驗時，我可以告訴你更多。」");
	say();
	UI_add_answer("考驗");
labelFunc041A_063E:
	UI_remove_answer("聲音");
labelFunc041A_0645:
	case "考驗" attend labelFunc041A_066F:
	message("「噢，你準備好加入友誼會了嗎？」");
	say();
	if (!Func090A()) goto labelFunc041A_065D;
	Func084D();
	goto labelFunc041A_0668;
labelFunc041A_065D:
	message("「在你準備好加入之前，我不能告訴你更多關於考驗的事。」");
	say();
	UI_add_answer("加入");
labelFunc041A_0668:
	UI_remove_answer("考驗");
labelFunc041A_066F:
	case "冥想靜修處" attend labelFunc041A_0682:
	message("「那裡是個遠離日常壓力與煩擾的靜修處，友誼會的新成員可以去那裡學習友誼會的理念。它位於巨蛇要塞 (Serpent's Hold) 東邊的一座島上。」");
	say();
	UI_remove_answer("冥想靜修處");
labelFunc041A_0682:
	case "告辭" attend labelFunc041A_068D:
	goto labelFunc041A_0690;
labelFunc041A_068D:
	goto labelFunc041A_0271;
labelFunc041A_0690:
	endconv;
	message("「後會有期，聖者。」*");
	say();
labelFunc041A_0695:
	if (!(event == 0x0000)) goto labelFunc041A_06A3;
	Func092E(0xFFE6);
labelFunc041A_06A3:
	return;
}


