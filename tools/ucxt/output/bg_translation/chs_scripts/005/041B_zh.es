#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08D1 0x8D1 ();
extern void Func092E 0x92E (var var0000);

void Func041B object#(0x41B) ()
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

	if (!(event == 0x0001)) goto labelFunc041B_024E;
	UI_show_npc_face(0xFFE5, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE5));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0068]) goto labelFunc041B_0044;
	UI_add_answer("试镜");
labelFunc041B_0044:
	if (!gflags[0x0069]) goto labelFunc041B_0057;
	UI_add_answer(["Miranda", "Max"]);
labelFunc041B_0057:
	if (!(!gflags[0x009C])) goto labelFunc041B_0069;
	message("你可以看到这个人的创造力，源源不绝地涌现出来。他饶富兴味地看着你。");
	say();
	gflags[0x009C] = true;
	goto labelFunc041B_006D;
labelFunc041B_0069:
	message("「是……？」 Raymundo 没好气地说。「你要什么？我很忙！」");
	say();
labelFunc041B_006D:
	converse attend labelFunc041B_0249;
	case "姓名" attend labelFunc041B_0083:
	message("「我是 Raymundo。」");
	say();
	UI_remove_answer("姓名");
labelFunc041B_0083:
	case "职业" attend labelFunc041B_00CC:
	message("「哎呀，我可是全国闻名的！你难道没听说过我吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc041B_00A2;
	message("「我早说过了吧！");
	say();
	goto labelFunc041B_00A6;
labelFunc041B_00A2:
	message("「-真的吗-！？我很惊讶！不过算了…");
	say();
labelFunc041B_00A6:
	message("「我是不列颠城这里皇家剧院的导演。我也是驻院剧作家。我偶尔也会作些曲子。我有时也会演戏，但演自己导的戏可不是明智之举。~");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc041B_00BB;
	message("「我们目前正在排练一出戏。」");
	say();
	goto labelFunc041B_00BF;
labelFunc041B_00BB:
	message("「白天来剧院看看我们排戏吧。」");
	say();
labelFunc041B_00BF:
	UI_add_answer(["皇家剧院", "排戏"]);
labelFunc041B_00CC:
	case "排戏" attend labelFunc041B_0114:
	message("「这是我写的一点小东西，名为『圣者的试炼（The Trials of the Avatar）』。这是关于不列颠尼亚历史上一位传奇人物的故事。」这位艺术家上下打量着你。");
	say();
	message("「嗯...你的确有一种特质...你曾经在舞台上演过戏吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc041B_00EF;
	message("「我就知道！");
	say();
	goto labelFunc041B_00F3;
labelFunc041B_00EF:
	message("「嗯，没关系。我相信你能很快适应的。");
	say();
labelFunc041B_00F3:
	message("「官方说法是试镜已经结束，而且选角也完成了。然而，我们需要找一个人，作为『圣者』这个角色的替补演员。你想要试镜吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc041B_010F;
	message("「太棒了！你需要做的是去 Gaye 的服装店，买一套圣者的服装。等我看到你穿着 -合适的- 服装后，我就可以帮你试镜。快去办吧，快点，我是个大忙人。」*");
	say();
	gflags[0x0067] = true;
	abort;
	goto labelFunc041B_0114;
labelFunc041B_010F:
	message("「不？你从未梦想过在舞台上表演吗？看到你的名字在火炬下闪耀？画上传统的油彩妆和戴上假发？在雷鸣般的掌声中鞠躬？好吧，那就走吧，我没时间和民众闲聊。」*");
	say();
	abort;
labelFunc041B_0114:
	case "皇家剧院" attend labelFunc041B_0134:
	message("「这是个很棒的空间，你不觉得吗？它去年才刚开幕，这多亏了我们这座伟大城市几位富有的市民的赞助。」");
	say();
	UI_remove_answer("皇家剧院");
	UI_add_answer(["资助", "赞助者"]);
labelFunc041B_0134:
	case "资助" attend labelFunc041B_017F:
	message("「虽然，剧院建筑的建设费用，实际上是由皇家铸币局支付的，但剧团的运作，完全依赖像你这样的人来支持。你愿意为我们的剧团，做出一点微薄的贡献吗？例如…十枚金币？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc041B_0174;
	var0006 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc041B_016D;
	message("「我感谢你。你已经证明了自己是一位真正的『艺术赞助者』，一个有教养和有品味的人。」");
	say();
	goto labelFunc041B_0171;
labelFunc041B_016D:
	message("「你不具说服力的表演，暴露了你的底细！你根本没有十枚金币！」");
	say();
labelFunc041B_0171:
	goto labelFunc041B_0178;
labelFunc041B_0174:
	message("「给一个人一条面包，你只能喂饱他一天；给一个人一出戏，或许你已经喂饱了他的灵魂一辈子！一旦你看过我们的一部作品，我相信你一定会重新考虑的。」");
	say();
labelFunc041B_0178:
	UI_remove_answer("资助");
labelFunc041B_017F:
	case "试镜" attend labelFunc041B_01C3:
	if (!(var0001 == 0x0007)) goto labelFunc041B_01BE;
	var0007 = Func0931(0xFE9C, 0x0001, 0x0346, 0xFE99, 0xFE99);
	if (!var0007) goto labelFunc041B_01B6;
	message("「我看你准备好了？很好。请走到舞台中央好吗？」");
	say();
	Func08D1();
	goto labelFunc041B_01BB;
labelFunc041B_01B6:
	message("「你的服装在哪里？没有服装你不能试镜！」*");
	say();
	abort;
labelFunc041B_01BB:
	goto labelFunc041B_01C3;
labelFunc041B_01BE:
	message("「请在排练时间来剧院好吗？」*");
	say();
	abort;
labelFunc041B_01C3:
	case "Miranda" attend labelFunc041B_01DA:
	message("Raymundo 深吸了一口气，笑了起来。");
	say();
	message("「啊，可爱的女人。可惜她对政治比对舞台更感兴趣。但我得说，我们相处得极好！」");
	say();
	UI_remove_answer("Miranda");
labelFunc041B_01DA:
	case "Max" attend labelFunc041B_01F1:
	message("「他可是个很有个性的人，不是吗？」 Raymundo 的脸上洋溢着骄傲。");
	say();
	message("「得说，他真像他老爸。他肯定会成为一个伟大的演员。或者作家。或者导演。或者制作人。」");
	say();
	UI_remove_answer("Max");
labelFunc041B_01F1:
	case "赞助者" attend labelFunc041B_0211:
	message("「嗯，我真的无权透露我们赞助者的名字。但他们大多数都属于友谊会。」");
	say();
	UI_remove_answer("赞助者");
	UI_add_answer(["主顾", "友谊会"]);
labelFunc041B_0211:
	case "主顾" attend labelFunc041B_0224:
	message("「这些是为我们剧院做出贡献的人。他们来自各行各业，除了对优秀戏剧的热爱之外，几乎没有什么共同点。」");
	say();
	UI_remove_answer("主顾");
labelFunc041B_0224:
	case "友谊会" attend labelFunc041B_023B:
	message("「对于非艺术家来说，他们对剧院做出了慷慨的贡献。在我的标准里，他们是 -好- 人！」他高兴地搓着手。");
	say();
	message("「不过，我不是会员。」");
	say();
	UI_remove_answer("友谊会");
labelFunc041B_023B:
	case "告辞" attend labelFunc041B_0246:
	goto labelFunc041B_0249;
labelFunc041B_0246:
	goto labelFunc041B_006D;
labelFunc041B_0249:
	endconv;
	message("「要走了？抱歉，我不签名。」*");
	say();
labelFunc041B_024E:
	if (!(event == 0x0000)) goto labelFunc041B_02D5;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE5));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc041B_02CF;
	if (!(var0008 == 0x0001)) goto labelFunc041B_0292;
	var0009 = "「大声点！我听不见你的声音！」";
labelFunc041B_0292:
	if (!(var0008 == 0x0002)) goto labelFunc041B_02A2;
	var0009 = "「请往舞台左侧移动。」";
labelFunc041B_02A2:
	if (!(var0008 == 0x0003)) goto labelFunc041B_02B2;
	var0009 = "「那场戏再试一次。」";
labelFunc041B_02B2:
	if (!(var0008 == 0x0004)) goto labelFunc041B_02C2;
	var0009 = "「请从头再来一遍。」";
labelFunc041B_02C2:
	UI_item_say(0xFFE5, var0009);
	goto labelFunc041B_02D5;
labelFunc041B_02CF:
	Func092E(0xFFE5);
labelFunc041B_02D5:
	return;
}


