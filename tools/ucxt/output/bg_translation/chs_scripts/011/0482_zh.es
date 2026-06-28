#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0855 0x855 ();
extern void Func092E 0x92E (var var0000);

void Func0482 object#(0x482) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;

	if (!(event == 0x0001)) goto labelFunc0482_0499;
	UI_show_npc_face(0xFF7E, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF7E));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0180]) goto labelFunc0482_004A;
	UI_add_answer("陌生人");
labelFunc0482_004A:
	if (!gflags[0x017D]) goto labelFunc0482_0057;
	UI_add_answer("吊饰盒");
labelFunc0482_0057:
	if (!gflags[0x0195]) goto labelFunc0482_0072;
	message("「你准备好付清帐单了吗？」");
	say();
	if (!Func090A()) goto labelFunc0482_006D;
	goto labelFunc0482_00EA;
	goto labelFunc0482_0072;
labelFunc0482_006D:
	message("「那么，再见！」*");
	say();
	abort;
labelFunc0482_0072:
	if (!(!gflags[0x018B])) goto labelFunc0482_0187;
	message("你看到一个带着淫笑、姿势不良的男人，正在自顾自地咯咯笑着。");
	say();
	gflags[0x018B] = true;
	if (!(var0002 == 0x0017)) goto labelFunc0482_0184;
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc0482_0184;
	message("「这不是 Dupre 吗！现在是 Dupre 『爵士』了，对吧？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「的确如此， Boris 。」");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「嗯——在我看来，你似乎还有帐单没付清？对吧？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「喔？有吗？」");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「当然有！让我看看……我相信你总共欠了 74 枚金币。恐怕你必须先付清帐单，我才能和你或是你的同伴说话。」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 看起来很尴尬。他转向你。「我的朋友，你能帮我个忙吗？」");
	say();
	if (!Func090A()) goto labelFunc0482_0171;
labelFunc0482_00EA:
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x004A)) goto labelFunc0482_0165;
	var0005 = UI_remove_party_items(0x004A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc0482_0159;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「谢谢你，圣者。」");
	say();
	message("你把金币交给 Boris 。");
	say();
	gflags[0x0195] = false;
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「很高兴能和你做生意， Dupre 爵士！欢迎来到我的酒馆！」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF7E, 0x0000);
	goto labelFunc0482_0162;
labelFunc0482_0159:
	message("「嗯，我们的金币跑哪去了？」*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_0162:
	goto labelFunc0482_016E;
labelFunc0482_0165:
	message("「恐怕我们的口袋太空了！」*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_016E:
	goto labelFunc0482_0184;
labelFunc0482_0171:
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「好吧，在你的帐单付清之前，我不会为你服务，也不会和你说话！」*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_0184:
	goto labelFunc0482_018B;
labelFunc0482_0187:
	message("「又见面了，」Boris 说道。");
	say();
labelFunc0482_018B:
	converse attend labelFunc0482_0494;
	case "姓名" attend labelFunc0482_01A1:
	message("「叫我 Boris 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0482_01A1:
	case "职业" attend labelFunc0482_01BA:
	message("「我在 New Magincia 经营谦逊少女 (The Modest Damsel) 酒馆。」");
	say();
	UI_add_answer(["谦逊少女 (Modest Damsel)", "New Magincia"]);
labelFunc0482_01BA:
	case "谦逊少女 (Modest Damsel)" attend labelFunc0482_01EE:
	if (!(var0002 == 0x0017)) goto labelFunc0482_01E3;
	message("「这是一间小客栈和酒馆。我是老板，和我妻子 Magenta 一起经营。你想吃或喝点什么，还是需要一间房间？」");
	say();
	UI_add_answer(["Magenta", "吃或喝点什么", "房间"]);
	goto labelFunc0482_01E7;
labelFunc0482_01E3:
	message("「谦逊少女酒馆现在打烊了。但请在营业时间再来。」");
	say();
labelFunc0482_01E7:
	UI_remove_answer("谦逊少女 (Modest Damsel)");
labelFunc0482_01EE:
	case "Magenta" attend labelFunc0482_0201:
	message("「几年前老市长，也就是她父亲去世后，她就成了 New Magincia 的市长。她做得非常好，到目前为止还没有人反对她担任这个职位。」");
	say();
	UI_remove_answer("Magenta");
labelFunc0482_0201:
	case "吃或喝点什么" attend labelFunc0482_0210:
	message("「我保证你会喜欢我们的食物和饮料。」");
	say();
	Func0855();
labelFunc0482_0210:
	case "房间" attend labelFunc0482_02C3:
	message("「你何不留宿一晚？只要 3 枚金币就能租下我们的一间房间。你想留宿一晚吗？」");
	say();
	if (!Func090A()) goto labelFunc0482_02B8;
	var0006 = UI_get_party_list();
	var0007 = 0x0000;
	enum();
labelFunc0482_0230:
	for (var000A in var0006 with var0008 to var0009) attend labelFunc0482_0248;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0482_0230;
labelFunc0482_0248:
	var000B = (var0007 * 0x0003);
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var000B)) goto labelFunc0482_02B1;
	var000D = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!var000D) goto labelFunc0482_02A4;
	message("「这是你的房间钥匙。只能在这家客栈使用。」");
	say();
	var000E = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0482_02AE;
