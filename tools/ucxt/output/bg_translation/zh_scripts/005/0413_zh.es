#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0842 0x842 ();
extern void Func092E 0x92E (var var0000);

void Func0413 object#(0x413) ()
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

	if (!(event == 0x0001)) goto labelFunc0413_024E;
	var0000 = UI_part_of_day();
	var0001 = Func0908();
	var0002 = Func0909();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFED));
	var0004 = UI_is_pc_female();
	UI_show_npc_face(0xFFED, 0x0000);
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
	if (!(var0003 == 0x0017)) goto labelFunc0413_006A;
	UI_add_answer(["食物", "飲料", "住宿", "購買"]);
labelFunc0413_006A:
	if (!(!gflags[0x0051])) goto labelFunc0413_007C;
	message("你看到一位三十多歲、性感迷人的女性。");
	say();
	gflags[0x0051] = true;
	goto labelFunc0413_0080;
labelFunc0413_007C:
	message("「又見面了！」 Apollonia 眼中閃爍著光芒說道。");
	say();
labelFunc0413_0080:
	converse attend labelFunc0413_023B;
	case "姓名" attend labelFunc0413_00B2:
	if (!(!var0004)) goto labelFunc0413_009B;
	var0005 = "，並用舌頭舔了舔上唇。";
	goto labelFunc0413_00A1;
labelFunc0413_009B:
	var0005 = "，並上下打量著你。";
labelFunc0413_00A1:
	message("「我的名字是 Apollonia，」 她說道");
	message(var0005);
	message("");
	say();
	UI_remove_answer("姓名");
labelFunc0413_00B2:
	case "職業" attend labelFunc0413_00EF:
	message("「哎呀，我經營著謙遜獵犬客棧，」 她嬌聲說道。");
	say();
	if (!(var0003 == 0x0017)) goto labelFunc0413_00E1;
	message("「你想要一間客房嗎？還是你想吃點或喝點什麼？儘管說，我會盡量用我的美味佳餚來滿足你。」");
	say();
	if (!(!var0004)) goto labelFunc0413_00DE;
	message("~~你意識到她在跟你調情。");
	say();
	UI_add_answer("調情");
labelFunc0413_00DE:
	goto labelFunc0413_00E5;
labelFunc0413_00E1:
	message("「我很樂意在營業時間為你服務！」");
	say();
labelFunc0413_00E5:
	UI_add_answer(["謙遜獵犬客棧"]);
labelFunc0413_00EF:
	case "謙遜獵犬客棧" attend labelFunc0413_0102:
	message("「在整個 Trinsic，我想不出有更好的地方能讓你安頓休息，或者品嚐美食來滿足你的胃口了。」");
	say();
	UI_remove_answer("謙遜獵犬客棧");
labelFunc0413_0102:
	case "謀殺" attend labelFunc0413_0115:
	message("Apollonia 閉上眼睛搖了搖頭，好像剛咬了一口非常酸的檸檬。「喔。那真是太……可怕了！怎麼會有人做出這麼駭人聽聞的事？你在尋找線索嗎？我真心希望你能找到那個該負責的人。」");
	say();
	UI_remove_answer("謀殺");
labelFunc0413_0115:
	case "食物" attend labelFunc0413_012F:
	message("「我們供應最好的肉、魚和蛋糕。我們的招牌是『銀葉餐』。如果你想點些什麼，請告訴我！」");
	say();
	UI_add_answer("銀葉餐");
	UI_remove_answer("食物");
labelFunc0413_012F:
	case "飲料" attend labelFunc0413_0142:
	message("「我可以為你提供蜂蜜酒、葡萄酒和麥酒。」");
	say();
	UI_remove_answer("飲料");
labelFunc0413_0142:
	case "住宿" attend labelFunc0413_01F6:
	message("「我們的客房很便宜。每人每晚只要 6 枚金幣。需要一間客房嗎？」");
	say();
	if (!Func090A()) goto labelFunc0413_01EB;
	var0006 = UI_get_party_list();
	var0007 = 0x0000;
	enum();
labelFunc0413_0162:
	for (var000A in var0006 with var0008 to var0009) attend labelFunc0413_017A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0413_0162;
labelFunc0413_017A:
	var000B = (var0007 * 0x0006);
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var000B)) goto labelFunc0413_01DE;
	var000D = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000D)) goto labelFunc0413_01C3;
	message("「噢，親愛的。你帶了太多東西，拿不下房間鑰匙了。」");
	say();
	goto labelFunc0413_01DB;
labelFunc0413_01C3:
	message("「這是你的房間鑰匙。它只在你離開前有效。」");
	say();
	var000E = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
labelFunc0413_01DB:
	goto labelFunc0413_01E8;
labelFunc0413_01DE:
	message("「你沒有足夠的金幣， ");
	message(var0002);
	message("。」");
	say();
labelFunc0413_01E8:
	goto labelFunc0413_01EF;
labelFunc0413_01EB:
	message("「那就～改天吧。」");
	say();
labelFunc0413_01EF:
	UI_remove_answer("住宿");
labelFunc0413_01F6:
	case "銀葉餐" attend labelFunc0413_0209:
	message("「嗯。真是美味！這是你吃過最棒的美食！絕對物超所值。」");
	say();
	UI_remove_answer("銀葉餐");
labelFunc0413_0209:
	case "調情" attend labelFunc0413_0222:
	message("Apollonia 臉紅著眨了眨眼。」噢， ");
	message(var0001);
	message("! 我敢打賭你對所有酒吧女侍都是這麼說的！」");
	say();
	UI_remove_answer("調情");
labelFunc0413_0222:
	case "購買" attend labelFunc0413_022D:
	Func0842();
labelFunc0413_022D:
	case "告辭" attend labelFunc0413_0238:
	goto labelFunc0413_023B;
labelFunc0413_0238:
	goto labelFunc0413_0080;
labelFunc0413_023B:
	endconv;
	if (!(!var0004)) goto labelFunc0413_024A;
	message("Apollonia 對你飛吻。「歡迎下次光臨！」");
	say();
	goto labelFunc0413_024E;
labelFunc0413_024A:
	message("Apollonia 向你揮手。「歡迎下次光臨！」");
	say();
labelFunc0413_024E:
	if (!(event == 0x0000)) goto labelFunc0413_025C;
	Func092E(0xFFED);
labelFunc0413_025C:
	return;
}


