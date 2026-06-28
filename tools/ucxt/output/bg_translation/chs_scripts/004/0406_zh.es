#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08EE 0x8EE ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func0406 object#(0x406) ()
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

	if (!(event == 0x0001)) goto labelFunc0406_03C6;
	var0000 = Func0908();
	var0001 = "圣者";
	var0002 = UI_get_party_list();
	var0003 = false;
	var0004 = UI_get_npc_object(0xFFFA);
	var0005 = UI_get_npc_object(0xFFF6);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFFFA, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0406_006B;
	if (!(!var0006)) goto labelFunc0406_0068;
	message("这生物不理你。*");
	say();
	abort;
	goto labelFunc0406_006B;
labelFunc0406_0068:
	Func08EE();
labelFunc0406_006B:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0136]) goto labelFunc0406_0087;
	var0007 = var0000;
labelFunc0406_0087:
	if (!gflags[0x0137]) goto labelFunc0406_0093;
	var0007 = var0001;
labelFunc0406_0093:
	if (!(!gflags[0x0019])) goto labelFunc0406_0121;
	if (!(!gflags[0x013C])) goto labelFunc0406_00DB;
	message("这个像猿猴一样的生物专注地盯着你看了几分钟。然后，他耸了耸肩，小心翼翼地走向你。「我是 Trellek 。你的名字是？」");
	say();
	var0008 = Func090B([var0000, var0001]);
	if (!(var0008 == var0000)) goto labelFunc0406_00C2;
	gflags[0x0136] = true;
labelFunc0406_00C2:
	if (!(var0008 == var0001)) goto labelFunc0406_00D0;
	gflags[0x0137] = true;
labelFunc0406_00D0:
	gflags[0x013C] = true;
	gflags[0x0019] = true;
	goto labelFunc0406_011A;
labelFunc0406_00DB:
	message("这只森灵专注地盯着你看了几分钟。然后，他耸了耸肩，小心翼翼地走向你。「我是 Trellek 。你的名字是？」");
	say();
	var0008 = Func090B([var0000, var0001]);
	if (!(var0008 == var0000)) goto labelFunc0406_0102;
	gflags[0x0136] = true;
	var0007 = var0000;
labelFunc0406_0102:
	if (!(var0008 == var0001)) goto labelFunc0406_0116;
	gflags[0x0137] = true;
	var0007 = var0001;
labelFunc0406_0116:
	gflags[0x0019] = true;
labelFunc0406_011A:
	message("「向你致意。」");
	say();
	goto labelFunc0406_012B;
labelFunc0406_0121:
	message("「向你致意，");
	message(var0007);
	message("。」");
	say();
labelFunc0406_012B:
	if (!(gflags[0x0138] && (!gflags[0x0156]))) goto labelFunc0406_016B;
	if (!gflags[0x0158]) goto labelFunc0406_015D;
	if (!gflags[0x0155]) goto labelFunc0406_0153;
	if (!(!gflags[0x0156])) goto labelFunc0406_0150;
	UI_add_answer("Saralek 的主意");
labelFunc0406_0150:
	goto labelFunc0406_015A;
labelFunc0406_0153:
	UI_add_answer("没有许可");
labelFunc0406_015A:
	goto labelFunc0406_016B;
labelFunc0406_015D:
	if (!(!gflags[0x0132])) goto labelFunc0406_016B;
	UI_add_answer("鬼火");
labelFunc0406_016B:
	if (!gflags[0x00E2]) goto labelFunc0406_0178;
	UI_add_answer("Julius");
labelFunc0406_0178:
	if (!(gflags[0x0151] && (!gflags[0x0132]))) goto labelFunc0406_018A;
	UI_add_answer("加入");
