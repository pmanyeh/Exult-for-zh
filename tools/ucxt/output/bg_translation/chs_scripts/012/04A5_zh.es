#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04A5 object#(0x4A5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04A5_0250;
	UI_show_npc_face(0xFF5B, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0207]) goto labelFunc04A5_0043;
	message("「我想你问了太多问题。」");
	say();
	var0002 = true;
	goto labelFunc04A5_004B;
labelFunc04A5_0043:
	message("「你看到一只用后腿站立的狐狸，直直地盯着你。」");
	say();
	gflags[0x0207] = true;
labelFunc04A5_004B:
	converse attend labelFunc04A5_024B;
	case "姓名" attend labelFunc04A5_0079:
	message("「我的名字是 Frank，诚实的虔诚追随者。」他微微鞠躬。");
	say();
	UI_remove_answer("姓名");
	if (!(!var0002)) goto labelFunc04A5_0079;
	message("「那你又是谁？」");
	say();
	UI_add_answer(["不告诉你", var0000]);
labelFunc04A5_0079:
	case var0000 attend labelFunc04A5_0092:
	message("「你告诉我是件好事。与人交往时，应该始终保持诚实。顺带一提，你的声音太沙哑了。」");
	say();
	UI_remove_answer(["不告诉你", var0000]);
labelFunc04A5_0092:
	case "不告诉你" attend labelFunc04A5_00AB:
	message("「我很遗憾看到你不够信任我而透露你的姓名。」他耸耸肩。「顺带一提，你的声音太沙哑了。」");
	say();
	UI_remove_answer(["不告诉你", var0000]);
labelFunc04A5_00AB:
	case "职业" attend labelFunc04A5_00C4:
	message("「我，」他说，「正在进行一项任务。寻找诚实的任务。」他嗅了嗅空气，然后转向你。~~「顺带一提，如果你多洗几次澡，你可能会交到更多朋友。」");
	say();
	UI_add_answer(["洗澡", "朋友"]);
labelFunc04A5_00C4:
	case "洗澡" attend labelFunc04A5_00D7:
	message("「是的，就像『洗个澡』一样。我必须通知你，你真的很臭！」");
	say();
	UI_remove_answer("洗澡");
labelFunc04A5_00D7:
	case "朋友" attend labelFunc04A5_0123:
	message("「说到你的朋友，我听说你的同伴 Dupre 是个醉鬼。」");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc04A5_0111;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「嘿，我不认为——」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0111:
	message("「是的，根据我听到的说法，当 Dupre 面对一杯，呃，任何东西时，他都毫无意志力可言。~~事实上，总的来说，你在挑选同伴的品味相当差。」");
	say();
	UI_add_answer("同伴");
	UI_remove_answer("朋友");
labelFunc04A5_0123:
	case "同伴" attend labelFunc04A5_0175:
	message("「我很高兴你问了，");
	message(var0001);
	message("。你的朋友 Iolo 卖的弓收费太高了。或许你可以找他聊聊。」");
	say();
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04A5_0163;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「太多？你是什么意思，太——」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0163:
	message("「他的弓和弩的品质根本不值他收的那些金币。」~~他退后了一步。~~「天啊！你的口气能臭死一头牛。你应该考虑好好照顾你的牙齿，否则你的同伴会离开你。」");
	say();
	UI_add_answer("牙齿");
	UI_remove_answer("同伴");
labelFunc04A5_0175:
	case "牙齿" attend labelFunc04A5_01D2:
	message("「这就是你口臭的原因。自从你的同伴 Shamino 因恐惧从战场上逃跑以来，我还没见过这么黄的东西。」");
	say();
	var0005 = Func08F7(0xFFFD);
	if (!var0005) goto labelFunc04A5_01C0;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你一定是疯了！」Shamino 转向你。「这个无赖需要被教训一顿。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF5B, 0x0000);
	message("「而你的朋友 Shamino，");
	message(var0000);
	message("，脾气相当好战。」");
	say();
	UI_add_answer("好战");
labelFunc04A5_01C0:
	message("「而且，」他停顿了一下，非常靠近地盯着你的脸，「我从没注意到你的鼻子有多大。你还能找到足够的空气呼吸真是个奇迹。」");
	say();
	UI_add_answer("鼻子");
	UI_remove_answer("牙齿");
labelFunc04A5_01D2:
	case "好战" attend labelFunc04A5_01EC:
	message("「是的，好战、好斗、愤怒。如果你不知道这一点，我相信你需要提高你的词汇量。你太缺乏教育了。」");
	say();
	UI_remove_answer("好战");
	UI_add_answer("缺乏教育");
labelFunc04A5_01EC:
	case "缺乏教育" attend labelFunc04A5_022A:
	message("「相信我，");
	message(var0001);
	message("，你太无知了，无法跟我争论。」");
	say();
	if (!var0003) goto labelFunc04A5_0223;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「喔，这太过分了！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0223:
	UI_remove_answer("缺乏教育");
labelFunc04A5_022A:
	case "鼻子" attend labelFunc04A5_023D:
	message("「真的很大，而且一点也不迷人。」");
	say();
	UI_remove_answer("鼻子");
labelFunc04A5_023D:
	case "告辞" attend labelFunc04A5_0248:
	goto labelFunc04A5_024B;
labelFunc04A5_0248:
	goto labelFunc04A5_004B;
labelFunc04A5_024B:
	endconv;
	message("「你的举止就像一头猪。这么唐突地打断对话是不礼貌的。」*");
	say();
labelFunc04A5_0250:
	if (!(event == 0x0000)) goto labelFunc04A5_0259;
	abort;
labelFunc04A5_0259:
	return;
}


