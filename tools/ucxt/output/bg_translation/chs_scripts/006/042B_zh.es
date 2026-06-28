#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func042B object#(0x42B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc042B_02F0;
	UI_show_npc_face(0xFFD5, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc042B_0052;
	var0001 = Func08FC(0xFFD5, 0xFFE6);
	if (!var0001) goto labelFunc042B_003D;
	message("Patterson 正专心参与友谊会聚会，不想说话。*");
	say();
	abort;
	goto labelFunc042B_0052;
labelFunc042B_003D:
	if (!gflags[0x00DA]) goto labelFunc042B_004D;
	message("「我想知道巴特林在哪里！错过聚会可不像他的作风。」");
	say();
	goto labelFunc042B_0052;
	goto labelFunc042B_0052;
labelFunc042B_004D:
	message("「我现在不能停下来说话。我去参加友谊会聚会要迟到了！」*");
	say();
	abort;
labelFunc042B_0052:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0080]) goto labelFunc042B_006F;
	UI_add_answer("Candice");
labelFunc042B_006F:
	if (!gflags[0x00D1]) goto labelFunc042B_007C;
	UI_add_answer("尸体");
labelFunc042B_007C:
	if (!(!gflags[0x00AC])) goto labelFunc042B_0092;
	message("你看见一位四十多岁的贵族，看起来像个政治家或衣着考究的商人。");
	say();
	message("「圣者！我刚刚得知你来到了我们美丽的城市！我一直期待着你！」");
	say();
	gflags[0x00AC] = true;
	goto labelFunc042B_010D;
labelFunc042B_0092:
	if (!((var0000 == 0x0000) || ((var0000 == 0x0001) || (var0000 == 0x0002)))) goto labelFunc042B_0109;
	var0002 = Func08F7(0xFFD7);
	var0003 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc042B_0102;
	message("「圣者！呃，嗯，你好吗？喔，你认识 Candice 吗，皇家博物馆的馆长？她是友谊会的『弟兄』。我，呃，只是护送她回家！」");
	say();
	if (!var0003) goto labelFunc042B_00E6;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「嗯。那你的妻子知道你护送 Candice 回家吗？」");
	say();
	UI_remove_npc_face(0xFFFF);
	goto labelFunc042B_00EA;
labelFunc042B_00E6:
	message("你问 Judith 是否知道这件事。");
	say();
labelFunc042B_00EA:
	UI_show_npc_face(0xFFD5, 0x0000);
	message("「哎呀，她不需要知道！这不重要！真的没什么！」~~市长满头大汗。他用豆子般的小眼睛看着你。他知道自己被发现了。他的身体瘫软下来。他感到羞愧难当。~~「你发现了我的……我们的秘密。请不要告诉 Judith 。我……会结束这一切的。我发誓。 Candice ——我们必须停止见面。我……对不起。」~~你决定留下 Patterson 和 Candice 去解决发生的事情，并希望市长学到了关于诚实的一课。*");
	say();
	Func0911(0x0014);
	abort;
	goto labelFunc042B_0106;
labelFunc042B_0102:
	message("「有什么我能帮你的吗？」 Patterson 问。");
	say();
labelFunc042B_0106:
	goto labelFunc042B_010D;
labelFunc042B_0109:
	message("「有什么我能帮你的吗？」 Patterson 问。");
	say();
labelFunc042B_010D:
	converse attend labelFunc042B_02EB;
	case "姓名" attend labelFunc042B_0123:
	message("「我是 Patterson 。以我父亲的名字命名。」他伸出手，握住你的手，并坚定地摇了摇。「能见到圣者真是太荣幸了！」");
	say();
	UI_remove_answer("姓名");
labelFunc042B_0123:
	case "职业" attend labelFunc042B_013F:
	message("「哎呀，我是城镇市长！也就是不列颠城的城镇市长！我想让你知道，我的选举是一场压倒性的胜利！我的对手根本没有机会！~~ 「我也是不列颠尼亚税务委员会的主席。」");
	say();
	UI_add_answer(["选举", "对手", "税务委员会"]);
labelFunc042B_013F:
	case "选举" attend labelFunc042B_0159:
	message("「那是在两年前举行的。我获得了 84% 的选票。我必须承认，这是一场令人印象深刻的胜利。~~ 「当然，当一个人背后有像友谊会这样的团体支持时……」");
	say();
	UI_remove_answer("选举");
	UI_add_answer("友谊会");
labelFunc042B_0159:
	case "对手" attend labelFunc042B_0177:
	message("「他是一位名叫 Brownie 的老农夫。没有多少钱投入竞选。就连农民都不支持他。」");
	say();
	UI_remove_answer("对手");
	UI_add_answer("农民");
	gflags[0x007F] = true;
labelFunc042B_0177:
	case "友谊会" attend labelFunc042B_01A9:
	message("「自从我加入后，我的生活有了很大的改善。我发现我的诚实无懈可击，我的领导能力无可挑剔，我对妻子的爱更是无可指责。");
	say();
	if (!(!gflags[0x0006])) goto labelFunc042B_0191;
	message("「你应该考虑参加我们晚上的聚会。」");
	say();
	goto labelFunc042B_0195;
labelFunc042B_0191:
	message("「我敢打赌你的生活也改善了！」");
	say();
