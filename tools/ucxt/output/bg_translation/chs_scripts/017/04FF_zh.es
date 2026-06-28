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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02C0])) goto labelFunc04FF_00F5;
	message("你看到一个美丽的裸体女人。她一点也不在意自己没穿衣服。*");
	say();
	if (!(var0001 && var0002)) goto labelFunc04FF_0094;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 睁大了眼睛，下巴都快掉下来了。*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「把嘴闭上，男孩。虫子会飞进去的。还有把你的眼珠子放回脑袋里。它们悬在眼眶外面看起来会很奇怪。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF01, 0x0000);
labelFunc04FF_0094:
	message("「我，妈妈！」女子自豪地惊呼。");
	say();
	if (!gflags[0x02D4]) goto labelFunc04FF_00EE;
	if (!var0000) goto labelFunc04FF_00E6;
	UI_show_npc_face(0xFF0F, 0x0000);
	message("「算了， Myrtle。戏演完了。他们全都知道我们的事了。」*");
	say();
	UI_show_npc_face(0xFF01, 0x0000);
	message("「Murray！是你把我们出卖了吗？你怎么能这么做？既然知道有人发现了真相，这就不再好玩了！」*");
	say();
	UI_show_npc_face(0xFF0F, 0x0000);
	message("「抱歉，亲爱的。」*");
	say();
	UI_remove_npc_face(0xFF0F);
	UI_show_npc_face(0xFF01, 0x0000);
	var0004 = true;
	goto labelFunc04FF_00EE;
labelFunc04FF_00E6:
	message("你告诉这名女子爸爸所说关于他们过去生活的事。~~「嗯，该死！他为什么要说出我们的秘密？我绝对不会原谅他的！真是个无赖！」");
	say();
	var0004 = true;
labelFunc04FF_00EE:
	gflags[0x02C0] = true;
	goto labelFunc04FF_0103;
labelFunc04FF_00F5:
	message("「嗯？」妈妈问。");
	say();
	if (!gflags[0x02D4]) goto labelFunc04FF_0103;
	var0004 = true;
labelFunc04FF_0103:
	converse attend labelFunc04FF_01E7;
	case "姓名" attend labelFunc04FF_0127:
	if (!(!var0004)) goto labelFunc04FF_011C;
	message("「我，妈妈！」女子再次惊呼。");
	say();
	goto labelFunc04FF_0120;
labelFunc04FF_011C:
	message("「好吧。我的姓名是 Myrtle。但我喜欢被叫做妈妈。」");
	say();
labelFunc04FF_0120:
	UI_remove_answer("姓名");
labelFunc04FF_0127:
	case "职业" attend labelFunc04FF_0151:
	if (!(!var0004)) goto labelFunc04FF_013D;
	message("「我，和爸爸，住这洞穴！」");
	say();
	goto labelFunc04FF_0141;
labelFunc04FF_013D:
	message("「嗯，我不会把这叫做职业，但我就是和爸爸住在这个蜜蜂洞穴（Bee Cave）里。」");
	say();
labelFunc04FF_0141:
	UI_add_answer(["居住", "爸爸", "洞穴"]);
labelFunc04FF_0151:
	case "居住" attend labelFunc04FF_0197:
	if (!(!var0004)) goto labelFunc04FF_018C;
	message("妈妈解释。「吃。睡。爱。」*");
	say();
	if (!var0003) goto labelFunc04FF_0189;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「还能有什么？」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF01, 0x0000);
labelFunc04FF_0189:
	goto labelFunc04FF_0190;
labelFunc04FF_018C:
	message("「我们与社会隔绝，在下面尽我们所能地吃、睡，并互相爱着对方。」");
	say();
labelFunc04FF_0190:
	UI_remove_answer("居住");
labelFunc04FF_0197:
	case "爸爸" attend labelFunc04FF_01B8:
	if (!(!var0004)) goto labelFunc04FF_01AD;
	message("「嗯嗯嗯。爸爸！妈妈爱爸爸！」");
	say();
	goto labelFunc04FF_01B1;
labelFunc04FF_01AD:
	message("「他大多时候是个懒骨头，但我还是爱他。」");
	say();
labelFunc04FF_01B1:
	UI_remove_answer("爸爸");
labelFunc04FF_01B8:
	case "洞穴" attend labelFunc04FF_01D9:
	if (!(!var0004)) goto labelFunc04FF_01CE;
	message("「洞穴，好。温暖。安全。」");
	say();
	goto labelFunc04FF_01D2;
labelFunc04FF_01CE:
	message("「它对我们很好。它让我们保持温暖。我们能找到食物。我并不怀念过去的生活。」");
	say();
labelFunc04FF_01D2:
	UI_remove_answer("洞穴");
labelFunc04FF_01D9:
	case "告辞" attend labelFunc04FF_01E4:
	goto labelFunc04FF_01E7;
labelFunc04FF_01E4:
	goto labelFunc04FF_0103;
labelFunc04FF_01E7:
	endconv;
	message("「告辞！」*");
	say();
	return;
}


