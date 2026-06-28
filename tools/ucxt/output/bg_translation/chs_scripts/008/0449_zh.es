#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0449 object#(0x449) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0449_01E2;
	UI_show_npc_face(0xFFB7, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0076]) goto labelFunc0449_002F;
	UI_add_answer("Nell");
labelFunc0449_002F:
	if (!gflags[0x007D]) goto labelFunc0449_003C;
	UI_add_answer("Jeanette");
labelFunc0449_003C:
	if (!gflags[0x007E]) goto labelFunc0449_0049;
	UI_add_answer("你运气真好");
labelFunc0449_0049:
	if (!(!gflags[0x00CA])) goto labelFunc0449_005B;
	message("你看见一个端着酒杯托盘的年轻农民。");
	say();
	gflags[0x00CA] = true;
	goto labelFunc0449_005F;
labelFunc0449_005B:
	message("「你好，圣者。」");
	say();
labelFunc0449_005F:
	converse attend labelFunc0449_01DD;
	case "姓名" attend labelFunc0449_0075:
	message("「我是 Charles 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0449_0075:
	case "职业" attend labelFunc0449_008E:
	message("「我是不列颠王城堡里的仆人。我是贴身男仆，当然还有做其他事。现在我正在端酒。」");
	say();
	UI_add_answer(["仆人", "酒"]);
labelFunc0449_008E:
	case "仆人" attend labelFunc0449_00AE:
	message("「我的家族已经被不列颠王雇用很多年了。我的父亲 Bennie 曾经担任我现在的职位。他是仆人总管。我想，总有一天我也会成为仆人总管。到那时，也许我的心上人就会爱我了。」");
	say();
	UI_remove_answer("仆人");
	UI_add_answer(["家族", "心上人"]);
labelFunc0449_00AE:
	case "家族" attend labelFunc0449_00C1:
	message("「你会遇到他们的。我母亲在厨房做饭。我那古板的妹妹是女仆。」");
	say();
	UI_remove_answer("家族");
labelFunc0449_00C1:
	case "心上人" attend labelFunc0449_00DF:
	message("Charles 叹了口气。他显然是被迷住了。「她是 Jeanette 。她在蓝野猪酒馆工作。但我恐怕『达不到她的标准』。我相信她看上别人了。我不知道该怎么办。」");
	say();
	gflags[0x007B] = true;
	UI_remove_answer("心上人");
	UI_add_answer("Jeanette");
labelFunc0449_00DF:
	case "Jeanette" attend labelFunc0449_00F2:
	message("「她不爱我，我知道。她宁愿嫁个有钱人。我没有机会。」");
	say();
	UI_remove_answer("Jeanette");
labelFunc0449_00F2:
	case "你运气真好" attend labelFunc0449_0103:
	message("你告诉 Charles Jeanette 说了什么。");
	say();
	message("「真的吗？你是说我有机会了？」 Charles 兴奋得差点把托盘弄掉。「喔，感谢你，圣者，给了我这个充满希望的消息！我得赶快去送她花或什么礼物！我必须表达我的爱！」他转身背对着你，显然已经乐得飘飘然了。*");
	say();
	abort;
labelFunc0449_0103:
	case "Nell" attend labelFunc0449_0127:
	message("「她和旋转木马经理订婚了。这很难让人习惯。我一直对我的小妹过度保护。我敢打赌她甚至从来没有被亲吻过！即使是 Carrocio 也没有！这主要是因为我一直照顾着她。要是谁敢碰她一下，我绝对会痛扁他！再说， Nell 一直都很贞洁古板。她绝不会允许男人亲她的。」");
	say();
	UI_remove_answer("Nell");
	gflags[0x007C] = true;
	if (!gflags[0x007A]) goto labelFunc0449_0127;
	UI_add_answer("孩子");
labelFunc0449_0127:
	case "孩子" attend labelFunc0449_015E:
	message("你回想起 Nell 告诉你关于她的『状况』。你要跟 Charles 提这件事吗？");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0449_0153;
	message("你将 Nell 私下透露的事告诉了 Charles 。");
	say();
	message("Charles 瞪大了眼睛，感到震惊。「什么，那个荡妇！我的妹妹！她根本就是个水性杨花的女人！等我抓到 Carrocio 就知道了！」");
	say();
	message("Charles 转过身去。他的眼中充满了杀气。*");
	say();
	gflags[0x0089] = true;
	abort;
	goto labelFunc0449_015E;
labelFunc0449_0153:
	message("你的良心感到安宁，因为你知道你抵挡住了搬弄是非的诱惑。");
	say();
	UI_remove_answer("孩子");
labelFunc0449_015E:
	case "酒" attend labelFunc0449_01CF:
	message("「你想来点酒吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0449_01C4;
	var0002 = UI_get_party_list();
	var0003 = 0x0000;
	enum();
labelFunc0449_0184:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0449_019C;
	var0003 = (var0003 + 0x0001);
	goto labelFunc0449_0184;
labelFunc0449_019C:
	var0007 = UI_add_party_items(var0003, 0x0274, 0xFE99, 0x0000, true);
	if (!var0007) goto labelFunc0449_01BD;
	message("「算我请客。」 Charles 递给你和你的朋友们几杯酒。");
	say();
	goto labelFunc0449_01C1;
labelFunc0449_01BD:
	message("「哎呀。你身上拿太多东西了。等你双手空出来再来跟我要吧！」");
	say();
labelFunc0449_01C1:
	goto labelFunc0449_01C8;
labelFunc0449_01C4:
	message("「那么下次吧。」");
	say();
labelFunc0449_01C8:
	UI_remove_answer("酒");
labelFunc0449_01CF:
	case "告辞" attend labelFunc0449_01DA:
	goto labelFunc0449_01DD;
labelFunc0449_01DA:
	goto labelFunc0449_005F;
labelFunc0449_01DD:
	endconv;
	message("Charles 向你点点头，然后继续忙他的事。*");
	say();
labelFunc0449_01E2:
	if (!(event == 0x0000)) goto labelFunc0449_01F0;
	Func092E(0xFFB7);
labelFunc0449_01F0:
	return;
}


