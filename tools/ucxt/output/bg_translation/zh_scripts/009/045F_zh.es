#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func089F 0x89F (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045F object#(0x45F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc045F_025B;
	UI_show_npc_face(0xFFA1, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA1));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00F6]) goto labelFunc045F_004A;
	UI_add_answer("可愛");
labelFunc045F_004A:
	if (!(!gflags[0x011A])) goto labelFunc045F_005C;
	message("你看到一個嚴厲但看起來很友善的男人，穿著軍裝。當你看著他時，你會覺得他也在打量你。");
	say();
	gflags[0x011A] = true;
	goto labelFunc045F_0060;
labelFunc045F_005C:
	message("「我有什麼可以為你效勞的嗎？」Jakher 說。");
	say();
labelFunc045F_0060:
	converse attend labelFunc045F_0256;
	case "姓名" attend labelFunc045F_007D:
	message("「我是 Jakher，以 Sosaria 古代一位偉大將軍的名字命名。歡迎來到 Minoc。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Minoc");
labelFunc045F_007D:
	case "職業" attend labelFunc045F_00AE:
	if (!gflags[0x011F]) goto labelFunc045F_009F;
	message("「和 Karenna 一樣，我也是戰鬥技藝的訓練師。我的專長是力量與策略。在戰場上，如果一個人在使用肌肉的同時不用腦子，他就有掉腦袋的危險。」");
	say();
	UI_add_answer(["Karenna", "訓練師"]);
	goto labelFunc045F_00AE;
labelFunc045F_009F:
	message("「也許這是我們應該在更合適的時間談論的事情。現在我們應該關心的是，找出是誰對剛在 William 鋸木廠發現的兩起謀殺案負責。」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺案");
labelFunc045F_00AE:
	case "訓練師" attend labelFunc045F_00F2:
	if (!(var0002 == 0x001B)) goto labelFunc045F_00E7;
	message("「我的收費是每次訓練 20 枚金幣。你還有興趣嗎？」");
	say();
	if (!Func090A()) goto labelFunc045F_00DC;
	Func089F([0x0002, 0x0000], 0x0014);
	goto labelFunc045F_00E4;
labelFunc045F_00DC:
	message("「我所教導的真正價值是無法估量的。我的時間對我來說很寶貴，因此很有價值。如果你付給我微不足道的錢，而我依然訓練你，那對我們雙方都是一種侮辱。");
	say();
	message("「可惜很少有人真正理解策略和戰術的價值。你可以盡情地用劍揮砍，但它無法代替你思考。」");
	say();
labelFunc045F_00E4:
	goto labelFunc045F_00F2;
labelFunc045F_00E7:
	message("「我沒有在這個特定時間進行訓練的習慣。」");
	say();
	UI_remove_answer("訓練師");
labelFunc045F_00F2:
	case "Minoc" attend labelFunc045F_0112:
	message("「我們的城市是一個商業城市，儘管最近它的主要交易似乎是八卦和嫉妒。在這些謀殺案發生之前，當地最新的醜聞是即將為造船匠 Owen 建造的雕像。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["謀殺案", "Owen"]);
labelFunc045F_0112:
	case "謀殺案" attend labelFunc045F_0132:
	message("「我懷疑兇手——或者兇手們——是從外地來的，而且現在可能早就離開了。在今天之前，這裡已經有一段時間沒有發生過謀殺案了。我們相當程度的繁榮使得這裡的人們大多能互相包容。這就是吉普賽人定居在這裡的原因。顯然缺乏動機這一點令人費解。」");
	say();
	UI_remove_answer("謀殺案");
	UI_add_answer(["離開", "吉普賽人"]);
labelFunc045F_0132:
	case "離開" attend labelFunc045F_0145:
	message("「我懷疑我們社區裡有人是兇手。如果涉案的陌生人，在犯案後繼續逗留很長時間，他們很快就會暴露。因此，兇手已經不在鎮上了。」");
	say();
	UI_remove_answer("離開");
labelFunc045F_0145:
	case "Karenna" attend labelFunc045F_01A5:
	message("「一個技巧嫻熟且兇猛的戰士，但恐怕在戰術方面有點短視。儘管如此，像她這樣有吸引力的女人，在遇到時也足夠有趣了。但別告訴她我這麼說過。這只會鼓勵她。現在和她同住一個屋簷下已經夠不自在了。」");
	say();
	var0003 = Func08F7(0xFFA2);
	if (!var0003) goto labelFunc045F_018D;
	UI_show_npc_face(0xFFA2, 0x0000);
	message("「你在那邊嘀咕什麼？」*");
	say();
	UI_show_npc_face(0xFFA1, 0x0000);
	message("「沒什麼！什麼都沒有！」Jakher 對你眨了眨眼。*");
	say();
	UI_remove_npc_face(0xFFA2);
	UI_show_npc_face(0xFFA1, 0x0000);
labelFunc045F_018D:
	UI_remove_answer("Karenna");
	var0004 = true;
	UI_add_answer(["短視", "屋簷"]);
labelFunc045F_01A5:
	case "短視" attend labelFunc045F_01F4:
	message("「她是那種堅信所有問題都可以用三種方法之一解決的人。打得更用力。打得更快。或者，打得更多。」");
	say();
	var0003 = Func08F7(0xFFA2);
	if (!var0003) goto labelFunc045F_01ED;
	UI_show_npc_face(0xFFA2, 0x0000);
	message("「你是在說我嗎？我感覺我的耳朵在發燙！」*");
	say();
	UI_show_npc_face(0xFFA1, 0x0000);
	message("「你在作夢，Karenna。我為什麼要談論你？」他對著你神秘地竊笑。*");
	say();
	UI_remove_npc_face(0xFFA2);
	UI_show_npc_face(0xFFA1, 0x0000);
labelFunc045F_01ED:
	UI_remove_answer("短視");
labelFunc045F_01F4:
	case "屋簷" attend labelFunc045F_0207:
	message("「Minoc 以前有兩個訓練館，但其中一個被閃電擊中後燒毀了。現在我們兩人都被迫共用這一個。」");
	say();
	UI_remove_answer("屋簷");
labelFunc045F_0207:
	case "可愛" attend labelFunc045F_021A:
	message("「啊，所以 Karenna 說我很可愛，是嗎？是的，我知道她看上我很多年了。」");
	say();
	UI_remove_answer("可愛");
labelFunc045F_021A:
	case "Owen" attend labelFunc045F_0231:
	message("「我和鎮上任何人一樣，認識 Owen 很久了。幾年前，他建造的三艘船沉沒了。我們當地一位較有特色居民 Karl 的兄弟被殺了。從未對沉船原因進行過調查，但 Owen 曾向我吐露，他暗地裡責怪自己。他開始酗酒，最終加入了友誼會。」");
	say();
	UI_remove_answer("Owen");
	gflags[0x00F8] = true;
labelFunc045F_0231:
	case "吉普賽人" attend labelFunc045F_0248:
	message("「你最好去問 Karenna。她是吉普賽人的好朋友，會比我更了解他們。」");
	say();
	UI_remove_answer("吉普賽人");
	gflags[0x00F4] = true;
labelFunc045F_0248:
	case "告辭" attend labelFunc045F_0253:
	goto labelFunc045F_0256;
labelFunc045F_0253:
	goto labelFunc045F_0060;
labelFunc045F_0256:
	endconv;
	message("「很高興與你交談。」*");
	say();
labelFunc045F_025B:
	if (!(event == 0x0000)) goto labelFunc045F_0269;
	Func092E(0xFFA1);
labelFunc045F_0269:
	return;
}


