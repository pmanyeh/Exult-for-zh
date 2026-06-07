#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func04F1 object#(0x4F1) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc04F1_0009;
	abort;
labelFunc04F1_0009:
	UI_show_npc_face(0xFF0F, 0x0000);
	if (!gflags[0x02D3]) goto labelFunc04F1_001E;
	message("「走開，殺蜂人！」*");
	say();
	abort;
labelFunc04F1_001E:
	var0000 = false;
	var0001 = Func08F7(0xFFF6);
	var0002 = Func08F7(0xFFFF);
	if (!gflags[0x02D4]) goto labelFunc04F1_003E;
	var0000 = true;
labelFunc04F1_003E:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02BF])) goto labelFunc04F1_0060;
	message("你看到一個有點野性的裸體男人。他對自己沒穿衣服一點都不在意。");
	say();
	gflags[0x02BF] = true;
	goto labelFunc04F1_0064;
labelFunc04F1_0060:
	message("「蛤？」Papa 問。");
	say();
labelFunc04F1_0064:
	converse attend labelFunc04F1_02C4;
	case "姓名" attend labelFunc04F1_008E:
	if (!var0000) goto labelFunc04F1_007C;
	message("「我是 Murray。」");
	say();
	goto labelFunc04F1_0080;
labelFunc04F1_007C:
	message("「我 Papa！」男人咧嘴笑著，露出掉了幾顆的牙齒。他滿不在乎地抓了抓屁股。");
	say();
labelFunc04F1_0080:
	UI_remove_answer("姓名");
	UI_add_answer("你的衣服呢？");
labelFunc04F1_008E:
	case "職業" attend labelFunc04F1_00B4:
	if (!var0000) goto labelFunc04F1_00A3;
	message("「嘿，什麼工作？我在這裡過得很好。別煩我！」");
	say();
	goto labelFunc04F1_00A7;
labelFunc04F1_00A3:
	message("男人看起來很困惑。「工作？我沒工作。我活著。我和 Mama 住在這裡。不需要工作。洞穴提供一切。」");
	say();
labelFunc04F1_00A7:
	UI_add_answer(["Mama", "洞穴"]);
labelFunc04F1_00B4:
	case "你的衣服呢？" attend labelFunc04F1_00D4:
	if (!var0000) goto labelFunc04F1_00C9;
	message("「衣服讓我發癢，所以我不穿。」");
	say();
	goto labelFunc04F1_00CD;
labelFunc04F1_00C9:
	message("「衣服？！」男人爽朗地笑著，拍拍自己的肚子。「沒衣服，沒衣服，」他向你保證，仍然在輕笑。");
	say();
labelFunc04F1_00CD:
	UI_remove_answer("你的衣服呢？");
labelFunc04F1_00D4:
	case "Mama" attend labelFunc04F1_00F4:
	if (!var0000) goto labelFunc04F1_00E9;
	message("「真是個淑女，不是嗎？」他用手肘輕推你並眨了眨眼。");
	say();
	goto labelFunc04F1_00ED;
labelFunc04F1_00E9:
	message("「嗯。Mama！我 Papa。她 Mama。我們做 zug-zug。也許有一天會做出男孩或女孩！」");
	say();
labelFunc04F1_00ED:
	UI_remove_answer("Mama");
labelFunc04F1_00F4:
	case "洞穴" attend labelFunc04F1_0152:
	if (!var0000) goto labelFunc04F1_0109;
	message("「我們愛這個洞穴。蜜蜂不會打擾我們。當牠們睡覺時，我們就去採蜜。我們在營火上烤老鼠。牠們其實還不錯。你應該試試！」");
	say();
	goto labelFunc04F1_010D;
labelFunc04F1_0109:
	message("「洞穴對我們很好。我們遠離蜜蜂。牠們不傷害我們。我們不傷害牠們。我們在牠們睡覺時拿蜂蜜。我們吃洞穴裡的老鼠。在營火上烤來吃。非常好！」*");
	say();
labelFunc04F1_010D:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc04F1_013B;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我可能會吐。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF0F, 0x0000);
labelFunc04F1_013B:
	UI_remove_answer("洞穴");
	UI_add_answer(["蜜蜂", "蜂蜜", "老鼠"]);
labelFunc04F1_0152:
	case "蜜蜂" attend labelFunc04F1_01CE:
	if (!var0000) goto labelFunc04F1_0167;
	message("「如果你不打擾牠們，牠們就不會打擾你。」");
	say();
	goto labelFunc04F1_01C0;
