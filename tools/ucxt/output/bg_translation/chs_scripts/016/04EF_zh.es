#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04EF object#(0x4EF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc04EF_0009;
	abort;
labelFunc04EF_0009:
	UI_show_npc_face(0xFF11, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF0D);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func08F7(0xFFFC);
	if (!(!gflags[0x02BC])) goto labelFunc04EF_004F;
	message("在你面前的是个骨瘦如柴的男人，脸上带着傻笑。他一手拿着灯笼，另一手拿着一把脏汤匙。");
	say();
	gflags[0x02BC] = true;
	goto labelFunc04EF_0053;
labelFunc04EF_004F:
	message("「又见面了，」 Owings 说。他微笑着对你脱下他的矿工帽致意。");
	say();
labelFunc04EF_0053:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc04EF_0063:
	converse attend labelFunc04EF_02D3;
	case "姓名" attend labelFunc04EF_0091:
	message("「我的名字是 Owings ，」他说着，迅速上下握了握你的手。「很高兴认识你。」");
	say();
	if (!var0001) goto labelFunc04EF_008A;
	if (!(!gflags[0x02BD])) goto labelFunc04EF_0086;
	message("「我的伙伴名叫 Malloy 。」");
	say();
	goto labelFunc04EF_008A;
labelFunc04EF_0086:
	message("「你已经认识我的伙伴 Malloy 了。」");
	say();
labelFunc04EF_008A:
	UI_remove_answer("姓名");
