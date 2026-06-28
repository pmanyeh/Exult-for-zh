#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func0498 object#(0x498) ()
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

	if (!(event == 0x0001)) goto labelFunc0498_02EE;
	UI_show_npc_face(0xFF68, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0003 = UI_is_pc_female();
	if (!(!gflags[0x01FA])) goto labelFunc0498_004B;
	message("你看到一位用冰冷目光迎接你视线的女人。");
	say();
	gflags[0x01FA] = true;
	goto labelFunc0498_0069;
labelFunc0498_004B:
	message("「你现在需要什么？」");
	say();
	if (!gflags[0x01DB]) goto labelFunc0498_005C;
	UI_add_answer("Brion 的感觉");
labelFunc0498_005C:
	if (!gflags[0x01DC]) goto labelFunc0498_0069;
	UI_add_answer("Nelson 的感觉");
labelFunc0498_0069:
	converse attend labelFunc0498_02E9;
	case "姓名" attend labelFunc0498_0099:
	message("「我是 Zelda 。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x01DB]) goto labelFunc0498_008C;
	UI_add_answer("Brion 的感觉");
labelFunc0498_008C:
	if (!gflags[0x01DC]) goto labelFunc0498_0099;
	UI_add_answer("Nelson 的感觉");
labelFunc0498_0099:
	case "职业" attend labelFunc0498_00BF:
	message("「我是露加翁 (Lycaeum) 的顾问。」");
	say();
	UI_add_answer(["Lycaeum", "顾问"]);
	if (!gflags[0x01F6]) goto labelFunc0498_00BF;
	UI_add_answer("东北海");
labelFunc0498_00BF:
	case "Lycaeum" attend labelFunc0498_00D2:
	message("她翻了个白眼。「露加翁就是你现在站的这栋建筑。它是一座伟大的图书馆，旨在收藏丰富的知识。虽然在过去的两百年间建筑结构有些改变，但学习的本质并没有变。」");
	say();
	UI_remove_answer("Lycaeum");
labelFunc0498_00D2:
	case "顾问" attend labelFunc0498_00F2:
	message("「是的，」她说。「我的工作是管理和规范露加翁的活动。而且，」她补充道，「为月光城 (Moonglow) 的人们提供协助——当他们需要的时候！」");
	say();
	UI_remove_answer("顾问");
	UI_add_answer(["活动", "镇民"]);
labelFunc0498_00F2:
	case "活动" attend labelFunc0498_0113:
	message("「我负责维护阅读区并引进新书。此外，我还帮忙为 Jillian 的辅导课程组织特殊的小组活动，并设立教育娱乐项目。」");
	say();
	UI_remove_answer("活动");
	if (!(!var0002)) goto labelFunc0498_0113;
	UI_add_answer("Jillian");
labelFunc0498_0113:
	case "东北海" attend labelFunc0498_0126:
	message("「我没时间回答这些琐碎的地理问题。去查地图集！」");
	say();
	UI_remove_answer("东北海");
labelFunc0498_0126:
	case "镇民" attend labelFunc0498_015A:
	message("「我没什么时间处理这个，」她叹了口气。「我只跟露加翁的负责人 (Lycaeum head) 和他的双胞胎兄弟 Brion 比较熟。训练师 (trainer) 也在这间露加翁里学习。」她擡头看着天花板，仿佛在读一份隐形悬在半空中的清单。~~「你已经知道 Penumbra 了。 Mariah 也在这里。如果你想了解友谊会 的成员，去问那边的书记员。否则，」她冷冷地看着你，「让我回到我的工作上。」她事后又补充了一句：「还有，降低你的音量。大家正在努力阅读。」");
	say();
	UI_add_answer(["Mariah", "Lycaeum 负责人", "Brion", "Penumbra"]);
	if (!(!var0002)) goto labelFunc0498_0153;
	UI_add_answer("训练师");
labelFunc0498_0153:
	UI_remove_answer("镇民");
labelFunc0498_015A:
	case "Mariah" attend labelFunc0498_016D:
	message("「嗯，他们说她曾经是个熟练的法师，但我看到的只是一个到处游荡、称赞家具的女人。如果你想的话可以和她说话，但我怀疑你能听懂她在说什么。还有，找她的时候别把书架弄乱了！」");
	say();
	UI_remove_answer("Mariah");
labelFunc0498_016D:
	case "Jillian", "训练师" attend labelFunc0498_0194:
	message("「Jillian ？她非常守规矩。而且安静又整洁。我相信她是一位优秀的学者。如果你要去找她，尽量不要弄翻任何书架。刚到了一些新书，我还没把它们全部摆好。」");
	say();
	UI_remove_answer(["Jillian", "训练师"]);
	var0002 = true;
	UI_add_answer("新书");
labelFunc0498_0194:
	case "新书" attend labelFunc0498_01AE:
	message("「是的，它们是不久前到达的，其中包括最近重新发现的 DeMaria 和 Spector 的著作《圣者历险记 (The Avatar Adventures) 》。如果你能避免制造太多干扰，我推荐你阅读。」");
	say();
	UI_remove_answer("新书");
	UI_add_answer("圣者历险记 (Avatar Adventures)");
labelFunc0498_01AE:
	case "圣者历险记 (Avatar Adventures)" attend labelFunc0498_01EE:
	message("「如果我告诉你这最后一件事，你会离开好让我回去工作吗？」");
	say();
	if (!var0003) goto labelFunc0498_01C9;
	var0004 = "她";
	goto labelFunc0498_01CF;
labelFunc0498_01C9:
	var0004 = "他";
labelFunc0498_01CF:
	var0005 = Func090A();
	if (!var0005) goto labelFunc0498_01E9;
	message("「我们在地下室的深处发现了这本巨著。我们无法证实其内容的准确性，但已经注意到这部作品中的事件与不列颠尼亚最近历史中的事件有许多相似之处。~~「这本书是圣者日记的副本，大约写于两百年前，也就是");
	message(var0004);
	message("最近一次造访不列颠尼亚的期间。当然，」她讽刺地笑着，「它已经被其他人加上了注解。~~「最近出版是为了给予大众更多的勇气和信心。~~「现在，再见了。」");
	say();
	abort;
	goto labelFunc0498_01EE;
labelFunc0498_01E9:
	message("「很好。」");
	say();
	abort;
labelFunc0498_01EE:
	case "Penumbra" attend labelFunc0498_021C:
	if (!var0003) goto labelFunc0498_0205;
	var0006 = "她";
	goto labelFunc0498_020B;
labelFunc0498_0205:
	var0006 = "他";
labelFunc0498_020B:
	message("她摇了摇头，咕哝着：「为什么");
	message(var0006);
	message("要这样浪费我的时间？」她重新擡头看着你说：「Penumbra 是那位在两个世纪前让自己沉睡的圣人。传闻只有圣者才能唤醒她。」");
	say();
	UI_remove_answer("Penumbra");
labelFunc0498_021C:
	case "Lycaeum 负责人" attend labelFunc0498_022F:
	message("「Nelson 非常能干，虽然有点古怪。我真希望他能克制一下，不要向每个进入这栋建筑的人炫耀他收集的小玩意。这总是会引起一阵骚动。」");
	say();
	UI_remove_answer("Lycaeum 负责人");
labelFunc0498_022F:
	case "Brion" attend labelFunc0498_0290:
	message("她冰冷的表情融化了。「Brion ，」她笑着说，「非常开明且理想主义。他对天文学 (heavens) 非常了解。」她擡起头来强调『天文学』。「我觉得他非常有吸引力。但是，我不知道该如何传达我的心意。」她害羞地转过头去。~~「除非，或许，");
	message(var0001);
	message("愿意帮我？」她满怀希望地问。「你同意替我告诉他吗，");
	message(var0001);
	message("？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0498_0280;
	message("「谢谢你，");
	message(var0001);
	message("。谢谢你。」她脸红了。");
	say();
	var0008 = UI_add_party_items(0x0001, 0x0154, 0xFE99, 0x0006, 0x0000);
	if (!var0008) goto labelFunc0498_027D;
	message("「为了报答你的好意，我给你这瓶白色的药水，这是我有一次在整理地下室时发现的。」");
	say();
labelFunc0498_027D:
	goto labelFunc0498_0285;
labelFunc0498_0280:
	message("她冰冷的目光又回来了。「很好。」*");
	say();
	abort;
labelFunc0498_0285:
	gflags[0x01DA] = true;
	UI_remove_answer("Brion");
labelFunc0498_0290:
	case "Brion 的感觉" attend labelFunc0498_029D:
	message("她低头看了一会儿。「我就知道。」当她擡起头时，眼里闪烁着泪光。「我感谢你的尝试。」*");
	say();
	abort;
labelFunc0498_029D:
	case "Nelson 的感觉" attend labelFunc0498_02C8:
	message("「Nelson ？我从来没真正想过他。」她耸了耸肩。「嗯，我想他也不失为一个次佳的选择。我会试试看的，」她笑着说。");
	say();
	gflags[0x01E3] = true;
	Func0911(0x0014);
	UI_remove_answer("Nelson 的感觉");
	if (!(!gflags[0x01DA])) goto labelFunc0498_02C8;
	UI_add_answer("次佳选择？");
labelFunc0498_02C8:
	case "次佳选择？" attend labelFunc0498_02DB:
	message("「嗯，我觉得他的兄弟 Brion 相当有吸引力。」");
	say();
	UI_remove_answer("次佳选择？");
labelFunc0498_02DB:
	case "告辞" attend labelFunc0498_02E6:
	goto labelFunc0498_02E9;
labelFunc0498_02E6:
	goto labelFunc0498_0069;
labelFunc0498_02E9:
	endconv;
	message("「祝你有个美好的一天。」*");
	say();
labelFunc0498_02EE:
	if (!(event == 0x0000)) goto labelFunc0498_02F7;
	abort;
labelFunc0498_02F7:
	return;
}