labelFunc0482_02A4:
	message("「抱歉，");
	message(var0000);
	message("，你必须卸下一些负重，我才能把房间钥匙交给你。」");
	say();
labelFunc0482_02AE:
	goto labelFunc0482_02B5;
labelFunc0482_02B1:
	message("「你没有足够的金币租我的房间。」");
	say();
labelFunc0482_02B5:
	goto labelFunc0482_02BC;
labelFunc0482_02B8:
	message("「或许改天晚上吧。」");
	say();
labelFunc0482_02BC:
	UI_remove_answer("房间");
labelFunc0482_02C3:
	case "New Magincia" attend labelFunc0482_02DD:
	message("「在整个不列颠尼亚，你找不到改变这么少的地方。甚至连这里的人似乎也总是一样。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("New Magincia");
labelFunc0482_02DD:
	case "人" attend labelFunc0482_0300:
	message("「有商人、劳工，还有一些新来的人。」");
	say();
	UI_add_answer(["商人", "劳工", "新来的人"]);
	UI_remove_answer("人");
labelFunc0482_0300:
	case "商人" attend labelFunc0482_0323:
	message("「他们是造船匠 Russell 、小贩 Henry ，还有卖花的 Sam 。」");
	say();
	UI_add_answer(["Russell", "Henry", "Sam"]);
	UI_remove_answer("商人");
labelFunc0482_0323:
	case "劳工" attend labelFunc0482_0343:
	message("「他们是牧羊女 Katrina ，和挑水工 Constance 。」");
	say();
	UI_add_answer(["Katrina", "Constance"]);
	UI_remove_answer("劳工");
labelFunc0482_0343:
	case "新来的人" attend labelFunc0482_0363:
	message("「除了那三个陌生人之外，岛上唯一比较新来的人就是圣人 Alagner 。」");
	say();
	UI_add_answer(["Alagner", "陌生人"]);
	UI_remove_answer("新来的人");
labelFunc0482_0363:
	case "Alagner" attend labelFunc0482_0376:
	message("「当然， Alagner 不是来自 New Magincia ，但他游历世界后在这里定居，因为他深知我们这份和平与宁静的价值。」");
	say();
	UI_remove_answer("Alagner");
labelFunc0482_0376:
	case "Russell" attend labelFunc0482_0389:
	message("「Russell 是位才华洋溢的艺术家兼工匠，他不太在乎财富或名声。他只满足于建造精美的船只，并看着它们航行。」");
	say();
	UI_remove_answer("Russell");
labelFunc0482_0389:
	case "Katrina" attend labelFunc0482_03F4:
	message("「Katrina 不止一次对这个镇上的人伸出援手。每当提到你的名字，她脸上总会浮现有趣的笑容。」");
	say();
	var000F = Func08F7(0xFFF7);
	if (!var000F) goto labelFunc0482_03ED;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「那是因为圣者是我最亲密的朋友之一。」");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「我不是妳最亲密的朋友之一吗， Katrina ？」");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「你真是个调情高手， Boris ！Magenta 知道你有多想和岛上其他女人成为『最亲密的朋友』吗？」");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「妳这是在折磨我， Katrina ！」他笑着说。");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7E, 0x0000);
