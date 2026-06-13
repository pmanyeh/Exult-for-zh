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
	var0005 = UI_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x54, 0x0023, 0x0001, (byte)0x52, "@別怕，別怕...@" ]);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@這太可怕了！@"], 0x0010);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我知道，這太令人震驚了！@"], 0x0021);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@會是誰幹的？@"], 0x0031);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我不知道...@" ], 0x0041);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@他沒有仇人啊...@" ], 0x0051);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@可憐的人。@" ], 0x0061);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@該怎麼辦？@"], 0x0071);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我不知道...@" ], 0x0081);
	gflags[0x005C] = true;
	abort;
	goto labelFunc0401_0173;
labelFunc0401_016C:
	UI_add_to_party(0xFFFF);
labelFunc0401_0173:
	if (!((gflags[0x003B] == false) && (event == 0x0002))) goto labelFunc0401_0268;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("一個健壯的老頭打量著你，他看起來有點面熟。他先是愣住，隨即露出驚喜的笑容。他張嘴大笑。「");
	message(var0000);
	message("我有沒有看錯？剛剛才正心想：『要是聖者那傢伙在這就好了！』然後...你看看！誰說魔法完蛋了? 這就是活生生的證明！~~ 喂，你可知道，");
	message(var0000);
	message("。從上次見面到現在，Britannia 已經過兩百年了，怎麼你都沒老？」");
	say();
	message("Iolo 嘴裡咕噥著：「看來大概 Britannia 的時間結構不同？哎，隨便啦。」~~他恢復了正常的音量。「好吧，我確實老了一點。沒辦法，這段時間我一直在留在 Britannia 。」~~ 「不過...聖者！等我告訴其他人！他們一定很高興見到你！歡迎來到 Trinsic！」");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	if (!var0004) goto labelFunc0401_01B8;
	var0006 = "她";
	goto labelFunc0401_01BE;
labelFunc0401_01B8:
	var0006 = "他";
labelFunc0401_01BE:
	message("著急的農夫打斷 Iolo：「先生，你要不要帶");
	message(var0006);
	message(" 馬廄去看看，這太可怕了！」");
	say();
	UI_remove_npc_face(0xFFF5);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 終於想起為他什麼來 Trinsic，臉上的笑容沒了。他點了點頭~~ 「啊對，這位朋友 Petre 今天早上看到不太好的東西。馬廄裡面看看吧，我陪你一起。」");
	say();
	if (!(!UI_mouse_exists())) goto labelFunc0401_01E9;
	message("Iolo 把你拉到一旁低聲說：「聖者，為了我們共同的理智著想，我強烈建議你該去買隻滑鼠。」");
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
	message("「抱歉，我不跟小偷為伍。」");
	say();
	abort;
	goto labelFunc0401_02ED;
labelFunc0401_02DD:
	message("「好吧，我想你已經學到教訓了。我會重新加入隊伍。」");
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
	UI_add_answer("謀殺");
	goto labelFunc0401_0354;
labelFunc0401_034D:
	UI_add_answer("馬廄");
labelFunc0401_0354:
	if (!gflags[0x003C]) goto labelFunc0401_0361;
	UI_remove_answer("馬廄");
labelFunc0401_0361:
	message("「我的老朋友，你需要什麼？」 Iolo 這麼問道。");
	say();
labelFunc0401_0365:
	converse attend labelFunc0401_072E;
	case "姓名" attend labelFunc0401_0381:
	message("你朋友哼了一聲。「你在開玩笑嗎，");
	message(var0003);
	message("？認不出你的老朋友 Iolo 了嗎？」");
	say();
	UI_remove_answer("姓名");
labelFunc0401_0381:
	case "馬廄" attend labelFunc0401_0394:
	message("「我覺得你最好親自去看看，");
	message(var0000);
	message("然後─要有點心理準備，那景象蠻可怕的。」");
	say();
	abort;
labelFunc0401_0394:
	case "職業" attend labelFunc0401_03AE:
	message("「喔，當然是和傳說中的英雄 —— 聖者一起冒險啊！」");
	say();
	UI_add_answer("聖者");
	UI_remove_answer("職業");
labelFunc0401_03AE:
	case "聖者" attend labelFunc0401_03D4:
	message("「毫無疑問，-你- 就是聖者，");
	message(var0000);
	message("！不過，你可能很難說服那些不認識你長相的人。~~「當然，和朋友們在一起，你-絕對是-安全的！」");
	say();
	UI_remove_answer("聖者");
	UI_add_answer(["麻煩事", "朋友們"]);
