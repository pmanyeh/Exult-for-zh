#game "blackgate"
// externs
extern void Func088B 0x88B ();
extern var Func0909 0x909 ();
extern void Func088A 0x88A ();

void Func0493 object#(0x493) ()
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

	if (!(event == 0x0001)) goto labelFunc0493_03F6;
	UI_show_npc_face(0xFF6D, 0x0000);
	var0000 = false;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(0xFF6D);
	if (!(!gflags[0x01BB])) goto labelFunc0493_0033;
	message("你看到一个幽灵般的男人蜷缩在角落里。他以防御的姿势举着生命护符，疯狂地环顾房间，但没有注意到你。*");
	say();
	abort;
labelFunc0493_0033:
	var0003 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFF6D) in var0003)) goto labelFunc0493_0077;
	UI_add_answer("离开");
	var0004 = UI_find_nearby(0xFE9C, 0x02EC, 0x001E, 0x0000);
	if (!var0004) goto labelFunc0493_0072;
	message("他看着井里那些被困灵魂旋转的漩涡，他新创建的决心似乎减弱了。「也许这不是个好主意。你确定我必须这样做吗？」~~你点点头。他的决心再次坚定起来。~~「是的，你说得很对。没时间演讲了。没时间动摇意志了。没时间……」他看到你并不买帐他试图拖延的行为。~~「那么，就是这样了。」他走向井。「我想我生前并不是个很好的市长。」Forsythe 下垂的面颊垮了下来。~~「好吧，至少在死后，我会为自己留名，把事情做对。」说完，他消失了。~~井里的灵魂冲出了他们的禁锢，留下了这件强大神器的焦黑残骸。*");
	say();
	Func088B();
	goto labelFunc0493_0077;
labelFunc0493_0072:
	message("「你只要带我到井边，我就会履行我的职责。」他似乎对自己的命运相当顺从。*");
	say();
	abort;
labelFunc0493_0077:
	var0005 = Func0909();
	if (!gflags[0x0198]) goto labelFunc0493_0136;
	UI_add_answer("牺牲");
	if (!gflags[0x0199]) goto labelFunc0493_012A;
	if (!gflags[0x019A]) goto labelFunc0493_011B;
	if (!gflags[0x019B]) goto labelFunc0493_010C;
	if (!gflags[0x019C]) goto labelFunc0493_00FD;
	if (!gflags[0x01A0]) goto labelFunc0493_00EE;
	if (!gflags[0x019E]) goto labelFunc0493_00DF;
	if (!gflags[0x019D]) goto labelFunc0493_00D0;
	if (!gflags[0x01A1]) goto labelFunc0493_00C1;
	gflags[0x01A2] = true;
	goto labelFunc0493_00CD;
labelFunc0493_00C1:
	var0006 = "Caine";
	var0007 = "Caine";
labelFunc0493_00CD:
	goto labelFunc0493_00DC;
labelFunc0493_00D0:
	var0006 = "Rowena";
	var0007 = "Rowena";
labelFunc0493_00DC:
	goto labelFunc0493_00EB;
labelFunc0493_00DF:
	var0006 = "Trent";
	var0007 = "Trent";
labelFunc0493_00EB:
	goto labelFunc0493_00FA;
labelFunc0493_00EE:
	var0006 = "Mordra 女士";
	var0007 = "Mordra 女士";
labelFunc0493_00FA:
	goto labelFunc0493_0109;
labelFunc0493_00FD:
	var0006 = "Quenton";
	var0007 = "Quenton";
labelFunc0493_0109:
	goto labelFunc0493_0118;
labelFunc0493_010C:
	var0006 = "酒馆女侍 Paulette";
	var0007 = "Paulette";
labelFunc0493_0118:
	goto labelFunc0493_0127;
labelFunc0493_011B:
	var0006 = "烈酒桶的 Markham";
	var0007 = "Markham";
labelFunc0493_0127:
	goto labelFunc0493_0136;
labelFunc0493_012A:
	var0006 = "摆渡人";
	var0007 = "摆渡人";
labelFunc0493_0136:
	if (!(!gflags[0x01AA])) goto labelFunc0493_0171;
	if (!((var0001 == 0x0000) && (var0001 == 0x0001))) goto labelFunc0493_0171;
	if (!(var0002 == 0x000E)) goto labelFunc0493_0161;
	message("这个男人看起来异常放松，几乎太放松了。他也忽略了你与他交谈的尝试。看来他无法控制自己的行动。*");
	say();
	abort;
	goto labelFunc0493_0171;
labelFunc0493_0161:
	if (!(!(var0002 == 0x000A))) goto labelFunc0493_0171;
	message("「不！退后！拜托，别管我！」市长看起来很害怕。看来你暂时必须放弃从他那里得到任何有用的东西。*");
	say();
	abort;
