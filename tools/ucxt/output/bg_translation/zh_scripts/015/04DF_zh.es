#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04DF object#(0x4DF) ()
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

	if (!(event == 0x0000)) goto labelFunc04DF_0009;
	abort;
labelFunc04DF_0009:
	UI_show_npc_face(0xFF21, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF21));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x029A]) goto labelFunc04DF_0047;
	var0005 = var0002;
labelFunc04DF_0047:
	if (!gflags[0x029B]) goto labelFunc04DF_0053;
	var0005 = var0003;
labelFunc04DF_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04DF_0063;
	message("這位女士驚訝地抬頭說：「我現在沒在工作，我請求你尊重我的隱私。如果你想和我說話，請在深夜時分到澡堂來。」*");
	say();
	abort;
labelFunc04DF_0063:
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0006 = UI_get_timer(0x0004);
	var0007 = UI_get_timer(0x0003);
	var0008 = UI_get_timer(0x0002);
	if (!((gflags[0x029D] && (var0006 < 0x0002)) || ((gflags[0x029E] && (var0007 < 0x0002)) || (gflags[0x029C] && (var0008 < 0x0002))))) goto labelFunc04DF_00BF;
	message("這位迷人的女士驚訝地看著你，說道：「親愛的，你剛才已經享受過了，不是嗎？請等你休息好了再來。」*");
	say();
	abort;
	goto labelFunc04DF_016B;
labelFunc04DF_00BF:
	if (!(!gflags[0x02AC])) goto labelFunc04DF_0161;
	message("你看到一位散發熱帶風情的美麗年輕女子。");
	say();
	if (!(!var0004)) goto labelFunc04DF_00D8;
	message("「哈囉，帥哥！");
	say();
	goto labelFunc04DF_00EE;
labelFunc04DF_00D8:
	message("「哈囉，親愛的。妳確定妳不想和 Roberto 談談嗎？」");
	say();
	if (!Func090A()) goto labelFunc04DF_00E9;
	message("「好吧，親愛的。只要能讓妳熱血沸騰……」");
	say();
	goto labelFunc04DF_00EE;
labelFunc04DF_00E9:
	message("「那你最好去跟他說話！他可能更合你的胃口。」*");
	say();
	abort;
labelFunc04DF_00EE:
	message("「你的名字是什麼？」");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04DF_0133;
	if (!(!var0004)) goto labelFunc04DF_011F;
	message("「你好嗎，");
	message(var0002);
	message("？我很高興見到你！」");
	say();
	goto labelFunc04DF_0129;
labelFunc04DF_011F:
	message("「哈囉，");
	message(var0002);
	message("。」");
	say();
labelFunc04DF_0129:
	var0005 = var0002;
	gflags[0x029A] = true;
labelFunc04DF_0133:
	if (!(var0009 == var0003)) goto labelFunc04DF_015A;
	message("「噢拜託！別又是一個聖者 ！」");
	say();
	if (!(!var0004)) goto labelFunc04DF_0150;
	message("Martine 深吸了一口氣，然後笑了。");
	say();
	message("「嗯，親愛的，你是誰並不重要。無論如何我們都會有一段好時光。」");
	say();
labelFunc04DF_0150:
	gflags[0x029B] = true;
	var0005 = var0003;
labelFunc04DF_015A:
	gflags[0x02AC] = true;
	goto labelFunc04DF_016B;
labelFunc04DF_0161:
	message("「又見面了，");
	message(var0005);
	message("，」 Martine 說。");
	say();
labelFunc04DF_016B:
	converse attend labelFunc04DF_027A;
	case "姓名" attend labelFunc04DF_0181:
	message("「我在這裡使用的名字是 Martine 。你懂的……」她對你眨眼。");
	say();
	UI_remove_answer("姓名");
labelFunc04DF_0181:
	case "職業" attend labelFunc04DF_01AC:
	if (!(!var0004)) goto labelFunc04DF_0197;
	message("「親愛的，我的工作是讓你開心。");
	say();
	goto labelFunc04DF_019B;
