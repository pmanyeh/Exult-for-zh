#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04CC object#(0x4CC) ()
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

	if (!(event == 0x0001)) goto labelFunc04CC_01F6;
	UI_show_npc_face(0xFF34, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_get_npc_object(0xFF34);
	var0004 = UI_get_npc_object(0xFF35);
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(var0003);
	var0007 = UI_get_alignment(var0003);
	if (!(var0007 == 0x0002)) goto labelFunc04CC_0081;
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
labelFunc04CC_0081:
	if (!(!gflags[0x0289])) goto labelFunc04CC_0093;
	message("你看到一个肌肉发达的女人擡起头，以承认你的存在。");
	say();
	gflags[0x0289] = true;
	goto labelFunc04CC_009D;
labelFunc04CC_0093:
	message("「是的，");
	message(var0000);
	message("？」");
	say();
labelFunc04CC_009D:
	converse attend labelFunc04CC_01F1;
	case "姓名" attend labelFunc04CC_0111:
	message("女人抓住你的手用力摇晃。「哈啰。我的名字是 Mara 。」");
	say();
	if (!(var0006 == 0x001A)) goto labelFunc04CC_010A;
	message("「你是谁？」");
	say();
	var0008 = Func090B([var0001, var0002, var0000]);
	if (!(var0008 == var0002)) goto labelFunc04CC_0106;
	message("「圣者！」她愤怒地大喊。「你就是把那些可恶的石像鬼带进我们美好土地的罪魁祸首！」*");
	say();
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_alignment(var0004, 0x0002);
	abort;
	goto labelFunc04CC_010A;
labelFunc04CC_0106:
	message("「很高兴见到你！」");
	say();
labelFunc04CC_010A:
	UI_remove_answer("姓名");
labelFunc04CC_0111:
	case "职业" attend labelFunc04CC_0124:
	message("她自豪地展示肌肉，「我是 Vesper 的矿工。」");
	say();
	UI_add_answer("Vesper");
labelFunc04CC_0124:
	case "Vesper" attend labelFunc04CC_0144:
	message("「这里以前是个令人愉快的城镇，」她环顾四周，显然在检查是否有人在附近，「直到石像鬼变得如此不受控制。现在我们大多数人必须花太多时间担心石像鬼什么时候会决定要杀我们。」");
	say();
	UI_add_answer(["石像鬼", "我们"]);
	UI_remove_answer("Vesper");
labelFunc04CC_0144:
	case "石像鬼" attend labelFunc04CC_0157:
	message("她耸耸肩。「没什么好说的，只能说他们是个威胁。没有他们，这个镇会好得多。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc04CC_0157:
	case "我们" attend labelFunc04CC_017D:
	message("「嗯，我知道 Cador 的想法和我一样，他的妻子也是。我听说镇长对他们表达了担忧。我不太了解他的书记员 Liana 。」");
	say();
	UI_add_answer(["Cador", "妻子", "镇长", "Liana"]);
	UI_remove_answer("我们");
labelFunc04CC_017D:
	case "妻子" attend labelFunc04CC_0190:
	message("「Yvella 是个可爱的女人。她每天照顾她们的女儿 Catherine 。」");
	say();
	UI_remove_answer("妻子");
labelFunc04CC_0190:
	case "Liana" attend labelFunc04CC_01A3:
	message("「我只见过她几次。我不够了解她所以不能这么说，但我觉得她对某件事感到生气，因为她总是心情不好。」");
	say();
	UI_remove_answer("Liana");
labelFunc04CC_01A3:
	case "Cador" attend labelFunc04CC_01BD:
	message("「他负责管理矿区。工作也做得不错。他通常会和我一起在镀金蜥蜴 (Gilded Lizard) 喝酒。」");
	say();
	UI_add_answer("镀金蜥蜴 (Gilded Lizard)");
	UI_remove_answer("Cador");
labelFunc04CC_01BD:
	case "镇长" attend labelFunc04CC_01D0:
	message("「他的名字是 Auston 。我喜欢他，但我怀疑真正让 Vesper 保持秩序的是 Liana 。」");
	say();
	UI_remove_answer("镇长");
labelFunc04CC_01D0:
	case "镀金蜥蜴 (Gilded Lizard)" attend labelFunc04CC_01E3:
	message("「那是 Vesper 这里的酒馆。 Yongi 是酒保。他倒的麦酒还算过得去。」");
	say();
	UI_remove_answer("镀金蜥蜴 (Gilded Lizard)");
labelFunc04CC_01E3:
	case "告辞" attend labelFunc04CC_01EE:
	goto labelFunc04CC_01F1;
labelFunc04CC_01EE:
	goto labelFunc04CC_009D;
labelFunc04CC_01F1:
	endconv;
	message("Mara 握着你的手并拍拍你的背，说道：「再会，朋友！」*");
	say();
labelFunc04CC_01F6:
	if (!(event == 0x0000)) goto labelFunc04CC_0204;
	Func092E(0xFF34);
labelFunc04CC_0204:
	return;
}