labelFunc0401_03D4:
	case "麻煩事" attend labelFunc0401_03E7:
	message("「嗯，畢竟你已經離開兩百年了！大多數認得你的人早就不在了！很抱歉我說話這麼直白，不過事實就是如此。」");
	say();
	UI_remove_answer("麻煩事");
labelFunc0401_03E7:
	case "謀殺" attend labelFunc0401_0415:
	if (!(!gflags[0x003D])) goto labelFunc0401_040A;
	message("「真的很悽慘，對吧？我個人是覺得 Christopher 和 Inamo 都不應該死這麼慘。你最好跟鎮上的每個人都打聽一下。」");
	say();
	UI_add_answer(["Christopher", "Inamo"]);
	goto labelFunc0401_040E;
labelFunc0401_040A:
	message("「這還得靠你才有辦法，我是沒啥頭緒。」 Iolo 咧著嘴笑，拍了拍你的背。");
	say();
labelFunc0401_040E:
	UI_remove_answer("謀殺");
labelFunc0401_0415:
	case "Lord British" attend labelFunc0401_0452:
	var000A = true;
	if (!gflags[0x0065]) goto labelFunc0401_0432;
	message("「嗯，這我們私下講，他看起來比我老多了！」");
	say();
	message("「那傢伙知道很多事情。但他現在很少、幾乎不出城了。」");
	say();
	goto labelFunc0401_0436;
labelFunc0401_0432:
	message("「LB看到你一定樂壞了。我們得趕快去 Britain 一趟。他知道的事一向不少，應該能告訴你，這兩百年到底發生了什麼。」");
	say();
labelFunc0401_0436:
	if (!(!var000B)) goto labelFunc0401_0444;
	UI_add_answer("Britain");
labelFunc0401_0444:
	UI_add_answer("情報");
	UI_remove_answer("Lord British");
labelFunc0401_0452:
	case "情報" attend labelFunc0401_0473:
	message("「當然。LB 總是有許多驚人的情報，對吧？他話可能不多，但是個好聽眾。應該是這原因，積了不少消息。」");
	say();
	if (!var0009) goto labelFunc0401_0468;
	message("「你說對吧，Shamino？」~~Shamino 一臉疑問轉過頭去，Iolo 在一旁偷笑。");
	say();
labelFunc0401_0468:
	message("「說到情報，倒是提醒了我一件事！有個東西可能對你有用─算盤。用它來算我們的錢吧。」");
	say();
	UI_remove_answer("情報");
labelFunc0401_0473:
	case "朋友們" attend labelFunc0401_0493:
	message("「你是說 Shamino 和 Dupre對吧，一定是。」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Shamino", "Dupre"]);
labelFunc0401_0493:
	case "Dupre" attend labelFunc0401_050A:
	var000C = Func08F7(0xFFFC);
	if (!var000C) goto labelFunc0401_04E0;
	message("「哎呀，他在啊，");
	message(var0003);
	message(".」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「對啊，我人在這啦，");
	message(var0003);
	message("。」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看吧？我就說！」");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04E0:
	message("「他一定在某個地方，最後一次聽說是在 Jhelom。話說，你知道他現在有騎士頭銜嗎？」");
	say();
	if (!Func090A()) goto labelFunc0401_04F1;
	message("「是不是難以置信？」");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04F1:
	message("「這是真的！LB最近真的封他當騎士了。不知道吾王倒底...在想啥！」");
	say();
	if (!(!var000A)) goto labelFunc0401_0503;
	UI_add_answer("Lord British");
labelFunc0401_0503:
	UI_remove_answer("Dupre");
labelFunc0401_050A:
	case "Shamino" attend labelFunc0401_0567:
	if (!var0009) goto labelFunc0401_054E;
	message("「哎呀，他人就在這，");
	message(var0003);
	message(".」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「對啊我在這，");
	message(var0003);
	message("。」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看吧？我就跟你講！」");
	say();
	goto labelFunc0401_0560;
labelFunc0401_054E:
	message("「你要找那個傢伙的話...去 Britain 看看。他女朋友在皇家劇院當演員。」");
	say();
	if (!(!var000B)) goto labelFunc0401_0560;
	UI_add_answer("Britain");
labelFunc0401_0560:
	UI_remove_answer("Shamino");