labelFunc0406_018A:
	converse attend labelFunc0406_03C1;
	case "姓名" attend labelFunc0406_01A0:
	message("「我的名字还是 Trellek 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0406_01A0:
	case "职业" attend labelFunc0406_01CA:
	message("他给了你一个困惑的眼神。~~「我不明白『职业』的意思。你指的是『工作』吗？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0406_01C6;
	message("「我是个食物采集者。」");
	say();
	UI_add_answer("采集者");
	goto labelFunc0406_01CA;
labelFunc0406_01C6:
	message("「我没有职业。」");
	say();
labelFunc0406_01CA:
	case "采集者" attend labelFunc0406_01EA:
	message("「所有的森灵都是食物采集者。我们主要寻找水果。」");
	say();
	UI_remove_answer("采集者");
	UI_add_answer(["水果", "森灵"]);
labelFunc0406_01EA:
	case "水果" attend labelFunc0406_01FD:
	message("「水果的味道很好，就像你给我们的蜂蜜一样！」");
	say();
	UI_remove_answer("水果");
labelFunc0406_01FD:
	case "森灵" attend labelFunc0406_021D:
	message("「我是森灵。 Saralek 是森灵。 Salamon 是森灵。你，」他笑着说，「是人类。」");
	say();
	UI_remove_answer("森灵");
	UI_add_answer(["Saralek", "Salamon"]);
labelFunc0406_021D:
	case "Saralek" attend labelFunc0406_0237:
	message("「Saralek 是我的伴侣。你们会称她为『妻子』。我的家就是她的家。」");
	say();
	UI_add_answer("家");
	UI_remove_answer("Saralek");
labelFunc0406_0237:
	case "家" attend labelFunc0406_0251:
	message("「银叶树是我们的家，」他点点头。");
	say();
	UI_remove_answer("家");
	UI_add_answer("银叶树");
labelFunc0406_0251:
	case "银叶树" attend labelFunc0406_0264:
	message("「我无法用人类的语言来解释银叶树。很抱歉。你应该去问另一个人类？」他耸了耸肩，把人类的手势模仿得很好。");
	say();
	UI_remove_answer("银叶树");
labelFunc0406_0264:
	case "Salamon" attend labelFunc0406_0277:
	message("「Salamon 是最聪明的森灵。她见过人类。她见过『许多』事物。她非常有经验且知识渊博。」");
	say();
	UI_remove_answer("Salamon");
labelFunc0406_0277:
	case "鬼火" attend labelFunc0406_0297:
	message("「我知道鬼火，」他点点头。「在树林里可以找到鬼火。你有什么事吗？」");
	say();
	UI_add_answer(["树林", "与鬼火交谈"]);
	UI_remove_answer("鬼火");
labelFunc0406_0297:
	case "没有许可" attend labelFunc0406_02B1:
	message("「你还是希望能和鬼火交谈吗？那么帮助你就是我的目标。我可以做一个哨子。」");
	say();
	UI_remove_answer("没有许可");
	UI_add_answer("哨子");
labelFunc0406_02B1:
	case "Saralek 的主意" attend labelFunc0406_02CB:
	message("「我的伴侣说得对。我可以做一个哨子。」");
	say();
	UI_add_answer("哨子");
	UI_remove_answer("Saralek 的主意");
labelFunc0406_02CB:
	case "树林" attend labelFunc0406_02DE:
	message("「鬼火的住所是森林中央山里的一栋石头建筑。」");
	say();
	UI_remove_answer("树林");
labelFunc0406_02DE:
	case "哨子" attend labelFunc0406_0320:
	message("「当我们交谈时，森灵会发出吹哨般的声音。一种特殊的哨子可以模仿那种声音，」他热情地说。~~他开始迅速地在周围寻找一根枯死、中空的掉落树枝。不久他找到了一根令他满意的。他显然有些尴尬，转过身背对着你，做出的动作类似于从酒壶上拔出软木塞。~~这样过了好几分钟后，他转过身来，把哨子交给你。");
	say();
	var000A = UI_add_party_items(0x0001, 0x02B5, 0xFE99, 0x0001, false);
	if (!var000A) goto labelFunc0406_0315;
	message("「这是你的哨子。」");
	say();
	Func0911(0x0032);
	gflags[0x0156] = true;
	goto labelFunc0406_0319;
labelFunc0406_0315:
	message("「你必须减少携带的物品才能拿这个哨子。」");
	say();
labelFunc0406_0319:
	UI_remove_answer("哨子");
labelFunc0406_0320:
	case "与鬼火交谈" attend labelFunc0406_0351:
	message("「你的话是个谜。你是想让我去跟鬼火交谈吗？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0406_0346;
	message("他环顾四周，显然在观察这个区域。~~「这里没有鬼火可以交谈。」");
	say();
	UI_add_answer("去那里");
	goto labelFunc0406_034A;
labelFunc0406_0346:
	message("「我不明白你的意思。」他耸了耸肩。");
	say();
labelFunc0406_034A:
	UI_remove_answer("与鬼火交谈");
labelFunc0406_0351:
	case "Julius" attend labelFunc0406_0372:
	UI_play_music(0x001A, 0x0000);
	message("「Julius 是个好人类。他的伟大功绩是多年前从大火中拯救了森灵家族。」他直视着你。~~「但是，他的故事很悲伤，因为他吸入了太多烟雾而死。他的尸体在修道院附近的墓地里。他是我们森灵称之为『英雄』的一个人类。」");
	say();
	gflags[0x0129] = true;
	UI_remove_answer("Julius");
labelFunc0406_0372:
	case "加入", "去那里" attend labelFunc0406_03B3:
	message("「你的愿望是让我跟你们一起旅行吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0406_0398;
	message("「这也是我的愿望。但这不是 Saralek ，我妻子的愿望。必须先得到她的许可。」");
	say();
	gflags[0x0132] = true;
	goto labelFunc0406_03A2;
labelFunc0406_0398:
	message("「你很奇怪，");
	message(var0007);
	message("。」");
	say();
labelFunc0406_03A2:
	var0003 = true;
	UI_remove_answer(["去那里", "加入"]);
labelFunc0406_03B3:
	case "告辞" attend labelFunc0406_03BE:
	goto labelFunc0406_03C1;
labelFunc0406_03BE:
	goto labelFunc0406_018A;
labelFunc0406_03C1:
	endconv;
	message("「祝你好运。」*");
	say();
labelFunc0406_03C6:
	if (!(event == 0x0000)) goto labelFunc0406_046F;
	var000C = UI_part_of_day();
	var000D = UI_get_schedule_type(UI_get_npc_object(0xFFFA));
	var000E = UI_die_roll(0x0001, 0x0004);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!(var000D == 0x000B)) goto labelFunc0406_0455;
	if (!var0006) goto labelFunc0406_0455;
	if (!(var000E == 0x0001)) goto labelFunc0406_0425;
	var000F = "@向你致意。@";
labelFunc0406_0425:
	if (!(var000E == 0x0002)) goto labelFunc0406_0435;
	var000F = "@向你问好。@";
labelFunc0406_0435:
	if (!(var000E == 0x0003)) goto labelFunc0406_0445;
	var000F = "@祝你有美好的一天。@";
labelFunc0406_0445:
	if (!(var000E == 0x0004)) goto labelFunc0406_0455;
	var000F = "@天气真好。@";
labelFunc0406_0455:
	if (!(var000D == 0x000E)) goto labelFunc0406_0465;
	var000F = "@呼噜噜……@";
labelFunc0406_0465:
	UI_item_say(0xFFFA, var000F);
labelFunc0406_046F:
	return;
}


