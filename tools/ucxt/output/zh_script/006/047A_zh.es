#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047A object#(0x47A) ()
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
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;

	if (!(event == 0x0001)) goto labelFunc047A_054A;
	UI_show_npc_face(0xFF86, 0x0000);
	var0000 = Func0909();
	var0001 = UI_is_pc_female();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF86));
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0004 = Func08F7(0xFF85);
	if (!(!gflags[0x0174])) goto labelFunc047A_005F;
	message("一位漂亮的女人對你露出友好的笑容，然後羞怯地將目光移開。");
	say();
	gflags[0x0174] = true;
	goto labelFunc047A_0069;
labelFunc047A_005F:
	message("「再次歡迎你，");
	message(var0000);
	message("，」Ophelia 說。");
	say();
labelFunc047A_0069:
	if (!gflags[0x02D7]) goto labelFunc047A_0076;
	UI_add_answer("Cosmo");
labelFunc047A_0076:
	if (!gflags[0x016E]) goto labelFunc047A_0083;
	UI_add_answer("Sprellic");
labelFunc047A_0083:
	var0005 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0006 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0007 = UI_is_dead(UI_get_npc_object(0xFF81));
	var0008 = UI_is_dead(UI_get_npc_object(0xFF84));
	if (!gflags[0x0165]) goto labelFunc047A_00EA;
	if (!(var0005 && (var0006 && var0007))) goto labelFunc047A_00D6;
	UI_add_answer("贏得的錢");
labelFunc047A_00D6:
	if (!var0008) goto labelFunc047A_00EA;
	UI_add_answer("Sprellic 死了");
	UI_remove_answer("Sprellic");