labelFunc0401_0567:
	case "Trinsic" attend labelFunc0401_0587:
	message("「這裡變化不大，不過這緊張時刻...大家防備心比較重。你從紅門出現那時候，我只是剛好路過來找朋友 Finnigan。」");
	say();
	UI_remove_answer("Trinsic");
	UI_add_answer(["防備心", "Finnigan"]);
labelFunc0401_0587:
	case "防備心" attend labelFunc0401_059A:
	message("「我想最好還是你自己去和村民聊聊。你上次來到現在已經發生了很多變化，聖者。我想有時你會覺得自己有點... 嗯，過時了。」");
	say();
	UI_remove_answer("防備心");
labelFunc0401_059A:
	case "Britain" attend labelFunc0401_05C6:
	var000B = true;
	message("「從你上次來到現在，它又變大了。Paws 現在已經是　Britain 實質上的附屬城鎮了！它主宰了不列顛尼亞的東海岸。」~~「不過LB的城堡仍然是最引人注目的地標。」");
	say();
	UI_remove_answer("Britain");
	if (!(!var000A)) goto labelFunc0401_05BF;
	UI_add_answer("Lord British");
labelFunc0401_05BF:
	UI_add_answer("Paws");
labelFunc0401_05C6:
	case "Paws" attend labelFunc0401_05D9:
	message("「它基本上還是在 Britain 和 Trinsic 之間，但土地範圍已經擴到 Britain 內部。」");
	say();
	UI_remove_answer("Paws");
labelFunc0401_05D9:
	case "Finnigan" attend labelFunc0401_05EC:
	message("「他是個好人。身為 Trinsic 的鎮長，我認識他好幾年了。」");
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
	message("「我沒跟他講過話。這真是太遺憾了。跟人類生活的 Gargoyles 本來就不多，這下又更少了。」");
	say();
	UI_remove_answer("Inamo");
	UI_add_answer("Gargoyles");
labelFunc0401_061F:
	case "離隊" attend labelFunc0401_0696:
	message("Iolo 看起來很受傷。「你真的要我離開嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0401_0692;
	message("「你是要我留在這裡等你，還是要我回 Yew 的家？」");
	say();
	UI_clear_answers();
	var000E = Func090B(["wait here", "go home"]);
	if (!(var000E == "wait here")) goto labelFunc0401_0675;
	message("「很好。我會在這裡等你回來，並邀請我重新加入。」");
	say();
	UI_remove_from_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFFF), 0x000F);
	abort;
	goto labelFunc0401_068F;
labelFunc0401_0675:
	message("「那麼，再會了。只要你希望，我隨時都願意重新加入。」 Iolo 轉過身去。*");
	say();
	UI_remove_from_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFFF), 0x000B);
	abort;
labelFunc0401_068F:
	goto labelFunc0401_0696;
labelFunc0401_0692:
	message("「呼，你可嚇死我了！」");
	say();
labelFunc0401_0696:
	case "加入" attend labelFunc0401_06E7:
	message("「我一直在等你開口呢！」");
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
	message("「看來與你同行的成員已經夠多了！我會等到有人離開隊伍時再加入。」");
	say();
labelFunc0401_06E7:
	case "Gargoyles" attend labelFunc0401_06FA:
	message("「你上次離開 Britannia 後，Gargoyles 已經開始與人類生活在一起。他們大多住在 Sutek 的舊島上，現在改名為 『Terfin』。不過，你偶爾還是會在各地看到一兩個。」");
	say();
	UI_remove_answer("Gargoyles");
labelFunc0401_06FA:
	case "友誼會" attend labelFunc0401_070D:
	message("「我跟他們不熟。我知道應該是慈善團體，成立大概二十幾年吧？大家蠻喜歡他們，在 Britannia 到處都有分會。不過我個人沒有和他們打過交道。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0401_070D:
	case "Petre" attend labelFunc0401_0720:
	message("「認識，沒到非常熟。」");
	say();
	UI_remove_answer("Petre");
labelFunc0401_0720:
	case "告辭" attend labelFunc0401_072B:
	goto labelFunc0401_072E;
labelFunc0401_072B:
	goto labelFunc0401_0365;
labelFunc0401_072E:
	endconv;
	message("「跟你聊天真是我的榮幸，我的朋友。」");
	say();
labelFunc0401_0733:
	if (!(event == 0x0000)) goto labelFunc0401_0741;
	Func092E(0xFFFF);
labelFunc0401_0741:
	return;
}


