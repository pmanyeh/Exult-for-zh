#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0409 object#(0x409) ()
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

	if (!(event == 0x0001)) goto labelFunc0409_043C;
	UI_show_npc_face(0xFFF7, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFF7);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFD);
	var0005 = Func08F7(0xFFFF);
	var0006 = Func08F7(0xFFFC);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(var0002 in var0001)) goto labelFunc0409_006B;
	UI_add_answer("離隊");
labelFunc0409_006B:
	if (!gflags[0x018D]) goto labelFunc0409_0078;
	UI_add_answer("Henry");
labelFunc0409_0078:
	if (!gflags[0x017D]) goto labelFunc0409_0085;
	UI_add_answer("吊飾盒");
labelFunc0409_0085:
	if (!gflags[0x0180]) goto labelFunc0409_0092;
	UI_add_answer("陌生人");
labelFunc0409_0092:
	if (!(!gflags[0x001C])) goto labelFunc0409_00A4;
	message("你看到了你的老同伴 Katrina ，她看起來只比你上次造訪時見到她稍微老了一點。");
	say();
	gflags[0x001C] = true;
	goto labelFunc0409_00AE;
labelFunc0409_00A4:
	message("「又見面了，");
	message(var0003);
	message("！」 Katrina 帶著微笑向你打招呼。");
	say();
labelFunc0409_00AE:
	converse attend labelFunc0409_0431;
	case "姓名" attend labelFunc0409_00D5:
	message("「哎呀，」她對你眨眨眼，「我知道已經過很久了，但你肯定沒忘記我吧。我是 Katrina 。你以前的同伴之一。」");
	say();
	message("你們在重逢時友善地笑了起來。");
	say();
	UI_add_answer(["老同伴", "時間"]);
	UI_remove_answer("姓名");
labelFunc0409_00D5:
	case "老同伴" attend labelFunc0409_00F8:
	message("「啊，是的， Iolo 、 Shamino 和 Dupre 。」");
	say();
	UI_remove_answer("老同伴");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0409_00F8:
	case "時間" attend labelFunc0409_010B:
	message("「雖然我們世界和這個世界時間流逝的方式有很大的差異，但我肯定我至少老了一點，」她愉快地說。");
	say();
	UI_remove_answer("時間");
labelFunc0409_010B:
	case "職業" attend labelFunc0409_0159:
	if (!(!(var0002 in var0001))) goto labelFunc0409_0148;
	message("「哎呀，上次陪你冒險之後，我就在 New Magincia 定居，過著牧羊人平靜的生活了。」");
	say();
	UI_add_answer(["牧羊人", "New Magincia"]);
	if (!(!(var0002 in var0001))) goto labelFunc0409_0145;
	message("「如果你需要我的話，我可以再次加入你的隊伍。」");
	say();
	UI_add_answer("加入");
labelFunc0409_0145:
	goto labelFunc0409_0159;
labelFunc0409_0148:
	message("「跟著你到處跑，");
	message(var0000);
	message("！我絕對不會想念 New Magincia 的！」");
	say();
	UI_add_answer("New Magincia");
labelFunc0409_0159:
	case "牧羊人" attend labelFunc0409_016C:
	message("「我看顧著我的羊群，當鎮民需要我時，我也會看顧他們。」");
	say();
	UI_remove_answer("牧羊人");
labelFunc0409_016C:
	case "加入" attend labelFunc0409_01D1:
	var0007 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0409_0182:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc0409_019A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0409_0182;
labelFunc0409_019A:
	if (!(var0007 < 0x0006)) goto labelFunc0409_01C6;
	message("「這是我的榮幸，");
	message(var0000);
	message("!」");
	say();
	UI_add_to_party(0xFFF7);
	UI_add_answer("離隊");
	UI_remove_answer("加入");
	goto labelFunc0409_01CA;
labelFunc0409_01C6:
	message("「我比較喜歡人少一點，聖者。或許晚點吧。」");
	say();
labelFunc0409_01CA:
	UI_remove_answer("加入");
labelFunc0409_01D1:
	case "離隊" attend labelFunc0409_0231:
	message("「你是想讓我在這裡等，還是我該回家了？」");
	say();
	UI_clear_answers();
	var000B = Func090B(["在這裡等", "回家"]);
	if (!(var000B == "在這裡等")) goto labelFunc0409_0217;
	message("「我很樂意在這裡等你回來。」*");
	say();
	UI_remove_from_party(0xFFF7);
	UI_set_schedule_type(UI_get_npc_object(0xFFF7), 0x000F);
	abort;
	goto labelFunc0409_0231;
labelFunc0409_0217:
	message("「如果你覺得這樣最好，我會的。如果你再需要我，只需開口。」*");
	say();
	UI_remove_from_party(0xFFF7);
	UI_set_schedule_type(UI_get_npc_object(0xFFF7), 0x000B);
	abort;
labelFunc0409_0231:
	case "New Magincia" attend labelFunc0409_024B:
	message("「我們這裡與世隔絕。我們得不到外面世界的任何消息。生活跟兩百年前你上次造訪 Britannia 時差不多。我在這裡有很多朋友。」");
	say();
	UI_add_answer("與世隔絕");
	UI_remove_answer("New Magincia");
