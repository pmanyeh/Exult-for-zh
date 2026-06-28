#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func08C1 0x8C1 ();
extern void Func08C2 0x8C2 ();
extern void Func091F 0x91F (var var0000, var var0001);
extern void Func08BF 0x8BF (var var0000);
extern var Func090A 0x90A ();
extern void Func08C0 0x8C0 ();

void Func048F object#(0x48F) ()
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

	if (!(event == 0x0001)) goto labelFunc048F_03E7;
	UI_show_npc_face(0xFF71, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = UI_part_of_day();
	var0007 = false;
	var0008 = false;
	var0009 = UI_get_schedule_type(0xFF71);
	if (!(!gflags[0x01B7])) goto labelFunc048F_0056;
	message("这位年老的幽灵妇女哼着一首古老民谣的曲调，并擡起头对你微笑。这位老妇人会让你想起你见过的每一位祖母。~~显然，她并没有完全忽视你的存在。然而，当你跟她说话时，你的话似乎都成了耳边风。她疑惑了片刻，然后挥动着双臂施展魔法。你认出那些话语是降神术的变体。");
	say();
	gflags[0x01B7] = true;
labelFunc048F_0056:
	if (!(!gflags[0x01AA])) goto labelFunc048F_0097;
	if (!((var0006 == 0x0000) || (var0006 == 0x0001))) goto labelFunc048F_0097;
	if (!(var0009 == 0x000E)) goto labelFunc048F_0081;
	message("这位年老的幽灵妇女看起来很奇怪。她的眼睛是睁开的，但她似乎没有醒着，或者至少对周遭环境没有意识。*");
	say();
	abort;
	goto labelFunc048F_0097;
labelFunc048F_0081:
	if (!(!(var0009 == 0x0010))) goto labelFunc048F_0097;
	message("「我很抱歉，");
	message(var0000);
	message("。请不要见怪，但在我们进一步交谈之前，我必须先休息。感谢你的耐心，年轻人。」她转身时看起来非常疲惫。*");
	say();
	abort;
labelFunc048F_0097:
	if (!(!gflags[0x01D0])) goto labelFunc048F_00AB;
	if (!gflags[0x01C0]) goto labelFunc048F_00AB;
	UI_add_answer("材料");
labelFunc048F_00AB:
	var000A = UI_get_party_list();
	if (!UI_get_item_flag(UI_get_npc_object(0xFF70), 0x0006)) goto labelFunc048F_00C6;
	Func08C1();
labelFunc048F_00C6:
	if (!UI_get_item_flag(UI_get_npc_object(0xFF6D), 0x0006)) goto labelFunc048F_00DA;
	Func08C2();
labelFunc048F_00DA:
	if (!gflags[0x0198]) goto labelFunc048F_00E7;
	UI_add_answer("牺牲");
labelFunc048F_00E7:
	var000B = false;
	var000C = false;
	if (!(!gflags[0x01C8])) goto labelFunc048F_010D;
	message("「你好，");
	message(var0000);
	message("。你可以叫我 Mordra 女士。」她仔细地端详着你。~~「而你一定是");
	message(var0001);
	message("，圣者。」她从头到脚打量着你。");
	say();
	gflags[0x01C8] = true;
	goto labelFunc048F_011B;
labelFunc048F_010D:
	message("「再次向你问好，");
	message(var0001);
	message("。」");
	say();
	var0008 = true;
labelFunc048F_011B:
	var000D = UI_get_avatar_ref();
	var000E = UI_find_nearest(var000D, 0x0190, 0x0019);
	if (!(var000E == 0x0000)) goto labelFunc048F_014C;
	var000E = UI_find_nearest(var000D, 0x019E, 0x0019);
labelFunc048F_014C:
	if (!(!(var000E == 0x0000))) goto labelFunc048F_016A;
	var000F = 0x0000;
	Func091F(var000E, var000F);
	var0002 = true;
labelFunc048F_016A:
	var000A = UI_get_party_list2();
	enum();
labelFunc048F_0172:
	for (var0012 in var000A with var0010 to var0011) attend labelFunc048F_0190;
	UI_clear_item_flag(var0012, 0x0008);
	Func08BF(var0012);
	goto labelFunc048F_0172;
labelFunc048F_0190:
	message("她举起双臂，你看到她其中一只手上拿着一个生命护符。一些你隐约觉得熟悉的话语从她唇间流泻而出，生命护符闪烁着明亮的光芒。她停止咏唱，安卡的光芒也随之黯淡。在她完成对你身体状况的分析后，「啊，很高兴看到这个世界对你还不错。我能为你服务什么，『美德之尊』？」");
	say();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x01A8] && (!gflags[0x01AA]))) goto labelFunc048F_01B6;
	UI_add_answer("造好的笼子");
