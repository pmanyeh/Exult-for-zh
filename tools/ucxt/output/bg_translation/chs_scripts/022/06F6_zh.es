#game "blackgate"
// externs
extern void Func0843 0x843 ();
extern var Func0844 0x844 (var var0000);
extern var Func090A 0x90A ();
extern void Func0690 object#(0x690) ();
extern var Func0846 0x846 ();
extern void Func0845 0x845 (var var0000);
extern var Func0908 0x908 ();
extern var Func0849 0x849 (var var0000);
extern var Func0848 0x848 (var var0000);
extern var Func0847 0x847 (var var0000);
extern var Func08E7 0x8E7 ();
extern void Func06FC object#(0x6FC) ();
extern var Func092D 0x92D (var var0000);

void Func06F6 object#(0x6F6) ()
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
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;

	if (!(!gflags[0x032F])) goto labelFunc06F6_0357;
	UI_show_npc_face(0xFEDE, 0x0000);
	var0000 = false;
	var0001 = UI_find_nearby(item, 0x009A, 0x000A, 0x0008);
	enum();
labelFunc06F6_0027:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06F6_004E;
	if (!UI_get_cont_items(var0004, 0x031D, 0x00F0, 0x0004)) goto labelFunc06F6_004B;
	var0000 = var0004;
labelFunc06F6_004B:
	goto labelFunc06F6_0027;
labelFunc06F6_004E:
	if (!var0000) goto labelFunc06F6_0093;
	message("「是的，主人。我有什么能为您效劳的？」镜子里的黑暗身形深深地鞠了一躬。");
	say();
	UI_show_npc_face(0xFEE2, 0x0001);
	var0005 = "Erethian";
	if (!(!gflags[0x0310])) goto labelFunc06F6_0075;
	var0005 = "the mage";
labelFunc06F6_0075:
	message("惊讶的");
	message(var0005);
	message("环顾四周说道：「我不记得召唤过你。算了，我现在不需要你。走开！」老人漫不经心地挥了挥手。");
	say();
	UI_show_npc_face(0xFEDE, 0x0000);
	message("那个人影咬紧牙关挤出笑容回答：「很好……」在明显的停顿之后，「主人。」*");
	say();
	Func0843();
	goto labelFunc06F6_01B1;
labelFunc06F6_0093:
	if (!gflags[0x0332]) goto labelFunc06F6_0136;
	if (!gflags[0x0333]) goto labelFunc06F6_00A9;
	message("Arcadion 显得非常惊讶，「你还在等什么？！我求求你！放了我！」");
	say();
	Func0843();
	goto labelFunc06F6_0133;
labelFunc06F6_00A9:
	var0006 = UI_find_nearby(item, 0x02F8, 0x000F, 0x0000);
	var0007 = false;
	if (!var0006) goto labelFunc06F6_00FB;
	var0007 = Func0844(var0006);
	if (!var0007) goto labelFunc06F6_00E1;
	message("「附近有一颗宝石可以让我重获自由！那是一颗蓝色的小石头。快拿着它，用它把我从这面该死的镜子里放出来！」大恶魔因压抑的挫折感而沸腾。*");
	say();
	gflags[0x0333] = true;
	Func0843();
	goto labelFunc06F6_00F8;
labelFunc06F6_00E1:
	message("「在我重获自由的过程中，我能帮上什么小忙吗？如果是这样，你尽管开口。」Arcadion 的笑容咧到了耳根。");
	say();
	UI_add_answer(["姓名", "职业", "释放", "告辞"]);
labelFunc06F6_00F8:
	goto labelFunc06F6_0133;
labelFunc06F6_00FB:
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0x000C)) goto labelFunc06F6_011C;
	message("「你身上有一颗蓝色的小宝石。它可以用来释放我！用它敲碎这面该死的镜子！我一获得自由就会进入它！」 Arcadion 看起来准备从镜子里冲出来。*");
	say();
	gflags[0x0333] = true;
	Func0843();
	goto labelFunc06F6_0133;
labelFunc06F6_011C:
	message("「在我重获自由的过程中，我能帮上什么小忙吗？如果是这样，你尽管开口。」Arcadion 的笑容咧到了耳根。");
	say();
	UI_add_answer(["姓名", "职业", "释放", "告辞"]);
labelFunc06F6_0133:
	goto labelFunc06F6_01B1;
labelFunc06F6_0136:
	if (!gflags[0x0331]) goto labelFunc06F6_0171;
	message("「走开吧，小凡人。别用你那些无聊的胡言乱语来纠缠比你更优秀的存在。」他一开始显得漠不关心，然后表情变得紧张起来，「除非你重新考虑了我的提议……你考虑好了吗？」");
	say();
	if (!Func090A()) goto labelFunc06F6_0167;
	message("Arcadion 脸上闪过一抹邪恶的胜利神色，但很快就被一种滑稽的感激之情所取代，「你发誓要释放我，真是勇气可嘉。我对你感激不尽。」恶魔脸上挂着油腻的笑容，「凡人，你今天结交了一个非常强大的盟友。」他眨了眨眼，那可能是想表现得迷人一点。");
	say();
	gflags[0x0332] = true;
	UI_add_answer(["姓名", "职业", "恶魔", "释放", "告辞"]);
	goto labelFunc06F6_016E;