labelFunc042B_0195:
	UI_remove_answer("友谊会");
	UI_add_answer(["诚实", "妻子"]);
labelFunc042B_01A9:
	case "农民" attend labelFunc042B_01C3:
	message("「我有这么说吗？我绝对不是那个意思。不列颠城已经没有阶级制度了，整个国家也都没有！我的意思是『农民阶级』，也就是那些没有优越血统的人—— Brownie 就是那种人——『他们』也不支持他。他们知道谁会是最好的领导者！」");
	say();
	UI_remove_answer("农民");
	UI_add_answer("优越");
labelFunc042B_01C3:
	case "优越" attend labelFunc042B_01E3:
	message("「我有这么说吗？我想我并不是那个意思。我想说的是，有些人出身于地位比其他人更好的家庭。而 Brownie 不是其中之一！但别误会我——我仍然坚持不列颠尼亚的阶级制度已经被废除了！」");
	say();
	UI_remove_answer("优越");
	if (!gflags[0x0082]) goto labelFunc042B_01E3;
	UI_add_answer("Nanna");
labelFunc042B_01E3:
	case "Nanna" attend labelFunc042B_01F6:
	message("「她说什么？嗯，她错了！亏她还是个『弟兄』。友谊会的一员！我得跟巴特林谈谈她的事。」~~你注意到 Patterson 似乎感到不安。");
	say();
	UI_remove_answer("Nanna");
labelFunc042B_01F6:
	case "诚实" attend labelFunc042B_0216:
	message("「我显然是不列颠城最诚实的人！也许我该搬去 Moonglow！哈！」");
	say();
	UI_remove_answer("诚实");
	if (!gflags[0x0081]) goto labelFunc042B_0216;
	UI_add_answer("Judith 的怀疑");
labelFunc042B_0216:
	case "妻子" attend labelFunc042B_0229:
	message("「她的名字是 Judith 。她是音乐厅的音乐老师。也许你见过她。我们的关系非常美好。」");
	say();
	UI_remove_answer("妻子");
labelFunc042B_0229:
	case "税务委员会" attend labelFunc042B_023C:
	message("「这片土地必须有某种产生收入的方法。税收是唯一的解决方案。每个商人和农夫都要纳税。任何靠工作谋生的人都要纳税。」~~ 「不列颠尼亚税务委员会的主要办公室在皇家造币厂。」");
	say();
	UI_remove_answer("税务委员会");
labelFunc042B_023C:
	case "Judith 的怀疑" attend labelFunc042B_027D:
	message("「哎呀，我不知道她在说什么！我只是工作到很晚，仅此而已！」");
	say();
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc042B_0276;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 对你耳语：「这个人似乎很有防御心，你不觉得吗？我说我们应该观察他，看看他今晚在友谊会聚会后去了哪里。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFD5, 0x0000);
labelFunc042B_0276:
	UI_remove_answer("Judith 的怀疑");
labelFunc042B_027D:
	case "Candice" attend labelFunc042B_0290:
	message("Patterson 瞪大了眼睛，有一瞬间看起来非常紧张。但他很快就恢复了镇定。~~ 「Candice？哎呀，她是个朋友！友谊会的『弟兄』！仅此而已！」");
	say();
	UI_remove_answer("Candice");
labelFunc042B_0290:
	case "尸体" attend labelFunc042B_02AA:
	message("你转述了不列颠王关于几年前在不列颠城发生谋杀案的说法。 Patterson 点点头。~~「我记得很清楚。那非常令人毛骨悚然。有一个名叫 Finster 的人正在竞选公职。他对自己的意见非常直言不讳，我想这给他带来了麻烦。」");
	say();
	UI_remove_answer("尸体");
	UI_add_answer("意见");
labelFunc042B_02AA:
	case "意见" attend labelFunc042B_02C4:
	message("「他试图进行许多社会变革。他希望大议会 (Great Council) 和不列颠尼亚税务委员会有更多权力，而且他想解散友谊会。 Finster 是一个野心太大的贵族。总之，他的信仰一定为他树立了几个敌人。」");
	say();
	UI_remove_answer("意见");
	UI_add_answer("敌人");
labelFunc042B_02C4:
	case "敌人" attend labelFunc042B_02DD:
	message("「我怎么会知道？总之，他的尸体在一个已经不存在的废弃建筑里被发现。那里曾经是某种仓库，就在城堡附近。几年前被拆除了。尸体被肢解得难以置信。就好像有人用木桩把那个可怜的人绑起来，然后砍断了他所有的四肢。 Finster 然后被斩首了。这简直是……怎么说呢……仪式性的！~~「这就是我记得的全部。没有人因为这项罪行被捕。」");
	say();
	Func0911(0x0014);
	UI_remove_answer("敌人");
labelFunc042B_02DD:
	case "告辞" attend labelFunc042B_02E8:
	goto labelFunc042B_02EB;
labelFunc042B_02E8:
	goto labelFunc042B_010D;
labelFunc042B_02EB:
	endconv;
	message("Patterson 向你点头。*");
	say();
labelFunc042B_02F0:
	if (!(event == 0x0000)) goto labelFunc042B_02FE;
	Func092E(0xFFD5);
labelFunc042B_02FE:
	return;
}


