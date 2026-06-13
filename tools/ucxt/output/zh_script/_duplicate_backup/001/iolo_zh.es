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
	message("一位身材高大且熟悉的人抬起頭看見了你。他目瞪口呆的表情很快地轉變成了喜悅。他咧嘴大笑著。~~」");
	message(var0000);
	message("！如果不是我相信自己的雙眼，我真不敢相信！我正心想：『要是聖者在這裡就好了！』然後...~~你看看！誰說魔法正在消亡！這就是活生生的證明！~~ 「你可知道，");
	message(var0000);
	message("。離我們上次見面，不列顛尼亞已經過了兩百年了？為什麼你一點都沒老！」");
	say();
	message("Iolo 神秘兮兮地眨了眨眼。他低聲說：「這無疑是因為我們故鄉和 Britannia 的時間結構不同吧？」~~他恢復了正常的音量。「如你所見，我確實老了一些。但這也是理所當然的，我這段時間一直留在 Britannia 。」~~ 「不過...聖者！等我告訴其他人！他們見到你一定會非常高興！歡迎來到 Trinsic！」");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	if (!var0004) goto labelFunc0401_01B8;
	var0006 = "她";
	goto labelFunc0401_01BE;
labelFunc0401_01B8:
	var0006 = "他";
labelFunc0401_01BE:
	message("心急如焚的農夫打斷了 Iolo 的話。「請帶");
	message(var0006);
	message(" 去馬廄，大人。這太可怕了！」");
	say();
	UI_remove_npc_face(0xFFF5);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 點了點頭，因為想起了他站在這裡的初衷，臉上的喜悅迅速褪去。~~ 「啊，是的。我們的朋友 Petre 今天早上發現了一些非常可怕的東西。去馬廄裡面看看吧。我會陪你一起去。」");
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
	message("「很抱歉，我不會與小偷為伍。」");
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
	message("「是的，我的老朋友，你需要什麼？」 Iolo 這麼問道。");
	say();
labelFunc0401_0365:
	converse attend labelFunc0401_072E;
	case "姓名" attend labelFunc0401_0381:
	message("你的朋友哼了一聲。「什麼，你在開玩笑嗎，");
	message(var0003);
	message("？你認不出你的老朋友 Iolo 了嗎？」");
	say();
	UI_remove_answer("姓名");
labelFunc0401_0381:
	case "馬廄" attend labelFunc0401_0394:
	message("「你必須親自去看看，");
	message(var0000);
	message("。做好心理準備，我的朋友。那景象真是太可怕了。」");
	say();
	abort;
labelFunc0401_0394:
	case "職業" attend labelFunc0401_03AE:
	message("「當然是和傳說中最勇敢的英雄——聖者一起冒險啊！」");
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
	message("「嗯，畢竟你已經離開兩百年了！大多數認得你的人早就不在了！很抱歉我說話這麼直白，我的朋友，但事實就是如此。」");
	say();
	UI_remove_answer("麻煩事");
labelFunc0401_03E7:
	case "謀殺" attend labelFunc0401_0415:
	if (!(!gflags[0x003D])) goto labelFunc0401_040A;
	message("「很慘，對吧？據我所知，Christopher 和 Inamo 都不應該死得這麼慘。你絕對應該向鎮上的每個人打聽一下。」");
	say();
	UI_add_answer(["Christopher", "Inamo"]);
	goto labelFunc0401_040E;
labelFunc0401_040A:
	message("「祝你順利弄清楚到底發生了什麼事。我是一點頭緒都沒有！」 Iolo 咧著嘴笑，拍了拍你的背。");
	say();
labelFunc0401_040E:
	UI_remove_answer("謀殺");
labelFunc0401_0415:
	case "Lord British" attend labelFunc0401_0452:
	var000A = true;
	if (!gflags[0x0065]) goto labelFunc0401_0432;
	message("「嗯，我們私底下說說，我覺得他看起來比我老多了！」");
	say();
	message("「那傢伙知道很多情報。但他似乎再也不離開Britain 了。」");
	say();
	goto labelFunc0401_0436;
labelFunc0401_0432:
	message("「陛下見到你一定會非常高興。我們應該火速前往 Britain。我肯定他能為你提供一些有價值的情報，並告訴你這消失的兩百年來發生了什麼事。」");
	say();
labelFunc0401_0436:
	if (!(!var000B)) goto labelFunc0401_0444;
	UI_add_answer("Britain");
labelFunc0401_0444:
	UI_add_answer("情報");
	UI_remove_answer("Lord British");
labelFunc0401_0452:
	case "情報" attend labelFunc0401_0473:
	message("「當然。LB (不列顛王) 總是有許多驚人的情報，對吧？這可能與他善於傾聽而不是總是滔滔不絕有關。」");
	say();
	if (!var0009) goto labelFunc0401_0468;
	message("「對吧，Shamino？」~~Shamino 咕噥了一聲轉過頭去，而 Iolo 則調皮地笑著。");
	say();
