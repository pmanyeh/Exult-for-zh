#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0483 object#(0x483) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0483_02B3;
	UI_show_npc_face(0xFF7D, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x017E] && (!gflags[0x017F]))) goto labelFunc0483_003A;
	UI_add_answer("吊饰盒");
labelFunc0483_003A:
	if (!gflags[0x0180]) goto labelFunc0483_0047;
	UI_add_answer("陌生人");
labelFunc0483_0047:
	if (!(!gflags[0x018C])) goto labelFunc0483_0059;
	message("你看到一位看起来很谦虚的年长妇女。她对你露出友好的微笑。");
	say();
	gflags[0x018C] = true;
	goto labelFunc0483_0063;
labelFunc0483_0059:
	message("Magenta 笑了笑。「日安，");
	message(var0000);
	message("。我能帮你什么忙吗？」");
	say();
labelFunc0483_0063:
	converse attend labelFunc0483_02AE;
	case "姓名" attend labelFunc0483_0080:
	message("「我是 Magenta ，来自 New Magincia 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("New Magincia");
labelFunc0483_0080:
	case "职业" attend labelFunc0483_0099:
	message("「我是 New Magincia 的镇长，也是 Boris 的妻子。」");
	say();
	UI_add_answer(["镇长", "Boris"]);
labelFunc0483_0099:
	case "镇长" attend labelFunc0483_00B3:
	message("「这份工作其实不太需要实际的行政管理。我主要是确保大家都能和睦相处。除此之外，这个镇几乎是自行运作的。」");
	say();
	UI_remove_answer("镇长");
	UI_add_answer("管理");
labelFunc0483_00B3:
	case "管理" attend labelFunc0483_00C6:
	message("「甚至这里的税收也比不列颠尼亚的任何其他地方都轻。不列颠尼亚税务委员会甚至有时会连续好几年忘记来这里收税。」");
	say();
	UI_remove_answer("管理");
labelFunc0483_00C6:
	case "Boris" attend labelFunc0483_00D9:
	message("「Boris 是当地的客栈老板，说句实话，他有点像个无赖。但他很会倒酒，也很会说故事。虽然我得盯着他，但我爱他。」");
	say();
	UI_remove_answer("Boris");
labelFunc0483_00D9:
	case "New Magincia" attend labelFunc0483_00F3:
	message("「喔，就像这里流传的笑话说的， New Magincia 永远没有『新』鲜事。但我们就喜欢这样。我们这里很少有访客。」");
	say();
	UI_add_answer("访客");
	UI_remove_answer("New Magincia");
labelFunc0483_00F3:
	case "访客", "陌生人" attend labelFunc0483_0116:
	message("「我听说还有三个新来的人在附近徘徊。我总是尽量把人往好处想，但你还是要小心他们。」");
	say();
	UI_add_answer("新来的人");
	UI_remove_answer(["陌生人", "访客"]);
labelFunc0483_0116:
	case "新来的人" attend labelFunc0483_0129:
	message("「镇上的其他人现在肯定已经见过他们了。也许他们会有更多消息。」");
	say();
	UI_remove_answer("新来的人");
labelFunc0483_0129:
	case "吊饰盒" attend labelFunc0483_0143:
	message("你看到 Henry 描述的吊饰盒挂在 Magenta 的脖子上。「它不美吗？这是我在我丈夫吧台后面的秘密藏匿处找到的。」");
	say();
	UI_add_answer("发现");
	UI_remove_answer("吊饰盒");
labelFunc0483_0143:
	case "发现" attend labelFunc0483_0163:
	message("「我从没想过 Boris 会这么浪漫。这个吊饰盒一定是给我的惊喜！」");
	say();
	UI_add_answer(["浪漫", "惊喜"]);
	UI_remove_answer("发现");
labelFunc0483_0163:
	case "浪漫" attend labelFunc0483_018B:
	if (!(!gflags[0x017F])) goto labelFunc0483_0179;
	message("「在被我抓到那么多次寻欢作乐和狂欢之后，他一定是在想办法重新讨我欢心。」");
	say();
	goto labelFunc0483_017D;
labelFunc0483_0179:
	message("「嗯，我『确实』认为他是想把它送给我，好弥补他被我抓到那么多次寻欢作乐和狂欢的事。」");
	say();
labelFunc0483_017D:
	UI_add_answer("狂欢");
	UI_remove_answer("浪漫");
labelFunc0483_018B:
	case "狂欢" attend labelFunc0483_021C:
	message("「说真的，你觉得 Boris 会不会是想把这个吊饰盒送给别人？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0483_0211;
	message("Magenta 震惊地睁大眼睛。「谁？」");
	say();
	UI_push_answers();
	var0002 = Func090B(["Constance", "不知道是谁"]);
	if (!(var0002 == "Constance")) goto labelFunc0483_01F8;
	message("「我绝不可能戴着原本要送给别的女人的珠宝。作为镇长，圣者，我将把它还给她（或者更确切地说，还给本来打算送她的人）的任务交给你。至于 Boris ……哼，我晚点再来收拾他！」");
	say();
	if (!(!gflags[0x017F])) goto labelFunc0483_01F8;
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, false);
	if (!var0003) goto labelFunc0483_01F4;
	message("「这是吊饰盒。拿去吧。」");
	say();
	gflags[0x017F] = true;
	goto labelFunc0483_01F8;
labelFunc0483_01F4:
	message("「我不能把吊饰盒交给你。你带太多东西了。放下一点东西后再来吧。」");
	say();
labelFunc0483_01F8:
	if (!(var0002 == "不知道是谁")) goto labelFunc0483_020A;
	message("Magenta 看起来很困惑。「我想知道那是谁？」");
	say();
	message("然后 Magenta 眼神中闪过一丝凶光。「那么，我就去把他打到招认为止！」");
	say();
labelFunc0483_020A:
	UI_pop_answers();
	goto labelFunc0483_0215;
labelFunc0483_0211:
	message("Magenta 松了一口气。「我很高兴你这么说。现在我收下它就不会有罪恶感了。」");
	say();
labelFunc0483_0215:
	UI_remove_answer("狂欢");
labelFunc0483_021C:
	case "惊喜" attend labelFunc0483_02A0:
	if (!(!gflags[0x017F])) goto labelFunc0483_0295;
	message("「Boris 愿意买这么昂贵的礼物给我，我受宠若惊。但他怎么买得起？」");
	say();
	UI_push_answers();
	var0004 = Func090B(["偷来的", "不知道怎么买的"]);
	if (!(var0004 == "偷来的")) goto labelFunc0483_0280;
	message("虽然 Magenta 努力保持尊严，但她无法掩饰自己的失望。「作为镇长，我将寻找这个吊饰盒的主人并物归原主的任务交给你。」");
	say();
	if (!(!gflags[0x017F])) goto labelFunc0483_0280;
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, false);
	if (!var0003) goto labelFunc0483_027C;
	message("「拿去吧。」");
	say();
	gflags[0x017F] = true;
	goto labelFunc0483_0280;
