#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AF object#(0x4AF) ()
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

	if (!(event == 0x0001)) goto labelFunc04AF_0344;
	UI_show_npc_face(0xFF51, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0212]) goto labelFunc04AF_0035;
	UI_add_answer("小偷");
labelFunc04AF_0035:
	if (!(!gflags[0x0228])) goto labelFunc04AF_0047;
	message("「你看到一个乞丐。你从他脸上的表情看不出他是要笑还是要哭。」");
	say();
	gflags[0x0228] = true;
	goto labelFunc04AF_0051;
labelFunc04AF_0047:
	message("「请原谅，");
	message(var0000);
	message("。」Fenn 说。");
	say();
labelFunc04AF_0051:
	converse attend labelFunc04AF_0339;
	case "姓名" attend labelFunc04AF_006D:
	message("「我的名字是 Fenn，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AF_006D:
	case "小偷" attend labelFunc04AF_009E:
	if (!gflags[0x0218]) goto labelFunc04AF_0082;
	message("「在你告诉他找到毒液瓶的事后，他说：『当你发现 Garritt 那个没用的臭小子是小偷时，你为我们镇上立了一大功！也许现在有些人会开始意识到友谊会的虚伪了！』」");
	say();
	goto labelFunc04AF_0097;
labelFunc04AF_0082:
	if (!gflags[0x0213]) goto labelFunc04AF_008F;
	message("「我知道 Tobias 那孩子是无辜的，没有做任何坏事，不管 Feridwyn 和他的友谊会怎么说。」");
	say();
	goto labelFunc04AF_0097;
labelFunc04AF_008F:
	message("「当心点，这镇上有个小偷！经营屠宰场的商人 Morfin 被偷了一些银蛇毒液。」");
	say();
	gflags[0x0212] = true;
labelFunc04AF_0097:
	UI_remove_answer("小偷");
labelFunc04AF_009E:
	case "职业" attend labelFunc04AF_00B7:
	message("他羞愧地，把目光从你身上移开。「我没有工作，");
	message(var0000);
	message("。」");
	say();
	UI_add_answer("没有工作");
labelFunc04AF_00B7:
	case "没有工作" attend labelFunc04AF_00DA:
	message("「在比较繁荣的时期，我曾经是个农夫。我以前和 Komor 以及 Merrick 一起工作。」");
	say();
	UI_add_answer(["Komor", "Merrick", "给予"]);
	UI_remove_answer("没有工作");
labelFunc04AF_00DA:
	case "Komor" attend labelFunc04AF_011F:
	message("「他是我最好的朋友，也是我认识最勇敢的人。」");
	say();
	var0001 = Func08F7(0xFF52);
	if (!var0001) goto labelFunc04AF_0118;
	message("*");
	say();
	UI_show_npc_face(0xFF52, 0x0000);
	message("「哦，拜托！你让我的眼睛都漏水了！」*");
	say();
	UI_remove_npc_face(0xFF52);
	UI_show_npc_face(0xFF51, 0x0000);
labelFunc04AF_0118:
	UI_remove_answer("Komor");
labelFunc04AF_011F:
	case "Merrick" attend labelFunc04AF_013F:
	message("「Merrick 加入了友谊会，这样他就可以住在他们的庇护所里，这个可怜的家伙。」");
	say();
	UI_add_answer(["庇护所", "友谊会"]);
	UI_remove_answer("Merrick");
labelFunc04AF_013F:
	case "友谊会" attend labelFunc04AF_0159:
	message("「如果友谊会真的想帮助人，为什么就因为我们不想加入，他们就让我们挨饿？他们无法回答这个问题！」");
	say();
	UI_add_answer("挨饿");
	UI_remove_answer("友谊会");
labelFunc04AF_0159:
	case "庇护所" attend labelFunc04AF_0173:
	message("「哼！如果你不幸到想住在那里，你还不如和 Komor 及我一起待在街角。」");
	say();
	UI_remove_answer("庇护所");
	UI_add_answer("街角");
labelFunc04AF_0173:
	case "街角" attend labelFunc04AF_018D:
	message("「即使口袋空空，这个世界上还是残留着一些仁慈。乞讨要钱不是个值得骄傲的职业，但还有更糟的。」");
	say();
	UI_add_answer("更糟的");
	UI_remove_answer("街角");
labelFunc04AF_018D:
	case "更糟的" attend labelFunc04AF_01A0:
	message("「至少我们不必做 Merrick 做的事。他为友谊会招募。」");
	say();
	UI_remove_answer("更糟的");
labelFunc04AF_01A0:
	case "挨饿" attend labelFunc04AF_01C0:
	message("「别担心。我们不会挨饿的。Camille 经常派她儿子 Tobias 给我们送食物和衣服。」");
	say();
	UI_add_answer(["Camille", "Tobias"]);
	UI_remove_answer("挨饿");
labelFunc04AF_01C0:
	case "Camille" attend labelFunc04AF_01D3:
	message("「Camille 是个好女人。她住在紧邻乳制品厂的农场。」");
	say();
	UI_remove_answer("Camille");
labelFunc04AF_01D3:
	case "Tobias" attend labelFunc04AF_01FA:
	message("「他是个好小伙子，总是愿意帮助我们。不像那个无礼的顽童 Garritt。」");
	say();
	if (!gflags[0x0213]) goto labelFunc04AF_01EC;
	UI_add_answer("毒液");
labelFunc04AF_01EC:
	UI_add_answer("Garritt");
	UI_remove_answer("Tobias");
labelFunc04AF_01FA:
	case "毒液" attend labelFunc04AF_0214:
	message("「Tobias 不会卷入那种事情。我敢肯定他不是小偷。」");
	say();
	UI_remove_answer("毒液");
	UI_add_answer("卷入");
labelFunc04AF_0214:
	case "卷入" attend labelFunc04AF_022E:
	message("「如果你在寻找这个偷毒液的小偷，你最好去问问 Andrew。」");
	say();
	UI_add_answer("Andrew");
	UI_remove_answer("卷入");
labelFunc04AF_022E:
	case "Andrew" attend labelFunc04AF_0241:
	message("「Andrew 拥有那家乳制品厂，住在 Camille 的农场和屠宰场对面。他可能看到了什么。」");
	say();
	UI_remove_answer("Andrew");
labelFunc04AF_0241:
	case "Garritt" attend labelFunc04AF_0286:
	message("「他是经营庇护所的 Feridwyn 和 Brita 的儿子。Garritt 过马路都会避开我们。」");
	say();
	var0001 = Func08F7(0xFF52);
	if (!var0001) goto labelFunc04AF_027F;
	message("*");
	say();
	UI_show_npc_face(0xFF52, 0x0000);
	message("「反正我们也不想让他这种人走在我们这边的路上！」*");
	say();
	UI_remove_npc_face(0xFF52);
	UI_show_npc_face(0xFF51, 0x0000);
labelFunc04AF_027F:
	UI_remove_answer("Garritt");
labelFunc04AF_0286:
	case "给予" attend labelFunc04AF_032B:
	message("「你愿意给我一点钱吗？」");
	say();
	if (!Func090A()) goto labelFunc04AF_0320;
	message("多少？");
	say();
	UI_push_answers();
	var0002 = Func090B(["0", "1", "2", "3", "4", "5"]);
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!((var0003 >= var0002) && (var0002 != "0"))) goto labelFunc04AF_0301;
	var0004 = UI_remove_party_items(var0002, 0x0284, 0xFE99, 0xFE99, true);
	message("「谢谢你，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc04AF_0305;
labelFunc04AF_0301:
	message("「看来你也没有钱啊！」");
	say();
labelFunc04AF_0305:
	if (!(var0003 == 0x0000)) goto labelFunc04AF_0319;
	message("「如果我打扰到你，我真的很抱歉，");
	message(var0000);
	message("。」");
	say();
labelFunc04AF_0319:
	UI_pop_answers();
	goto labelFunc04AF_0324;
labelFunc04AF_0320:
	message("「Fenn 低下了头。」");
	say();
labelFunc04AF_0324:
	UI_remove_answer("给予");
labelFunc04AF_032B:
	case "告辞" attend labelFunc04AF_0336:
	goto labelFunc04AF_0339;
labelFunc04AF_0336:
	goto labelFunc04AF_0051;
labelFunc04AF_0339:
	endconv;
	message("「祝你好运，");
	message(var0000);
	message(".\"*");
	say();
labelFunc04AF_0344:
	if (!(event == 0x0000)) goto labelFunc04AF_03CB;
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF51));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x000B)) goto labelFunc04AF_03C5;
	if (!(var0007 == 0x0001)) goto labelFunc04AF_0388;
	var0008 = "@给点买食物的钱吧？@";
labelFunc04AF_0388:
	if (!(var0007 == 0x0002)) goto labelFunc04AF_0398;
	var0008 = "@请帮助一个可怜的乞丐！@";
labelFunc04AF_0398:
	if (!(var0007 == 0x0003)) goto labelFunc04AF_03A8;
	var0008 = "@展现一点慷慨吧！@";
labelFunc04AF_03A8:
	if (!(var0007 == 0x0004)) goto labelFunc04AF_03B8;
	var0008 = "@帮助一个不幸的人吧！@";
labelFunc04AF_03B8:
	UI_item_say(0xFF51, var0008);
	goto labelFunc04AF_03CB;
labelFunc04AF_03C5:
	Func092E(0xFF51);
labelFunc04AF_03CB:
	return;
}


