#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04A9 object#(0x4A9) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04A9_019A;
	UI_show_npc_face(0xFF57, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0222])) goto labelFunc04A9_0041;
	message("「你看到一个单纯的农妇。她的脸上刻满了悲伤。」");
	say();
	gflags[0x0222] = true;
	goto labelFunc04A9_004B;
labelFunc04A9_0041:
	message("「你好，");
	message(var0000);
	message("。」Alina 说。");
	say();
labelFunc04A9_004B:
	converse attend labelFunc04A9_018F;
	case "姓名" attend labelFunc04A9_0061:
	message("「我是 Alina。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A9_0061:
	case "职业" attend labelFunc04A9_0080:
	message("「我...没有工作，");
	message(var0000);
	message("。除了作为我孩子的母亲，我正在等我丈夫 Weston 从不列颠城回来。」");
	say();
	UI_add_answer(["孩子", "Weston"]);
labelFunc04A9_0080:
	case "孩子" attend labelFunc04A9_0093:
	message("「Cassie 是我的女儿。还只是个小婴儿，她是我唯一的快乐。」");
	say();
	UI_remove_answer("孩子");
labelFunc04A9_0093:
	case "Weston" attend labelFunc04A9_00C0:
	if (!gflags[0x00CC]) goto labelFunc04A9_00AE;
	message("「好消息，");
	message(var0000);
	message("！我丈夫被不列颠王赦免了。他甚至为 Weston 提供了短期的工作，这样他就能口袋里带着足够养活我们一段时间的钱回到我身边！~~好消息，不是吗？」");
	say();
	goto labelFunc04A9_00B9;
labelFunc04A9_00AE:
	message("「我丈夫因为偷了皇家果园的水果被关在不列颠城的监狱里。」");
	say();
	UI_add_answer("偷窃");
labelFunc04A9_00B9:
	UI_remove_answer("Weston");
labelFunc04A9_00C0:
	case "偷窃" attend labelFunc04A9_00E0:
	message("「我丈夫不是小偷，");
	message(var0000);
	message("。他去那里是为了给孩子和我买水果，这样我们才有足够的食物吃。他被冤枉了，我肯定！」");
	say();
	UI_add_answer("吃");
	UI_remove_answer("偷窃");
labelFunc04A9_00E0:
	case "吃" attend labelFunc04A9_0100:
	message("「我们非常穷。我的宝宝和我目前住在友谊会的庇护所里，因为我们无处可去。」");
	say();
	UI_add_answer(["友谊会", "庇护所"]);
	UI_remove_answer("吃");
labelFunc04A9_0100:
	case "友谊会" attend labelFunc04A9_012E:
	if (!(!var0001)) goto labelFunc04A9_0123;
	message("「是指控我丈夫的一名友谊会成员。现在他们希望我加入他们。」");
	say();
	UI_add_answer(["加入他们", "指控"]);
	goto labelFunc04A9_0127;
labelFunc04A9_0123:
	message("「我丈夫是无辜的，我知道！他原本是想买水果的。为什么我必须加入你们的社团，你们才肯相信我的话？」");
	say();
labelFunc04A9_0127:
	UI_remove_answer("友谊会");
labelFunc04A9_012E:
	case "庇护所" attend labelFunc04A9_0148:
	message("「我们很幸运能靠着友谊会的恩典生活，但我不知道我们被允许住多久。」");
	say();
	UI_add_answer("允许");
	UI_remove_answer("庇护所");
labelFunc04A9_0148:
	case "加入他们" attend labelFunc04A9_015B:
	message("「我觉得如果我加入友谊会，就是在背叛我的丈夫。我怎么能成为那些诬告他的人之一？然而，如果我不加入，他们就不会允许我的孩子和我住在这里。」~~她抽泣着，双手摀住脸。「这太不公平了。我必须在挨饿和背叛之间做出选择。要是 Weston 在这里就好了。我不知道该怎么办！」");
	say();
	UI_remove_answer("加入他们");
labelFunc04A9_015B:
	case "指控" attend labelFunc04A9_016E:
	message("「他们说如果我加入，他们会试图释放我丈夫。但是他们不公正地指控了他。我无法信任他们，但我担心我可能别无选择。」");
	say();
	UI_remove_answer("指控");
labelFunc04A9_016E:
	case "允许" attend labelFunc04A9_0181:
	message("「他们告诉我，庇护所只对友谊会成员开放。除非我尽快加入，否则我会被要求离开。而且我无处可去。」");
	say();
	UI_remove_answer("允许");
labelFunc04A9_0181:
	case "告辞" attend labelFunc04A9_018C:
	goto labelFunc04A9_018F;
labelFunc04A9_018C:
	goto labelFunc04A9_004B;
labelFunc04A9_018F:
	endconv;
	message("「祝你有愉快的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc04A9_019A:
	if (!(event == 0x0000)) goto labelFunc04A9_01A8;
	Func092E(0xFF57);
labelFunc04A9_01A8:
	return;
}