labelFunc04F1_0167:
	message("「如果我們不傷害牠們，牠們很友善。」");
	say();
	if (!var0001) goto labelFunc04F1_01C0;
	message("男人看到 Tseramed 皺起眉頭。他指責地指著你。「獵蜂人？」");
	say();
	if (!Func090A()) goto labelFunc04F1_0187;
	message("「走開！」男人朝你吐口水，然後轉過身去。*");
	say();
	gflags[0x02D3] = true;
	abort;
	goto labelFunc04F1_01BB;
labelFunc04F1_0187:
	message("他指著 Tseramed。「他是獵蜂人！走開！」男人朝你吐口水，然後轉過身去。*");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「這是在演戲，我告訴你！這些人不是野蠻人！他們是不列顛尼亞人！」*");
	say();
	UI_remove_npc_face(0xFFF6);
	if (!var0002) goto labelFunc04F1_01BB;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「他對我來說相當野蠻！」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04F1_01BB:
	gflags[0x02D3] = true;
	abort;
labelFunc04F1_01C0:
	UI_remove_answer("蜜蜂");
	UI_add_answer("友善");
labelFunc04F1_01CE:
	case "蜂蜜" attend labelFunc04F1_01E1:
	message("男人摸著肚子微笑著，舔了舔嘴唇。~~「嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯！」");
	say();
	UI_remove_answer("蜂蜜");
labelFunc04F1_01E1:
	case "老鼠" attend labelFunc04F1_01F4:
	message("男人摸著肚子，嘴裡發出嘖嘖的聲音。~~「嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯！」");
	say();
	UI_remove_answer("老鼠");
labelFunc04F1_01F4:
	case "友善" attend labelFunc04F1_021B:
	if (!var0000) goto labelFunc04F1_0209;
	message("「當然。牠們認識 Mama 和我。我們是牠們的朋友。」");
	say();
	goto labelFunc04F1_020D;
labelFunc04F1_0209:
	message("男人點點頭。「牠們認識 Mama 和我。我們是蜜蜂的朋友。蜜蜂睡覺時讓我們吃蜂蜜。蜜蜂醒著時不喜歡給蜂蜜。」");
	say();
labelFunc04F1_020D:
	UI_remove_answer("友善");
	UI_add_answer("Mama 和你");
labelFunc04F1_021B:
	case "Mama 和你" attend labelFunc04F1_0267:
	if (!var0000) goto labelFunc04F1_0230;
	message("「我告訴過你。我們在這裡很久了。」");
	say();
	goto labelFunc04F1_0260;
labelFunc04F1_0230:
	message("「Mama 和我從小嬰兒時就住在洞穴裡。」");
	say();
	if (!var0002) goto labelFunc04F1_0259;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「聖者！他們一定是被遺棄在這裡的！哎呀，他們一定是兄妹！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF0F, 0x0000);
labelFunc04F1_0259:
	UI_add_answer("嬰兒");
labelFunc04F1_0260:
	UI_remove_answer("Mama 和你");
labelFunc04F1_0267:
	case "嬰兒" attend labelFunc04F1_0287:
	message("男人點點頭。「那時候我們是嬰兒。」");
	say();
	UI_remove_answer("嬰兒");
	if (!gflags[0x0152]) goto labelFunc04F1_0287;
	UI_add_answer("你來自 Yew 嗎？");
labelFunc04F1_0287:
	case "你來自 Yew 嗎？" attend labelFunc04F1_02A5:
	message("男人的眼睛睜大了，意識到你是認真的，然後翻了個白眼看著地板。~~「該死！好吧。你抓到我了。你說得對。Mama 和我來自 Yew，」男人用完美、充滿智慧的聲音說道。然後他爽朗地大笑起來。「不過我們把你騙得團團轉，不是嗎！」");
	say();
	gflags[0x02D4] = true;
	UI_remove_answer("你來自 Yew 嗎？");
	UI_add_answer("Yew");
labelFunc04F1_02A5:
	case "Yew" attend labelFunc04F1_02B6:
	message("「沒錯。我的真名是 Murray。Mama 其實是 Myrtle。我原本是鎮上的一名持有完整執照的藥劑師，直到不列顛尼亞稅務委員會找上我。他們想把我剝個精光，所以我就把衣服都給他們了！");
	say();
	message("「從那時起，Myrtle 和我更喜歡在這裡和蜜蜂一起生活。這裡的生活如此……無憂無慮。我們選擇與自然共存。現在，如果你不介意的話，我將與你隔離並向你告別。」*");
	say();
	abort;
labelFunc04F1_02B6:
	case "告辭" attend labelFunc04F1_02C1:
	goto labelFunc04F1_02C4;
labelFunc04F1_02C1:
	goto labelFunc04F1_0064;
labelFunc04F1_02C4:
	endconv;
	message("Papa 微笑著揮手。*");
	say();
	return;
}


