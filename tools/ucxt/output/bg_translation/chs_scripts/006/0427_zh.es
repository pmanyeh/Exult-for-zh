#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0427 object#(0x427) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0427_0101;
	UI_show_npc_face(0xFFD9, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0427_003F;
	var0001 = Func08F7(0xFFCA);
	if (!var0001) goto labelFunc0427_003A;
	message("Neno 正忙着和『圣者旅团』一起表演，现在无法说话。*");
	say();
	abort;
	goto labelFunc0427_003F;
labelFunc0427_003A:
	message("「我必须赶去蓝野猪酒馆 (Blue Boar) 表演！『圣者旅团』今晚要演出！」*");
	say();
	abort;
labelFunc0427_003F:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00A8])) goto labelFunc0427_0061;
	message("你看见一位英俊且打扮浮夸的音乐家。");
	say();
	gflags[0x00A8] = true;
	goto labelFunc0427_0065;
labelFunc0427_0061:
	message("「你好，」 Neno 说。");
	say();
labelFunc0427_0065:
	converse attend labelFunc0427_00FC;
	case "姓名" attend labelFunc0427_007B:
	message("音乐家向你点点头。「我是 Neno 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0427_007B:
	case "职业" attend labelFunc0427_0094:
	message("「我正在学习成为不列颠尼亚有史以来最伟大的吟游诗人。我可能 -已经- 是不列颠尼亚有史以来最伟大的吟游诗人了。」你注意到 Neno 一点也不谦虚。");
	say();
	UI_add_answer(["吟游诗人", "学习"]);
labelFunc0427_0094:
	case "吟游诗人" attend labelFunc0427_00AE:
	message("「成为一名吟游诗人是莫大的荣誉。你带给其他人快乐，同时也满足了自己内心的创作欲望。这真的很神奇。我是从我在『圣者旅团』演奏的经验中知道这点的。」");
	say();
	UI_remove_answer("吟游诗人");
	UI_add_answer("圣者旅团");
labelFunc0427_00AE:
	case "学习" attend labelFunc0427_00C8:
	message("「音乐厅提供了极佳的学习环境。 Judith 是位很棒的老师，而且这里的机会都是最高品质的。总有一天我会环游世界，娱乐平民和贵族。」");
	say();
	UI_remove_answer("学习");
	UI_add_answer("娱乐");
labelFunc0427_00C8:
	case "娱乐" attend labelFunc0427_00DB:
	message("「我的梦想是名扬四海。我会每年在全国巡回演出，并在每个城镇最大的酒馆表演。」他向你眨眼。「我一定能迷倒女人们，你不觉得吗？」");
	say();
	UI_remove_answer("娱乐");
labelFunc0427_00DB:
	case "圣者旅团" attend labelFunc0427_00EE:
	message("「这是一个我参与演出的合唱团。我们每晚在蓝野猪酒馆表演。请来听我们演出。」 Neno 凑近耳语，「但我打算很快就开始独唱。我显然是这四重唱里最有才华的成员。」");
	say();
	UI_remove_answer("圣者旅团");
labelFunc0427_00EE:
	case "告辞" attend labelFunc0427_00F9:
	goto labelFunc0427_00FC;
labelFunc0427_00F9:
	goto labelFunc0427_0065;
labelFunc0427_00FC:
	endconv;
	message("「再会！你一定要留意我们演出日期的公告喔！」*");
	say();
labelFunc0427_0101:
	if (!(event == 0x0000)) goto labelFunc0427_010F;
	Func092E(0xFFD9);
labelFunc0427_010F:
	return;
}


