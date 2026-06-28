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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0149])) goto labelFunc046F_003C;
	message("你看到一个巨魔 (troll) 在他的牢房里生闷气。当他呼吸时，你可以看到他的肋骨从皮下凸出来。");
	say();
	goto labelFunc046F_0040;
labelFunc046F_003C:
	message("「你要什么？」 Gharl 咆哮着。");
	say();
labelFunc046F_0040:
	converse attend labelFunc046F_0143;
	case "姓名" attend labelFunc046F_0056:
	message("「我 Gharl 。」");
	say();
	UI_remove_answer("姓名");
labelFunc046F_0056:
	case "职业" attend labelFunc046F_0072:
	message("他摇摇头。「没工作。打猎。吃。睡觉。现在，」他比了比牢房四周，「没打猎，没吃，只有睡觉。」");
	say();
	UI_add_answer(["打猎", "吃", "睡觉"]);
labelFunc046F_0072:
	case "打猎" attend labelFunc046F_0085:
	message("「我好猎人。抓很多东西。」");
	say();
	UI_remove_answer("打猎");
labelFunc046F_0085:
	case "睡觉" attend labelFunc046F_009F:
	message("「我还是会做，」他耸耸肩说。「但不如在家好。」");
	say();
	UI_remove_answer("睡觉");
	UI_add_answer("家");
labelFunc046F_009F:
	case "家" attend labelFunc046F_00B2:
	message("他古怪地盯着你说，「和其他巨魔一起，肉脸 (fleshface) ！在桥底下。」");
	say();
	UI_remove_answer("家");
labelFunc046F_00B2:
	case "吃" attend labelFunc046F_00CC:
	message("「没吃。」他摇摇头。「没喂。讨厌狱卒！」他咆哮着。");
	say();
	UI_remove_answer("吃");
	UI_add_answer("提供食物");
labelFunc046F_00CC:
	case "提供食物" attend labelFunc046F_0122:
	message("「你给我食物？」他的脸上露出惊讶和希望交织的表情。「你给我食物，我告诉你秘密。好吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc046F_0116;
	var0003 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0xFE99, 0x0000);
	if (!var0003) goto labelFunc046F_010E;
	message("他迅速狼吞虎咽地吃了食物。~~「我感谢。你要秘密？」");
	say();
	UI_add_answer("秘密");
	goto labelFunc046F_0113;
labelFunc046F_010E:
	message("「你嘲弄我。我不喜欢你。」*");
	say();
	abort;
labelFunc046F_0113:
	goto labelFunc046F_011B;
labelFunc046F_0116:
	message("「走开。」*");
	say();
	abort;
labelFunc046F_011B:
	UI_remove_answer("提供食物");
labelFunc046F_0122:
	case "秘密" attend labelFunc046F_0135:
	message("「巨魔有强大盟友。当麻烦在转角，他在脑袋里警告我们。」");
	say();
	UI_remove_answer("秘密");
labelFunc046F_0135:
	case "告辞" attend labelFunc046F_0140:
	goto labelFunc046F_0143;
labelFunc046F_0140:
	goto labelFunc046F_0040;
labelFunc046F_0143:
	endconv;
	message("他咕哝了一声，转过身去。*");
	say();
labelFunc046F_0148:
	if (!(event == 0x0000)) goto labelFunc046F_0151;
	abort;
labelFunc046F_0151:
	return;
}


