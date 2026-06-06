#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);

void Func0474 object#(0x474) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0474_0209;
	UI_show_npc_face(0xFF8C, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x014E])) goto labelFunc0474_003A;
	message("一個將斧頭扛在肩上、身材高大、胸膛寬闊的男人笑著對你點頭。");
	say();
	gflags[0x014E] = true;
	goto labelFunc0474_0044;
labelFunc0474_003A:
	message("「你好， ");
	message(var0000);
	message("。日安，對吧？」");
	say();
labelFunc0474_0044:
	converse attend labelFunc0474_01FE;
	case "姓名" attend labelFunc0474_006D:
	message("「你可以叫我 Ben ， ");
	message(var0000);
	message("。我住在這裡，在 Yew 森林裡。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer(["Yew", "森林"]);
labelFunc0474_006D:
	case "職業" attend labelFunc0474_0092:
	message("「我是一個伐木工， ");
	message(var0000);
	message("。這是我一輩子都在做的事。事實上， ");
	message(var0000);
	message("，我父親也是做這個的。他父親之前也是。以此類推。我們做這行已經超過十代了。」");
	say();
	if (!gflags[0x012A]) goto labelFunc0474_0092;
	UI_add_answer("銀葉樹");
labelFunc0474_0092:
	case "Yew" attend labelFunc0474_00A5:
	message("「它曾經是個大城鎮，但現在，只剩下散布在森林各處的一些小屋了。」");
	say();
	UI_remove_answer("Yew");
labelFunc0474_00A5:
	case "森林" attend labelFunc0474_00CB:
	message("「恐怕， ");
	message(var0000);
	message("，我在這個區域不認識任何人。但，」他驕傲地補充說，「我確實認識在 Minoc 經營鋸木廠的人。我也知道有僧侶住在高等法院旁邊的修道院裡。」");
	say();
	UI_add_answer(["鋸木廠", "高等法院"]);
	UI_remove_answer("森林");
labelFunc0474_00CB:
	case "鋸木廠" attend labelFunc0474_00DE:
	message("「那裡的鋸木工叫 William 。」");
	say();
	UI_remove_answer("鋸木廠");
labelFunc0474_00DE:
	case "高等法院" attend labelFunc0474_00F1:
	message("「就在友誼會東北邊的建築裡。我知道他們把囚犯關在那裡。」");
	say();
	UI_remove_answer("高等法院");
labelFunc0474_00F1:
	case "銀葉樹" attend labelFunc0474_0158:
	message("「哎呀，是的， ");
	message(var0000);
	message("，我砍伐銀葉樹 (Silverleaf trees) 。它們只生長在一個區域，所以我需要它們的木材時，得走很長一段路。你為什麼問這個， ");
	message(var0000);
	message("？~~「喔，我懂了，」他咧嘴一笑，「你想要一些給自己用，對吧？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0474_0122;
	message("「抱歉， ");
	message(var0000);
	message("，我不知道怎麼料理它。或許你該去酒館試試。」");
	say();
	goto labelFunc0474_014A;
labelFunc0474_0122:
	message("「你有其他原因問這個嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0474_0140;
	UI_push_answers();
	UI_add_answer("森靈 (Emps)");
	goto labelFunc0474_014A;
labelFunc0474_0140:
	message("「好吧， ");
	message(var0000);
	message("，」他聳聳肩。");
	say();
labelFunc0474_014A:
	UI_add_answer("一個區域");
	UI_remove_answer("銀葉樹");
labelFunc0474_0158:
	case "一個區域" attend labelFunc0474_016B:
	message("「它們主要分布在大森林的東部，在很遠的另一邊。」");
	say();
	UI_remove_answer("一個區域");
labelFunc0474_016B:
	case "森靈 (Emps)" attend labelFunc0474_0189:
	message("「那見鬼的森靈是什麼東西？」~~在你快速向他解釋了銀葉樹的情況後，他驚呼道，「喔，那太可怕了。我不知道有任何人——呃——任何其他生物在使用銀葉樹。我能怎麼做呢？」");
	say();
	UI_pop_answers();
	UI_add_answer("簽署合約");
	UI_remove_answer("森靈 (Emps)");
labelFunc0474_0189:
	case "簽署合約" attend labelFunc0474_01F0:
	message("「哎呀，我當然會簽。我不會再砍銀葉樹了。」");
	say();
	var0003 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0003, 0xFE99);
	if (!var0003) goto labelFunc0474_01E1;
	message("他從你手中接過合約並簽了名。");
	say();
	var0004 = Func08F7(0xFFFA);
	if (!var0004) goto labelFunc0474_01CA;
	message("他轉向 Trellek 。「請代我向你的同胞道歉。我從來無意破壞你們的家園。當個朋友，好嗎？」~~ Trellek 微笑著點點頭。");
	say();
	goto labelFunc0474_01D4;
labelFunc0474_01CA:
	message("「請替我向森靈們道歉， ");
	message(var0000);
	message("。我從來無意破壞他們的家園。」");
	say();
labelFunc0474_01D4:
	gflags[0x012B] = true;
	Func0911(0x01F4);
	goto labelFunc0474_01E5;
labelFunc0474_01E1:
	message("「嗯，我很樂意簽，但看來你把它弄丟了。如果你再找到它，我會非常樂意幫助你和森靈們。」");
	say();
labelFunc0474_01E5:
	UI_pop_answers();
	UI_remove_answer("簽署合約");
labelFunc0474_01F0:
	case "告辭" attend labelFunc0474_01FB:
	goto labelFunc0474_01FE;
labelFunc0474_01FB:
	goto labelFunc0474_0044;
labelFunc0474_01FE:
	endconv;
	message("「再見， ");
	message(var0000);
	message("。旅途愉快，對吧。」*");
	say();
labelFunc0474_0209:
	if (!(event == 0x0000)) goto labelFunc0474_0212;
	abort;
labelFunc0474_0212:
	return;
}


