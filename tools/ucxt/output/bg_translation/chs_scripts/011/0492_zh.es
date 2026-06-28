#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0492 object#(0x492) ()
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

	if (!(event == 0x0001)) goto labelFunc0492_03F5;
	UI_show_npc_face(0xFF6E, 0x0000);
	if (!(!gflags[0x01BA])) goto labelFunc0492_001E;
	message("苍白的幽灵似乎看到了你，但出于某种原因无法对你说话。幽灵沮丧地转过身去。*");
	say();
	abort;
labelFunc0492_001E:
	var0000 = false;
	var0001 = Func0909();
	var0002 = Func08F7(0xFF74);
	if (!gflags[0x01C4]) goto labelFunc0492_0040;
	var0003 = "Markham";
	goto labelFunc0492_0046;
labelFunc0492_0040:
	var0003 = "酒馆老板";
labelFunc0492_0046:
	if (!gflags[0x0198]) goto labelFunc0492_0053;
	UI_add_answer("牺牲");
labelFunc0492_0053:
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(0xFF6E);
	if (!(!gflags[0x01AA])) goto labelFunc0492_00A5;
	if (!((var0004 == 0x0000) || (var0004 == 0x0001))) goto labelFunc0492_00A5;
	if (!(var0005 == 0x000E)) goto labelFunc0492_008F;
	message("当你开始与苍白的幽灵说话时，你注意到他似乎看穿了你，仿佛你根本不存在。你在他面前挥手，但没有任何反应。*");
	say();
	abort;
	goto labelFunc0492_00A5;
labelFunc0492_008F:
	if (!(!(var0005 == 0x0010))) goto labelFunc0492_00A5;
	message("「拜托，拜托。我……现在无法和你说话。我不知道我怎么了。请原谅我，");
	message(var0001);
	message("。」苍白的幽灵看起来比平常更苍白。*");
	say();
	abort;