labelFunc048F_01B6:
	converse attend labelFunc048F_03E6;
	case "姓名" attend labelFunc048F_01D2:
	message("她对你微笑。「你真健忘，");
	message(var0001);
	message("。就像我告诉过你的，我被称为 Mordra 。」");
	say();
	UI_remove_answer("姓名");
labelFunc048F_01D2:
	case "职业" attend labelFunc048F_01EE:
	message("「在大火爆发、粉碎这里人们的生活之前，我是这个镇上的治疗师。我也曾涉猎过一阵子的秘密魔法技艺。」她狡黠地对你眨了眨眼。");
	say();
	UI_add_answer(["生活", "大火", "魔法技艺"]);
labelFunc048F_01EE:
	case "材料" attend labelFunc048F_0201:
	message("「如果我告诉你，你必须确保把它们弄对。否则，我告诉那个该死的镇长时发生的事就会重演。而且，虽然我们在 Skara Brae 已经没有更多的生命可以失去了，但你还有一条相当宝贵的生命！~~「能溶解巫妖的混合物所需的材料是：一瓶隐身药水、一剂解毒药水，以及一瓶曼陀罗根精华——我在我的房子里存放了一组。记住，只要『一瓶』曼陀罗根精华！」");
	say();
	UI_remove_answer("材料");
labelFunc048F_0201:
	case "造好的笼子" attend labelFunc048F_0236:
	UI_remove_answer("造好的笼子");
	message("「这灵魂笼必须被赋予死者的力量。达成这个目标的方法是前往黑暗塔的后方，灵魂之井的所在地。你必须将笼子降入井中，被困在那里的灵魂会失去自己的一部分，以为它注入所需的力量。~~「我知道这听起来很残酷，但如果你想看到他们获得自由，这就是必要之恶。」她严厉地看着你。~~「下一步是等到午夜，然后将笼子罩在巫妖横躺的身躯上。这正是他为了他的黑暗仪式而吸取镇民灵魂的时段。」~~片刻后，她继续说道。「最后，你必须将一种魔法配方倒在笼子里的巫妖身上。这配方与摧毁这个城镇的物质相同。~~「在向炼金术士 Caine 取得它时，务必小心。」");
	say();
	UI_add_answer(["黑暗塔", "灵魂之井", "黑暗仪式"]);
	if (!(!gflags[0x01C0])) goto labelFunc048F_0232;
	UI_add_answer("配方");
labelFunc048F_0232:
	var0004 = true;
labelFunc048F_0236:
	case "配方" attend labelFunc048F_0254:
	message("「你必须要有 Caine 的协助才能调制配方，但我可以把材料给你。」");
	say();
	gflags[0x01C0] = true;
	UI_remove_answer("配方");
	UI_add_answer("材料");
labelFunc048F_0254:
	case "黑暗塔" attend labelFunc048F_0279:
	message("「黑暗塔位于 Skara Brae 西北方的岬角上。它的建筑有些古怪，因为我发现很难用我的魔法感知穿透它。~在里面，」她说，「你会找到灵魂之井。」");
	say();
	UI_remove_answer("黑暗塔");
	if (!(!var0007)) goto labelFunc048F_0275;
	UI_add_answer("灵魂之井");
labelFunc048F_0275:
	var0013 = true;
labelFunc048F_0279:
	case "灵魂之井" attend labelFunc048F_0294:
	var0007 = true;
	message("「灵魂之井是一件强大的神器，位于黑暗塔下方，巫妖就是从那里汲取力量的。死者的灵魂被囚禁在那里，注定要承受 Horance 贪得无厌的胃口所带来的折磨。」痛苦的表情出现在她的脸上。");
	say();
	UI_remove_answer("灵魂之井");
	var0007 = true;
labelFunc048F_0294:
	case "黑暗仪式" attend labelFunc048F_02D1:
	if (!(!gflags[0x01AA])) goto labelFunc048F_02B8;
	message("Mordra 愤怒地说：「每天晚上，在午夜钟声敲响时， Skara Brae 的灵魂都会前往黑暗塔，并被用来为 Horance 注入力量，以维持他黑暗的存在。其他人都没有意识到这件事的发生，但我能感觉到，却无法阻止自己。」");
	say();
	if (!(!var0013)) goto labelFunc048F_02B5;
	UI_add_answer("黑暗塔");
labelFunc048F_02B5:
	goto labelFunc048F_02CA;
labelFunc048F_02B8:
	message("「即使巫妖已经不在了，我们仍然会被吸引到他进行黑暗仪式的地方。他一定是用某种誓约束缚了我们，并将其与灵魂之井的力量联系在一起。喔，他真是个狡猾的恶棍。」 Mordra 的表情中混合了对一位熟练法师的勉强敬意以及厌恶。");
	say();
	if (!(!var0007)) goto labelFunc048F_02CA;
	UI_add_answer("灵魂之井");