labelFunc0482_03ED:
	UI_remove_answer("Katrina");
labelFunc0482_03F4:
	case "Henry" attend labelFunc0482_0407:
	message("「Henry 的父母非常穷，他没饿死真是个奇迹。我想是 Constance 支持他撑下去的。他从小就爱着她。」");
	say();
	UI_remove_answer("Henry");
labelFunc0482_0407:
	case "Constance" attend labelFunc0482_041A:
	message("「Constance 是个孤儿，主要由 Katrina 抚养长大。她的纯真只逊于她的美貌。大家都爱她。」Boris 两眼发直地凝视着前方几秒钟才回过神来。");
	say();
	UI_remove_answer("Constance");
labelFunc0482_041A:
	case "Sam" attend labelFunc0482_042D:
	message("Boris 笑了。「你得亲自去见见 Sam 。他是个不可思议的人，正在钻研享受生活的艺术。」");
	say();
	UI_remove_answer("Sam");
labelFunc0482_042D:
	case "陌生人" attend labelFunc0482_0444:
	message("「一场船难为我们的岛带来了三个陌生人。谣传其中一个是来自海盗巢穴 (Buccaneer's Den)的有钱绅士，另外两个是他雇用的剑客。他们有天晚上在这里喝酒。他们不是我想在店里接待的那种客人。」");
	say();
	gflags[0x0180] = true;
	UI_remove_answer("陌生人");
labelFunc0482_0444:
	case "吊饰盒" attend labelFunc0482_0486:
	if (!gflags[0x017F]) goto labelFunc0482_0457;
	message("「我再也不想听到关于那个吊饰盒的事了！别跟我提它！」");
	say();
	abort;
labelFunc0482_0457:
	if (!(!gflags[0x0185])) goto labelFunc0482_0469;
	message("「我很确定我从没见过这样的吊饰盒。不过，我很乐意帮你留意。」");
	say();
	gflags[0x0183] = true;
	goto labelFunc0482_047F;
labelFunc0482_0469:
	if (!(!gflags[0x017E])) goto labelFunc0482_047B;
	message("你告诉 Boris 你从海盗 Battles 那里听到的事。他冒出一身冷汗。「你看穿了我的谎言。我这就把它交给你。」他打开吧台后面的一个秘密暗格，往里面看去。当他转头看你时，脸色苍白。「吊饰盒不见了！我向你发誓，我不知道它在哪里！」");
	say();
	gflags[0x017E] = true;
	goto labelFunc0482_047F;
labelFunc0482_047B:
	message("「我还是找不到那个吊饰盒！」Boris 看起来像要抓狂了，「但我会继续找，直到找到为止！」");
	say();
labelFunc0482_047F:
	UI_remove_answer("吊饰盒");
labelFunc0482_0486:
	case "告辞" attend labelFunc0482_0491:
	goto labelFunc0482_0494;
labelFunc0482_0491:
	goto labelFunc0482_018B;
labelFunc0482_0494:
	endconv;
	message("「祝你旅途愉快！」*");
	say();
labelFunc0482_0499:
	if (!(event == 0x0000)) goto labelFunc0482_04A7;
	Func092E(0xFF7E);
labelFunc0482_04A7:
	return;
}


