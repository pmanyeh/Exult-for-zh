#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08DE 0x8DE ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045C object#(0x45C) ()
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

	if (!(event == 0x0001)) goto labelFunc045C_02F7;
	UI_show_npc_face(0xFFA4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA4));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x011F]) goto labelFunc045C_004A;
	UI_add_answer("謀殺");
labelFunc045C_004A:
	if (!gflags[0x0040]) goto labelFunc045C_0057;
	UI_add_answer("皇冠寶石號（Crown Jewel）");
labelFunc045C_0057:
	if (!gflags[0x0043]) goto labelFunc045C_0064;
	UI_add_answer("Hook");
labelFunc045C_0064:
	if (!(!gflags[0x0117])) goto labelFunc045C_0076;
	message("你看到一個神情疲憊、失去右臂的男人。他用單手抓了抓頭，朝你的方向瞇起眼睛。");
	say();
	gflags[0x0117] = true;
	goto labelFunc045C_0080;
labelFunc045C_0076:
	message("「喂，你過得怎樣，");
	message(var0000);
	message("？」Rutherford 呼喚著你。");
	say();
labelFunc045C_0080:
	converse attend labelFunc045C_02F2;
	case "姓名" attend labelFunc045C_0096:
	message("他發出一聲尖銳的咳嗽來清喉嚨。「我的名字是 Rutherford。很高興認識你。」~~ 他伸出油膩的手要和你握手，直到你握住他才縮回。");
	say();
	UI_remove_answer("姓名");
