#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08CE 0x8CE ();
extern void Func092F 0x92F (var var0000);

void Func04B9 object#(0x4B9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04B9_02E3;
	UI_show_npc_face(0xFF47, 0x0000);
	var0000 = Func0908();
	var0001 = UI_part_of_day();
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0001 == 0x0007)) goto labelFunc04B9_0045;
	message("這隻石像鬼似乎忙著主持友誼會會議，現在沒空跟你說話。");
	say();
	Func08CE();
labelFunc04B9_0045:
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!gflags[0x01EF]) goto labelFunc04B9_0065;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc04B9_0065:
	if (!(!gflags[0x024A])) goto labelFunc04B9_0077;
	message("你看到一隻有翼石像鬼。注意到你之後，他轉過身說，「歡迎你，人類。需要協助嗎？」");
	say();
	gflags[0x024A] = true;
	goto labelFunc04B9_007B;
labelFunc04B9_0077:
	message("「請問我能如何協助你，人類。」");
	say();
labelFunc04B9_007B:
	converse attend labelFunc04B9_02D4;
	case "姓名" attend labelFunc04B9_0098:
	message("「是那個叫做 Quan 的人。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Quan");
labelFunc04B9_0098:
	case "Quan" attend labelFunc04B9_00AB:
	message("「在石像鬼語中沒有意義。這是個特別的名字，專屬於我，」他笑著。");
	say();
	UI_remove_answer("Quan");
labelFunc04B9_00AB:
	case "職業" attend labelFunc04B9_00CB:
	message("「領導 Terfin 的友誼會。」");
	say();
	UI_add_answer("Terfin");
	if (!gflags[0x01F5]) goto labelFunc04B9_00CB;
	UI_add_answer("聲音");
labelFunc04B9_00CB:
	case "聲音" attend labelFunc04B9_00DE:
	message("「是存在於所有生物內心的指引之聲。隨著友誼會聯繫的加強，會變得越來越清晰且頻繁。」");
	say();
	UI_remove_answer("聲音");
labelFunc04B9_00DE:
	case "Terfin" attend labelFunc04B9_00FE:
	message("「是不列顛尼亞唯一的石像鬼城市。這片土地上的石像鬼數量比你上次訪問不列顛尼亞時還要少，人類。」他搖了搖頭。");
	say();
	UI_add_answer(["更少", "石像鬼"]);
	UI_remove_answer("Terfin");
labelFunc04B9_00FE:
	case "更少" attend labelFunc04B9_0111:
	message("「是因為屈服於最近襲擊不列顛尼亞的疾病和飢荒。告訴你，石像鬼繁殖的頻率較低，我們沒有時間彌補人口的損失。~~然而，要獲得新希望，」他咧嘴一笑，「就得加入友誼會。」");
	say();
	UI_remove_answer("更少");