labelFunc06F6_0167:
	message("「啊，我明白了。你仍然满足于和其他羊群一起乱跑。」他对你挥了挥手，然后从视线中消失了。*");
	say();
	Func0843();
labelFunc06F6_016E:
	goto labelFunc06F6_01B1;
labelFunc06F6_0171:
	if (!(!gflags[0x0313])) goto labelFunc06F6_019A;
	message("「是的，主人。我有什么能为您效劳的……」镜子里摇晃的面孔犹豫了一下，「你不是我的主人。」");
	say();
	message("然后他微微鞠了一躬，继续说道：「你好，不列颠尼亚人。你对伟大的恶魔 Arcadion 有什么期望？」");
	say();
	gflags[0x0313] = true;
	UI_add_answer(["姓名", "职业", "恶魔", "告辞"]);
	goto labelFunc06F6_01B1;
labelFunc06F6_019A:
	message("「再次问候，不列颠尼亚人。你对我有什么期望？」恶魔是意气相投的灵魂。");
	say();
	UI_add_answer(["姓名", "职业", "恶魔", "告辞"]);
labelFunc06F6_01B1:
	var0008 = false;
labelFunc06F6_01B5:
	converse attend labelFunc06F6_0352;
	case "姓名" attend labelFunc06F6_01E3:
	message("大恶魔讨好地笑着，露出了一吋长的尖牙。「我说过，我是恶魔 Arcadion。」");
	say();
	if (!gflags[0x0332]) goto labelFunc06F6_01CE;
	message("他那略显抛光的伪装似乎在他对自由的期盼中逐渐瓦解。");
	say();
labelFunc06F6_01CE:
	if (!(!var0008)) goto labelFunc06F6_01DC;
	UI_add_answer("恶魔");
labelFunc06F6_01DC:
	UI_remove_answer("姓名");
labelFunc06F6_01E3:
	case "职业" attend labelFunc06F6_0218:
	if (!(!gflags[0x0332])) goto labelFunc06F6_0206;
	message("Arcadion 试图微笑，但却惨遭失败，他对你扮了个鬼脸，那鬼脸足以让龙变成石头。「我目前在为一位名叫 Erethian 的法师服务。」他相当正式地说。你有一个明显的印象，Arcadion 宁愿把 Erethian 撕成碎片，也不愿为他服务。");
	say();
	UI_add_answer(["Erethian", "服侍"]);
	goto labelFunc06F6_0211;
labelFunc06F6_0206:
	message("「好吧，如果你遵守诺言释放我，我就能摆脱那个长满虱子、被跳蚤咬过的老法师了。」");
	say();
	UI_add_answer("释放");
labelFunc06F6_0211:
	UI_remove_answer("职业");
labelFunc06F6_0218:
	case "Erethian" attend labelFunc06F6_0239:
	message("「他是我的主人……」恶魔的笑容扭曲成几乎无法掩饰的仇恨。「直到……做出其他的安排。」Arcadion 迷人的笑容出现在他阴暗的面容上。");
	say();
	if (!(!var0008)) goto labelFunc06F6_0232;
	UI_add_answer("恶魔");
labelFunc06F6_0232:
	UI_remove_answer("Erethian");
labelFunc06F6_0239:
	case "恶魔" attend labelFunc06F6_0250:
	message("「这就是你们的人称呼我们种族的方式。」你无法从 Arcadion 的语气中判断他是否介意这个事实。");
	say();
	UI_remove_answer("恶魔");
	var0008 = true;
labelFunc06F6_0250:
	case "服侍" attend labelFunc06F6_02B0:
	message("这只大恶魔闭上眼睛，似乎在克制某种恐怖情绪的力量，");
	say();
	message("「我已经为那个瞎眼的、老态龙钟的傻瓜服务了两百多年！」Arcadion 停顿了一下，恢复了镇定。一个想法明显地掠过他黑暗的脸庞，「也许你可以协助我摆脱这种不想要的束缚。我会证明自己是一个无价的盟友。」恶魔停顿了一下，让他的提议深入人心，然后说：「那么，凡人。你愿意帮助我吗？」");
	say();
	if (!Func090A()) goto labelFunc06F6_028D;
	message("Arcadion 脸上闪过一抹邪恶的胜利神色，但很快就被一种滑稽的感激之情所取代，「你发誓要释放我，真是勇气可嘉。我对你感激不尽。」恶魔脸上挂着油腻的笑容，「凡人，你今天结交了一个非常强大的盟友。」他眨了眨眼，那可能是想表现得迷人一点。");
	say();
	gflags[0x0332] = true;
	UI_remove_answer("服侍");
	if (!(!var0008)) goto labelFunc06F6_0283;
	UI_add_answer("恶魔");