labelFunc048F_02CA:
	UI_remove_answer("黑暗仪式");
labelFunc048F_02D1:
	case "生活" attend labelFunc048F_030A:
	message("「你想了解 Skara Brae 的镇民吗？」");
	say();
	if (!var0008) goto labelFunc048F_02E7;
	message("「我也许有一些关于我镇民同胞的新情报，可能会对你有用，」她说着，并补充了一个微笑。");
	say();
labelFunc048F_02E7:
	var0014 = Func090A();
	if (!var0014) goto labelFunc048F_02F9;
	Func08C0();
	goto labelFunc048F_0303;
labelFunc048F_02F9:
	message("「很好，");
	message(var0000);
	message("。你想知道关于什么的事？」");
	say();
labelFunc048F_0303:
	UI_remove_answer("生活");
labelFunc048F_030A:
	case "大火" attend labelFunc048F_033A:
	message("「那是这个镇的劫数，虽然我不责怪炼金术士 Caine 。因为是我告诉他那个我确信能帮我们除掉巫妖 Horance 的配方的。」");
	say();
	UI_remove_answer("大火");
	if (!(!var0005)) goto labelFunc048F_032B;
	UI_add_answer("Caine");
labelFunc048F_032B:
	UI_add_answer("配方");
	var000B = true;
	var000C = true;
labelFunc048F_033A:
	case "配方" attend labelFunc048F_035B:
	message("「那只是几种材料的简单混合。它本来应该会起作用的。」她瞇起了眼睛。~~「我想是我们那位镇长， Forsythe ，把事情搞砸了！」");
	say();
	UI_remove_answer("配方");
	if (!(!var0003)) goto labelFunc048F_035B;
	UI_add_answer("镇长");
labelFunc048F_035B:
	case "镇长" attend labelFunc048F_0380:
	message("「那个人是个笨手笨脚的白痴。这座岛被毁灭都是他的错。我给了他魔法配方中应该使用的精确药材比例，而他向炼金术士 Caine 转述了它。从火势的大小来看，我敢肯定他把曼陀罗根的用量报错了十倍。该死愚蠢的家伙！」~~她皱起眉头，你可以看出这是一个她想避免谈论的话题。");
	say();
	var0003 = true;
	UI_remove_answer("镇长");
	if (!(!var0005)) goto labelFunc048F_0380;
	UI_add_answer("Caine");
labelFunc048F_0380:
	case "Caine" attend labelFunc048F_0397:
	message("「现在住在这里的人叫他『受折磨的人』。那是因为他处于永恒的痛苦之中，被灼热的火焰舔舐着他的肉体所引起的。~~这痛苦是想像出来的，但对他来说，这就像你或我一样真实……或者，至少像『你』一样真实！」");
	say();
	var0005 = true;
	UI_remove_answer("Caine");
labelFunc048F_0397:
	case "魔法技艺" attend labelFunc048F_03AA:
	message("她的眼睛调皮地闪烁着。「如果我向你揭露了它们，它们就不再是秘密了，不是吗？」");
	say();
	UI_remove_answer("魔法技艺");
labelFunc048F_03AA:
	case "牺牲" attend labelFunc048F_03D0:
	if (!(!gflags[0x01A0])) goto labelFunc048F_03C4;
	message("她一开始微笑着，然后变得严肃起来。「我已经将我的灵魂与超越这个凡人领域的力量联系在一起。如果我进入灵魂之井，这整个岛屿和很大一部分大陆都将在魔法释放中被摧毁。你想让 Skara Brae 镇永远消失吗？」");
	say();
	gflags[0x01A0] = true;
	goto labelFunc048F_03C9;
labelFunc048F_03C4:
	message("「你很清楚我做不到。如果你想看到大规模的毁灭，你只能自己去造成它。」以她这把年纪来说，她转身得非常快。*");
	say();
	abort;
labelFunc048F_03C9:
	UI_remove_answer("牺牲");
labelFunc048F_03D0:
	case "告辞" attend labelFunc048F_03E3:
	message("「再见了，年轻的");
	message(var0001);
	message("。好好照顾自己，但如果发生了不幸，我希望你能回到这里，让我来治疗你的病痛。」你离开时，她慈祥地微笑着。*");
	say();
	abort;
labelFunc048F_03E3:
	goto labelFunc048F_01B6;
labelFunc048F_03E6:
	endconv;
labelFunc048F_03E7:
	if (!(event == 0x0000)) goto labelFunc048F_03F0;
	abort;
labelFunc048F_03F0:
	return;
}


