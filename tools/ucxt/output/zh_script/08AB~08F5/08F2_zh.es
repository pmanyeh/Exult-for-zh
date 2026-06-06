#game "blackgate"
// externs
extern var Func08F1 0x8F1 (var var0000);
extern var Func090A 0x90A ();

void Func08F2 0x8F2 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	UI_push_answers();
	var0002 = false;
	var0003 = true;
	var0004 = Func08F1("");
	message("「");
	message(var0001);
	message("！你這個");
	message(var0004);
	message("！」");
	say();
	var0005 = ["鮮血", "腦袋", "性命"];
	var0006 = var0005[UI_die_roll(0x0001, UI_get_array_size(var0005))];
	message("「我是能得到你的道歉，還是要你的");
	message(var0006);
	message("？」");
	say();
	var0007 = "請原諒我";
	var0008 = "承受我的怒火吧";
	UI_add_answer([var0007, var0008]);
labelFunc08F2_006B:
	converse attend labelFunc08F2_0179;
	case var0007 attend labelFunc08F2_00A7:
	var0004 = Func08F1("");
	message("「原諒你！像你這種");
	message(var0004);
	message("，我有什麼好原諒的？」");
	say();
	UI_remove_answer(var0008);
	UI_remove_answer(var0007);
	UI_add_answer(["我的謊言", "我的行為", "我的罪行"]);
labelFunc08F2_00A7:
	case var0008 attend labelFunc08F2_00B2:
	goto labelFunc08F2_0179;
labelFunc08F2_00B2:
	case "我的謊言" attend labelFunc08F2_010B:
	UI_remove_answer(["我的謊言", "我的行為", "我的罪行"]);
	message("「你說的是什麼謊？你難道不是");
	message(var0001);
	message("嗎？」");
	say();
	if (!Func090A()) goto labelFunc08F2_00DD;
	goto labelFunc08F2_0179;
labelFunc08F2_00DD:
	var0004 = Func08F1("");
	message("「也許你並不是");
	message(var0001);
	message("，因為我從未見過如此的");
	message(var0004);
	message("。立刻交代你真正的身分！」");
	say();
	UI_add_answer(var0000);
	if (!(!gflags[0x0161])) goto labelFunc08F2_010B;
	UI_add_answer("聖者");
labelFunc08F2_010B:
	case "我的行為" attend labelFunc08F2_011A:
	message("「別提起你的行為！此等行徑必將招致同等的報應。」");
	say();
	goto labelFunc08F2_0179;
labelFunc08F2_011A:
	case "我的罪行" attend labelFunc08F2_012D:
	message("「真是最卑劣、最可怖的罪行！」");
	say();
	var0003 = false;
	goto labelFunc08F2_0179;
labelFunc08F2_012D:
	case "聖者" attend labelFunc08F2_0148:
	UI_remove_answer("聖者");
	message("「我看你只是想進一步欺騙我。如果那是真的，你簡直羞辱了這個稱號。立刻招出你真實的姓名！」");
	say();
	var0002 = true;
	gflags[0x0161] = true;
labelFunc08F2_0148:
	case var0000 attend labelFunc08F2_0176:
	var0004 = Func08F1("");
	message("「");
	message(var0000);
	message("！也許誠實能讓你超脫那個");
	message(var0004);
	message("的");
	message(var0001);
	message("……」");
	say();
	var0002 = true;
	goto labelFunc08F2_0179;
labelFunc08F2_0176:
	goto labelFunc08F2_006B;
labelFunc08F2_0179:
	endconv;
	if (!(!var0002)) goto labelFunc08F2_01E7;
	var0004 = Func08F1("");
	var0009 = Func08F1(var0004);
	if (!var0003) goto labelFunc08F2_01C0;
	message("「^");
	message(var0004);
	message("！^");
	message(var0009);
	message("！你的靈魂將在冥界的地下墓穴中哀號！」");
	say();
	UI_set_schedule_type(0xFFF6, 0x0000);
	UI_set_alignment(0xFFF6, 0x0002);
	goto labelFunc08F2_01E4;
labelFunc08F2_01C0:
	message("「^");
	message(var0004);
	message("！立刻從這裡滾蛋！我會用我的弓箭好好「護送」你。要是敢回來，後果自負，");
	message(var0009);
	message("。」");
	say();
	UI_set_schedule_type(0xFFF6, 0x0009);
	UI_set_alignment(0xFFF6, 0x0000);
labelFunc08F2_01E4:
	goto labelFunc08F2_01F9;
labelFunc08F2_01E7:
	message("「我絕不會輕視這種欺騙行徑。」");
	say();
	gflags[0x001D] = true;
	UI_set_alignment(0xFFF6, 0x0000);
labelFunc08F2_01F9:
	abort;
	return;
}