labelFunc06F6_0283:
	UI_add_answer("释放");
	goto labelFunc06F6_02B0;
labelFunc06F6_028D:
	gflags[0x0331] = true;
	UI_show_npc_face(0xFEDE, 0x0001);
	message("Arcadion 看起来好像要强行穿过镜子，然后再次控制住他难以置信的愤怒。");
	say();
	UI_show_npc_face(0xFEDE, 0x0000);
	message("他将粗壮的手臂交叉在宽阔的胸前，慢慢恢复了他那可怕的笑容：「在这种情况下，我可以尊重你的懦弱。毕竟，Erethian 是一位强大的法师，不是像你这样的羊可以随便招惹的。」当恶魔准备离开时，他那轻蔑的冷笑开始消退。*");
	say();
	Func0843();
labelFunc06F6_02B0:
	case "释放" attend labelFunc06F6_02CA:
	message("「当你打破这面作为监狱的镜子时，我需要一颗特殊的宝石来容纳我的精华。」他的眼中闪烁着即将获得自由的可能性的光芒。");
	say();
	UI_add_answer("宝石");
	UI_remove_answer("释放");
labelFunc06F6_02CA:
	case "宝石" attend labelFunc06F6_0333:
	var0006 = UI_find_nearby(item, 0x02F8, 0x000F, 0x0000);
	var0007 = false;
	if (!var0006) goto labelFunc06F6_030E;
	var0007 = Func0844(var0006);
	if (!var0007) goto labelFunc06F6_0307;
	message("「我能感觉到宝石就在附近！拿着它！快拿着它，用它把我从这面该死的镜子里放出来！」Arcadion 几乎因为期待而流口水了。*");
	say();
	gflags[0x0333] = true;
	goto labelFunc06F6_030B;
labelFunc06F6_0307:
	message("「岛上有一颗，这点我很清楚。找到它。把它带给我，我们一起打破这面将我束缚在那个该死的法师身边的镜子。*");
	say();
labelFunc06F6_030B:
	goto labelFunc06F6_0330;
labelFunc06F6_030E:
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0x000C)) goto labelFunc06F6_032C;
	message("「你拿到宝石了！我感觉到了！现在用它来打破镜子！我一获得自由就会进入它！」恶魔几乎无法克制他的热情。*");
	say();
	gflags[0x0333] = true;
	goto labelFunc06F6_0330;
labelFunc06F6_032C:
	message("「岛上有一颗，这点我很清楚。找到它。把它带给我，我们一起打破这面将我束缚在那个该死的法师身边的镜子。*");
	say();
labelFunc06F6_0330:
	Func0843();
labelFunc06F6_0333:
	case "告辞" attend labelFunc06F6_034F:
	if (!gflags[0x0332]) goto labelFunc06F6_0348;
	message("Arcadion 以一种非常不符合恶魔形象的方式眨了眨眼：「再见，勇敢的凡人。你的勇气在人类中无与伦比。」*");
	say();
	goto labelFunc06F6_034C;
labelFunc06F6_0348:
	message("微笑的恶魔再次鞠躬：「再见，不列颠尼亚人。直到我们再次相遇。」恶魔的最后一句话还没说完，就开始消失了。*");
	say();
labelFunc06F6_034C:
	Func0843();
labelFunc06F6_034F:
	goto labelFunc06F6_01B5;
labelFunc06F6_0352:
	endconv;
	return;
	goto labelFunc06F6_0CF4;
labelFunc06F6_0357:
	if (!(!gflags[0x0330])) goto labelFunc06F6_066D;
	if (!(event == 0x0001)) goto labelFunc06F6_036E;
	UI_close_gumps();
	item->Func0690();
labelFunc06F6_036E:
	if (!(!(event == 0x0002))) goto labelFunc06F6_0378;
	return;
labelFunc06F6_0378:
	UI_show_npc_face(0xFEDD, 0x0000);
	var0009 = false;
	if (!(!gflags[0x0313])) goto labelFunc06F6_03BB;
	message("小宝石随着能量跳动着，「现在全不列颠尼亚都将感受到我的愤怒。我要让他们为我在那面该死的镜子里度过的每一个十年付出代价！」宝石发出更明亮的光芒，你预期世界会分崩离析……然后，什么事也没发生。「不！」恶魔原始的尖叫声通过宝石的媒介听起来有点像水晶般的清脆。「这不可能！那个老傻瓜是对的。我还被困住！」恶魔痛苦的声音安静了下来。");
	say();
	gflags[0x0313] = true;
	UI_add_answer(["姓名", "职业", "愤怒", "困住", "告辞"]);
	if (!gflags[0x0338]) goto labelFunc06F6_03B8;
	UI_add_answer("黑剑");
