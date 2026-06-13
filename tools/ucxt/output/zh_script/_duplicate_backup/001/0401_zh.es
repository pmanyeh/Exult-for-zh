#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func08DD 0x8DD ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0401 object#(0x401) ()
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

	gflags[0x0014] = true;
	var0000 = Func0908();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFF);
	var0003 = Func0909();
	var0004 = UI_is_pc_female();
	if (!(event == 0x0003)) goto labelFunc0401_0173;
	if (!((!gflags[0x003B]) && ((!gflags[0x005C]) && UI_get_item_flag(0xFE9C, 0x0010)))) goto labelFunc0401_016C;
	UI_play_music(0x0023, 0x0000);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x23, (byte)0x55, 0x06AA], 0x007D);
	var0005 = UI_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x54, 0x0023, 0x0001, (byte)0x52, "@好了，好了……@"]);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@太可怕了！@"], 0x0010);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我知道，這太令人震驚了！@"], 0x0021);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@會是誰做的？@"], 0x0031);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我不知道……@"], 0x0041);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@他沒有敵人……@"], 0x0051);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@可憐的人。@"], 0x0061);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@該怎麼辦？@"], 0x0071);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我不知道……@"], 0x0081);
	gflags[0x005C] = true;
	abort;
	goto labelFunc0401_0173;
labelFunc0401_016C:
	UI_add_to_party(0xFFFF);
labelFunc0401_0173:
	if (!((gflags[0x003B] == false) && (event == 0x0002))) goto labelFunc0401_0268;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("一個相當高大、熟悉的人抬起頭看到了你。他目瞪口呆的表情所流露出的震驚很快變成了喜悅。他咧嘴笑了。~~「");
	message(var0000);
	message("！如果不是我相信自己親眼所見，我絕對不會相信！我才剛在心裡想：『要是聖者在這裡就好了！』然後……~~「看哪！誰說魔法正在消亡！這就是證明它沒有的活生生證據！~~「你意識到了嗎，");
	message(var0000);
	message("，自從我們上次見面以來，已經過了 200 個 Britannia 年了？為什麼你一點都沒變老！」");
	say();
	message("Iolo 神秘地眨了眨眼。他低聲說：「毫無疑問，是因為我們原本家鄉的時間結構和 Britannia 的不同吧？」~~他恢復了正常的音量。「如你所見，我老了一點。不過當然，我這段時間一直留在 Britannia 。~~「噢，對了，聖者！等我告訴其他人！他們會很高興見到你的！歡迎來到 Trinsic ！」*");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	if (!var0004) goto labelFunc0401_01B8;
	var0006 = "她";
	goto labelFunc0401_01BE;
labelFunc0401_01B8:
	var0006 = "他";
labelFunc0401_01BE:
	message("心煩意亂的農夫打斷了 Iolo 。「給");
	message(var0006);
	message(" 看馬廄，大人。太可怕了！」*");
	say();
	UI_remove_npc_face(0xFFF5);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 點點頭，當他想起自己一開始站在這裡的原因時，他的喜悅很快就消退了。~~「啊，是的。我們的朋友 Petre 今天早上發現了一件非常可怕的事。去馬廄裡面看看吧。我陪你。」");
	say();
	if (!(!UI_mouse_exists())) goto labelFunc0401_01E9;
	message("Iolo 把你拉到一邊，低聲說：「聖者，為了我們共同的理智著想，我強烈建議你該去買隻老鼠。」");
	say();
labelFunc0401_01E9:
	var0007 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x23, (byte)0x2C, (byte)0x27, 0x0014, (byte)0x55, 0x06FA], 0x0005);
	Func08DD();
	UI_add_to_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFF5), 0x0007);
	UI_set_schedule_type(UI_get_npc_object(0xFFF4), 0x0003);
	UI_halt_scheduled(UI_get_npc_object(0xFFFF));
	UI_halt_scheduled(UI_get_npc_object(0xFFF5));
	if (!(!gflags[0x003B])) goto labelFunc0401_0267;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x0000, 0x0000]);
	gflags[0x003B] = true;
labelFunc0401_0267:
	abort;
