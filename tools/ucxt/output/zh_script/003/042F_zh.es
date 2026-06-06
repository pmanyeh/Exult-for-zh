#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func08A0 0x8A0 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func042F object#(0x42F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc042F_01D0;
	UI_show_npc_face(0xFFD1, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFD1));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x007B]) goto labelFunc042F_0044;
	UI_add_answer("Charles");
labelFunc042F_0044:
	if (!(!gflags[0x00B0])) goto labelFunc042F_0056;
	message("這位年輕可愛的酒館女侍既性感又甜美。");
	say();
	gflags[0x00B0] = true;
	goto labelFunc042F_005A;
labelFunc042F_0056:
	message("「又見面了！」活潑的 Jeanette 說。");
	say();
labelFunc042F_005A:
	converse attend labelFunc042F_01CB;
	case "姓名" attend labelFunc042F_0070:
	message("「 Jeanette ，為您服務！」");
	say();
	UI_remove_answer("姓名");
labelFunc042F_0070:
	case "職業" attend labelFunc042F_00E1:
	message("「我在藍野豬酒館為 Lucy 工作。我提供食物和飲料。");
	say();
	if (!(var0001 == 0x0017)) goto labelFunc042F_00DD;
	message("「如果有任何你想要的，請說！而且，呃，如果你跟我買，我會給你折扣！」");
	say();
	var0002 = Func08F7(0xFFFC);
	if (!var0002) goto labelFunc042F_00CA;
	message("「哎呀， Dupre 爵士！很高興再次見到你！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「妳好，女士！我想我可能會再來品嚐藍野豬的優質飲料！」*");
	say();
	UI_show_npc_face(0xFFD1, 0x0000);
	message("「隨時歡迎，大人！隨時歡迎！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFD1, 0x0000);
labelFunc042F_00CA:
	UI_add_answer(["food", "drink", "buy"]);
	goto labelFunc042F_00E1;
labelFunc042F_00DD:
	message("「我在白天和晚上工作。你到時候應該來酒館，我們再多聊聊！」");
	say();
labelFunc042F_00E1:
	case "food" attend labelFunc042F_00FB:
	message("「Lucy 是個好廚師。我推薦所有的東西。特別是銀葉草 (Silverleaf) 。」");
	say();
	UI_add_answer("Silverleaf");
	UI_remove_answer("food");
labelFunc042F_00FB:
	case "Silverleaf" attend labelFunc042F_010E:
	message("「很棒的一道菜。嚐嚐看吧！」");
	say();
	UI_remove_answer("Silverleaf");
labelFunc042F_010E:
	case "drink" attend labelFunc042F_0121:
	message("「你看起來像是需要好好喝一杯！」");
	say();
	UI_remove_answer("drink");
labelFunc042F_0121:
	case "buy" attend labelFunc042F_012C:
	Func08A0();
labelFunc042F_012C:
	case "Charles" attend labelFunc042F_0150:
	message("「他提到我了是嗎？嗯，他可以再想想！我沒辦法強迫自己和上流階級交往。那些資產階級的有錢男人既討厭又自負。此外，我已經愛上別人了。」");
	say();
	gflags[0x007D] = true;
	UI_remove_answer("Charles");
	UI_add_answer(["上流階級", "別人"]);
labelFunc042F_0150:
	case "上流階級" attend labelFunc042F_0163:
	message("「他們都一樣。他們在城堡裡工作，有成堆的黃金，可以擁有任何他們想要的女人！另一方面，一個謙卑的商人才是完美的男人。」");
	say();
	UI_remove_answer("上流階級");
labelFunc042F_0163:
	case "別人" attend labelFunc042F_01BD:
	message("「是烘焙師 Willy ！但他還不知道！」她咯咯地笑。");
	say();
	gflags[0x0085] = true;
	var0003 = Func08F7(0xFFDB);
	if (!var0003) goto labelFunc042F_01A4;
	UI_show_npc_face(0xFFDB, 0x0000);
	message("「等等， Jeanette ！妳完全搞錯了！ Charles 是個 -僕人- ！妳真是個無知的人！ Charles 不是『上流階級』！他和妳一樣是工人階級！那個富有的商人是 Willy ！如果你問我，那個討厭又自負的人是 Willy 。 Charles 簡直就是個夢幻天菜！」");
	say();
	UI_remove_npc_face(0xFFDB);
	UI_show_npc_face(0xFFD1, 0x0000);
	goto labelFunc042F_01A8;
labelFunc042F_01A4:
	message("你向 Jeanette 指出 Charles 是一名僕人。");
	say();
labelFunc042F_01A8:
	message("Jeanette 想了想剛才的話。「你是對的！我真不敢相信我這麼瞎！喔， Charles ！我竟然真的可以考慮 Charles ！而且他……好帥！」 Jeanette 高興地尖叫。「下次他在酒館時，我一定要認真地跟他調情！」");
	say();
	gflags[0x007E] = true;
	Func0911(0x0014);
	UI_remove_answer("別人");
labelFunc042F_01BD:
	case "告辭" attend labelFunc042F_01C8:
	goto labelFunc042F_01CB;
labelFunc042F_01C8:
	goto labelFunc042F_005A;
labelFunc042F_01CB:
	endconv;
	message("「再會！」*");
	say();
labelFunc042F_01D0:
	if (!(event == 0x0000)) goto labelFunc042F_01DE;
	Func092E(0xFFD1);
labelFunc042F_01DE:
	return;
}


