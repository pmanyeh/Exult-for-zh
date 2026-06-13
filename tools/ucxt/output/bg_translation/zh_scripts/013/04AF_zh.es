#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AF object#(0x4AF) ()
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

	if (!(event == 0x0001)) goto labelFunc04AF_0344;
	UI_show_npc_face(0xFF51, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0212]) goto labelFunc04AF_0035;
	UI_add_answer("小偷");
labelFunc04AF_0035:
	if (!(!gflags[0x0228])) goto labelFunc04AF_0047;
	message("「你看到一個乞丐。你從他臉上的表情看不出他是要笑還是要哭。」");
	say();
	gflags[0x0228] = true;
	goto labelFunc04AF_0051;
labelFunc04AF_0047:
	message("「請原諒，");
	message(var0000);
	message("。」Fenn 說。");
	say();
labelFunc04AF_0051:
	converse attend labelFunc04AF_0339;
	case "姓名" attend labelFunc04AF_006D:
	message("「我的名字是 Fenn，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AF_006D:
	case "小偷" attend labelFunc04AF_009E:
	if (!gflags[0x0218]) goto labelFunc04AF_0082;
	message("「在你告訴他找到毒液瓶的事後，他說：『當你發現 Garritt 那個沒用的臭小子是小偷時，你為我們鎮上立了一大功！也許現在有些人會開始意識到友誼會的虛偽了！』」");
	say();
	goto labelFunc04AF_0097;
labelFunc04AF_0082:
	if (!gflags[0x0213]) goto labelFunc04AF_008F;
	message("「我知道 Tobias 那孩子是無辜的，沒有做任何壞事，不管 Feridwyn 和他的友誼會怎麼說。」");
	say();
	goto labelFunc04AF_0097;
labelFunc04AF_008F:
	message("「當心點，這鎮上有個小偷！經營屠宰場的商人 Morfin 被偷了一些銀蛇毒液。」");
	say();
	gflags[0x0212] = true;
labelFunc04AF_0097:
	UI_remove_answer("小偷");
labelFunc04AF_009E:
	case "職業" attend labelFunc04AF_00B7:
	message("他羞愧地，把目光從你身上移開。「我沒有工作，");
	message(var0000);
	message("。」");
	say();
	UI_add_answer("沒有工作");
labelFunc04AF_00B7:
	case "沒有工作" attend labelFunc04AF_00DA:
	message("「在比較繁榮的時期，我曾經是個農夫。我以前和 Komor 以及 Merrick 一起工作。」");
	say();
	UI_add_answer(["Komor", "Merrick", "給予"]);
	UI_remove_answer("沒有工作");
labelFunc04AF_00DA:
	case "Komor" attend labelFunc04AF_011F:
	message("「他是我最好的朋友，也是我認識最勇敢的人。」");
	say();
	var0001 = Func08F7(0xFF52);
	if (!var0001) goto labelFunc04AF_0118;
	message("*");
	say();
	UI_show_npc_face(0xFF52, 0x0000);
	message("「哦，拜託！你讓我的眼睛都漏水了！」*");
	say();
	UI_remove_npc_face(0xFF52);
	UI_show_npc_face(0xFF51, 0x0000);
labelFunc04AF_0118:
	UI_remove_answer("Komor");
labelFunc04AF_011F:
	case "Merrick" attend labelFunc04AF_013F:
	message("「Merrick 加入了友誼會，這樣他就可以住在他們的庇護所裡，這個可憐的傢伙。」");
	say();
	UI_add_answer(["庇護所", "友誼會"]);
	UI_remove_answer("Merrick");
labelFunc04AF_013F:
	case "友誼會" attend labelFunc04AF_0159:
	message("「如果友誼會真的想幫助人，為什麼就因為我們不想加入，他們就讓我們挨餓？他們無法回答這個問題！」");
	say();
	UI_add_answer("挨餓");
	UI_remove_answer("友誼會");
labelFunc04AF_0159:
	case "庇護所" attend labelFunc04AF_0173:
	message("「哼！如果你不幸到想住在那裡，你還不如和 Komor 及我一起待在街角。」");
	say();
	UI_remove_answer("庇護所");
	UI_add_answer("街角");
labelFunc04AF_0173:
	case "街角" attend labelFunc04AF_018D:
	message("「即使口袋空空，這個世界上還是殘留著一些仁慈。乞討要錢不是個值得驕傲的職業，但還有更糟的。」");
	say();
	UI_add_answer("更糟的");
	UI_remove_answer("街角");
labelFunc04AF_018D:
	case "更糟的" attend labelFunc04AF_01A0:
	message("「至少我們不必做 Merrick 做的事。他為友誼會招募。」");
	say();
	UI_remove_answer("更糟的");
labelFunc04AF_01A0:
	case "挨餓" attend labelFunc04AF_01C0:
	message("「別擔心。我們不會挨餓的。Camille 經常派她兒子 Tobias 給我們送食物和衣服。」");
	say();
	UI_add_answer(["Camille", "Tobias"]);
	UI_remove_answer("挨餓");
labelFunc04AF_01C0:
	case "Camille" attend labelFunc04AF_01D3:
	message("「Camille 是個好女人。她住在緊鄰乳製品廠的農場。」");
	say();
	UI_remove_answer("Camille");
labelFunc04AF_01D3:
	case "Tobias" attend labelFunc04AF_01FA:
	message("「他是個好小伙子，總是願意幫助我們。不像那個無禮的頑童 Garritt。」");
	say();
	if (!gflags[0x0213]) goto labelFunc04AF_01EC;
	UI_add_answer("毒液");
labelFunc04AF_01EC:
	UI_add_answer("Garritt");
	UI_remove_answer("Tobias");
labelFunc04AF_01FA:
	case "毒液" attend labelFunc04AF_0214:
	message("「Tobias 不會捲入那種事情。我敢肯定他不是小偷。」");
	say();
	UI_remove_answer("毒液");
	UI_add_answer("捲入");
labelFunc04AF_0214:
	case "捲入" attend labelFunc04AF_022E:
	message("「如果你在尋找這個偷毒液的小偷，你最好去問問 Andrew。」");
	say();
	UI_add_answer("Andrew");
	UI_remove_answer("捲入");
labelFunc04AF_022E:
	case "Andrew" attend labelFunc04AF_0241:
	message("「Andrew 擁有那家乳製品廠，住在 Camille 的農場和屠宰場對面。他可能看到了什麼。」");
	say();
	UI_remove_answer("Andrew");
labelFunc04AF_0241:
	case "Garritt" attend labelFunc04AF_0286:
	message("「他是經營庇護所的 Feridwyn 和 Brita 的兒子。Garritt 過馬路都會避開我們。」");
	say();
	var0001 = Func08F7(0xFF52);
	if (!var0001) goto labelFunc04AF_027F;
	message("*");
	say();
	UI_show_npc_face(0xFF52, 0x0000);
	message("「反正我們也不想讓他這種人走在我們這邊的路上！」*");
	say();
	UI_remove_npc_face(0xFF52);
	UI_show_npc_face(0xFF51, 0x0000);
labelFunc04AF_027F:
	UI_remove_answer("Garritt");
labelFunc04AF_0286:
	case "給予" attend labelFunc04AF_032B:
	message("「你願意給我一點錢嗎？」");
	say();
	if (!Func090A()) goto labelFunc04AF_0320;
	message("多少？");
	say();
	UI_push_answers();
	var0002 = Func090B(["O", "1", "2", "3", "4", "5"]);
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!((var0003 >= var0002) && (var0002 != "0"))) goto labelFunc04AF_0301;
	var0004 = UI_remove_party_items(var0002, 0x0284, 0xFE99, 0xFE99, true);
	message("「謝謝你，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc04AF_0305;
labelFunc04AF_0301:
	message("「看來你也沒有錢啊！」");
	say();
labelFunc04AF_0305:
	if (!(var0003 == 0x0000)) goto labelFunc04AF_0319;
	message("「如果我打擾到你，我真的很抱歉，");
	message(var0000);
	message("。」");
	say();
labelFunc04AF_0319:
	UI_pop_answers();
	goto labelFunc04AF_0324;
labelFunc04AF_0320:
	message("「Fenn 低下了頭。」");
	say();
labelFunc04AF_0324:
	UI_remove_answer("給予");
labelFunc04AF_032B:
	case "告辭" attend labelFunc04AF_0336:
	goto labelFunc04AF_0339;
labelFunc04AF_0336:
	goto labelFunc04AF_0051;
labelFunc04AF_0339:
	endconv;
	message("「祝你好運，");
	message(var0000);
	message(".\"*");
	say();
labelFunc04AF_0344:
	if (!(event == 0x0000)) goto labelFunc04AF_03CB;
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF51));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x000B)) goto labelFunc04AF_03C5;
	if (!(var0007 == 0x0001)) goto labelFunc04AF_0388;
	var0008 = "@給點買食物的錢吧？@";
labelFunc04AF_0388:
	if (!(var0007 == 0x0002)) goto labelFunc04AF_0398;
	var0008 = "@請幫助一個可憐的乞丐！@";
labelFunc04AF_0398:
	if (!(var0007 == 0x0003)) goto labelFunc04AF_03A8;
	var0008 = "@展現一點慷慨吧！@";
labelFunc04AF_03A8:
	if (!(var0007 == 0x0004)) goto labelFunc04AF_03B8;
	var0008 = "@幫助一個不幸的人吧！@";
labelFunc04AF_03B8:
	UI_item_say(0xFF51, var0008);
	goto labelFunc04AF_03CB;
labelFunc04AF_03C5:
	Func092E(0xFF51);
labelFunc04AF_03CB:
	return;
}


