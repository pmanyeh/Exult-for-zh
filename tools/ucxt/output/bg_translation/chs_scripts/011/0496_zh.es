#game "blackgate"
// externs
extern var Func08C9 0x8C9 ();
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func0496 object#(0x496) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0000)) goto labelFunc0496_0009;
	abort;
labelFunc0496_0009:
	UI_show_npc_face(0xFF6A, 0x0000);
	gflags[0x01E2] = Func08C9();
	var0000 = Func0908();
	var0001 = Func0931(0xFE9B, 0x0001, 0x02F7, 0xFE99, 0xFE99);
	var0002 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x01DF]) goto labelFunc0496_0057;
	UI_add_answer("黑石");
labelFunc0496_0057:
	if (!gflags[0x01E0]) goto labelFunc0496_0064;
	UI_add_answer("戒指");
labelFunc0496_0064:
	if (!(!gflags[0x01F8])) goto labelFunc0496_009B;
	message("这位沉睡了 200 年的法师看起来就像你上次造访不列颠尼亚时一样。~~「圣者！真不敢相信是你！你来唤醒我了！我就知道你会来！」");
	say();
	message("突然， Penumbra 痛苦地抱住头。「哦！」她喊道。「我的头！好痛！发生了什么事？你对我做了什么？」她闭上眼睛集中精神。「以太有扰动！我能感觉到我的魔力在消退！帮帮我，");
	message(var0000);
	message("！帮帮我！！」");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF6A), 0x000B);
	UI_add_answer("以太");
	gflags[0x01F8] = true;
	Func0911(0x0320);
	goto labelFunc0496_00CE;
labelFunc0496_009B:
	if (!(!gflags[0x0003])) goto labelFunc0496_00BD;
	if (!(!gflags[0x01E2])) goto labelFunc0496_00B6;
	message("Penumbra 痛得几乎无法说话。「是的，");
	message(var0000);
	message("？」");
	say();
	goto labelFunc0496_00BA;
labelFunc0496_00B6:
	message("「哦！我感觉好多了！疼痛正在消退。现在我们可以更轻松地交谈了。」");
	say();
labelFunc0496_00BA:
	goto labelFunc0496_00C7;
labelFunc0496_00BD:
	message("「是的，");
	message(var0000);
	message("？」");
	say();
labelFunc0496_00C7:
	UI_add_answer("以太");
labelFunc0496_00CE:
	converse attend labelFunc0496_0357;
	case "姓名" attend labelFunc0496_00E4:
	message("「我是 Penumbra 。你一定还记得我吧？」");
	say();
	UI_remove_answer("姓名");
labelFunc0496_00E4:
	case "职业" attend labelFunc0496_00FE:
	if (!(!gflags[0x01E2])) goto labelFunc0496_00FA;
	message("Penumbra 很痛苦。「以太受到干扰时我无法正常思考。在它再次顺畅流动之前我什么都做不了！」");
	say();
	goto labelFunc0496_00FE;
labelFunc0496_00FA:
	message("「我是一名执业法师。一旦我的生意重新开张，我应该就能卖法术和法药了。毕竟，我已经沉睡了 200 年！」");
	say();
labelFunc0496_00FE:
	case "以太" attend labelFunc0496_015B:
	if (!(!gflags[0x0003])) goto labelFunc0496_014A;
	if (!(!gflags[0x01E2])) goto labelFunc0496_0122;
	message("「以太控制着世界上所有的魔法。当以太受到干扰时，没有法师能成功施展法术。经过很长一段时间后，法师甚至可能会失去理智！你必须找到保护我免受扭曲以太波影响的方法！」");
	say();
	UI_add_answer("保护");
	goto labelFunc0496_0147;
labelFunc0496_0122:
	message("「我感觉好多了。受损的以太波没有再冲击我的大脑。但现在我们必须摧毁造成这个问题的根源！」");
	say();
	if (!(!gflags[0x0000])) goto labelFunc0496_013C;
	message("Penumbra 想了一会儿。「我感觉受损的以太波来自离这里非常近的地方。我怀疑这些岛屿上的某个地城里有某种东西正在制造浩劫。去欺瞒地城 (Dungeon Deceit) 试试看。我强烈感觉到你的目标就在那里。");
	say();
	message("她闭上了眼睛一会儿。");
	say();
	message("「在我的脑海中，我看到一个形状像四面体 (tetrahedron) 的巨大物体。我开始明白这是什么了。」");
	say();
	goto labelFunc0496_0140;
