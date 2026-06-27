#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func08B7 0x8B7 ();
extern void Func092E 0x92E (var var0000);

void Func0425 object#(0x425) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0425_02BA;
	UI_show_npc_face(0xFFDB, 0x0000);
	var0000 = Func0908();
	var0001 = "Avatar";
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFDB));
	var0004 = Func0909();
	if (!gflags[0x0083]) goto labelFunc0425_0045;
	var0005 = var0000;
labelFunc0425_0045:
	if (!gflags[0x0084]) goto labelFunc0425_0051;
	var0005 = var0001;
labelFunc0425_0051:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(var0003 == 0x0017)) goto labelFunc0425_007B;
	UI_add_answer(["飲料", "食物", "購買"]);
labelFunc0425_007B:
	if (!(!gflags[0x00A6])) goto labelFunc0425_011D;
	message("你看見一位五十多歲、頗具魅力的女人。她帶著溫暖的微笑。「歡迎！陌生人，你是誰？」");
	say();
	var0006 = Func090B([var0000, var0001]);
	if (!(var0006 == var0000)) goto labelFunc0425_00B3;
	message("「哎呀！哈囉～");
	message(var0000);
	message("。」");
	say();
	gflags[0x0083] = true;
	var0005 = var0000;
labelFunc0425_00B3:
	if (!(var0006 == var0001)) goto labelFunc0425_0116;
	if (!(var0003 == 0x0017)) goto labelFunc0425_0108;
	message("「哇喔！大家聽好！這位就是聖者！」");
	say();
	message("藍野豬酒館 (Blue Boar) 裡的每個人都笑了。");
	say();
	message("「我敢打賭你需要來杯飲料，對吧？」");
	say();
	gflags[0x0084] = true;
	var0007 = Func08F7(0xFFFC);
	if (!var0007) goto labelFunc0425_0105;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「該死！她怎麼知道的？」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFDB, 0x0000);
labelFunc0425_0105:
	goto labelFunc0425_0110;
labelFunc0425_0108:
	message("「喔，真的嗎？」她故作驚訝地說。「哎呀，我一直都很想見見聖者！」");
	say();
	gflags[0x0084] = true;
labelFunc0425_0110:
	var0005 = var0001;
labelFunc0425_0116:
	gflags[0x00A6] = true;
	goto labelFunc0425_0146;
labelFunc0425_011D:
	if (!((var0002 < 0x0001) || (var0002 > 0x0002))) goto labelFunc0425_013C;
	message("「要點什麼，");
	message(var0005);
	message("？」Lucy 問。");
	say();
	goto labelFunc0425_0146;
labelFunc0425_013C:
	message("「有什麼我能為你效勞的，");
	message(var0005);
	message("？」Lucy 問。");
	say();
labelFunc0425_0146:
	converse attend labelFunc0425_02B5;
	case "姓名" attend labelFunc0425_015C:
	message("「我是 Lucy！」");
	say();
	UI_remove_answer("姓名");
labelFunc0425_015C:
	case "職業" attend labelFunc0425_01C0:
	message("「我經營藍野豬酒館。不列顛尼亞最古老的酒館。」");
	say();
	if (!(var0003 == 0x0017)) goto labelFunc0425_01BC;
	message("「如果你想吃點或喝點什麼，只要說一聲！」");
	say();
	UI_add_answer("藍野豬酒館");
	var0007 = Func08F7(0xFFFC);
	if (!var0007) goto labelFunc0425_01B9;
	message("她對 Dupre 說。「那你呢，帥哥？想吃點什麼嗎？」她眨了眨眼。*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「親愛的，妳會讓任何男人都感到飢餓！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFDB, 0x0000);
	message("「我喜歡你的朋友，");
	message(var0005);
	message("。」");
	say();
labelFunc0425_01B9:
	goto labelFunc0425_01C0;
labelFunc0425_01BC:
	message("「如果你在營業時間來酒館，我很樂意為你服務！」");
	say();
labelFunc0425_01C0:
	case "藍野豬酒館" attend labelFunc0425_01E6:
	message("「這是個適合狂歡的絕佳場所！它已經在這裡很久了！我從我祖父那裡繼承了它。我喜歡這裡是因為我熱愛烹飪。還有吃。」她笑著說。「還有喝！」她再次大笑。~~「但最主要的是，我喜歡這裡是因為能遇到這麼多有趣的人。就像你一樣，");
	message(var0005);
	message("！」");
	say();
	UI_remove_answer("藍野豬酒館");
	UI_add_answer(["狂歡", "人"]);
labelFunc0425_01E6:
	case "狂歡" attend labelFunc0425_021D:
	message("「你看起來就像是那種喜歡好好狂歡一下的人！");
	say();
	if (!(!(var0002 == 0x0007))) goto labelFunc0425_020B;
	message("「晚上回到酒館來聽我們的駐唱樂團，『聖者旅團』的表演吧！」");
	say();
	UI_add_answer("聖者旅團");
	goto labelFunc0425_020F;
labelFunc0425_020B:
	message("「我們的駐唱樂團『聖者旅團』正在另一個房間表演！」");
	say();
labelFunc0425_020F:
	UI_remove_answer("狂歡");
	UI_add_answer("狂歡");
labelFunc0425_021D:
	case "狂歡" attend labelFunc0425_0230:
	message("Lucy 笑了。「狂歡！唱歌！跳舞！吃東西！喝酒！在一個可以讓人停下來享受生活的地方和時刻！我看得出來，你已經很久沒有品嚐不列顛尼亞生活中簡單的樂趣了！」");
	say();
	UI_remove_answer("狂歡");
labelFunc0425_0230:
	case "聖者旅團" attend labelFunc0425_0249:
	message("「他們是當地受歡迎的合唱團。我相信你會喜歡他們的，");
	message(var0005);
	message("！」");
	say();
	UI_remove_answer("聖者旅團");
labelFunc0425_0249:
	case "人" attend labelFunc0425_025C:
	message("「喔，我好喜歡認識那些喜歡出門『殺』東西的男人！」");
	say();
	UI_remove_answer("人");
labelFunc0425_025C:
	case "食物" attend labelFunc0425_0276:
	message("「我這裡提供的每樣東西都很美味。我強烈推薦你嚐嚐『銀樹葉』這道菜。保證物超所值！」");
	say();
	UI_remove_answer("食物");
	UI_add_answer("銀樹葉");
labelFunc0425_0276:
	case "飲料" attend labelFunc0425_0289:
	message("「我提供不列顛城最棒的麥酒和葡萄酒。」");
	say();
	UI_remove_answer("飲料");
labelFunc0425_0289:
	case "銀樹葉" attend labelFunc0425_029C:
	message("「它是用一種非常稀有樹木的葉子做成的。非常棒！」");
	say();
	UI_remove_answer("銀樹葉");
labelFunc0425_029C:
	case "購買" attend labelFunc0425_02A7:
	Func08B7();
labelFunc0425_02A7:
	case "告辭" attend labelFunc0425_02B2:
	goto labelFunc0425_02B5;
labelFunc0425_02B2:
	goto labelFunc0425_0146;
labelFunc0425_02B5:
	endconv;
	message("「晚點聊！」*");
	say();
labelFunc0425_02BA:
	if (!(event == 0x0000)) goto labelFunc0425_02C8;
	Func092E(0xFFDB);
labelFunc0425_02C8:
	return;
}


