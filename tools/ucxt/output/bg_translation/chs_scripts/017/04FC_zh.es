#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A5 0x8A5 ();

void Func04FC object#(0x4FC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04FC_01BC;
	UI_show_npc_face(0xFF04, 0x0000);
	var0000 = Func08F7(0xFF03);
	var0001 = Func08F7(0xFF0C);
	var0002 = false;
	var0003 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02C9])) goto labelFunc04FC_0050;
	message("你看到一个看起来相当矜持的石像鬼。");
	say();
	gflags[0x02C9] = true;
	goto labelFunc04FC_0054;
labelFunc04FC_0050:
	message("Kallibrus 微笑着对你点头致意。");
	say();
labelFunc04FC_0054:
	converse attend labelFunc04FC_01B1;
	case "姓名" attend labelFunc04FC_0071:
	message("「被称为 Kallibrus 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Kallibrus");
labelFunc04FC_0071:
	case "Kallibrus" attend labelFunc04FC_0092:
	message("「那不是我真正的名字。这个名字是 Cairbre 给我的，他发不出我的石像鬼名字。」");
	say();
	UI_remove_answer("Kallibrus");
	if (!(!var0002)) goto labelFunc04FC_0092;
	UI_add_answer("Cairbre");
labelFunc04FC_0092:
	case "职业" attend labelFunc04FC_00B6:
	message("「大部分时间都作为佣兵工作。现在正在待业中。帮助朋友 Cosmo 寻找独角兽。」");
	say();
	gflags[0x02E0] = true;
	UI_remove_answer("职业");
	UI_add_answer(["Cosmo", "独角兽"]);
labelFunc04FC_00B6:
	case "Cairbre" attend labelFunc04FC_00F6:
	message("「已经成为伙伴很多、很多年了。而且被束缚的时间更长！」");
	say();
	if (!var0001) goto labelFunc04FC_00EB;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("「他，呃，说的束缚是指，我们是非常好的朋友。」他转向石像鬼。~~「我告诉过你要小心用词。如果你不说清楚，可能会引发很多虚假的谣言。」~~石像鬼羞怯地点点头。*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF04, 0x0000);
labelFunc04FC_00EB:
	var0002 = true;
	UI_remove_answer("Cairbre");
labelFunc04FC_00F6:
	case "Cosmo" attend labelFunc04FC_0117:
	message("「认识他很多年了，但没有认识 Cairbre 那么久。是个好朋友。」");
	say();
	UI_remove_answer("Cosmo");
	if (!(!var0002)) goto labelFunc04FC_0117;
	UI_add_answer("Cairbre");
labelFunc04FC_0117:
	case "独角兽" attend labelFunc04FC_0137:
	message("「不确定，但认为这和女人有关，而且，该怎么说……性交？」");
	say();
	UI_remove_answer("独角兽");
	UI_add_answer(["女人", "性交"]);
labelFunc04FC_0137:
	case "性交" attend labelFunc04FC_0161:
	message("「对这个词一无所知。是指类似繁殖的意思吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04FC_0156;
	message("「告诉你石像鬼的繁殖方式似乎和人类不同，但解释得太糟糕了，没有什么用。」");
	say();
	goto labelFunc04FC_015A;
labelFunc04FC_0156:
	message("「感到相当困惑。」他耸了耸肩。");
	say();
labelFunc04FC_015A:
	UI_remove_answer("性交");
labelFunc04FC_0161:
	case "女人" attend labelFunc04FC_01A3:
	message("「我知道这与性别差异有关，但在石像鬼中没有这种事。相信有一个特定的人类……女人……派他来这里。~~「曾听 Cosmo 说过『爱』，但 Cairbre 声称没有这种东西。不明白，但无论如何都会帮助朋友。」");
	say();
	if (!var0001) goto labelFunc04FC_019C;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("「这就是我喜欢他的地方，");
	message(var0003);
	message("，忠诚到底！」他说着，拍了拍石像鬼的肩膀。*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF04, 0x0000);
labelFunc04FC_019C:
	UI_remove_answer("女人");
labelFunc04FC_01A3:
	case "告辞" attend labelFunc04FC_01AE:
	goto labelFunc04FC_01B1;
labelFunc04FC_01AE:
	goto labelFunc04FC_0054;
labelFunc04FC_01B1:
	endconv;
	message("「期待下次见面，");
	message(var0003);
	message("，」他说。*");
	say();
labelFunc04FC_01BC:
	if (!(event == 0x0000)) goto labelFunc04FC_01C7;
	Func08A5();
labelFunc04FC_01C7:
	return;
}


