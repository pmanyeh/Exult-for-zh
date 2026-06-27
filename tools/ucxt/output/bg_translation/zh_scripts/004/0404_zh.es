#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0404 object#(0x404) ()
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
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0404_0508;
	talked_book = false;
	UI_show_npc_face(0xFFFC, 0x0000);
	if (!gflags[0x02EB]) goto labelFunc0404_003E;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0404_002E;
	message("「抱歉，我不加入小偷的行列。」");
	say();
	abort;
	goto labelFunc0404_003E;
labelFunc0404_002E:
	message("「好吧，我想你已經得到教訓了。我會重新加入。」");
	say();
	UI_add_to_party(0xFFFC);
	gflags[0x02EB] = false;
	abort;
labelFunc0404_003E:
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFC);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFD);
	var0006 = Func08F7(0xFFFE);
	var0007 = UI_is_dead(UI_get_npc_object(0xFFFF));
	var0008 = UI_is_dead(UI_get_npc_object(0xFFFD));
	var0009 = UI_is_dead(UI_get_npc_object(0xFFFE));
	var000A = UI_is_dead(UI_get_npc_object(0xFF84));
	var000B = UI_is_dead(UI_get_npc_object(0xFF83));
	var000C = UI_is_dead(UI_get_npc_object(0xFF82));
	var000D = UI_is_dead(UI_get_npc_object(0xFF81));
	var000E = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(var0002 in var0001)) goto labelFunc0404_0100;
	UI_add_answer("離隊");
labelFunc0404_0100:
	if (!gflags[0x0006]) goto labelFunc0404_010D;
	UI_add_answer("友誼會");
labelFunc0404_010D:
	if (!var0006) goto labelFunc0404_011A;
	UI_add_answer("Spark");
labelFunc0404_011A:
	if (!(!gflags[0x0017])) goto labelFunc0404_012C;
	message("你看到你的好朋友 Dupre 熟悉的面孔。雖然老了一些，但他似乎仍然充滿了他平時那種隨性的幽默感。");
	say();
	gflags[0x0017] = true;
	goto labelFunc0404_0136;
labelFunc0404_012C:
	message("「我有什麼能幫你的嗎，");
	message(var0003);
	message("？」 Dupre 爵士問道。");
	say();
labelFunc0404_0136:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文譯本");
	}
	converse attend labelFunc0404_0503;
	case "古文譯本" attend labelFunc0404_TransBook:
	message("「古文譯本？聽起來是個好東西！只要它能幫我們更快找到哪裡有最好的酒館，或是看懂那些該死的酒單，我就完全贊成。」");
	say();
	message("「乾杯！為了不用再盯著那些酒單發愁！」");
	say();
	talked_book = true;
	UI_remove_answer("古文譯本");
labelFunc0404_TransBook:
	case "姓名" attend labelFunc0404_01A7:
	message("「哎呀，你不認得我了嗎？是我，不列顛王！」他笑著說。「當你看到你的朋友 Dupre 時，你認不出他來了嗎，");
	message(var0003);
	message("？」");
	say();
	if (!var0005) goto labelFunc0404_0177;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「別這麼謙虛， Dupre 爵士。你應該告訴聖者，自從你們上次見面以來，你已經被封為騎士了。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 爵士看起來相當尷尬。「嗯，是的，我本來打算說的。」");
	say();
	goto labelFunc0404_01A0;
labelFunc0404_0177:
	if (!var0004) goto labelFunc0404_01A0;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「別這麼謙虛， Dupre 爵士。你應該告訴聖者，自從你們上次見面以來，你已經被封為騎士了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 爵士看起來相當尷尬。「嗯，是的，我本來打算說的。」");
	say();
labelFunc0404_01A0:
	UI_remove_answer("姓名");
labelFunc0404_01A7:
	case "職業" attend labelFunc0404_01DE:
	if (!(!gflags[0x016D])) goto labelFunc0404_01D3;
	message("「我有段時間沒見到我們的老朋友了。目前我正在對不列顛尼亞各式各樣的飲酒場所進行研究。目前我大約完成了一半。但這並不能阻止我跟你一起冒險，");
	message(var0003);
	message("。」");
	say();
	UI_add_answer(["朋友們", "Jhelom", "加入"]);
	goto labelFunc0404_01DE;
labelFunc0404_01D3:
	message("「我目前的工作是盡可能讓你和你的朋友們遠離麻煩！」他眨眨眼，給了你一個和善的笑容。");
	say();
	UI_add_answer("朋友們");
labelFunc0404_01DE:
	case "朋友們" attend labelFunc0404_01FE:
	message("「我們的老朋友—— Iolo 和 Shamino 。」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Iolo", "Shamino"]);
labelFunc0404_01FE:
	case "加入" attend labelFunc0404_025A:
	var000F = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0404_0214:
	for (var0012 in var0001 with var0010 to var0011) attend labelFunc0404_022C;
	var000F = (var000F + 0x0001);
	goto labelFunc0404_0214;