labelFunc04DF_0197:
	message("「親愛的，我的工作是服侍妳。");
	say();
labelFunc04DF_019B:
	message("「在澡堂期間感到舒適是很重要的。」");
	say();
	UI_add_answer(["澡堂", "舒適的服務"]);
labelFunc04DF_01AC:
	case "澡堂" attend labelFunc04DF_01CA:
	message("「這是個極好的工作地點。我絕對熱愛它。我不會去其他地方工作。我擁有的金幣多到花不完。」");
	say();
	if (!(!var0004)) goto labelFunc04DF_01C3;
	message("Martine 對你飛吻。「我也遇到過許多各種有趣的人！」");
	say();
labelFunc04DF_01C3:
	UI_remove_answer("澡堂");
labelFunc04DF_01CA:
	case "舒適的服務" attend labelFunc04DF_01F0:
	message("「你有很多選擇。我們可以去溫泉池裡游個泳。或者我可以為你按摩。或者我們也可以只是聊聊天。~~但如果你想真正地更了解我，我們應該去交誼廳……」");
	say();
	UI_remove_answer("舒適的服務");
	UI_add_answer(["游泳", "按摩", "聊天", "交誼廳"]);
labelFunc04DF_01F0:
	case "交誼廳" attend labelFunc04DF_0233:
	message("「你想在交誼廳裡和我作伴嗎？」");
	say();
	if (!Func090A()) goto labelFunc04DF_0228;
	message("Martine 帶你進入一個私人房間。~~「這根本不是交誼廳。我們將會獨處！」~~過了一會兒，在這位女士向你展示了比街頭騙子法師還要多的把戲之後，你走出交誼廳，成為了一個更快樂的聖者 。");
	say();
	gflags[0x029C] = true;
	UI_set_timer(0x0002);
	var000A = UI_remove_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04DF_022C;
labelFunc04DF_0228:
	message("「沒關係，親愛的。」");
	say();
labelFunc04DF_022C:
	UI_remove_answer("交誼廳");
labelFunc04DF_0233:
	case "游泳" attend labelFunc04DF_0246:
	message("Martine 幫你脫下衣物，引導你進入溫暖的泉水中。感覺棒極了，你很想睡一覺；但你知道你還有任務要完成。過了一會兒， Martine 扶你出水，你穿上衣服。");
	say();
	UI_remove_answer("游泳");
labelFunc04DF_0246:
	case "按摩" attend labelFunc04DF_0259:
	message("Martine 幫你脫下衣物，引導你到一張舒適的按摩床上。你趴著，這位女士熟練地揉捏和摩擦你痠痛的肌肉，慢慢地讓你進入一種忘我的狀態。過了一會兒， Martine 扶你起來，你穿上衣服。");
	say();
	UI_remove_answer("按摩");
labelFunc04DF_0259:
	case "聊天" attend labelFunc04DF_026C:
	message("Martine 笑了。「我沒問題，親愛的。我敢打賭你有很多關於冒險的故事可以講，對吧？說！你去過山裡的秘密通道嗎？你知道它們都是相連的嗎？我知道有一扇暗門可以直接通到這棟建築的後面！」她低聲說：「我相信入口就在賭坊 (House of Games) 裡。」~~你和 Martine 聊了許多其他話題，直到你意識到你在溫泉裡待了太久。還有任務要完成！");
	say();
	UI_remove_answer("聊天");
labelFunc04DF_026C:
	case "告辭" attend labelFunc04DF_0277:
	goto labelFunc04DF_027A;
labelFunc04DF_0277:
	goto labelFunc04DF_016B;
labelFunc04DF_027A:
	endconv;
	message("「我希望很快能再見到你，親愛的！」");
	say();
	if (!(!var0004)) goto labelFunc04DF_028D;
	message("Martine 對你飛吻。*");
	say();
	goto labelFunc04DF_0291;
labelFunc04DF_028D:
	message("Martine 揮手道別。*");
	say();
labelFunc04DF_0291:
	return;
}


