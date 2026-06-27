#game "blackgate"
// externs
extern void Func0843 0x843 ();
extern var Func0844 0x844 (var var0000);
extern var Func090A 0x90A ();
extern void Func0690 object#(0x690) ();
extern var Func0846 0x846 ();
extern void Func0845 0x845 (var var0000);
extern var Func0908 0x908 ();
extern var Func0849 0x849 (var var0000);
extern var Func0848 0x848 (var var0000);
extern var Func0847 0x847 (var var0000);
extern var Func08E7 0x8E7 ();
extern void Func06FC object#(0x6FC) ();
extern var Func092D 0x92D (var var0000);

void Func06F6 object#(0x6F6) ()
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
	var var001A;
	var var001B;
	var var001C;
	var var001D;

	if (!(!gflags[0x032F])) goto labelFunc06F6_0357;
	UI_show_npc_face(0xFEDE, 0x0000);
	var0000 = false;
	var0001 = UI_find_nearby(item, 0x009A, 0x000A, 0x0008);
	enum();
labelFunc06F6_0027:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06F6_004E;
	if (!UI_get_cont_items(var0004, 0x031D, 0x00F0, 0x0004)) goto labelFunc06F6_004B;
	var0000 = var0004;
labelFunc06F6_004B:
	goto labelFunc06F6_0027;
labelFunc06F6_004E:
	if (!var0000) goto labelFunc06F6_0093;
	message("「是的，主人。我有什麼能為您效勞的？」鏡子裡的黑暗身形深深地鞠了一躬。");
	say();
	UI_show_npc_face(0xFEE2, 0x0001);
	var0005 = "Erethian";
	if (!(!gflags[0x0310])) goto labelFunc06F6_0075;
	var0005 = "the mage";
labelFunc06F6_0075:
	message("驚訝的");
	message(var0005);
	message("環顧四周說道：「我不記得召喚過你。算了，我現在不需要你。走開！」老人漫不經心地揮了揮手。");
	say();
	UI_show_npc_face(0xFEDE, 0x0000);
	message("那個人影咬緊牙關擠出笑容回答：「很好……」在明顯的停頓之後，「主人。」*");
	say();
	Func0843();
	goto labelFunc06F6_01B1;
labelFunc06F6_0093:
	if (!gflags[0x0332]) goto labelFunc06F6_0136;
	if (!gflags[0x0333]) goto labelFunc06F6_00A9;
	message("Arcadion 顯得非常驚訝，「你還在等什麼？！我求求你！放了我！」");
	say();
	Func0843();
	goto labelFunc06F6_0133;
labelFunc06F6_00A9:
	var0006 = UI_find_nearby(item, 0x02F8, 0x000F, 0x0000);
	var0007 = false;
	if (!var0006) goto labelFunc06F6_00FB;
	var0007 = Func0844(var0006);
	if (!var0007) goto labelFunc06F6_00E1;
	message("「附近有一顆寶石可以讓我重獲自由！那是一顆藍色的小石頭。快拿著它，用它把我從這面該死的鏡子裡放出來！」大惡魔因壓抑的挫折感而沸騰。*");
	say();
	gflags[0x0333] = true;
	Func0843();
	goto labelFunc06F6_00F8;
labelFunc06F6_00E1:
	message("「在我重獲自由的過程中，我能幫上什麼小忙嗎？如果是這樣，你儘管開口。」Arcadion 的笑容咧到了耳根。");
	say();
	UI_add_answer(["姓名", "職業", "釋放", "告辭"]);
labelFunc06F6_00F8:
	goto labelFunc06F6_0133;
labelFunc06F6_00FB:
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0x000C)) goto labelFunc06F6_011C;
	message("「你身上有一顆藍色的小寶石。它可以用來釋放我！用它敲碎這面該死的鏡子！我一獲得自由就會進入它！」 Arcadion 看起來準備從鏡子裡衝出來。*");
	say();
	gflags[0x0333] = true;
	Func0843();
	goto labelFunc06F6_0133;
labelFunc06F6_011C:
	message("「在我重獲自由的過程中，我能幫上什麼小忙嗎？如果是這樣，你儘管開口。」Arcadion 的笑容咧到了耳根。");
	say();
	UI_add_answer(["姓名", "職業", "釋放", "告辭"]);
labelFunc06F6_0133:
	goto labelFunc06F6_01B1;
labelFunc06F6_0136:
	if (!gflags[0x0331]) goto labelFunc06F6_0171;
	message("「走開吧，小凡人。別用你那些無聊的胡言亂語來糾纏比你更優秀的存在。」他一開始顯得漠不關心，然後表情變得緊張起來，「除非你重新考慮了我的提議……你考慮好了嗎？」");
	say();
	if (!Func090A()) goto labelFunc06F6_0167;
	message("Arcadion 臉上閃過一抹邪惡的勝利神色，但很快就被一種滑稽的感激之情所取代，「你發誓要釋放我，真是勇氣可嘉。我對你感激不盡。」惡魔臉上掛著油膩的笑容，「凡人，你今天結交了一個非常強大的盟友。」他眨了眨眼，那可能是想表現得迷人一點。");
	say();
	gflags[0x0332] = true;
	UI_add_answer(["姓名", "職業", "惡魔", "釋放", "告辭"]);
	goto labelFunc06F6_016E;