labelFunc0496_013C:
	message("「在我的脑海中，我看到北边某个地城里有一个巨大的物体。你知道我在说什么，对吧？」");
	say();
labelFunc0496_0140:
	UI_add_answer("四面体 (Tetrahedron)");
labelFunc0496_0147:
	goto labelFunc0496_0154;
labelFunc0496_014A:
	message("「现在以太流动顺畅了。我感谢你，");
	message(var0000);
	message("。你拯救了各地的所有法师！」");
	say();
labelFunc0496_0154:
	UI_remove_answer("以太");
labelFunc0496_015B:
	case "Draxinusom" attend labelFunc0496_016E:
	message("「你可以在 Terfin 岛上找到他。向他询问关于戒指的事。」");
	say();
	UI_remove_answer("Draxinusom");
labelFunc0496_016E:
	case "四面体 (Tetrahedron)" attend labelFunc0496_01D2:
	if (!(!gflags[0x0003])) goto labelFunc0496_01C7;
	if (!(!gflags[0x01E2])) goto labelFunc0496_018B;
	message("「拜托！在我受到保护免于受损以太的影响之前，我无法帮助你！」");
	say();
	goto labelFunc0496_01C4;
labelFunc0496_018B:
	message("「是的，那就是我在脑海中看到的物体的形状。它似乎是某种会破坏以太流动的魔法产生器。」");
	say();
	message("Penumbra 想了一会儿。「这个产生器正在产生危险的以太波。你必须找到以太戒指 (Ethereal Ring) 并戴上它，以打破产生器的防御。现在，那枚戒指在哪里……？」");
	say();
	if (!(!var0001)) goto labelFunc0496_01AC;
	message("Penumbra 查阅了一些书籍并将它们与地图交叉比对。「我相信以太戒指最后是在石像鬼国王 Draxinusom 手中。一旦你找到了戒指，你必须把它带回来给我。我必须对它进行附魔，这样它才能为你所用。」");
	say();
	UI_add_answer("Draxinusom");
	gflags[0x01E0] = true;
	goto labelFunc0496_01C4;
labelFunc0496_01AC:
	if (!gflags[0x01E1]) goto labelFunc0496_01B9;
	message("「附魔戒指将会保护你。」");
	say();
	goto labelFunc0496_01C4;
labelFunc0496_01B9:
	message("「以太戒指必须被附魔。」");
	say();
	UI_add_answer("戒指");
labelFunc0496_01C4:
	goto labelFunc0496_01CB;
labelFunc0496_01C7:
	message("「你已经摧毁它了！所有的法师都感谢你！」");
	say();
labelFunc0496_01CB:
	UI_remove_answer("四面体 (Tetrahedron)");