labelFunc0492_00A5:
	var0006 = UI_get_party_list();
	var0007 = UI_get_npc_object(0xFF70);
	var0008 = UI_get_npc_object(0xFF6D);
	if (!((var0007 in var0006) || (var0008 in var0006))) goto labelFunc0492_0176;
	if (!(var0007 in var0006)) goto labelFunc0492_0122;
	UI_show_npc_face(0xFF70, 0x0000);
	message("「你好，Quenton。我希望你过得好。」Rowena 给了苍白的幽灵一个迷人的微笑。*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("「是的，女士。我过得还算可以。看到妳再次自由，我心里很高兴。妳去见过 Trent 了吗？」*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("「唉，还没。这位好心人正要带我去见他。」她指着你。*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("「这真是个好消息，因为他太想念妳了。」*");
	say();
labelFunc0492_0122:
	if (!(var0008 in var0006)) goto labelFunc0492_0172;
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「幸会， Quenton 。」市长微笑时，他的胡子也跟着展开。*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("「你好，市长。你过得好吗，大人？」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("Forsythe 似乎对 Quenton 听起来很真诚的询问感到惊讶。「哎呀，我过得很好， Quenton 。谢谢你的关心。」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("他微笑着承认了市长的感谢。*");
	say();
labelFunc0492_0172:
	var0009 = true;
labelFunc0492_0176:
	if (!(!var0009)) goto labelFunc0492_0187;
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0187:
	if (!(!gflags[0x01CB])) goto labelFunc0492_019F;
	message("脸色苍白的幽灵转向你，给了你一个苍白的微笑。「你好，我们以前是不是在哪里见过面，");
	message(var0001);
	message("？」你看到他眼中有着认得你的神情，但随后就消失了。~~「原谅我。」他摇摇头，然后笑了笑。「我是 Quenton，但现在只是个幽影了…」");
	say();
	gflags[0x01CB] = true;
	goto labelFunc0492_01B0;
labelFunc0492_019F:
	message("Quenton 转向你。「你好，");
	message(var0001);
	message("。来吧，在旅途中歇息一下，和我坐一会儿。我只是一个普通的幽影，但我可能有对你有用的情报。」");
	say();
	UI_add_answer("情报");
labelFunc0492_01B0:
	UI_add_answer(["姓名", "职业", "幽影", "告辞"]);
	if (!gflags[0x017C]) goto labelFunc0492_01D0;
	UI_add_answer("受折磨的人");
labelFunc0492_01D0:
	converse attend labelFunc0492_03D7;
	case "姓名" attend labelFunc0492_01EC:
	message("「我叫做 Quenton ，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0492_01EC:
	case "职业" attend labelFunc0492_01F8:
	message("他对你的问题笑了笑，「我曾经在海上漫游，一次好几天，收获我的鱼获。」");
	say();
labelFunc0492_01F8:
	case "情报" attend labelFunc0492_020B:
	message("「我已经在这里很多很多年了。而且，」他笑着说，「这段时间我看过很多很多事情。」");
	say();
	UI_remove_answer("情报");
labelFunc0492_020B:
	case "受折磨的人" attend labelFunc0492_021E:
	message("「Caine ？他是 Skara Brae 这里的一名炼金术士。现在他每天都处在无尽的痛苦中，因为他对引起摧毁这座城镇的大火感到内疚。」");
	say();
	UI_remove_answer("受折磨的人");
labelFunc0492_021E:
	case "幽影" attend labelFunc0492_0242:
	message("「我的故事很长也很悲伤。我希望你有时间。」他似乎沉思了一会儿，然后开始说。~~「当我还是个年轻人的时候，我遇到了一位名叫 Gwen 的可爱女人。我娶了她为妻，我们有一段时间过着快乐无忧的生活。她为这世界带来了一道光，我们叫她 Marney ，意思是风暴后的凉风。」他对着某些回忆笑了笑，然后皱着眉头继续说道。");
	say();
	message("「然后，有一天，我的妻子被从我身边带走了。我不知道去哪里，也不知道被谁带走，只知道他们是邪恶的人。不久之后，我可爱的 Marney 伤心欲绝，我担心她的健康。我无法放下捕鱼的工作来照顾她，但我需要金币。所以我跟一个不好惹的男人做了一笔交易。这就是我毁灭的开始，因为当我无法偿还他的贷款时，他在某个晚上来找我并杀了我。我没有机会还手或求救。」他陷入沉默。~~「然而……那皆是发生在将整座岛屿……付之一炬并化为死者之地的大火之前，极其遥远的事了。」");
	say();
	UI_remove_answer("幽影");
	UI_add_answer(["Marney", "大火"]);
labelFunc0492_0242:
	case "Marney" attend labelFunc0492_0299:
	message("「我被谋杀后，我的好朋友 Yorl 把她当作自己的孩子一样照顾。他尽了最大努力，但她的病情只会恶化。几个月后她变得虚弱，然后就死了。」他停在这里，幽灵般的眼中充满了泪水，然后他生气地说：「现在她的灵魂被巫妖 Horance 囚禁着。你必须从那个邪恶的野兽手中救出她！」他试图抓住你，但他的手毫无阻力地穿了过去。*");
	say();
	if (!var0002) goto labelFunc0492_0288;
	if (!gflags[0x01B4]) goto labelFunc0492_0285;
	UI_show_npc_face(0xFF74, 0x0000);
	message("「好了，好了， Quen 。冷静点。」");
	message(var0003);
	message("向你靠近并低声说：「原谅他，");
	message(var0001);
	message("。~~「他谈到他女儿时，偶尔会像那样失去控制。不过我相信你能理解。」*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0285:
	goto labelFunc0492_0292;
labelFunc0492_0288:
	message("Quenton 恢复了控制。「原谅我，");
	message(var0001);
	message("。我没权利把我的痛苦强加在你身上。想到我可爱的 Marney 在那个……生物的掌控之下，我就心痛。」");
	say();
labelFunc0492_0292:
	UI_remove_answer("Marney");
labelFunc0492_0299:
	case "大火" attend labelFunc0492_02C2:
	message("「看来镇上的治疗师 Mordra 女士认为她有一个阻止巫妖 Horance 的计划，她把这计划告诉了市长。我不确定她究竟计划了什么，但这牵涉到镇上的铁匠 Trent 和炼金术士 Caine 。在 Caine 开始他的工作后没多久，一场火风暴席卷了这座岛，摧毁了一切。 Skara Brae 烧了好几天。」");
	say();
	UI_remove_answer("大火");
	UI_add_answer(["Mordra 女士", "巫妖", "市长", "Trent", "Caine"]);
labelFunc0492_02C2:
	case "巫妖" attend labelFunc0492_0338:
	message("「曾经，两个多世纪前，我认识一位名叫 Horance 的天赋异禀的法师。他一生中的两个最爱是研究魔法，以及写优美的诗。 Skara Brae 的人们知道有这样的法师保护着城镇，感到很安全。然后他开始改变。~~「首先，他美丽的十四行诗变成了押韵的打油诗。那成为他唯一说话的方式。他在镇民面前展示的法术变得具有破坏性和暴力。人们开始害怕他。我的死大约就发生在这个时候。那之后没多久，他变得隐居。他在北端建了一座塔，并且再也没有离开过那里。~~「然后，某个晚上，墓地里的坟墓打开了，死人开始行走。」*");
	say();
	if (!var0002) goto labelFunc0492_02FC;
	if (!gflags[0x01B4]) goto labelFunc0492_02FC;
	UI_show_npc_face(0xFF74, 0x0000);
	message(var0003);
	message("用力地点头，「没错，我看到了，我真的看到了。」*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_02FC:
	message("「他们向他的塔游行，现在他们在岛上到处游荡，运行他的命令。」*");
	say();
	if (!var0002) goto labelFunc0492_0331;
	if (!gflags[0x01B4]) goto labelFunc0492_0331;
	UI_show_npc_face(0xFF74, 0x0000);
	message("「现在搞得连鬼都不能安分地过日子了。哼。」");
	message(var0003);
	message(" 看起来有点不高兴。*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0331:
	UI_remove_answer("巫妖");
labelFunc0492_0338:
	case "Mordra 女士" attend labelFunc0492_034B:
	message("Quenton 看起来充满希望，「如果你愿意协助我们，她是最好说话的对象。至少，她似乎知道如何让我们摆脱巫妖。」");
	say();
	UI_remove_answer("Mordra 女士");
labelFunc0492_034B:
	case "市长" attend labelFunc0492_035E:
	message("「市长……」Quenton 谨慎地选择他的措辞。「……嗯，他认为谨慎是勇气中更好的一部分。所以，他或许能提供你一些帮助，但你可能首先得说服他你不是来伤害他的。」");
	say();
	UI_remove_answer("市长");
labelFunc0492_035E:
	case "Trent" attend labelFunc0492_0371:
	message("「啊，这个可怜的男人几乎和我一样了解那种撕心裂肺的失落感。他的妻子 Rowena 被行尸走肉杀死了。而 Mordra 女士声称她看到她坐在巫妖旁边的王座上。我相信这让 Trent 有点发疯了。他日以继夜地制作某种形状奇特的笼子。不过奇怪的是，他似乎永远都做不完。他似乎也不记得自己死于大火，但对 Horance 的强烈仇恨仍然在他心中燃烧。」");
	say();
	UI_remove_answer("Trent");
labelFunc0492_0371:
	case "Caine" attend labelFunc0492_038B:
	message("他看起来好像预料到了你的问题。「唉， Caine 试图将我们从巫妖手中解救出来，反而让我们注定成为同一个巫妖的奴隶。」");
	say();
	UI_remove_answer("Caine");
	UI_add_answer("奴隶");
labelFunc0492_038B:
	case "奴隶" attend labelFunc0492_039E:
	message("「是的，我们是他的奴隶。每天午夜，我们必须前往黑塔 (Dark Tower) 并成为他黑弥撒的仆人。我只知道这些，因为 Mordra 告诉我们这是真的。我完全不记得曾经去过黑塔。」他的表情流露出他的恐惧。");
	say();
	UI_remove_answer("奴隶");
labelFunc0492_039E:
	case "牺牲" attend labelFunc0492_03C9:
	if (!(!gflags[0x019C])) goto labelFunc0492_03BE;
	message("你向他解释，需要一个灵魂自愿进入灵魂之井，以带来它的毁灭。 Quenton 考虑了一会儿，然后回答说：「请理解，");
	message(var0001);
	message("。我真心希望我有那种勇气。但我不能冒险做任何可能毁掉 Marney 的事。记住，她的灵魂被关在那个井里，和墓地里所有的死者一起。」");
	say();
	gflags[0x019C] = true;
	goto labelFunc0492_03C2;
labelFunc0492_03BE:
	message("「不，我很抱歉。我不能冒这个险。」他看起来非常疲惫。");
	say();
labelFunc0492_03C2:
	UI_remove_answer("牺牲");
labelFunc0492_03C9:
	case "告辞" attend labelFunc0492_03D4:
	goto labelFunc0492_03D7;
labelFunc0492_03D4:
	goto labelFunc0492_01D0;
labelFunc0492_03D7:
	endconv;
	message("「再见，");
	message(var0001);
	message("。」*");
	say();
	if (!Func08F7(0xFF74)) goto labelFunc0492_03F5;
	message("他转回去找");
	message(var0003);
	message("。*");
	say();
labelFunc0492_03F5:
	if (!(event == 0x0000)) goto labelFunc0492_03FE;
	abort;
labelFunc0492_03FE:
	return;
}