labelFunc06F6_0167:
	message("「啊，我明白了。你仍然滿足於和其他羊群一起亂跑。」他對你揮了揮手，然後從視線中消失了。*");
	say();
	Func0843();
labelFunc06F6_016E:
	goto labelFunc06F6_01B1;
labelFunc06F6_0171:
	if (!(!gflags[0x0313])) goto labelFunc06F6_019A;
	message("「是的，主人。我有什麼能為您效勞的……」鏡子裡搖晃的面孔猶豫了一下，「你不是我的主人。」");
	say();
	message("然後他微微鞠了一躬，繼續說道：「你好，不列顛尼亞人。你對偉大的惡魔 Arcadion 有什麼期望？」");
	say();
	gflags[0x0313] = true;
	UI_add_answer(["姓名", "職業", "惡魔", "告辭"]);
	goto labelFunc06F6_01B1;
labelFunc06F6_019A:
	message("「再次問候，不列顛尼亞人。你對我有什麼期望？」惡魔是意氣相投的靈魂。");
	say();
	UI_add_answer(["姓名", "職業", "惡魔", "告辭"]);
labelFunc06F6_01B1:
	var0008 = false;
labelFunc06F6_01B5:
	converse attend labelFunc06F6_0352;
	case "姓名" attend labelFunc06F6_01E3:
	message("大惡魔討好地笑著，露出了一吋長的尖牙。「我說過，我是惡魔 Arcadion。」");
	say();
	if (!gflags[0x0332]) goto labelFunc06F6_01CE;
	message("他那略顯拋光的偽裝似乎在他對自由的期盼中逐漸瓦解。");
	say();
labelFunc06F6_01CE:
	if (!(!var0008)) goto labelFunc06F6_01DC;
	UI_add_answer("惡魔");
labelFunc06F6_01DC:
	UI_remove_answer("姓名");
labelFunc06F6_01E3:
	case "職業" attend labelFunc06F6_0218:
	if (!(!gflags[0x0332])) goto labelFunc06F6_0206;
	message("Arcadion 試圖微笑，但卻慘遭失敗，他對你扮了個鬼臉，那鬼臉足以讓龍變成石頭。「我目前在為一位名叫 Erethian 的法師服務。」他相當正式地說。你有一個明顯的印象，Arcadion 寧願把 Erethian 撕成碎片，也不願為他服務。");
	say();
	UI_add_answer(["Erethian", "服侍"]);
	goto labelFunc06F6_0211;
labelFunc06F6_0206:
	message("「好吧，如果你遵守諾言釋放我，我就能擺脫那個長滿蝨子、被跳蚤咬過的老法師了。」");
	say();
	UI_add_answer("釋放");
labelFunc06F6_0211:
	UI_remove_answer("職業");
labelFunc06F6_0218:
	case "Erethian" attend labelFunc06F6_0239:
	message("「他是我的主人……」惡魔的笑容扭曲成幾乎無法掩飾的仇恨。「直到……做出其他的安排。」Arcadion 迷人的笑容出現在他陰暗的面容上。");
	say();
	if (!(!var0008)) goto labelFunc06F6_0232;
	UI_add_answer("惡魔");
labelFunc06F6_0232:
	UI_remove_answer("Erethian");
labelFunc06F6_0239:
	case "惡魔" attend labelFunc06F6_0250:
	message("「這就是你們的人稱呼我們種族的方式。」你無法從 Arcadion 的語氣中判斷他是否介意這個事實。");
	say();
	UI_remove_answer("惡魔");
	var0008 = true;
labelFunc06F6_0250:
	case "服侍" attend labelFunc06F6_02B0:
	message("這隻大惡魔閉上眼睛，似乎在克制某種恐怖情緒的力量，");
	say();
	message("「我已經為那個瞎眼的、老態龍鍾的傻瓜服務了兩百多年！」Arcadion 停頓了一下，恢復了鎮定。一個想法明顯地掠過他黑暗的臉龐，「也許你可以協助我擺脫這種不想要的束縛。我會證明自己是一個無價的盟友。」惡魔停頓了一下，讓他的提議深入人心，然後說：「那麼，凡人。你願意幫助我嗎？」");
	say();
	if (!Func090A()) goto labelFunc06F6_028D;
	message("Arcadion 臉上閃過一抹邪惡的勝利神色，但很快就被一種滑稽的感激之情所取代，「你發誓要釋放我，真是勇氣可嘉。我對你感激不盡。」惡魔臉上掛著油膩的笑容，「凡人，你今天結交了一個非常強大的盟友。」他眨了眨眼，那可能是想表現得迷人一點。");
	say();
	gflags[0x0332] = true;
	UI_remove_answer("服侍");
	if (!(!var0008)) goto labelFunc06F6_0283;
	UI_add_answer("惡魔");
