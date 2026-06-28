#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04E1 object#(0x4E1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04E1_01FC;
	UI_show_npc_face(0xFF1F, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1F));
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04E1_005D;
	UI_add_answer("Hook");
labelFunc04E1_005D:
	if (!(!gflags[0x02AE])) goto labelFunc04E1_006F;
	message("你看到你在不列颠尼亚见过最凶恶、最难缠的守卫。");
	say();
	gflags[0x02AE] = true;
	goto labelFunc04E1_0073;
labelFunc04E1_006F:
	message("「什么？」 Sintag 咕哝着。");
	say();
labelFunc04E1_0073:
	converse attend labelFunc04E1_01F7;
	case "姓名" attend labelFunc04E1_0089:
	message("「Sintag ，」男人咕哝着。");
	say();
	UI_remove_answer("姓名");
labelFunc04E1_0089:
	case "职业" attend labelFunc04E1_00A2:
	message("「我是赌坊 (House of Games) 的守卫。我替这地方清除麻烦制造者。」");
	say();
	UI_add_answer(["赌坊 (House of Games)", "麻烦制造者"]);
labelFunc04E1_00A2:
	case "赌坊 (House of Games)" attend labelFunc04E1_00BC:
	message("「自从老板 (The Mister) 同意付我钱并要我留下后，我就一直在赌坊 (House of Games) 工作。我知道所有进出的人。我看到了一切。」");
	say();
	UI_remove_answer("赌坊 (House of Games)");
	UI_add_answer("老板 (The Mister)");
labelFunc04E1_00BC:
	case "老板 (The Mister)" attend labelFunc04E1_00CF:
	message("「那会是 Gordy 先生，赌坊 (House of Games) 的监督。你或许可以在营业时间去他的办公室找他。」");
	say();
	UI_remove_answer("老板 (The Mister)");
labelFunc04E1_00CF:
	case "麻烦制造者" attend labelFunc04E1_00EF:
	message("「我们在这里看到各种制造麻烦的人。我特别不喜欢自称是圣者 的人。我觉得那是亵渎。上一个自称是圣者 的家伙因为作弊被抓到了。他以后不会再那样做了！」");
	say();
	UI_remove_answer("麻烦制造者");
	UI_add_answer(["各种各样的人", "不会再犯"]);
labelFunc04E1_00EF:
	case "各种各样的人" attend labelFunc04E1_0102:
	message("「有一个叫 Robin 的人过去常来这里并在游戏中作弊。他有两个名叫 Battles 和 Leavell 的恶棍，会恐吓任何试图阻止他的人。有一天我的兄弟们来拜访，我们把 Robin 、 Battles 和 Leavell 一路赶出了这座岛！从那之后我们就没见过他们了！」");
	say();
	UI_remove_answer("各种各样的人");
labelFunc04E1_0102:
	case "不会再犯" attend labelFunc04E1_0133:
	if (!var0002) goto labelFunc04E1_0124;
	message("方块微微震动。「他在洞穴里，在刑求室。他还剩下的那部分。」");
	say();
	UI_add_answer(["刑求室", "他剩下的部分"]);
	goto labelFunc04E1_012C;
labelFunc04E1_0124:
	message("「你不需要知道更多了。」");
	say();
	message("Sintag 瞪着你。");
	say();
labelFunc04E1_012C:
	UI_remove_answer("不会再犯");
labelFunc04E1_0133:
	case "刑求室" attend labelFunc04E1_0153:
	if (!var0002) goto labelFunc04E1_0148;
	message("方块震动了。「那是友谊会审问他们囚犯的地方。」");
	say();
	goto labelFunc04E1_014C;
labelFunc04E1_0148:
	message("「什么刑求室？我有说刑求室吗？」");
	say();
labelFunc04E1_014C:
	UI_remove_answer("刑求室");
labelFunc04E1_0153:
	case "他剩下的部分" attend labelFunc04E1_0166:
	message("「他在我们的照顾下已经有一段时间了。」 Sintag 带着神秘的微笑说。");
	say();
	UI_remove_answer("他剩下的部分");
labelFunc04E1_0166:
	case "Hook" attend labelFunc04E1_019E:
	if (!(var0001 == 0x0007)) goto labelFunc04E1_0193;
	if (!var0002) goto labelFunc04E1_018C;
	message("当 Sintag 说话时方块震动了。「Hook 住在赌坊 (House of Games) 后面的洞穴里。游戏室有一扇上锁的门通向那里。我有钥匙。 Gordy 的办公室里也有一扇暗门，那是 Hook 用来回家的。」");
	say();
	UI_add_answer("钥匙");
	goto labelFunc04E1_0190;
labelFunc04E1_018C:
	message("「我不认识符合那描述的人。」");
	say();
labelFunc04E1_0190:
	goto labelFunc04E1_0197;
labelFunc04E1_0193:
	message("「我现在看起来像在工作吗？别烦我。在正常营业时间来赌坊 (House of Games) 吧。」");
	say();
labelFunc04E1_0197:
	UI_remove_answer("Hook");
labelFunc04E1_019E:
	case "钥匙" attend labelFunc04E1_01E9:
	message("「你想要钥匙吗？」");
	say();
	if (!Func090A()) goto labelFunc04E1_01DE;
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00EA, 0x000A, false);
	if (!var0003) goto labelFunc04E1_01D7;
	message("「在这里。」");
	say();
	Func0911(0x012C);
	goto labelFunc04E1_01DB;
labelFunc04E1_01D7:
	message("「你携带了太多东西！」");
	say();
labelFunc04E1_01DB:
	goto labelFunc04E1_01E2;
labelFunc04E1_01DE:
	message("「随你的便。」");
	say();
labelFunc04E1_01E2:
	UI_remove_answer("钥匙");
labelFunc04E1_01E9:
	case "告辞" attend labelFunc04E1_01F4:
	goto labelFunc04E1_01F7;
labelFunc04E1_01F4:
	goto labelFunc04E1_0073;
labelFunc04E1_01F7:
	endconv;
	message("Sintag 咕哝了一声。*");
	say();
labelFunc04E1_01FC:
	if (!(event == 0x0000)) goto labelFunc04E1_0277;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1F));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc04E1_0276;
	if (!(var0004 == 0x0001)) goto labelFunc04E1_0239;
	var0005 = "@我盯着你的手！@";
labelFunc04E1_0239:
	if (!(var0004 == 0x0002)) goto labelFunc04E1_0249;
	var0005 = "@不准作弊！@";
labelFunc04E1_0249:
	if (!(var0004 == 0x0003)) goto labelFunc04E1_0259;
	var0005 = "@把手放在我看得到的地方。@";
labelFunc04E1_0259:
	if (!(var0004 == 0x0004)) goto labelFunc04E1_0269;
	var0005 = "@别在游戏上捣鬼。@";
labelFunc04E1_0269:
	UI_item_say(0xFF1F, var0005);
	goto labelFunc04E1_0277;
labelFunc04E1_0276:
	abort;
labelFunc04E1_0277:
	return;
}


