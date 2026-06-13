#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);

void Func04CB object#(0x4CB) ()
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

	if (!(event == 0x0001)) goto labelFunc04CB_0245;
	UI_show_npc_face(0xFF35, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_part_of_day();
	var0004 = UI_get_npc_object(0xFF35);
	var0005 = UI_get_npc_object(0xFF34);
	var0006 = UI_get_schedule_type(var0004);
	var0007 = UI_get_alignment(var0004);
	UI_add_answer(["姓名", "職業", "告辭", "友誼會"]);
	if (!(var0007 == 0x0002)) goto labelFunc04CB_0084;
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0005, 0x0000);
labelFunc04CB_0084:
	if (!gflags[0x0284]) goto labelFunc04CB_0091;
	UI_add_answer("Elizabeth 與 Abraham");
labelFunc04CB_0091:
	if (!(!gflags[0x0288])) goto labelFunc04CB_00A3;
	message("你看到一個寬肩、神情莊重的男人。");
	say();
	gflags[0x0288] = true;
	goto labelFunc04CB_00AD;
labelFunc04CB_00A3:
	message("「是的，");
	message(var0000);
	message("？」 Cador 說。");
	say();
labelFunc04CB_00AD:
	converse attend labelFunc04CB_023A;
	case "姓名" attend labelFunc04CB_0127:
	message("男人和你握手。「我是 Cador 。」");
	say();
	if (!(var0006 == 0x001A)) goto labelFunc04CB_0120;
	message("「你的名字是？」");
	say();
	var0008 = Func090B([var0001, var0002, var0000]);
	if (!(var0008 == var0002)) goto labelFunc04CB_0116;
	message("「什麼？你是說把那些石像鬼帶到我們寶貴土地上的人就是你？」他變得相當憤怒。~~「惡魔的愛人！」*");
	say();
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_alignment(var0004, 0x0002);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_alignment(var0005, 0x0002);
	abort;
	goto labelFunc04CB_0120;
labelFunc04CB_0116:
	message("「很高興認識你，");
	message(var0000);
	message("。」");
	say();
labelFunc04CB_0120:
	UI_remove_answer("姓名");
labelFunc04CB_0127:
	case "職業" attend labelFunc04CB_0143:
	message("「我負責監督 Britannia 礦業公司在 Vesper 的分部。我們開採許多不同的礦物。」");
	say();
	UI_add_answer(["Vesper", "我們", "礦物"]);
labelFunc04CB_0143:
	case "礦物" attend labelFunc04CB_0156:
	message("「黃金和鉛。」");
	say();
	UI_remove_answer("礦物");
labelFunc04CB_0156:
	case "Vesper" attend labelFunc04CB_0176:
	message("「那是我們城鎮的名字。市政廳的 Liana 可以給你任何你可能需要的進一步資訊，但自從這裡的分部開設以來，我就和家人住在這裡。」");
	say();
	UI_add_answer(["Liana", "家人"]);
	UI_remove_answer("Vesper");
labelFunc04CB_0176:
	case "友誼會" attend labelFunc04CB_019A:
	message("「這是一個很棒的組織。他們舉辦許多慈善活動和特殊事件——遊行之類的。」他指著他的獎章。「如你所見，我是成員之一。我完全相信內在力量的三位一體 (Triad of Inner Strength) 。」");
	say();
	if (!gflags[0x0284]) goto labelFunc04CB_018C;
	message("「事實上，兩位友誼會官員剛剛才來過這裡。他們說在鎮上建立分會之前，了解城鎮的經濟運作很重要。你明白這意味著什麼嗎？」他自豪地笑著。「他們要在 Vesper 建立友誼會分部。」");
	say();
labelFunc04CB_018C:
	UI_add_answer("三位一體 (Triad)");
	UI_remove_answer("友誼會");
labelFunc04CB_019A:
	case "三位一體 (Triad)" attend labelFunc04CB_01AD:
	message("「那些是友誼會的三項基本原則：致力合一 (Strive for Unity) 、信賴你的兄弟 (Trust thy Brother) 以及價值先行於報償 (Worthiness Precedes Reward) 。」");
	say();
	UI_remove_answer("三位一體 (Triad)");
labelFunc04CB_01AD:
	case "Elizabeth 與 Abraham" attend labelFunc04CB_01C0:
	message("「他們就是剛在這裡的兩名友誼會官員！他們只待了一兩分鐘。我不知道他們現在在哪裡。」");
	say();
	UI_remove_answer("Elizabeth 與 Abraham");
labelFunc04CB_01C0:
	case "我們" attend labelFunc04CB_01E0:
	message("「我和 Mara 以及一隻名叫 Lap-Lem 的石像鬼一起工作。」");
	say();
	UI_add_answer(["Mara", "Lap-Lem"]);
	UI_remove_answer("我們");
labelFunc04CB_01E0:
	case "Mara" attend labelFunc04CB_01F3:
	message("「她是一名了不起的工人。比我一起採礦過的大多數男人都好。」");
	say();
	UI_remove_answer("Mara");
labelFunc04CB_01F3:
	case "Lap-Lem" attend labelFunc04CB_0206:
	message("「嗯，對於一隻石像鬼來說，他不算太懶惰。他比那個離開的 Anmanivas 工作努力得多。但如果我們不是需要人手，我很樂意讓他走。」");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04CB_0206:
	case "Liana" attend labelFunc04CB_0219:
	message("「她在市政廳保管記錄。」");
	say();
	UI_remove_answer("Liana");
labelFunc04CB_0219:
	case "家人" attend labelFunc04CB_022C:
	message("「是的，我的妻子 Yvella ，和我的女兒 Catherine 。」");
	say();
	UI_remove_answer("家人");
labelFunc04CB_022C:
	case "告辭" attend labelFunc04CB_0237:
	goto labelFunc04CB_023A;
labelFunc04CB_0237:
	goto labelFunc04CB_00AD;
labelFunc04CB_023A:
	endconv;
	message("「這是我的榮幸，");
	message(var0000);
	message("。」*");
	say();
labelFunc04CB_0245:
	if (!(event == 0x0000)) goto labelFunc04CB_024E;
	abort;
labelFunc04CB_024E:
	return;
}