labelFunc04B9_0111:
	case "石像鬼" attend labelFunc04B9_0124:
	message("「建議你跟友誼會的店員 Runeb ，或者是 Quaeven 談談。他們的工作需要了解 Terfin 裡的其他人。」他歉意地笑了笑。~~ 「太忙了，無法認識 Terfin 的所有人。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc04B9_0124:
	case "友誼會" attend labelFunc04B9_0178:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04B9_0154;
	if (!gflags[0x0006]) goto labelFunc04B9_0146;
	message("「與其他分會聯合，在晚上 9 點舉行會議，人類。歡迎參加我們的會議。」");
	say();
	goto labelFunc04B9_0151;
labelFunc04B9_0146:
	message("「是對石像鬼和人類都有益的恩賜。擁有一種幫助所有種族生物達到最高潛能的理念。」");
	say();
	UI_add_answer("理念");
labelFunc04B9_0151:
	goto labelFunc04B9_015F;
labelFunc04B9_0154:
	message("「是對石像鬼和人類都有益的恩賜。擁有一種幫助所有種族生物達到最高潛能的理念。」");
	say();
	UI_add_answer("理念");
labelFunc04B9_015F:
	if (!(gflags[0x023C] && (!gflags[0x0242]))) goto labelFunc04B9_0171;
	UI_add_answer("祭壇衝突");
labelFunc04B9_0171:
	UI_remove_answer("友誼會");
labelFunc04B9_0178:
	case "Elizabeth 和 Abraham" attend labelFunc04B9_019D:
	if (!(!gflags[0x0264])) goto labelFunc04B9_0192;
	message("「剛好錯過了來這裡收集資金的人類友誼會官員。他們已經前往 Serpent's Hold 附近的冥想靜修處。很遺憾。」");
	say();
	gflags[0x0243] = true;
	goto labelFunc04B9_0196;
labelFunc04B9_0192:
	message("「已經好幾天沒見到人類友誼會官員了。」");
	say();
labelFunc04B9_0196:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc04B9_019D:
	case "理念" attend labelFunc04B9_01B0:
	message("他的臉上充滿了幾乎是高興的表情。~~ 「非常類似於單一性祭壇。有三個被稱為內在力量的三位一體 (Triad of Inner Strength) 的原則。和諧地應用這三個原則會變得更有創造力且更快樂。~~ 看見其中的相似處了嗎？控制、熱情與勤勉交織成一體——單一性 (singularity) 。這三位一體 (Triad) ——努力團結、信任你的兄弟、善有善報——和諧地應用在一起！」");
	say();
	UI_remove_answer("理念");
labelFunc04B9_01B0:
	case "祭壇衝突" attend labelFunc04B9_01D0:
	message("「不明白，」他困惑地說。");
	say();
	if (!gflags[0x0253]) goto labelFunc04B9_01C9;
	UI_add_answer("破壞祭壇");
labelFunc04B9_01C9:
	UI_remove_answer("祭壇衝突");
labelFunc04B9_01D0:
	case "破壞祭壇" attend labelFunc04B9_020A:
	message("「對此一無所知！不相信！這不可能。~~ 要知道所有成員對他們的生活都很滿意，而且絕不可能做出這種事，即使祭壇已經過時了。~~ 告訴你親自去和成員們談談，親眼見證並相信。」");
	say();
	UI_add_answer(["過時", "成員"]);
	UI_remove_answer("破壞祭壇");
	if (!gflags[0x023F]) goto labelFunc04B9_01FD;
	UI_add_answer("Sarpling 的紙條");
labelFunc04B9_01FD:
	if (!gflags[0x0240]) goto labelFunc04B9_020A;
	UI_add_answer("Runeb 暗殺");
labelFunc04B9_020A:
	case "過時" attend labelFunc04B9_021D:
	message("「需要三位一體 (Triad) 來正確應用於每個石像鬼——或人類！」");
	say();
	UI_remove_answer("過時");
labelFunc04B9_021D:
	case "成員" attend labelFunc04B9_0240:
	message("「去和 Runeb 、 Sarpling 和 Quaeven 談談。」");
	say();
	UI_add_answer(["Runeb", "Sarpling", "Quaeven"]);
	UI_remove_answer("成員");
labelFunc04B9_0240:
	case "Runeb" attend labelFunc04B9_026E:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0004) goto labelFunc04B9_0263;
	message("「曾經是這裡友誼會的店員。」");
	say();
	goto labelFunc04B9_0267;
labelFunc04B9_0263:
	message("「是這裡友誼會的店員。」");
	say();
labelFunc04B9_0267:
	UI_remove_answer("Runeb");
labelFunc04B9_026E:
	case "Sarpling" attend labelFunc04B9_0285:
	message("「在他的店裡販賣魔法和相關物品。」");
	say();
	UI_remove_answer("Sarpling");
	gflags[0x0241] = true;
labelFunc04B9_0285:
	case "Quaeven" attend labelFunc04B9_0298:
	message("「負責管理學習中心。」");
	say();
	UI_remove_answer("Quaeven");
labelFunc04B9_0298:
	case "Sarpling 的紙條" attend labelFunc04B9_02AF:
	message("「Runeb 不可能要為此負責。」他親切地微笑著。「這一定是個惡作劇。」");
	say();
	UI_remove_answer("Sarpling 的紙條");
	gflags[0x0242] = true;
labelFunc04B9_02AF:
	case "Runeb 暗殺" attend labelFunc04B9_02C6:
	message("「對 Runeb 來說這陰謀太可惡了。」他皺起眉頭。「這一定是某種惡作劇。」");
	say();
	UI_remove_answer("Runeb 暗殺");
	gflags[0x0242] = true;
labelFunc04B9_02C6:
	case "告辭" attend labelFunc04B9_02D1:
	goto labelFunc04B9_02D4;
labelFunc04B9_02D1:
	goto labelFunc04B9_007B;
labelFunc04B9_02D4:
	endconv;
	message("「希望你找到團結。」*");
	say();
	if (!var0002) goto labelFunc04B9_02E3;
	message("在與 Quan 交談時，立方體沒有震動過一次。你意識到他對上層那些危險的力量完全不知情。*");
	say();
labelFunc04B9_02E3:
	if (!(event == 0x0000)) goto labelFunc04B9_02F1;
	Func092F(0xFF47);
labelFunc04B9_02F1:
	return;
}


