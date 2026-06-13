#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0402 object#(0x402) ()
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
	var var0012;

	if (!(event == 0x0001)) goto labelFunc0402_0659;
	var0000 = Func0908();
	var0001 = "聖者";
	var0002 = UI_get_party_list();
	var0003 = UI_is_pc_female();
	var0004 = UI_get_npc_object(0xFFFE);
	var0005 = false;
	var0006 = false;
	var0007 = false;
	if (!(!gflags[0x0015])) goto labelFunc0402_004C;
	UI_show_npc_face(0xFFFE, 0x0001);
	goto labelFunc0402_006D;
labelFunc0402_004C:
	if (!(var0004 in var0002)) goto labelFunc0402_0063;
	UI_show_npc_face(0xFFFE, 0x0000);
	goto labelFunc0402_006D;
labelFunc0402_0063:
	UI_show_npc_face(0xFFFE, 0x0001);
labelFunc0402_006D:
	if (!gflags[0x0046]) goto labelFunc0402_0079;
	var0008 = var0000;
labelFunc0402_0079:
	if (!gflags[0x0047]) goto labelFunc0402_0085;
	var0008 = var0001;
labelFunc0402_0085:
	var0009 = Func0909();
	if (!(!gflags[0x0015])) goto labelFunc0402_012B;
	message("你看到一個看起來只有十幾歲的男孩。他渾身髒兮兮，不修邊幅。他看起來好像剛哭過，但一看到你，他立刻坐直身子，眼神變得銳利起來。");
	say();
	message("「你是誰？你想要什麼？」 你意識到男孩手裡拿著一把彈弓。");
	say();
	message("你面對著男孩，告訴他你是誰。");
	say();
	var000A = Func090B([var0000, var0001]);
	if (!(var000A == var0000)) goto labelFunc0402_00C8;
	message("「所以呢？這有什麼了不起的？」");
	say();
	var0008 = var0000;
	gflags[0x0046] = true;
	goto labelFunc0402_00D6;
labelFunc0402_00C8:
	message("「我上次聽到『這個』的時候，我還從 Eodon 的史前生物身上摔了下來呢！」");
	say();
	var0008 = var0001;
	gflags[0x0047] = true;
labelFunc0402_00D6:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0402_0116;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「孩子，這位可是聖者！ ");
	say();
	if (!(!var0003)) goto labelFunc0402_0101;
	message("我保證他是！他可是來幫你的！」");
	say();
	goto labelFunc0402_0105;
labelFunc0402_0101:
	message("我保證她是！她可是來幫你的！」");
	say();
labelFunc0402_0105:
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0001);
labelFunc0402_0116:
	message("男孩瞇起眼睛，打量著你。他慢慢放下武器，準備隨時應付可能的陷阱。你很欣賞這個男孩與陌生人打交道的明顯經驗。");
	say();
	message("你和 Spark 互相盯著對方。他不知道該怎麼辦。最後，他點了點頭。「好吧。我相信你。你長得像我看過的畫像。對不起， ");
	message(var0009);
	message("。」");
	say();
	gflags[0x0015] = true;
	goto labelFunc0402_0135;
labelFunc0402_012B:
	message("「什麼事？ ");
	message(var0008);
	message("？」 Spark 問道。「你想要什麼？」");
	say();
labelFunc0402_0135:
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
	if (!gflags[0x0048]) goto labelFunc0402_0155;
	UI_add_answer("鑰匙");
labelFunc0402_0155:
	if (!gflags[0x003E]) goto labelFunc0402_0162;
	UI_remove_answer("鑰匙");
labelFunc0402_0162:
	if (!(var0004 in var0002)) goto labelFunc0402_0173;
	UI_add_answer("離隊");
labelFunc0402_0173:
	if (!(gflags[0x0049] && (!(var0004 in var0002)))) goto labelFunc0402_0189;
	UI_add_answer("加入");
labelFunc0402_0189:
	if (!(gflags[0x003E] && (!gflags[0x0064]))) goto labelFunc0402_01A4;
	UI_add_answer(["金幣", "徽章", "卷軸"]);
labelFunc0402_01A4:
	converse attend labelFunc0402_0642;
	case "姓名" attend labelFunc0402_01BA:
	message("「大家一直都叫我 Spark。」");
	say();
	UI_remove_answer("姓名");
labelFunc0402_01BA:
	case "職業" attend labelFunc0402_01D6:
	message("「我沒有工作。我才十四歲，所以我正在學怎麼在鐵匠鋪裡成為父親最好的幫手，」 他驕傲地說。但隨後他突然意識到了什麼，這讓他感到恐懼。「現在父親死了，我成了孤兒！」");
	say();
	UI_add_answer(["鐵匠鋪", "父親", "孤兒"]);
