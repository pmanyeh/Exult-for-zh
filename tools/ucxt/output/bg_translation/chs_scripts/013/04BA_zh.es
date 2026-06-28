#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092F 0x92F (var var0000);

void Func04BA object#(0x4BA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04BA_023D;
	UI_show_npc_face(0xFF46, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = false;
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!(var0000 == 0x0007)) goto labelFunc04BA_0058;
	var0002 = Func08FC(0xFF46, 0xFF47);
	if (!var0002) goto labelFunc04BA_0053;
	message("「现在没时间说话。会议结束后再谈。」*");
	say();
	goto labelFunc04BA_0057;
labelFunc04BA_0053:
	message("「现在没时间说话。赶着去友谊会会议。」*");
	say();
labelFunc04BA_0057:
	abort;
labelFunc04BA_0058:
	if (!(!gflags[0x024B])) goto labelFunc04BA_006A;
	message("这位石像鬼脸上带着满足的笑容，与你握手打招呼。");
	say();
	gflags[0x024B] = true;
	goto labelFunc04BA_006E;
labelFunc04BA_006A:
	message("「表达对你归来的喜悦，」 Quaeven 说。");
	say();
labelFunc04BA_006E:
	converse attend labelFunc04BA_0238;
	case "姓名" attend labelFunc04BA_008B:
	message("「叫做 Quaeven ，人类。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Quaeven");
labelFunc04BA_008B:
	case "Quaeven" attend labelFunc04BA_009E:
	message("「意思是『发现问题者』。观察敏锐。");
	say();
	UI_remove_answer("Quaeven");
labelFunc04BA_009E:
	case "职业" attend labelFunc04BA_00B7:
	message("「是娱乐设施与学习中心的主管。负责掌管对石像鬼种族非常有价值的信息。」");
	say();
	UI_add_answer(["娱乐设施", "学习中心"]);
labelFunc04BA_00B7:
	case "娱乐设施" attend labelFunc04BA_00CA:
	message("「是个让石像鬼锻炼肌肉的好地方。有许多可用的资源，包含可以用来练习拳击和战斗技巧的沙包。」");
	say();
	UI_remove_answer("娱乐设施");
labelFunc04BA_00CA:
	case "学习中心" attend labelFunc04BA_00DD:
	message("「和娱乐中心位于同一栋建筑里。提供极佳的氛围来强化石像鬼的心智。有大量的书籍和教育数据。」");
	say();
	UI_remove_answer("学习中心");
labelFunc04BA_00DD:
	case "友谊会" attend labelFunc04BA_0120:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04BA_0100;
	message("「也是一位成员。」他举起他的奖章。「我需要友谊会才能变得快乐。」");
	say();
	UI_add_answer("需要友谊会");
	goto labelFunc04BA_0119;
labelFunc04BA_0100:
	message("「想了解组织还是教义？」");
	say();
	UI_add_answer("组织");
	if (!(!var0001)) goto labelFunc04BA_0119;
	UI_add_answer("教义");
labelFunc04BA_0119:
	UI_remove_answer("友谊会");
labelFunc04BA_0120:
	case "组织" attend labelFunc04BA_013A:
	message("「是一群努力达到石像鬼最高潜能的精神追求者。与所有石像鬼和人类分享。」");
	say();
	UI_add_answer("分享");
	UI_remove_answer("组织");
labelFunc04BA_013A:
	case "分享" attend labelFunc04BA_0162:
	message("「分享教义与物质福祉。」");
	say();
	UI_add_answer("物质幸福");
	if (!(!var0001)) goto labelFunc04BA_015B;
	UI_add_answer("教义");
labelFunc04BA_015B:
	UI_remove_answer("分享");
labelFunc04BA_0162:
	case "物质幸福" attend labelFunc04BA_017C:
	message("「在财务和个人层面上支持 Paws 的救济院。在不列颠尼亚举办宴会和节庆来提振士气。是所有石像鬼和人类都非常需要的团体。我自己也需要友谊会！」");
	say();
	UI_add_answer("需要友谊会");
	UI_remove_answer("物质幸福");
labelFunc04BA_017C:
	case "教义" attend labelFunc04BA_019A:
	message("「通过内在力量的三位一体 (Triad of Inner Strength) 应用乐观的思考秩序。」");
	say();
	UI_add_answer("三位一体 (Triad)");
	var0001 = true;
	UI_remove_answer("教义");
labelFunc04BA_019A:
	case "三位一体 (Triad)" attend labelFunc04BA_01AD:
	message("「就是努力团结、信任你的兄弟，以及善有善报这三个概念。」");
	say();
	UI_remove_answer("三位一体 (Triad)");
labelFunc04BA_01AD:
	case "需要友谊会" attend labelFunc04BA_01CD:
	message("「在加入友谊会之前过着悲惨的生活。曾被许多人伤害、忽视和虐待。~~现在在我的新生活中很快乐，并且希望很快就能听见那个声音。」他的眼睛因兴奋而睁大。「希望能很快为另一个人的生活带来幸福。」");
	say();
	UI_add_answer(["声音", "另一个人"]);
	UI_remove_answer("需要友谊会");
labelFunc04BA_01CD:
	case "声音" attend labelFunc04BA_01E0:
	message("「是一个能帮助我做选择的好声音，还能帮助我在海盗巢穴 (Buccaneer's Den)赢钱。」");
	say();
	UI_remove_answer("声音");
labelFunc04BA_01E0:
	case "另一个人" attend labelFunc04BA_0204:
	message("他兴奋地继续说。~~「正在处理我的第一个转化者。知道我将带来喜悦和幸福。感到满足与快乐。」");
	say();
	gflags[0x023E] = true;
	UI_add_answer(["职业", "转变"]);
	UI_remove_answer("另一个人");
labelFunc04BA_0204:
	case "职业" attend labelFunc04BA_0217:
	message("「还需要再稍微说服一下，」他低着头，「但几乎准备好要加入了！」");
	say();
	UI_remove_answer("职业");
labelFunc04BA_0217:
	case "转变" attend labelFunc04BA_022A:
	message("「是物资商人 Betra 。有信心他很快就会加入。」");
	say();
	UI_remove_answer("转变");
labelFunc04BA_022A:
	case "告辞" attend labelFunc04BA_0235:
	goto labelFunc04BA_0238;
labelFunc04BA_0235:
	goto labelFunc04BA_006E;
labelFunc04BA_0238:
	endconv;
	message("「希望你健康快乐。」*");
	say();
labelFunc04BA_023D:
	if (!(event == 0x0000)) goto labelFunc04BA_024B;
	Func092F(0xFF46);
labelFunc04BA_024B:
	return;
}


