#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AB object#(0x4AB) ()
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

	if (!(event == 0x0001)) goto labelFunc04AB_0340;
	UI_show_npc_face(0xFF55, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x021C]) goto labelFunc04AB_003C;
	UI_add_answer("Tobias");
labelFunc04AB_003C:
	var0002 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0002) goto labelFunc04AB_005E;
	UI_add_answer("找到毒液");
labelFunc04AB_005E:
	if (!(!gflags[0x0224])) goto labelFunc04AB_0070;
	message("你看到一個開朗的年輕人向你友善地打招呼。");
	say();
	gflags[0x0224] = true;
	goto labelFunc04AB_007A;
labelFunc04AB_0070:
	message("「祝你有愉快的一天，");
	message(var0000);
	message("。」Garritt 說道。");
	say();
labelFunc04AB_007A:
	converse attend labelFunc04AB_0327;
	case "姓名" attend labelFunc04AB_009D:
	message("「我是 Garritt，Feridwyn 和 Brita 的兒子。」");
	say();
	UI_add_answer(["Feridwyn", "Brita"]);
	UI_remove_answer("姓名");
labelFunc04AB_009D:
	case "職業" attend labelFunc04AB_00B9:
	message("「我還太小，無法學習自己的手藝，但我確實協助我的父母經營庇護所。我希望有一天能成為友誼會的顧問。或者是專業的排笛手。」");
	say();
	UI_add_answer(["庇護所", "友誼會", "排笛"]);
labelFunc04AB_00B9:
	case "Feridwyn" attend labelFunc04AB_00DC:
	message("「我父親為友誼會工作，幫助 Paws 這裡的窮人。他試圖招募他們，但大多數人都拒絕了。」");
	say();
	UI_remove_answer("Feridwyn");
	UI_add_answer(["Paws", "招募", "窮人"]);
labelFunc04AB_00DC:
	case "Paws" attend labelFunc04AB_010F:
	message("「其實，我不太喜歡這個城鎮。這裡的人都很窮，和我同年紀的只有 Tobias。」");
	say();
	if (!(!gflags[0x0218])) goto labelFunc04AB_00F3;
	message("「而且，」他補充道，「這裡有個小偷。」");
	say();
labelFunc04AB_00F3:
	UI_remove_answer("Paws");
	UI_add_answer("Tobias");
	if (!(!gflags[0x0218])) goto labelFunc04AB_010F;
	UI_add_answer("小偷");
labelFunc04AB_010F:
	case "排笛" attend labelFunc04AB_0122:
	message("「我從小就開始吹排笛了。如果我自己說的話，我現在吹得滿好的！我把笛子放在床邊，每天睡前都會練習！」");
	say();
	UI_remove_answer("排笛");
labelFunc04AB_0122:
	case "Tobias" attend labelFunc04AB_0150:
	if (!gflags[0x0218]) goto labelFunc04AB_0137;
	message("「我可能沒有說出關於 Tobias 偷毒液的真相，但我知道他不懷好意。他會有壞下場的，你等著看吧！」");
	say();
	goto labelFunc04AB_0149;
labelFunc04AB_0137:
	if (!(!gflags[0x021C])) goto labelFunc04AB_0145;
	message("「他和他的母親拒絕友誼會。他們既無知又愚蠢，我不喜歡他們。」");
	say();
	goto labelFunc04AB_0149;
labelFunc04AB_0145:
	message("「我已經說過一千次了。Tobias 性格軟弱！他和他的母親很窮是因為他們很懶惰。現在證明我是對的，因為 Tobias 是個小偷。一個被抓住的小偷！」");
	say();
labelFunc04AB_0149:
	UI_remove_answer("Tobias");
labelFunc04AB_0150:
	case "招募" attend labelFunc04AB_0163:
	message("「我父親曾經是 Britain 的首席招募員，直到他們把他調來這裡。我曾聽他對母親說，友誼會在這裡是浪費時間。」");
	say();
	UI_remove_answer("招募");
labelFunc04AB_0163:
	case "窮人" attend labelFunc04AB_017D:
	message("「我父親說窮人拒絕友誼會，是因為內在力量的三位一體需要堅強的品格。」");
	say();
	UI_remove_answer("窮人");
	UI_add_answer("品格");