labelFunc06F6_0283:
	UI_add_answer("釋放");
	goto labelFunc06F6_02B0;
labelFunc06F6_028D:
	gflags[0x0331] = true;
	UI_show_npc_face(0xFEDE, 0x0001);
	message("Arcadion 看起來好像要強行穿過鏡子，然後再次控制住他難以置信的憤怒。");
	say();
	UI_show_npc_face(0xFEDE, 0x0000);
	message("他將粗壯的手臂交叉在寬闊的胸前，慢慢恢復了他那可怕的笑容：「在這種情況下，我可以尊重你的懦弱。畢竟，Erethian 是一位強大的法師，不是像你這樣的羊可以隨便招惹的。」當惡魔準備離開時，他那輕蔑的冷笑開始消退。*");
	say();
	Func0843();
labelFunc06F6_02B0:
	case "釋放" attend labelFunc06F6_02CA:
	message("「當你打破這面作為監獄的鏡子時，我需要一顆特殊的寶石來容納我的精華。」他的眼中閃爍著即將獲得自由的可能性的光芒。");
	say();
	UI_add_answer("寶石");
	UI_remove_answer("釋放");
labelFunc06F6_02CA:
	case "寶石" attend labelFunc06F6_0333:
	var0006 = UI_find_nearby(item, 0x02F8, 0x000F, 0x0000);
	var0007 = false;
	if (!var0006) goto labelFunc06F6_030E;
	var0007 = Func0844(var0006);
	if (!var0007) goto labelFunc06F6_0307;
	message("「我能感覺到寶石就在附近！拿著它！快拿著它，用它把我從這面該死的鏡子裡放出來！」Arcadion 幾乎因為期待而流口水了。*");
	say();
	gflags[0x0333] = true;
	goto labelFunc06F6_030B;
labelFunc06F6_0307:
	message("「島上有一顆，這點我很清楚。找到它。把它帶給我，我們一起打破這面將我束縛在那個該死的法師身邊的鏡子。*");
	say();
labelFunc06F6_030B:
	goto labelFunc06F6_0330;
labelFunc06F6_030E:
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0x000C)) goto labelFunc06F6_032C;
	message("「你拿到寶石了！我感覺到了！現在用它來打破鏡子！我一獲得自由就會進入它！」惡魔幾乎無法克制他的熱情。*");
	say();
	gflags[0x0333] = true;
	goto labelFunc06F6_0330;
labelFunc06F6_032C:
	message("「島上有一顆，這點我很清楚。找到它。把它帶給我，我們一起打破這面將我束縛在那個該死的法師身邊的鏡子。*");
	say();
labelFunc06F6_0330:
	Func0843();
labelFunc06F6_0333:
	case "告辭" attend labelFunc06F6_034F:
	if (!gflags[0x0332]) goto labelFunc06F6_0348;
	message("Arcadion 以一種非常不符合惡魔形象的方式眨了眨眼：「再見，勇敢的凡人。你的勇氣在人類中無與倫比。」*");
	say();
	goto labelFunc06F6_034C;
labelFunc06F6_0348:
	message("微笑的惡魔再次鞠躬：「再見，不列顛尼亞人。直到我們再次相遇。」惡魔的最後一句話還沒說完，就開始消失了。*");
	say();
labelFunc06F6_034C:
	Func0843();
labelFunc06F6_034F:
	goto labelFunc06F6_01B5;
labelFunc06F6_0352:
	endconv;
	return;
	goto labelFunc06F6_0CF4;
labelFunc06F6_0357:
	if (!(!gflags[0x0330])) goto labelFunc06F6_066D;
	if (!(event == 0x0001)) goto labelFunc06F6_036E;
	UI_close_gumps();
	item->Func0690();
labelFunc06F6_036E:
	if (!(!(event == 0x0002))) goto labelFunc06F6_0378;
	return;
labelFunc06F6_0378:
	UI_show_npc_face(0xFEDD, 0x0000);
	var0009 = false;
	if (!(!gflags[0x0313])) goto labelFunc06F6_03BB;
	message("小寶石隨著能量跳動著，「現在全不列顛尼亞都將感受到我的憤怒。我要讓他們為我在那面該死的鏡子裡度過的每一個十年付出代價！」寶石發出更明亮的光芒，你預期世界會分崩離析……然後，什麼事也沒發生。「不！」惡魔原始的尖叫聲透過寶石的媒介聽起來有點像水晶般的清脆。「這不可能！那個老傻瓜是對的。我還被困住！」惡魔痛苦的聲音安靜了下來。");
	say();
	gflags[0x0313] = true;
	UI_add_answer(["姓名", "職業", "憤怒", "困住", "告辭"]);
	if (!gflags[0x0338]) goto labelFunc06F6_03B8;
	UI_add_answer("黑劍");