labelFunc06F6_03B8:
	goto labelFunc06F6_03EC;
labelFunc06F6_03BB:
	message("宝石对你闪烁着光芒，「是的，主人。我有什么能为您效劳的？」Arcadion 的声音变得柔和了。");
	say();
	UI_add_answer(["姓名", "职业", "主人", "告辞"]);
	if (!gflags[0x0338]) goto labelFunc06F6_03DF;
	UI_add_answer("黑剑");
labelFunc06F6_03DF:
	if (!gflags[0x0334]) goto labelFunc06F6_03EC;
	UI_add_answer("力量");
labelFunc06F6_03EC:
	converse attend labelFunc06F6_0669;
	case "黑剑" attend labelFunc06F6_0409:
	message("「如果你希望我将宝石与剑结合，你只要吩咐我就行了，主人。」");
	say();
	UI_add_answer("结合");
	UI_remove_answer("黑剑");
labelFunc06F6_0409:
	case "结合" attend labelFunc06F6_04D2:
	if (!Func0846()) goto labelFunc06F6_04C7;
	var000A = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x029C, 0xFE99, 0x000F);
	var000B = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D);
	UI_remove_item(var000A);
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x02C3);
	UI_set_item_frame(var000C, 0x0000);
	message("「遵命！」");
	say();
	message("当宝石接触到剑柄十字时，空气中传来撕裂金属的刺耳声。剑刃移动并闪烁着，仿佛有生命一般。");
	say();
	if (!UI_give_last_created(UI_get_npc_object(0xFE9C))) goto labelFunc06F6_0484;
	message("慢慢地，剑恢复了原来的形状，只是剑柄上闪烁着蓝色的宝石。");
	say();
	goto labelFunc06F6_04A0;
labelFunc06F6_0484:
	message("闪过一道只能被形容为黑光的闪光，剑从你手中被猛然夺走，掉落在地上。");
	say();
	var000D = UI_get_object_position(UI_get_npc_object(0xFE9C));
	var000E = UI_update_last_created(var000D);
labelFunc06F6_04A0:
	gflags[0x0330] = true;
	gflags[0x0313] = false;
	var000F = UI_execute_usecode_array(var000C, [(byte)0x2C, (byte)0x23, (byte)0x55, 0x070B, (byte)0x55, 0x06F6]);
	abort;
	goto labelFunc06F6_04CB;
labelFunc06F6_04C7:
	message("「剑和宝石必须都在你的手中，才能完成结合。」");
	say();
labelFunc06F6_04CB:
	UI_remove_answer("结合");
labelFunc06F6_04D2:
	case "姓名" attend labelFunc06F6_04E5:
	message("「我的名字还是 Arcadion，尽管我的监狱变了。」");
	say();
	UI_remove_answer("姓名");
labelFunc06F6_04E5:
	case "职业" attend labelFunc06F6_0506:
	message("「我现在是你的仆人。你有什么吩咐，主人？」");
	say();
	if (!(!var0009)) goto labelFunc06F6_04FF;
	UI_add_answer("主人");
labelFunc06F6_04FF:
	UI_remove_answer("职业");
labelFunc06F6_0506:
	case "愤怒" attend labelFunc06F6_0527:
	message("Arcadion 回答时听起来有些沉思：「请原谅我一时的轻率，主人。我痛苦的情绪短暂地战胜了我的理智。我不会让这种事再发生了。」");
	say();
	if (!(!var0009)) goto labelFunc06F6_0520;
	UI_add_answer("主人");
labelFunc06F6_0520:
	UI_remove_answer("愤怒");
labelFunc06F6_0527:
	case "困住" attend labelFunc06F6_0565:
	var0005 = false;
	if (!(!gflags[0x0310])) goto labelFunc06F6_0543;
	var0005 = "the mage Erethian";
	goto labelFunc06F6_0549;
labelFunc06F6_0543:
	var0005 = "Erethian";
labelFunc06F6_0549:
	message("「看来");
	message(var0005);
	message("的假设是正确的，如果我进入这颗宝石，我的力量将无法随心所欲地释放，而是听从拥有这颗宝石的人的差遣。」");
	say();
	gflags[0x0334] = true;
	UI_add_answer("力量");
	UI_remove_answer("困住");
labelFunc06F6_0565:
	case "力量" attend labelFunc06F6_0628:
	if (!(!gflags[0x0333])) goto labelFunc06F6_05CC;
	message("你听到一声微弱的叹息，然后，「你想分享我的力量吗？」");
	say();
	if (!Func090A()) goto labelFunc06F6_059B;
	message("Arcadion 听起来很失望：「我就知道会是这样。我注定永远是意志薄弱的凡人的奴隶。好吧，那么，准备接受我巨大能量的一部分吧。");
	say();
	gflags[0x0333] = true;
	Func0845(false);
	if (!(!var0009)) goto labelFunc06F6_0598;
	UI_add_answer("主人");