labelFunc0493_0171:
	if (!(!gflags[0x01CC])) goto labelFunc0493_0197;
	if (!(!gflags[0x01AA])) goto labelFunc0493_0186;
	message("你看到一个中年幽灵蜷缩在这个被烧毁的房间角落里。他从头到脚都在发抖，当你靠近时，他跳了出来，在你面前挥舞着生命护符。~~「你不会抓到我的，邪恶的野兽！退后，我说退后！以美德之名，退后！」他慢慢注意到这除了让你惊讶之外没有任何效果，并更仔细地看着你的方向。他看了看你，又看了看墙上你的画像。他来回看着，瞇着眼睛，直到他如释重负地睁大了眼睛。~~「哦，谢谢你来了。 British 国王终于叫你来帮助我们了。」他显然正遭受某种幻觉。「我是 Forsythe 市长。你觉得你需要很长时间才能打败巫妖吗？」");
	say();
	goto labelFunc0493_0190;
labelFunc0493_0186:
	message("「啊，你好，");
	message(var0005);
	message("。我能为你效劳吗？」");
	say();
labelFunc0493_0190:
	gflags[0x01CC] = true;
	goto labelFunc0493_01C9;
labelFunc0493_0197:
	if (!gflags[0x01A2]) goto labelFunc0493_01AA;
	message("「你好，");
	message(var0005);
	message("。」市长敷衍地对你笑了笑。");
	say();
	goto labelFunc0493_01C9;
labelFunc0493_01AA:
	if (!gflags[0x01AA]) goto labelFunc0493_01B9;
	var0008 = "";
	goto labelFunc0493_01BF;
labelFunc0493_01B9:
	var0008 = "那个巫妖走了吗？";
labelFunc0493_01BF:
	message("「啊，是的，善良的圣者。很高兴再次见到你。");
	message(var0008);
	message("我能为像你这么伟大的人提供什么服务吗？」他鞠躬。");
	say();
labelFunc0493_01C9:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x01AA])) goto labelFunc0493_01E7;
	UI_add_answer("巫妖 (Liche)");
labelFunc0493_01E7:
	converse attend labelFunc0493_03F5;
	case "姓名" attend labelFunc0493_01FD:
	message("「如我所说，我的名字是 Forsythe。」");
	say();
	UI_remove_answer("姓名");
labelFunc0493_01FD:
	case "职业" attend labelFunc0493_0216:
	message("他似乎对你的问题感到困惑。「我不是已经说过了吗？我是市长。」");
	say();
	if (!gflags[0x017C]) goto labelFunc0493_0216;
	UI_add_answer("受折磨的人");
labelFunc0493_0216:
	case "巫妖 (Liche)" attend labelFunc0493_023E:
	message("「哎呀，是的，巫妖对我可怜的城镇来说是一场可怕的灾难。首先他通过唤醒死者赶走了所有的游客。然后，在试图阻止他的过程中，这座城镇在一场可怕的大火中被摧毁。嗯，我想这严格来说不是他的错，但是，嗯，必须对他做点什么。」Forsythe 看起来有点慌乱。");
	say();
	UI_remove_answer("巫妖 (Liche)");
	UI_add_answer("他的错");
	if (!(!var0000)) goto labelFunc0493_023E;
	UI_add_answer("大火");
labelFunc0493_023E:
	case "他的错" attend labelFunc0493_0251:
	message("「嗯，炼金术士才是引发那场大火的人！」");
	say();
	UI_remove_answer("他的错");
labelFunc0493_0251:
	case "受折磨的人" attend labelFunc0493_0272:
	message("「我们都这样叫 Caine 。他就是制造那场大火的炼金术士。」");
	say();
	if (!(!var0000)) goto labelFunc0493_026B;
	UI_add_answer("大火");
labelFunc0493_026B:
	UI_remove_answer("受折磨的人");
labelFunc0493_0272:
	case "大火" attend labelFunc0493_02AA:
	message("他把手搭在你的肩膀上低声说：「我们的治疗师 Mordra 女士认为她找到了一劳永逸摆脱 Horance 的方法。我们所要做的就是做一个金笼子 (gold cage) ，还是一个旧笼子 (old cage) 。嗯，没关系。~~「我们做了这个笼子，然后某人……」他对着你微笑，「……把它放进灵魂之井去做些什么。完成之后，你必须在深夜趁巫妖不备时抓住他，并把笼子紧紧锁在他身上。到目前为止听起来很容易，对吧？~~「嗯，现在。在那之后，你只需要把炼金术士制作的魔法液体倒在他身上。」他在这里停顿了一下，似乎有点尴尬。~~");
	say();
	message("「我告诉炼金术士配方时，显然把比例弄错了一点。无论如何，对你来说，这应该就像从原木上掉下来一样简单。我想你现在最好赶快去吧， Mordra 女士能告诉你的事比我能告诉你的多得多。不过要小心，她是个危险的老太婆。」");
	say();
	var0000 = true;
	UI_remove_answer("大火");
	if (!gflags[0x01AA]) goto labelFunc0493_029A;
	message("「当然，现在你已经处理好这一切了！」他优雅地微笑。");
	say();
	goto labelFunc0493_02AA;
