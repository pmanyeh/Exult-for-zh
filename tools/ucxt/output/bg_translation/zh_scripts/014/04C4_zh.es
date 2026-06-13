#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern void Func08D4 0x8D4 ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func08D3 0x8D3 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04C4 object#(0x4C4) ()
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

	if (!(event == 0x0001)) goto labelFunc04C4_0366;
	UI_show_npc_face(0xFF3C, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF3C));
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!gflags[0x0266]) goto labelFunc04C4_0051;
	var0004 = var0001;
labelFunc04C4_0051:
	if (!gflags[0x0267]) goto labelFunc04C4_005D;
	var0004 = var0000;
labelFunc04C4_005D:
	if (!(!gflags[0x026D])) goto labelFunc04C4_00B4;
	message("你看到一位瀟灑的年輕人，他轉身向你問候。~~「我是 Richter，堡壘的騎士。你是誰？」");
	say();
	var0005 = Func090B([var0001, var0002]);
	if (!(var0005 == var0001)) goto labelFunc04C4_0098;
	message("「很高興見到你，");
	message(var0001);
	message("。」");
	say();
	var0004 = var0001;
	gflags[0x0266] = true;
	goto labelFunc04C4_00AD;
labelFunc04C4_0098:
	message("「我懂了，」他懷疑地看著你。「那麼你是回來要更多的嗎？你別想再騙我，我警告你。」");
	say();
	var0004 = var0000;
	gflags[0x0267] = true;
	UI_add_answer("更多");
labelFunc04C4_00AD:
	gflags[0x026D] = true;
	goto labelFunc04C4_00BE;
labelFunc04C4_00B4:
	message("「哈囉，");
	message(var0004);
	message("。」Richter 說道。");
	say();
labelFunc04C4_00BE:
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C4_00D0;
	UI_add_answer("雕像");
labelFunc04C4_00D0:
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C4_00EF;
	if (!gflags[0x027B]) goto labelFunc04C4_00EF;
	if (!(!gflags[0x0279])) goto labelFunc04C4_00EF;
	UI_add_answer("石像鬼的血");
labelFunc04C4_00EF:
	converse attend labelFunc04C4_0361;
	case "姓名" attend labelFunc04C4_0122:
	message("「我告訴過你了，我叫做 Richter。」");
	say();
	gflags[0x027B] = true;
	UI_remove_answer("姓名");
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C4_0122;
	if (!(!gflags[0x0279])) goto labelFunc04C4_0122;
	UI_add_answer("石像鬼的血");
labelFunc04C4_0122:
	case "更多" attend labelFunc04C4_0142:
	message("他清了清嗓子，更仔細地打量你。~~「啊，你不用在意我的咕噥，");
	message(var0004);
	message("。」");
	say();
	UI_add_answer("我介意");
	UI_remove_answer("更多");
labelFunc04C4_0142:
	case "職業" attend labelFunc04C4_015E:
	message("「我是堡壘的軍械士。」");
	say();
	UI_add_answer(["盔甲", "武器", "堡壘"]);
labelFunc04C4_015E:
	case "堡壘" attend labelFunc04C4_0178:
	message("「是的，你在 Serpent's Hold，這裡是許多高貴且勇敢的騎士的家。」");
	say();
	UI_remove_answer("堡壘");
	UI_add_answer("騎士");
labelFunc04C4_0178:
	case "騎士" attend labelFunc04C4_019B:
	message("「John-Paul 領主負責監督這座堡壘，不過 Horffe 爵士才是衛兵隊長。當然，我們其他人都在此服務 Lord British 以及 Britannia 的需求。」");
	say();
	UI_remove_answer("騎士");
	UI_add_answer(["John-Paul", "Horffe", "需求"]);
labelFunc04C4_019B:
	case "石像鬼的血" attend labelFunc04C4_01B2:
	message("「我早該知道會是 Horffe。」他瞇起眼睛。「他不斷表現出整體缺乏道德和團結感。我會和 John-Paul 談談這件事。」");
	say();
	var0006 = true;
	UI_remove_answer("石像鬼的血");
labelFunc04C4_01B2:
	case "John-Paul" attend labelFunc04C4_01C5:
	message("「我對他能力的信任無人能及。我無法告訴你，當他選擇我做他的副手時，我有多驕傲！」");
	say();
	UI_remove_answer("John-Paul");
labelFunc04C4_01C5:
	case "Horffe" attend labelFunc04C4_01E5:
	message("他若有所思。「我知道其他人信任他，我自己也不懷疑他的戰鬥技巧。但我無法擺脫這種感覺，他需要更多的道德約束。有時我覺得有義務要盯著他。」");
	say();
	UI_remove_answer("Horffe");
	UI_add_answer(["其他人", "盯著"]);
labelFunc04C4_01E5:
	case "盯著" attend labelFunc04C4_01F8:
	message("「我不確定我到底在觀察什麼。不過，我預料他會變得具有攻擊性或成為盜賊。他似乎並不真正相信堡壘的團結。」");
	say();
	UI_remove_answer("盯著");
