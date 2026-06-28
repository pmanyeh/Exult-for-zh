#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();

void Func0461 object#(0x461) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0461_0009;
	abort;
labelFunc0461_0009:
	UI_show_npc_face(0xFF9F, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0461_0043;
	var0001 = Func08FC(0xFF9F, 0xFFAF);
	if (!var0001) goto labelFunc0461_003E;
	message("Mikos 在友谊会的集会中陷入冥想，没有听到你的声音。*");
	say();
	abort;
	goto labelFunc0461_0043;
labelFunc0461_003E:
	message("「我必须赶去参加友谊会集会！我们下次再聊！」*");
	say();
	abort;
labelFunc0461_0043:
	var0002 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0107]) goto labelFunc0461_0066;
	UI_add_answer("银色液体");
labelFunc0461_0066:
	if (!(!gflags[0x011C])) goto labelFunc0461_0078;
	message("一个面带冷笑的男人看着你靠近。他怀疑地东张西望。");
	say();
	gflags[0x011C] = true;
	goto labelFunc0461_007C;
labelFunc0461_0078:
	message("Mikos 耸了耸肩，叹了口气。「你这次又想要什么？」");
	say();
labelFunc0461_007C:
	converse attend labelFunc0461_0139;
	case "姓名" attend labelFunc0461_0092:
	message("「我是 Mikos 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0461_0092:
	case "职业" attend labelFunc0461_00AB:
	message("「我是 Minoc 矿场的工头。」");
	say();
	UI_add_answer(["Minoc", "矿场"]);
labelFunc0461_00AB:
	case "Minoc" attend labelFunc0461_00BE:
	message("他往地上吐了口口水。「去他们的！在这里我很安全，远离他们所有的争吵。接下来，他们就要互相残杀了。」");
	say();
	UI_remove_answer("Minoc");
labelFunc0461_00BE:
	case "矿场" attend labelFunc0461_00DE:
	message("「这座矿场由不列颠尼亚矿业公司经营。它位于曾经是 Covetous 地城的地方。他们使用训练有素的矿工和特殊的采矿设备来开采铁矿石、铅和其他矿物。」");
	say();
	UI_remove_answer("矿场");
	UI_add_answer(["矿工", "设备"]);
labelFunc0461_00DE:
	case "矿工" attend labelFunc0461_00F8:
	message("「因为机器正在维修，目前大部分的矿工都不在。现在我们有两位工程师 Owings 和 Malloy 在主隧道的一个分支里。别打扰他们，因为他们正在进行一个特殊项目。我们还有一个石像鬼 Fodus ，他在帮忙维持矿场通常运作的样子。」");
	say();
	UI_remove_answer("矿工");
	UI_add_answer("Owings 和 Malloy");
labelFunc0461_00F8:
	case "设备" attend labelFunc0461_010B:
	message("「这地方充满了非常危险的机器，如果你不知道自己在做什么的话。你绝对不想看到如果有人靠得太近，那些挖掘设备会对他造成什么下场！」");
	say();
	UI_remove_answer("设备");
labelFunc0461_010B:
	case "Owings 和 Malloy" attend labelFunc0461_011E:
	message("Mikos 缓缓地摇了摇头。「我不知道不列颠尼亚矿业公司是从哪里找到他们的。」");
	say();
	UI_remove_answer("Owings 和 Malloy");
labelFunc0461_011E:
	case "银色液体" attend labelFunc0461_012B:
	message("你向 Mikos 复述了你听到 Fodus 说的话。 Mikos 露出震惊的表情。「我完全不知道他在说什么，但我只能说这是石像鬼的典型行为。只是想逃避责任而已。听着，如果你把时间都花在扰乱矿场工作上，那你最好离开这个地方！」*");
	say();
	abort;
labelFunc0461_012B:
	case "告辞" attend labelFunc0461_0136:
	goto labelFunc0461_0139;
labelFunc0461_0136:
	goto labelFunc0461_007C;
labelFunc0461_0139:
	endconv;
	message("「别在这里到处乱逛，");
	message(var0002);
	message("。你应该马上离开。」*");
	say();
	return;
}


