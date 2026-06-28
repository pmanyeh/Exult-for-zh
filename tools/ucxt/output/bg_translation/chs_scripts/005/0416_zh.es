#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func0416 object#(0x416) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0416_0117;
	UI_show_npc_face(0xFFEA, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0416_0041;
	var0001 = Func08FC(0xFFEA, 0xFFF0);
	if (!var0001) goto labelFunc0416_003C;
	message("Caroline 要求你压低声音。友谊会的集会正在进行中。*");
	say();
	goto labelFunc0416_0040;
labelFunc0416_003C:
	message("「噢！我现在不能停下来跟你说话！我参加友谊会集会要迟到了！」*");
	say();
labelFunc0416_0040:
	abort;
labelFunc0416_0041:
	UI_add_answer(["姓名", "职业", "谋杀案", "告辞"]);
	if (!(!gflags[0x0056])) goto labelFunc0416_0066;
	message("你看到一位有着灿烂笑容的年轻女子。");
	say();
	gflags[0x0056] = true;
	goto labelFunc0416_006A;
labelFunc0416_0066:
	message("「又见面了！」 Caroline 开朗地说。");
	say();
labelFunc0416_006A:
	converse attend labelFunc0416_0112;
	case "姓名" attend labelFunc0416_0080:
	message("「我父母给我取名 Caroline ，」她骄傲地说。");
	say();
	UI_remove_answer("姓名");
labelFunc0416_0080:
	case "职业" attend labelFunc0416_0093:
	message("「我本身没有『职业』。我把精力奉献在帮助友谊会上。我希望能招募新成员。」");
	say();
	UI_add_answer("友谊会");
labelFunc0416_0093:
	case "谋杀案" attend labelFunc0416_00AD:
	message("她看起来很担心。「太可怕了！ Christopher 是个好人。你知道他是我们的成员之一吗？我不敢相信他死了……」");
	say();
	UI_remove_answer("谋杀案");
	UI_add_answer("成员");
labelFunc0416_00AD:
	case "成员" attend labelFunc0416_00C0:
	message("「友谊会的成员。我们每晚都在大厅集会。你应该来看看！」");
	say();
	UI_remove_answer("成员");
labelFunc0416_00C0:
	case "友谊会" attend labelFunc0416_00DF:
	Func0919();
	UI_remove_answer("友谊会");
	UI_add_answer(["协会", "理念"]);
labelFunc0416_00DF:
	case "协会" attend labelFunc0416_00F2:
	message("「每天晚上九点我们在友谊会大厅都有集会。你可以当作自己受邀参加了。」");
	say();
	UI_remove_answer("协会");
labelFunc0416_00F2:
	case "理念" attend labelFunc0416_0104:
	Func091A();
	UI_remove_answer("理念");
labelFunc0416_0104:
	case "告辞" attend labelFunc0416_010F:
	goto labelFunc0416_0112;
labelFunc0416_010F:
	goto labelFunc0416_006A;
labelFunc0416_0112:
	endconv;
	message("「再见！」*");
	say();
labelFunc0416_0117:
	if (!(event == 0x0000)) goto labelFunc0416_0197;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFEA));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000C)) goto labelFunc0416_0191;
	if (!(var0003 == 0x0001)) goto labelFunc0416_0154;
	var0004 = "@来友谊会大厅吧！@";
labelFunc0416_0154:
	if (!(var0003 == 0x0002)) goto labelFunc0416_0164;
	var0004 = "@为团结而奋斗！@";
labelFunc0416_0164:
	if (!(var0003 == 0x0003)) goto labelFunc0416_0174;
	var0004 = "@信任你的兄弟！@";
labelFunc0416_0174:
	if (!(var0003 == 0x0004)) goto labelFunc0416_0184;
	var0004 = "@配得才有回报！@";
labelFunc0416_0184:
	UI_item_say(0xFFEA, var0004);
	goto labelFunc0416_0197;
labelFunc0416_0191:
	Func092E(0xFFEA);
labelFunc0416_0197:
	return;
}


