#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func04FF object#(0x4FF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc04FF_0009;
	abort;
labelFunc04FF_0009:
	UI_show_npc_face(0xFF01, 0x0000);
	var0000 = Func08F7(0xFF0F);
	var0001 = Func08F7(0xFFFE);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFC);
	var0004 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02C0])) goto labelFunc04FF_00F5;
	message("你看到一個美麗的裸體女人。她一點也不在意自己沒穿衣服。*");
	say();
	if (!(var0001 && var0002)) goto labelFunc04FF_0094;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 睜大了眼睛，下巴都快掉下來了。*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「把嘴閉上，男孩。蟲子會飛進去的。還有把你的眼珠子放回腦袋裡。它們懸在眼眶外面看起來會很奇怪。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF01, 0x0000);
labelFunc04FF_0094:
	message("「我，媽媽！」女子自豪地驚呼。");
	say();
	if (!gflags[0x02D4]) goto labelFunc04FF_00EE;
	if (!var0000) goto labelFunc04FF_00E6;
	UI_show_npc_face(0xFF0F, 0x0000);
	message("「算了， Myrtle。戲演完了。他們全都知道我們的事了。」*");
	say();
	UI_show_npc_face(0xFF01, 0x0000);
	message("「Murray！是你把我們出賣了嗎？你怎麼能這麼做？既然知道有人發現了真相，這就不再好玩了！」*");
	say();
	UI_show_npc_face(0xFF0F, 0x0000);
	message("「抱歉，親愛的。」*");
	say();
	UI_remove_npc_face(0xFF0F);
	UI_show_npc_face(0xFF01, 0x0000);
	var0004 = true;
	goto labelFunc04FF_00EE;
labelFunc04FF_00E6:
	message("你告訴這名女子爸爸所說關於他們過去生活的事。~~「嗯，該死！他為什麼要說出我們的秘密？我絕對不會原諒他的！真是個無賴！」");
	say();
	var0004 = true;
labelFunc04FF_00EE:
	gflags[0x02C0] = true;
	goto labelFunc04FF_0103;
labelFunc04FF_00F5:
	message("「嗯？」媽媽問。");
	say();
	if (!gflags[0x02D4]) goto labelFunc04FF_0103;
	var0004 = true;
labelFunc04FF_0103:
	converse attend labelFunc04FF_01E7;
	case "姓名" attend labelFunc04FF_0127:
	if (!(!var0004)) goto labelFunc04FF_011C;
	message("「我，媽媽！」女子再次驚呼。");
	say();
	goto labelFunc04FF_0120;
labelFunc04FF_011C:
	message("「好吧。我的姓名是 Myrtle。但我喜歡被叫做媽媽。」");
	say();
labelFunc04FF_0120:
	UI_remove_answer("姓名");
labelFunc04FF_0127:
	case "職業" attend labelFunc04FF_0151:
	if (!(!var0004)) goto labelFunc04FF_013D;
	message("「我，和爸爸，住這洞穴！」");
	say();
	goto labelFunc04FF_0141;
labelFunc04FF_013D:
	message("「嗯，我不會把這叫做職業，但我就是和爸爸住在這個蜜蜂洞穴（Bee Cave）裡。」");
	say();
labelFunc04FF_0141:
	UI_add_answer(["居住", "爸爸", "洞穴"]);
labelFunc04FF_0151:
	case "居住" attend labelFunc04FF_0197:
	if (!(!var0004)) goto labelFunc04FF_018C;
	message("媽媽解釋。「吃。睡。愛。」*");
	say();
	if (!var0003) goto labelFunc04FF_0189;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「還能有什麼？」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF01, 0x0000);
labelFunc04FF_0189:
	goto labelFunc04FF_0190;
labelFunc04FF_018C:
	message("「我們與社會隔絕，在下面盡我們所能地吃、睡，並互相愛著對方。」");
	say();
labelFunc04FF_0190:
	UI_remove_answer("居住");
labelFunc04FF_0197:
	case "爸爸" attend labelFunc04FF_01B8:
	if (!(!var0004)) goto labelFunc04FF_01AD;
	message("「嗯嗯嗯。爸爸！媽媽愛爸爸！」");
	say();
	goto labelFunc04FF_01B1;
labelFunc04FF_01AD:
	message("「他大多時候是個懶骨頭，但我還是愛他。」");
	say();
labelFunc04FF_01B1:
	UI_remove_answer("爸爸");
labelFunc04FF_01B8:
	case "洞穴" attend labelFunc04FF_01D9:
	if (!(!var0004)) goto labelFunc04FF_01CE;
	message("「洞穴，好。溫暖。安全。」");
	say();
	goto labelFunc04FF_01D2;
labelFunc04FF_01CE:
	message("「它對我們很好。它讓我們保持溫暖。我們能找到食物。我並不懷念過去的生活。」");
	say();
labelFunc04FF_01D2:
	UI_remove_answer("洞穴");
labelFunc04FF_01D9:
	case "告辭" attend labelFunc04FF_01E4:
	goto labelFunc04FF_01E7;
labelFunc04FF_01E4:
	goto labelFunc04FF_0103;
labelFunc04FF_01E7:
	endconv;
	message("「告辭！」*");
	say();
	return;
}


