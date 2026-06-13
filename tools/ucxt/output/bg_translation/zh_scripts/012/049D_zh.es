#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049D object#(0x49D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc049D_01F0;
	UI_show_npc_face(0xFF63, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!gflags[0x01D5]) goto labelFunc049D_003D;
	message("「走開！我不想再聽你的謊言了！」*");
	say();
	abort;
labelFunc049D_003D:
	if (!(var0001 == 0x0007)) goto labelFunc049D_006B;
	var0002 = Func08FC(0xFF63, 0xFF06);
	if (!var0002) goto labelFunc049D_0060;
	message("「我正試著專心聽！」他瞪著你說。");
	say();
	goto labelFunc049D_006A;
labelFunc049D_0060:
	message("「抱歉，");
	message(var0000);
	message("，我現在不能說話。我必須趕去參加友誼會的會議！」");
	say();
labelFunc049D_006A:
	abort;
labelFunc049D_006B:
	if (!(!gflags[0x01FE])) goto labelFunc049D_007D;
	message("你看到一位看起來很友善的農夫。");
	say();
	gflags[0x01FE] = true;
	goto labelFunc049D_0087;
labelFunc049D_007D:
	message("「你好，");
	message(var0000);
	message("。」");
	say();
labelFunc049D_0087:
	if (!(gflags[0x01D6] && gflags[0x01FE])) goto labelFunc049D_0098;
	UI_add_answer("回心轉意");
labelFunc049D_0098:
	converse attend labelFunc049D_01E5;
	case "姓名" attend labelFunc049D_00C1:
	message("「我叫 Tolemac，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x01D6]) goto labelFunc049D_00C1;
	UI_add_answer("回心轉意");
labelFunc049D_00C1:
	case "職業" attend labelFunc049D_00DA:
	message("「我在 Moonglow 這裡幫我哥哥照顧我們的農場。」");
	say();
	UI_add_answer(["哥哥", "Moonglow"]);
labelFunc049D_00DA:
	case "哥哥" attend labelFunc049D_00ED:
	message("「我哥哥是 Cubolt。」他皺了一會兒眉。「他有時會有點專橫，試著要『照顧』我。不過，」他聳聳肩，「他或許是出於好意。我知道我不時會給他惹點麻煩，」他咧嘴笑著說，「但他活該。」");
	say();
	UI_remove_answer("哥哥");
labelFunc049D_00ED:
	case "Moonglow" attend labelFunc049D_010D:
	message("「是的，");
	message(var0000);
	message("。這就是你所在的城鎮的名字。你對鎮民有什麼問題嗎？」");
	say();
	UI_add_answer("鎮民");
	UI_remove_answer("Moonglow");
labelFunc049D_010D:
	case "鎮民" attend labelFunc049D_0139:
	message("「我在這裡只認識幾個人，");
	message(var0000);
	message("。我哥哥 Cubolt 和我一起經營農場。Morz 也會幫我們——我們認識他很多年了。現在我加入了友誼會，我又認識了幾個人。Rankin 是 Moonglow 這裡的分會負責人，Balayna 是他的助手。如果你想知道其他人的事，你或許可以問問酒保。他的名字是 Phearcy。」");
	say();
	UI_add_answer(["Morz", "Balayna", "Rankin", "友誼會"]);
	UI_remove_answer("鎮民");
labelFunc049D_0139:
	case "Rankin" attend labelFunc049D_014C:
	message("「Rankin 非常聰明。就是他說服我加入友誼會的。我非常尊敬他。」");
	say();
	UI_remove_answer("Rankin");
labelFunc049D_014C:
	case "Balayna" attend labelFunc049D_015F:
	message("「她是分會的書記。大多數時候，她都很友善。不過，有時她似乎有點冷淡。」");
	say();
	UI_remove_answer("Balayna");
labelFunc049D_015F:
	case "Morz" attend labelFunc049D_0179:
	message("「Morz 和我一起長大。不過，他對自己的口吃非常敏感，所以我不會提起這件事。」");
	say();
	UI_add_answer("口吃");
	UI_remove_answer("Morz");
labelFunc049D_0179:
	case "口吃" attend labelFunc049D_018C:
	message("「很難讓他談論這件事。我認為這是他在小時候發生的一場意外造成的。我幾乎不記得那起事件了。我哥哥或許會記得更多。」");
	say();
	UI_remove_answer("口吃");
labelFunc049D_018C:
	case "友誼會" attend labelFunc049D_01AB:
	message("「問 Rankin 或 Balayna 是最合適的，");
	message(var0000);
	message("，但我可以告訴你我們的主要信條。~~「我們堅信新現實主義，這是一種樂觀的人生觀，可以透過內在力量的三位一體 (Triad of Inner Strength) 來達到。~~「我希望很快我就能聽到伴隨著達到個人更高潛力而來的聲音。~~「還有，");
	message(var0000);
	message("，友誼會贊助了許多盛宴和節慶。我強烈建議你向 Rankin 詢問關於加入的事。」");
	say();
	UI_remove_answer("友誼會");
labelFunc049D_01AB:
	case "回心轉意" attend labelFunc049D_01D7:
	message("「回心轉意？我為什麼要那麼做？是我哥哥要求的嗎？他總是不願讓我自己做決定。不，");
	message(var0000);
	message("。我不會放棄我的信仰。友誼會為我的生活付出了太多。」");
	say();
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc049D_01CE;
	message("「虧你還是個同伴。你的話語裡毫無團結可言！」");
	say();
labelFunc049D_01CE:
	message("*");
	say();
	gflags[0x01D5] = true;
	abort;
labelFunc049D_01D7:
	case "告辭" attend labelFunc049D_01E2:
	goto labelFunc049D_01E5;
labelFunc049D_01E2:
	goto labelFunc049D_0098;
labelFunc049D_01E5:
	endconv;
	message("「下次見，");
	message(var0000);
	message("。」*");
	say();
labelFunc049D_01F0:
	if (!(event == 0x0000)) goto labelFunc049D_01FE;
	Func092E(0xFF63);
labelFunc049D_01FE:
	return;
}