labelFunc0409_024B:
	case "與世隔絕" attend labelFunc0409_0271:
	message("「這就是我們這裡喜歡的方式。現在島上還有另外三個陌生人——除了你之外。當然，你很難被稱為陌生人。這是我們這幾年來訪客最多的一次。~~「但是，別擔心，");
	message(var0003);
	message("，我很少感到孤單。」");
	say();
	UI_remove_answer("與世隔絕");
	UI_add_answer(["孤單", "訪客"]);
labelFunc0409_0271:
	case "孤單" attend labelFunc0409_0294:
	message("「我在這裡有很多朋友。當我感到孤單時，我會跟智者 Alagner 、造船匠 Russell 或小販 Henry 聊天。」");
	say();
	UI_remove_answer("孤單");
	UI_add_answer(["Alagner", "Russell", "Henry"]);
labelFunc0409_0294:
	case "Alagner" attend labelFunc0409_02A7:
	message("「他是個智者，知道很多事情，還會講精彩的故事。 Alagner 來到這裡是為了逃避外面的世界。我不知道為什麼。」");
	say();
	UI_remove_answer("Alagner");
labelFunc0409_02A7:
	case "Russell" attend labelFunc0409_02BA:
	message("「他有著水手的心、藝術家的靈魂和工匠的手。他從未實現他航海環遊世界的夢想。他的船隻替他實現了。」");
	say();
	UI_remove_answer("Russell");
labelFunc0409_02BA:
	case "Henry" attend labelFunc0409_02D4:
	message("「Henry 多年來一直是我非常親愛的朋友。他是個單純的好人，心裡對任何人都不曾有一絲怨恨。我非常喜歡他，所以給了他一件珍貴的傳家寶。」");
	say();
	UI_remove_answer("Henry");
	UI_add_answer("傳家寶");
labelFunc0409_02D4:
	case "吊飾盒", "傳家寶" attend labelFunc0409_02F8:
	message("「因為他沒什麼錢，所以我把我的金屬吊飾盒給了 Henry ，好讓他能送給他的心上人 Constance 。我最近沒跟他說話，但我必須承認我很擔心他。」");
	say();
	UI_remove_answer("吊飾盒");
	UI_remove_answer("傳家寶");
	UI_add_answer("擔心");
labelFunc0409_02F8:
	case "擔心" attend labelFunc0409_030B:
	message("「Henry 帶著吊飾盒離開後不久，我看到島上的那三個陌生人朝著同一個方向遊蕩過去了。」");
	say();
	UI_remove_answer("擔心");
labelFunc0409_030B:
	case "訪客", "陌生人" attend labelFunc0409_032B:
	message("「這三位訪客來自海盜巢穴 (Buccaneer's Den)。在他們到達後不久，我見到了他們，我們簡短地交談了幾句。 Robin 是那個打扮得像賭徒的人，另外兩個， Battles 和 Leavell ，看起來像惡霸。」");
	say();
	UI_remove_answer(["陌生人", "訪客"]);
	gflags[0x0180] = true;
labelFunc0409_032B:
	case "Iolo" attend labelFunc0409_0379:
	if (!(!var0005)) goto labelFunc0409_0341;
	message("「Iolo 應該在我們的隊伍裡，和我們一起冒險。」");
	say();
	goto labelFunc0409_0372;
labelFunc0409_0341:
	message("「這些年來你過得怎麼樣， Iolo？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「歲月對我顯然沒有對妳那麼寬容，女士。」*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「哈！看來你還是個無賴， Iolo。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_0372:
	UI_remove_answer("Iolo");
labelFunc0409_0379:
	case "Shamino" attend labelFunc0409_03C7:
	if (!(!var0004)) goto labelFunc0409_038F;
	message("「Shamino 應該和我們在這裡。」");
	say();
	goto labelFunc0409_03C0;
labelFunc0409_038F:
	message("「我看到你頭髮裡有白頭髮嗎， Shamino？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「才不是！哪裡？」*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「也許只是光線的把戲吧。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_03C0:
	UI_remove_answer("Shamino");
labelFunc0409_03C7:
	case "Dupre" attend labelFunc0409_0423:
	if (!(!var0006)) goto labelFunc0409_03DD;
	message("「我忍不住有點想念 Dupre 。自從他被封為騎士後，我就沒見過他了。」");
	say();
	goto labelFunc0409_041C;
labelFunc0409_03DD:
	message("「Dupre 爵士，你完成你的學業了嗎？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 看起來很困惑。「我的學業，女士？」*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「對於 Britannia 各式各樣的飲酒場所的研究！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「噢，是的，當然，我的學業！繼續我的教育對我來說一直是最重要的。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_041C:
	UI_remove_answer("Dupre");
labelFunc0409_0423:
	case "告辭" attend labelFunc0409_042E:
	goto labelFunc0409_0431;
labelFunc0409_042E:
	goto labelFunc0409_00AE;
labelFunc0409_0431:
	endconv;
	message("「祝你有個愉快的一天，");
	message(var0003);
	message("。」*");
	say();
labelFunc0409_043C:
	if (!(event == 0x0000)) goto labelFunc0409_044A;
	Func092E(0xFFF7);
labelFunc0409_044A:
	return;
}