labelFunc06F6_03B8:
	goto labelFunc06F6_03EC;
labelFunc06F6_03BB:
	message("寶石對你閃爍著光芒，「是的，主人。我有什麼能為您效勞的？」Arcadion 的聲音變得柔和了。");
	say();
	UI_add_answer(["姓名", "職業", "主人", "告辭"]);
	if (!gflags[0x0338]) goto labelFunc06F6_03DF;
	UI_add_answer("黑劍");
labelFunc06F6_03DF:
	if (!gflags[0x0334]) goto labelFunc06F6_03EC;
	UI_add_answer("力量");
labelFunc06F6_03EC:
	converse attend labelFunc06F6_0669;
	case "黑劍" attend labelFunc06F6_0409:
	message("「如果你希望我將寶石與劍結合，你只要吩咐我就行了，主人。」");
	say();
	UI_add_answer("結合");
	UI_remove_answer("黑劍");
labelFunc06F6_0409:
	case "結合" attend labelFunc06F6_04D2:
	if (!Func0846()) goto labelFunc06F6_04C7;
	var000A = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x029C, 0xFE99, 0x000F);
	var000B = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D);
	UI_remove_item(var000A);
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x02C3);
	UI_set_item_frame(var000C, 0x0000);
	message("「遵命！」");
	say();
	message("當寶石接觸到劍柄十字時，空氣中傳來撕裂金屬的刺耳聲。劍刃移動並閃爍著，彷彿有生命一般。");
	say();
	if (!UI_give_last_created(UI_get_npc_object(0xFE9C))) goto labelFunc06F6_0484;
	message("慢慢地，劍恢復了原來的形狀，只是劍柄上閃爍著藍色的寶石。");
	say();
	goto labelFunc06F6_04A0;
labelFunc06F6_0484:
	message("閃過一道只能被形容為黑光的閃光，劍從你手中被猛然奪走，掉落在地上。");
	say();
	var000D = UI_get_object_position(UI_get_npc_object(0xFE9C));
	var000E = UI_update_last_created(var000D);
labelFunc06F6_04A0:
	gflags[0x0330] = true;
	gflags[0x0313] = false;
	var000F = UI_execute_usecode_array(var000C, [(byte)0x2C, (byte)0x23, (byte)0x55, 0x070B, (byte)0x55, 0x06F6]);
	abort;
	goto labelFunc06F6_04CB;
labelFunc06F6_04C7:
	message("「劍和寶石必須都在你的手中，才能完成結合。」");
	say();
labelFunc06F6_04CB:
	UI_remove_answer("結合");
labelFunc06F6_04D2:
	case "姓名" attend labelFunc06F6_04E5:
	message("「我的名字還是 Arcadion，儘管我的監獄變了。」");
	say();
	UI_remove_answer("姓名");
labelFunc06F6_04E5:
	case "職業" attend labelFunc06F6_0506:
	message("「我現在是你的僕人。你有什麼吩咐，主人？」");
	say();
	if (!(!var0009)) goto labelFunc06F6_04FF;
	UI_add_answer("主人");
labelFunc06F6_04FF:
	UI_remove_answer("職業");
labelFunc06F6_0506:
	case "憤怒" attend labelFunc06F6_0527:
	message("Arcadion 回答時聽起來有些沉思：「請原諒我一時的輕率，主人。我痛苦的情緒短暫地戰勝了我的理智。我不會讓這種事再發生了。」");
	say();
	if (!(!var0009)) goto labelFunc06F6_0520;
	UI_add_answer("主人");
labelFunc06F6_0520:
	UI_remove_answer("憤怒");
labelFunc06F6_0527:
	case "困住" attend labelFunc06F6_0565:
	var0005 = false;
	if (!(!gflags[0x0310])) goto labelFunc06F6_0543;
	var0005 = "the mage Erethian";
	goto labelFunc06F6_0549;
labelFunc06F6_0543:
	var0005 = "Erethian";
labelFunc06F6_0549:
	message("「看來");
	message(var0005);
	message("的假設是正確的，如果我進入這顆寶石，我的力量將無法隨心所欲地釋放，而是聽從擁有這顆寶石的人的差遣。」");
	say();
	gflags[0x0334] = true;
	UI_add_answer("力量");
	UI_remove_answer("困住");
