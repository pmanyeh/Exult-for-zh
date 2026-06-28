#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08E0 0x8E0 ();
extern var Func090A 0x90A ();

void Func0462 object#(0x462) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0462_0243;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFF9E, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0462_0040;
	if (!(!var0000)) goto labelFunc0462_003D;
	message("这个生物无视了你。*");
	say();
	abort;
	goto labelFunc0462_0040;
labelFunc0462_003D:
	Func08E0();
labelFunc0462_0040:
	if (!(!gflags[0x013D])) goto labelFunc0462_0068;
	if (!(!gflags[0x013C])) goto labelFunc0462_005D;
	message("这个像猿猴般的雌性显得很紧张。");
	say();
	gflags[0x013C] = true;
	gflags[0x013D] = true;
	goto labelFunc0462_0065;
labelFunc0462_005D:
	message("这个雌性森灵显得很紧张。");
	say();
	gflags[0x013D] = true;
labelFunc0462_0065:
	goto labelFunc0462_007D;
labelFunc0462_0068:
	var0001 = false;
	message("Saralek 向你打招呼。「向你说声哈啰，人类。」");
	say();
	if (!gflags[0x0132]) goto labelFunc0462_007D;
	UI_add_answer("Trellek");
labelFunc0462_007D:
	if (!(gflags[0x0131] && (!gflags[0x0158]))) goto labelFunc0462_008F;
	UI_add_answer("Salamon 的允许");
labelFunc0462_008F:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0462_009F:
	converse attend labelFunc0462_023E;
	case "姓名" attend labelFunc0462_00C7:
	message("她退缩了一会儿，然后小心翼翼地走上前。「我被称为 Saralek 。」");
	say();
	UI_remove_answer("姓名");
	if (!(gflags[0x0132] && (!var0001))) goto labelFunc0462_00C7;
	UI_add_answer("Trellek");
labelFunc0462_00C7:
	case "职业" attend labelFunc0462_00DA:
	message("「『职业』不被理解。你是指家人吗？」");
	say();
	UI_add_answer("家人");
labelFunc0462_00DA:
	case "家人" attend labelFunc0462_00FA:
	message("「是的，我是一个家庭的一份子。银叶树是我的家。我与 Trellek 结为伴侣。」");
	say();
	UI_remove_answer("家人");
	UI_add_answer(["银叶树", "Trellek"]);
labelFunc0462_00FA:
	case "Trellek" attend labelFunc0462_0129:
	message("「 Trellek 是我的丈夫。」");
	say();
	var0001 = true;
	if (!gflags[0x0132]) goto labelFunc0462_0122;
	if (!(!gflags[0x0130])) goto labelFunc0462_0122;
	message("「你见过 Trellek 了？」她骄傲地微笑着，又往前迈进了一步。「他说了什么？」");
	say();
	UI_add_answer("加入队伍");
labelFunc0462_0122:
	UI_remove_answer("Trellek");
labelFunc0462_0129:
	case "银叶树" attend labelFunc0462_0143:
	message("「银叶树越来越少了。很多树经常被砍伐。很快地，我们的家园就不会再有银叶树了。」");
	say();
	UI_add_answer("砍伐");
	UI_remove_answer("银叶树");
labelFunc0462_0143:
	case "砍伐" attend labelFunc0462_0156:
	message("「这些树被一个拿着闪亮、锋利物品的人类砍倒了。」");
	say();
	UI_remove_answer("砍伐");
labelFunc0462_0156:
	case "加入队伍" attend labelFunc0462_018F:
	message("「加入你们是他的愿望吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0462_0184;
	message("她想了一会儿。「我并不希望他离开。」她转头直视着你。「但是，加入你们或许是明智之举。」她叹了一口气。");
	say();
	message("「必须先获得 Salamon 的允许。然后我才会给予许可。为此你需要再回到我这里。」");
	say();
	gflags[0x0130] = true;
	UI_add_answer("Salamon");
	goto labelFunc0462_0188;
labelFunc0462_0184:
	message("「太好了！」她看起来非常高兴且松了一口气。");
	say();
labelFunc0462_0188:
	UI_remove_answer("加入队伍");
labelFunc0462_018F:
	case "Salamon" attend labelFunc0462_01A2:
	message("「她是一位非常充满智能的森灵。她见过很多人类。知识和经验是她的天赋。」");
	say();
	UI_remove_answer("Salamon");
labelFunc0462_01A2:
	case "Salamon 的允许" attend labelFunc0462_01D3:
	message("她的双眼开始泛起泪光。~~「对不起。我撒了个谎。我并不希望 Trellek 离开。我不会给予许可。」~~她的表情变了。~~「你要求他的原因是什么？」");
	say();
	UI_add_answer(["冒险", "再看看"]);
	if (!gflags[0x0138]) goto labelFunc0462_01C8;
	UI_add_answer("鬼火");
labelFunc0462_01C8:
	gflags[0x0158] = true;
	UI_remove_answer("Salamon 的允许");
labelFunc0462_01D3:
	case "冒险" attend labelFunc0462_01E6:
	message("「冒险不是 Trellek 的愿望。」");
	say();
	UI_remove_answer("冒险");
labelFunc0462_01E6:
	case "再看看" attend labelFunc0462_01F9:
	message("她耸了耸肩。");
	say();
	UI_remove_answer("再看看");
labelFunc0462_01F9:
	case "鬼火" attend labelFunc0462_0230:
	message("她兴奋地微笑了。~~「你的愿望是见到鬼火？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0462_021C;
	message("「我有个关于 Trellek 能如何帮助你的主意。 Trellek 的口哨声可以和鬼火联系。或许他可以为你做一个哨子。你接下来应该再去和他谈谈。」");
	say();
	gflags[0x0155] = true;
	goto labelFunc0462_0220;
labelFunc0462_021C:
	message("「哦。」她似乎又变得沮丧了。");
	say();
labelFunc0462_0220:
	UI_remove_answer(["冒险", "再看看", "鬼火"]);
labelFunc0462_0230:
	case "告辞" attend labelFunc0462_023B:
	goto labelFunc0462_023E;
labelFunc0462_023B:
	goto labelFunc0462_009F;
labelFunc0462_023E:
	endconv;
	message("「向你说声再见，人类。」*");
	say();
labelFunc0462_0243:
	if (!(event == 0x0000)) goto labelFunc0462_024C;
	abort;
labelFunc0462_024C:
	return;
}