labelFunc047A_00EA:
	converse attend labelFunc047A_053F;
	case "姓名" attend labelFunc047A_0106:
	message("「我的名字是 Ophelia，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc047A_0106:
	case "職業" attend labelFunc047A_0122:
	message("「我是個酒館女侍。在 Jhelom 這裡的舖位與凳子(Bunk and Stool)，大部分的工作都是我在做。」");
	say();
	UI_add_answer(["職業", "舖位與凳子", "Jhelom"]);
labelFunc047A_0122:
	case "職業" attend labelFunc047A_0149:
	message("「自從老闆 Sprellic 被傷痕圖書館的那三個學生挑戰決鬥後，他就一直忙著準備。我一直獨自經營這個地方……我想 Daphne 也算是有幫忙啦。」");
	say();
	gflags[0x016E] = true;
	UI_remove_answer("職業");
	UI_add_answer(["Sprellic", "圖書館", "Daphne"]);
labelFunc047A_0149:
	case "Daphne" attend labelFunc047A_01A6:
	message("「說真的，我無法想像你為什麼會對她感興趣。」她發出一陣沙啞的笑聲。*");
	say();
	var0004 = Func08F7(0xFF85);
	if (!var0004) goto labelFunc047A_019F;
	UI_show_npc_face(0xFF85, 0x0000);
	message("「我聽到了，Ophelia。妳這個惡毒的娘們！」*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("「好了，好了，Daphne。脾氣，脾氣！我們可不想除了妳難看的臉之外，還用惡劣的脾氣把顧客嚇跑！」*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「巫婆！」*");
	say();
	UI_remove_npc_face(0xFF85);
	UI_show_npc_face(0xFF86, 0x0000);
labelFunc047A_019F:
	UI_remove_answer("Daphne");
labelFunc047A_01A6:
	case "舖位與凳子" attend labelFunc047A_01CC:
	message("「據說這間酒吧確實發生過許多奇怪的事情。最近，這裡除了是提供精美食物和飲料的旅店兼酒館外，還成了下注場所。」");
	say();
	UI_remove_answer("舖位與凳子");
	UI_add_answer(["奇怪", "食物", "房間", "下注"]);
labelFunc047A_01CC:
	case "Jhelom" attend labelFunc047A_01DF:
	message("「這是一個工作環境相當粗獷的地方，但」她私下對你低語，「我必須承認，我發現自己被生活在這裡的那一類男人所吸引。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc047A_01DF:
	case "圖書館" attend labelFunc047A_01F2:
	message("「你現在肯定聽說過我們著名的戰士學校了！你是哪門子的世界旅行者？別回答。這只是一個修辭問句，」她嗤之以鼻。");
	say();
	UI_remove_answer("圖書館");
labelFunc047A_01F2:
	case "食物" attend labelFunc047A_0205:
	message("「這件事你必須去找 Daphne。你總不會期望我必須進廚房吧？」Ophelia 笑著。");
	say();
	UI_remove_answer("食物");
labelFunc047A_0205:
	case "房間" attend labelFunc047A_02CF:
	if (!(var0003 == 0x0010)) goto labelFunc047A_02C4;
	message("「只要 5 枚金幣，你就能得到一間可愛的房間。你想留宿一晚嗎？」");
	say();
	if (!Func090A()) goto labelFunc047A_02BD;
	var0009 = UI_get_party_list();
	var000A = 0x0000;
	enum();
labelFunc047A_022F:
	for (var000D in var0009 with var000B to var000C) attend labelFunc047A_0247;
	var000A = (var000A + 0x0001);
	goto labelFunc047A_022F;
labelFunc047A_0247:
	var000E = (var000A * 0x0005);
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000F >= var000E)) goto labelFunc047A_02B0;
	var0010 = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!var0010) goto labelFunc047A_02A3;
	message("「這是你的鑰匙。請注意，它只能在這家店裡使用，而且只能用一次。」");
	say();
	var0011 = UI_remove_party_items(var000E, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc047A_02AD;
labelFunc047A_02A3:
	message("「抱歉，");
	message(var0000);
	message("，在你拿走房間鑰匙之前，你必須減掉一些重量，呃，一些包袱。」");
	say();
labelFunc047A_02AD:
	goto labelFunc047A_02BA;
labelFunc047A_02B0:
	message("「我真的很抱歉，");
	message(var0000);
	message("，但房間費用比你擁有的金幣還多。」");
	say();
labelFunc047A_02BA:
	goto labelFunc047A_02C1;
labelFunc047A_02BD:
	message("「我想是我們的房間不夠好吧，」她皺著眉頭說。");
	say();
labelFunc047A_02C1:
	goto labelFunc047A_02C8;
labelFunc047A_02C4:
	message("「我現在不在工作，所以請不要用我還在工作的態度對我說話。」");
	say();
labelFunc047A_02C8:
	UI_remove_answer("房間");
labelFunc047A_02CF:
	case "Sprellic" attend labelFunc047A_02E9:
	message("「沒有人比我更了解老 Sprellic 了。雖然他看起來不像，但他很可能是全不列顛尼亞(Britannia)最致命的戰鬥大師。」");
	say();
	UI_remove_answer("Sprellic");
	UI_add_answer("大師");
labelFunc047A_02E9:
	case "大師" attend labelFunc047A_0303:
	message("「在他擊敗傷痕圖書館的戰士後，他可能會開一所自己的學校來教授他獨特的戰鬥風格。」");
	say();
	UI_remove_answer("大師");
	UI_add_answer("學校");
labelFunc047A_0303:
	case "學校" attend labelFunc047A_031D:
	message("「那將是一所很棒的戰鬥學校。已經有男女戰士來到 Jhelom 成為 Sprellic 的學生。他們都渴望知道我現在就能告訴你的秘密。」");
	say();
	UI_remove_answer("學校");
	UI_add_answer("秘密");
labelFunc047A_031D:
	case "秘密" attend labelFunc047A_033E:
	if (!(!var0001)) goto labelFunc047A_0333;
	message("Ophelia 示意你靠近她。她對你低語。「Sprellic 其實就是經過這麼多年後回到我們身邊的聖者。」她莊嚴地點頭。");
	say();
	goto labelFunc047A_0337;
labelFunc047A_0333:
	message("Ophelia 示意你靠近她。她對你低語。「Sprellic 可以呼喚聖者來當他的冠軍戰士。」她莊嚴地點頭。");
	say();
labelFunc047A_0337:
	UI_remove_answer("秘密");
labelFunc047A_033E:
	case "奇怪" attend labelFunc047A_0351:
	message("「以防你沒注意到，這是一個粗獷的城鎮。我們在這裡看過各種類型的古怪人物。」她仔細打量著你。");
	say();
	UI_remove_answer("奇怪");
labelFunc047A_0351:
	case "下注" attend labelFunc047A_044E:
	if (!(var0006 || (var0005 || (var0007 || var0008)))) goto labelFunc047A_0372;
	message("「抱歉，由於……呃，其中一方或多方不幸離世，所有的下注都取消了。」");
	say();
	goto labelFunc047A_0447;
labelFunc047A_0372:
	message("「我正在接受關於 Sprellic 決鬥的下注。你想下注嗎？」");
	say();
	var0012 = Func090A();
	if (!var0012) goto labelFunc047A_0443;
	message("「你想下多少注，賭 Sprellic 會擊敗他的所有三名挑戰者？」");
	say();
labelFunc047A_0386:
	var0012 = UI_input_numeric_value(0x0000, 0x00C8, 0x000A, 0x0000);
	if (!(var0012 == 0x0000)) goto labelFunc047A_03AA;
	message("「也許你對自己的信念並不那麼認真。或許 Daphne 會接受你的下注。」");
	say();
	goto labelFunc047A_0440;
labelFunc047A_03AA:
	message("「你願意下 ");
	message(var0012);
	message(" 枚金幣賭 Sprellic 會贏？」");
	say();
	var0013 = Func090A();
	if (!(!var0013)) goto labelFunc047A_03CB;
	message("「很好。你想下注多少？」");
	say();
	goto labelFunc047A_0386;
	goto labelFunc047A_0440;
labelFunc047A_03CB:
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000F >= var0012)) goto labelFunc047A_043C;
	message("「很好。我給你代表你金幣的籌碼。每個籌碼價值 10 枚金幣。如果 Sprellic 贏了，你可以來找我拿兩倍數量的金幣。~~「如果他輸了，");
	message(var0000);
	message("，你的籌碼當然就一文不值了。」");
	say();
	var0014 = UI_add_party_items((var0012 / 0x000A), 0x0399, 0xFE99, 0x0000, false);
	if (!var0014) goto labelFunc047A_0435;
	var0015 = UI_remove_party_items(var0012, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0165] = true;
	message("「我很快會再見到你的，");
	message(var0000);
	message("。」你注意到她正強忍著咯咯笑。「當你回來領取你贏得的錢時。」有那麼一刻，她似乎無法與你眼神交流。");
	say();
	goto labelFunc047A_0439;