labelFunc0493_029A:
	UI_add_answer(["Horance", "Mordra 女士", "比例"]);
labelFunc0493_02AA:
	case "比例" attend labelFunc0493_02BD:
	message("「那是很久以前的事了，我几乎不记得了。少许治疗药水、一点隐形药水，还有……没错，『大量』的曼陀罗根精华！」");
	say();
	UI_remove_answer("比例");
labelFunc0493_02BD:
	case "Horance" attend labelFunc0493_02D0:
	message("「嗯，如果我对巫妖的传说没有弄错的话，那么曾经是一个善良仁慈的法师 Horance ，已经变成了一个讨厌、可怕的不死法师。」他以一种自以为是的态度笑着。「现在快去吧。如果你需要更多情报，可以去问 Mordra 。」");
	say();
	UI_remove_answer("Horance");
labelFunc0493_02D0:
	case "Mordra 女士" attend labelFunc0493_02E4:
	message("「她就住在对面，可以帮助你解决摆脱巫妖可能需要的一切。非常感谢你。很高兴能和你谈话。再见。」他急忙跑回他的角落，以一种保护的姿势拿着他的生命护符。*");
	say();
	UI_remove_answer("Mordra 女士");
	abort;
labelFunc0493_02E4:
	case "牺牲" attend labelFunc0493_0330:
	if (!(!gflags[0x019F])) goto labelFunc0493_030B;
	if (!(!gflags[0x01A2])) goto labelFunc0493_0305;
	message("「哦，天哪，不。我不认为我是你想要做那份工作的人。不，我可不这么想。也许你应该先问问所有的镇民。如果他们都不愿意做，我也许可以考虑一下。是的，没错，你应该去问问其他人，然后再回来告诉我哪个可怜虫会去。」他为自己的聪明感到好笑。");
	say();
	gflags[0x019F] = true;
	goto labelFunc0493_0308;
labelFunc0493_0305:
	Func088A();
labelFunc0493_0308:
	goto labelFunc0493_0329;
labelFunc0493_030B:
	if (!(!gflags[0x01A2])) goto labelFunc0493_0326;
	message("当你要求市长为了他的人民牺牲自己时，他的眼睛来回转动。「还有一个人你忘了问。去找");
	message(var0006);
	message("。然后再回来，我们再看看。」幽灵般的汗水从他幽灵的额头上滴下来。");
	say();
	UI_add_answer(var0007);
	goto labelFunc0493_0329;
labelFunc0493_0326:
	Func088A();
labelFunc0493_0329:
	UI_remove_answer("牺牲");
labelFunc0493_0330:
	case "Caine" attend labelFunc0493_0343:
	message("「只要寻找东北海岸附近的坑洞。你可以在那里找到他。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0343:
	case "Rowena" attend labelFunc0493_0356:
	message("「镇上的治疗师说了一些关于 Rowena 坐在西北角黑塔的王座上的事。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0356:
	case "离开" attend labelFunc0493_0373:
	message("「如你所愿！」");
	say();
	UI_remove_from_party(0xFF6D);
	UI_set_schedule_type(0xFF6D, 0x000B);
labelFunc0493_0373:
	case "Trent" attend labelFunc0493_0386:
	message("「Trent 在铁匠铺里，离这里不远，就在马路对面。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0386:
	case "Mordra 女士" attend labelFunc0493_0399:
	message("「你可以在她的房子里找到她，就在马路对面。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0399:
	case "Quenton" attend labelFunc0493_03AC:
	message("「Quen 几乎把所有的时间都花在渡轮码头附近的烈酒桶酒馆里。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03AC:
	case "Paulette" attend labelFunc0493_03BF:
	message("「啊，那个可爱的女孩是烈酒桶酒馆的女侍，就在渡轮码头那边。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03BF:
	case "Markham" attend labelFunc0493_03D2:
	message("「那个脾气暴躁的男人经营着那家名叫烈酒桶的酒馆。你可以在渡轮码头附近找到它。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03D2:
	case "摆渡人" attend labelFunc0493_03E5:
	message("「嗯，现在。你是怎么来到这个岛的？没错，就是『那个』摆渡人。他在 Skara Brae 东南方的渡轮上。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03E5:
	case "告辞" attend labelFunc0493_03F2:
	message("「哦，是的，对了。如果我忘了告诉你什么事，你可以回来问我，好吗。」当你准备离开时，他重重地叹了口气，然后回到他在角落的守望。*");
	say();
	abort;
labelFunc0493_03F2:
	goto labelFunc0493_01E7;
labelFunc0493_03F5:
	endconv;
labelFunc0493_03F6:
	if (!(event == 0x0000)) goto labelFunc0493_03FF;
	abort;
labelFunc0493_03FF:
	return;
}


