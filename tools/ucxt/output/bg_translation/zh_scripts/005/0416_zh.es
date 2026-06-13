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
	message("Caroline 要求你壓低聲音。友誼會的集會正在進行中。*");
	say();
	goto labelFunc0416_0040;
labelFunc0416_003C:
	message("「噢！我現在不能停下來跟你說話！我參加友誼會集會要遲到了！」*");
	say();
labelFunc0416_0040:
	abort;
labelFunc0416_0041:
	UI_add_answer(["姓名", "職業", "謀殺案", "告辭"]);
	if (!(!gflags[0x0056])) goto labelFunc0416_0066;
	message("你看到一位有著燦爛笑容的年輕女子。");
	say();
	gflags[0x0056] = true;
	goto labelFunc0416_006A;
labelFunc0416_0066:
	message("「又見面了！」 Caroline 開朗地說。");
	say();
labelFunc0416_006A:
	converse attend labelFunc0416_0112;
	case "姓名" attend labelFunc0416_0080:
	message("「我父母給我取名 Caroline ，」她驕傲地說。");
	say();
	UI_remove_answer("姓名");
labelFunc0416_0080:
	case "職業" attend labelFunc0416_0093:
	message("「我本身沒有『職業』。我把精力奉獻在幫助友誼會上。我希望能招募新成員。」");
	say();
	UI_add_answer("友誼會");
labelFunc0416_0093:
	case "謀殺案" attend labelFunc0416_00AD:
	message("她看起來很擔心。「太可怕了！ Christopher 是個好人。你知道他是我們的成員之一嗎？我不敢相信他死了……」");
	say();
	UI_remove_answer("謀殺案");
	UI_add_answer("成員");
labelFunc0416_00AD:
	case "成員" attend labelFunc0416_00C0:
	message("「友誼會的成員。我們每晚都在大廳集會。你應該來看看！」");
	say();
	UI_remove_answer("成員");
labelFunc0416_00C0:
	case "友誼會" attend labelFunc0416_00DF:
	Func0919();
	UI_remove_answer("友誼會");
	UI_add_answer(["協會", "理念"]);
labelFunc0416_00DF:
	case "協會" attend labelFunc0416_00F2:
	message("「每天晚上九點我們在友誼會大廳都有集會。你可以當作自己受邀參加了。」");
	say();
	UI_remove_answer("協會");
labelFunc0416_00F2:
	case "理念" attend labelFunc0416_0104:
	Func091A();
	UI_remove_answer("理念");
labelFunc0416_0104:
	case "告辭" attend labelFunc0416_010F:
	goto labelFunc0416_0112;
labelFunc0416_010F:
	goto labelFunc0416_006A;
labelFunc0416_0112:
	endconv;
	message("「再見！」*");
	say();
labelFunc0416_0117:
	if (!(event == 0x0000)) goto labelFunc0416_0197;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFEA));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000C)) goto labelFunc0416_0191;
	if (!(var0003 == 0x0001)) goto labelFunc0416_0154;
	var0004 = "@來友誼會大廳吧！@";
labelFunc0416_0154:
	if (!(var0003 == 0x0002)) goto labelFunc0416_0164;
	var0004 = "@為團結而奮鬥！@";
labelFunc0416_0164:
	if (!(var0003 == 0x0003)) goto labelFunc0416_0174;
	var0004 = "@信任你的兄弟！@";
labelFunc0416_0174:
	if (!(var0003 == 0x0004)) goto labelFunc0416_0184;
	var0004 = "@配得才有回報！@";
labelFunc0416_0184:
	UI_item_say(0xFFEA, var0004);
	goto labelFunc0416_0197;
labelFunc0416_0191:
	Func092E(0xFFEA);
labelFunc0416_0197:
	return;
}