labelFunc0401_0268:
	if (!(event == 0x0001)) goto labelFunc0401_0733;
	var0000 = Func0908();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFF);
	var0003 = Func0909();
	UI_show_npc_face(0xFFFF, 0x0000);
	var0008 = Func08F7(0xFFF5);
	var0009 = Func08F7(0xFFFD);
	var000A = false;
	var000B = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02EA]) goto labelFunc0401_02ED;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0401_02DD;
	message("「抱歉，我不加入小偷的行列。」");
	say();
	abort;
	goto labelFunc0401_02ED;
labelFunc0401_02DD:
	message("「好吧，我想你已經得到教訓了。我會重新加入。」");
	say();
	UI_add_to_party(0xFFFF);
	gflags[0x02EA] = false;
	abort;
labelFunc0401_02ED:
	if (!(!gflags[0x0057])) goto labelFunc0401_02FB;
	UI_add_answer("Trinsic");
labelFunc0401_02FB:
	if (!(var0002 in var0001)) goto labelFunc0401_030C;
	UI_add_answer("離隊");
labelFunc0401_030C:
	if (!(!(var0002 in var0001))) goto labelFunc0401_031E;
	UI_add_answer("加入");
labelFunc0401_031E:
	if (!gflags[0x003F]) goto labelFunc0401_032B;
	UI_add_answer("友誼會");
labelFunc0401_032B:
	if (!var0008) goto labelFunc0401_0338;
	UI_add_answer("Petre");
labelFunc0401_0338:
	if (!(gflags[0x003C] && (!gflags[0x0057]))) goto labelFunc0401_034D;
	UI_add_answer("謀殺案");
	goto labelFunc0401_0354;
labelFunc0401_034D:
	UI_add_answer("馬廄");
labelFunc0401_0354:
	if (!gflags[0x003C]) goto labelFunc0401_0361;
	UI_remove_answer("馬廄");
labelFunc0401_0361:
	message("「是的，老朋友？」 Iolo 問道。");
	say();
labelFunc0401_0365:
	converse attend labelFunc0401_072E;
	case "姓名" attend labelFunc0401_0381:
	message("你的朋友哼了一聲。「什麼，你在開玩笑嗎，");
	message(var0003);
	message("？你不認識你的老朋友 Iolo 了嗎？」");
	say();
	UI_remove_answer("姓名");
labelFunc0401_0381:
	case "馬廄" attend labelFunc0401_0394:
	message("「你必須親眼看看，");
	message(var0000);
	message("。做好心理準備，我的朋友。那景象真的很可怕。」*");
	say();
	abort;
labelFunc0401_0394:
	case "職業" attend labelFunc0401_03AE:
	message("「哎呀，現在當然是跟所有傳奇英雄中最勇敢的那位——聖者一起冒險啊！」");
	say();
	UI_add_answer("聖者");
	UI_remove_answer("職業");
labelFunc0401_03AE:
	case "聖者" attend labelFunc0401_03D4:
	message("「哎呀，毫無疑問『你』就是聖者，");
	message(var0000);
	message("！不過，你可能很難說服那些不認得你面貌的人。~~「當然，跟你的朋友們在一起，你『應該』是安全的！」");
	say();
	UI_remove_answer("聖者");
	UI_add_answer(["麻煩", "朋友們"]);
labelFunc0401_03D4:
	case "麻煩" attend labelFunc0401_03E7:
	message("「好吧，畢竟你已經離開 200 年了！大多數會認得你的人早就過世了！抱歉我說得這麼直白，我的朋友，但事實就是如此。」");
	say();
	UI_remove_answer("麻煩");
labelFunc0401_03E7:
	case "謀殺案" attend labelFunc0401_0415:
	if (!(!gflags[0x003D])) goto labelFunc0401_040A;
	message("「很難看，不是嗎？據我所知， Christopher 和 Inamo 都不應該落得如此悽慘的死法。你絕對應該向鎮上的每個人打聽一下這件事。」");
	say();
	UI_add_answer(["Christopher", "Inamo"]);
	goto labelFunc0401_040E;
labelFunc0401_040A:
	message("「祝你好運，希望能查明到底發生了什麼事。我可是一點頭緒都沒有！」 Iolo 咧嘴笑著，拍了拍你的背。");
	say();
labelFunc0401_040E:
	UI_remove_answer("謀殺案");