labelFunc0404_022C:
	if (!(var000F < 0x0008)) goto labelFunc0404_024F;
	message("「能再次加入你的冒險，對我來說既是榮幸也是樂事。」");
	say();
	gflags[0x016D] = true;
	UI_add_to_party(0xFFFC);
	UI_add_answer("離隊");
	goto labelFunc0404_0253;
labelFunc0404_024F:
	message("「嗯。對我來說太擁擠了。如果你的隊伍減少了一兩名成員，再回來找我吧。」");
	say();
labelFunc0404_0253:
	UI_remove_answer("加入");
labelFunc0404_025A:
	case "離隊" attend labelFunc0404_02D0:
	message("「你是想讓我在這裡等，還是真的想讓我離開回家？」");
	say();
	UI_clear_answers();
	var0013 = Func090B(["在這裡等", "回家"]);
	if (!(var0013 == "在這裡等")) goto labelFunc0404_02A4;
	message("「很好。我會等待你的歸來。」*");
	say();
	UI_remove_from_party(0xFFFC);
	UI_set_schedule_type(UI_get_npc_object(0xFFFC), 0x000F);
	gflags[0x016D] = false;
	abort;
	goto labelFunc0404_02D0;
labelFunc0404_02A4:
	message("「如果那真的是你的願望，我將離開你的隊伍。如果你再需要我，只需開口。」他轉身離開你，顯然很失望。*");
	say();
	UI_remove_from_party(0xFFFC);
	gflags[0x016D] = false;
	UI_set_schedule_type(UI_get_npc_object(0xFFFC), 0x000B);
	abort;
	UI_add_answer("加入");
	UI_remove_answer("離隊");
labelFunc0404_02D0:
	case "Jhelom" attend labelFunc0404_02F0:
	message("「這有點像不列顛尼亞的舊時代，在你上次造訪的那段日子，只是更加嗜血。 Jhelom 當地的運動是決鬥。」");
	say();
	UI_remove_answer("Jhelom");
	UI_add_answer(["舊時代", "決鬥"]);
labelFunc0404_02F0:
	case "舊時代" attend labelFunc0404_0303:
	message("「這些人仍然相信任何問題都可以透過打人或刺傷人來解決。他們讓我想起了一個更原始但沒那麼複雜的時代。也許這就是人們住在這裡的原因——為了逃避他們的現代問題。」");
	say();
	UI_remove_answer("舊時代");
labelFunc0404_0303:
	case "決鬥" attend labelFunc0404_0347:
	if (!(!gflags[0x016A])) goto labelFunc0404_033C;
	if (!(!(var000B && (var000C && var000D)))) goto labelFunc0404_0335;
	message("「現在鎮上正為了三名當地鬥士而議論紛紛，他們全都向另一個男人發起了決鬥挑戰。被挑戰的人名叫 Sprellic 。」");
	say();
	UI_add_answer(["鬥士", "Sprellic"]);
	goto labelFunc0404_0339;
labelFunc0404_0335:
	message("「也許現在 Jhelom 的幾個當地流氓被好好教訓了一頓之後，鎮上的事情會平靜下來。雖然我懷疑這能維持多久。」");
	say();
labelFunc0404_0339:
	goto labelFunc0404_0340;
labelFunc0404_033C:
	message("「也許自從你向鎮上的人展示了分歧可以在不流血的情況下解決之後， Jhelom 的事情會平靜一段時間。但我表示懷疑。」");
	say();
labelFunc0404_0340:
	UI_remove_answer("決鬥");
labelFunc0404_0347:
	case "Sprellic" attend labelFunc0404_0391:
	if (!var000A) goto labelFunc0404_035C;
	message("「我有點遺憾，我們沒有為那個叫 Sprellic 的旅館老闆說情。他確實非常需要我們的幫助。」 Dupre 的眼神看起來有點悲傷。");
	say();
	goto labelFunc0404_038A;
labelFunc0404_035C:
	if (!(!gflags[0x016A])) goto labelFunc0404_038A;
	if (!(!(var000B && (var000C && var000D)))) goto labelFunc0404_0386;
	message("「我懷疑他這輩子有沒有拿過劍。當我下注時，我通常會押在弱勢一方，但就連我也不會魯莽到把錢押在他身上。那傢伙根本不是鬥士，他是旅館老闆！」");
	say();
	UI_add_answer(["魯莽", "旅館老闆"]);
	goto labelFunc0404_038A;
labelFunc0404_0386:
	message("「你救了那個可憐小個子 Sprellic 的命。他確實給自己惹了不少麻煩。」 Dupre 忍不住咧嘴笑了起來。「不過，結果好就好。」");
	say();
labelFunc0404_038A:
	UI_remove_answer("Sprellic");
labelFunc0404_0391:
	case "魯莽" attend labelFunc0404_03B1:
	message("「對這個叫 Sprellic 的傢伙來說，說他魯莽已經是稱讚了！他看起來就像這輩子從來沒打過架一樣。我不知道他為什麼要挑起別人決鬥。這真是個謎。」");
	say();
	UI_remove_answer("魯莽");
	if (!gflags[0x0186]) goto labelFunc0404_03B1;
	UI_add_answer("誤會");
