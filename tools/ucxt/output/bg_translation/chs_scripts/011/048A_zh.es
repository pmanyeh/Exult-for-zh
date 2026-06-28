#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func048A object#(0x48A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0000)) goto labelFunc048A_0009;
	abort;
labelFunc048A_0009:
	UI_show_npc_face(0xFF76, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func08F7(0xFFFC);
	var0005 = UI_wearing_fellowship();
	if (!gflags[0x02CC]) goto labelFunc048A_004E;
	UI_add_answer("Iriale");
labelFunc048A_004E:
	if (!(!gflags[0x02BB])) goto labelFunc048A_0060;
	message("你看到一张熟悉的脸，是个严肃的大胡子战士，你曾在上一次前往不列颠尼亚的旅途中见过他。");
	say();
	gflags[0x02BB] = true;
	goto labelFunc048A_0064;
labelFunc048A_0060:
	message("「嗨哟，圣者！」 Gorn 说道。「你想跟我说话吗？」");
	say();
labelFunc048A_0064:
	if (!gflags[0x02D2]) goto labelFunc048A_006F;
	message("「 Brom 的声音告诉我不能信任你，圣者，」 Gorn 说道。「我以为我们是朋友，我也不想伤害你。但我警告你，不要再跟我说话！」*");
	say();
	abort;
labelFunc048A_006F:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc048A_007F:
	converse attend labelFunc048A_0355;
	case "姓名" attend labelFunc048A_0095:
	message("那战士瞇起眼睛。「我是 Gorn ，好像你不记得了一样！很高兴再次见到你。」他大笑着拍了你的肩膀。");
	say();
	UI_remove_answer("姓名");
labelFunc048A_0095:
	case "职业" attend labelFunc048A_00AE:
	message("「我的职业是永无止境的壮阔冒险之旅。打从我还是个孩子，从我的家乡 Balema 被带走，我就用一生在追寻可以运行的英雄壮举。」");
	say();
	UI_add_answer(["Balema", "英雄壮举"]);
labelFunc048A_00AE:
	case "Balema" attend labelFunc048A_00C8:
	message("「嗨， Balema 就是我的出生地。我小时候在那里。那是个由白雪覆盖的山脉和黑暗森林组成的奇妙之地。那不是轻松的生活，但那是个把男孩锻造成强壮英雄的地方。那是我来到不列颠尼亚之前的事了。」");
	say();
	UI_remove_answer("Balema");
	UI_add_answer("不列颠尼亚");
labelFunc048A_00C8:
	case "不列颠尼亚" attend labelFunc048A_00DB:
	message("「嗨！我穿过一道月之门（Moongate）来到不列颠尼亚，就像你一样。那是很多很多年前的事了。」");
	say();
	UI_remove_answer("不列颠尼亚");
labelFunc048A_00DB:
	case "英雄壮举" attend labelFunc048A_00F5:
	message("「我以 Brom 的名义运行英雄壮举。我做的每一件事都是为了服侍他。」");
	say();
	UI_remove_answer("英雄壮举");
	UI_add_answer("Brom");
labelFunc048A_00F5:
	case "Brom" attend labelFunc048A_0115:
	message("「他是我的主人，也是所有 Balema 人的主人。 Brom 无所不能，如果我够强壮，他就会帮助我。有时候我能在脑海中听到 Brom 的声音。」");
	say();
	UI_remove_answer("Brom");
	UI_add_answer(["主人", "声音"]);
labelFunc048A_0115:
	case "主人" attend labelFunc048A_0128:
	message("「嗨！ Brom 是我的主人。如果他希望我做某事，我就必须做！如果他不想让我做某事，我就不能做！」");
	say();
	UI_remove_answer("主人");
labelFunc048A_0128:
	case "声音" attend labelFunc048A_014B:
	message("「嗨！最近我才开始在脑海中听到他的声音。他的声音告诉我该怎么做！当我走向这个洞穴时， Brom 的声音变得更清晰了。」");
	say();
	UI_remove_answer("声音");
	UI_add_answer(["命令", "洞穴", "更清晰"]);
labelFunc048A_014B:
	case "命令" attend labelFunc048A_0165:
	message("「当我第一次听到 Brom 的声音时，他告诉我应该跟随他。但当声音是从你脑海里传来时，要怎么跟随一个你看不见的人的声音呢？」");
	say();
	UI_remove_answer("命令");
	UI_add_answer("跟随");
labelFunc048A_0165:
	case "跟随" attend labelFunc048A_0182:
	message("「这对我来说非常、非常困难，但过了一段时间我找到了方法。当我越靠近这个洞穴周围的营地，声音就越大。当我远离时，声音就越小。」");
	say();
	UI_remove_answer("跟随");
	UI_add_answer(["营地"]);
labelFunc048A_0182:
	case "营地" attend labelFunc048A_01CB:
	message("「对像我这样训练有素的战士来说，溜进那些关押 Brom 的人的营地非常简单。他们根本不构成任何威胁。所以危险一定是在下面等着。但我找不到它！」");
	say();
	if (!var0005) goto labelFunc048A_0198;
	message("「我看到你戴着那个徽章，你是伪装成他们其中之一潜入这里的。非常聪明，圣者！」");
	say();
labelFunc048A_0198:
	if (!var0002) goto labelFunc048A_01BD;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 悄悄对你说：「这个人脑袋很灵光，是吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_01BD:
	UI_remove_answer("营地");
	UI_add_answer("危险");
labelFunc048A_01CB:
	case "危险" attend labelFunc048A_021F:
	message("「迄今为止我在这里找到的唯一危险，是一个女战士。她很漂亮。当我去和她说话时，她用剑的剑柄打了我的头。我醒来后她已经不见了。我打赌她以为已经杀了我，但我的头比那个硬多了。我甚至没有受伤。」");
	say();
	if (!var0003) goto labelFunc048A_0218;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino 悄声对你说：「幸好 Gorn 是被打在他唯一没有感觉的地方——他的脑袋！」*");
	say();
	UI_show_npc_face(0xFF76, 0x0000);
	message("「嗨，你们在那边窃窃私语什么？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「哦，没什么。完全没什么。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_0218:
	UI_remove_answer("危险");
labelFunc048A_021F:
	case "洞穴" attend labelFunc048A_0239:
	message("「我知道 Brom 在这个洞穴的某处，在我找到他之前我不会离开这里！」");
	say();
	UI_remove_answer("洞穴");
	UI_add_answer("找到Brom");
labelFunc048A_0239:
	case "更清晰" attend labelFunc048A_0253:
	message("「我越靠近这个洞穴，就越常听到 Brom 的声音。但最近他说的话对我来说非常、非常奇怪！」");
	say();
	UI_remove_answer("更清晰");
	UI_add_answer("奇怪");
labelFunc048A_0253:
	case "奇怪" attend labelFunc048A_026D:
	message("「他说的第一件奇怪的事是『致力合一（Strive For Unity）』。我说，嗨，这正是我在运行英雄壮举的原因。然后 Brom 又说了另一件奇怪的事。」");
	say();
	UI_remove_answer("奇怪");
	UI_add_answer("更奇怪的事");
labelFunc048A_026D:
	case "更奇怪的事" attend labelFunc048A_0287:
	message("「接下来 Brom 的声音对我说『信任我的兄弟们（Trust My Brothers）』。这很奇怪，因为我所有的兄弟都在 Balema ，而且我无论如何都不会信任他们。他们都比我大，而且老是欺负我。但就连那个都比不上下一件奇怪的事。」");
	say();
	UI_remove_answer("更奇怪的事");
	UI_add_answer("下一件奇怪的事");
labelFunc048A_0287:
	case "下一件奇怪的事" attend labelFunc048A_02CC:
	message("「 Brom 的声音告诉我『价值先行于报偿（Worldliness Receives Award）』。我思考那句话很长时间了，还是没想通。但我不会放弃，直到找到 Brom 。」");
	say();
	if (!var0004) goto labelFunc048A_02BE;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「一个神秘的声音在某人的脑海中说话，宣扬友谊会的理念。听起来是否很熟悉，");
	message(var0000);
	message("？」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_02BE:
	UI_remove_answer("下一件奇怪的事");
	UI_add_answer("找到Brom");
labelFunc048A_02CC:
	case "找到Brom" attend labelFunc048A_0308:
	message("「你愿意帮我找到 Brom 吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc048A_02F0;
	message("Gorn 若有所思地愣了一下。他把手放到耳边，像是在聆听什么。他回过头看着你，脸上露出震惊的表情。「我刚刚听到了 Brom 的声音，他告诉我不能信任你！你从我身边走开，圣者！我以为你是我的朋友！我不想再和你说话了！」*");
	say();
	gflags[0x02D2] = true;
	abort;
	goto labelFunc048A_0301;
labelFunc048A_02F0:
	message("Gorn 脸上带着困惑的表情。「你为什么不帮我找 Brom ？你是觉得这全是某种把戏，还是说我应该继续独自寻找 Brom ？」");
	say();
	UI_add_answer(["继续找Brom", "这全是某种把戏"]);
labelFunc048A_0301:
	UI_remove_answer("找到Brom");
labelFunc048A_0308:
	case "继续找Brom" attend labelFunc048A_0323:
	message("「如果你这样想的话。那我就继续独自一人搜索 Brom 了。祝你在你的任务上好运，圣者。再会！」*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF76), 0x000C);
	abort;
labelFunc048A_0323:
	case "这全是某种把戏" attend labelFunc048A_0334:
	message("Gorn 若有所思地愣了一下。他把手放到耳边，像是在聆听什么。他带着震惊的表情看着你。「我刚刚听到了 Brom 的声音，他说我不该信任你！我以为你是我的朋友，圣者！走开！我不想再和你说话了！」*");
	say();
	gflags[0x02D2] = true;
	abort;
labelFunc048A_0334:
	case "Iriale" attend labelFunc048A_0347:
	message("「那是一直守卫这个地方的那个女战士的名字。我已经和她打了一仗。她是个强悍的战士！我必须找到她，让她告诉我 Brom 在哪里！」");
	say();
	UI_remove_answer("Iriale");
labelFunc048A_0347:
	case "告辞" attend labelFunc048A_0352:
	goto labelFunc048A_0355;
labelFunc048A_0352:
	goto labelFunc048A_007F;
labelFunc048A_0355:
	endconv;
	message("「直到我们再次相遇，圣者。」*");
	say();
	return;
}


