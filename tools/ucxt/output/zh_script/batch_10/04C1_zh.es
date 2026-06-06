#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04C1 object#(0x4C1) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04C1_01CF;
	UI_show_npc_face(0xFF3F, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x026A])) goto labelFunc04C1_003E;
	message("你迎接的是這個男人臉上嚴厲的表情。");
	say();
	gflags[0x026A] = true;
	goto labelFunc04C1_0048;
labelFunc04C1_003E:
	message("「^");
	message(var0000);
	message("。」他對你點點頭。");
	say();
labelFunc04C1_0048:
	if (!(gflags[0x025E] && (!gflags[0x0276]))) goto labelFunc04C1_005A;
	UI_add_answer("雕像");
labelFunc04C1_005A:
	converse attend labelFunc04C1_01C4;
	case "姓名" attend labelFunc04C1_0070:
	message("「你可以叫我 Pendaran 爵士。」");
	say();
	UI_remove_answer("姓名");
labelFunc04C1_0070:
	case "職業" attend labelFunc04C1_0089:
	message("「我是 Serpent's Hold 這裡的騎士。保護 Britannia 的公民是我的職責。」");
	say();
	UI_add_answer(["保護", "Serpent's Hold"]);
labelFunc04C1_0089:
	case "保護" attend labelFunc04C1_00AF:
	message("「是的，");
	message(var0000);
	message("。出了城鎮， Britannia 其實是個危險的地方。尤其現在統治派系已經變得軟弱了！」");
	say();
	UI_remove_answer("保護");
	UI_add_answer(["統治派系", "軟弱"]);
labelFunc04C1_00AF:
	case "統治派系" attend labelFunc04C1_00C2:
	message("「嗯，我指的是 Lord British 和他的顧問。」");
	say();
	UI_remove_answer("統治派系");
labelFunc04C1_00C2:
	case "軟弱", "無能" attend labelFunc04C1_00E9:
	message("「雖然我願意追隨這片土地的理想直到天涯海角，但我很難接受 Britannia 的情況如此糟糕。強盜橫行，疾病肆虐城鎮，議會充滿了腐敗。要不是有友誼會，我恐怕很難避免拔劍自刎，儘管這種行為看起來有多麼不光彩。」");
	say();
	var0001 = true;
	UI_remove_answer(["軟弱", "無能"]);
	UI_add_answer("友誼會");
labelFunc04C1_00E9:
	case "友誼會" attend labelFunc04C1_0102:
	message("「一群高貴的人，努力在整個 Britannia 灌輸更多的精神知識。這只是時間問題，");
	message(var0000);
	message("，在所有人都能在眼前看見智慧之光。」");
	say();
	UI_remove_answer("友誼會");
labelFunc04C1_0102:
	case "Serpent's Hold" attend labelFunc04C1_011C:
	message("「我和我的女主人住在這裡的堡壘中。」");
	say();
	UI_add_answer("女主人");
	UI_remove_answer("Serpent's Hold");
labelFunc04C1_011C:
	case "女主人" attend labelFunc04C1_0135:
	message("「她的名字是 Jehanne ，");
	message(var0000);
	message("，」他懷疑地說。「她是物資商人。」");
	say();
	UI_remove_answer("女主人");
labelFunc04C1_0135:
	case "雕像" attend labelFunc04C1_015B:
	message("「真是個可怕的遺憾，");
	message(var0000);
	message("。」他冷冷地看著你。");
	say();
	if (!gflags[0x025D]) goto labelFunc04C1_0154;
	UI_add_answer("是你做的！");
labelFunc04C1_0154:
	UI_remove_answer("雕像");
labelFunc04C1_015B:
	case "是你做的！" attend labelFunc04C1_0175:
	message("「什麼！你居然指控我！荒謬。我跟這件事一點關係也沒有！」");
	say();
	UI_remove_answer("是你做的！");
	UI_add_answer("Jehanne 女士");
labelFunc04C1_0175:
	case "Jehanne 女士" attend labelFunc04C1_0196:
	gflags[0x0276] = true;
	message("他搖搖頭。~~「你寧願相信一個女人的話，也不願相信堡壘騎士的話？你連蟲子都不如！」他瞪了你一會兒，然後表情變了。~~「好吧，」他說，「毀壞雕像的人就是我，但那是因為政府變得太無能、太軟弱了！」他羞愧地轉過身去。~~「如果你認為這樣最好，」他嘆了口氣，「明天我會向我的騎士同僚們乞求原諒。」");
	say();
	UI_push_answers();
	UI_add_answer(["這樣最妥當", "不需要"]);
labelFunc04C1_0196:
	case "這樣最妥當" attend labelFunc04C1_01A3:
	message("他點頭同意，再次嘆息，然後轉身離開。*");
	say();
	abort;
labelFunc04C1_01A3:
	case "不需要" attend labelFunc04C1_01B6:
	message("「不，不，");
	message(var0000);
	message("。你為我指明了道路。我必須懺悔。」他轉過身去反省他的決定。*");
	say();
	abort;
labelFunc04C1_01B6:
	case "告辭" attend labelFunc04C1_01C1:
	goto labelFunc04C1_01C4;
labelFunc04C1_01C1:
	goto labelFunc04C1_005A;
labelFunc04C1_01C4:
	endconv;
	message("「祝你有個美好的一天，");
	message(var0000);
	message(".\"*");
	say();
labelFunc04C1_01CF:
	if (!(event == 0x0000)) goto labelFunc04C1_01DD;
	Func092E(0xFF3F);
labelFunc04C1_01DD:
	return;
}