labelFunc06F6_0598:
	goto labelFunc06F6_05C9;
labelFunc06F6_059B:
	if (!(!gflags[0x0335])) goto labelFunc06F6_05BB;
	message("「也许我看错你了，主人。」他若有所思地停顿了一下，「也许随着时间的推移，你可以称我为朋友，也可以称我为盟友。」");
	say();
	gflags[0x0335] = true;
	if (!(!var0009)) goto labelFunc06F6_05B8;
	UI_add_answer("主人");
labelFunc06F6_05B8:
	goto labelFunc06F6_05C9;
labelFunc06F6_05BB:
	if (!(!var0009)) goto labelFunc06F6_05C9;
	UI_add_answer("主人");
labelFunc06F6_05C9:
	goto labelFunc06F6_0621;
labelFunc06F6_05CC:
	message("「你又需要我的能量了？」Arcadion 有些任性地问道。");
	say();
	if (!Func090A()) goto labelFunc06F6_05EF;
	message("「很好，准备好了。」宝石发光。");
	say();
	Func0845(false);
	if (!(!var0009)) goto labelFunc06F6_05EC;
	UI_add_answer("主人");
labelFunc06F6_05EC:
	goto labelFunc06F6_0621;
labelFunc06F6_05EF:
	if (!(!gflags[0x0335])) goto labelFunc06F6_060F;
	message("「你对我有什么期望……」停顿了一下，「主人？」");
	say();
	gflags[0x0335] = true;
	if (!(!var0009)) goto labelFunc06F6_060C;
	UI_add_answer("主人");
labelFunc06F6_060C:
	goto labelFunc06F6_0621;
labelFunc06F6_060F:
	message("「你是想用无用的问题来折磨我，还是我可以为您效劳……」长长的停顿，「主人。」");
	say();
	if (!(!var0009)) goto labelFunc06F6_0621;
	UI_add_answer("主人");
labelFunc06F6_0621:
	UI_remove_answer("力量");
labelFunc06F6_0628:
	case "主人" attend labelFunc06F6_0646:
	message("恶魔停顿了一下，「你囚禁了我的肉体，因此我被远比你我所掌握的还要古老的力量束缚，必须服从你的意志。你对我有什么期望？」");
	say();
	UI_add_answer("束缚");
	var0009 = true;
	UI_remove_answer("主人");
labelFunc06F6_0646:
	case "束缚" attend labelFunc06F6_0659:
	message("「很久以前，即使以我的时间计算也是如此，我的人民在试图征服这个领域时，被一个强大的种族击败了。这个种族早在你的君主，不列颠王（不列颠王）到来之前就住在这里了。我的人民被击败了，他们预期会面临死亡，但这些伟大而强大的存在并不是毁灭者。然而，他们也不希望我的同类进一步造成破坏。所以他们编织了超出我种族认知的魔法，将我们与这个领域的居民绑定在一起。你们自己的人只是利用现有的魔法来奴役我们，有时甚至不知道这是如何实现的。」");
	say();
	UI_remove_answer("束缚");
labelFunc06F6_0659:
	case "告辞" attend labelFunc06F6_0666:
	message("「再见，我的主人。」宝石似乎暗淡了一点。*");
	say();
	abort;
labelFunc06F6_0666:
	goto labelFunc06F6_03EC;
labelFunc06F6_0669:
	endconv;
	goto labelFunc06F6_0CF4;
labelFunc06F6_066D:
	if (!(event == 0x0001)) goto labelFunc06F6_067D;
	UI_close_gumps();
	item->Func0690();
labelFunc06F6_067D:
	if (!(event == 0x0002)) goto labelFunc06F6_0CF4;
	if (!(!gflags[0x0313])) goto labelFunc06F6_075D;
	if (!(!gflags[0x0343])) goto labelFunc06F6_06D8;
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, 0x0004, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001]);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0007, (byte)0x55, 0x06F6]);
	gflags[0x0343] = true;
	return;
labelFunc06F6_06D8:
	if (!(!gflags[0x0344])) goto labelFunc06F6_0748;
	var000D = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0011, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0x0003);
	UI_sprite_effect(0x0011, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x003E);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0003, (byte)0x55, 0x06F6]);
	gflags[0x0344] = true;
	return;
labelFunc06F6_0748:
	UI_show_npc_face(0xFEDC, 0x0000);
	message("当你对它说话时，剑闪烁着暗光。「你好，我的主人。你谦卑的仆人能为您效劳吗？」恶魔的声音恢复了许多他那令人不安的幽默感。");
	say();
	gflags[0x0313] = true;
	goto labelFunc06F6_076B;
