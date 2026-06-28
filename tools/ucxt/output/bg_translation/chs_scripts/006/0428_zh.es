#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0428 object#(0x428) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0428_0182;
	UI_show_npc_face(0xFFD8, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0428_003F;
	var0001 = Func08F7(0xFFCA);
	if (!var0001) goto labelFunc0428_003A;
	message("Judith 正忙着和『圣者旅团』一起表演，现在无法说话。*");
	say();
	abort;
	goto labelFunc0428_003F;
labelFunc0428_003A:
	message("「我得走了！我跟『圣者旅团』的表演要迟到了！晚点再跟你聊！」*");
	say();
	abort;
labelFunc0428_003F:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00A9])) goto labelFunc0428_0061;
	message("你看见一位眼中闪烁着音乐光芒、充满魅力的中年妇女。");
	say();
	gflags[0x00A9] = true;
	goto labelFunc0428_0065;
labelFunc0428_0061:
	message("「你好！」 Judith 说。");
	say();
labelFunc0428_0065:
	converse attend labelFunc0428_017D;
	case "姓名" attend labelFunc0428_007B:
	message("「我是 Judith 。而且我已经知道你是谁了！」");
	say();
	UI_remove_answer("姓名");
labelFunc0428_007B:
	case "职业" attend labelFunc0428_0097:
	message("「我在音乐厅教音乐。我也会通过与『圣者旅团』一起演奏来赚点外快！」");
	say();
	UI_add_answer(["音乐", "音乐厅", "圣者旅团"]);
labelFunc0428_0097:
	case "音乐" attend labelFunc0428_00B1:
	message("「音乐就是我的生命。我知道我永远不会成为一个著名的吟游诗人，但我从演奏和表演中获得了极大的乐趣。我也很享受教学。」");
	say();
	UI_remove_answer("音乐");
	UI_add_answer("教学");
labelFunc0428_00B1:
	case "音乐厅" attend labelFunc0428_00C4:
	message("「不列颠王几年前任命我为音乐老师。这是一份很棒的工作！」");
	say();
	UI_remove_answer("音乐厅");
labelFunc0428_00C4:
	case "圣者旅团" attend labelFunc0428_00D7:
	message("「我们是一个合唱团。我们每晚在蓝野猪酒馆表演。请来听我们的演出！我的学生 Neno 也在团里。如果我们能筹到资金，我们希望明年能在全国巡回演出。」");
	say();
	UI_remove_answer("圣者旅团");
labelFunc0428_00D7:
	case "教学" attend labelFunc0428_00F1:
	message("「教导他人实现了我人生的目标。这也让我有时间离开家里。」");
	say();
	UI_remove_answer("教学");
	UI_add_answer("家里");
labelFunc0428_00F1:
	case "家里" attend labelFunc0428_010B:
	message("「喔，我不想谈论我的家。我的丈夫和我……嗯，我们并非完全……幸福。」");
	say();
	UI_remove_answer("家里");
	UI_add_answer("丈夫");
labelFunc0428_010B:
	case "丈夫" attend labelFunc0428_0125:
	message("「你可能认识他。他是城镇市长 Patterson。他是个聪明诚实的人，但我们之间存在分歧。~~「我不知道我为什么要告诉你这些！」");
	say();
	UI_remove_answer("丈夫");
	UI_add_answer("分歧");
labelFunc0428_0125:
	case "分歧" attend labelFunc0428_0149:
	message("「嗯，首先，他是那个团体『友谊会』的成员。另一件事是他很少待在家里。我真不敢相信他工作那么辛苦。」");
	say();
	gflags[0x0081] = true;
	UI_remove_answer("分歧");
	UI_add_answer(["友谊会", "工作内容"]);
labelFunc0428_0149:
	case "友谊会" attend labelFunc0428_015C:
	message("「他们似乎已经接管了我们的生活。他们似乎已经接管了我们的国家！」");
	say();
	UI_remove_answer("友谊会");
labelFunc0428_015C:
	case "工作内容" attend labelFunc0428_016F:
	message("「他总是说他得工作到很晚。有些晚上他在黎明前回家。其他晚上他整夜都在外面。~~「嗯，我不能去想这件事。我只会感到难过。我必须专心于我的音乐。」");
	say();
	UI_remove_answer("工作内容");
labelFunc0428_016F:
	case "告辞" attend labelFunc0428_017A:
	goto labelFunc0428_017D;
labelFunc0428_017A:
	goto labelFunc0428_0065;
labelFunc0428_017D:
	endconv;
	message("Judith 带着微笑并挥了挥手后，回到了她的乐器旁。*");
	say();
labelFunc0428_0182:
	if (!(event == 0x0000)) goto labelFunc0428_0190;
	Func092E(0xFFD8);
labelFunc0428_0190:
	return;
}


