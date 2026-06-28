#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func0911 0x911 (var var0000);

void Func0470 object#(0x470) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0470_01E1;
	UI_show_npc_face(0xFF90, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = "Nystul";
	var0004 = "Geoffrey";
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x014A])) goto labelFunc0470_0050;
	message("你看到一个满脸苦涩、外表粗犷的男人。");
	say();
	gflags[0x014A] = true;
	goto labelFunc0470_0054;
labelFunc0470_0050:
	message("D'Rel 对你怒目而视。「你到底想要什么？」");
	say();
labelFunc0470_0054:
	converse attend labelFunc0470_01DC;
	case "姓名" attend labelFunc0470_0077:
	message("「你在乎一个可怜虫的名字做什么？」");
	say();
	UI_add_answer(["可怜虫", "在乎"]);
	UI_remove_answer("姓名");
labelFunc0470_0077:
	case "可怜虫" attend labelFunc0470_0097:
	message("「他们把我关在这里等死，真的！」");
	say();
	UI_remove_answer("可怜虫");
	UI_add_answer(["他们", "等死"]);
labelFunc0470_0097:
	case "他们" attend labelFunc0470_00C5:
	message("「是不列颠尼亚税务委员会干的。他们和这里的两个人—— Jeff 爵士和 Goth 。」");
	say();
	UI_remove_answer("他们");
	UI_add_answer(["Jeff 爵士", "Goth"]);
	if (!(!var0002)) goto labelFunc0470_00C5;
	UI_add_answer("不列颠尼亚税务委员会");
labelFunc0470_00C5:
	case "等死" attend labelFunc0470_00D8:
	message("「他们告诉我余生都要待在这里。我也没有理由怀疑他们！」");
	say();
	UI_remove_answer("等死");
labelFunc0470_00D8:
	case "Jeff 爵士" attend labelFunc0470_00EB:
	message("「那只骄傲的公鸡以为自己高于不列颠尼亚的所有人。只因为他主持高等法院，他就以为可以对任何人进行审判。」");
	say();
	UI_remove_answer("Jeff 爵士");
labelFunc0470_00EB:
	case "Goth" attend labelFunc0470_00FE:
	message("「那个偷鸡摸狗的无赖比我更该被关在这里！如果有选择的话，别相信他。」");
	say();
	UI_remove_answer("Goth");
labelFunc0470_00FE:
	case "不列颠尼亚税务委员会" attend labelFunc0470_0115:
	message("「全都是些小偷！想拿走别人辛苦赚来的金币。如果他们自己出去赚钱，也许就不需要拿走我们所有的钱了！」");
	say();
	var0002 = true;
	UI_remove_answer("不列颠尼亚税务委员会");
labelFunc0470_0115:
	case "在乎" attend labelFunc0470_0157:
	message("「你在乎是吧？好吧。如果你告诉我你的名字，我就告诉你我的名字，成交吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0470_014C;
	var0006 = Func090B([var0000, var0003, var0004]);
	message("「");
	message(var0006);
	message("，嗯。很好，一言为定。我是 D'Rel 。」");
	say();
	goto labelFunc0470_0150;
labelFunc0470_014C:
	message("「我就知道。」");
	say();
labelFunc0470_0150:
	UI_remove_answer("在乎");
labelFunc0470_0157:
	case "职业" attend labelFunc0470_0170:
	message("「现在没有。但在我把这里当成家之前，我是一名水手，一个……私掠者，来自海盗巢穴 (Buccaneer's Den)。」");
	say();
	UI_add_answer(["你的家", "海盗巢穴"]);
labelFunc0470_0170:
	case "你的家" attend labelFunc0470_0191:
	message("「嗯，其实我是因为没缴税被关进来的。毕竟，那钱是我……赚来的，为什么我要交给不列颠尼亚税务委员会？」");
	say();
	UI_remove_answer("你的家");
	if (!(!var0002)) goto labelFunc0470_0191;
	UI_add_answer("不列颠尼亚税务委员会");
labelFunc0470_0191:
	case "海盗巢穴" attend labelFunc0470_01B1:
	message("「你听过海盗巢穴 (Buccaneer's Den)，不是吗？就在大陆正东方的那座岛。那里住着一些装木腿、手是铁钩、肩膀上还停着鹦鹉的男人！哈！哈！」");
	say();
	UI_remove_answer("海盗巢穴");
	if (!gflags[0x0043]) goto labelFunc0470_01B1;
	UI_add_answer("Hook");
labelFunc0470_01B1:
	case "Hook" attend labelFunc0470_01CE:
	message("「对，我认识 Hook 。你在找他吗？他来自 海盗巢穴 (Buccaneer's Den)。他通常跟一个叫 Forskis 什么的石像鬼一起行动。如果你见到他，替我向他……『问好』。」他挥了挥紧握的拳头。");
	say();
	UI_remove_answer("Hook");
	gflags[0x0135] = true;
	Func0911(0x000A);
labelFunc0470_01CE:
	case "告辞" attend labelFunc0470_01D9:
	goto labelFunc0470_01DC;
labelFunc0470_01D9:
	goto labelFunc0470_0054;
labelFunc0470_01DC:
	endconv;
	message("「对，从我眼前消失！」*");
	say();
labelFunc0470_01E1:
	if (!(event == 0x0000)) goto labelFunc0470_01EA;
	abort;
labelFunc0470_01EA:
	return;
}