labelFunc06F6_0565:
	case "力量" attend labelFunc06F6_0628:
	if (!(!gflags[0x0333])) goto labelFunc06F6_05CC;
	message("你聽到一聲微弱的嘆息，然後，「你想分享我的力量嗎？」");
	say();
	if (!Func090A()) goto labelFunc06F6_059B;
	message("Arcadion 聽起來很失望：「我就知道會是這樣。我注定永遠是意志薄弱的凡人的奴隸。好吧，那麼，準備接受我巨大能量的一部分吧。");
	say();
	gflags[0x0333] = true;
	Func0845(false);
	if (!(!var0009)) goto labelFunc06F6_0598;
	UI_add_answer("主人");
labelFunc06F6_0598:
	goto labelFunc06F6_05C9;
labelFunc06F6_059B:
	if (!(!gflags[0x0335])) goto labelFunc06F6_05BB;
	message("「也許我看錯你了，主人。」他若有所思地停頓了一下，「也許隨著時間的推移，你可以稱我為朋友，也可以稱我為盟友。」");
	say();
	gflags[0x0335] = true;
	if (!(!var0009)) goto labelFunc06F6_05B8;
	UI_add_answer("主人");
labelFunc06F6_05B8:
	goto labelFunc06F6_05C9;
labelFunc06F6_05BB:
	if (!(!var0009)) goto labelFunc06F6_05C9;
	UI_add_answer("主人");
labelFunc06F6_05C9:
	goto labelFunc06F6_0621;
labelFunc06F6_05CC:
	message("「你又需要我的能量了？」Arcadion 有些任性地問道。");
	say();
	if (!Func090A()) goto labelFunc06F6_05EF;
	message("「很好，準備好了。」寶石發光。");
	say();
	Func0845(false);
	if (!(!var0009)) goto labelFunc06F6_05EC;
	UI_add_answer("主人");
labelFunc06F6_05EC:
	goto labelFunc06F6_0621;
labelFunc06F6_05EF:
	if (!(!gflags[0x0335])) goto labelFunc06F6_060F;
	message("「你對我有什麼期望……」停頓了一下，「主人？」");
	say();
	gflags[0x0335] = true;
	if (!(!var0009)) goto labelFunc06F6_060C;
	UI_add_answer("主人");
labelFunc06F6_060C:
	goto labelFunc06F6_0621;
labelFunc06F6_060F:
	message("「你是想用無用的問題來折磨我，還是我可以為您效勞……」長長的停頓，「主人。」");
	say();
	if (!(!var0009)) goto labelFunc06F6_0621;
	UI_add_answer("主人");
labelFunc06F6_0621:
	UI_remove_answer("力量");
labelFunc06F6_0628:
	case "主人" attend labelFunc06F6_0646:
	message("惡魔停頓了一下，「你囚禁了我的肉體，因此我被遠比你我所掌握的還要古老的力量束縛，必須服從你的意志。你對我有什麼期望？」");
	say();
	UI_add_answer("束縛");
	var0009 = true;
	UI_remove_answer("主人");
labelFunc06F6_0646:
	case "束縛" attend labelFunc06F6_0659:
	message("「很久以前，即使以我的時間計算也是如此，我的人民在試圖征服這個領域時，被一個強大的種族擊敗了。這個種族早在你的君主，不列顛王（不列顛王）到來之前就住在這裡了。我的人民被擊敗了，他們預期會面臨死亡，但這些偉大而強大的存在並不是毀滅者。然而，他們也不希望我的同類進一步造成破壞。所以他們編織了超出我種族認知的魔法，將我們與這個領域的居民綁定在一起。你們自己的人只是利用現有的魔法來奴役我們，有時甚至不知道這是如何實現的。」");
	say();
	UI_remove_answer("束縛");
labelFunc06F6_0659:
	case "告辭" attend labelFunc06F6_0666:
	message("「再見，我的主人。」寶石似乎暗淡了一點。*");
	say();
	abort;
labelFunc06F6_0666:
	goto labelFunc06F6_03EC;
labelFunc06F6_0669:
	endconv;
	goto labelFunc06F6_0CF4;
labelFunc06F6_066D:
	if (!(event == 0x0001)) goto labelFunc06F6_067D;
	UI_close_gumps();
	item->Func0690();
labelFunc06F6_067D:
	if (!(event == 0x0002)) goto labelFunc06F6_0CF4;
	if (!(!gflags[0x0313])) goto labelFunc06F6_075D;
	if (!(!gflags[0x0343])) goto labelFunc06F6_06D8;
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, 0x0004, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001]);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0007, (byte)0x55, 0x06F6]);
	gflags[0x0343] = true;
	return;
labelFunc06F6_06D8:
	if (!(!gflags[0x0344])) goto labelFunc06F6_0748;
	var000D = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0011, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0x0003);
	UI_sprite_effect(0x0011, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x003E);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0003, (byte)0x55, 0x06F6]);
	gflags[0x0344] = true;
	return;
labelFunc06F6_0748:
	UI_show_npc_face(0xFEDC, 0x0000);
	message("當你對它說話時，劍閃爍著暗光。「你好，我的主人。你謙卑的僕人能為您效勞嗎？」惡魔的聲音恢復了許多他那令人不安的幽默感。");
	say();
	gflags[0x0313] = true;
	goto labelFunc06F6_076B;
