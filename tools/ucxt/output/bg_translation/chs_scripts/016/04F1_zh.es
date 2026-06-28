#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func04F1 object#(0x4F1) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc04F1_0009;
	abort;
labelFunc04F1_0009:
	UI_show_npc_face(0xFF0F, 0x0000);
	if (!gflags[0x02D3]) goto labelFunc04F1_001E;
	message("「走开，杀蜂人！」*");
	say();
	abort;
labelFunc04F1_001E:
	var0000 = false;
	var0001 = Func08F7(0xFFF6);
	var0002 = Func08F7(0xFFFF);
	if (!gflags[0x02D4]) goto labelFunc04F1_003E;
	var0000 = true;
labelFunc04F1_003E:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02BF])) goto labelFunc04F1_0060;
	message("你看到一个有点野性的裸体男人。他对自己没穿衣服一点都不在意。");
	say();
	gflags[0x02BF] = true;
	goto labelFunc04F1_0064;
labelFunc04F1_0060:
	message("「蛤？」Papa 问。");
	say();
labelFunc04F1_0064:
	converse attend labelFunc04F1_02C4;
	case "姓名" attend labelFunc04F1_008E:
	if (!var0000) goto labelFunc04F1_007C;
	message("「我是 Murray。」");
	say();
	goto labelFunc04F1_0080;
labelFunc04F1_007C:
	message("「我 Papa！」男人咧嘴笑着，露出掉了几颗的牙齿。他满不在乎地抓了抓屁股。");
	say();
labelFunc04F1_0080:
	UI_remove_answer("姓名");
	UI_add_answer("你的衣服呢？");
labelFunc04F1_008E:
	case "职业" attend labelFunc04F1_00B4:
	if (!var0000) goto labelFunc04F1_00A3;
	message("「嘿，什么工作？我在这里过得很好。别烦我！」");
	say();
	goto labelFunc04F1_00A7;
labelFunc04F1_00A3:
	message("男人看起来很困惑。「工作？我没工作。我活着。我和 Mama 住在这里。不需要工作。洞穴提供一切。」");
	say();
labelFunc04F1_00A7:
	UI_add_answer(["Mama", "洞穴"]);
labelFunc04F1_00B4:
	case "你的衣服呢？" attend labelFunc04F1_00D4:
	if (!var0000) goto labelFunc04F1_00C9;
	message("「衣服让我发痒，所以我不穿。」");
	say();
	goto labelFunc04F1_00CD;
labelFunc04F1_00C9:
	message("「衣服？！」男人爽朗地笑着，拍拍自己的肚子。「没衣服，没衣服，」他向你保证，仍然在轻笑。");
	say();
labelFunc04F1_00CD:
	UI_remove_answer("你的衣服呢？");
labelFunc04F1_00D4:
	case "Mama" attend labelFunc04F1_00F4:
	if (!var0000) goto labelFunc04F1_00E9;
	message("「真是个淑女，不是吗？」他用手肘轻推你并眨了眨眼。");
	say();
	goto labelFunc04F1_00ED;
labelFunc04F1_00E9:
	message("「嗯。Mama！我 Papa。她 Mama。我们做 zug-zug。也许有一天会做出男孩或女孩！」");
	say();
labelFunc04F1_00ED:
	UI_remove_answer("Mama");
labelFunc04F1_00F4:
	case "洞穴" attend labelFunc04F1_0152:
	if (!var0000) goto labelFunc04F1_0109;
	message("「我们爱这个洞穴。蜜蜂不会打扰我们。当牠们睡觉时，我们就去采蜜。我们在营火上烤老鼠。牠们其实还不错。你应该试试！」");
	say();
	goto labelFunc04F1_010D;
labelFunc04F1_0109:
	message("「洞穴对我们很好。我们远离蜜蜂。牠们不伤害我们。我们不伤害牠们。我们在牠们睡觉时拿蜂蜜。我们吃洞穴里的老鼠。在营火上烤来吃。非常好！」*");
	say();
labelFunc04F1_010D:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc04F1_013B;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我可能会吐。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF0F, 0x0000);
labelFunc04F1_013B:
	UI_remove_answer("洞穴");
	UI_add_answer(["蜜蜂", "蜂蜜", "老鼠"]);
labelFunc04F1_0152:
	case "蜜蜂" attend labelFunc04F1_01CE:
	if (!var0000) goto labelFunc04F1_0167;
	message("「如果你不打扰牠们，牠们就不会打扰你。」");
	say();
	goto labelFunc04F1_01C0;
