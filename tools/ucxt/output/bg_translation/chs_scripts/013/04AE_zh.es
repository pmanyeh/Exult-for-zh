#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AE object#(0x4AE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event == 0x0001)) goto labelFunc04AE_02B1;
	UI_show_npc_face(0xFF52, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF51);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0227])) goto labelFunc04AE_0043;
	message("「你看到一个拄着拐杖的乞丐。他的眼睛像钻石一样闪烁着纯粹的苦涩。」");
	say();
	gflags[0x0227] = true;
	goto labelFunc04AE_004D;
labelFunc04AE_0043:
	message("「您好，");
	message(var0000);
	message("？」Komor 问道。");
	say();
labelFunc04AE_004D:
	converse attend labelFunc04AE_02A6;
	case "姓名" attend labelFunc04AE_0063:
	message("「我的名字是 Komor。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AE_0063:
	case "职业" attend labelFunc04AE_00AA:
	message("「我是个舞者，");
	message(var0000);
	message("。」他无法板着脸，差点从拐杖上摔下来。*");
	say();
	UI_add_answer("乞丐");
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_00AA;
	UI_show_npc_face(0xFF51, 0x0000);
	message("「哈！哈！哈！哈！哈！哈！这真好笑，Komor！」*");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_00AA:
	case "乞丐" attend labelFunc04AE_00D0:
	message("「我不一直都是乞丐。就像 Fenn 和 Merrick 一样，我以前也是个农夫。但大环境变坏了，而 Paws 的情况总是更糟。」");
	say();
	UI_add_answer(["Fenn", "Merrick", "Paws", "施舍"]);
	UI_remove_answer("乞丐");
labelFunc04AE_00D0:
	case "Fenn" attend labelFunc04AE_011E:
	message("「Fenn 和我是好哥们，直到我们死的那一天都是。我们分享彼此广大的财富。」*");
	say();
	UI_remove_answer("Fenn");
	UI_add_answer(["好哥们", "财富"]);
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_011E;
	UI_show_npc_face(0xFF51, 0x0000);
	message("「哈！哈！哈！哈！以你的机智，你应该登台表演！」*");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_011E:
	case "好哥们" attend labelFunc04AE_0163:
	message("「Fenn 和我从我们还是小婴儿的时候就是朋友了。」");
	say();
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_015C;
	message("「我敢打赌，你一定没想到我们会落得这个下场。对吧，Fenn？」*");
	say();
	UI_show_npc_face(0xFF51, 0x0000);
	message("「做梦也想不到，Komor。*」");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_015C:
	UI_remove_answer("好哥们");
labelFunc04AE_0163:
	case "财富" attend labelFunc04AE_0176:
	message("「是的，Fenn 和我分享我们所拥有的一切。总而言之，就是我们背上的衣服和喉咙里的痰！」");
	say();
	UI_remove_answer("财富");
labelFunc04AE_0176:
	case "Merrick" attend labelFunc04AE_0196:
	message("「他真是个超级大坏蛋。Merrick 背弃了我们，现在每天晚上都在温暖舒适的床上度过。这比我们俩好一阵子所拥有的还要多。」");
	say();
	UI_add_answer(["背弃", "床"]);
	UI_remove_answer("Merrick");
labelFunc04AE_0196:
	case "Paws" attend labelFunc04AE_01A9:
	message("「真是个名副其实的仙境，不是吗？」");
	say();
	UI_remove_answer("Paws");
labelFunc04AE_01A9:
	case "背弃" attend labelFunc04AE_01BC:
	message("「唯一比这种悲惨生活更糟糕的，就是让 Merrick 到处嗅探并试图招募我们！这个该死的寄生虫！」");
	say();
	UI_remove_answer("背弃");
labelFunc04AE_01BC:
	case "床" attend labelFunc04AE_01DC:
	message("「Merrick 睡在友谊会经营的庇护所里。他们也给他东西吃。他必须加入他们才会帮助他。」");
	say();
	UI_add_answer(["庇护所", "友谊会"]);
	UI_remove_answer("床");
labelFunc04AE_01DC:
	case "庇护所" attend labelFunc04AE_01EF:
	message("「庇护所？就是那栋充满了阿谀奉承伪君子的大建筑。你应该很容易就能找到！」");
	say();
	UI_remove_answer("庇护所");
labelFunc04AE_01EF:
	case "友谊会" attend labelFunc04AE_0202:
	message("「我们本来可以加入的，但他们是一群令人厌恶的家伙。任何人表现得这么该死的好，肯定不怀好意。为了生存，我们也有不愿妥协的地方。」");
	say();
	UI_remove_answer("友谊会");
labelFunc04AE_0202:
	case "施舍" attend labelFunc04AE_0298:
	message("「你愿意给我一点钱吗？」");
	say();
	if (!Func090A()) goto labelFunc04AE_028D;
	message("多少？");
	say();
	UI_push_answers();
	var0002 = Func090B(["0", "1", "2", "3", "4", "5"]);
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= var0002)) goto labelFunc04AE_0282;
	var0004 = UI_remove_party_items(var0002, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04AE_027B;
	message("「谢谢你，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc04AE_027F;
labelFunc04AE_027B:
	message("「出于某种奇怪的原因，我无法拿走你的钱。」");
	say();
labelFunc04AE_027F:
	goto labelFunc04AE_0286;
labelFunc04AE_0282:
	message("「哼！你没有那么多金币！你几乎和我一样穷！」");
	say();
labelFunc04AE_0286:
	UI_pop_answers();
	goto labelFunc04AE_0291;
labelFunc04AE_028D:
	message("「好吧。去过你平静快乐的生活吧。」");
	say();
labelFunc04AE_0291:
	UI_remove_answer("施舍");
labelFunc04AE_0298:
	case "告辞" attend labelFunc04AE_02A3:
	goto labelFunc04AE_02A6;
labelFunc04AE_02A3:
	goto labelFunc04AE_004D;
labelFunc04AE_02A6:
	endconv;
	message("「挺起您的胸膛吧！");
	message(var0000);
	message("。」*");
	say();
labelFunc04AE_02B1:
	if (!(event == 0x0000)) goto labelFunc04AE_0338;
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF52));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x000B)) goto labelFunc04AE_0332;
	if (!(var0007 == 0x0001)) goto labelFunc04AE_02F5;
	var0008 = "@给可怜人一点零钱吧？@";
labelFunc04AE_02F5:
	if (!(var0007 == 0x0002)) goto labelFunc04AE_0305;
	var0008 = "@好心人，施舍一点吧？@";
labelFunc04AE_0305:
	if (!(var0007 == 0x0003)) goto labelFunc04AE_0315;
	var0008 = "@仁慈可能会改变你的运气！@";
labelFunc04AE_0315:
	if (!(var0007 == 0x0004)) goto labelFunc04AE_0325;
	var0008 = "@朋友，有钱给我吗？@";
labelFunc04AE_0325:
	UI_item_say(0xFF52, var0008);
	goto labelFunc04AE_0338;
labelFunc04AE_0332:
	Func092E(0xFF52);
labelFunc04AE_0338:
	return;
}