labelFunc04AB_017D:
	case "品格" attend labelFunc04AB_01B4:
	message("「我父親說窮人品格軟弱，這就是他們貧窮的原因。他們不必這樣。他們只是太懶得工作了。你同意嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04AB_019C;
	message("「我本來不太確定，但既然我父親這麼說，那一定是真的。」");
	say();
	goto labelFunc04AB_01AD;
labelFunc04AB_019C:
	if (!var0001) goto labelFunc04AB_01A9;
	message("「哼。作為一個友誼會成員，你缺乏認知。你不了解友誼會的教義。」");
	say();
	goto labelFunc04AB_01AD;
labelFunc04AB_01A9:
	message("「那麼你也必定是個品格軟弱的人。」");
	say();
labelFunc04AB_01AD:
	UI_remove_answer("品格");
labelFunc04AB_01B4:
	case "Brita" attend labelFunc04AB_01C7:
	message("「喔，她只是我的母親。我父親叫她做什麼，她就做什麼。」");
	say();
	UI_remove_answer("Brita");
labelFunc04AB_01C7:
	case "庇護所" attend labelFunc04AB_01DA:
	message("「如果你想住在庇護所裡，有足夠的床位可供使用，」他用居高臨下的語氣說道。");
	say();
	UI_remove_answer("庇護所");
labelFunc04AB_01DA:
	case "友誼會" attend labelFunc04AB_0204:
	if (!var0001) goto labelFunc04AB_01EF;
	message("「我是一名成員，我很自豪地說我也為他們招募。」");
	say();
	goto labelFunc04AB_01FD;
labelFunc04AB_01EF:
	message("「哦，我可以告訴你關於我們所有你需要知道的事！」");
	say();
	Func0919();
	UI_add_answer("理念");
labelFunc04AB_01FD:
	UI_remove_answer("友誼會");
labelFunc04AB_0204:
	case "理念" attend labelFunc04AB_0232:
	message("「談到我們的理念，我也相當了解。我們遵循內在力量的三位一體，不讓個人的失敗阻礙我們或拖累我們。」");
	say();
	message("「你想加入嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04AB_0227;
	message("「我又招到一個了！」他興高采烈地說。「你必須立刻和我父親談談！」");
	say();
	goto labelFunc04AB_022B;
labelFunc04AB_0227:
	message("「那就先考慮一下吧。」");
	say();
labelFunc04AB_022B:
	UI_remove_answer("理念");
labelFunc04AB_0232:
	case "找到毒液" attend labelFunc04AB_025C:
	Func0911(0x0096);
	message("「你發現我了！是的，是我把毒液栽贓給 Tobias 的。他是罪有應得！我求求你，請不要告訴我父母！」");
	say();
	gflags[0x0218] = true;
	UI_add_answer(["栽贓", "父母"]);
	UI_remove_answer("找到毒液");
labelFunc04AB_025C:
	case "栽贓" attend labelFunc04AB_0276:
	message("「我從 Morfin 那裡偷了毒液，這樣我就可以把責任推給 Tobias。」");
	say();
	UI_add_answer("Morfin");
	UI_remove_answer("栽贓");
labelFunc04AB_0276:
	case "Morfin" attend labelFunc04AB_029A:
	message("「我不知道 Morfin 為什麼有那東西，也不知道他用來做什麼。我只知道它很有價值，如果被偷了會讓每個人都擔心。」");
	say();
	message("Garritt 避開了你的目光。你本能地知道他沒有說實話，而且很可能正在使用毒液。");
	say();
	UI_remove_answer("Morfin");
	UI_add_answer(["擔心", "使用毒液？"]);
labelFunc04AB_029A:
	case "使用毒液？" attend labelFunc04AB_02AD:
	message("Garritt 拖著腳步並皺起了眉頭。「好吧……我只試過一次。對不起。我再也不會用了。」");
	say();
	UI_remove_answer("使用毒液？");
labelFunc04AB_02AD:
	case "擔心" attend labelFunc04AB_02C0:
	message("「我認為如果 Tobias 被指控偷了大家都會注意到的東西，他的母親就會加入友誼會並強迫他也加入。這將改善他們的生活，並迫使他們看清自己的真相。」");
	say();
	UI_remove_answer("擔心");
labelFunc04AB_02C0:
	case "父母" attend labelFunc04AB_0302:
	message("「你會告訴我父母嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04AB_02F3;
	if (!var0001) goto labelFunc04AB_02EC;
	message("「但我，像你一樣，是友誼會的成員。對於我試圖做的事，你必須與我團結一致！」");
	say();
	UI_remove_answer("父母");
	goto labelFunc04AB_02F0;
labelFunc04AB_02EC:
	message("「你品格軟弱！否則你會明白我試圖做的事！」");
	say();
labelFunc04AB_02F0:
	goto labelFunc04AB_02FB;
labelFunc04AB_02F3:
	message("「我非常熱情地感謝你！那這就是我們的小秘密了。」");
	say();
	gflags[0x0219] = true;
labelFunc04AB_02FB:
	UI_remove_answer("父母");
labelFunc04AB_0302:
	case "小偷" attend labelFunc04AB_0319:
	message("「這個鎮上有個小偷！我們的商人 Morfin 被偷了一些珍貴的銀蛇毒液。罪犯還在逃。所以要小心！」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
labelFunc04AB_0319:
	case "告辭" attend labelFunc04AB_0324:
	goto labelFunc04AB_0327;
labelFunc04AB_0324:
	goto labelFunc04AB_007A;
labelFunc04AB_0327:
	endconv;
	message("「那麼，再見。」*");
	say();
	if (!gflags[0x0218]) goto labelFunc04AB_0340;
	UI_set_schedule_type(UI_get_npc_object(0xFF55), 0x000B);
labelFunc04AB_0340:
	if (!(event == 0x0000)) goto labelFunc04AB_03C0;
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF55));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x0019)) goto labelFunc04AB_03BA;
	if (!(var0007 == 0x0001)) goto labelFunc04AB_037D;
	var0008 = "@略略略！@";
labelFunc04AB_037D:
	if (!(var0007 == 0x0002)) goto labelFunc04AB_038D;
	var0008 = "@抓不到我！@";
labelFunc04AB_038D:
	if (!(var0007 == 0x0003)) goto labelFunc04AB_039D;
	var0008 = "@有本事就來抓我啊！@";
labelFunc04AB_039D:
	if (!(var0007 == 0x0004)) goto labelFunc04AB_03AD;
	var0008 = "@抓到了！換當鬼！@";
labelFunc04AB_03AD:
	UI_item_say(0xFF55, var0008);
	goto labelFunc04AB_03C0;
labelFunc04AB_03BA:
	Func092E(0xFF55);
labelFunc04AB_03C0:
	return;
}


