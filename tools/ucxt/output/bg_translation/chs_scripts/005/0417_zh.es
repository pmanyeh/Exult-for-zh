#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func08B4 0x8B4 (var var0000, var var0001, var var0002);
extern void Func08B5 0x8B5 ();
extern void Func092E 0x92E (var var0000);
extern var Func092D 0x92D (var var0000);

void Func0417 object#(0x417) ()
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
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var talked_book;

	var0000 = false;
	if (!(event == 0x0001)) goto labelFunc0417_0735;
	talked_book = false;
labelFunc0417_000C:
	var0001 = Func0908();
	if (!gflags[0x001E]) goto labelFunc0417_0027;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「愚蠢！！到底是什么驱使你施展那个该死的『末日决战（Armageddon Spell）』？我就知道那很危险！你也知道那很危险！！现在看看我们！我们是整个星球上唯二孤伶伶的人！不列颠尼亚全毁了！你算哪门子的圣者！？现在，没有了月之门的运作，我们两人都被迫要在这片被毁灭的荒原中度过永恒！~~」「当然，这也许可以看作是解决我们所有问题的聪明办法。毕竟，现在就连那个所谓的守护者也不会想要不列颠尼亚了！」*");
	say();
	abort;
labelFunc0417_0027:
	if (!gflags[0x030C]) goto labelFunc0417_004C;
	if (!(!gflags[0x030D])) goto labelFunc0417_0049;
	var0000 = true;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我感觉到 Exodus 的残骸已经从这个领域中消逝。这让我肩上卸下了一块大石。因此，圣者，我不能让这项成就得不到奖赏。请跪下，我的朋友。」当你遵从指示时，不列颠王伸出了他的双手。");
	say();
	goto labelFunc0417_0743;
labelFunc0417_0049:
	goto labelFunc0417_005A;
labelFunc0417_004C:
	if (!(!gflags[0x02FE])) goto labelFunc0417_005A;
	UI_add_answer("隆隆声");
labelFunc0417_005A:
	var0002 = UI_get_party_list();
	var0003 = Func08F7(0xFFFF);
	var0004 = Func08F7(0xFFFC);
	var0005 = Func08F7(0xFFFD);
	UI_show_npc_face(0xFFE9, 0x0000);
	var0006 = false;
	var0007 = false;
	var0008 = false;
	UI_add_answer(["姓名", "职业", "告辞", "友谊会"]);
	if (!(!gflags[0x00DD])) goto labelFunc0417_00B3;
	UI_add_answer("月之宝珠");
labelFunc0417_00B3:
	if (!(gflags[0x00CD] && (!gflags[0x00CC]))) goto labelFunc0417_00C5;
	UI_add_answer("Weston");
labelFunc0417_00C5:
	if (!gflags[0x00D3]) goto labelFunc0417_00D2;
	UI_add_answer("治疗");
labelFunc0417_00D2:
	if (!gflags[0x0127]) goto labelFunc0417_00DF;
	UI_add_answer("守护者");
labelFunc0417_00DF:
	if (!gflags[0x00D4]) goto labelFunc0417_00EC;
	UI_remove_answer("守护者");
labelFunc0417_00EC:
	if (!(!gflags[0x0098])) goto labelFunc0417_010B;
	message("你看到你的老朋友不列颠王，看起来比你上次见到他时老了一些。他看到你时眼睛闪烁着光芒。~~「欢迎，我的朋友，」他拥抱着你说道。「请告诉我，是什么风把你吹来不列颠尼亚的！或者，更重要的是，是什么『带』你来的？」");
	say();
	gflags[0x0098] = true;
	UI_add_answer(["红色月之门", "月之宝珠"]);
	goto labelFunc0417_0115;
labelFunc0417_010B:
	message("\"「是的，");
	message(var0001);
	message("？」不列颠王问道。");
	say();
