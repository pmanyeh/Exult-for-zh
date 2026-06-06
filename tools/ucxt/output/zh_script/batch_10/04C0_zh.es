#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08BE 0x8BE (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04C0 object#(0x4C0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04C0_01B4;
	UI_show_npc_face(0xFF40, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF40));
	var0002 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0269])) goto labelFunc04C0_004F;
	message("這位肌肉發達的大漢對你愉快地微笑。");
	say();
	gflags[0x0269] = true;
	goto labelFunc04C0_0059;
labelFunc04C0_004F:
	message("「你好，");
	message(var0000);
	message("！」 Menion 說。");
	say();
labelFunc04C0_0059:
	converse attend labelFunc04C0_01AF;
	case "姓名" attend labelFunc04C0_0075:
	message("「我是 Menion ，");
	message(var0000);
	message("。」他跟你握手。");
	say();
	UI_remove_answer("姓名");
labelFunc04C0_0075:
	case "職業" attend labelFunc04C0_0091:
	message("「我是名訓練師。我幫助戰士變得更強壯，成為更好的戰鬥者。我也會打造與我學生手臂力量相匹配的劍。」");
	say();
	UI_add_answer(["訓練", "打造", "學生"]);
labelFunc04C0_0091:
	case "學生" attend labelFunc04C0_00AB:
	message("「我教過許多戰士如何運用他——或她——的力量對抗對手。」");
	say();
	UI_remove_answer("學生");
	UI_add_answer("力量");
labelFunc04C0_00AB:
	case "力量" attend labelFunc04C0_00D1:
	message("「是的，");
	message(var0000);
	message("。有效戰鬥的關鍵是重擊並準確地擊中對手。」");
	say();
	UI_remove_answer("力量");
	UI_add_answer(["重擊", "準確"]);
labelFunc04C0_00D1:
	case "重擊" attend labelFunc04C0_00E4:
	message("「體力讓攻擊者有更好的機會穿透另一名戰鬥者的盔甲。很明顯，在生死戰鬥中，這是一個重要的目標。」");
	say();
	UI_remove_answer("重擊");
labelFunc04C0_00E4:
	case "準確" attend labelFunc04C0_00F7:
	message("「不用說，人體上的某些目標會比其他目標更好。最好總是能擊中讓對手嚴重喪失行動能力，或製造足夠疼痛讓他分心的部位。」");
	say();
	UI_remove_answer("準確");
labelFunc04C0_00F7:
	case "訓練" attend labelFunc04C0_0130:
	if (!(var0001 == 0x0007)) goto labelFunc04C0_012C;
	message("「我會以 45 金幣訓練你。你願意付錢嗎？」");
	say();
	if (!Func090A()) goto labelFunc04C0_0125;
	Func08BE([0x0000, 0x0004], 0x002D);
	goto labelFunc04C0_0129;
labelFunc04C0_0125:
	message("「好吧。」");
	say();
labelFunc04C0_0129:
	goto labelFunc04C0_0130;
labelFunc04C0_012C:
	message("「或許等我上班時再談這個話題會比較合適。」");
	say();
labelFunc04C0_0130:
	case "forge" attend labelFunc04C0_01A1:
	message("「你想打造一把劍嗎？」");
	say();
	if (!((var0002 == 0x0003) || ((var0002 == 0x0004) || (var0002 == 0x0005)))) goto labelFunc04C0_0196;
	var0003 = Func090A();
	if (!(!var0003)) goto labelFunc04C0_016A;
	message("「或許等你比較有空的時候。」");
	say();
	goto labelFunc04C0_0193;
labelFunc04C0_016A:
	message("他微笑著。「我非常樂意向你展示打造一把好劍的必要步驟。」他迅速在卷軸上寫下一些東西，然後轉身交給你。*");
	say();
	var0004 = UI_add_party_items(0x0001, 0x031D, 0x000D, 0x0000, true);
	if (!var0004) goto labelFunc04C0_018F;
	message("「願你的劍堅固銳利！」*");
	say();
	goto labelFunc04C0_0193;
labelFunc04C0_018F:
	message("「或許當你的背包空出點位子時，我再給你這個。」");
	say();
labelFunc04C0_0193:
	goto labelFunc04C0_019A;
labelFunc04C0_0196:
	message("「等我上班時再幫你處理。」");
	say();
labelFunc04C0_019A:
	UI_remove_answer("forge");
labelFunc04C0_01A1:
	case "告辭" attend labelFunc04C0_01AC:
	goto labelFunc04C0_01AF;
labelFunc04C0_01AC:
	goto labelFunc04C0_0059;
labelFunc04C0_01AF:
	endconv;
	message("「願你手臂的力量永遠與你意志的力量相匹配。」*");
	say();
labelFunc04C0_01B4:
	if (!(event == 0x0000)) goto labelFunc04C0_01C2;
	Func092E(0xFF40);
labelFunc04C0_01C2:
	return;
}