labelFunc0401_0468:
	message("「說到情報，倒是提醒了我一件事！我有一個小東西可能對你有用。這是一個算盤。用它來清點我們所有的金幣吧。」");
	say();
	UI_remove_answer("情報");
labelFunc0401_0473:
	case "朋友們" attend labelFunc0401_0493:
	message("「你一定是指 Shamino 和 Dupre。」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Shamino", "Dupre"]);
labelFunc0401_0493:
	case "Dupre" attend labelFunc0401_050A:
	var000C = Func08F7(0xFFFC);
	if (!var000C) goto labelFunc0401_04E0;
	message("「哎呀，他就在那裡，");
	message(var0003);
	message(".」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我就在這裡，");
	message(var0003);
	message(".」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看吧？我早就告訴過你了！」");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04E0:
	message("「我肯定我們會在某個地方找到他的。我最後一次聽說他是在 Jhelom。你知道他被封為騎士了嗎？」");
	say();
	if (!Func090A()) goto labelFunc0401_04F1;
	message("「很難以置信，對吧？」");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04F1:
	message("「這是真的！不列顛王最近封他為騎士。我真想像不到他為什麼要這麼做！」");
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
	message(".」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我就在這裡，");
	message(var0003);
	message(".」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看吧？我早就告訴過你了！」");
	say();
	goto labelFunc0401_0560;
labelFunc0401_054E:
	message("「你要找那個無賴，最好去不列顛 (Britain) 看看。他有一個在皇家劇院當女演員的女朋友。」");
	say();
	if (!(!var000B)) goto labelFunc0401_0560;
	UI_add_answer("Britain");
labelFunc0401_0560:
	UI_remove_answer("Shamino");
labelFunc0401_0567:
	case "Trinsic" attend labelFunc0401_0587:
	message("「這城鎮變化不大，不是嗎？不過每個人似乎都有點戒備。當我們遇到彼此時，我只是路過，順道來拜訪我的朋友 Finnigan。」");
	say();
	UI_remove_answer("Trinsic");
	UI_add_answer(["防御???", "Finnigan"]);
labelFunc0401_0587:
	case "防御???" attend labelFunc0401_059A:
	message("「我想最好還是你自己去和他們談談。自從你上次造訪以來，已經發生了很多變化，聖者。我想有時你會覺得自己有點... 嗯，過時了。」");
	say();
	UI_remove_answer("防御???");
labelFunc0401_059A:
	case "Britain" attend labelFunc0401_05C6:
	var000B = true;
	message("「自從你上次見到它之後，它又變大了。Paws 現在已經是不列顛 (Britain) 實質上的附屬城鎮了！它主宰了不列顛尼亞的東海岸。」~~「不過不列顛王的城堡仍然是最引人注目的地標。」");
	say();
	UI_remove_answer("Britain");
	if (!(!var000A)) goto labelFunc0401_05BF;
	UI_add_answer("Lord British");
labelFunc0401_05BF:
	UI_add_answer("Paws");
labelFunc0401_05C6:
	case "Paws" attend labelFunc0401_05D9:
	message("「它仍然位於不列顛 (Britain) 和 Trinsic 之間，但它已經進一步擴張到了不列顛內部。」");
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
	message("「我從沒跟他說過話。這真是太遺憾了。生活在人類之中的石像鬼 (Gargoyles) 本來就不多。這只會讓這種情況更加罕見。」");
	say();
	UI_remove_answer("Inamo");
	UI_add_answer("石像鬼");
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
	case "石像鬼" attend labelFunc0401_06FA:
	message("「自從你上次離開不列顛尼亞後，石像鬼 (Gargoyles) 已經開始與人類融合。他們大多住在 Sutek 的舊島上，現在改名為 'Terfin'。不過，你偶爾還是會在各地看到一兩個。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc0401_06FA:
	case "友誼會" attend labelFunc0401_070D:
	message("「我對他們了解不多，只知道他們大約起源於二十個不列顛年前。他們似乎在做善事，也受到大多數人的青睞。他們在整個 Britannia 都有分會。不過我個人沒有和他們打過交道。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0401_070D:
	case "Petre" attend labelFunc0401_0720:
	message("「他只是個泛泛之交。」");
	say();
	UI_remove_answer("Petre");
labelFunc0401_0720:
	case "告辭" attend labelFunc0401_072B:
	goto labelFunc0401_072E;
labelFunc0401_072B:
	goto labelFunc0401_0365;
labelFunc0401_072E:
	endconv;
	message("「'能與你交談，總是令我感到無比欣喜，我的朋友。」");
	say();
labelFunc0401_0733:
	if (!(event == 0x0000)) goto labelFunc0401_0741;
	Func092E(0xFFFF);
labelFunc0401_0741:
	return;
}