labelFunc04C4_01F8:
	case "其他人" attend labelFunc04C4_0218:
	message("「嗯，很明顯 John-Paul 尊重他的能力。Tory 女士告訴過我，她能『感知』到他的誠實，但我並非沒有懷疑。」");
	say();
	UI_remove_answer("其他人");
	UI_add_answer(["Tory", "感知"]);
labelFunc04C4_0218:
	case "感知" attend labelFunc04C4_022B:
	message("「Tory 女士有著不可思議的共情能力。她只需一句簡單的問候，就能判斷出對方的意圖和情緒。」");
	say();
	UI_remove_answer("感知");
labelFunc04C4_022B:
	case "Tory" attend labelFunc04C4_023E:
	message("「她是堡壘的顧問，經常為騎士們提供指導。」他的表情變得惆悵。「她也非常、非常美麗。」");
	say();
	UI_remove_answer("Tory");
labelFunc04C4_023E:
	case "需求" attend labelFunc04C4_0251:
	message("「嗯，顯然大陸上有很多尋找機會恐嚇鄉間的邪惡野獸。保護平民是我們的職責。此外，我們在這裡也是為了向一般大眾提供良好行為的榜樣。」");
	say();
	UI_remove_answer("需求");
labelFunc04C4_0251:
	case "我介意" attend labelFunc04C4_0264:
	message("他低下頭，稍微變換了一下站姿。他抬起頭，瞇著眼睛說：~~「不久前有個人進入我的軍械庫，聲稱自己是聖者，就像你現在說的一樣。當我轉身去拿他要的武器時，他偷了幾樣東西就跑了。~~我假設，」他謹慎地說，「你不是那個流氓。」");
	say();
	UI_remove_answer("我介意");
labelFunc04C4_0264:
	case "盔甲" attend labelFunc04C4_028F:
	if (!((var0003 == 0x0007) || (var0003 == 0x000D))) goto labelFunc04C4_0284;
	Func08D4();
	goto labelFunc04C4_0288;
labelFunc04C4_0284:
	message("「很抱歉。這件事等我店鋪營業時討論會更好。」");
	say();
labelFunc04C4_0288:
	UI_remove_answer("盔甲");
labelFunc04C4_028F:
	case "友誼會" attend labelFunc04C4_02BC:
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C4_02AB;
	message("「哎呀，是的，我看你也是成員。」");
	say();
	goto labelFunc04C4_02AE;
labelFunc04C4_02AB:
	Func0919();
labelFunc04C4_02AE:
	UI_remove_answer("友誼會");
	UI_add_answer("理念");
labelFunc04C4_02BC:
	case "理念" attend labelFunc04C4_02CE:
	Func091A();
	UI_remove_answer("理念");
labelFunc04C4_02CE:
	case "武器" attend labelFunc04C4_02F9:
	if (!((var0003 == 0x0007) || (var0003 == 0x000D))) goto labelFunc04C4_02EE;
	Func08D3();
	goto labelFunc04C4_02F2;
labelFunc04C4_02EE:
	message("「很抱歉。這件事等我店鋪營業時討論會更好。」");
	say();
labelFunc04C4_02F2:
	UI_remove_answer("武器");
labelFunc04C4_02F9:
	case "雕像" attend labelFunc04C4_0353:
	message("他臉上露出厭惡的表情。~~「很明顯，這是一個不尋求團結的人做的！他不配得到回報！」~~過了一會兒，他平靜下來。");
	say();
	if (!(!gflags[0x0259])) goto labelFunc04C4_034C;
	message("「你是在調查這起危害人類的罪行嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04C4_0348;
	message("「那讓我給你這些。」他舉起一些石片。「這是在雕像底部發現的。你會注意到有些地方被染紅了。我相信那是血。」");
	say();
	var0009 = UI_add_party_items(0x0001, 0x032F, 0xFE99, 0x0004, false);
	if (!var0009) goto labelFunc04C4_0341;
	gflags[0x0259] = true;
	goto labelFunc04C4_0345;
labelFunc04C4_0341:
	message("「或許等你有了更多空間時，我再給你。」");
	say();
labelFunc04C4_0345:
	goto labelFunc04C4_034C;
labelFunc04C4_0348:
	message("「我明白了。」");
	say();
labelFunc04C4_034C:
	UI_remove_answer("雕像");
labelFunc04C4_0353:
	case "告辭" attend labelFunc04C4_035E:
	goto labelFunc04C4_0361;
labelFunc04C4_035E:
	goto labelFunc04C4_00EF;
labelFunc04C4_0361:
	endconv;
	message("「旅途愉快。記住，信任你的兄弟。」*");
	say();
labelFunc04C4_0366:
	if (!(event == 0x0000)) goto labelFunc04C4_0374;
	Func092E(0xFF3C);
labelFunc04C4_0374:
	return;
}


