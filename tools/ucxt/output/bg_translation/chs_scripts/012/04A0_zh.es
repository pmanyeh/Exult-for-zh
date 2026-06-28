#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04A0 object#(0x4A0) ()
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

	if (!(event == 0x0001)) goto labelFunc04A0_01FB;
	UI_show_npc_face(0xFF60, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "圣者";
	var0003 = UI_is_pc_female();
	var0004 = false;
	var0005 = Func08F7(0xFF61);
	if (!var0003) goto labelFunc04A0_004D;
	var0006 = "女人";
	var0007 = "她";
	goto labelFunc04A0_0059;
labelFunc04A0_004D:
	var0006 = "男人";
	var0007 = "他";
labelFunc04A0_0059:
	if (!gflags[0x01F4]) goto labelFunc04A0_0068;
	var0008 = var0000;
	goto labelFunc04A0_006E;
labelFunc04A0_0068:
	var0008 = var0001;
labelFunc04A0_006E:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0202])) goto labelFunc04A0_0090;
	message("「你看到一个脸上带着苦瓜脸的男人正抱着一个男婴。当他看到你时，他的脸色亮了起来。」");
	say();
	gflags[0x0202] = true;
	goto labelFunc04A0_009A;
labelFunc04A0_0090:
	message("「又见面了，");
	message(var0008);
	message("。我像往常一样在这里照顾小 Mikhail。」Effrem 皱了皱眉头。");
	say();
labelFunc04A0_009A:
	converse attend labelFunc04A0_01E2;
	case "姓名" attend labelFunc04A0_012C:
	message("「我是 Effrem，");
	message(var0001);
	message("。我只是 Moonglow 的一个普通居民。」");
	say();
	if (!(!gflags[0x01F4])) goto labelFunc04A0_0118;
	message("「你叫什么名字？」");
	say();
	var0009 = Func090B([var0000, var0002, var0001]);
	if (!(var0009 == var0000)) goto labelFunc04A0_00EA;
	message("「你好，");
	message(var0000);
	message("。」他转向婴儿。~~「跟 ");
	message(var0000);
	message(" 说『你好』，Mikhail。」");
	say();
	gflags[0x01F4] = true;
labelFunc04A0_00EA:
	if (!(var0009 == var0001)) goto labelFunc04A0_010A;
	message("「好吧，");
	message(var0001);
	message("，如果你想被这样称呼的话。」他看着婴儿。「这个");
	message(var0006);
	message("真是个势利眼，不是吗，Mikhail？」");
	say();
labelFunc04A0_010A:
	if (!(var0009 == var0002)) goto labelFunc04A0_0118;
	message("「啊哈，圣者，你是这么说的。随你怎么想……」他转向婴儿。~~「这个可怜人想当圣者。可惜圣者只有一个，对吧 Mikhail？」");
	say();
labelFunc04A0_0118:
	UI_add_answer(["Mikhail", "Moonglow"]);
	UI_remove_answer("姓名");
labelFunc04A0_012C:
	case "职业" attend labelFunc04A0_0146:
	message("「我？我没有职业。没有像我妻子那样真正的职业。我整天做的就是照顾我的小 Mikhail。」他转过头看着婴儿，用一种居高临下的语气说。「是的，我在照顾你，不是吗？是的，没错。我当然在照顾你。」他亲了亲男孩，然后擡头看着你，感到有些尴尬。~~「我刚说到哪了？哦，对了。我整天都在照顾这孩子。我应该出去工作，而不是待在家里。那应该是 Jillian 的工作。她才属于家里，而不是我。」");
	say();
	if (!(!var0004)) goto labelFunc04A0_0146;
	UI_add_answer("Jillian");
labelFunc04A0_0146:
	case "Mikhail" attend labelFunc04A0_0159:
	message("\"That is the name of my son. 'Tis a good name, yes?\"");
	say();
	UI_remove_answer("Mikhail");
labelFunc04A0_0159:
	case "妻子", "Jillian" attend labelFunc04A0_01A8:
	message("「我妻子？Jillian？她是个学者。而且是个非常优秀的学者。虽然我也不差。我可以做得更好，事实上。但现在争论这个没有意义。她有她的职业，即使我没有。不过，我应该找份工作的。你不同意吗，");
	message(var0001);
	message("？这不是一个男人该做的事。像这样待在家里带孩子。简直是耻辱！」~~他开始抚摸婴儿头上的一小撮头发。*");
	say();
	if (!var0005) goto labelFunc04A0_0197;
	UI_show_npc_face(0xFF61, 0x0000);
	message("「好了，Effrem！你很清楚小 Mikhail 出生时我们是怎么约定的。你应该感到羞耻，说这种胡话。」*");
	say();
	UI_remove_npc_face(0xFF61);
	UI_show_npc_face(0xFF60, 0x0000);
	message("「他耸了耸肩，看起来相当难为情。」");
	say();
labelFunc04A0_0197:
	UI_remove_answer(["妻子", "Jillian"]);
	var0004 = true;
labelFunc04A0_01A8:
	case "Moonglow" attend labelFunc04A0_01D4:
	message("「Moonglow 怎么了？」他耸了耸肩，「这是一个美丽的城镇，但最近有点太拥挤了。我听说在 Moonglow 和 Lycaeum 分开之前，这里曾经是个好得多、也小得多的地方。~~「这个地方太大了，根本无法真正认识任何人。不过我也没有太多机会，因为我得待在家里照顾儿子。」他低头看着男孩，笑了笑，并搔了搔婴儿的鼻子。");
	say();
	if (!(!var0005)) goto labelFunc04A0_01BF;
	message("「这不是男人该做的工作。我妻子应该在家陪孩子，而不是我。我应该出去赚钱养家。那才是我想做的事！」");
	say();
labelFunc04A0_01BF:
	if (!(!var0004)) goto labelFunc04A0_01CD;
	UI_add_answer("妻子");
labelFunc04A0_01CD:
	UI_remove_answer("Moonglow");
labelFunc04A0_01D4:
	case "告辞" attend labelFunc04A0_01DF:
	goto labelFunc04A0_01E2;
labelFunc04A0_01DF:
	goto labelFunc04A0_009A;
labelFunc04A0_01E2:
	endconv;
	if (!UI_is_pc_female()) goto labelFunc04A0_01F1;
	message("「这么快就要走了？好吧，留下我跟宝宝。走吧，离开我。就像我妻子一样！」*");
	say();
	goto labelFunc04A0_01FB;
labelFunc04A0_01F1:
	message("「这么快就要走了？啊，没关系，");
	message(var0001);
	message("。我理解，你还有『真正的男人』该做的事。」*");
	say();
labelFunc04A0_01FB:
	if (!(event == 0x0000)) goto labelFunc04A0_0209;
	Func092E(0xFF60);
labelFunc04A0_0209:
	return;
}