labelFunc0417_0115:
	if (gflags[0x0345] && UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0 && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0417_072A;
	case "姓名" attend labelFunc0417_012B:
	message("不列颠王大笑。「什么，你在开玩笑吗，圣者？难道你认不出你的老朋友了？」");
	say();
	UI_remove_answer("姓名");
labelFunc0417_012B:
	case "职业" attend labelFunc0417_0148:
	message("不列颠王翻了个白眼。「我们一定要走这个过场吗？」他摇着头笑道。");
	say();
	message("「很好。如你所知，我是不列颠尼亚的统治者，而且已经统治一段时间了。尽管我来自你的家乡，但我选择在这里生活。」");
	say();
	UI_add_answer(["不列颠尼亚", "家乡"]);
labelFunc0417_0148:
	case "家乡" attend labelFunc0417_0162:
	message("「我知道距离我造访我们的地球已经有很多年了，但你肯定还记得我们两人都来自同一个时间和地点吧？而且，身为同乡兄弟，你也应该记得，你可以在需要时随时向我寻求协助。」");
	say();
	UI_remove_answer("家乡");
	UI_add_answer("协助");
labelFunc0417_0162:
	case "协助" attend labelFunc0417_0194:
	message("「别忘了，圣者，我有能力治愈你。那是我似乎仍然有效的一点魔法。而且我也许能为你提供一些装备和一本法术书。」");
	say();
	UI_add_answer(["装备", "法术书"]);
	if (!(!gflags[0x00D3])) goto labelFunc0417_0189;
	UI_add_answer("治疗");
labelFunc0417_0189:
	gflags[0x00D3] = true;
	UI_remove_answer("协助");
labelFunc0417_0194:
	case "不列颠尼亚" attend labelFunc0417_01C5:
	message("「这个国家的状况繁荣无比。你意识到你已经离开 200 个不列颠尼亚年了吗？」不列颠王对你摇了摇手指。~~「我敢肯定你的朋友们都为你的缺席感到惋惜。你离开这么久真是太可惜了！但是... 我真的很高兴见到你。不列颠尼亚繁荣而丰饶。看看你周围。探索这座新翻修的城堡。在各地旅行。四处都充满了和平。~~」「是的，不列颠尼亚从未如此美好。嗯，几乎从未。」");
	say();
	UI_remove_answer("不列颠尼亚");
	UI_add_answer(["朋友们", "城堡", "几乎没有"]);
	if (!(!gflags[0x0066])) goto labelFunc0417_01C5;
	UI_add_answer("魔法");
labelFunc0417_01C5:
	case "几乎没有" attend labelFunc0417_01D8:
	message("「嗯，『事情』确实很好。我担心的是『人』。~~」「不列颠尼亚发生了一些不对劲的事情，但我不知道是什么。有一种东西笼罩在不列颠尼亚人民的头上。他们很不快乐。从他们的眼睛里就能看出来。既然和平了这么久，已经没有什么能将人民团结在一起了。~~」「也许你能查明发生了什么事。我恳求你走到人群中去。观察他们的日常工作。与他们交谈。与他们一起工作。与他们共进一餐。也许他们需要像圣者这样的人来关心他们的生活。」");
	say();
	UI_remove_answer("几乎没有");
labelFunc0417_01D8:
	case "红色月之门" attend labelFunc0417_0207:
	message("你讲述了一个红色的月之门如何出现在你家后方，并神秘地将你带到 Trinsic 的故事。~~不列颠王的眉头随着你的讲述而皱起。最后他说：「我并没有派红色的月之门去接你。一定是有某人或某物启动了那个月之门。这确实很奇怪，因为我们最近在月之门上遇到了一些麻烦。事实上，我们在魔法方面也普遍遇到了麻烦！」");
	say();
	UI_remove_answer("红色月之门");
	if (!(!var0007)) goto labelFunc0417_01F9;
	UI_add_answer("月之门");
labelFunc0417_01F9:
	if (!(!var0008)) goto labelFunc0417_0207;
	UI_add_answer("魔法");
labelFunc0417_0207:
	case "月之宝珠" attend labelFunc0417_0278:
	message("「自从魔法出现问题以来，我的就一直无法运作。事实上，没有任何一个月之门能够可靠地运作已经有一段时间了！」");
	say();
	message("「你有带来你的月之宝珠（Orb of the Moons）吗？」");
	say();
	if (!Func090A()) goto labelFunc0417_0224;
	message("「真的吗？它在哪里？你身上并没有带着它！」");
	say();
	goto labelFunc0417_0228;
labelFunc0417_0224:
	message("「我懂了。」");
	say();
labelFunc0417_0228:
	message("「嗯。你可能会被困在不列颠尼亚。来，不如试试我的吧？我把它借给你。也许它对你有用。不过要小心。月之门已经变得危险了。」");
	say();
	var0009 = UI_add_party_items(0x0001, 0x0311, 0xFE99, 0xFE99, false);
	if (!var0009) goto labelFunc0417_0251;
	message("不列颠王将他的月之宝珠交给了你。");
	say();
	gflags[0x00DD] = true;
	goto labelFunc0417_0255;
labelFunc0417_0251:
	message("「你的双手太满了，无法拿取宝珠！」");
	say();
labelFunc0417_0255:
	UI_remove_answer("月之宝珠");
	if (!(!var0007)) goto labelFunc0417_026A;
	UI_add_answer("月之门");
labelFunc0417_026A:
	if (!(!var0008)) goto labelFunc0417_0278;
	UI_add_answer("魔法");
labelFunc0417_0278:
	case "城堡" attend labelFunc0417_0292:
	message("「是的，自从你上次造访以来，它已经重新装潢过了。建筑师和工人们做得很出色。」~~这位统治者向你倾身，脸上带着不悦的表情。~~「整个建筑群唯一的污点就是那个该死的育婴室！」");
	say();
	UI_remove_answer("城堡");
	UI_add_answer("育婴室");
labelFunc0417_0292:
	case "育婴室" attend labelFunc0417_02A5:
	message("「我才不会靠近那个地方！国王和脏尿布是格格不入的。在我的几名员工成家后，大议会说服我设立了育婴室。虽然这可能是一个必要的设施，但我会假装它不存在！」");
	say();
	UI_remove_answer("育婴室");
labelFunc0417_02A5:
	case "Trinsic" attend labelFunc0417_02C9:
	message("「我已经很多年没去过那里了。那里发生了什么事吗？」");
	say();
	UI_remove_answer("Trinsic");
	UI_push_answers();
	UI_add_answer(["一桩谋杀案", "没什么"]);
labelFunc0417_02C9:
	case "没什么" attend labelFunc0417_02E0:
	message("「确实如此。那么看来 Trinsic 自从我上次见到它以来并没有太大的改变。」他的眼睛闪烁着光芒。");
	say();
	UI_pop_answers();
	UI_remove_answer("没什么");
labelFunc0417_02E0:
	case "一桩谋杀案" attend labelFunc0417_031F:
	message("「谋杀？在 Trinsic ？」这位统治者看起来很担忧。~~「我没有听说过这件事。你正在调查它吗？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0417_02FF;
	message("「很好。我很高兴你能关心我的人民。」");
	say();
	goto labelFunc0417_0303;
labelFunc0417_02FF:
	message("「啊，你也许应该调查一下！」");
	say();
labelFunc0417_0303:
	message("国王停顿了一会儿。「既然你提到了这点，我在过去几个月里也收到过其他类似谋杀案的报告。事实上，三四年前在不列颠城就发生过一起。尸体以仪式性的方式被肢解。显然有一个疯狂的杀手在逃。但我毫不怀疑，像你这样的圣者，一定能找到他！」");
	say();
	UI_remove_answer("一桩谋杀案");
	UI_pop_answers();
	UI_add_answer(["仪式性的", "杀手"]);
labelFunc0417_031F:
	case "仪式性的" attend labelFunc0417_0336:
	message("「我不记得太多细节了。你应该去问问镇长 Patterson 关于这件事的情况。他也许记得更多。」");
	say();
	UI_remove_answer("仪式性的");
	gflags[0x00D1] = true;
labelFunc0417_0336:
	case "杀手" attend labelFunc0417_0363:
	message("「这当然只是我的假设。但这就是我们所能掌握的全部线索了。除非你已经发现了一些有用的信息？」");
	say();
	UI_remove_answer("杀手");
	if (!gflags[0x0043]) goto labelFunc0417_0356;
	UI_add_answer("Hook");
labelFunc0417_0356:
	if (!gflags[0x0040]) goto labelFunc0417_0363;
	UI_add_answer("皇冠宝石号（The Crown Jewel）");
labelFunc0417_0363:
	case "友谊会" attend labelFunc0417_0383:
	message("「他们是一群非常有用和有生产力的公民。你绝对应该去参观一下位于不列颠城的友谊会总部，并与巴特林交谈。友谊会在不列颠尼亚各地做了许多善事，包括提供食物给穷人、教育和帮助有需要的人，以及促进普遍的善意与和平。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer(["巴特林", "总部"]);
labelFunc0417_0383:
	case "总部" attend labelFunc0417_0396:
	message("「是的，它离城堡不远，在西南方。就在剧院的南边。」");
	say();
	UI_remove_answer("总部");
labelFunc0417_0396:
	case "巴特林" attend labelFunc0417_03A9:
	message("「他是一名德鲁伊，大约二十年前创立了友谊会。他非常聪明，而且是一个温暖而温和的人。」");
	say();
	UI_remove_answer("巴特林");
labelFunc0417_03A9:
	case "Hook" attend labelFunc0417_03BC:
	message("「一个带着铁钩的男人？」国王摸了摸下巴。~~「不，我不记得曾经见过一个带着铁钩的男人。」");
	say();
	UI_remove_answer("Hook");
labelFunc0417_03BC:
	case "皇冠宝石号（The Crown Jewel）" attend labelFunc0417_03CF:
	message("「恐怕我不可能知道每一艘经过我们港口的船只。如果你还没有去确认的话，你应该去问问造船匠 Clint 。」");
	say();
	UI_remove_answer("皇冠宝石号（The Crown Jewel）");
labelFunc0417_03CF:
	case "朋友们" attend labelFunc0417_03F2:
	message("「你当然是指 Iolo 、 Shamino 和 Dupre 。」");
	say();
	UI_remove_answer("朋友们");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0417_03F2:
	case "Iolo" attend labelFunc0417_0435:
	message("「这些年来我很少见到我们的朋友。据我所知，他大部分时间都在 Trinsic 。」");
	say();
	if (!var0003) goto labelFunc0417_0427;
	message("「哈啰， Iolo ！你好吗？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我很好，陛下！很高兴见到你！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_0427:
	UI_remove_answer("Iolo");
	UI_add_answer("Trinsic");
labelFunc0417_0435:
	case "Shamino" attend labelFunc0417_049B:
	message("「那个无赖不常来，虽然我知道他最近大部分时间都在不列颠城！」");
	say();
	if (!var0005) goto labelFunc0417_0494;
	message("「你对自己有什么要说的吗， Shamino ？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我的歉意，大人，」 Shamino 说道。*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我听说的关于一个女人的事是怎么回事？一位女演员？嗯？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino 脸红了，不安地挪动着双脚。*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我就猜到是这样！」统治者笑着说。");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_0494:
	UI_remove_answer("Shamino");
labelFunc0417_049B:
	case "Dupre" attend labelFunc0417_04FA:
	message("「自从我封他为骑士后就没见过他了。很典型的作风——我帮了这个人一个忙，然后他就消失了！我听说他也许在 Jhelom 。」");
	say();
	if (!var0004) goto labelFunc0417_04EC;
	message("「你都去了哪里， Dupre 爵士？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「哦，到处跑，大人，」战士回答道。*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「我在不列颠尼亚这里很少有来自我们家乡的朋友。你必须特地多来拜访！尤其既然你是一位骑士！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「如您所愿，大人，」 Dupre 鞠躬说道。*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_04EC:
	UI_remove_answer("Dupre");
	UI_add_answer("Jhelom");
labelFunc0417_04FA:
	case "Jhelom" attend labelFunc0417_050D:
	message("「据说那是个相当暴力的地方。我已经有很长一段时间没有荣幸去拜访了。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc0417_050D:
	case "魔法" attend labelFunc0417_054E:
	message("「有些不对劲。魔法已经很长一段时间无法运作了。我甚至连用魔法变出食物都有困难！这一定与魔法以太有关。~~」「有些人说魔法正在消亡，因为月之门的麻烦和 Nystul 的情况。我开始怀疑他们可能是对的！」");
	say();
	message("不列颠王端详了你一会儿。");
	say();
	message("「也许魔法对你来说会更有用。你来不列颠尼亚还没多久。有可能无论是什么影响了魔法，都还没有在你身上留下印记。请试试看。一本法术书和你的其他装备存放在一起。」");
	say();
	gflags[0x0066] = true;
	UI_remove_answer("魔法");
	UI_add_answer(["Nystul", "法术书", "装备"]);
	var0008 = true;
	if (!(!var0007)) goto labelFunc0417_054E;
	UI_add_answer("月之门");
labelFunc0417_054E:
	case "Nystul" attend labelFunc0417_057D:
	if (!(!gflags[0x0003])) goto labelFunc0417_0572;
	if (!(!gflags[0x0099])) goto labelFunc0417_056B;
	message("「呃...试着和他谈谈吧。」");
	say();
	goto labelFunc0417_056F;
labelFunc0417_056B:
	message("国王压低了声音。~~「他表现得很古怪，不是吗？他的心智发生了一些变化。他似乎再也无法专注于魔法了。」");
	say();
labelFunc0417_056F:
	goto labelFunc0417_0576;
labelFunc0417_0572:
	message("「他开始表现得正常多了。」");
	say();
labelFunc0417_0576:
	UI_remove_answer("Nystul");
labelFunc0417_057D:
	case "月之门" attend labelFunc0417_05A1:
	message("「月之门无法运作！我们不能像过去那样使用它们。它们不仅功能失常，事实上，它们还很危险！我的一位值得信赖的贤者使用了我自己的月之宝珠前往谦卑神殿（Shrine of Humility），他的身体在进入发送门时竟然粉碎了！要是 Cove 的那个法师没有发疯就好了！」");
	say();
	UI_remove_answer("月之门");
	UI_add_answer(["疯狂法师", "Cove"]);
	var0007 = true;
labelFunc0417_05A1:
	case "疯狂法师" attend labelFunc0417_05C5:
	message("统治者向前倾身，平静地说道。~~「 Cove 有一个名叫 Rudyom 的疯狂法师。你记得他吗？ Rudyom 当时正在研究一种名为『黑石（blackrock）』的魔法物质。在他发疯之前，他声称这种矿物可以解决月之门的问题。我建议你应该去 Cove 找到他。试着了解他用这种黑石物质在做什么。这可能是我们唯一的希望。」");
	say();
	gflags[0x0065] = true;
	Func0911(0x0014);
	UI_remove_answer("疯狂法师");
	UI_add_answer("Rudyom");
labelFunc0417_05C5:
	case "Rudyom" attend labelFunc0417_05E2:
	message("「他是一位才华洋溢且受人尊敬的法师。但近年来他发生了一些事。他似乎完全变得老态龙钟了。」");
	say();
	if (!gflags[0x0099]) goto labelFunc0417_05DB;
	message("突然间，某件事唤醒了不列颠王的记忆。「我想知道 Rudyom 身上发生的事和 Nystul 遭遇的事之间是否有所关联！」");
	say();
labelFunc0417_05DB:
	UI_remove_answer("Rudyom");
labelFunc0417_05E2:
	case "Cove" attend labelFunc0417_05F5:
	message("「你肯定还记得 Cove 。那是不列颠城东边一个非常宜人的小镇。相当令人放松。」");
	say();
	UI_remove_answer("Cove");
labelFunc0417_05F5:
	case "守护者" attend labelFunc0417_060C:
	message("「我不知道有什么『守护者』。你确定他真的存在吗？你应该进一步调查。」");
	say();
	gflags[0x00D4] = true;
	UI_remove_answer("守护者");
labelFunc0417_060C:
	case "法术书" attend labelFunc0417_061F:
	message("「是的，我有一本法术书和其余的装备一起收着。」");
	say();
	UI_remove_answer("法术书");
labelFunc0417_061F:
	case "装备" attend labelFunc0417_063F:
	message("「欢迎你使用我的任何装备。我把它们保存在这座城堡里一间上了锁的储藏室中。你可以在我的书房里找到钥匙。」");
	say();
	UI_remove_answer("装备");
	UI_add_answer(["储藏室", "书房"]);
labelFunc0417_063F:
	case "储藏室" attend labelFunc0417_0652:
	message("「我相信你能找到它的。」~~统治者狡黠地笑了笑。「把它当作是一场游戏吧！」");
	say();
	UI_remove_answer("储藏室");
labelFunc0417_0652:
	case "书房" attend labelFunc0417_0665:
	message("「就在城堡的西边。」");
	say();
	UI_remove_answer("书房");
labelFunc0417_0665:
	case "治疗" attend labelFunc0417_067D:
	Func08B4(0x0000, 0x0000, 0x0000);
	var0006 = true;
labelFunc0417_067D:
	case "Weston" attend labelFunc0417_06A1:
	message("不列颠王听了你关于 Weston 的故事。他看起来很担忧。~~「我不记得这个案子。让我查一下...嗯...」他快速扫视了一大卷卷轴。~~「因为从皇家果园偷了一颗苹果而被监禁... 太荒谬了！一定是有人篡夺了我的权力。你可以认为这个人已经被赦免了。我们将立即针对他被捕的情况以及这个叫 Figg 的家伙展开调查。感谢你，圣者。」");
	say();
	gflags[0x00CC] = true;
	Func0911(0x0014);
	UI_remove_npc(0xFFBB);
	UI_remove_answer("Weston");
labelFunc0417_06A1:
	case "隆隆声" attend labelFunc0417_06BB:
	message("不列颠王神情凝重地看着你，「一座岛屿的升起动摇了不列颠尼亚的根基。这起事件并非随机的灾难，而是出于某种巫术意图。」");
	say();
	UI_add_answer("岛屿");
	UI_remove_answer("隆隆声");
labelFunc0417_06BB:
	case "岛屿" attend labelFunc0417_06E1:
	message("「是的，");
	message(var0001);
	message("。当这座岛屿从海中升起时，我感觉到了以太之中，有巨大的扰动。这座岛屿正是你击败地狱之子 Exodus 的火之岛（Isle of Fire）。」");
	say();
	UI_add_answer(["火之岛", "Exodus"]);
	UI_remove_answer("岛屿");
labelFunc0417_06E1:
	case "火之岛" attend labelFunc0417_0709:
	message("「");
	message(var0001);
	message("，你应该知道，当我创造美德神殿时，我也在这座岛上设立了三座伟大的神殿，分别献给真理（Truth）、爱（Love）与勇气（Courage）的原则。」");
	say();
	message("「它们位于火之城堡（Castle of Fire）的城墙内。我以前从未向你透露过这点，因为当火之岛神秘地沉入波涛之下时，我以为它们永远消失了。」");
	say();
	message("「这些神殿仅供圣者使用，因此必须有护身符（talisman）才能使用它们。」");
	say();
	message("「护身符由测试守护着，如果你希望寻求它们的指引，你通过这些测试应该没有问题。」");
	say();
	Func08B5();
	UI_remove_answer("火之岛");
labelFunc0417_0709:
	case "Exodus" attend labelFunc0417_071C:
	message("「你与那种由机器和灵魂组成的奇怪混合体的战斗现在已成为传奇。如果你要去那座岛，请务必小心，因为那个存在的残骸现在就存放在火之城堡的其中一个房间里。」");
	say();
	UI_remove_answer("Exodus");
labelFunc0417_071C:
	case "古文译本" attend labelFunc0417_0722:
	if (!gflags[0x0346]) {
		message("「哦？你说你遇到了一些看不懂的古文招牌？」不列颠王沉思了一会。");
		say();
		message("「的确，那些是古老的不列颠卢恩符文。现在已经很少人使用了。」");
		say();
		message("「既然你需要，这本『古文译本』就交给你吧，它能帮助你解读那些古老的文本。」");
		say();
		UI_add_party_items(1, 0x0282, 149, 0, false);
		gflags[0x0346] = true;
	} else {
		message("「你弄丢了我给你的那本『古文译本』吗？」不列颠王叹了口气。");
		say();
		message("「好吧，看在你身负重任的份上，我再给你一本。这次可别再弄丢了！」");
		say();
		UI_add_party_items(1, 0x0282, 149, 0, false);
	}
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0417_0722:
	case "告辞" attend labelFunc0417_0727:
	goto labelFunc0417_072A;
labelFunc0417_0727:
	goto labelFunc0417_0115;
labelFunc0417_072A:
	endconv;
	message("「告辞，");
	message(var0001);
	message("。请务必尽快回来。」*");
	say();
labelFunc0417_0735:
	if (!(event == 0x0000)) goto labelFunc0417_0743;
	Func092E(0xFFE9);
labelFunc0417_0743:
	if (!(var0000 == true)) goto labelFunc0417_07CA;
	var000B = Func092D(item);
	var000C = ((var000B + 0x0004) % 0x0008);
	var000D = UI_execute_usecode_array(item, [(byte)0x59, var000C, (byte)0x27, 0x0001, (byte)0x27, 0x0002, (byte)0x27, 0x0003, (byte)0x55, 0x0417, (byte)0x27, 0x0003, (byte)0x27, 0x0002, (byte)0x27, 0x000B, (byte)0x55, 0x0417]);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var000B, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0006, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61]);
labelFunc0417_07CA:
	if (!(event == 0x0002)) goto labelFunc0417_08BD;
	if (!gflags[0x001E]) goto labelFunc0417_07E0;
	event = 0x0001;
	goto labelFunc0417_000C;
	abort;
labelFunc0417_07E0:
	if (!(!gflags[0x030D])) goto labelFunc0417_08A2;
	gflags[0x030D] = true;
	var000F = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var000F[0x0001] - 0x0001), (var000F[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0010 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0000);
	var0010 = (var0010 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0003));
	if (!(!(var0010[0x0001] >= 0x003C))) goto labelFunc0417_0876;
	var0011 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0000, (0x003C - var0010[0x0001]));
labelFunc0417_0876:
	if (!(!(var0010[0x0002] >= 0x003C))) goto labelFunc0417_089F;
	var0011 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0003, (0x003C - var0010[0x0002]));
labelFunc0417_089F:
	goto labelFunc0417_08BD;
labelFunc0417_08A2:
	UI_show_npc_face(0xFFE9, 0x0000);
	var0001 = Func0908();
	message("「我祝贺并感谢你，");
	message(var0001);
	message("！你的事迹继续为你赢得好名声。」");
	say();
	abort;
labelFunc0417_08BD:
	return;
}