labelFunc06F6_075D:
	UI_show_npc_face(0xFEDC, 0x0000);
	message("「是的，主人。你對你的僕人有什麼期望？」Arcadion 用低沉、和諧的聲音問你。");
	say();
labelFunc06F6_076B:
	UI_add_answer(["姓名", "職業", "告辭", "力量"]);
	if (!(gflags[0x030E] && (!gflags[0x030C]))) goto labelFunc06F6_0790;
	UI_add_answer("幫忙");
labelFunc06F6_0790:
	var0011 = false;
	var0012 = false;
	var0013 = false;
	var0014 = false;
	var0015 = false;
labelFunc06F6_07A4:
	converse attend labelFunc06F6_0B88;
	case "姓名" attend labelFunc06F6_07BA:
	message("惡魔劍的語氣相當不祥，他說：「我是，而且永遠都是你的僕人 Arcadion。」");
	say();
	UI_remove_answer("姓名");
labelFunc06F6_07BA:
	case "職業" attend labelFunc06F6_07CD:
	message("「我是暗影之刃。我的命運就是為您服務，直到我們……」劍停頓了一下，「分開。」");
	say();
	UI_remove_answer("職業");
labelFunc06F6_07CD:
	case "力量" attend labelFunc06F6_0812:
	if (!(!UI_is_readied(UI_get_npc_object(0xFE9C), 0x0001, 0x02C3, 0xFE99))) goto labelFunc06F6_07F4;
	message("「主人，如果你想使用我的力量，我必須在你的手中。」");
	say();
	goto labelFunc06F6_0812;
labelFunc06F6_07F4:
	message("「你想使用我的哪種力量？」");
	say();
	UI_push_answers();
	UI_add_answer(["魔法", "火焰", "死亡", "返回", "無"]);
labelFunc06F6_0812:
	case "幫忙" attend labelFunc06F6_0832:
	message("Arcadion 在回覆你的求助請求時，聲音洋洋得意。「是的，如果你希望將 Exodus 剩下的部分放逐到虛空中，我可以幫助你。首先，你需要那個老糊塗提到的透鏡。接下來，你必須擁有三個原則護符（Talismans of Principle）。最後，確保在黑暗核心所在的基座兩側牆上有點燃的火炬。");
	say();
	UI_add_answer(["透鏡", "護符"]);
	UI_remove_answer("幫忙");
labelFunc06F6_0832:
	case "透鏡" attend labelFunc06F6_0845:
	message("「我相信你用來將無限智慧法典放置在虛空中的凹凸透鏡，現在被遺忘在不列顛尼亞博物館裡。它們必須被放置在黑暗核心和基座兩側的火炬之間。」");
	say();
	UI_remove_answer("透鏡");
labelFunc06F6_0845:
	case "護符" attend labelFunc06F6_0858:
	message("「原則護符必須像派裡的楔子一樣放置在黑暗核心上。」");
	say();
	UI_remove_answer("護符");
labelFunc06F6_0858:
	case "無" attend labelFunc06F6_0868:
	message("「如你所願，主人。我只求為您服務。」");
	say();
	UI_pop_answers();
labelFunc06F6_0868:
	case "魔法" attend labelFunc06F6_089C:
	var0016 = UI_part_of_day();
	if (!((var0016 == 0x0007) || ((var0016 == 0x0000) || (var0016 == 0x0001)))) goto labelFunc06F6_0898;
	Func0845(true);
	goto labelFunc06F6_089C;
labelFunc06F6_0898:
	message("劍低聲吟唱：「唉，主人。我的能量似乎有點低。也許如果你能找到一些生物來殺戮，我的力量就足夠了。畢竟，我也和你有同樣的需求。」");
	say();
labelFunc06F6_089C:
	case "死亡" attend labelFunc06F6_0B2A:
	message("「你說的屍體在哪裡？」暗劍開始在你手中震動。*");
	say();
	UI_remove_npc_face(0xFEDC);
	var0011 = UI_click_on_item();
	var0017 = UI_get_item_shape(var0011);
	var0018 = UI_get_object_position(var0011);
	UI_show_npc_face(0xFEDC, 0x0000);
	if (!UI_is_npc(var0011)) goto labelFunc06F6_0ABC;
	if (!((var0017 == 0x02D1) || (var0017 == 0x03DD))) goto labelFunc06F6_08F7;
	message("惡魔用假裝虔誠的語氣說話：「為了榮譽，我不能奪走我最奇妙的主人的生命。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_08F7:
	if (!(var0017 == 0x01D2)) goto labelFunc06F6_0988;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0981;
	message("「是的！我早就想結束不列顛王，我那個叛徒主人的生命了。」");
	say();
	var0019 = Func0908();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"");
	message(var0019);
	message("，你為什麼要在我面前揮舞那把黑劍？」");
	say();
	UI_remove_npc_face(0xFEDC);
	UI_show_npc_face(0xFE9C, 0x0000);
	message("惡魔用你的嘴回答：「這把劍是你的末日，……」你吐出這些字眼，「不列顛王！」");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("不列顛王看起來真的吃了一驚，他瞇起眼睛算計著。「這是什麼骯髒的背叛？」");
	say();
	UI_show_npc_face(0xFE9C, 0x0000);
	message("你發現自己無法回答，你的肌肉緊繃著，彷彿要用手中那把邪惡的劍猛烈攻擊。");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「也許當你坐在地牢裡時，你的舌頭就會鬆開了。");
	say();
	message("「守衛！」*");
	say();
	var0014 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0988;
