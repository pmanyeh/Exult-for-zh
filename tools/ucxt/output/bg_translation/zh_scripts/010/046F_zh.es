#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func046F object#(0x46F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc046F_0148;
	UI_show_npc_face(0xFF91, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0149])) goto labelFunc046F_003C;
	message("你看到一個巨魔 (troll) 在他的牢房裡生悶氣。當他呼吸時，你可以看到他的肋骨從皮下凸出來。");
	say();
	goto labelFunc046F_0040;
labelFunc046F_003C:
	message("「你要什麼？」 Gharl 咆哮著。");
	say();
labelFunc046F_0040:
	converse attend labelFunc046F_0143;
	case "姓名" attend labelFunc046F_0056:
	message("「我 Gharl 。」");
	say();
	UI_remove_answer("姓名");
labelFunc046F_0056:
	case "職業" attend labelFunc046F_0072:
	message("他搖搖頭。「沒工作。打獵。吃。睡覺。現在，」他比了比牢房四周，「沒打獵，沒吃，只有睡覺。」");
	say();
	UI_add_answer(["打獵", "吃", "睡覺"]);
labelFunc046F_0072:
	case "打獵" attend labelFunc046F_0085:
	message("「我好獵人。抓很多東西。」");
	say();
	UI_remove_answer("打獵");
labelFunc046F_0085:
	case "睡覺" attend labelFunc046F_009F:
	message("「我還是會做，」他聳聳肩說。「但不如在家好。」");
	say();
	UI_remove_answer("睡覺");
	UI_add_answer("家");
labelFunc046F_009F:
	case "家" attend labelFunc046F_00B2:
	message("他古怪地盯著你說，「和其他巨魔一起，肉臉 (fleshface) ！在橋底下。」");
	say();
	UI_remove_answer("家");
labelFunc046F_00B2:
	case "吃" attend labelFunc046F_00CC:
	message("「沒吃。」他搖搖頭。「沒餵。討厭獄卒！」他咆哮著。");
	say();
	UI_remove_answer("吃");
	UI_add_answer("提供食物");
labelFunc046F_00CC:
	case "提供食物" attend labelFunc046F_0122:
	message("「你給我食物？」他的臉上露出驚訝和希望交織的表情。「你給我食物，我告訴你秘密。好嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc046F_0116;
	var0003 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0xFE99, 0x0000);
	if (!var0003) goto labelFunc046F_010E;
	message("他迅速狼吞虎嚥地吃了食物。~~「我感謝。你要秘密？」");
	say();
	UI_add_answer("秘密");
	goto labelFunc046F_0113;
labelFunc046F_010E:
	message("「你嘲弄我。我不喜歡你。」*");
	say();
	abort;
labelFunc046F_0113:
	goto labelFunc046F_011B;
labelFunc046F_0116:
	message("「走開。」*");
	say();
	abort;
labelFunc046F_011B:
	UI_remove_answer("提供食物");
labelFunc046F_0122:
	case "秘密" attend labelFunc046F_0135:
	message("「巨魔有強大盟友。當麻煩在轉角，他在腦袋裡警告我們。」");
	say();
	UI_remove_answer("秘密");
labelFunc046F_0135:
	case "告辭" attend labelFunc046F_0140:
	goto labelFunc046F_0143;
labelFunc046F_0140:
	goto labelFunc046F_0040;
labelFunc046F_0143:
	endconv;
	message("他咕噥了一聲，轉過身去。*");
	say();
labelFunc046F_0148:
	if (!(event == 0x0000)) goto labelFunc046F_0151;
	abort;
labelFunc046F_0151:
	return;
}


