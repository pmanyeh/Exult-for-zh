#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func0911 0x911 (var var0000);

void Func04B8 object#(0x4B8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04B8_0152;
	UI_show_npc_face(0xFF48, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_npc_object(0xFF48);
	if (!(var0000 == 0x0007)) goto labelFunc04B8_004B;
	var0002 = Func08FC(0xFF48, 0xFF47);
	if (!var0002) goto labelFunc04B8_0046;
	message("这只石像鬼皱着眉头转向你。他将巨大的手移到嘴边，用一根手指抵住嘴唇。友谊会会议正在进行中。*");
	say();
	goto labelFunc04B8_004A;
labelFunc04B8_0046:
	message("这只石像鬼显然赶时间，对你不理不睬。*");
	say();
labelFunc04B8_004A:
	abort;
labelFunc04B8_004B:
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!(!gflags[0x0249])) goto labelFunc04B8_0070;
	message("这只石像鬼狠狠地瞪着你。从他的体型来看，他绝对是个可怕的对手。");
	say();
	gflags[0x0249] = true;
	goto labelFunc04B8_0074;
labelFunc04B8_0070:
	message("「请问你需要什么？」 Runeb 说。");
	say();
labelFunc04B8_0074:
	if (!gflags[0x0255]) goto labelFunc04B8_0094;
	if (!gflags[0x023F]) goto labelFunc04B8_0087;
	UI_add_answer("破坏祭坛");
labelFunc04B8_0087:
	if (!gflags[0x0240]) goto labelFunc04B8_0094;
	UI_add_answer("陷害 Quan");
labelFunc04B8_0094:
	converse attend labelFunc04B8_014D;
	case "姓名" attend labelFunc04B8_00CF:
	message("「是 Runeb 。」");
	say();
	gflags[0x0255] = true;
	UI_add_answer("Runeb");
	UI_remove_answer("姓名");
	if (!gflags[0x023F]) goto labelFunc04B8_00C2;
	UI_add_answer("破坏祭坛");
labelFunc04B8_00C2:
	if (!gflags[0x0240]) goto labelFunc04B8_00CF;
	UI_add_answer("陷害 Quan");
labelFunc04B8_00CF:
	case "职业" attend labelFunc04B8_00DB:
	message("「是友谊会的店员。」");
	say();
labelFunc04B8_00DB:
	case "Runeb" attend labelFunc04B8_00EE:
	message("「意思是『大忙人』，」他讽刺地说。");
	say();
	UI_remove_answer("Runeb");
labelFunc04B8_00EE:
	case "友谊会" attend labelFunc04B8_0115:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04B8_010A;
	message("「在这里有一个分会。每天晚上在平时的时间开会。」");
	say();
	goto labelFunc04B8_010E;
labelFunc04B8_010A:
	message("「现在有更重要的事情要做。晚点再问我，人类。」");
	say();
labelFunc04B8_010E:
	UI_remove_answer("友谊会");
labelFunc04B8_0115:
	case "破坏祭坛", "陷害 Quan" attend labelFunc04B8_013F:
	Func0911(0x0064);
	message("「很遗憾你知道了这件事。现在必须杀了 Sarpling 。」他对你咧嘴一笑。~~「现在必须杀了你！」*");
	say();
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_alignment(var0001, 0x0002);
	abort;
labelFunc04B8_013F:
	case "告辞" attend labelFunc04B8_014A:
	goto labelFunc04B8_014D;
labelFunc04B8_014A:
	goto labelFunc04B8_0094;
labelFunc04B8_014D:
	endconv;
	message("他等你离开后才继续原本的工作。*");
	say();
labelFunc04B8_0152:
	if (!(event == 0x0000)) goto labelFunc04B8_015B;
	abort;
labelFunc04B8_015B:
	return;
}