labelFunc0404_03B1:
	case "誤會" attend labelFunc0404_03C4:
	message("你把 Sprellic 告訴你的事告訴了 Dupre 。「嗯。我想我對這個人的評價太嚴苛了。我想你，呃，我們應該為這件事做點什麼！」");
	say();
	UI_remove_answer("誤會");
labelFunc0404_03C4:
	case "旅館老闆" attend labelFunc0404_03E5:
	if (!(!gflags[0x0186])) goto labelFunc0404_03DA;
	message("「我不知道他故事的具體細節，但你可以自己去問他。他大約一小時前回到他的房子裡，就沒有出來過。他一定是花了很多時間在找什麼東西。」");
	say();
	goto labelFunc0404_03DE;
labelFunc0404_03DA:
	message("「這可憐的人一直躲在他的房子裡不肯出來。」");
	say();
labelFunc0404_03DE:
	UI_remove_answer("旅館老闆");
labelFunc0404_03E5:
	case "Iolo" attend labelFunc0404_0445:
	if (!var0007) goto labelFunc0404_03FA;
	message("「發生在我們可憐朋友 Iolo 身上的事太可怕了。我們必須想辦法把他的屍體送到治療師那裡，也許還有時間讓他復活。我好想念他。」");
	say();
	goto labelFunc0404_043E;
labelFunc0404_03FA:
	if (!var0004) goto labelFunc0404_043A;
	message("\"");
	message(var0003);
	message("，有個奇怪的老人跟著你，而且他長得有點像 Iolo ！這太奇怪了。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你一定是喝醉了，視線模糊了， Dupre 爵士。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「那你最好晚點也來陪我喝一杯。這樣你才有機會趕上我。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFC, 0x0000);
	goto labelFunc0404_043E;
labelFunc0404_043A:
	message("「我們應該找到那個無賴 Iolo ，讓他跟我們一起走。」");
	say();
labelFunc0404_043E:
	UI_remove_answer("Iolo");
labelFunc0404_0445:
	case "鬥士" attend labelFunc0404_0458:
	message("「兩男一女。他們的名字分別是 Timmons 、 Vokes 和 Syria 。」");
	say();
	UI_remove_answer("鬥士");
labelFunc0404_0458:
	case "Shamino" attend labelFunc0404_04B2:
	if (!var0008) goto labelFunc0404_046D;
	message("「我們優秀的同志 Shamino 遭遇了悲慘的命運。我們會非常想念他的。我們必須設法將他的遺體送到治療師那裡。也許他還能被復活。」");
	say();
	goto labelFunc0404_04AB;
labelFunc0404_046D:
	if (!var0005) goto labelFunc0404_04A7;
	message("Dupre 爵士哼了一聲，「據我所知， Shamino 幾乎已經安定下來，從冒險生活中退休了。」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我還有一些未竟的狂野夢想，非常感謝你。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「那麼很高興能再次見到我們老播種圈的另一位成員！」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	goto labelFunc0404_04AB;
labelFunc0404_04A7:
	message("「我們去找 Shamino ，來一場真正的重聚吧！」");
	say();
labelFunc0404_04AB:
	UI_remove_answer("Shamino");
labelFunc0404_04B2:
	case "友誼會" attend labelFunc0404_04CF:
	if (!var000E) goto labelFunc0404_04C4;
	message("Dupre 爵士盯著你脖子上的友誼會徽章看了好一會兒。「你一定是在開玩笑吧，」他哼了一聲。");
	say();
labelFunc0404_04C4:
	message("「我還是不敢相信你居然加入了友誼會。如果你想證明為了完成任務，你什麼荒謬的事都做得出來，那麼你成功了。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0404_04CF:
	case "Spark" attend labelFunc0404_04F5:
	if (!var0009) goto labelFunc0404_04E4;
	message("「 Spark ，那個可憐勇敢的小伙子，已經不在我們身邊了。我們應該盡力將他的遺體送到治療師那裡，好讓他復活。」");
	say();
	goto labelFunc0404_04EE;
labelFunc0404_04E4:
	message("Dupre 用大拇指指著 Spark 。「他也要加入我們嗎？」他對你嘀咕著，「你是想讓我服老嗎，");
	message(var0003);
	message("？」");
	say();
labelFunc0404_04EE:
	UI_remove_answer("Spark");
labelFunc0404_04F5:
	case "告辭" attend labelFunc0404_0500:
	goto labelFunc0404_0503;
labelFunc0404_0500:
	goto labelFunc0404_0136;
labelFunc0404_0503:
	endconv;
	message("「那麼我晚點再跟你說話。」*");
	say();
labelFunc0404_0508:
	if (!(event == 0x0000)) goto labelFunc0404_0516;
	Func092E(0xFFFC);
labelFunc0404_0516:
	return;
}