labelFunc06F6_075D:
	UI_show_npc_face(0xFEDC, 0x0000);
	message("「是的，主人。你对你的仆人有什么期望？」Arcadion 用低沉、和谐的声音问你。");
	say();
labelFunc06F6_076B:
	UI_add_answer(["姓名", "职业", "告辞", "力量"]);
	if (!(gflags[0x030E] && (!gflags[0x030C]))) goto labelFunc06F6_0790;
	UI_add_answer("帮忙");
labelFunc06F6_0790:
	var0011 = false;
	var0012 = false;
	var0013 = false;
	var0014 = false;
	var0015 = false;
labelFunc06F6_07A4:
	converse attend labelFunc06F6_0B88;
	case "姓名" attend labelFunc06F6_07BA:
	message("恶魔剑的语气相当不祥，他说：「我是，而且永远都是你的仆人 Arcadion。」");
	say();
	UI_remove_answer("姓名");
labelFunc06F6_07BA:
	case "职业" attend labelFunc06F6_07CD:
	message("「我是暗影之刃。我的命运就是为您服务，直到我们……」剑停顿了一下，「分开。」");
	say();
	UI_remove_answer("职业");
labelFunc06F6_07CD:
	case "力量" attend labelFunc06F6_0812:
	if (!(!UI_is_readied(UI_get_npc_object(0xFE9C), 0x0001, 0x02C3, 0xFE99))) goto labelFunc06F6_07F4;
	message("「主人，如果你想使用我的力量，我必须在你的手中。」");
	say();
	goto labelFunc06F6_0812;
labelFunc06F6_07F4:
	message("「你想使用我的哪种力量？」");
	say();
	UI_push_answers();
	UI_add_answer(["魔法", "火焰", "死亡", "返回", "无"]);
labelFunc06F6_0812:
	case "帮忙" attend labelFunc06F6_0832:
	message("Arcadion 在回复你的求助请求时，声音洋洋得意。「是的，如果你希望将 Exodus 剩下的部分放逐到虚空中，我可以帮助你。首先，你需要那个老糊涂提到的透镜。接下来，你必须拥有三个原则护符（Talismans of Principle）。最后，确保在黑暗内核所在的基座两侧墙上有点燃的火炬。");
	say();
	UI_add_answer(["透镜", "护符"]);
	UI_remove_answer("帮忙");
labelFunc06F6_0832:
	case "透镜" attend labelFunc06F6_0845:
	message("「我相信你用来将无限智能法典放置在虚空中的凹凸透镜，现在被遗忘在不列颠尼亚博物馆里。它们必须被放置在黑暗内核和基座两侧的火炬之间。」");
	say();
	UI_remove_answer("透镜");
labelFunc06F6_0845:
	case "护符" attend labelFunc06F6_0858:
	message("「原则护符必须像派里的楔子一样放置在黑暗内核上。」");
	say();
	UI_remove_answer("护符");
labelFunc06F6_0858:
	case "无" attend labelFunc06F6_0868:
	message("「如你所愿，主人。我只求为您服务。」");
	say();
	UI_pop_answers();
labelFunc06F6_0868:
	case "魔法" attend labelFunc06F6_089C:
	var0016 = UI_part_of_day();
	if (!((var0016 == 0x0007) || ((var0016 == 0x0000) || (var0016 == 0x0001)))) goto labelFunc06F6_0898;
	Func0845(true);
	goto labelFunc06F6_089C;
labelFunc06F6_0898:
	message("剑低声吟唱：「唉，主人。我的能量似乎有点低。也许如果你能找到一些生物来杀戮，我的力量就足够了。毕竟，我也和你有同样的需求。」");
	say();
labelFunc06F6_089C:
	case "死亡" attend labelFunc06F6_0B2A:
	message("「你说的尸体在哪里？」暗剑开始在你手中震动。*");
	say();
	UI_remove_npc_face(0xFEDC);
	var0011 = UI_click_on_item();
	var0017 = UI_get_item_shape(var0011);
	var0018 = UI_get_object_position(var0011);
	UI_show_npc_face(0xFEDC, 0x0000);
	if (!UI_is_npc(var0011)) goto labelFunc06F6_0ABC;
	if (!((var0017 == 0x02D1) || (var0017 == 0x03DD))) goto labelFunc06F6_08F7;
	message("恶魔用假装虔诚的语气说话：「为了荣誉，我不能夺走我最奇妙的主人的生命。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_08F7:
	if (!(var0017 == 0x01D2)) goto labelFunc06F6_0988;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0981;
	message("「是的！我早就想结束不列颠王，我那个叛徒主人的生命了。」");
	say();
	var0019 = Func0908();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"");
	message(var0019);
	message("，你为什么要在我面前挥舞那把黑剑？」");
	say();
	UI_remove_npc_face(0xFEDC);
	UI_show_npc_face(0xFE9C, 0x0000);
	message("恶魔用你的嘴回答：「这把剑是你的末日，……」你吐出这些字眼，「不列颠王！」");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("不列颠王看起来真的吃了一惊，他瞇起眼睛算计着。「这是什么肮脏的背叛？」");
	say();
	UI_show_npc_face(0xFE9C, 0x0000);
	message("你发现自己无法回答，你的肌肉紧绷着，仿佛要用手中那把邪恶的剑猛烈攻击。");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("「也许当你坐在地牢里时，你的舌头就会松开了。");
	say();
	message("「守卫！」*");
	say();
	var0014 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0988;
