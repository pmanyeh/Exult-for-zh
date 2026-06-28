#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func041E object#(0x41E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc041E_0191;
	UI_show_npc_face(0xFFE2, 0x0000);
	var0000 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0001 = Func08F7(0xFFFD);
	if (!(gflags[0x006B] || var0001)) goto labelFunc041E_0043;
	UI_add_answer("Shamino");
labelFunc041E_0043:
	if (!(!gflags[0x009F])) goto labelFunc041E_0055;
	message("这位可爱的女演员穿着老鼠装。");
	say();
	gflags[0x009F] = true;
	goto labelFunc041E_0059;
labelFunc041E_0055:
	message("「嗨，你好！」 Amber 说。");
	say();
labelFunc041E_0059:
	converse attend labelFunc041E_018C;
	case "姓名" attend labelFunc041E_006F:
	message("「我是 Amber 。」");
	say();
	UI_remove_answer("姓名");
labelFunc041E_006F:
	case "职业" attend labelFunc041E_008B:
	message("「我是皇家剧院的女演员。在新戏中我扮演老鼠 Sherry 的角色。」");
	say();
	UI_add_answer(["皇家剧院", "Sherry", "戏剧"]);
labelFunc041E_008B:
	case "皇家剧院" attend labelFunc041E_00AB:
	message("「这是一个很棒的表演空间。你知道的，我把我的一生都奉献给了演戏。」");
	say();
	UI_remove_answer("皇家剧院");
	UI_add_answer(["空间", "奉献"]);
labelFunc041E_00AB:
	case "空间" attend labelFunc041E_00BE:
	message("「Raymundo 本人参与了这座剧院的设计。」");
	say();
	UI_remove_answer("空间");
labelFunc041E_00BE:
	case "奉献" attend labelFunc041E_00D1:
	message("「其实，这将是我的剧场处女作。我一直担任酒吧女侍，等待我第一次参与剧院演出的机会。」");
	say();
	UI_remove_answer("奉献");
labelFunc041E_00D1:
	case "戏剧" attend labelFunc041E_00E4:
	message("「在你我之间，我觉得这出戏烂透了。」她对你眨了眨眼。");
	say();
	UI_remove_answer("戏剧");
labelFunc041E_00E4:
	case "Sherry" attend labelFunc041E_0104:
	message("「你能想像这种胡言乱语吗？我不相信曾经有过一只叫 Sherry 的老鼠。谁听说过会说话的老鼠！尤其是这些台词！我宁愿演个女王。我得说，那对我来说合适多了。」");
	say();
	UI_remove_answer("Sherry");
	UI_add_answer(["台词", "女王"]);
labelFunc041E_0104:
	case "台词" attend labelFunc041E_0117:
	message("「我必须背诵这个名为『Hubert 令人毛骨悚然的冒险（Hubert's Hair-Raising Adventure）』的荒谬童话故事。");
	say();
	UI_remove_answer("台词");
labelFunc041E_0117:
	case "女王" attend labelFunc041E_012A:
	message("「我问了 Raymundo 这件事，他大发脾气。他说那不符合历史的准确性。哈！说得好像那有什么重要意义似的！」");
	say();
	UI_remove_answer("女王");
labelFunc041E_012A:
	case "Shamino" attend labelFunc041E_017E:
	var0001 = Func08F7(0xFFFD);
	if (!var0001) goto labelFunc041E_016B;
	message("「Poo Poo 头！」她大喊。然后她冲向他，在他的嘴上深深地吻了一下。 Shamino 脸红了，不安地挪动着双脚。*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「别在圣者面前这样，Poo！」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFE2, 0x0000);
	message("「去他的圣者！」她又吻了他一次。「圣者是最后一个能说服你安定下来的人。」");
	say();
	goto labelFunc041E_016F;
labelFunc041E_016B:
	message("「你认识我的男朋友吗？他大概正在蓝野猪酒馆（Blue Boar）借酒浇愁。这个懒骨头！我不会让他去冒险的。是时候让他安定下来了。你可以去告诉他我说的！」");
	say();
labelFunc041E_016F:
	gflags[0x006D] = true;
	gflags[0x006E] = true;
	UI_remove_answer("Shamino");
labelFunc041E_017E:
	case "告辞" attend labelFunc041E_0189:
	goto labelFunc041E_018C;
labelFunc041E_0189:
	goto labelFunc041E_0059;
labelFunc041E_018C:
	endconv;
	message("「再会！」*");
	say();
labelFunc041E_0191:
	if (!(event == 0x0000)) goto labelFunc041E_0211;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFE2));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x001D)) goto labelFunc041E_020B;
	if (!(var0003 == 0x0001)) goto labelFunc041E_01CE;
	var0004 = "@狮子 Hubert 是……@";
labelFunc041E_01CE:
	if (!(var0003 == 0x0002)) goto labelFunc041E_01DE;
	var0004 = "@我为什么要那样说？@";
labelFunc041E_01DE:
	if (!(var0003 == 0x0003)) goto labelFunc041E_01EE;
	var0004 = "@我的戏服太大了。@";
labelFunc041E_01EE:
	if (!(var0003 == 0x0004)) goto labelFunc041E_01FE;
	var0004 = "@我 -讨厌- 我的台词！@";
labelFunc041E_01FE:
	UI_item_say(0xFFE2, var0004);
	goto labelFunc041E_0211;
labelFunc041E_020B:
	Func092E(0xFFE2);
labelFunc041E_0211:
	return;
}


