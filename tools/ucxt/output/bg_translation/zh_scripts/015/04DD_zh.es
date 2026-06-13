#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04DD object#(0x4DD) ()
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

	if (!(event == 0x0000)) goto labelFunc04DD_0009;
	abort;
labelFunc04DD_0009:
	UI_show_npc_face(0xFF23, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF23));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x029F]) goto labelFunc04DD_0047;
	var0005 = var0002;
labelFunc04DD_0047:
	if (!gflags[0x02A0]) goto labelFunc04DD_0053;
	var0005 = var0003;
labelFunc04DD_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04DD_0063;
	message("這位女士驚訝地抬頭說：「我現在沒在工作，我請求你尊重我的隱私。如果你想和我說話，請在深夜時分到澡堂來。」*");
	say();
	abort;
labelFunc04DD_0063:
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0006 = UI_get_timer(0x0002);
	var0007 = UI_get_timer(0x0003);
	var0008 = UI_get_timer(0x0004);
	if (!((gflags[0x029C] && (var0006 < 0x0002)) || ((gflags[0x029E] && (var0007 < 0x0002)) || (gflags[0x029D] && (var0008 < 0x0002))))) goto labelFunc04DD_00BF;
	message("這位迷人的女士驚訝地看著你，說道：「等一下！你剛才已經享受過了，不是嗎？請等你休息好了再來。」*");
	say();
	abort;
	goto labelFunc04DD_016E;
labelFunc04DD_00BF:
	if (!(!gflags[0x02AA])) goto labelFunc04DD_0164;
	message("你看到一位有著誘人雙眼的華麗年輕女子。");
	say();
	if (!(!var0004)) goto labelFunc04DD_00D8;
	message("「哈囉，帥哥！");
	say();
	goto labelFunc04DD_00EE;
labelFunc04DD_00D8:
	message("「哈囉。妳確定妳不是真的想和 Roberto 談談嗎？」");
	say();
	if (!Func090A()) goto labelFunc04DD_00E9;
	message("「好吧，甜心。只要能讓你熱血沸騰……");
	say();
	goto labelFunc04DD_00EE;
labelFunc04DD_00E9:
	message("「那你最好去和 Roberto 說話！他可能更符合妳的類型。」*");
	say();
	abort;
labelFunc04DD_00EE:
	message("你是誰？」");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04DD_0133;
	if (!(!var0004)) goto labelFunc04DD_011F;
	message("「嗯，我很高興認識你，");
	message(var0002);
	message("。」");
	say();
	goto labelFunc04DD_0129;
labelFunc04DD_011F:
	message("「哈囉，");
	message(var0002);
	message("。」");
	say();
labelFunc04DD_0129:
	var0005 = var0002;
	gflags[0x029F] = true;
labelFunc04DD_0133:
	if (!(var0009 == var0003)) goto labelFunc04DD_015D;
	message("「噢吼！一個活生生的聖者 ？");
	say();
	if (!(!var0004)) goto labelFunc04DD_014F;
	message("「嘿，我們應該更好地了解彼此！」");
	say();
	goto labelFunc04DD_0153;
labelFunc04DD_014F:
	message("「還是個女的！我還以為我什麼都見過了……」");
	say();
labelFunc04DD_0153:
	var0005 = var0003;
	gflags[0x02A0] = true;
labelFunc04DD_015D:
	gflags[0x02AA] = true;
	goto labelFunc04DD_016E;
labelFunc04DD_0164:
	message("「又見面了，");
	message(var0005);
	message("，」 Wench 說。");
	say();
labelFunc04DD_016E:
	converse attend labelFunc04DD_0281;
	case "姓名" attend labelFunc04DD_018F:
	message("「你可以叫我…… Wench (侍女) 。」");
	say();
	if (!(!var0004)) goto labelFunc04DD_0188;
	message("她對你飛吻。");
	say();
labelFunc04DD_0188:
	UI_remove_answer("姓名");
labelFunc04DD_018F:
	case "職業" attend labelFunc04DD_01A8:
	message("她大笑出聲。「你一定在開玩笑！」她讓自己平靜下來，說道：「確保你在澡堂期間感到舒適是我的職責。」");
	say();
	UI_add_answer(["澡堂", "舒適的服務"]);
