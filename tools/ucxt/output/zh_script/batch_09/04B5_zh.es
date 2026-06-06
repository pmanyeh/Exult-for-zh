#game "blackgate"
// externs
extern void Func089C 0x89C ();
extern var Func090A 0x90A ();
extern void Func089B 0x89B (var var0000, var var0001);
extern void Func089A 0x89A (var var0000, var var0001);
extern void Func092F 0x92F (var var0000);

void Func04B5 object#(0x4B5) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04B5_01D9;
	UI_show_npc_face(0xFF4B, 0x0000);
	var0000 = false;
	var0001 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0246])) goto labelFunc04B5_003F;
	message("這位石像鬼臉上帶著愉快的表情。");
	say();
	gflags[0x0246] = true;
	goto labelFunc04B5_0043;
labelFunc04B5_003F:
	message("「很高興你回來了，人類，」 Inforlem 說。");
	say();
labelFunc04B5_0043:
	converse attend labelFunc04B5_01D4;
	case "姓名" attend labelFunc04B5_0060:
	message("「叫做 Inforlem 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Inforlem");
labelFunc04B5_0060:
	case "Inforlem" attend labelFunc04B5_0073:
	message("「意思是『使人強壯』。」");
	say();
	UI_remove_answer("Inforlem");
labelFunc04B5_0073:
	case "職業" attend labelFunc04B5_00A4:
	message("「訓練 Terfin 的其他人變得強壯有力。也賣一些武器。」");
	say();
	UI_add_answer(["訓練", "其他人", "Terfin", "購買"]);
	if (!(gflags[0x0244] && (!var0000))) goto labelFunc04B5_00A4;
	UI_add_answer("衝突");
labelFunc04B5_00A4:
	case "購買" attend labelFunc04B5_00D0:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc04B5_00CC;
	Func089C();
	goto labelFunc04B5_00D0;
labelFunc04B5_00CC:
	message("「在營業時間才販售。請你在那時再來找我。」");
	say();
labelFunc04B5_00D0:
	case "訓練" attend labelFunc04B5_010A:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc04B5_0106;
	message("「想成為更好的戰士還是法師？」");
	say();
	UI_add_answer(["戰士", "法師"]);
	goto labelFunc04B5_010A;
labelFunc04B5_0106:
	message("「在訓練時間才進行訓練。請你在那時再來找我。」");
	say();
labelFunc04B5_010A:
	case "戰士" attend labelFunc04B5_0135:
	message("「每次訓練收費 50 金幣。還好嗎？」");
	say();
	if (!Func090A()) goto labelFunc04B5_0131;
	Func089B([0x0000, 0x0001, 0x0004], 0x0032);
	goto labelFunc04B5_0135;
labelFunc04B5_0131:
	message("「很抱歉，但我必須收取這個金額！」");
	say();
labelFunc04B5_0135:
	case "法師" attend labelFunc04B5_015D:
	message("「每次訓練收費 50 金幣。可以接受嗎？」");
	say();
	if (!Func090A()) goto labelFunc04B5_0159;
	Func089A([0x0006, 0x0002], 0x0032);
	goto labelFunc04B5_015D;
labelFunc04B5_0159:
	message("「很抱歉，但我必須收取這個金額！」");
	say();
labelFunc04B5_015D:
	case "衝突" attend labelFunc04B5_0178:
	message("「知道祭壇和友誼會之間的衝突，但沒有任何情報。建議你去找這裡的友誼會領袖 Quan 問他。」");
	say();
	var0000 = true;
	gflags[0x023C] = true;
	UI_remove_answer("衝突");
labelFunc04B5_0178:
	case "Terfin" attend labelFunc04B5_018B:
	message("「看出這裡有麻煩，但不知道原因和解決方法。」");
	say();
	UI_remove_answer("Terfin");
labelFunc04B5_018B:
	case "其他人" attend labelFunc04B5_01B3:
	message("「告訴你 Forbrak 對 Terfin 和其居民了解很多，而且，」他說，「也了解這裡的衝突。」");
	say();
	UI_remove_answer("其他人");
	UI_add_answer("Forbrak");
	if (!(!var0000)) goto labelFunc04B5_01B3;
	UI_add_answer("衝突");
labelFunc04B5_01B3:
	case "Forbrak" attend labelFunc04B5_01C6:
	message("「是酒館老闆。」");
	say();
	UI_remove_answer("Forbrak");
labelFunc04B5_01C6:
	case "告辭" attend labelFunc04B5_01D1:
	goto labelFunc04B5_01D4;
labelFunc04B5_01D1:
	goto labelFunc04B5_0043;
labelFunc04B5_01D4:
	endconv;
	message("「期待再次見到你，人類。」*");
	say();
labelFunc04B5_01D9:
	if (!(event == 0x0000)) goto labelFunc04B5_01E7;
	Func092F(0xFF4B);
labelFunc04B5_01E7:
	return;
}