labelFunc0401_0415:
	case "Lord British" attend labelFunc0401_0452:
	var000A = true;
	if (!gflags[0x0065]) goto labelFunc0401_0432;
	message("「好吧，在我們之間說說就好，我覺得他比我老多了！」");
	say();
	message("「那傢伙消息很靈通。但他似乎再也沒有離開過 Britain 了。」");
	say();
	goto labelFunc0401_0436;
labelFunc0401_0432:
	message("「我們的君主見到你一定會非常高興。我們應該盡快前往 Britain 。我相信他能給你一些有價值的資訊，並讓你了解在你缺席的 200 年裡錯過了什麼。」");
	say();
labelFunc0401_0436:
	if (!(!var000B)) goto labelFunc0401_0444;
	UI_add_answer("Britain");
labelFunc0401_0444:
	UI_add_answer("資訊");
	UI_remove_answer("Lord British");
labelFunc0401_0452:
	case "資訊" attend labelFunc0401_0473:
	message("「當然。 LB 總是有許多最令人驚奇的事實，對吧？大概是因為他比較常傾聽而不是一直說話的關係吧。」");
	say();
	if (!var0009) goto labelFunc0401_0468;
	message("「對吧， Shamino ？」~~ Shamino 哼了一聲轉過身去，而 Iolo 則調皮地咧嘴笑著。");
	say();
labelFunc0401_0468:
	message("「說到資訊，讓我想起了一件事！我有一件小東西可能對你有用。這是一個算盤。用它來計算我們所有的金幣吧。」");
	say();
	UI_remove_answer("資訊");
labelFunc0401_0473:
	case "朋友們" attend labelFunc0401_0493:
	message("「你指的一定是 Shamino 和 Dupre 。」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Shamino", "Dupre"]);
labelFunc0401_0493:
	case "Dupre" attend labelFunc0401_050A:
	var000C = Func08F7(0xFFFC);
	if (!var000C) goto labelFunc0401_04E0;
	message("「哎呀，他就在那裡，");
	message(var0003);
	message(".\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我就在這裡，");
	message(var0003);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看吧？我告訴過你了！」");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04E0:
	message("「我相信我們會在某處找到他的。我最後聽說他在 Jhelom 。你知道他被封為騎士了嗎？」");
	say();
	if (!Func090A()) goto labelFunc0401_04F1;
	message("「很難相信，不是嗎？」");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04F1:
	message("「這是真的！ Lord British 最近封他為騎士了。我無法想像他為什麼要這麼做！」");
	say();
	if (!(!var000A)) goto labelFunc0401_0503;
	UI_add_answer("Lord British");
labelFunc0401_0503:
	UI_remove_answer("Dupre");
labelFunc0401_050A:
	case "Shamino" attend labelFunc0401_0567:
	if (!var0009) goto labelFunc0401_054E;
	message("「哎呀，他就在那裡，");
	message(var0003);
	message(".\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我就在這裡，");
	message(var0003);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看吧？我告訴過你了！」");
	say();
	goto labelFunc0401_0560;
labelFunc0401_054E:
	message("「要找到那個無賴，最好的辦法是去 Britain 找找。他交了個女朋友，是皇家劇院的女演員。」");
	say();
	if (!(!var000B)) goto labelFunc0401_0560;
	UI_add_answer("Britain");
labelFunc0401_0560:
	UI_remove_answer("Shamino");
labelFunc0401_0567:
	case "Trinsic" attend labelFunc0401_0587:
	message("「這鎮上幾乎沒什麼改變，不是嗎？不過每個人似乎都有點防備心。當我們偶遇時，我只是剛好路過，順便拜訪我的朋友 Finnigan 。」");
	say();
	UI_remove_answer("Trinsic");
	UI_add_answer(["防備心", "Finnigan"]);
labelFunc0401_0587:
	case "防備心" attend labelFunc0401_059A:
	message("「我想最好還是你自己去跟他們談談。自從你上次造訪以來，已經發生了很多改變，聖者。我想有時候你會覺得有點……嗯，過時了。」");
	say();
	UI_remove_answer("防備心");
labelFunc0401_059A:
	case "Britain" attend labelFunc0401_05C6:
	var000B = true;
	message("「自從你上次看到它之後，它已經發展壯大了。 Paws 現在實際上已經算是 Britain 的一個鎮區了！它主宰了 Britannia 的東海岸。~~「 Lord British 的城堡依然是最顯眼的地標。」");
	say();
	UI_remove_answer("Britain");
	if (!(!var000A)) goto labelFunc0401_05BF;
	UI_add_answer("Lord British");
