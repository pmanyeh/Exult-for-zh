#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func08A6 0x8A6 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func045E object#(0x45E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc045E_0263;
	UI_show_npc_face(0xFFA2, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA2));
	UI_add_answer(["姓名", "職業", "告辭", "謀殺"]);
	if (!gflags[0x00F4]) goto labelFunc045E_004D;
	UI_add_answer("吉普賽人");
labelFunc045E_004D:
	if (!gflags[0x00F5]) goto labelFunc045E_005A;
	UI_add_answer("有魅力");
labelFunc045E_005A:
	if (!(!gflags[0x0119])) goto labelFunc045E_006C;
	message("你看到一個神情鬼祟的女人，全身穿著綠色。她臉上帶著邪惡的笑容。");
	say();
	gflags[0x0119] = true;
	goto labelFunc045E_0070;
labelFunc045E_006C:
	message("「再次見到你真好，」Karenna 說。");
	say();
labelFunc045E_0070:
	converse attend labelFunc045E_025E;
	case "姓名" attend labelFunc045E_0086:
	message("「我只回應 Karenna 這個名字，其他一概不理。」");
	say();
	UI_remove_answer("姓名");
labelFunc045E_0086:
	case "職業" attend labelFunc045E_00C0:
	if (!gflags[0x011F]) goto labelFunc045E_00AB;
	message("「我是 Minoc 的教師，和 Jakher 一起。」");
	say();
	UI_add_answer(["教師", "Minoc", "Jakher"]);
	goto labelFunc045E_00C0;
labelFunc045E_00AB:
	message("「在這種時候問這個問題真是奇怪，");
	message(var0000);
	message("。你知道有兩個人死在那座鋸木廠裡，而且他們死於身分不明的兇手或兇手們的手中嗎？」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺");
labelFunc045E_00C0:
	case "Minoc" attend labelFunc045E_00E0:
	message("「Minoc 通常很忙碌，但很安靜。然後我們的城鎮就被 Owen 紀念碑這些無稽之談給困擾，現在又發生了這些謀殺案。」");
	say();
	UI_add_answer(["紀念碑", "謀殺"]);
	UI_remove_answer("Minoc");
labelFunc045E_00E0:
	case "謀殺" attend labelFunc045E_00F3:
	message("「令人震驚！這種事通常不會發生在這裡。這充分證明了懂得如何自衛的價值。」");
	say();
	UI_remove_answer("謀殺");
labelFunc045E_00F3:
	case "Jakher" attend labelFunc045E_0146:
	message("「他本身是個相當能幹的訓練師。當然沒有我這麼熟練。但我確實覺得他很可愛，不過我求你，別告訴他我說過這事。那只會助長他的氣焰。」");
	say();
	var0003 = Func08F7(0xFFA1);
	if (!var0003) goto labelFunc045E_013B;
	UI_show_npc_face(0xFFA1, 0x0000);
	message("「你是在說我嗎？我的耳朵在發燙呢！」*");
	say();
	UI_show_npc_face(0xFFA2, 0x0000);
	message("「沒什麼你需要擔心的事，Jakher。」她對你眨了眨眼。*");
	say();
	UI_remove_npc_face(0xFFA1);
	UI_show_npc_face(0xFFA2, 0x0000);
labelFunc045E_013B:
	gflags[0x00F6] = true;
	UI_remove_answer("Jakher");
labelFunc045E_0146:
	case "教師" attend labelFunc045E_018D:
	if (!(var0002 == 0x001B)) goto labelFunc045E_0182;
	message("「我教授那種能讓人在過程中不致喪命、從而學習所有人生課題的奇特技能。戰鬥！~~「我每次訓練將向你收取 20 枚金幣。你還有興趣嗎？」");
	say();
	if (!Func090A()) goto labelFunc045E_0174;
	Func08A6([0x0001, 0x0004], 0x0014);
	goto labelFunc045E_017F;
labelFunc045E_0174:
	message("「很好。如果你運氣好，你將不會有後悔的理由。」");
	say();
	UI_remove_answer("教師");
labelFunc045E_017F:
	goto labelFunc045E_018D;
labelFunc045E_0182:
	message("「我們的店現在已經打烊了。請在營業時間過來。」");
	say();
	UI_remove_answer("教師");
labelFunc045E_018D:
	case "紀念碑" attend labelFunc045E_01A7:
	message("「我聽說它會有三十英尺高，並展示我們當地的造船匠高舉六分儀的樣子。你不會相信這麼無害的東西竟然能惹出這麼大麻煩。」");
	say();
	UI_remove_answer("紀念碑");
	UI_add_answer("麻煩");
labelFunc045E_01A7:
	case "麻煩" attend labelFunc045E_01C1:
	message("「看來良好市民之間對我們造船匠紀念碑日益增加的敵意，讓許多當地民眾充滿了學習戰鬥技能的強烈渴望。生意從來沒這麼好過！」");
	say();
	UI_remove_answer("麻煩");
	UI_add_answer("敵意");
labelFunc045E_01C1:
	case "敵意" attend labelFunc045E_01D4:
	message("「鎮上每個人都為了這事那事大動肝火。但其他人肯定比我更了解這些地方政治。我才不在乎。」");
	say();
	UI_remove_answer("敵意");
labelFunc045E_01D4:
	case "有魅力" attend labelFunc045E_0223:
	message("「Jakher 告訴你他覺得我有魅力？他當然否認，但我很多年前就知道他對我有感覺。」");
	say();
	var0003 = Func08F7(0xFFA1);
	if (!var0003) goto labelFunc045E_021C;
	UI_show_npc_face(0xFFA1, 0x0000);
	message("「什麼？你說什麼？」*");
	say();
	UI_show_npc_face(0xFFA2, 0x0000);
	message("「沒事，Jakher。走開。」她對你發出心照不宣的咯咯笑聲。*");
	say();
	UI_remove_npc_face(0xFFA1);
	UI_show_npc_face(0xFFA2, 0x0000);
labelFunc045E_021C:
	UI_remove_answer("有魅力");
labelFunc045E_0223:
	case "吉普賽人" attend labelFunc045E_023D:
	message("「吉普賽人的首領 Frederico 和他妻子 Tania 都是好人。哎，我所知道他們做過最糟糕的事，也不過是個簡單的惡作劇罷了。」");
	say();
	UI_remove_answer("吉普賽人");
	UI_add_answer("惡作劇");
labelFunc045E_023D:
	case "惡作劇" attend labelFunc045E_0250:
	message("「有一次 Frederico 丟石頭砸破了當地友誼會分會的窗戶……喔，好吧，我覺得那滿有趣的！」");
	say();
	UI_remove_answer("惡作劇");
labelFunc045E_0250:
	case "告辭" attend labelFunc045E_025B:
	goto labelFunc045E_025E;
labelFunc045E_025B:
	goto labelFunc045E_0070;
labelFunc045E_025E:
	endconv;
	message("「再會。願你所有的旅程都充滿樂趣。」*");
	say();
labelFunc045E_0263:
	if (!(event == 0x0000)) goto labelFunc045E_0271;
	Func092E(0xFFA2);
labelFunc045E_0271:
	return;
}


