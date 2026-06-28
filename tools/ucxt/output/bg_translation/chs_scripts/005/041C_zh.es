#game "blackgate"
// externs
extern void Func092E 0x92E (var var0000);

void Func041C object#(0x41C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc041C_0159;
	var0000 = UI_is_pc_female();
	if (!var0000) goto labelFunc041C_0022;
	UI_show_npc_face(0xFFE4, 0x0001);
	goto labelFunc041C_002C;
labelFunc041C_0022:
	UI_show_npc_face(0xFFE4, 0x0000);
labelFunc041C_002C:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x009D])) goto labelFunc041C_0058;
	message("这是一位高瘦、膝盖骨节突出的男演员。");
	say();
	if (!var0000) goto labelFunc041C_0051;
	message("他戴着女用假发，穿着女装。");
	say();
labelFunc041C_0051:
	gflags[0x009D] = true;
	goto labelFunc041C_0077;
labelFunc041C_0058:
	if (!var0000) goto labelFunc041C_0067;
	var0001 = " 他用假音说。";
	goto labelFunc041C_006D;
labelFunc041C_0067:
	var0001 = "";
labelFunc041C_006D:
	message("Jesse 清了清喉咙。「哈啰，又见面了！」");
	message(var0001);
	message("");
	say();
labelFunc041C_0077:
	converse attend labelFunc041C_0154;
	case "姓名" attend labelFunc041C_00A1:
	if (!var0000) goto labelFunc041C_008C;
	message("男演员用假音说话。");
	say();
labelFunc041C_008C:
	message("「我是 Jesse ，我是一颗~~闪亮~~的~~明星。」");
	say();
	UI_remove_answer("姓名");
	if (!var0000) goto labelFunc041C_00A1;
	message("他拍了拍自己的脸，用正常的声音说：「哎呀，抱歉！我太入戏了，有时会忘记我不是女人！」");
	say();
labelFunc041C_00A1:
	case "职业" attend labelFunc041C_00BA:
	message("「我在皇家剧院当演员。我在我的职业生涯中扮演过 -所有- 伟大的角色。我现在有机会扮演一生难得的角色——圣者！」");
	say();
	UI_add_answer(["皇家剧院", "圣者"]);
labelFunc041C_00BA:
	case "皇家剧院" attend labelFunc041C_00DA:
	message("「因为它必须迎合大众，我们从来没有机会做实验性作品——只有传统平庸的大杂烩。但这是一个很棒的空间，而且音响效果极佳。」");
	say();
	UI_add_answer(["大众", "实验性作品"]);
	UI_remove_answer("皇家剧院");
labelFunc041C_00DA:
	case "大众" attend labelFunc041C_00ED:
	message("「人们喜欢看英雄冒险的故事，穿着盔甲的骑士、美丽的公主、明智的国王、巫师、邪恶的怪物。全是那一套。」");
	say();
	UI_remove_answer("大众");
labelFunc041C_00ED:
	case "圣者" attend labelFunc041C_010D:
	message("「这个角色极具挑战性。我有过多的台词，而且我必须和训练员一起工作好几周，为所需的大量活动做准备。这个角色会让『Jesse』家喻户晓！」");
	say();
	UI_add_answer(["具挑战性", "台词"]);
	UI_remove_answer("圣者");
labelFunc041C_010D:
	case "具挑战性" attend labelFunc041C_0120:
	message("「这绝对是史上构思过最具野心的戏剧制作。有超过一百个小时的演出时间。对观众来说那是一段很长的时间。」");
	say();
	UI_remove_answer("具挑战性");
labelFunc041C_0120:
	case "台词" attend labelFunc041C_0133:
	message("「我最重要的台词是：~~『姓名！』~~『职业！』~~『告辞！』」");
	say();
	UI_remove_answer("台词");
labelFunc041C_0133:
	case "实验性作品" attend labelFunc041C_0146:
	message("「我最喜欢的作品是 Raymundo 为我写的，名为『遮阴布上的三个（Three on a Codpiece）』。我站在舞台上，邀请观众加入我，把一件内衣撕成碎片，然后将它们放入骨灰坛中并与小麦糊混合。是布料的碎片，不是观众。然后观众可以把这些碎片黏在我身上他们想要的任何地方。」");
	say();
	UI_remove_answer("实验性作品");
labelFunc041C_0146:
	case "告辞" attend labelFunc041C_0151:
	goto labelFunc041C_0154;
labelFunc041C_0151:
	goto labelFunc041C_0077;
labelFunc041C_0154:
	endconv;
	message("「再见。开演时一定要来看戏喔！」*");
	say();
labelFunc041C_0159:
	if (!(event == 0x0000)) goto labelFunc041C_01E0;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFE4));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x001D)) goto labelFunc041C_01DA;
	if (!(var0004 == 0x0001)) goto labelFunc041C_019D;
	var0005 = "@姓名!@";
labelFunc041C_019D:
	if (!(var0004 == 0x0002)) goto labelFunc041C_01AD;
	var0005 = "@职业!@";
labelFunc041C_01AD:
	if (!(var0004 == 0x0003)) goto labelFunc041C_01BD;
	var0005 = "@是！呃，我的意思是...不！@";
labelFunc041C_01BD:
	if (!(var0004 == 0x0004)) goto labelFunc041C_01CD;
	var0005 = "@告辞！@";
labelFunc041C_01CD:
	UI_item_say(0xFFE4, var0005);
	goto labelFunc041C_01E0;
labelFunc041C_01DA:
	Func092E(0xFFE4);
labelFunc041C_01E0:
	return;
}