labelFunc06F6_0981:
	message("暗影之刃發出刺耳的低語。「再靠近他一點，我會為你完成這項任務，主人。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0988:
	if (!((var0017 == 0x01E2) || (var0017 == 0x0193))) goto labelFunc06F6_09A1;
	message("「唉，主人，這個人受到一種比我更強大的力量保護。他的命運在別處。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_09A1:
	if (!Func0849(var0017)) goto labelFunc06F6_09B1;
	message("劍因類似恐懼的情緒而退縮。「那個生物甚至超出了我的能力範圍。我建議如果可能的話，你把它砍成碎片，然後燒掉那些碎片。」Arcadion 提供有益的建議。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_09B1:
	if (!(var0017 == 0x01F8)) goto labelFunc06F6_0A21;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0A1A;
	if (!UI_get_cont_items(var0011, 0x031D, 0x00F1, 0x0004)) goto labelFunc06F6_0A14;
	message("「啊，Dracothraxus。我們又見面了。真可惜你這次無法在我們的會面中倖存下來。也許如果你一開始就把寶石給我，這一切的不愉快就沒有必要了。」");
	say();
	UI_show_npc_face(0xFEDB, 0x0000);
	message("這條龍非常無奈地回答：「在這件事上，我的意志由不得我，Arcadion。也許你也發現，你的意志由不得你。」");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("這隻惡魔可能被這條龍的反駁刺痛了，沉默了下來，開始進行他血腥的工作。*");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0A17;
labelFunc06F6_0A14:
	goto labelFunc06F6_0A7F;
labelFunc06F6_0A17:
	goto labelFunc06F6_0A21;
labelFunc06F6_0A1A:
	message("暗影之刃溫柔地低聲吟唱：「再靠近這條龍一點，我會為你結束它的生命，主人。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A21:
	if (!(var0017 == 0x009A)) goto labelFunc06F6_0A6E;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0A67;
	if (!UI_get_cont_items(var0011, 0x031D, 0x00F0, 0x0004)) goto labelFunc06F6_0A61;
	message("「我欠你一個人情，主人。我感謝你允許我這樣做，我的復仇！」*");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0A64;
labelFunc06F6_0A61:
	goto labelFunc06F6_0A7F;
labelFunc06F6_0A64:
	goto labelFunc06F6_0A6E;
labelFunc06F6_0A67:
	message("「靠近他，我會確保他的生命不再折磨你。」黑劍對這個前景聽起來幾乎是興高采烈的。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A6E:
	if (!(var0017 == 0x03F7)) goto labelFunc06F6_0A7F;
	message("「嚴格來說，這種生物並不……活著。你最好的行動方案是把它打碎。」你聽出 Arcadion 聲音裡的笑意。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A7F:
	if (!Func0848(var0017)) goto labelFunc06F6_0AB5;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0AAB;
	message("「很好，主人。如果你不能親自解決這個敵人，我會為你解決。」");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0AB2;
labelFunc06F6_0AAB:
	message("「我必須靠近它，才能享受它的精華。」劍急切地嗡嗡作響，向你選擇的目標方向拉扯。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0AB2:
	goto labelFunc06F6_0ABC;
labelFunc06F6_0AB5:
	message("惡魔之劍突然停止了震動。「這種生物不值得我讓它死。當你面臨更值得的對手時，再召喚我吧。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ABC:
	if (!Func0847(var0017)) goto labelFunc06F6_0ACC;
	message("「也許你誤解了我的意思。我不讓死人復活……我殺戮活人。」最後一句話是以嘶嘶作響的低語說出的。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ACC:
	if (!(!var0017)) goto labelFunc06F6_0ADA;
	message("「你要我摧毀你周圍的世界。對你這樣一個被認為是品德高尚的人來說，這不是一個很聰明的主意。」劍裡傳出一陣奇怪的金屬笑聲。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ADA:
	if (!(var0017 == 0x009B)) goto labelFunc06F6_0AEB;
	message("這把劍因類似恐懼的情緒而退縮。「那個存在甚至超出了我的能力範圍。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0AEB:
	if (!((var0017 == 0x031C) || (var0017 == 0x01BF))) goto labelFunc06F6_0B04;
	message("惡魔之劍突然停止了震動。「這種生物不值得我讓它死。當你面臨更值得的對手時，再召喚我吧。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B04:
	if (!(var0017 == 0x02C3)) goto labelFunc06F6_0B15;
	message("「主人，你沒那麼容易擺脫我。不過，我並不嫉妒你的嘗試。恰恰相反。我尊重你的足智多謀。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B15:
	if (!(var0017 == 0x03DE)) goto labelFunc06F6_0B26;
	message("「要是我有那樣的力量就好了。只要我能解開它的秘密，那件神器就能讓我回到我的家鄉位面。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B26:
	message("「你對這個無生命的物體有這麼大的怨恨，以至於想看到它永遠毀滅嗎？」他的聲音充滿了毫不掩飾的諷刺。「我無法從已經沒有生命的東西上奪走生命。」");
	say();
labelFunc06F6_0B2A:
	case "返回" attend labelFunc06F6_0B5C:
	if (!(!Func08E7())) goto labelFunc06F6_0B58;
	message("「啊……又回家了。我永遠不會對岩石小島感到厭倦。你真的想去那座被遺棄的烈火島（Isle of Fire）嗎？」");
	say();
	if (!Func090A()) goto labelFunc06F6_0B51;
	message("「我明白了。很好，主人。但我們不要忘記這個小小的恩惠……」劍柄上的寶石發出明亮的光芒，然後一切都變暗了。*");
	say();
	var0013 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0B55;
labelFunc06F6_0B51:
	message("「很好。理智回到了美德奇蹟的身上。主人，你在思想的舞台上真的是無與倫比。」");
	say();
labelFunc06F6_0B55:
	goto labelFunc06F6_0B5C;
labelFunc06F6_0B58:
	message("「請原諒我，主人，但我們不是已經在烈火島（Isle of Fire）上或附近了嗎？雖然我不明白為什麼有人想留在這塊被遺棄的岩石上。」");
	say();
labelFunc06F6_0B5C:
	case "火焰" attend labelFunc06F6_0B76:
	message("「請問，你那巨大而強大無比的憤怒的預定目標是什麼，無盡毀滅的主人？」");
	say();
	UI_remove_npc_face(0xFEDC);
	var0012 = true;
	goto labelFunc06F6_0B89;
labelFunc06F6_0B76:
	case "告辭" attend labelFunc06F6_0B85:
	message("「請原諒我，主人，但我不會離開。但是，如果你希望的話……你可以停止說話。」*");
	say();
	goto labelFunc06F6_0B89;
labelFunc06F6_0B85:
	goto labelFunc06F6_07A4;
labelFunc06F6_0B88:
	endconv;
labelFunc06F6_0B89:
	if (!var0012) goto labelFunc06F6_0B93;
	item->Func06FC();
labelFunc06F6_0B93:
	if (!var0013) goto labelFunc06F6_0BAE;
	var001A = UI_execute_usecode_array(item, [(byte)0x27, 0x0001, (byte)0x55, 0x06F9]);
labelFunc06F6_0BAE:
	if (!var0014) goto labelFunc06F6_0C4A;
	var001B = Func092D(var0011);
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var001B, (byte)0x64, (byte)0x27, 0x0002, (byte)0x68, (byte)0x27, 0x0002, (byte)0x69, (byte)0x27, 0x0001, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x61]);
	if (!(!UI_get_item_flag(var0011, 0x0001))) goto labelFunc06F6_0C33;
	var001C = ((var001B + 0x0004) % 0x0008);
	var001D = UI_execute_usecode_array(var0011, [(byte)0x59, var001C, (byte)0x27, 0x0003, (byte)0x64, (byte)0x27, 0x0007, (byte)0x55, 0x070F]);
	goto labelFunc06F6_0C4A;
labelFunc06F6_0C33:
	var001D = UI_execute_usecode_array(var0011, [(byte)0x27, 0x000C, (byte)0x55, 0x070F]);
labelFunc06F6_0C4A:
	if (!var0015) goto labelFunc06F6_0CF4;
	var001B = Func092D(var0011);
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var001B, (byte)0x64, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0001, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x61]);
	if (!(!UI_get_item_flag(var0011, 0x0001))) goto labelFunc06F6_0CDD;
	var001C = ((var001B + 0x0004) % 0x0008);
	var001D = UI_execute_usecode_array(var0011, [(byte)0x59, var001C, (byte)0x27, 0x0002, (byte)0x64, (byte)0x27, 0x0004, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0001, (byte)0x55, 0x070F]);
	goto labelFunc06F6_0CF4;
labelFunc06F6_0CDD:
	var001D = UI_execute_usecode_array(var0011, [(byte)0x27, 0x000C, (byte)0x55, 0x070F]);
labelFunc06F6_0CF4:
	return;
}


