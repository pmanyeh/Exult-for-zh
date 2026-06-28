#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04D6 object#(0x4D6) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04D6_0151;
	UI_show_npc_face(0xFF2A, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0000 = Func08F7(0xFF2B);
	if (!var0000) goto labelFunc04D6_0038;
	UI_add_answer("女孩");
labelFunc04D6_0038:
	if (!(!gflags[0x0293])) goto labelFunc04D6_004A;
	message("你看到一只非常巨大、强壮的无翼石像鬼。");
	say();
	gflags[0x0293] = true;
	goto labelFunc04D6_004E;
labelFunc04D6_004A:
	message("「祝你日安，人类，」 For-Lem 说。");
	say();
labelFunc04D6_004E:
	converse attend labelFunc04D6_014C;
	case "姓名" attend labelFunc04D6_006B:
	message("「回答叫 For-Lem 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("For-Lem");
labelFunc04D6_006B:
	case "For-Lem" attend labelFunc04D6_007E:
	message("「意思是『强壮之人 (strong one) 』。」");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D6_007E:
	case "职业" attend labelFunc04D6_0097:
	message("「为别人做零工。也以书面形式记录石像鬼的传说。」");
	say();
	UI_add_answer(["其他", "传说"]);
labelFunc04D6_0097:
	case "其他" attend labelFunc04D6_00B1:
	message("「与 Lap-Lem 是朋友，并知道他是个好矿工。也认识 Ansikart ，在这个动荡的时代提醒我们奇点 (Singularity) 的存在。」");
	say();
	UI_add_answer("动荡时代");
	UI_remove_answer("其他");
labelFunc04D6_00B1:
	case "动荡时代" attend labelFunc04D6_00C4:
	message("「对人类感到愤怒。受到恶劣和轻蔑的对待。但不知道为什么，」他耸耸肩。");
	say();
	UI_remove_answer("动荡时代");
labelFunc04D6_00C4:
	case "传说" attend labelFunc04D6_00E4:
	message("「有许多关于我们种族的有趣故事。正在把它们写下来给后代子孙。」");
	say();
	UI_remove_answer("传说");
	UI_add_answer(["故事", "后代"]);
labelFunc04D6_00E4:
	case "故事" attend labelFunc04D6_00F7:
	message("「有许多圣者 与我们种族相遇前激动人心的神话。与人类分享英雄的概念，但我们有着来自自己历史的不同的英雄。」");
	say();
	UI_remove_answer("故事");
labelFunc04D6_00F7:
	case "后代" attend labelFunc04D6_010A:
	message("「为石像鬼青年的未来感到担忧。告诉你他们对自己的传统知之甚少。觉得教导他们以及他们后代的习俗与历史是很重要的。」");
	say();
	UI_remove_answer("后代");
labelFunc04D6_010A:
	case "女孩" attend labelFunc04D6_013E:
	message("担忧的神情迅速出现在他的脸上。~~「是谈论人类女孩 Catherine 吗？对她没有恶意。」他伸出双手。~~「只在白天为她读石像鬼神话。是她要求的！」他的眼睛睁大了。~~「要求你不要告诉她的父母，因为他们会惩罚她。」他看起来充满希望。「不说出去，同意吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D6_0129;
	message("「做出了正确的决定。」他看起来松了一口气。「感谢你，人类。」他笑了。");
	say();
	goto labelFunc04D6_012D;
labelFunc04D6_0129:
	message("「犯了一个错误。」他显得很失望。「让那女孩因为我而受罚。」他摇摇头。~~「感到有责任。非常难过。」");
	say();
labelFunc04D6_012D:
	Func0911(0x0032);
	gflags[0x027D] = true;
	UI_remove_answer("女孩");
labelFunc04D6_013E:
	case "告辞" attend labelFunc04D6_0149:
	goto labelFunc04D6_014C;
labelFunc04D6_0149:
	goto labelFunc04D6_004E;
labelFunc04D6_014C:
	endconv;
	message("「对你说再见，人类。」*");
	say();
labelFunc04D6_0151:
	if (!(event == 0x0000)) goto labelFunc04D6_015F;
	Func092F(0xFF2A);
labelFunc04D6_015F:
	return;
}