labelFunc0402_01D6:
	case "鐵匠鋪" attend labelFunc0402_01E9:
	message("「父親是 Britannia 最好的鐵匠。總是有來自四面八方的人找他打造各種東西。」");
	say();
	UI_remove_answer("鐵匠鋪");
labelFunc0402_01E9:
	case "孤兒" attend labelFunc0402_01FC:
	message("「我母親很久以前就過世了。我對她只有一點點印象。」");
	say();
	UI_remove_answer("孤兒");
labelFunc0402_01FC:
	case "謀殺" attend labelFunc0402_0252:
	if (!(!gflags[0x0043])) goto labelFunc0402_0222;
	message("「我不敢相信父親死了。還有可憐的 Inamo 也是。太奇怪了。我『夢見』了這件事。嗯，從某種意義上來說。~~昨晚我做了一個關於父親的惡夢。我夢見他尖叫，這把我吵醒了。我環顧屋內，但他不在床上。我完全清醒了，所以我出去找他。」");
	say();
	UI_add_answer(["Inamo", "惡夢", "尋找"]);
	goto labelFunc0402_024B;
labelFunc0402_0222:
	message("「我相信你一定能找到殺死父親的兇手！」");
	say();
	message("「你想讓我重複，我所知道關於謀殺案的所有事嗎？」");
	say();
	if (!Func090A()) goto labelFunc0402_0247;
	message("「你想知道什麼？」");
	say();
	UI_add_answer(["我的故事", "鑰匙", "箱子"]);
	goto labelFunc0402_024B;
labelFunc0402_0247:
	message("「好吧。」");
	say();
labelFunc0402_024B:
	UI_remove_answer("謀殺");
labelFunc0402_0252:
	case "箱子" attend labelFunc0402_0272:
	if (!gflags[0x003E]) goto labelFunc0402_0267;
	message("「我不確定是不是同一個，但我一兩天前好像看到父親拿著一個和箱子裡一模一樣的卷軸。我知道他在為某人製作特別的東西。我相當肯定是他在鐵匠鋪裡做的。至於那個徽章，他平時都戴著。我不知道為什麼它會在箱子裡。還有那些金幣——我這輩子從沒見過這麼多金幣。我想像不出父親為什麼會有這些錢。」");
	say();
	goto labelFunc0402_026B;
labelFunc0402_0267:
	message("「你應該試著打開那個箱子。」");
	say();
labelFunc0402_026B:
	UI_remove_answer("箱子");
labelFunc0402_0272:
	case "我的故事" attend labelFunc0402_0292:
	message("「太奇怪了。我『夢見』了這件事。嗯，從某種意義上來說。~~昨晚我做了一個關於父親的惡夢。我夢見他尖叫，這把我吵醒了。我環顧屋內，但他不在床上。我完全清醒了，所以我出去找他。」");
	say();
	UI_remove_answer("我的故事");
	UI_add_answer(["尋找", "惡夢"]);
labelFunc0402_0292:
	case "惡夢" attend labelFunc0402_02A5:
	message("「我知道這聽起來很傻，但是...我夢見一個滿臉通紅的巨大男人俯視著一切，然後...他往下看...並且注意到了父親...這就是我記得的全部。」");
	say();
	UI_remove_answer("惡夢");
labelFunc0402_02A5:
	case "尋找" attend labelFunc0402_02BF:
	message("「不，我沒有找到他。至少沒有馬上找到。但我確實看到了一些東西。」");
	say();
	UI_add_answer("一些東西");
	UI_remove_answer("尋找");
labelFunc0402_02BF:
	case "一些東西" attend labelFunc0402_02DF:
	message("「我當時在馬廄前面。我看到一個男人和一隻沒有翅膀的石像鬼從建築物後面跑出來。他們朝著碼頭跑去。然後我走進去，發現了...父親。」~~Spark 聲音發抖，並開始低聲啜泣。");
	say();
	UI_add_answer(["男人", "石像鬼"]);
	UI_remove_answer("一些東西");
labelFunc0402_02DF:
	case "男人" attend labelFunc0402_02F9:
	message("「關於他我只看到，那個男人的右手是個鉤子。」");
	say();
	UI_add_answer("鉤子");
	UI_remove_answer("男人");
