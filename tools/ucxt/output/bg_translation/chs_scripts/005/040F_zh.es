#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func040F object#(0x40F) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc040F_0009;
	abort;
labelFunc040F_0009:
	UI_show_npc_face(0xFFF1, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFFD0);
	if (!(!gflags[0x02C4])) goto labelFunc040F_0034;
	message("你看到一位非常有魅力的东方女子。她全副武装。");
	say();
	gflags[0x02C4] = true;
	goto labelFunc040F_0038;
labelFunc040F_0034:
	message("「你想再跟我说话吗？」 Eiko 问道。");
	say();
labelFunc040F_0038:
	if (!(gflags[0x02DC] && (!gflags[0x02DD]))) goto labelFunc040F_004A;
	UI_add_answer("住手！");
labelFunc040F_004A:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc040F_005A:
	converse attend labelFunc040F_019F;
	case "姓名" attend labelFunc040F_0070:
	message("「我的名字是 Eiko 。」");
	say();
	UI_remove_answer("姓名");
labelFunc040F_0070:
	case "职业" attend labelFunc040F_0098:
	if (!(!gflags[0x02DD])) goto labelFunc040F_008D;
	message("「我没有职业。我有一个任务。我的任务是和我的同父异母妹妹 Amanda 一起进行的。」");
	say();
	UI_add_answer("任务");
	goto labelFunc040F_0091;
labelFunc040F_008D:
	message("「既然我们的任务结束了，我们现在要离开这个地城了。」");
	say();
labelFunc040F_0091:
	UI_add_answer("Amanda");
labelFunc040F_0098:
	case "任务" attend labelFunc040F_00BC:
	message("「十八年前，我的父亲被一个名叫 Iskander Ironheart 的独眼巨人谋杀了。我的同父异母妹妹 Amanda 和我是他仅存的亲人，我们发誓要为他报仇。」");
	say();
	gflags[0x02DB] = true;
	UI_remove_answer("任务");
	UI_add_answer(["父亲", "Iskander"]);
labelFunc040F_00BC:
	case "父亲" attend labelFunc040F_00FF:
	message("「我们的父亲是一位名叫 Kalideth 的法师。他致力于寻找引起以太波动的原因，这些波动在过去二十多年里一直阻碍着魔法的运作，以及自那时起折磨着所有法师的疯狂。」");
	say();
	if (!var0001) goto labelFunc040F_00F8;
	UI_show_npc_face(0xFFD0, 0x0000);
	message("「我们的父亲是个明智又善良的人。他的死对整个不列颠尼亚来说都是损失。」她抽泣着。");
	say();
	if (!(!gflags[0x02DD])) goto labelFunc040F_00E7;
	message("「杀他的凶手该死。」");
	say();
labelFunc040F_00E7:
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
labelFunc040F_00F8:
	UI_remove_answer("父亲");
labelFunc040F_00FF:
	case "Amanda" attend labelFunc040F_0137:
	message("「在我们父亲去世之前，我们两人都不知道对方的存在。」");
	say();
	if (!var0001) goto labelFunc040F_0130;
	UI_show_npc_face(0xFFD0, 0x0000);
	message("「我总觉得我在某个地方有个妹妹。但我把这种感觉归咎于一个孩子失去父亲后感到的自然孤独。自从父亲死后，了解彼此是发生在我身上唯一的好事。」");
	say();
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
labelFunc040F_0130:
	UI_remove_answer("Amanda");
labelFunc040F_0137:
	case "Iskander" attend labelFunc040F_014A:
	message("「是的，我知道我发音不正确。我了解他有一个更像人类的绰号，那实际上是从古代独眼巨人语言翻译过来的。但我不知道那是什么。」");
	say();
	UI_remove_answer("Iskander");
labelFunc040F_014A:
	case "住手！" attend labelFunc040F_0191:
	message("你向 Eiko 解释了你所了解到的事。 Kalideth 在和 Iskander 战斗时已经疯了，而造成魔法和法师心智问题的根源才是真正杀死 Kalideth 的东西！");
	say();
	message("「那么，如果你已经发现了杀死我父亲的真正力量，我对 Kalideth 的复仇就是不公正的了。」");
	say();
	if (!var0001) goto labelFunc040F_018A;
	UI_show_npc_face(0xFFD0, 0x0000);
	if (!(!gflags[0x02DE])) goto labelFunc040F_018A;
	message("「你怎么能这么说？我以为你是我妹妹？你是个叛徒！」");
	say();
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
	gflags[0x02DD] = true;
labelFunc040F_018A:
	UI_remove_answer("住手！");
labelFunc040F_0191:
	case "告辞" attend labelFunc040F_019C:
	goto labelFunc040F_019F;
labelFunc040F_019C:
	goto labelFunc040F_005A;
labelFunc040F_019F:
	endconv;
	message("「再会。」");
	say();
	return;
}