labelFunc04EF_0091:
	case "职业" attend labelFunc04EF_0111:
	if (!var0001) goto labelFunc04EF_010D;
	message("「我做他做的事。」 Owings 用拇指向旁边正在挖掘的 Malloy 比了比。那个胖男人正试图只用一把汤匙凿穿岩壁。 Owings 的拇指戳到了他的背。");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 看向你，在他站起来时给了你一个友善的挥手。就在他这么做的时候，他撞到了头。发出一声响亮的敲击声。他非常大声地说：「喔喔喔喔喔喔！」他的叫声在整个矿坑中回荡。你可以感觉到天花板裂缝中掉落的灰尘落在你的肩膀上。*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 突然看起来非常紧张，将双臂抱住头。一阵可怕的隆隆声响起，你感觉脚下的地面开始震动。片刻后震动平息了。他们两人都显得非常松了口气。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 一手扶着瘀伤的头，另一手在地上摸索。他终于找到并捡起一顶金属矿工安全帽。他小心翼翼地把它戴在头上，这似乎仍然让他感到疼痛。你可以看到 Malloy 的头顶勉强塞得进去。*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("「让我重新说一遍。我做他做的事，除了一点，我总是戴着我的安全帽。」话音刚落， Owings 用力点头，上下晃动他的头。这导致他的安全帽掉下来遮住他的眼睛。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 看了看你又看了看 Owings ，对你们两个做了一个难以置信的撅嘴鬼脸。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_add_answer(["震动", "安全帽", "眼睛"]);
	goto labelFunc04EF_0111;
labelFunc04EF_010D:
	message("「通常我都在挖掘，但最近我似乎找不到我的伙伴 Malloy 。所以我想我的工作就是找他。不知道他去哪了？」");
	say();
labelFunc04EF_0111:
	case "震动" attend labelFunc04EF_016A:
	message("Owings 把手搭在你的肩膀上，将手指放在嘴唇上。「嘘！安静点！这是一条旧隧道。工头 Mikos 说，任何突然的巨响都可能引发崩塌！」*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 回到挖掘工作中。工作的劳累导致他的安全帽掉下来。他叹口气，捡起来戴上，然后继续工作。几乎立刻它又掉下来了。他重新戴上。它掉下来。他重新戴上。 Malloy 咕哝并叹气。它掉下来。他沮丧地重新戴上。这事反复发生了好几次，看着都让人觉得痛苦。最后， Malloy 干脆让安全帽躺在那里并发起脾气。他颤抖着咬住自己的手，以防在挫折中哭喊出来。*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 走到 Malloy 面前，将手指放在嘴唇上。「嘘！」 Owings 低头看到 Malloy 的安全帽掉在地上。「你不记得 Mikos 告诉过你总是戴着安全帽吗？」他说。 Owings 捡起它并拍掉灰尘。他把它压在 Malloy 酸痛的头上，痛得 Malloy 皱起了脸。「不用谢我！」 Owings 说。话音刚落，他上下点头，导致他安全帽的前缘掉下来遮住了眼睛。他盲目地伸出双臂。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 看了看 Owings 又看了看你，对你们两个做了一个撅嘴的鬼脸。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	gflags[0x02D8] = true;
	UI_remove_answer("震动");
	UI_add_answer("眼睛");
labelFunc04EF_016A:
	case "眼睛" attend labelFunc04EF_01A9:
	message("你伸手把 Owings 的安全帽往后推，这样它就不再遮住他的眼睛了。他感激地对你微笑。他拿下安全帽抓了抓头顶。他重新戴上，它立刻又倾斜下来遮住他的眼睛。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 看着这一切，得意地笑着并慢慢摇头。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer("眼睛");
	if (!gflags[0x02D8]) goto labelFunc04EF_01A9;
	UI_add_answer("Owings 的安全帽");
labelFunc04EF_01A9:
	case "安全帽" attend labelFunc04EF_01DB:
	message("「这个矿坑的工头 Mikos 告诉我们要一直戴着安全帽。这非常重要。我们俩甚至送了一顶矿工安全帽给不列颠王。一个穿得像圣者的滑稽男人告诉我们，不列颠王曾经被掉落的物体砸到头——两次！所以我们寄了一顶安全帽给他。」*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("看来 Malloy 再也无法忍受被排除在对话之外了。「送安全帽给不列颠王是『我』的主意，」他骄傲地说。「虽然我们还没收到他的回复，但我确定他会找到方法感谢我们的。」 Malloy 的安全帽掉了下来，他在那里站了很久才恢复镇定把它捡起来。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer("安全帽");
labelFunc04EF_01DB:
	case "Owings 的安全帽" attend labelFunc04EF_0228:
	message("「你真是个好人，帮我修好我的安全帽，」 Owings 说，给你一个灿烂的笑容。");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("你看到 Malloy 非常怀疑地看着 Owings 的安全帽。「你戴着我的帽子！」他发出低吼的「哼！」并一把抓下 Owings 头上的安全帽。 Malloy 摘下自己的安全帽，随意丢在地上。然后他戴上 Owings 的安全帽。这对他来说非常合适。 Malloy 对你们两人露出一个高傲的灿烂笑容。他简短地点了点头，转身回去工作。*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 看了看 Malloy 又看回你。他非常困惑。「这可不太好， Malloy ！你拿了我的帽子！」 Owings 皱起眉头。他的下唇开始颤抖。");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer(["Owings 的安全帽", "眼睛"]);
	UI_add_answer("我的帽子");
labelFunc04EF_0228:
	case "我的帽子" attend labelFunc04EF_0288:
	message("Owings 伸出手，非常小心地把 Malloy 头上的矿工安全帽拿下来，以至于他都没发现。 Owings 带着胜利的窃笑把安全帽戴回自己头上。他指着帽子，拍了拍 Malloy 的背让他知道自己做了什么。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 停止挖掘并站起来。就在他这么做的时候，他的头撞到了天花板。再次发出了响亮的敲击声。 Malloy 说：「喔喔喔！」摇摇头让自己清醒后，他慢慢地走向 Owings 。他非常生气——气到没发现他踩进了另一顶安全帽里，且它卡在他的脚上。他拿起汤匙往 Owings 的鼻子上敲下去。*");
	say();
	UI_play_sound_effect(0x0053);
	gflags[0x02D9] = true;
	UI_show_npc_face(0xFF11, 0x0000);
	message("被打中鼻子后， Owings 猛地往后仰，导致他的安全帽掉下来。「喔！我的安全帽！」他哭喊道。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 气到再也无法克制自己。「那不是你的安全帽！那是我的安全帽！」他大喊。这在矿坑里引起了雷鸣般的回音。你可以感觉到一阵落尘和岩石。伴随着低沉的隆隆声和不祥的地面震动。 Owings 和 Malloy 吓坏了，在恐慌中他们直接撞在了一起。 Malloy 的脚——那只卡着安全帽的脚——滑了出去，让他一屁股跌坐在地上。两人都抱住头，等待着大规模崩塌的到来。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer("我的帽子");
	UI_add_answer("崩塌");
labelFunc04EF_0288:
	case "崩塌" attend labelFunc04EF_02C5:
	message("经过片刻恐惧的预期，震动平息了。隧道依然屹立不摇，丝毫未损。「我以为我死定了！」 Owings 说。话音刚落，一块大石头从天花板掉下来，正中 Owings 的头。发出了一声响亮的敲击声。 Owings 开始像个小孩一样撅起嘴大哭起来。");
	say();
	UI_play_sound_effect(0x0053);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 指着 Owings 笑到眼泪流下来。 Malloy 擡头看了看天花板，开始四处摸索他的安全帽。最后，他在自己身下摸索着，抽出了他的安全帽，他刚才就跌坐在它上面！看着那顶帽子， Malloy 发现他庞大的身躯已经把它压扁了。它毁了。他还是戴上了它，看起来滑稽极了，而他欢笑的眼泪变成了悲伤的眼泪。现在，两人都陷入了孩子般的嚎啕大哭中。 Malloy 看着 Owings 说：「这又是你给我们惹的一个烂摊子！」*");
	say();
	gflags[0x02DA] = true;
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer("崩塌");
labelFunc04EF_02C5:
	case "告辞" attend labelFunc04EF_02D0:
	goto labelFunc04EF_02D3;
labelFunc04EF_02D0:
	goto labelFunc04EF_0063;
labelFunc04EF_02D3:
	endconv;
	if (!var0001) goto labelFunc04EF_02E1;
	message("Owings 和 Malloy 两人都无法停止哭泣，挥手道别。*");
	say();
	goto labelFunc04EF_02EB;
labelFunc04EF_02E1:
	message("「祝你日安，");
	message(var0000);
	message("。」*");
	say();
labelFunc04EF_02EB:
	return;
}


