#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func046A object#(0x46A) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc046A_018C;
	UI_show_npc_face(0xFF96, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0144])) goto labelFunc046A_0040;
	message("你看到一个不修边幅却又有些衣冠楚楚的男人在自言自语。");
	say();
	gflags[0x0144] = true;
	goto labelFunc046A_004A;
labelFunc046A_0040:
	message("「呃，那是啥？喔，是你啊， ");
	message(var0001);
	message("。」");
	say();
labelFunc046A_004A:
	converse attend labelFunc046A_0181;
	case "姓名" attend labelFunc046A_0066:
	message("「我叫 Tiery ， ");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc046A_0066:
	case "职业" attend labelFunc046A_007F:
	message("「呃，那又怎样？喔，我的工作。哎呀，我好好照顾着这人神修道院墓园里的朋友们，真的。」");
	say();
	UI_add_answer(["人神修道院", "朋友们"]);
labelFunc046A_007F:
	case "人神修道院" attend labelFunc046A_0099:
	message("「你说我『对 Abby 发情』是什么意思。我当然没有。我从来没靠近过 Abby 。谁告诉你的？」");
	say();
	UI_add_answer("对 Abby 发情");
	UI_remove_answer("人神修道院");
labelFunc046A_0099:
	case "对 Abby 发情" attend labelFunc046A_00B2:
	message("「人神修道院？哎呀，这里就是人神修道院啊， ");
	message(var0001);
	message("。我无意打听，但如果你不知道自己在哪里，你干嘛来这？」他摇摇头。「就像我前几天跟 Darek 说的，我说『如果你永远不想迷路，就永远哪里都别去。』」");
	say();
	UI_remove_answer("对 Abby 发情");
labelFunc046A_00B2:
	case "朋友们" attend labelFunc046A_00D2:
	message("「尸体怎么了？我只不过是把他们埋了而已！像那样散播谣言会惹上大麻烦的。」");
	say();
	UI_add_answer(["埋葬", "尸体"]);
	UI_remove_answer("朋友们");
labelFunc046A_00D2:
	case "埋葬" attend labelFunc046A_00EC:
	message("「Barry ？喔，他。我不知道你在说什么。我从来没见过 Barry 的老婆！那只是他们散播的关于我的谎言。」");
	say();
	UI_remove_answer("埋葬");
	UI_add_answer("Barry");
labelFunc046A_00EC:
	case "Barry" attend labelFunc046A_00FF:
	message("「我已经告诉过你那是我的工作了。」");
	say();
	UI_remove_answer("Barry");
labelFunc046A_00FF:
	case "尸体" attend labelFunc046A_011F:
	message("「没错。我的朋友们！我埋了他们。这是我的工作。」他瞇着眼看你。「除非， ");
	message(var0001);
	message("，你是在问这里的人？」");
	say();
	UI_add_answer("人");
	UI_remove_answer("尸体");
labelFunc046A_011F:
	case "人" attend labelFunc046A_013F:
	message("「没有！我当然没用偷窥孔。你怎么会问这种问题， ");
	message(var0001);
	message("？」");
	say();
	UI_add_answer("偷窥孔");
	UI_remove_answer("人");
labelFunc046A_013F:
	case "偷窥孔" attend labelFunc046A_0173:
	message("「嗯，我只认识这里的几个人，但我会尽量帮忙。你想知道谁的事？我最好的两个朋友是 Garth 和 Darek ，但我一有机会也常跟 Nina 和 Bart 聊天。~~");
	say();
	message("「最近，对面的那个叫 Perrin 的家伙花了一些时间跟我在一起。他是个很好的人。或许有点聪明， ");
	message(var0001);
	message("，但我还是很喜欢他。你还想知道其他谁的事吗？」");
	say();
	if (!Func090A()) goto labelFunc046A_0168;
	message("「嗯，问那个叫 Perrin 的家伙会比问我好， ");
	message(var0001);
	message("。他知道很多事，他真的懂。」");
	say();
	goto labelFunc046A_016C;
labelFunc046A_0168:
	message("「好吧，很高兴能介绍几个朋友给你认识。」");
	say();
labelFunc046A_016C:
	UI_remove_answer("偷窥孔");
labelFunc046A_0173:
	case "告辞" attend labelFunc046A_017E:
	goto labelFunc046A_0181;
labelFunc046A_017E:
	goto labelFunc046A_004A;
labelFunc046A_0181:
	endconv;
	message("「日安， ");
	message(var0001);
	message("。祝你旅途愉快。我会替你向 Malc 问好的。」*");
	say();
labelFunc046A_018C:
	if (!(event == 0x0000)) goto labelFunc046A_0195;
	abort;
labelFunc046A_0195:
	return;
}