labelFunc0496_01D2:
	case "保护" attend labelFunc0496_023A:
	message("「我需要某种屏障来保护我免受以太波的伤害。一定有我们可以使用的材料！」~~ Penumbra 紧抓着她的太阳穴。她显然非常痛苦。");
	say();
	message("「你知道有什么无法穿透的材料吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0496_0227;
	message("「那是什么？」");
	say();
	UI_push_answers();
	var0004 = Func090B(["铁矿", "金", "黑石", "铅"]);
	if (!(var0004 == "黑石")) goto labelFunc0496_021C;
	message("「是的！这就是我们需要的！");
	say();
	goto labelFunc0496_0220;
labelFunc0496_021C:
	message("「不，我不认为那行得通。哦，我没法思考，实在太痛了！");
	say();
labelFunc0496_0220:
	UI_pop_answers();
	goto labelFunc0496_022B;
labelFunc0496_0227:
	message("「一定有什么东西！哦，我没法思考，实在太痛了！");
	say();
labelFunc0496_022B:
	message("「拜托——你能找到几块黑石放在我的房间周围吗？我需要四块！但要快！我想我撑不了多久了！请快去！」");
	say();
	gflags[0x01DF] = true;
	UI_remove_answer("保护");
labelFunc0496_023A:
	case "黑石" attend labelFunc0496_0294:
	if (!(!gflags[0x0003])) goto labelFunc0496_0289;
	if (!(!gflags[0x01E2])) goto labelFunc0496_027B;
	var0005 = Func0931(0xFE9B, 0x0004, 0x0392, 0xFE99, 0xFE99);
	if (!var0005) goto labelFunc0496_0273;
	message("「你带来了黑石！我以为我快撑不下去了！快点！把这些石块放在房间东、西、南、北四个角落的基座上！我会在这里等！」*");
	say();
	abort;
	goto labelFunc0496_0278;
labelFunc0496_0273:
	message("「但你没有黑石！你必须找到四块来帮助我！你需要把石块放在房间东、西、南、北四个角落的基座上！快点！」*");
	say();
	abort;
labelFunc0496_0278:
	goto labelFunc0496_0286;
labelFunc0496_027B:
	message("「黑石起作用了！我不再感觉到痛苦的以太了！」");
	say();
	UI_remove_answer("黑石");
labelFunc0496_0286:
	goto labelFunc0496_0294;
labelFunc0496_0289:
	message("「这是种很棒的材料，不是吗？我想它可以用在很多魔法物品上。」");
	say();
	UI_remove_answer("黑石");
labelFunc0496_0294:
	case "戒指" attend labelFunc0496_0349:
	if (!(!gflags[0x0003])) goto labelFunc0496_033E;
	if (!(!gflags[0x01E1])) goto labelFunc0496_0337;
	var0001 = Func0931(0xFE9B, 0x0001, 0x02F7, 0xFE99, 0x0000);
	if (!var0001) goto labelFunc0496_032F;
	message("「你拿到了以太戒指？太好了！我必须为它附魔！快点！」~~Penumbra 从你手中接过戒指，对着它吟唱了几句咒语。过了一会儿，她把戒指还给了你。");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x02F7, 0xFE99, 0x0000, false);
	var0007 = UI_add_party_items(0x0001, 0x02F7, 0xFE99, 0x0001, false);
	gflags[0x01E1] = true;
	Func0911(0x00C8);
	message("「现在你必须前往产生器。确保你戴着这枚戒指！它现在应该可以保护你免受以太攻击。请注意，它只有在四面体附近才有效。并告诉你的同伴在范围外等待。你必须独自进入产生器！」");
	say();
	message("Penumbra 想了一会儿。「顺便问一下。你是怎么知道为这个问题来找我的？」");
	say();
	var0004 = Func090B(["Nicodemus", "时间领主 (Time Lord)"]);
	if (!((var0004 == "Nicodemus") || (var0004 == "时间领主 (Time Lord)"))) goto labelFunc0496_032C;
	message("你告诉 Penumbra 关于你需要给沙漏附魔的故事。");
	say();
	message("「我明白了。嗯，你最好赶快上路，这样你才能真正让你的沙漏被附魔！」");
	say();
labelFunc0496_032C:
	goto labelFunc0496_0334;
labelFunc0496_032F:
	message("「戒指在哪里？你没有拿到吗？没有戒指我们什么都做不了！快去找！拜托！」*");
	say();
	abort;
labelFunc0496_0334:
	goto labelFunc0496_033B;
labelFunc0496_0337:
	message("「你想要什么？我已经给戒指附魔了！」");
	say();
labelFunc0496_033B:
	goto labelFunc0496_0342;
labelFunc0496_033E:
	message("「你想要什么？我已经为戒指附魔了。它不能再为你做什么了！」");
	say();
labelFunc0496_0342:
	UI_remove_answer("戒指");
labelFunc0496_0349:
	case "告辞" attend labelFunc0496_0354:
	goto labelFunc0496_0357;
labelFunc0496_0354:
	goto labelFunc0496_00CE;
labelFunc0496_0357:
	endconv;
	if (!(!gflags[0x01E2])) goto labelFunc0496_0366;
	message("Penumbra 对你挥手，然后痛苦地闭上眼睛。*");
	say();
	goto labelFunc0496_0370;
labelFunc0496_0366:
	message("「再会，");
	message(var0000);
	message("！祝你好运！」*");
	say();
labelFunc0496_0370:
	return;
}