labelFunc045C_0096:
	case "職業" attend labelFunc045C_0106:
	if (!gflags[0x011F]) goto labelFunc045C_00FE;
	message("「我可是 The Checquered Cork 的酒保。在 Minoc 討論每天發生事件的最佳去處。」");
	say();
	if (!(var0002 == 0x0017)) goto labelFunc045C_00E8;
	message("他對著剛才用來擦拭吧檯的抹布咳嗽。");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc045C_00E8;
	message("「又見面了，Dupre 爵士！你這麼喜歡我的店，所以又回來了嗎？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我親愛的 Rutherford，這並不是在影射 The Checquered Cork，我只是單純喜歡好酒！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFA4, 0x0000);
labelFunc045C_00E8:
	UI_add_answer(["Minoc", "事件", "購買", "房間"]);
	goto labelFunc045C_0106;
labelFunc045C_00FE:
	message("「現在可不是閒聊的時候！William 的鋸木廠有兩個人被謀殺了！」");
	say();
	gflags[0x011F] = true;
labelFunc045C_0106:
	case "購買" attend labelFunc045C_012D:
	if (!(var0002 == 0x0017)) goto labelFunc045C_0122;
	message("「我們有各種豐富的靈藥可以為你解渴，還有美食可以滿足你的味蕾。」");
	say();
	Func08DE();
	goto labelFunc045C_0126;
labelFunc045C_0122:
	message("「因為我今天的工作已經結束了，請你下次再來吧。非常感謝你。」");
	say();
labelFunc045C_0126:
	UI_remove_answer("購買");
labelFunc045C_012D:
	case "房間" attend labelFunc045C_01F2:
	if (!(var0002 == 0x0017)) goto labelFunc045C_01E7;
	message("「住一晚的房間非常合理。每人只要 8 枚金幣。要一間嗎？」");
	say();
	if (!Func090A()) goto labelFunc045C_01E0;
	var0004 = UI_get_party_list();
	var0005 = 0x0000;
	enum();
labelFunc045C_0157:
	for (var0008 in var0004 with var0006 to var0007) attend labelFunc045C_016F;
	var0005 = (var0005 + 0x0001);
	goto labelFunc045C_0157;
labelFunc045C_016F:
	var0009 = (var0005 * 0x0008);
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000A >= var0009)) goto labelFunc045C_01D9;
	var000B = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000B)) goto labelFunc045C_01BE;
	message("「你帶太多東西了，拿不了房間鑰匙，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc045C_01D6;
labelFunc045C_01BE:
	message("「這是你的房間鑰匙。這只在你離開前有效。」");
	say();
	var000C = UI_remove_party_items(var0009, 0x0284, 0xFE99, 0xFE99, true);
labelFunc045C_01D6:
	goto labelFunc045C_01DD;
labelFunc045C_01D9:
	message("「你沒有足夠的金幣，是吧？那可真糟糕。」");
	say();
labelFunc045C_01DD:
	goto labelFunc045C_01E4;
labelFunc045C_01E0:
	message("「也許改天晚上吧。」");
	say();
labelFunc045C_01E4:
	goto labelFunc045C_01EB;
labelFunc045C_01E7:
	message("「如果你能在我的正常營業時間內提出請求，我會非常感激的。」");
	say();
labelFunc045C_01EB:
	UI_remove_answer("房間");
labelFunc045C_01F2:
	case "Minoc" attend labelFunc045C_0213:
	message("「是的，這城鎮通常非常安靜。直到最近！」他瞇著的眼睛突然睜大，直直地盯著你。");
	say();
	if (!(var0002 == 0x0017)) goto labelFunc045C_020C;
	message("「話說，陌生人，你剛才是說你什麼時候抵達鎮上的？」~~在仔細觀察了你一會兒之後，他聳了聳肩，又回去擦拭吧檯了。");
	say();
labelFunc045C_020C:
	UI_remove_answer("Minoc");
labelFunc045C_0213:
	case "事件" attend labelFunc045C_0233:
	message("「在鋸木廠發生這些邪惡的事情之前，大家都在談論紀念碑。」");
	say();
	UI_remove_answer("事件");
	UI_add_answer(["紀念碑", "鋸木廠"]);
labelFunc045C_0233:
	case "謀殺" attend labelFunc045C_0246:
	message("「好吧，我想這就排除了你是可能兇手的嫌疑。如果你是兇手，你就不必到處問人關於謀殺案發生了什麼事。你早就在那裡，早就知道了。」");
	say();
	UI_remove_answer("謀殺");
labelFunc045C_0246:
	case "鋸木廠" attend labelFunc045C_028A:
	message("「喂，你不是本地人吧？」他懷疑地看著你。「你該不會是友誼會的人吧？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc045C_0272;
	message("「我就知道！」");
	say();
	UI_add_answer(["謀殺", "友誼會"]);
	goto labelFunc045C_0283;
labelFunc045C_0272:
	message("「只是問問！你不需要覺得被冒犯！」");
	say();
	UI_add_answer(["謀殺", "友誼會"]);
labelFunc045C_0283:
	UI_remove_answer("鋸木廠");
labelFunc045C_028A:
	case "Hook" attend labelFunc045C_02AB:
	message("「我認識他！他是個住在海盜巢穴 (Buccaneer's Den)的海盜。他們說 Hook 很卑鄙，只要價錢對，他連自己的親娘都會殺，我打賭他們是對的。~~「為什麼呢，我有一次和這個 Hook 打了一架。我很幸運，只失去了一條右臂，還留下一隻好眼睛。差不多就是那時候，我開始重新考慮我當海盜的職涯，然後現在我就在這裡了。」");
	say();
	message("「我最近沒見過他，但對謀殺現場的描述聽起來絕對是他的傑作！」");
	say();
	gflags[0x0104] = true;
	Func0911(0x000A);
	UI_remove_answer("Hook");
labelFunc045C_02AB:
	case "皇冠寶石號（Crown Jewel）" attend labelFunc045C_02BE:
	message("「那艘船最近的確在這裡。事實上，就是謀殺案發生的那晚！這之間會有什麼關聯嗎？嗯……」");
	say();
	UI_remove_answer("皇冠寶石號（Crown Jewel）");
labelFunc045C_02BE:
	case "友誼會" attend labelFunc045C_02D1:
	message("「謝天謝地，最近這幾週整個鎮上的人都吵得不可開交，還好有友誼會試圖把城鎮團結起來。我不是成員什麼的，但我聽說了他們做的所有好事。像是救濟窮人等等。」");
	say();
	UI_remove_answer("友誼會");
labelFunc045C_02D1:
	case "紀念碑" attend labelFunc045C_02E4:
	message("「喔，你一定是指他們要為我們的造船匠建造的那座雕像。他叫 Owen，是個本地男孩。我聽說它會有一個騎在馬上的人那麼高，並且展示 Owen 透過望遠鏡凝視之類的樣子。」");
	say();
	UI_remove_answer("紀念碑");
labelFunc045C_02E4:
	case "告辭" attend labelFunc045C_02EF:
	goto labelFunc045C_02F2;
labelFunc045C_02EF:
	goto labelFunc045C_0080;
labelFunc045C_02F2:
	endconv;
	message("「晚點見……至少如果你待在我好的這隻眼睛前面，我就看得到你。」*");
	say();
labelFunc045C_02F7:
	if (!(event == 0x0000)) goto labelFunc045C_0305;
	Func092E(0xFFA4);
labelFunc045C_0305:
	return;
}


