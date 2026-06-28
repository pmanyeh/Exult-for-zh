#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func0269 shape#(0x269) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0269_0009;
	abort;
labelFunc0269_0009:
	UI_show_npc_face(0xFEE4, 0x0000);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0347, 0xFE99, 0x0000);
	if (!(gflags[0x0004] && (!gflags[0x0012]))) goto labelFunc0269_0056;
	message("「恭喜你，圣者，摧毁了球体。我从我的天球监狱中解脱了。我感谢你。但我很遗憾地通知你，守护者设计了那个球体，它的毁灭永久地瘫痪了月之门，以及你的月之宝珠。你无法再通过红色的月之门回到你的家乡了。~~");
	say();
	message("「在你完成任务后，离开不列颠尼亚唯一的希望，就是使用守护者自己进入这片土地的载具——黑门。"  );
	say();
	message("「守护者的追随者们正在用黑石建造黑门，并将利用魔法和自然元素来启动它。守护者计划在即将到来的天体对齐期间进入不列颠尼亚，那已经迫在眉睫了。那是唯一一次元素运作良好，使黑门变得可穿透且活跃的时候。你需要一个有能力破坏黑石的设备。如果你还没有遇到这样的设备，你可以在 Cove 的法师 Rudyom 的工作坊里找到能帮你的东西。");
	say();
	message("「在你找到黑门之前，还有一个产生器必须被摧毁。这是用来将守护者的声音传达给他的追随者，并魅惑他们服从他意愿的设备。去 Serpent's Hold 附近的区域寻找包含这个产生器的地牢。它最可能的形状是一个立方体。它很可能就在 Serpent's Hold 东边的友谊会岛屿上。");
	say();
	message("「当你完成这项任务时，将你的精力集中在海盗巢穴 (Buccaneer's Den)上。你或许会在那里找到黑门位置的线索。");
	say();
	message("「如果你想再次跟我说话，只需使用沙漏。再见。」*");
	say();
	gflags[0x0012] = true;
	Func0911(0x00C8);
	abort;
labelFunc0269_0056:
	if (!(gflags[0x0005] && (!gflags[0x0013]))) goto labelFunc0269_0078;
	message("「圣者！天体对齐即将到来！时间不多了！必须阻止守护者穿过黑门！」");
	say();
	message("「立方体将帮助你找到黑门的位置。只要你拥有它，那些受守护者影响的人将会更愿意对你说实话。」");
	say();
	message("「去海盗巢穴 (Buccaneer's Den)。寻找那个叫『Hook』的人。跟那些所谓的友谊会谈谈。你在那里要查明他的下落应该不难。我相信你最终一定能找到黑门的位置！祝你好运！」*");
	say();
	gflags[0x0013] = true;
	Func0911(0x00C8);
	abort;
labelFunc0269_0078:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x01D4])) goto labelFunc0269_00AD;
	message("你看到一个似曾相识但令人生畏的身影被关在某种圆柱形的牢房中。他专注地看着你。~~「自从我们在 Exodus 的时代见面以来，已经过了好几年了！我从来没有像最近这样这么想见到你！你早该来了！我可没有几个纪元的时间可以浪费在等你上面！现在有一场危机，不列颠尼亚需要你的帮忙！我需要你的帮忙！整个宇宙都需要你的帮忙！」");
	say();
	UI_add_answer(["早该来了", "危机"]);
	gflags[0x01D4] = true;
	Func0911(0x00C8);
	goto labelFunc0269_00E2;
