#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func094F 0x94F (var var0000, var var0001);

void Func04CD object#(0x4CD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04CD_019B;
	UI_show_npc_face(0xFF33, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF33));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x028A])) goto labelFunc04CD_004A;
	message("一个强壮有力的人看着你，点头致意。");
	say();
	goto labelFunc04CD_004E;
labelFunc04CD_004A:
	message("「我能为你做什么？」 Zaksam 问。");
	say();
labelFunc04CD_004E:
	converse attend labelFunc04CD_0196;
	case "姓名" attend labelFunc04CD_0064:
	message("「我是 Zaksam ，」他骄傲地说。");
	say();
	UI_remove_answer("姓名");
labelFunc04CD_0064:
	case "职业" attend labelFunc04CD_007D:
	message("「我教导别人成为强大的战士。我是 Vesper 的训练师。」");
	say();
	UI_add_answer(["Vesper", "训练"]);
labelFunc04CD_007D:
	case "Vesper" attend labelFunc04CD_009D:
	message("「我在这里教了很多年了。我喜欢这个城镇，但我不太喜欢某些居民。」");
	say();
	UI_add_answer(["城镇", "居民"]);
	UI_remove_answer("Vesper");
labelFunc04CD_009D:
	case "城镇" attend labelFunc04CD_00B0:
	message("「东北方的土地有点干燥，但绿洲和附近的海岸给了我们充足的饮用和洗浴水源。」");
	say();
	UI_remove_answer("城镇");
labelFunc04CD_00B0:
	case "居民" attend labelFunc04CD_00D0:
	message("「我们大多数人都是受人尊敬的，但有几个人让我感到怀疑。例如 Blorn 和镇长。");
	say();
	UI_add_answer(["镇长", "Blorn"]);
	UI_remove_answer("居民");
labelFunc04CD_00D0:
	case "镇长" attend labelFunc04CD_00E3:
	message("「不是我不信任他。我只是怀疑他管理城镇的能力。他的名字是 Auston 。你去跟他谈谈，看看你怎么想。更好的话，去跟他的书记员 Liana 谈谈。」");
	say();
	UI_remove_answer("镇长");
labelFunc04CD_00E3:
	case "Blorn" attend labelFunc04CD_00FD:
	message("「那个人我一点也不喜欢。我不信任他。他让我想到那些石像鬼。」");
	say();
	UI_add_answer("石像鬼");
	UI_remove_answer("Blorn");
labelFunc04CD_00FD:
	case "石像鬼" attend labelFunc04CD_011D:
	message("「有什么好说的，只能说别让他们靠得太近，否则他们会抢劫你。随时他们都可能试图使用暴力接管这个城镇。镇长亲自要求我在必要时战斗。虽然我不怕死，但那是一场我不期待的战斗。」");
	say();
	UI_remove_answer("石像鬼");
	UI_add_answer(["抢劫", "暴力"]);
labelFunc04CD_011D:
	case "抢劫" attend labelFunc04CD_0130:
	message("「我听说有些居民，被那些可悲的生物偷了东西。」");
	say();
	UI_remove_answer("抢劫");
labelFunc04CD_0130:
	case "暴力" attend labelFunc04CD_0143:
	message("「你肯定知道，所有石像鬼都容易产生毫无理智的暴力行为。期待他们为了自己的私利而使用暴力是很自然的。」");
	say();
	UI_remove_answer("暴力");
labelFunc04CD_0143:
	case "训练" attend labelFunc04CD_0188:
	if (!(var0002 == 0x0007)) goto labelFunc04CD_017E;
	message("「我可以以 40 金币训练你。可以吗？」");
	say();
	if (!Func090A()) goto labelFunc04CD_0171;
	Func094F([0x0000, 0x0004], 0x0028);
	goto labelFunc04CD_017B;
labelFunc04CD_0171:
	message("「也许下次吧，");
	message(var0001);
	message("。」");
	say();
labelFunc04CD_017B:
	goto labelFunc04CD_0188;
labelFunc04CD_017E:
	message("「等我在训练大厅时就可以训练你，");
	message(var0001);
	message("。请在营业时间随时来找我。」");
	say();
labelFunc04CD_0188:
	case "告辞" attend labelFunc04CD_0193:
	goto labelFunc04CD_0196;
labelFunc04CD_0193:
	goto labelFunc04CD_004E;
labelFunc04CD_0196:
	endconv;
	message("「愿你的力量成为你的指引。」*");
	say();
labelFunc04CD_019B:
	if (!(event == 0x0000)) goto labelFunc04CD_026F;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF33));
	var0003 = UI_part_of_day();
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!((var0003 == 0x0007) || ((var0003 == 0x0000) || (var0003 == 0x0001)))) goto labelFunc04CD_01EF;
	if (!(var0002 == 0x000E)) goto labelFunc04CD_01EF;
	var0005 = "@Zzzzz . . .@";
labelFunc04CD_01EF:
	if (!((var0003 >= 0x0002) && (var0003 <= 0x0005))) goto labelFunc04CD_024B;
	if (!(var0002 == 0x0007)) goto labelFunc04CD_024B;
	if (!(var0004 == 0x0001)) goto labelFunc04CD_021B;
	var0005 = "@在这里提升你的技巧！@";
labelFunc04CD_021B:
	if (!(var0004 == 0x0002)) goto labelFunc04CD_022B;
	var0005 = "@在这里提升你的力量！@";
labelFunc04CD_022B:
	if (!(var0004 == 0x0003)) goto labelFunc04CD_023B;
	var0005 = "@更努力地战斗，变得更强壮！@";
labelFunc04CD_023B:
	if (!(var0004 == 0x0004)) goto labelFunc04CD_024B;
	var0005 = "@守护自己免受石像鬼的侵害！@";
labelFunc04CD_024B:
	if (!(var0003 == 0x0006)) goto labelFunc04CD_0265;
	if (!(var0002 == 0x001A)) goto labelFunc04CD_0265;
	var0005 = "@嗯嗯，优质的麦酒！@";
labelFunc04CD_0265:
	UI_item_say(0xFF33, var0005);
labelFunc04CD_026F:
	return;
}


