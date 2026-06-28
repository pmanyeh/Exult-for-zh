#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func04F3 object#(0x4F3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0000)) goto labelFunc04F3_0009;
	abort;
labelFunc04F3_0009:
	UI_show_npc_face(0xFF0D, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF11);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func08F7(0xFFFC);
	if (!(!gflags[0x02BD])) goto labelFunc04F3_004F;
	message("你看到面前站着一个矮胖的男人，脸上带着自命不凡的傻笑。他一手拿着灯笼，另一手拿着一把脏汤匙。");
	say();
	gflags[0x02BD] = true;
	goto labelFunc04F3_0053;
labelFunc04F3_004F:
	message("「你好，好朋友，」Malloy 说。「很高兴再次见到你。」");
	say();
labelFunc04F3_0053:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02D9]) goto labelFunc04F3_0070;
	UI_add_answer("脚上的头盔");
labelFunc04F3_0070:
	converse attend labelFunc04F3_02C3;
	case "姓名" attend labelFunc04F3_00CF:
	if (!(!gflags[0x02DA])) goto labelFunc04F3_00C4;
	message("「我的名字是 Malloy。很高兴认识你。」Malloy 礼貌地鞠了一躬。");
	say();
	if (!var0001) goto labelFunc04F3_00C1;
	if (!(!gflags[0x02BC])) goto labelFunc04F3_009A;
	message("Malloy 脸上带着恼怒的冷笑。「那边我的搭档是 Owings，」他指着在旁边拼命挖土的瘦小男人说。「你的礼貌呢？！跟我们的访客打声招呼！」");
	say();
	goto labelFunc04F3_009E;
labelFunc04F3_009A:
	message("「你已经认识我那边的搭档了，」他指着 Owings 说。");
	say();
labelFunc04F3_009E:
	UI_show_npc_face(0xFF11, 0x0000);
	message("「你好啊！」Owings 说，给了你一个大大的微笑。他采矿头盔的前缘掉了下来，遮住了他的眼睛。看不见的他，在周围的空气中摸索着。*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 悲伤地摇了摇头。*");
	say();
labelFunc04F3_00C1:
	goto labelFunc04F3_00C8;
labelFunc04F3_00C4:
	message("Malloy 恢复了镇定。「你好，我是 Malloy。我为我搭档幼稚的滑稽举动道歉。」");
	say();
labelFunc04F3_00C8:
	UI_remove_answer("姓名");
labelFunc04F3_00CF:
	case "职业" attend labelFunc04F3_0122:
	if (!(!var0001)) goto labelFunc04F3_00E5;
	message("「通常我的工作是挖土，但既然我的搭档 Owings 似乎不见了，我想我的工作就是寻找他。我希望那个小家伙没出什么事。」");
	say();
	goto labelFunc04F3_0115;