labelFunc04F1_0167:
	message("「如果我们不伤害牠们，牠们很友善。」");
	say();
	if (!var0001) goto labelFunc04F1_01C0;
	message("男人看到 Tseramed 皱起眉头。他指责地指着你。「猎蜂人？」");
	say();
	if (!Func090A()) goto labelFunc04F1_0187;
	message("「走开！」男人朝你吐口水，然后转过身去。*");
	say();
	gflags[0x02D3] = true;
	abort;
	goto labelFunc04F1_01BB;
labelFunc04F1_0187:
	message("他指着 Tseramed。「他是猎蜂人！走开！」男人朝你吐口水，然后转过身去。*");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「这是在演戏，我告诉你！这些人不是野蛮人！他们是不列颠尼亚人！」*");
	say();
	UI_remove_npc_face(0xFFF6);
	if (!var0002) goto labelFunc04F1_01BB;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「他对我来说相当野蛮！」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04F1_01BB:
	gflags[0x02D3] = true;
	abort;
labelFunc04F1_01C0:
	UI_remove_answer("蜜蜂");
	UI_add_answer("友善");
labelFunc04F1_01CE:
	case "蜂蜜" attend labelFunc04F1_01E1:
	message("男人摸着肚子微笑着，舔了舔嘴唇。~~「嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯！」");
	say();
	UI_remove_answer("蜂蜜");
labelFunc04F1_01E1:
	case "老鼠" attend labelFunc04F1_01F4:
	message("男人摸着肚子，嘴里发出啧啧的声音。~~「嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯！」");
	say();
	UI_remove_answer("老鼠");
labelFunc04F1_01F4:
	case "友善" attend labelFunc04F1_021B:
	if (!var0000) goto labelFunc04F1_0209;
	message("「当然。牠们认识 Mama 和我。我们是牠们的朋友。」");
	say();
	goto labelFunc04F1_020D;
labelFunc04F1_0209:
	message("男人点点头。「牠们认识 Mama 和我。我们是蜜蜂的朋友。蜜蜂睡觉时让我们吃蜂蜜。蜜蜂醒着时不喜欢给蜂蜜。」");
	say();
labelFunc04F1_020D:
	UI_remove_answer("友善");
	UI_add_answer("Mama 和你");
labelFunc04F1_021B:
	case "Mama 和你" attend labelFunc04F1_0267:
	if (!var0000) goto labelFunc04F1_0230;
	message("「我告诉过你。我们在这里很久了。」");
	say();
	goto labelFunc04F1_0260;
labelFunc04F1_0230:
	message("「Mama 和我从小婴儿时就住在洞穴里。」");
	say();
	if (!var0002) goto labelFunc04F1_0259;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「圣者！他们一定是被遗弃在这里的！哎呀，他们一定是兄妹！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF0F, 0x0000);
labelFunc04F1_0259:
	UI_add_answer("婴儿");
labelFunc04F1_0260:
	UI_remove_answer("Mama 和你");
labelFunc04F1_0267:
	case "婴儿" attend labelFunc04F1_0287:
	message("男人点点头。「那时候我们是婴儿。」");
	say();
	UI_remove_answer("婴儿");
	if (!gflags[0x0152]) goto labelFunc04F1_0287;
	UI_add_answer("你来自 Yew 吗？");
labelFunc04F1_0287:
	case "你来自 Yew 吗？" attend labelFunc04F1_02A5:
	message("男人的眼睛睁大了，意识到你是认真的，然后翻了个白眼看着地板。~~「该死！好吧。你抓到我了。你说得对。Mama 和我来自 Yew，」男人用完美、充满智能的声音说道。然后他爽朗地大笑起来。「不过我们把你骗得团团转，不是吗！」");
	say();
	gflags[0x02D4] = true;
	UI_remove_answer("你来自 Yew 吗？");
	UI_add_answer("Yew");
labelFunc04F1_02A5:
	case "Yew" attend labelFunc04F1_02B6:
	message("「没错。我的真名是 Murray。Mama 其实是 Myrtle。我原本是镇上的一名持有完整执照的药剂师，直到不列颠尼亚税务委员会找上我。他们想把我剥个精光，所以我就把衣服都给他们了！");
	say();
	message("「从那时起，Myrtle 和我更喜欢在这里和蜜蜂一起生活。这里的生活如此……无忧无虑。我们选择与自然共存。现在，如果你不介意的话，我将与你隔离并向你告别。」*");
	say();
	abort;
labelFunc04F1_02B6:
	case "告辞" attend labelFunc04F1_02C1:
	goto labelFunc04F1_02C4;
labelFunc04F1_02C1:
	goto labelFunc04F1_0064;
labelFunc04F1_02C4:
	endconv;
	message("Papa 微笑着挥手。*");
	say();
	return;
}