labelFunc0401_05BF:
	UI_add_answer("Paws");
labelFunc0401_05C6:
	case "Paws" attend labelFunc0401_05D9:
	message("「它仍然位於 Britain 和 Trinsic 之間，但它已經進一步向 Britain 本身擴展了。」");
	say();
	UI_remove_answer("Paws");
labelFunc0401_05D9:
	case "Finnigan" attend labelFunc0401_05EC:
	message("「他是個好人。 Trinsic 的鎮長，他是。我認識他很多年了。」");
	say();
	UI_remove_answer("Finnigan");
labelFunc0401_05EC:
	case "Christopher" attend labelFunc0401_0605:
	message("「我不認識他，");
	message(var0003);
	message("。」");
	say();
	UI_remove_answer("Christopher");
labelFunc0401_0605:
	case "Inamo" attend labelFunc0401_061F:
	message("「我從來沒有跟他說過話。真的很遺憾。生活在人類之中的石像鬼並不多。這只會讓這種情況更加令人卻步。」");
	say();
	UI_remove_answer("Inamo");
	UI_add_answer("石像鬼");
labelFunc0401_061F:
	case "離隊" attend labelFunc0401_0696:
	message("Iolo 看起來很受傷。「你真的要我離開嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0401_0692;
	message("「你要我在這裡等，還是要我回 Yew 的家？」");
	say();
	UI_clear_answers();
	var000E = Func090B(["在這裡等", "回家"]);
	if (!(var000E == "在這裡等")) goto labelFunc0401_0675;
	message("「很好。我會在這裡等你回來，並要求我重新加入。」*");
	say();
	UI_remove_from_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFFF), 0x000F);
	abort;
	goto labelFunc0401_068F;
labelFunc0401_0675:
	message("「那麼，再會了。只要你願意，我隨時都可以重新加入。」 Iolo 轉身離開你。*");
	say();
	UI_remove_from_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFFF), 0x000B);
	abort;
labelFunc0401_068F:
	goto labelFunc0401_0696;
labelFunc0401_0692:
	message("「呼。你嚇著我了！」");
	say();
labelFunc0401_0696:
	case "加入" attend labelFunc0401_06E7:
	message("「我一直在等你開口問我！」");
	say();
	var000F = 0x0000;
	enum();
labelFunc0401_06A9:
	for (var0012 in var0001 with var0010 to var0011) attend labelFunc0401_06C1;
	var000F = (var000F + 0x0001);
	goto labelFunc0401_06A9;
labelFunc0401_06C1:
	if (!(var000F < 0x0008)) goto labelFunc0401_06E3;
	UI_add_to_party(0xFFFF);
	UI_remove_answer("加入");
	UI_add_answer("離隊");
	goto labelFunc0401_06E7;
labelFunc0401_06E3:
	message("「看來與你同行的成員已經夠多了！我會等到有人離開隊伍再說。」");
	say();
labelFunc0401_06E7:
	case "石像鬼" attend labelFunc0401_06FA:
	message("「自從你上次離開 Britannia 以來，石像鬼已經開始與人類融合了。他們大多住在 Sutek 的舊島上，現在改名為『Terfin』。不過，你在這片土地上到處都可能看到一兩隻。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc0401_06FA:
	case "友誼會" attend labelFunc0401_070D:
	message("「我對他們了解不多，只知道他們大約是在二十個 Britannia 年前起源的。他們似乎在做好事，而且受到大多數人的青睞。他們在全 Britannia 都有分會。我個人跟他們沒什麼交集。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0401_070D:
	case "Petre" attend labelFunc0401_0720:
	message("「他只是個熟人。」");
	say();
	UI_remove_answer("Petre");
labelFunc0401_0720:
	case "告辭" attend labelFunc0401_072B:
	goto labelFunc0401_072E;
labelFunc0401_072B:
	goto labelFunc0401_0365;
labelFunc0401_072E:
	endconv;
	message("「跟你說話總是件樂事，我的朋友。」*");
	say();
labelFunc0401_0733:
	if (!(event == 0x0000)) goto labelFunc0401_0741;
	Func092E(0xFFFF);
labelFunc0401_0741:
	return;
}


