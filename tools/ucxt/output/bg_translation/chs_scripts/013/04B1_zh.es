#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B1 object#(0x4B1) ()
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
	var var0009;

	if (!(event == 0x0001)) goto labelFunc04B1_02E4;
	UI_show_npc_face(0xFF4F, 0x0000);
	var0000 = Func0909();
	if (!(gflags[0x0213] && (!gflags[0x0234]))) goto labelFunc04B1_0042;
	message("「圣者！我的儿子 Tobias 被诬陷了！他不是小偷！我无法相信在他身上发现了一瓶毒液。我真的相信那是被栽赃的！拜托——我求求你！请还我儿子清白。他没有做错任何事！」");
	say();
	message("「我知道我的儿子 Tobias 因为没有父亲而受苦。我已经尽我所能独自将他抚养长大，但这个农场需要做很多任务作，我担心我没有足够的时间陪伴他。但在我心里，我知道我儿子不是小偷。」*");
	say();
	message("「我能建议你再和 Morfin 谈谈吗。他可能在村里其他人身上认出了使用这种邪恶物质的迹象。」");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF4F), 0x000B);
	gflags[0x0234] = true;
	abort;
labelFunc04B1_0042:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0212]) goto labelFunc04B1_005F;
	UI_add_answer("小偷");
labelFunc04B1_005F:
	if (!gflags[0x0213]) goto labelFunc04B1_006C;
	UI_add_answer("Feridwyn");
labelFunc04B1_006C:
	if (!gflags[0x0218]) goto labelFunc04B1_0086;
	UI_add_answer("Tobias 沉冤得雪");
	UI_remove_answer(["Feridwyn", "小偷"]);
labelFunc04B1_0086:
	if (!(!gflags[0x022A])) goto labelFunc04B1_009C;
	message("你看到一个农妇。她搓着手，手上沾满了泥土和劳动留下的纹路。");
	say();
	message("「我的梦想成真了。你是圣者，对吧？我立刻就认出你了！」");
	say();
	gflags[0x022A] = true;
	goto labelFunc04B1_00A6;
labelFunc04B1_009C:
	message("「你好吗，");
	message(var0000);
	message("？」Camille 问。");
	say();
labelFunc04B1_00A6:
	converse attend labelFunc04B1_02DF;
	case "姓名" attend labelFunc04B1_00C0:
	message("「我的名字是 Camille，圣者。很荣幸见到你。」");
	say();
	gflags[0x022A] = true;
	UI_remove_answer("姓名");
labelFunc04B1_00C0:
	case "职业" attend labelFunc04B1_00E7:
	message("「我和我儿子 Tobias 在 Paws 这里经营一个小农场。我是个寡妇。」");
	say();
	UI_add_answer(["Paws", "Tobias"]);
	if (!(!gflags[0x021A])) goto labelFunc04B1_00E7;
	UI_add_answer("农场");
labelFunc04B1_00E7:
	case "农场" attend labelFunc04B1_0107:
	message("「我种了一些农作物。特别是胡萝卜和小麦。」");
	say();
	UI_add_answer(["胡萝卜", "小麦"]);
	UI_remove_answer("农场");
