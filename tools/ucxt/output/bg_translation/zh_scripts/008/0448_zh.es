#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0448 object#(0x448) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0448_01AC;
	var0000 = Func0908();
	var0001 = "Avatar";
	UI_show_npc_face(0xFFB8, 0x0000);
	if (!gflags[0x0078]) goto labelFunc0448_002A;
	var0002 = var0000;
labelFunc0448_002A:
	if (!gflags[0x0079]) goto labelFunc0448_0036;
	var0002 = var0001;
labelFunc0448_0036:
	if (!gflags[0x0077]) goto labelFunc0448_0041;
	message("Nell 不想和你說話。*");
	say();
	abort;
labelFunc0448_0041:
	if (!(!gflags[0x00C9])) goto labelFunc0448_0097;
	message("你看見一個驚奇地看著你的女僕。「你看起來很面熟。你是誰？」");
	say();
	var0003 = Func090B([var0000, var0001]);
	if (!(var0003 == var0000)) goto labelFunc0448_0070;
	message("「喔。你好。我是 Nell 。」");
	say();
	gflags[0x0078] = true;
	goto labelFunc0448_0078;
labelFunc0448_0070:
	message("「我就知道！我以前看過你的畫像。而且我聽說你會來拜訪！我是 Nell 。」");
	say();
	gflags[0x0079] = true;
labelFunc0448_0078:
	if (!gflags[0x0078]) goto labelFunc0448_0084;
	var0002 = var0000;
labelFunc0448_0084:
	if (!gflags[0x0079]) goto labelFunc0448_0090;
	var0002 = var0001;
labelFunc0448_0090:
	gflags[0x00C9] = true;
	goto labelFunc0448_00A1;
labelFunc0448_0097:
	message("「你好，");
	message(var0002);
	message("。」");
	say();
labelFunc0448_00A1:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0448_00B1:
	converse attend labelFunc0448_01A1;
	case "姓名" attend labelFunc0448_00C7:
	message("「我告訴過你我的名字是 Nell 了。」");
	say();
	UI_remove_answer("姓名");
labelFunc0448_00C7:
	case "職業" attend labelFunc0448_00E0:
	message("「我是個女僕。我負責保持城堡的整潔。說真的，就只個女僕罷了。」");
	say();
	UI_add_answer(["城堡", "僕人"]);
labelFunc0448_00E0:
	case "城堡" attend labelFunc0448_00F3:
	message("「它非常大。讓我非常忙碌。你不會相信它有多容易積灰塵。」");
	say();
	UI_remove_answer("城堡");
labelFunc0448_00F3:
	case "僕人" attend labelFunc0448_0119:
	message("「我想我這輩子都會是個僕人了。我的父母是僕人。我的哥哥是僕人。我的未婚夫是僕人。我的孩子可能也會是僕人。」");
	say();
	UI_add_answer(["父母", "哥哥", "未婚夫", "孩子"]);
	UI_remove_answer("僕人");
labelFunc0448_0119:
	case "父母" attend labelFunc0448_012C:
	message("「他們也在城堡裡工作。 Boots 是我母親。 Bennie 是我父親。他們在這裡已經很多年了。我在這座城堡出生，並在育嬰室裡玩耍長大。」");
	say();
	UI_remove_answer("父母");
labelFunc0448_012C:
	case "哥哥" attend labelFunc0448_0143:
	message("「你可能會碰到他。他也是城堡裡的僕人。 Charles 。除了沒有我聰明之外，他還算不錯。就一個笨蛋而言，已經算不錯了！」她笑了。");
	say();
	gflags[0x0076] = true;
	UI_remove_answer("哥哥");
labelFunc0448_0143:
	case "未婚夫" attend labelFunc0448_015A:
	message("「那會是 Carrocio ，那個經營潘趣與茱蒂秀（Punch and Judy Show）的親愛男人。他寫了最可愛的情詩。只要 Carrocio 買得起婚戒，我們就會結婚。」");
	say();
	gflags[0x0075] = true;
	UI_remove_answer("未婚夫");
labelFunc0448_015A:
	case "孩子" attend labelFunc0448_0193:
	message("Nell 看起來很擔心。「噓！我不想讓任何人知道。現在還看不出來，對吧？ Carrocio 和我會盡快結婚。他『是』孩子的父親。我想。不過，也可能是……不，應該不是他。還是說可能是……？嗯。那就有趣了！等等！我在說什麼？父親絕對是 Carrocio ！請不要告訴任何人。那會很尷尬。好嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0448_017F;
	message("「我知道我可以信任你，");
	message(var0002);
	message("。」");
	say();
	goto labelFunc0448_0188;
labelFunc0448_017F:
	message("「但你會毀了我的名聲！拜託——一個女僕需要她所能得到的所有自尊，而不需要那種負擔！」 Nell 轉身背對你。*");
	say();
	gflags[0x0077] = true;
	abort;
labelFunc0448_0188:
	UI_remove_answer("孩子");
	gflags[0x007A] = true;
labelFunc0448_0193:
	case "告辭" attend labelFunc0448_019E:
	goto labelFunc0448_01A1;
labelFunc0448_019E:
	goto labelFunc0448_00B1;
labelFunc0448_01A1:
	endconv;
	message("「再見，");
	message(var0002);
	message("。」*");
	say();
labelFunc0448_01AC:
	if (!(event == 0x0000)) goto labelFunc0448_01BA;
	Func092E(0xFFB8);
labelFunc0448_01BA:
	return;
}