labelFunc047A_0435:
	message("「當你背包裡有足夠空間裝這些籌碼時，你必須晚點再來。」");
	say();
labelFunc047A_0439:
	goto labelFunc047A_0440;
labelFunc047A_043C:
	message("「你沒有你想要下注的金幣數量！你是在試圖騙我嗎？」");
	say();
labelFunc047A_0440:
	goto labelFunc047A_0447;
labelFunc047A_0443:
	message("「那麼如果你想賭 Sprellic 輸，你可以去找 Daphne，但我警告你，你這是在把錢丟進水裡！」");
	say();
labelFunc047A_0447:
	UI_remove_answer("下注");
labelFunc047A_044E:
	case "贏得的錢" attend labelFunc047A_04C5:
	if (!(!gflags[0x016F])) goto labelFunc047A_04BA;
	var0016 = UI_count_objects(0xFE9B, 0x0399, 0xFE99, 0x0000);
	var0017 = (var0016 * 0x0014);
	var0018 = UI_add_party_items(var0017, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0018) goto labelFunc047A_04B3;
	var0019 = UI_remove_party_items(var0016, 0x0399, 0xFE99, 0x0000, false);
	message("「我看到你回來領取你贏得的錢了。」她聳聳肩，把錢付給了你。");
	say();
	gflags[0x016F] = true;
	goto labelFunc047A_04B7;
labelFunc047A_04B3:
	message("「你帶不了那麼多金幣！等你一次拿得走所有贏得的錢再來！」");
	say();
labelFunc047A_04B7:
	goto labelFunc047A_04BE;
labelFunc047A_04BA:
	message("「你已經領過你贏得的錢了！」");
	say();
labelFunc047A_04BE:
	UI_remove_answer("贏得的錢");
labelFunc047A_04C5:
	case "Cosmo" attend labelFunc047A_0519:
	message("「誰？哦，他是個當地的男孩，偶爾會來這裡對我發花痴。別管他，我也不管他。」");
	say();
	if (!var0004) goto labelFunc047A_0512;
	UI_show_npc_face(0xFF85, 0x0000);
	message("「哎呀，妳怎麼能這樣談論即將成為妳未婚夫的人！終於，我可以讓妳搬出我屋子了！和妳共同生活的每一刻都令人難以忍受！」*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("「別高興得太早，親愛的 Daphne！我對我們的婚姻提出了一個條件，而可憐的 Cosmo 永遠也無法達成它！」");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「妳永遠不知道！想到妳穿著婚紗，新郎 Cosmo 站在妳身邊的畫面，就實在太美妙了！也許他就是那個最終能教妳成為一個淑女的男人！」");
	say();
	UI_remove_npc_face(0xFF85);
	UI_show_npc_face(0xFF86, 0x0000);
labelFunc047A_0512:
	UI_remove_answer("Cosmo");
labelFunc047A_0519:
	case "Sprellic 死了" attend labelFunc047A_0531:
	message("「哼！如果你賭他輸，我想你就要發財了！我敢打賭，殺死他的人也是你！」");
	say();
	message("她帶著冷笑轉身背對你。*");
	say();
	UI_remove_answer("Sprellic 死了");
	abort;
labelFunc047A_0531:
	case "告辭" attend labelFunc047A_053C:
	goto labelFunc047A_053F;
labelFunc047A_053C:
	goto labelFunc047A_00EA;
labelFunc047A_053F:
	endconv;
	message("「一定要再來拜訪我們，");
	message(var0000);
	message("。」*");
	say();
labelFunc047A_054A:
	if (!(event == 0x0000)) goto labelFunc047A_0558;
	Func092E(0xFF86);
labelFunc047A_0558:
	return;
}