labelFunc04B1_0107:
	case "胡萝卜" attend labelFunc04B1_01CD:
	message("「我相信我的胡萝卜特别好吃。你想买一些吗？三个只要你一枚金币。」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04B1_01C2;
	message("「你想要多少？」");
	say();
	var0002 = UI_input_numeric_value(0x0003, 0x001E, 0x0003, 0x0003);
	var0003 = (var0002 / 0x0003);
	var0004 = UI_remove_party_items(var0003, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04B1_0196;
	var0005 = UI_add_party_items(var0002, 0x0179, 0xFE99, 0x0012, true);
	if (!var0005) goto labelFunc04B1_017B;
	message("「我肯定你会喜欢它们的。」");
	say();
	goto labelFunc04B1_0193;
labelFunc04B1_017B:
	message("「你必须先减轻你的负重。然后我才能给你一些美味的胡萝卜。」");
	say();
	var0006 = UI_add_party_items(var0003, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04B1_0193:
	goto labelFunc04B1_01BF;
labelFunc04B1_0196:
	message("「很抱歉，圣者。」她悲伤地摇摇头。「你没有钱来品尝它们。」~~她盯着你看了一会儿，显然在思考。她压低声音说：~~「拿去吧，圣者，拿一个。」");
	say();
	var0007 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0012, true);
	if (!var0007) goto labelFunc04B1_01BB;
	message("她温柔地笑着，递给你一根胡萝卜。");
	say();
	goto labelFunc04B1_01BF;
labelFunc04B1_01BB:
	message("「你带太多东西了……」她看起来真的很失望。");
	say();
labelFunc04B1_01BF:
	goto labelFunc04B1_01C6;
labelFunc04B1_01C2:
	message("「好吧......但圣者......它们真的很好吃！」");
	say();
labelFunc04B1_01C6:
	UI_remove_answer("胡萝卜");
labelFunc04B1_01CD:
	case "小麦" attend labelFunc04B1_021C:
	message("「这提醒了我。今天需要把这包东西送到磨坊。如果你能帮我送去，Thurston 会付钱给你。你愿意吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04B1_0211;
	var0009 = UI_add_party_items(0x0001, 0x02A5, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04B1_020A;
	message("「一定要把这个交给磨坊主人 Thurston。他会为你的辛劳付钱给你。」");
	say();
	gflags[0x021A] = true;
	goto labelFunc04B1_020E;
labelFunc04B1_020A:
	message("「你带太多东西了！去放下一些东西，然后我再给你。」");
	say();
labelFunc04B1_020E:
	goto labelFunc04B1_0215;
labelFunc04B1_0211:
	message("「我明白你忙于你的任务，圣者。」");
	say();
labelFunc04B1_0215:
	UI_remove_answer("小麦");
labelFunc04B1_021C:
	case "Paws" attend labelFunc04B1_023C:
	message("「在 Paws 这里生活很艰苦。这是一个穷人的城镇，伴随着贫穷带来的所有弊病。至少友谊会给我们带来了一些慰藉。」");
	say();
	UI_add_answer(["弊病", "友谊会"]);
	UI_remove_answer("Paws");
labelFunc04B1_023C:
	case "Tobias" attend labelFunc04B1_0259:
	if (!gflags[0x0213]) goto labelFunc04B1_024E;
	message("「我了解我的儿子。我知道他成长得很不快乐。但我无法相信他会偷东西。」");
	say();
labelFunc04B1_024E:
	message("「他基本上是个好孩子。他工作努力，而且想念他的父亲。」");
	say();
	UI_remove_answer("Tobias");
labelFunc04B1_0259:
	case "友谊会" attend labelFunc04B1_026C:
	message("「我不确定我是否信任友谊会。它无疑在这个世界上做了一些好事，所以它不可能全是坏的。或者，至少，里面的人不可能全是坏的。」");
	say();
	UI_remove_answer("友谊会");
labelFunc04B1_026C:
	case "弊病" attend labelFunc04B1_0286:
	message("「最近，我们镇上一直受到一个小偷的困扰。」");
	say();
	UI_add_answer("小偷");
	UI_remove_answer("弊病");
labelFunc04B1_0286:
	case "小偷" attend labelFunc04B1_02AB:
	if (!(!gflags[0x0213])) goto labelFunc04B1_02A0;
	message("「经营屠宰场的商人 Morfin 被偷了一些银蛇毒液。」");
	say();
	gflags[0x0212] = true;
	goto labelFunc04B1_02A4;
labelFunc04B1_02A0:
	message("「我不在乎 Feridwyn 怎么说！我儿子不是小偷！」");
	say();
labelFunc04B1_02A4:
	UI_remove_answer("小偷");
labelFunc04B1_02AB:
	case "Feridwyn" attend labelFunc04B1_02BE:
	message("「Feridwyn 那个男人知道我不信任友谊会，因此他把我视为他的个人敌人。我不知道他为什么试图通过我儿子来攻击我，但他绝不能得逞。」");
	say();
	UI_remove_answer("Feridwyn");
labelFunc04B1_02BE:
	case "Tobias 沉冤得雪" attend labelFunc04B1_02D1:
	message("你告诉 Camille 你是如何发现 Garritt 才是真正的小偷，而她的儿子 Tobias 已经洗清了嫌疑。「我要感谢你在我们镇上找到了小偷，并还我儿子清白。看到圣者再次回到我们身边，而且你够关心不列颠尼亚的人民，愿意帮助解决我们 Paws 这里的当地麻烦，这让我的心感到安慰。圣者，我再次感谢你。」");
	say();
	UI_remove_answer("Tobias 沉冤得雪");
labelFunc04B1_02D1:
	case "告辞" attend labelFunc04B1_02DC:
	goto labelFunc04B1_02DF;
labelFunc04B1_02DC:
	goto labelFunc04B1_00A6;
labelFunc04B1_02DF:
	endconv;
	message("「祝你旅途愉快，圣者。」*");
	say();
labelFunc04B1_02E4:
	if (!(event == 0x0000)) goto labelFunc04B1_02F2;
	Func092E(0xFF4F);
labelFunc04B1_02F2:
	return;
}