labelFunc0269_00AD:
	if (!(!gflags[0x01D3])) goto labelFunc0269_00DE;
	message("「你决定好要帮我了吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0269_00D6;
	message("时间领主看起来松了一口气。");
	say();
	message("「那么我有一个任务要交给你。」");
	say();
	UI_add_answer("任务");
	goto labelFunc0269_00DB;
labelFunc0269_00D6:
	message("「那么快去吧！」*");
	say();
	abort;
labelFunc0269_00DB:
	goto labelFunc0269_00E2;
labelFunc0269_00DE:
	message("「我有什么能帮你的吗，圣者？」时间领主问道。");
	say();
labelFunc0269_00E2:
	if (!gflags[0x01D3]) goto labelFunc0269_00EF;
	UI_add_answer("守护者");
labelFunc0269_00EF:
	if (!gflags[0x0000]) goto labelFunc0269_0102;
	UI_add_answer(["四面体", "以太防御"]);
labelFunc0269_0102:
	if (!gflags[0x0003]) goto labelFunc0269_0115;
	UI_remove_answer(["四面体", "以太防御"]);
labelFunc0269_0115:
	if (!gflags[0x0001]) goto labelFunc0269_0128;
	UI_add_answer(["球体", "月之门"]);
labelFunc0269_0128:
	if (!gflags[0x0004]) goto labelFunc0269_013B;
	UI_remove_answer(["球体", "月之门"]);
labelFunc0269_013B:
	if (!(gflags[0x0012] && (!gflags[0x0005]))) goto labelFunc0269_014D;
	UI_add_answer("立方体");
labelFunc0269_014D:
	if (!gflags[0x0002]) goto labelFunc0269_0160;
	UI_add_answer(["立方体", "噪音"]);
labelFunc0269_0160:
	if (!gflags[0x0005]) goto labelFunc0269_0173;
	UI_remove_answer(["立方体", "噪音"]);
labelFunc0269_0173:
	if (!(gflags[0x0211] || var0000)) goto labelFunc0269_0184;
	UI_add_answer("修复魔法");
labelFunc0269_0184:
	if (!gflags[0x0003]) goto labelFunc0269_0191;
	UI_remove_answer("修复魔法");
labelFunc0269_0191:
	converse attend labelFunc0269_03C7;
	case "姓名" attend labelFunc0269_01A7:
	message("「我被称为时间领主。」");
	say();
	UI_remove_answer("姓名");
labelFunc0269_01A7:
	case "职业" attend labelFunc0269_01B3:
	message("「我确保时间在空间中平稳地流动。」他耸了耸肩。「别要我解释这个。这超越了凡人的理解范围。」");
	say();
labelFunc0269_01B3:
	case "早该来了" attend labelFunc0269_01D1:
	message("「是我把红色的月之门送到你的家乡，把你引诱到不列颠尼亚的！这耗尽了我所有的力量才让它运作，但还是出了点差错。你抵达了 Trinsic ，那不是我的本意。因此，你花在找到我的时间比我预期的要长得多。"  );
	say();
	message("「一旦你到达不列颠尼亚，我唯一能联系你的方法就是通过鬼火 。自从创造红色月之门以来，经过了相当长时间的休息，我设法修复了一个能带你来找我的月之宝珠位置。我被困在这里时，无法在时空中自由漫游，运行我的工作。」");
	say();
	UI_remove_answer("早该来了");
	UI_add_answer("鬼火");
labelFunc0269_01D1:
	case "危机" attend labelFunc0269_021E:
	message("「这片土地正受到来自另一个维度、强大且恶意存在的攻击，而你是唯一能阻止他的人！我因为守护者施展的一种巫术伎俩而被困在这里。守护者创造了一个强大的『产生器』，使月之门和你的月之宝珠几乎无法运作，从而在时空连续体中产生了皱褶。"  );
	say();
	message("「你『必须』释放我，我们必须合作对抗守护者。你的人民的命运就取决于此。你接受吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0269_01FB;
	message("「那么我有一个任务要交给你。」");
	say();
	UI_add_answer("任务");
	goto labelFunc0269_0217;
labelFunc0269_01FB:
	message("「那么你将注定永远无法完成你的任务。你确定吗？我再给你一次机会。你想要帮忙吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0269_0212;
	message("「那么我有一个任务要交给你。」");
	say();
	goto labelFunc0269_0217;
labelFunc0269_0212:
	message("「那么别了，圣者。现在离开吧。当你意识到帮助我是你的宿命时，你会回来的。」*");
	say();
	abort;
labelFunc0269_0217:
	UI_remove_answer("危机");
labelFunc0269_021E:
	case "任务" attend labelFunc0269_0269:
	message("「我就知道你不会让我失望。~~「立刻前往 Serpent's Spine 区域。在不列颠城西北方的某处寻找一个地牢的入口。我相信它可能被称为『Despise 地牢』。这将引导你找到造成问题的产生器。如果我的直觉正确，它会像一个巨大的球体。"  );
	say();
	if (!gflags[0x0001]) goto labelFunc0269_0234;
	message("「你可能已经看过它了。"  );
	say();
labelFunc0269_0234:
	message("「你必须找到摧毁它的方法。"  );
	say();
	if (!(!gflags[0x0001])) goto labelFunc0269_024D;
	message("「它可能有防御机制。如果你无法征服它，回到这里向我描述它的防御。或许我能给你更多帮助。如果你必须再次前往那里，明智的做法是使用标记术和召回术，以省去你第二次穿过整个地牢的麻烦。」");
	say();
	UI_add_answer("球体");
	goto labelFunc0269_025E;
labelFunc0269_024D:
	message("「如你所知，它的防御是一个不寻常的月之门。」");
	say();
	UI_add_answer(["球体", "月之门"]);
labelFunc0269_025E:
	gflags[0x01D3] = true;
	UI_remove_answer("任务");
labelFunc0269_0269:
	case "鬼火" attend labelFunc0269_027C:
	message("「异常冷漠的生物。他们过去曾是很好的信使。」");
	say();
	UI_remove_answer("鬼火");
labelFunc0269_027C:
	case "守护者" attend labelFunc0269_028F:
	message("「他是无上邪恶的化身。必须阻止他。他以支配和控制为生。」");
	say();
	UI_remove_answer("守护者");
labelFunc0269_028F:
	case "球体" attend labelFunc0269_02A2:
	message("「那是守护者从他的世界送来的魔法产生器。它的目的是瘫痪月之门。你必须打破它的外部防御并进入结构内部，拿走漂浮在里面的较小球体。保留那个小球体，它以后会有用的。」");
	say();
	UI_remove_answer("球体");
labelFunc0269_02A2:
	case "月之门" attend labelFunc0269_02C6:
	message("「球体的外部防御会将你的队伍送回空间中的特定位置。在打破这个防御之前，你无法进入产生器。你必须找到 Nicodemus 的沙漏。~~「如果我的假设正确，球体的内部防御将会与月之门有关。寻找一个视觉模式来帮助你解开这个谜团。」");
	say();
	gflags[0x01D2] = true;
	UI_remove_answer("月之门");
	UI_add_answer(["沙漏", "Nicodemus"]);
labelFunc0269_02C6:
	case "沙漏" attend labelFunc0269_02EE:
	if (!(!gflags[0x0004])) goto labelFunc0269_02E3;
	message("「这是一个施了魔法的沙漏，如果在球体的位置使用它，将会对你有所帮助。一旦我从产生器的力量中解脱，你就可以使用这个沙漏来召唤我。」");
	say();
	UI_remove_answer("沙漏");
	goto labelFunc0269_02EE;
labelFunc0269_02E3:
	message("「它现在对你没有用处了，除非你想再次召唤我。」");
	say();
	UI_remove_answer("沙漏");
labelFunc0269_02EE:
	case "Nicodemus" attend labelFunc0269_0301:
	message("「他是一位住在 Yew 森林西边的法师。」");
	say();
	UI_remove_answer("Nicodemus");
labelFunc0269_0301:
	case "修复魔法" attend labelFunc0269_0329:
	if (!(!gflags[0x0003])) goto labelFunc0269_031E;
	message("时间领主思考了片刻。~~「在不列颠尼亚的法师能再次使用魔法之前，必须修复以太。我建议你去 Moonglow 找 Penumbra 。她或许能帮你解决这个问题。」");
	say();
	UI_add_answer("Penumbra");
	goto labelFunc0269_0322;
labelFunc0269_031E:
	message("「圣者，现在魔法一定能正常运作了。明智地使用它。」");
	say();
labelFunc0269_0322:
	UI_remove_answer("修复魔法");
labelFunc0269_0329:
	case "四面体" attend labelFunc0269_033C:
	message("「那是守护者从他的世界送来的魔法产生器。它控制着法师施展魔法所依赖的以太。就像球体一样，你必须穿透它的外部防御，进入结构内部，并拿走漂浮在里面的较小四面体。」");
	say();
	UI_remove_answer("四面体");
labelFunc0269_033C:
	case "以太防御" attend labelFunc0269_0353:
	message("「四面体有这样的防御并不令人惊讶。在 Moonglow 的 Penumbra 应该能帮你解决。现在很明显，在你能摧毁球体之前，必须先摧毁四面体。~~「我不确定四面体内部可能会有什么样的防御。它可能很危险。进入它时，请确保装备齐全。」");
	say();
	gflags[0x0007] = true;
	UI_remove_answer("以太防御");
labelFunc0269_0353:
	case "Penumbra" attend labelFunc0269_0366:
	message("「她是一位住在 Moonglow 的年长法师。」");
	say();
	UI_remove_answer("Penumbra");
labelFunc0269_0366:
	case "立方体" attend labelFunc0269_0399:
	if (!(!(gflags[0x0004] || gflags[0x0003]))) goto labelFunc0269_0380;
	message("「那是守护者从他的世界送来的魔法产生器。从你所说的来看，听起来像是他用来向他的追随者『说话』并魅惑他们服从他意愿的设备。恐怕在你能摧毁它之前，你必须先处理守护者放在不列颠尼亚的其他魔法产生器。」");
	say();
	goto labelFunc0269_0384;
labelFunc0269_0380:
	message("「那是守护者从他的世界送来的第三个也是最后一个魔法产生器。这是他用来向他的追随者『说话』并魅惑他们服从他意愿的设备。它在 Serpents Hold 附近的一个地牢里。你必须摧毁它的外部防御，进入它，并拿走漂浮在里面的较小立方体。」");
	say();
labelFunc0269_0384:
	UI_remove_answer("立方体");
	if (!(!gflags[0x0002])) goto labelFunc0269_0399;
	UI_add_answer("立方体防御");
labelFunc0269_0399:
	case "立方体防御", "噪音" attend labelFunc0269_03B9:
	message("「这个外部防御可以通过使用覆盖耳朵的特殊头盔来克服。头盔必须由一种叫做『Caddellite』的稀有矿物制成。它存在于陨石中。去找 Lycaeum 附近天文台的 Brion 。他可以给你更多关于寻找这种矿物的建议。~~「内部防御很可能会涉及守护者本人。不要听信他可能会告诉你的任何话。」");
	say();
	gflags[0x0008] = true;
	UI_remove_answer(["立方体防御", "噪音"]);
labelFunc0269_03B9:
	case "告辞" attend labelFunc0269_03C4:
	goto labelFunc0269_03C7;
labelFunc0269_03C4:
	goto labelFunc0269_0191;
labelFunc0269_03C7:
	endconv;
	message("「别了，圣者。祝你好运。」*");
	say();
	return;
}