labelFunc06F6_0981:
	message("暗影之刃发出刺耳的低语。「再靠近他一点，我会为你完成这项任务，主人。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0988:
	if (!((var0017 == 0x01E2) || (var0017 == 0x0193))) goto labelFunc06F6_09A1;
	message("「唉，主人，这个人受到一种比我更强大的力量保护。他的命运在别处。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_09A1:
	if (!Func0849(var0017)) goto labelFunc06F6_09B1;
	message("剑因类似恐惧的情绪而退缩。「那个生物甚至超出了我的能力范围。我建议如果可能的话，你把它砍成碎片，然后烧掉那些碎片。」Arcadion 提供有益的建议。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_09B1:
	if (!(var0017 == 0x01F8)) goto labelFunc06F6_0A21;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0A1A;
	if (!UI_get_cont_items(var0011, 0x031D, 0x00F1, 0x0004)) goto labelFunc06F6_0A14;
	message("「啊，Dracothraxus。我们又见面了。真可惜你这次无法在我们的会面中幸存下来。也许如果你一开始就把宝石给我，这一切的不愉快就没有必要了。」");
	say();
	UI_show_npc_face(0xFEDB, 0x0000);
	message("这条龙非常无奈地回答：「在这件事上，我的意志由不得我，Arcadion。也许你也发现，你的意志由不得你。」");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("这只恶魔可能被这条龙的反驳刺痛了，沉默了下来，开始进行他血腥的工作。*");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0A17;
labelFunc06F6_0A14:
	goto labelFunc06F6_0A7F;
labelFunc06F6_0A17:
	goto labelFunc06F6_0A21;
labelFunc06F6_0A1A:
	message("暗影之刃温柔地低声吟唱：「再靠近这条龙一点，我会为你结束它的生命，主人。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A21:
	if (!(var0017 == 0x009A)) goto labelFunc06F6_0A6E;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0A67;
	if (!UI_get_cont_items(var0011, 0x031D, 0x00F0, 0x0004)) goto labelFunc06F6_0A61;
	message("「我欠你一个人情，主人。我感谢你允许我这样做，我的复仇！」*");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0A64;
labelFunc06F6_0A61:
	goto labelFunc06F6_0A7F;
labelFunc06F6_0A64:
	goto labelFunc06F6_0A6E;
labelFunc06F6_0A67:
	message("「靠近他，我会确保他的生命不再折磨你。」黑剑对这个前景听起来几乎是兴高采烈的。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A6E:
	if (!(var0017 == 0x03F7)) goto labelFunc06F6_0A7F;
	message("「严格来说，这种生物并不……活着。你最好的行动方案是把它打碎。」你听出 Arcadion 声音里的笑意。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A7F:
	if (!Func0848(var0017)) goto labelFunc06F6_0AB5;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0AAB;
	message("「很好，主人。如果你不能亲自解决这个敌人，我会为你解决。」");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0AB2;
labelFunc06F6_0AAB:
	message("「我必须靠近它，才能享受它的精华。」剑急切地嗡嗡作响，向你选择的目标方向拉扯。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0AB2:
	goto labelFunc06F6_0ABC;
labelFunc06F6_0AB5:
	message("恶魔之剑突然停止了震动。「这种生物不值得我让它死。当你面临更值得的对手时，再召唤我吧。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ABC:
	if (!Func0847(var0017)) goto labelFunc06F6_0ACC;
	message("「也许你误解了我的意思。我不让死人复活……我杀戮活人。」最后一句话是以嘶嘶作响的低语说出的。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ACC:
	if (!(!var0017)) goto labelFunc06F6_0ADA;
	message("「你要我摧毁你周围的世界。对你这样一个被认为是品德高尚的人来说，这不是一个很聪明的主意。」剑里传出一阵奇怪的金属笑声。");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ADA:
	if (!(var0017 == 0x009B)) goto labelFunc06F6_0AEB;
	message("这把剑因类似恐惧的情绪而退缩。「那个存在甚至超出了我的能力范围。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0AEB:
	if (!((var0017 == 0x031C) || (var0017 == 0x01BF))) goto labelFunc06F6_0B04;
	message("恶魔之剑突然停止了震动。「这种生物不值得我让它死。当你面临更值得的对手时，再召唤我吧。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B04:
	if (!(var0017 == 0x02C3)) goto labelFunc06F6_0B15;
	message("「主人，你没那么容易摆脱我。不过，我并不嫉妒你的尝试。恰恰相反。我尊重你的足智多谋。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B15:
	if (!(var0017 == 0x03DE)) goto labelFunc06F6_0B26;
	message("「要是我有那样的力量就好了。只要我能解开它的秘密，那件神器就能让我回到我的家乡位面。」");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B26:
	message("「你对这个无生命的物体有这么大的怨恨，以至于想看到它永远毁灭吗？」他的声音充满了毫不掩饰的讽刺。「我无法从已经没有生命的东西上夺走生命。」");
	say();
labelFunc06F6_0B2A:
	case "返回" attend labelFunc06F6_0B5C:
	if (!(!Func08E7())) goto labelFunc06F6_0B58;
	message("「啊……又回家了。我永远不会对岩石小岛感到厌倦。你真的想去那座被遗弃的烈火岛（Isle of Fire）吗？」");
	say();
	if (!Func090A()) goto labelFunc06F6_0B51;
	message("「我明白了。很好，主人。但我们不要忘记这个小小的恩惠……」剑柄上的宝石发出明亮的光芒，然后一切都变暗了。*");
	say();
	var0013 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0B55;
labelFunc06F6_0B51:
	message("「很好。理智回到了美德奇迹的身上。主人，你在思想的舞台上真的是无与伦比。」");
	say();
labelFunc06F6_0B55:
	goto labelFunc06F6_0B5C;
labelFunc06F6_0B58:
	message("「请原谅我，主人，但我们不是已经在烈火岛（Isle of Fire）上或附近了吗？虽然我不明白为什么有人想留在这块被遗弃的岩石上。」");
	say();
labelFunc06F6_0B5C:
	case "火焰" attend labelFunc06F6_0B76:
	message("「请问，你那巨大而强大无比的愤怒的预定目标是什么，无尽毁灭的主人？」");
	say();
	UI_remove_npc_face(0xFEDC);
	var0012 = true;
	goto labelFunc06F6_0B89;
labelFunc06F6_0B76:
	case "告辞" attend labelFunc06F6_0B85:
	message("「请原谅我，主人，但我不会离开。但是，如果你希望的话……你可以停止说话。」*");
	say();
	goto labelFunc06F6_0B89;
labelFunc06F6_0B85:
	goto labelFunc06F6_07A4;
labelFunc06F6_0B88:
	endconv;
labelFunc06F6_0B89:
	if (!var0012) goto labelFunc06F6_0B93;
	item->Func06FC();
labelFunc06F6_0B93:
	if (!var0013) goto labelFunc06F6_0BAE;
	var001A = UI_execute_usecode_array(item, [(byte)0x27, 0x0001, (byte)0x55, 0x06F9]);
labelFunc06F6_0BAE:
	if (!var0014) goto labelFunc06F6_0C4A;
	var001B = Func092D(var0011);
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var001B, (byte)0x64, (byte)0x27, 0x0002, (byte)0x68, (byte)0x27, 0x0002, (byte)0x69, (byte)0x27, 0x0001, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x61]);
	if (!(!UI_get_item_flag(var0011, 0x0001))) goto labelFunc06F6_0C33;
	var001C = ((var001B + 0x0004) % 0x0008);
	var001D = UI_execute_usecode_array(var0011, [(byte)0x59, var001C, (byte)0x27, 0x0003, (byte)0x64, (byte)0x27, 0x0007, (byte)0x55, 0x070F]);
	goto labelFunc06F6_0C4A;
labelFunc06F6_0C33:
	var001D = UI_execute_usecode_array(var0011, [(byte)0x27, 0x000C, (byte)0x55, 0x070F]);
labelFunc06F6_0C4A:
	if (!var0015) goto labelFunc06F6_0CF4;
	var001B = Func092D(var0011);
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var001B, (byte)0x64, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0001, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x61]);
	if (!(!UI_get_item_flag(var0011, 0x0001))) goto labelFunc06F6_0CDD;
	var001C = ((var001B + 0x0004) % 0x0008);
	var001D = UI_execute_usecode_array(var0011, [(byte)0x59, var001C, (byte)0x27, 0x0002, (byte)0x64, (byte)0x27, 0x0004, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0001, (byte)0x55, 0x070F]);
	goto labelFunc06F6_0CF4;
labelFunc06F6_0CDD:
	var001D = UI_execute_usecode_array(var0011, [(byte)0x27, 0x000C, (byte)0x55, 0x070F]);
labelFunc06F6_0CF4:
	return;
}


