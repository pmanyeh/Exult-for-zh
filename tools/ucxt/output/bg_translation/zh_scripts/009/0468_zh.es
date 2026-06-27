#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0856 0x856 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0468 object#(0x468) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0468_01AD;
	UI_show_npc_face(0xFF98, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0142])) goto labelFunc0468_003A;
	message("你看到一個男人倚著一把長弓。");
	say();
	gflags[0x0142] = true;
	goto labelFunc0468_0044;
labelFunc0468_003A:
	message("Bradman 向你打招呼。「嗨，");
	message(var0000);
	message("。」");
	say();
labelFunc0468_0044:
	converse attend labelFunc0468_01A2;
	case "姓名" attend labelFunc0468_005A:
	message("「我是 Bradman 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0468_005A:
	case "職業" attend labelFunc0468_0083:
	message("「哎呀，我的工作就是訓練許多來 Yew 的人變得更加敏捷。」");
	say();
	UI_add_answer(["Yew", "訓練", "許多"]);
	if (!gflags[0x014D]) goto labelFunc0468_0083;
	UI_add_answer("Penni");
labelFunc0468_0083:
	case "許多" attend labelFunc0468_00A3:
	message("「森林吸引了許多想遠離 Minoc 和不列顛城這樣的大城鎮的人。所以他們來到 Yew 。~~而且，這片森林的某些特質讓大多數人想要探索。」他拍了拍他的弓。~~「這就是它派上用場的時候了。弓是森林裡的生存工具。而我，」他用大拇指指著自己的胸口，「負責教導使用弓的技巧。」");
	say();
	UI_remove_answer("許多");
	UI_add_answer(["探索", "弓"]);
labelFunc0468_00A3:
	case "探索" attend labelFunc0468_00B6:
	message("「森林裡有許多令人興奮的事物可以看。我每天都會看到有趣的東西：一種新鳥、一隻美麗的蝴蝶，或者最棒的——一隻鹿。」");
	say();
	UI_remove_answer("探索");
labelFunc0468_00B6:
	case "弓" attend labelFunc0468_00C9:
	message("「這是我首選的武器。它需要敏銳的眼睛和穩定的手臂才能準確射擊。我認為它比劍或長矛等武器更需要技巧。」");
	say();
	UI_remove_answer("弓");
labelFunc0468_00C9:
	case "Yew" attend labelFunc0468_0146:
	message("「我愛這片森林。它非常美麗。而且，」他舉起弓，「我搬到這裡來是為了靠近兩位偉大的弓箭手， Iolo 和 Tseramed 。」*");
	say();
	var0001 = Func08F7(0xFFFF);
	var0002 = Func08F7(0xFFF6);
	if (!var0001) goto labelFunc0468_010C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 臉紅了。「這是我的榮幸，我的朋友。我都不知道在這片土地上有我的崇拜者。」他向 Bradman 鞠躬， Bradman 也鞠躬回禮。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF98, 0x0000);
labelFunc0468_010C:
	if (!var0002) goto labelFunc0468_0138;
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「謝謝你的讚美，好先生。或許我們未來可以找個時間切磋一下。」*");
	say();
	UI_remove_npc_face(0xFFF6);
	UI_show_npc_face(0xFF98, 0x0000);
	message("「這將是我莫大的榮幸，大人！」");
	say();
	goto labelFunc0468_013F;
labelFunc0468_0138:
	UI_add_answer("Tseramed");
labelFunc0468_013F:
	UI_remove_answer("Yew");
labelFunc0468_0146:
	case "Tseramed" attend labelFunc0468_0159:
	message("「他是一位居住在森林裡的偉大弓箭手。他搬到這裡來是為了遠離發展過快的城鎮。」");
	say();
	UI_remove_answer("Tseramed");
labelFunc0468_0159:
	case "訓練" attend labelFunc0468_0181:
	message("「如果你想訓練，我的收費是 30 個金幣。你還有興趣嗎？」");
	say();
	if (!Func090A()) goto labelFunc0468_0177;
	Func0856(0x0001, 0x001E);
	goto labelFunc0468_0181;
labelFunc0468_0177:
	message("「我了解，");
	message(var0000);
	message("。」");
	say();
labelFunc0468_0181:
	case "Penni" attend labelFunc0468_0194:
	message("「你見過 Penni 了？我希望你沒有跟她一起訓練，」他眨了眨眼。「她是一個珍貴的朋友，但她打獵的技術就像根雜草，而且笨拙得像頭牛。我恐怕她對戰鬥一無所知。」");
	say();
	UI_remove_answer("Penni");
labelFunc0468_0194:
	case "告辭" attend labelFunc0468_019F:
	goto labelFunc0468_01A2;
labelFunc0468_019F:
	goto labelFunc0468_0044;
labelFunc0468_01A2:
	endconv;
	message("「願樹木為你讓路，");
	message(var0000);
	message("。」*");
	say();
labelFunc0468_01AD:
	if (!(event == 0x0000)) goto labelFunc0468_01BB;
	Func092E(0xFF98);
labelFunc0468_01BB:
	return;
}