labelFunc0402_02F9:
	case "石像鬼" attend labelFunc0402_030C:
	message("「我分不清石像鬼的長相。除了他沒有翅膀以外，我無法認出他。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc0402_030C:
	case "鉤子" attend labelFunc0402_03DD:
	if (!(!gflags[0x0043])) goto labelFunc0402_03D2;
	if (!(!(var0004 in var0002))) goto labelFunc0402_03CB;
	message("「你會去找出那個帶鉤子的男人嗎？讓我幫你吧！」男孩懇求道。他的淚水止住了，臉上露出堅定而充滿力量的表情。");
	say();
	gflags[0x0043] = true;
	message("「帶我一起去！拜託！我必須為父親報仇！如果你不帶我去，我也會跟著你的！」");
	say();
	message("男孩現在非常興奮。「我是彈弓專家！我幾乎每發都能打中下水道老鼠！而且我很小隻，所以...我吃得不多！拜託帶我走！拜託讓我加入你！」");
	say();
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0402_0378;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 對你低聲說。「我不知道在路上帶著一個孩子好不好， ");
	message(var0009);
	message("...」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0001);
	message("突然間，Spark 發射了他的彈弓。他的目標，一隻在 Iolo 頭頂盤旋的小蒼蠅，被硬生生地擊落了。你大笑，而 Iolo 嚇得驚叫、跳開，一邊咒罵一邊用手指梳理頭髮。 ");
	say();
	UI_play_sound_effect(0x0001);
	goto labelFunc0402_037C;
labelFunc0402_0378:
	message("突然間，Spark 發射了他的彈弓。他的目標，一隻在你頭頂盤旋的小蒼蠅，被硬生生地擊落了。 ");
	say();
labelFunc0402_037C:
	message("「我告訴過你我很厲害的！我可以加入嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0402_03B2;
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「萬歲！」 男孩高興地跳了起來。");
	say();
	UI_add_answer("離隊");
	UI_add_to_party(0xFFFE);
	goto labelFunc0402_03C4;
labelFunc0402_03B2:
	message("「好吧。」 男孩看起來很生氣。「但我還是會跟著你。」");
	say();
	UI_add_to_party(0xFFFE);
	UI_add_answer("離隊");
labelFunc0402_03C4:
	gflags[0x0049] = true;
	goto labelFunc0402_03CF;
labelFunc0402_03CB:
	message("「我知道你一定會找到那個男人的。」");
	say();
labelFunc0402_03CF:
	goto labelFunc0402_03D6;
labelFunc0402_03D2:
	message("「我知道你一定會找到那個男人的。」");
	say();
labelFunc0402_03D6:
	UI_remove_answer("鉤子");
labelFunc0402_03DD:
	case "加入" attend labelFunc0402_0443:
	message("「你總算又問我一次了！」");
	say();
	var000D = 0x0000;
	enum();
labelFunc0402_03F0:
	for (var0010 in var0002 with var000E to var000F) attend labelFunc0402_0408;
	var000D = (var000D + 0x0001);
	goto labelFunc0402_03F0;
labelFunc0402_0408:
	if (!(var000D < 0x0008)) goto labelFunc0402_0431;
	UI_add_to_party(0xFFFE);
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「萬歲！」");
	say();
	goto labelFunc0402_0435;
labelFunc0402_0431:
	message("「嗯，我想了想，你們那邊人好像太多了。我不喜歡人擠人。」");
	say();
labelFunc0402_0435:
	UI_remove_answer("加入");
	UI_add_answer("離隊");
labelFunc0402_0443:
	case "離隊" attend labelFunc0402_04CB:
	message("「別讓我走！」 Spark 哭喊道。「你真的要我走嗎？」 他用無辜的小狗眼神看著你。");
	say();
	var0011 = Func090A();
	if (!var0011) goto labelFunc0402_04C7;
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0001);
	message("「好吧，那我是要在這裡等你，還是你要我回 Trinsic 的家？」");
	say();
	UI_clear_answers();
	var000A = Func090B(["在這裡等", "回家"]);
	if (!(var000A == "在這裡等")) goto labelFunc0402_04AA;
	message("「好吧。我會在這裡等你回來，等你再次邀請我加入。」");
	say();
	UI_remove_from_party(0xFFFE);
	UI_set_schedule_type(UI_get_npc_object(0xFFFE), 0x000F);
	abort;
	goto labelFunc0402_04C4;
labelFunc0402_04AA:
	message("Spark 低下頭咕噥著，「那麼，再見了。」");
	say();
	UI_remove_from_party(0xFFFE);
	UI_set_schedule_type(UI_get_npc_object(0xFFFE), 0x000B);
	abort;
labelFunc0402_04C4:
	goto labelFunc0402_04CB;
labelFunc0402_04C7:
	message("「你不會後悔的！」");
	say();
labelFunc0402_04CB:
	case "父親" attend labelFunc0402_04E5:
	message("「父親是鐵匠。我不敢相信他被謀殺了！我不知道他有什麼敵人。除非是友誼會。」");
	say();
	UI_add_answer("友誼會");
	UI_remove_answer("父親");
labelFunc0402_04E5:
	case "友誼會" attend labelFunc0402_0503:
	message("「嗯，一開始他們跑來要我們加入時，還騷擾了父親和我。我想他們也是在做好事。很多人喜歡他們。父親去了一趟 Britain 並且參加了他們的一項測驗後，最終也加入了他們。」");
	say();
	UI_add_answer("測驗");
	gflags[0x003F] = true;
	UI_remove_answer("友誼會");
labelFunc0402_0503:
	case "測驗" attend labelFunc0402_0523:
	message("「我對這些測驗一無所知。我從來沒有參加過。也許你應該去問問友誼會分會的人。Klog。」");
	say();
	UI_add_answer(["分會", "Klog"]);
	UI_remove_answer("測驗");
labelFunc0402_0523:
	case "分會" attend labelFunc0402_0536:
	message("「友誼會在整個 Britannia 都有分會。」");
	say();
	UI_remove_answer("分會");
labelFunc0402_0536:
	case "Klog" attend labelFunc0402_0556:
	message("「他是這裡 Trinsic 友誼會分會的負責人。一個星期前，當 Klog 和他的兩個朋友過來找父親談話時，他和父親吵了起來。」");
	say();
	UI_add_answer(["爭執", "朋友"]);
	UI_remove_answer("Klog");
labelFunc0402_0556:
	case "爭執" attend labelFunc0402_0569:
	message("「我不知道他們在吵什麼。也許你應該去問 Klog。」");
	say();
	UI_remove_answer("爭執");
labelFunc0402_0569:
	case "朋友" attend labelFunc0402_057C:
	message("「我不記得他們長什麼樣子了。我沒認出他們。\t他們很可能也是友誼會的其他成員。」");
	say();
	UI_remove_answer("朋友");
labelFunc0402_057C:
	case "鑰匙" attend labelFunc0402_05BE:
	if (!gflags[0x003E]) goto labelFunc0402_0591;
	message("「那把鑰匙打開了我父親的箱子，對吧？」");
	say();
	goto labelFunc0402_05B7;
labelFunc0402_0591:
	var0012 = Func0931(0xFE9B, 0x0001, 0x0281, 0x00FD, 0xFE99);
	if (!var0012) goto labelFunc0402_05B3;
	message("「那看起來像是我父親箱子的鑰匙。我還在想它去哪了！」");
	say();
	goto labelFunc0402_05B7;
labelFunc0402_05B3:
	message("「什麼鑰匙？你有我父親箱子的鑰匙嗎？在哪裡？」");
	say();
labelFunc0402_05B7:
	UI_remove_answer("鑰匙");
labelFunc0402_05BE:
	case "金幣" attend labelFunc0402_05D9:
	message("男孩睜大了眼睛。「我根本不知道父親藏了這麼多錢！」");
	say();
	message("「如果你要去尋找那些殺死我父親的人，我想我可以把它交給你！」");
	say();
	UI_remove_answer("金幣");
	var0006 = true;
labelFunc0402_05D9:
	case "徽章" attend labelFunc0402_05F0:
	message("「父親是友誼會的成員。我不知道為什麼徽章會在箱子裡——他平時都戴著它。」");
	say();
	UI_remove_answer("徽章");
	var0007 = true;
labelFunc0402_05F0:
	case "卷軸" attend labelFunc0402_060E:
	message("「我不確定是不是同一個，但我一兩天前好像看到父親拿著一個跟那個一模一樣的卷軸。我知道他在為某人製作特別的東西。我相當肯定是他在鐵匠鋪裡做的。」");
	say();
	UI_add_answer("鐵匠鋪");
	UI_remove_answer("卷軸");
	var0005 = true;
labelFunc0402_060E:
	case "鐵匠鋪" attend labelFunc0402_0621:
	message("「它在城鎮的西南角。」");
	say();
	UI_remove_answer("鐵匠鋪");
labelFunc0402_0621:
	case "Inamo" attend labelFunc0402_0634:
	message("「他是個非常好的石像鬼。他幫了父親很多忙，還在馬廄裡幫忙做事。我想不通為什麼會有人想要殺他！」");
	say();
	UI_remove_answer("Inamo");
labelFunc0402_0634:
	case "告辭" attend labelFunc0402_063F:
	goto labelFunc0402_0642;
labelFunc0402_063F:
	goto labelFunc0402_01A4;
labelFunc0402_0642:
	endconv;
	message("「好吧，我晚點再跟你說。」");
	say();
	if (!(var0005 && (var0006 && var0007))) goto labelFunc0402_0659;
	gflags[0x0064] = true;
labelFunc0402_0659:
	if (!(event == 0x0000)) goto labelFunc0402_0662;
	abort;
labelFunc0402_0662:
	return;
}


