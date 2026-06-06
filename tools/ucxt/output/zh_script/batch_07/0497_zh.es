#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0497 object#(0x497) ()
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

	if (!(event == 0x0001)) goto labelFunc0497_0364;
	UI_show_npc_face(0xFF69, 0x0000);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	var0002 = Func08F7(0xFFFC);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func0909();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF69));
	var0006 = UI_is_pc_female();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02C6])) goto labelFunc0497_0073;
	message("這個活潑的仙子 (fairy) 在你周圍飛舞，咯咯笑著在你的頭上撒下某種閃閃發光的粉末。~~「我愛你！是的，我愛你！我愛你！」");
	say();
	gflags[0x02C6] = true;
	goto labelFunc0497_0077;
labelFunc0497_0073:
	message("「是的，我的愛人？」Kissme 問道。");
	say();
labelFunc0497_0077:
	converse attend labelFunc0497_035F;
	case "姓名" attend labelFunc0497_010D:
	message("「Kissme！ Kissme！」她咯咯地笑。");
	say();
	if (!var0000) goto labelFunc0497_00A7;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「別這麼做，");
	message(var0004);
	message("！誰知道這個奇怪的生物可能擁有什麼邪惡的力量！」他更仔細地檢查了這個小精靈 (sprite) 。「也許我應該先試試看，以確保它是安全的……」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0497_00A7:
	if (!var0001) goto labelFunc0497_00C2;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「嘿，『我來』吻她！她嚇不倒我！」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0497_00C2:
	if (!var0003) goto labelFunc0497_00DD;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「她『確實』看起來很誘人，不是嗎？」*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0497_00DD:
	if (!var0002) goto labelFunc0497_00F8;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我的君主問了你的『名字』，邪惡的生物！」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0497_00F8:
	UI_show_npc_face(0xFF69, 0x0000);
	message("「但那『就是』我的名字！ Kissme ！ Kissme ！這是真的！」");
	say();
	UI_remove_answer("姓名");
labelFunc0497_010D:
	case "職業" attend labelFunc0497_01CA:
	message("「我的目的是到處散播愛情粉末 (love dust) ，並歡迎你來到 Ambrosia ！我愛你！是的，我愛你！」");
	say();
	if (!var0003) goto labelFunc0497_0142;
	message("她在 Shamino 的頭頂上飛舞。~~「我也愛『你』！」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「如果你能再大一點就好了……」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_0142:
	if (!var0001) goto labelFunc0497_016B;
	message("然後她圍繞著 Spark 飛舞。~~「哦，我也愛『你』！」*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 臉紅了。「喔，別鬧了！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_016B:
	if (!var0002) goto labelFunc0497_0194;
	message("Kissme 然後飛近 Dupre 。~~「英俊的男人！英俊的男人！我愛你！這是真的！這是真的！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 拍打著仙子。「走開！你不愛我！你甚至不『認識』我！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_0194:
	if (!var0000) goto labelFunc0497_01BD;
	message("Kissme 滑翔到 Iolo 身邊，在他的臉頰上留下一個大大的吻。~~「是的！我愛你！是的，我愛你！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 做了個苦瓜臉，擦了擦臉頰。~~「聖者，那是我感覺過最草率、最濕、最……『噁心』的吻！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_01BD:
	UI_add_answer(["Ambrosia", "愛情粉末"]);
labelFunc0497_01CA:
	case "Ambrosia" attend labelFunc0497_020D:
	message("「那就是你所在的地方！這是真的！哦，是的！ Ambrosia ！」");
	say();
	if (!var0000) goto labelFunc0497_01FB;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「Ambrosia ！那麼它真的存在！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_01FB:
	message("「Ambrosia ，不列顛尼亞 (Britannia) 失落的島嶼！你真的在這裡！」");
	say();
	UI_remove_answer("Ambrosia");
	UI_add_answer("失落的島嶼");
labelFunc0497_020D:
	case "愛情粉末" attend labelFunc0497_0220:
	message("「就我所知它什麼用也沒有！但它很漂亮！」Kissme 像個孩子一樣咯咯笑。「這是我向你表達我愛你的方式！這是真的！」");
	say();
	UI_remove_answer("愛情粉末");
labelFunc0497_0220:
	case "失落的島嶼" attend labelFunc0497_0240:
	message("「Ambrosia 在幾百年前被從天而降的石頭擊中了！哦，是的！整個島嶼都被砸成碎片了！這是真的！」");
	say();
	UI_remove_answer("失落的島嶼");
	UI_add_answer(["石頭", "幾百年前"]);
labelFunc0497_0240:
	case "石頭" attend labelFunc0497_025A:
	message("「我相信它叫做凱德石 (Caddellite) 。是的，我相信這是真的！~~「而且我『確實』愛你，這是千真萬確的！」");
	say();
	UI_remove_answer("石頭");
	UI_add_answer("凱德石");
labelFunc0497_025A:
	case "凱德石" attend labelFunc0497_0274:
	message("「大部分的石頭都收集在水怪所在的坑裡。你得去問問水怪。這是真的！」");
	say();
	UI_remove_answer("凱德石");
	UI_add_answer("九頭蛇");
labelFunc0497_0274:
	case "九頭蛇" attend labelFunc0497_0287:
	message("「那隻水怪是由三個兄弟組成的——全是龍！這是真的！你要小心別惹他們生氣，因為他們脾氣很壞！哦，是的，確實如此！他們非常保護他們的凱德石，所以你得先和他們談談！」");
	say();
	UI_remove_answer("九頭蛇");
labelFunc0497_0287:
	case "幾百年前" attend labelFunc0497_02AB:
	message("「Ambrosia 曾經非常美麗！是的！我所有的祖先那時都住在這裡！到處都是愛情粉末，每天都像寶石一樣！是的，這是真的！是的，你會的！~~「哦，我必須再吻你一次！」");
	say();
	if (!var0006) goto labelFunc0497_029D;
	message("「不管你是男是女都沒關係！不，沒關係！反正我就是要吻你！」");
	say();
labelFunc0497_029D:
	UI_remove_answer("幾百年前");
	UI_add_answer("吻");
labelFunc0497_02AB:
	case "吻" attend labelFunc0497_0351:
	if (!var0000) goto labelFunc0497_02D4;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「不！別這麼做，");
	message(var0004);
	message("。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0497_02D4:
	if (!var0001) goto labelFunc0497_02EF;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「天哪，又來了！」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0497_02EF:
	if (!var0003) goto labelFunc0497_030A;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「嘿，我覺得她很可愛！」*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0497_030A:
	if (!var0002) goto labelFunc0497_032B;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「如果你要這麼做，");
	message(var0004);
	message("，就快點。我們沒時間浪費在這種蠢事上。」Dupre 對整件事看起來明顯感到反感。*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0497_032B:
	UI_show_npc_face(0xFF69, 0x0000);
	message("你允許 Kissme 吻你嗎？");
	say();
	if (!Func090A()) goto labelFunc0497_0346;
	message("Kissme 在你的嘴上留下了一個你感覺過最濕、最草率、最黏膩且最軟爛的吻。~~「哦，是的！那真有趣！我愛你！是的，這是真的！」");
	say();
	goto labelFunc0497_034A;
labelFunc0497_0346:
	message("「反正我愛你！這是真的！」Kissme 咯咯笑著，在你的頭髮上撒了更多的愛情粉末。");
	say();
labelFunc0497_034A:
	UI_remove_answer("吻");
labelFunc0497_0351:
	case "告辭" attend labelFunc0497_035C:
	goto labelFunc0497_035F;
labelFunc0497_035C:
	goto labelFunc0497_0077;
labelFunc0497_035F:
	endconv;
	message("「再見，我的愛！哦，是的！我愛你！這是真的！」*");
	say();
labelFunc0497_0364:
	if (!(event == 0x0000)) goto labelFunc0497_03E2;
	var0007 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF69));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0004)) goto labelFunc0497_03E2;
	if (!(var0008 == 0x0001)) goto labelFunc0497_03A8;
	var0009 = "@我愛你！@";
labelFunc0497_03A8:
	if (!(var0008 == 0x0002)) goto labelFunc0497_03B8;
	var0009 = "@我想吻你！@";
labelFunc0497_03B8:
	if (!(var0008 == 0x0003)) goto labelFunc0497_03C8;
	var0009 = "@我愛你，是的，我愛你！@";
labelFunc0497_03C8:
	if (!(var0008 == 0x0004)) goto labelFunc0497_03D8;
	var0009 = "@你是我的愛！@";
labelFunc0497_03D8:
	UI_item_say(0xFF69, var0009);
labelFunc0497_03E2:
	return;
}