labelFunc04DD_01A8:
	case "澡堂" attend labelFunc04DD_01C6:
	message("「我從這裡開張就一直工作到現在。我愛死它了。我一點也沒有被剝削。我賺了一堆金幣，過著很棒的生活。」 ");
	say();
	if (!(!var0004)) goto labelFunc04DD_01BF;
	message("她對你眨眼。「我也遇到過許多好男人！」");
	say();
labelFunc04DD_01BF:
	UI_remove_answer("澡堂");
labelFunc04DD_01C6:
	case "舒適的服務" attend labelFunc04DD_01EC:
	message("「嗯，我們可以去溫泉池裡游個泳，或者妳可以享受按摩。或者我們也可以只是聊聊天。~~或者……妳可以跟我去交誼廳，我『展示』我的『職業』給妳看！」");
	say();
	UI_remove_answer("舒適的服務");
	UI_add_answer(["游泳", "按摩", "聊天", "交誼廳"]);
labelFunc04DD_01EC:
	case "交誼廳" attend labelFunc04DD_0225:
	message("「你想在交誼廳裡和我作伴嗎？」");
	say();
	if (!Func090A()) goto labelFunc04DD_0214;
	message("Wench 帶你進入一個私人房間。~~「這根本不是交誼廳。我們將會獨處，」她咯咯笑著。~~「順帶一提，你選擇我是件好事。 Roberto 和 Martine 喜歡偷客人的金幣。我可能有道德上的問題，但我不是小偷！現在，讓我們辦正事吧，好嗎？」");
	say();
	message("過了一會兒，在這位女士向你展示了比舞台上的法師還要多的把戲之後，你走出交誼廳，成為了一個更快樂的聖者 。");
	say();
	gflags[0x029D] = true;
	UI_set_timer(0x0004);
	goto labelFunc04DD_021E;
labelFunc04DD_0214:
	message("「這不是問題，");
	message(var0005);
	message("。」");
	say();
labelFunc04DD_021E:
	UI_remove_answer("交誼廳");
labelFunc04DD_0225:
	case "游泳" attend labelFunc04DD_0238:
	message("Wench 幫你脫下衣物，引導你進入溫暖的泉水中。感覺極好，你很想睡一覺，但你知道你還有任務要完成。過了一會兒， Wench 扶你出水，你穿上衣服。");
	say();
	UI_remove_answer("游泳");
labelFunc04DD_0238:
	case "按摩" attend labelFunc04DD_024B:
	message("Wench 幫你脫下衣物，引導你到一張舒適的按摩床上。你趴著，這位女士熟練地揉捏和摩擦你痠痛的肌肉，慢慢地讓你進入完全放鬆的狀態。過了一會兒， Wench 扶你起來，你穿上衣服。");
	say();
	UI_remove_answer("按摩");
labelFunc04DD_024B:
	case "聊天" attend labelFunc04DD_0273:
	message("Wench 聳聳肩。「我沒問題！我們要聊什麼？我知道了！想知道一個秘密嗎？」");
	say();
	if (!Func090A()) goto labelFunc04DD_0264;
	message("「你知道有秘密通道連接海盜巢穴 (Buccaneer's Den)的建築物嗎？這是真的！我相當確定入口是透過賭坊 (House of Games) ，我也知道有一條路可以從通道進入澡堂！」");
	say();
	goto labelFunc04DD_0268;
labelFunc04DD_0264:
	message("Wench 撅起嘴。「那就算了！」");
	say();
labelFunc04DD_0268:
	message("你和 Wench 聊了許多其他話題，這時你意識到你在溫泉裡待了太久。還有任務要完成！");
	say();
	UI_remove_answer("聊天");
labelFunc04DD_0273:
	case "告辭" attend labelFunc04DD_027E:
	goto labelFunc04DD_0281;
labelFunc04DD_027E:
	goto labelFunc04DD_016E;
labelFunc04DD_0281:
	endconv;
	message("「喔，請盡快再來，");
	message(var0005);
	message("！」");
	say();
	if (!(!var0004)) goto labelFunc04DD_029A;
	message("Wench 對你飛吻。*");
	say();
	goto labelFunc04DD_029E;
labelFunc04DD_029A:
	message("Wench 揮手道別。*");
	say();
labelFunc04DD_029E:
	return;
}


