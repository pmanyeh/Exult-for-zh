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
	message("這隻石像鬼皺著眉頭轉向你。他將巨大的手移到嘴邊，用一根手指抵住嘴唇。友誼會會議正在進行中。*");
	say();
	goto labelFunc04B8_004A;
labelFunc04B8_0046:
	message("這隻石像鬼顯然趕時間，對你不理不睬。*");
	say();
labelFunc04B8_004A:
	abort;
labelFunc04B8_004B:
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!(!gflags[0x0249])) goto labelFunc04B8_0070;
	message("這隻石像鬼狠狠地瞪著你。從他的體型來看，他絕對是個可怕的對手。");
	say();
	gflags[0x0249] = true;
	goto labelFunc04B8_0074;
labelFunc04B8_0070:
	message("「請問你需要什麼？」 Runeb 說。");
	say();
labelFunc04B8_0074:
	if (!gflags[0x0255]) goto labelFunc04B8_0094;
	if (!gflags[0x023F]) goto labelFunc04B8_0087;
	UI_add_answer("破壞祭壇");
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
	UI_add_answer("破壞祭壇");
labelFunc04B8_00C2:
	if (!gflags[0x0240]) goto labelFunc04B8_00CF;
	UI_add_answer("陷害 Quan");
labelFunc04B8_00CF:
	case "職業" attend labelFunc04B8_00DB:
	message("「是友誼會的店員。」");
	say();
labelFunc04B8_00DB:
	case "Runeb" attend labelFunc04B8_00EE:
	message("「意思是『大忙人』，」他諷刺地說。");
	say();
	UI_remove_answer("Runeb");
labelFunc04B8_00EE:
	case "友誼會" attend labelFunc04B8_0115:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04B8_010A;
	message("「在這裡有一個分會。每天晚上在平時的時間開會。」");
	say();
	goto labelFunc04B8_010E;
labelFunc04B8_010A:
	message("「現在有更重要的事情要做。晚點再問我，人類。」");
	say();
labelFunc04B8_010E:
	UI_remove_answer("友誼會");
labelFunc04B8_0115:
	case "破壞祭壇", "陷害 Quan" attend labelFunc04B8_013F:
	Func0911(0x0064);
	message("「很遺憾你知道了這件事。現在必須殺了 Sarpling 。」他對你咧嘴一笑。~~「現在必須殺了你！」*");
	say();
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_alignment(var0001, 0x0002);
	abort;
labelFunc04B8_013F:
	case "告辭" attend labelFunc04B8_014A:
	goto labelFunc04B8_014D;
labelFunc04B8_014A:
	goto labelFunc04B8_0094;
labelFunc04B8_014D:
	endconv;
	message("他等你離開後才繼續原本的工作。*");
	say();
labelFunc04B8_0152:
	if (!(event == 0x0000)) goto labelFunc04B8_015B;
	abort;
labelFunc04B8_015B:
	return;
}


