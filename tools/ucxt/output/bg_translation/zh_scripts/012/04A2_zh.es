#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func0879 0x879 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func04A2 object#(0x4A2) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04A2_01EC;
	UI_show_npc_face(0xFF5E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0204])) goto labelFunc04A2_003C;
	message("「這個男人用微笑的眼睛看著你。」");
	say();
	goto labelFunc04A2_0040;
labelFunc04A2_003C:
	message("Elad 朝你鞠了個躬。~「很高興再次見到你。」");
	say();
labelFunc04A2_0040:
	converse attend labelFunc04A2_01DB;
	case "姓名" attend labelFunc04A2_005C:
	message("「我叫 Elad，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A2_005C:
	case "職業" attend labelFunc04A2_0078:
	message("「我是這個社區居民的治療師。」");
	say();
	UI_add_answer(["居民", "治療", "社區"]);
labelFunc04A2_0078:
	case "社區" attend labelFunc04A2_00A4:
	message("「Moonglow 是我的家。我一輩子都住這個城鎮。但我對這裡的生活感到厭倦。我想，是時候離開了。要是我在這裡沒有這麼深的羈絆就好了。」~他悲傷地嘆了口氣。");
	say();
	if (!(!gflags[0x01ED])) goto labelFunc04A2_0096;
	message("「有一位從 Yew 來拜訪的旅行者。他在不列顛尼亞見過許多令人興奮的事物。我很喜歡聽他講述許多冒險的故事。」");
	say();
	UI_add_answer("旅行者");
labelFunc04A2_0096:
	UI_add_answer("羈絆");
	UI_remove_answer("社區");
labelFunc04A2_00A4:
	case "旅行者" attend labelFunc04A2_00B7:
	message("「他的名字是 Addom。他在鎮上的時候，我讓他在我的一張床上休息。」");
	say();
	UI_remove_answer("旅行者");
labelFunc04A2_00B7:
	case "治療" attend labelFunc04A2_00D1:
	message("「是的，我向需要的人出售我的治療服務。」");
	say();
	UI_add_answer("服務");
	UI_remove_answer("治療");
labelFunc04A2_00D1:
	case "服務" attend labelFunc04A2_011C:
	var0002 = UI_part_of_day();
	if (!((var0002 == 0x0002) || ((var0002 == 0x0003) || ((var0002 == 0x0004) || (var0002 == 0x0006))))) goto labelFunc04A2_0111;
	Func0879(0x0019, 0x000A, 0x01A9);
	goto labelFunc04A2_0115;
labelFunc04A2_0111:
	message("「也許等我在店裡工作的時候，你可以過來治療。」");
	say();
labelFunc04A2_0115:
	UI_remove_answer("服務");
labelFunc04A2_011C:
	case "羈絆" attend labelFunc04A2_012F:
	message("「我在 Moonglow 的病人們。如果不是我，誰來幫助他們呢？」");
	say();
	UI_remove_answer("羈絆");
labelFunc04A2_012F:
	case "居民" attend labelFunc04A2_015B:
	message("「Moonglow 有很多人。我父親曾經告訴我，在他那個年代，這個城鎮要小得多。事實上，他說 Moonglow 以前和 Lycaeum 是分開的！~~「不過，我扯遠了。你問起了這裡的人。我認識這裡的大多數居民。你想了解 Lycaeum、天文台、友誼會、農夫們、訓練師，還是酒館？」");
	say();
	UI_add_answer(["Lycaeum", "天文台", "友誼會", "農夫們", "訓練師", "酒館"]);
	UI_remove_answer("居民");
labelFunc04A2_015B:
	case "Lycaeum" attend labelFunc04A2_016E:
	message("「Lycaeum 由一位名叫 Nelson 的好心人管理。他的顧問是 Zelda。不要在她面前違反任何規定，否則你會受到嚴厲的斥責！~「Jillian 也在那裡學習。她可以教你很多東西。不用擔心 Mariah。如果你不去惹她，她是無害的。」");
	say();
	UI_remove_answer("Lycaeum");
labelFunc04A2_016E:
	case "天文台" attend labelFunc04A2_0181:
	message("「那裡的負責人是 Brion。他是 Lycaeum 負責人的雙胞胎兄弟。我很喜歡他，儘管他和他的兄弟都有點古怪。」");
	say();
	UI_remove_answer("天文台");
labelFunc04A2_0181:
	case "友誼會" attend labelFunc04A2_0194:
	message("「我最不了解這些人。這個分會大約在五年前在一個名叫 Rankin 的男人的領導下開設。幾個月前，一名書記加入了他的行列。她的名字叫 Balayna。」");
	say();
	UI_remove_answer("友誼會");
labelFunc04A2_0194:
	case "農夫們" attend labelFunc04A2_01A7:
	message("「Cubolt 擁有那個農場。他和他的弟弟 Tolemac 以及他們的朋友 Morz 一起管理它。我不是很確定，但我相信 Tolemac 最近加入了友誼會。」");
	say();
	UI_remove_answer("農夫們");
labelFunc04A2_01A7:
	case "酒館" attend labelFunc04A2_01BA:
	message("「Phearcy 在那裡當酒保。他是另一個你可以去打聽鎮民消息的好人。不過，他喜歡八卦，而且可能有點死腦筋。」");
	say();
	UI_remove_answer("酒館");
labelFunc04A2_01BA:
	case "訓練師" attend labelFunc04A2_01CD:
	message("「訓練師叫 Chad。我相信他專精於敏捷、技巧性的戰鬥，使用刀劍之類的武器。如果你想提高你的技能，去見見他。」");
	say();
	UI_remove_answer("訓練師");
labelFunc04A2_01CD:
	case "告辭" attend labelFunc04A2_01D8:
	goto labelFunc04A2_01DB;
labelFunc04A2_01D8:
	goto labelFunc04A2_0040;
labelFunc04A2_01DB:
	endconv;
	message("「這麼快就要走了，");
	message(var0001);
	message("？很好，祝你的旅程充滿繁榮。」~他嘆了口氣。突然，他的臉色亮了起來。~「等等！也許我可以加入你？」~他迅速站起來，面帶微笑。然後，同樣突然地，他的笑容消失了。~「不。我不能。我有太多事情要做，有太多人要照顧。也許以後吧？」~他勉強擠出一絲笑容。~「希望下次見面時，");
	message(var0001);
	message("，我能有機會加入你。旅途愉快，我的朋友。」*");
	say();
labelFunc04A2_01EC:
	if (!(event == 0x0000)) goto labelFunc04A2_01FA;
	Func092E(0xFF5E);
labelFunc04A2_01FA:
	return;
}