labelFunc04F3_00E5:
	message("「Owings 和我正在担任采矿工程师，这是我们最近有幸获得的职位。我们正在为不列颠尼亚矿业公司进行一项特别项目。」*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	if (!gflags[0x02DA]) goto labelFunc04F3_0100;
	message("Owings 用力地点点头，把头向后仰，然后猛地低下。「完全正确，Malloy。」*");
	say();
	goto labelFunc04F3_0104;
labelFunc04F3_0100:
	message("「完全正确，Malloy，」Owings 说。他用力地点点头，导致他的头盔掉了下来，遮住了眼睛。*");
	say();
labelFunc04F3_0104:
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
labelFunc04F3_0115:
	UI_add_answer(["采矿工程师", "特别项目"]);
labelFunc04F3_0122:
	case "采矿工程师" attend labelFunc04F3_0188:
	message("「我和搭档并不完全是采矿工程师，虽然我们确实去了 Minoc 成为矿工。我们带着一张地图来到这里……」*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("「就是那个打扮得像圣者的滑稽男人卖给我们的地图！」*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("「没错。但当我们到了这里，我们发现不列颠尼亚矿业公司已经拥有这片土地的权利了！」*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("「那个打扮得像圣者的滑稽男人对我们撒谎了。」Owings 若有所思地抓了抓头。「不列颠尼亚矿业公司想把我们关进 Yew 的监狱，因为我们侵占了矿区！」*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("「我成功说服了他们，如果我们能来为他们工作，我们对不列颠尼亚矿业公司会更有价值。」Malloy 自豪地笑着。*");
	say();
	UI_remove_answer("采矿工程师");
	UI_add_answer(["地图", "滑稽男人"]);
labelFunc04F3_0188:
	case "地图" attend labelFunc04F3_019B:
	message("「我们为那张地图付了将近一百枚金币。它应该能通往一百多年前发现的贵重矿物地点。这是一笔极好的投资。这张地图是件古董，但它看起来不超过几年！你不是每天都能看到保存得那么好的东西！」");
	say();
	UI_remove_answer("地图");
labelFunc04F3_019B:
	case "滑稽男人" attend labelFunc04F3_01AE:
	message("「有人告诉我们他的名字。让我想想我记不记得……我想是 Sullivan。对圣者来说是个滑稽的名字，但事实就是这样！」");
	say();
	UI_remove_answer("滑稽男人");
labelFunc04F3_01AE:
	case "特别项目" attend labelFunc04F3_0228:
	message("「Owings 和我现在参与了一项非常重要的特别项目，但这是个秘密。我们能信任你吗？」");
	say();
	var0005 = Func090A();
	if (!(!var0005)) goto labelFunc04F3_01ED;
	message("「既然如此，我感谢你的诚实。我其实不介意一个人不值得信任。但一个不值得信任还对此不诚实的人，那是我无法忍受的。」*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("你看到 Owings 最热情地点着头。一秒钟后，他脸上露出了非常困惑的表情。*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	goto labelFunc04F3_0228;
labelFunc04F3_01ED:
	message("「不列颠尼亚矿业公司要求我们挖一条通往 New Magincia 的隧道！这将彻底改变采矿业。」");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("「他们不想让任何人知道这件事。他们说带更多采矿设备来这里只会让人起疑，所以他们告诉我们一开始先用这些汤匙！」Owings 自豪地举起他的汤匙给你看。他笑了。");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("「是的，这是一个非常特别的项目，他们告诉我们，我们是他们能想到的唯一会去尝试做这种事的人！」Malloy 自豪地笑着。「好了，来吧，Owings，我们最好回去工作了。我们有进度要赶。」");
	say();
	UI_remove_answer("特别项目");
	UI_add_answer(["隧道", "进度"]);
labelFunc04F3_0228:
	case "隧道" attend labelFunc04F3_023B:
	message("Malloy 看着你，把一根手指放在唇边。「嘘！！！！我请你不要跟任何人提起这件事！」");
	say();
	UI_remove_answer("隧道");
labelFunc04F3_023B:
	case "进度" attend labelFunc04F3_0271:
	message("「Owings，看看那份进度表，看看我们做得怎么样了。」");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 弯下腰去捡一个非常大的卷轴。当他碰到卷轴的边缘时，卷轴滚下了矿井。当它滚走时，它展开了，在后面留下一条长长的纸痕。Owings 追了上去，但他除了让自己的双腿缠在长长的纸卷里之外，几乎什么也没做成。当他终于拿到另一端时，那已经是一团无法阅读的烂摊子了。");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("「给我！」Malloy 说着，一把抢过一块卷轴。他检查了一会儿。「根据这个，我们将在……一百七十三年后完工！Owings，我们必须开始加快工作速度了！」两个人又回去用他们的汤匙挖土。在他们挖土时，Malloy 转向 Owings 说：『你又把我卷进了这样一个大麻烦里！』」");
	say();
	UI_remove_answer("进度");
labelFunc04F3_0271:
	case "脚上的头盔" attend labelFunc04F3_02B5:
	message("Malloy 用脚踢，试图弄掉卡在那里的头盔。他看着 Owings 噘着嘴说：「你为什么不做点什么来帮我？！」");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 抓住 Malloy 脚上的头盔试图把它弄掉。在几次猛烈的拉扯后，它发出「啵」的一大声脱落了。Owings 把头盔直接拉到自己的脸上，这发出了「喀」的一大声。");
	say();
	UI_play_sound_effect(0x0053);
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 往后猛摔，惊慌地大叫。他的后脑勺撞到了他后面的岩壁。他拿下他皱巴巴的头盔并指着它。「还好我戴着这个，否则我可能会受伤！」这时，一块松动的岩石从天花板上滚下来，正正地落在他的头上。Malloy 说『喔喔喔喔喔！』Owings 突然咯咯地笑了起来。Malloy 对你做了一个难以置信、噘着嘴的鬼脸。");
	say();
	UI_play_sound_effect(0x000F);
	UI_remove_answer("脚上的头盔");
labelFunc04F3_02B5:
	case "告辞" attend labelFunc04F3_02C0:
	goto labelFunc04F3_02C3;
labelFunc04F3_02C0:
	goto labelFunc04F3_0070;
labelFunc04F3_02C3:
	endconv;
	if (!var0001) goto labelFunc04F3_02D1;
	message("Malloy 和 Owings 都停下他们正在做的事，友善地向你挥手道别。*");
	say();
	goto labelFunc04F3_02DB;
labelFunc04F3_02D1:
	message("「祝你今天愉快，");
	message(var0000);
	message("。」*");
	say();
labelFunc04F3_02DB:
	return;
}


