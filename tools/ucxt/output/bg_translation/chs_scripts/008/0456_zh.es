#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0456 object#(0x456) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0456_01A0;
	UI_show_npc_face(0xFFAA, 0x0000);
	var0000 = Func0909();
	if (!(!gflags[0x0111])) goto labelFunc0456_002A;
	message("你看到一位开朗的女人，有着明亮的眼睛和金色的头发。");
	say();
	gflags[0x0111] = true;
	goto labelFunc0456_0034;
labelFunc0456_002A:
	message("「又见面了，");
	message(var0000);
	message("。」Xanthia 说。");
	say();
labelFunc0456_0034:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0456_0044:
	converse attend labelFunc0456_0195;
	case "姓名" attend labelFunc0456_005A:
	message("「你好，我的名字是 Xanthia 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0456_005A:
	case "职业" attend labelFunc0456_008E:
	if (!gflags[0x011F]) goto labelFunc0456_007F;
	message("「我是 Minoc 艺术家公会的成员。我制作并贩售烛台。」");
	say();
	UI_add_answer(["艺术家公会", "Minoc", "烛台"]);
	goto labelFunc0456_008E;
labelFunc0456_007F:
	message("「如果你不介意的话，也许我们可以在更有交际气氛的场合互相认识！最近有两个人在 William 的锯木厂被谋杀了！这可不是认识新朋友的时候！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀案");
labelFunc0456_008E:
	case "艺术家公会" attend labelFunc0456_00A1:
	message("「我们是一个由艺术家和工匠组成的公会，为了共同利益而团结一致，致力于艺术的发展，并向其他艺术家展示，完全靠自己的努力生存而不牺牲创造力是可能的。」");
	say();
	UI_remove_answer("艺术家公会");
labelFunc0456_00A1:
	case "烛台" attend labelFunc0456_00BB:
	message("「我制作简单的烛台，但有时我也会接委托工作，制作更特别的款式。我受雇于友谊会，为他们所有的友谊会大厅制作烛台。」");
	say();
	UI_remove_answer("烛台");
	UI_add_answer("友谊会");
labelFunc0456_00BB:
	case "友谊会" attend labelFunc0456_00E2:
	message("「当地友谊会分会的负责人 Elynor 给我看了一张友谊会标志的图片，我就是根据那个来设计我的烛台。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer("Elynor");
	if (!gflags[0x0122]) goto labelFunc0456_00E2;
	UI_add_answer("谋杀现场的烛台");
labelFunc0456_00E2:
	case "Elynor" attend labelFunc0456_00FC:
	message("「是的，她很擅长招募。怎么说呢，她让我们的镇长 Burnside 加入了，还有不列颠尼亚矿业公司当地负责人 Gregor ，以及我们的造船匠 Owen 。很遗憾地说，他很快就会出名了。谢天谢地，她从来没邀请过我加入。」");
	say();
	UI_remove_answer("Elynor");
	UI_add_answer("Owen");
labelFunc0456_00FC:
	case "谋杀现场的烛台" attend labelFunc0456_012A:
	message("你向 Xanthia 描述在谋杀现场发现的烛台。她认了出来，睁大了眼睛。「是的，那是我做的其中一个烛台。它在谋杀现场的锯木厂里？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0456_011B;
	message("Xanthia 看起来很震惊。「太可怕了！我发誓我不知道它是怎么到那里的！你一定要去问 Elynor 这件事！」");
	say();
	goto labelFunc0456_011F;
labelFunc0456_011B:
	message("她略带怒意地看了你一眼。「好吧，我希望你不是从 Elynor 那里偷来的。」");
	say();
labelFunc0456_011F:
	gflags[0x0125] = true;
	UI_remove_answer("谋杀现场的烛台");
labelFunc0456_012A:
	case "Minoc" attend labelFunc0456_014A:
	message("「随着矿业的成功， Minoc 是个繁荣的城市。不是一个人们习惯发生谋杀案的地方。是个很适合我们艺术家公会发展的好地方。但我们这里的情况一直很艰难。现在我担心情况可能会变得更糟。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["更糟", "谋杀案"]);
labelFunc0456_014A:
	case "更糟" attend labelFunc0456_015D:
	message("「这就是 Gladstone 说的。你最好去问他这件事。」");
	say();
	UI_remove_answer("更糟");
labelFunc0456_015D:
	case "谋杀案" attend labelFunc0456_0174:
	message("「这太可怕了！我个人并不认识 Frederico 或 Tania ，但我确实见过他们的儿子 Sasha 一次。他是个好男孩，如果没有误入歧途的话。他曾作为 Seara 的客人，在我们艺术家公会住过一晚。」");
	say();
	gflags[0x00FE] = true;
	UI_remove_answer("谋杀案");
labelFunc0456_0174:
	case "Owen" attend labelFunc0456_0187:
	message("「他们出于某种原因要为 Owen 建造一座纪念碑。 Owen 和 Elynor 拒绝使用公会的任何人来帮忙建造它！他们相当无礼，你不觉得吗？」");
	say();
	UI_remove_answer("Owen");
labelFunc0456_0187:
	case "告辞" attend labelFunc0456_0192:
	goto labelFunc0456_0195;
labelFunc0456_0192:
	goto labelFunc0456_0044;
labelFunc0456_0195:
	endconv;
	message("「再会，");
	message(var0000);
	message("。希望我对你有所帮助。」*");
	say();
labelFunc0456_01A0:
	if (!(event == 0x0000)) goto labelFunc0456_01AE;
	Func092E(0xFFAA);
labelFunc0456_01AE:
	return;
}