labelFunc0483_027C:
	message("「你连这么小的东西都带不下了！如果你能放下一些东西，我就把吊饰盒交给你。」");
	say();
labelFunc0483_0280:
	if (!(var0004 == "不知道怎么买的")) goto labelFunc0483_028E;
	message("Magenta 看起来很困惑。然后她笑了。「喔，好吧。它真的很漂亮，不是吗？如果他认为这样能改善我们的夫妻关系，那他也没完全错！」");
	say();
labelFunc0483_028E:
	UI_pop_answers();
	goto labelFunc0483_0299;
labelFunc0483_0295:
	message("「嗯，我起初还以为 Boris 买了这个吊饰盒要给我个惊喜！等我抓到那个没用的……」Magenta 气得满脸通红。");
	say();
labelFunc0483_0299:
	UI_remove_answer("惊喜");
labelFunc0483_02A0:
	case "告辞" attend labelFunc0483_02AB:
	goto labelFunc0483_02AE;
labelFunc0483_02AB:
	goto labelFunc0483_0063;
labelFunc0483_02AE:
	endconv;
	message("「我期待下次见到你。」*");
	say();
labelFunc0483_02B3:
	if (!(event == 0x0000)) goto labelFunc0483_02C1;
	Func092E(0xFF7D);
labelFunc0483_02C1:
	return;
}


