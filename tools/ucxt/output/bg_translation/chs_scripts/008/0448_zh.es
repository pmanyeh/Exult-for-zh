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
	message("Nell 不想和你说话。*");
	say();
	abort;
labelFunc0448_0041:
	if (!(!gflags[0x00C9])) goto labelFunc0448_0097;
	message("你看见一个惊奇地看着你的女仆。「你看起来很面熟。你是谁？」");
	say();
	var0003 = Func090B([var0000, var0001]);
	if (!(var0003 == var0000)) goto labelFunc0448_0070;
	message("「喔。你好。我是 Nell 。」");
	say();
	gflags[0x0078] = true;
	goto labelFunc0448_0078;
labelFunc0448_0070:
	message("「我就知道！我以前看过你的画像。而且我听说你会来拜访！我是 Nell 。」");
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
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0448_00B1:
	converse attend labelFunc0448_01A1;
	case "姓名" attend labelFunc0448_00C7:
	message("「我告诉过你我的名字是 Nell 了。」");
	say();
	UI_remove_answer("姓名");
labelFunc0448_00C7:
	case "职业" attend labelFunc0448_00E0:
	message("「我是个女仆。我负责保持城堡的整洁。说真的，就只个女仆罢了。」");
	say();
	UI_add_answer(["城堡", "仆人"]);
labelFunc0448_00E0:
	case "城堡" attend labelFunc0448_00F3:
	message("「它非常大。让我非常忙碌。你不会相信它有多容易积灰尘。」");
	say();
	UI_remove_answer("城堡");
labelFunc0448_00F3:
	case "仆人" attend labelFunc0448_0119:
	message("「我想我这辈子都会是个仆人了。我的父母是仆人。我的哥哥是仆人。我的未婚夫是仆人。我的孩子可能也会是仆人。」");
	say();
	UI_add_answer(["父母", "哥哥", "未婚夫", "孩子"]);
	UI_remove_answer("仆人");
labelFunc0448_0119:
	case "父母" attend labelFunc0448_012C:
	message("「他们也在城堡里工作。 Boots 是我母亲。 Bennie 是我父亲。他们在这里已经很多年了。我在这座城堡出生，并在育婴室里玩耍长大。」");
	say();
	UI_remove_answer("父母");
labelFunc0448_012C:
	case "哥哥" attend labelFunc0448_0143:
	message("「你可能会碰到他。他也是城堡里的仆人。 Charles 。除了没有我聪明之外，他还算不错。就一个笨蛋而言，已经算不错了！」她笑了。");
	say();
	gflags[0x0076] = true;
	UI_remove_answer("哥哥");
labelFunc0448_0143:
	case "未婚夫" attend labelFunc0448_015A:
	message("「那会是 Carrocio ，那个经营潘趣与茱蒂秀（Punch and Judy Show）的亲爱男人。他写了最可爱的情诗。只要 Carrocio 买得起婚戒，我们就会结婚。」");
	say();
	gflags[0x0075] = true;
	UI_remove_answer("未婚夫");
labelFunc0448_015A:
	case "孩子" attend labelFunc0448_0193:
	message("Nell 看起来很担心。「嘘！我不想让任何人知道。现在还看不出来，对吧？ Carrocio 和我会尽快结婚。他『是』孩子的父亲。我想。不过，也可能是……不，应该不是他。还是说可能是……？嗯。那就有趣了！等等！我在说什么？父亲绝对是 Carrocio ！请不要告诉任何人。那会很尴尬。好吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0448_017F;
	message("「我知道我可以信任你，");
	message(var0002);
	message("。」");
	say();
	goto labelFunc0448_0188;
labelFunc0448_017F:
	message("「但你会毁了我的名声！拜托——一个女仆需要她所能得到的所有自尊，而不需要那种负担！」 Nell 转身背对你。*");
	say();
	gflags[0x0077] = true;
	abort;
labelFunc0448_0188:
	UI_remove_answer("孩子");
	gflags[0x007A] = true;
labelFunc0448_0193:
	case "告辞" attend labelFunc0448_019E:
	goto labelFunc0448_01A1;
labelFunc0448_019E:
	goto labelFunc0448_00B1;
labelFunc0448_01A1:
	endconv;
	message("「再见，");
	message(var0002);
	message("。」*");
	say();
labelFunc0448_01AC:
	if (!(event == 0x0000)) goto labelFunc0448_01BA;
	Func092E(0xFFB8);
labelFunc0448_01BA:
	return;
}


