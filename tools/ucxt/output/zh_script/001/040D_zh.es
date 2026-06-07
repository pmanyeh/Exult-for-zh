#game "blackgate"
// externs
extern var Func090B 0x90B (var var0000);
extern var Func0834 0x834 ();

void Func040D object#(0x40D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0000)) goto labelFunc040D_0009;
	abort;
labelFunc040D_0009:
	UI_show_npc_face(0xFFF3, 0x0000);
	var0000 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
	if (!gflags[0x003D]) goto labelFunc040D_003A;
	UI_add_answer("口令");
labelFunc040D_003A:
	if (!gflags[0x003F]) goto labelFunc040D_004D;
	UI_add_answer(["友誼會", "Klog"]);
labelFunc040D_004D:
	if (!((var0000 == 0x0007) || ((var0000 == 0x0000) || (var0000 == 0x0001)))) goto labelFunc040D_006E;
	UI_add_answer("船隻");
labelFunc040D_006E:
	if (!gflags[0x0043]) goto labelFunc040D_007B;
	UI_add_answer("鉤子");
labelFunc040D_007B:
	if (!(!gflags[0x004D])) goto labelFunc040D_009B;
	message("你看到一個脾氣暴躁的傢伙，頭上綁著血跡斑斑的繃帶。");
	say();
	gflags[0x004D] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFFF3), 0x0010);
	goto labelFunc040D_009F;
labelFunc040D_009B:
	message("「你還需要什麼嗎？」 Gilberto 問道。你注意到他的傷口癒合得很好。");
	say();
labelFunc040D_009F:
	converse attend labelFunc040D_0249;
	case "姓名" attend labelFunc040D_00B5:
	message("「我是 Gilberto。」");
	say();
	UI_remove_answer("姓名");
labelFunc040D_00B5:
	case "職業" attend labelFunc040D_00C1:
	message("「我負責碼頭大門的夜班守衛。」");
	say();
labelFunc040D_00C1:
	case "謀殺" attend labelFunc040D_00DB:
	message("「這肯定是在我被擊昏前不久發生的。」");
	say();
	UI_add_answer("擊昏");
	UI_remove_answer("謀殺");
labelFunc040D_00DB:
	case "擊昏" attend labelFunc040D_00FB:
	message("「那大約是日出的時候。我正望向大海。突然間，我感覺後腦勺挨了一記重擊。」~~ 他痛苦地皺了皺眉。");
	say();
	UI_add_answer(["重擊", "痛苦"]);
	UI_remove_answer("擊昏");
labelFunc040D_00FB:
	case "痛苦" attend labelFunc040D_010E:
	message("Gilberto 看起來還有點搖晃，但他的手勢表示他不需要你的幫助。~「我的腦袋還在嗡嗡作響，但我馬上就會好的。」");
	say();
	UI_remove_answer("痛苦");
labelFunc040D_010E:
	case "重擊" attend labelFunc040D_012E:
	message("「接下來我知道的就是，我已經倒在地上了。負責下一班守衛的 Johnson 正在搖醒我。我大約昏迷了十分鐘。我知道這點是因為太陽才剛探出地平線。而且『皇冠寶石號 (The Crown Jewel)』已經出航了！」");
	say();
	UI_add_answer(["Johnson", "皇冠寶石號 (The Crown Jewel)"]);
	UI_remove_answer("重擊");
labelFunc040D_012E:
	case "皇冠寶石號 (The Crown Jewel)" attend labelFunc040D_0152:
	message("「我忘了說嗎？那是一艘整晚停靠在這裡的船。我相信它正準備駛往 Britain。你可以去問造船匠 Gargan 以確認這件事。總之，我沒看到襲擊我的人...」 守衛抱怨道。");
	say();
	gflags[0x0040] = true;
	UI_add_answer(["襲擊者", "Gargan"]);
	UI_remove_answer("皇冠寶石號 (The Crown Jewel)");
labelFunc040D_0152:
	case "襲擊者" attend labelFunc040D_0165:
	message("「嗯。我懷疑他們是不是跳上了那艘船！他們現在可能已經一路到了 Britain 了！」");
	say();
	UI_remove_answer("襲擊者");
labelFunc040D_0165:
	case "Gargan" attend labelFunc040D_0178:
	message("「他是個好人，但你可能不會想站得離他太近。你可能會被傳染什麼的。」");
	say();
	UI_remove_answer("Gargan");
labelFunc040D_0178:
	case "船隻" attend labelFunc040D_0192:
	message("「如果你想要一艘船，你必須從造船匠那裡得到地契。你還必須有離開城鎮的口令。」");
	say();
	UI_remove_answer("船隻");
	UI_add_answer("口令");
labelFunc040D_0192:
	case "口令" attend labelFunc040D_01EF:
	message("「是什麼呢？」");
	say();
	var0001 = ["呃，我不知道...", "國王萬歲...？", "拜託..."];
	if (!gflags[0x003D]) goto labelFunc040D_01BD;
	var0001 = (var0001 & "Blackbird");
labelFunc040D_01BD:
	var0002 = Func090B(var0001);
	if (!(var0002 == "Blackbird")) goto labelFunc040D_01EB;
	var0003 = Func0834();
	if (!var0003) goto labelFunc040D_01E3;
	message("「好吧。你可以通過。」");
	say();
	goto labelFunc040D_01E7;
labelFunc040D_01E3:
	message("「你不能通過。」");
	say();
labelFunc040D_01E7:
	abort;
	goto labelFunc040D_01EF;
labelFunc040D_01EB:
	message("「你不知道口令。鎮長可以告訴你正確的口令。」");
	say();
labelFunc040D_01EF:
	case "Johnson" attend labelFunc040D_0202:
	message("「他負責碼頭的早班守衛。」");
	say();
	UI_remove_answer("Johnson");
labelFunc040D_0202:
	case "友誼會" attend labelFunc040D_0215:
	message("他聳聳肩。~~「你問錯人了。我想他們應該沒什麼問題。我從來沒和他們有過什麼麻煩。」");
	say();
	UI_remove_answer("友誼會");
labelFunc040D_0215:
	case "鉤子" attend labelFunc040D_0228:
	message("守衛想了一會兒。~~「不...我不能說我看到了一個帶著鉤子的男人。」");
	say();
	UI_remove_answer("鉤子");
labelFunc040D_0228:
	case "Klog" attend labelFunc040D_023B:
	message("「我和他沒有太多交集。」");
	say();
	UI_remove_answer("Klog");
labelFunc040D_023B:
	case "告辭" attend labelFunc040D_0246:
	goto labelFunc040D_0249;
labelFunc040D_0246:
	goto labelFunc040D_009F;
labelFunc040D_0249:
	endconv;
	message("「再見。小心背後。」");
	say();
	return;
}


