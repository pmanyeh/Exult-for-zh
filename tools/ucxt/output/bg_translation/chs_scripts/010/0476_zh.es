#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func085D 0x85D ();
extern void Func085E 0x85E ();
extern var Func090A 0x90A ();
extern void Func085C 0x85C ();
extern void Func092E 0x92E (var var0000);

void Func0476 object#(0x476) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0476_022A;
	UI_show_npc_face(0xFF8A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0208])) goto labelFunc0476_0045;
	message("当你走近时，这位女性扬起眉毛，表示她注意到你的出现，并对你接下来要说的话感兴趣。");
	say();
	gflags[0x0208] = true;
	goto labelFunc0476_004F;
labelFunc0476_0045:
	message("「我能帮你什么忙吗， ");
	message(var0000);
	message("？」 Carlyn 问。");
	say();
labelFunc0476_004F:
	converse attend labelFunc0476_0229;
	case "姓名" attend labelFunc0476_0065:
	message("「我是 Carlyn 。」她笑得很灿烂。");
	say();
	UI_remove_answer("姓名");
labelFunc0476_0065:
	case "职业" attend labelFunc0476_00A1:
	message("「我是 Moonglow 的裁缝师。」");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc0476_0094;
	message("「我晚上也替 Phearcy 顾酒吧。」");
	say();
	UI_add_answer("买茶点");
	if (!(!var0002)) goto labelFunc0476_0094;
	UI_add_answer("Phearcy");
labelFunc0476_0094:
	UI_add_answer(["裁缝师", "Moonglow"]);
labelFunc0476_00A1:
	case "买茶点" attend labelFunc0476_00CB:
	message("「你想要食物还是饮料， ");
	message(var0000);
	message("？」");
	say();
	UI_push_answers();
	UI_add_answer(["食物", "饮料"]);
	UI_remove_answer("买茶点");
labelFunc0476_00CB:
	case "食物" attend labelFunc0476_00E1:
	Func085D();
	UI_pop_answers();
	UI_remove_answer("食物");
labelFunc0476_00E1:
	case "饮料" attend labelFunc0476_00F7:
	Func085E();
	UI_pop_answers();
	UI_remove_answer("饮料");
labelFunc0476_00F7:
	case "Phearcy" attend labelFunc0476_0134:
	if (!(var0001 == 0x0007)) goto labelFunc0476_0112;
	var0003 = "这里";
	goto labelFunc0476_0118;
labelFunc0476_0112:
	var0003 = "『亲切恶棍酒馆』";
labelFunc0476_0118:
	message("「他是老板兼酒保。每天晚上 9 点，他都会去参加友谊会的聚会，所以我在");
	message(var0003);
	message("替他代班。」");
	say();
	var0002 = true;
	UI_remove_answer("Phearcy");
	UI_add_answer("友谊会");
labelFunc0476_0134:
	case "Moonglow" attend labelFunc0476_015B:
	message("「这是个非常宜人的城镇， ");
	message(var0000);
	message("。这里有这么多不同类型的人。真希望我能认识更多人。~~如果你对他们有任何问题，我强烈建议你跟 Phearcy 谈谈。」");
	say();
	if (!(!var0002)) goto labelFunc0476_0154;
	UI_add_answer("Phearcy");
labelFunc0476_0154:
	UI_remove_answer("Moonglow");
labelFunc0476_015B:
	case "友谊会" attend labelFunc0476_017B:
	message("「我对这个组织了解不多。每天晚上 9 点他们都有全体成员的聚会之类的。而且，如果我没记错的话，那个分会的领导人会发表演说——我相信那被称为布道。~~城里还有另一个成员，如果你对友谊会有问题的话可以问。」");
	say();
	UI_add_answer(["另一个成员", "领导人"]);
	UI_remove_answer("友谊会");
labelFunc0476_017B:
	case "另一个成员" attend labelFunc0476_0195:
	message("「我相信他的名字是 Tolemac 。据我所知他是个农夫。 Phearcy 知道的会比我多。或者你可以问他们的职员。」");
	say();
	UI_add_answer("职员");
	UI_remove_answer("另一个成员");
labelFunc0476_0195:
	case "职员" attend labelFunc0476_01A8:
	message("「是个女人，这我知道，但我不知道她的名字。」");
	say();
	UI_remove_answer("职员");
labelFunc0476_01A8:
	case "领导人" attend labelFunc0476_01BB:
	message("「他的名字是 Rankin 。我相信他来这里并没有很久。」");
	say();
	UI_remove_answer("领导人");
labelFunc0476_01BB:
	case "裁缝师" attend labelFunc0476_0213:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || ((var0001 == 0x0005) || (var0001 == 0x0006))))) goto labelFunc0476_0202;
	message("「是的，我喜欢缝制衣物。你有兴趣看看或购买我的一些作品吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0476_01FB;
	Func085C();
	goto labelFunc0476_01FF;
labelFunc0476_01FB:
	message("震惊布满了她的脸。~~「好吧，」她气呼呼地说。");
	say();
labelFunc0476_01FF:
	goto labelFunc0476_020C;
labelFunc0476_0202:
	message("「是的， ");
	message(var0000);
	message("。这是我的工作，也是我的热情所在。我喜欢缝制衣物。如果你在我的店开门时来，我可以给你看许多精致的东西。」");
	say();
labelFunc0476_020C:
	UI_remove_answer("裁缝师");
labelFunc0476_0213:
	case "告辞" attend labelFunc0476_0226:
	message("「再会了， ");
	message(var0000);
	message(".\"*");
	say();
	abort;
labelFunc0476_0226:
	goto labelFunc0476_004F;
labelFunc0476_0229:
	endconv;
labelFunc0476_022A:
	if (!(event == 0x0000)) goto labelFunc0476_0238;
	Func092E(0xFF8A);
labelFunc0476_0238:
	return;
}


