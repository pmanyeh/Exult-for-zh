#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08DF 0x8DF ();
extern var Func090A 0x90A ();

void Func0465 object#(0x465) ()
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
	var var0009;

	if (!(event == 0x0001)) goto labelFunc0465_029F;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFF9B, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0465_0040;
	if (!(!var0000)) goto labelFunc0465_003D;
	message("這個生物無視了你。*");
	say();
	abort;
	goto labelFunc0465_0040;
labelFunc0465_003D:
	Func08DF();
labelFunc0465_0040:
	if (!(!gflags[0x013F])) goto labelFunc0465_0068;
	if (!(!gflags[0x013C])) goto labelFunc0465_005D;
	message("你看到一隻乾癟的雌性猿猴般生物。");
	say();
	gflags[0x013C] = true;
	gflags[0x013F] = true;
	goto labelFunc0465_0065;
labelFunc0465_005D:
	message("你看到一隻乾癟的雌性森靈。");
	say();
	gflags[0x013F] = true;
labelFunc0465_0065:
	goto labelFunc0465_006C;
labelFunc0465_0068:
	message("「向你致敬，人類。」");
	say();
labelFunc0465_006C:
	if (!gflags[0x012B]) goto labelFunc0465_0079;
	UI_add_answer("Trellek");
labelFunc0465_0079:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0465_0089:
	converse attend labelFunc0465_029A;
	case "姓名" attend labelFunc0465_009F:
	message("「我是 Salamon ，」她說。");
	say();
	UI_remove_answer("姓名");
labelFunc0465_009F:
	case "職業" attend labelFunc0465_00CE:
	message("「我沒有職業。所有森靈都沒有職業。收集食物和建造庇護所就是森靈的工作。」");
	say();
	if (!(!gflags[0x0131])) goto labelFunc0465_00C1;
	message("她嚴厲地看了你一眼。~~「有一份給 Trellek 的工作。」");
	say();
	gflags[0x0151] = true;
	UI_add_answer("Trellek");
labelFunc0465_00C1:
	UI_add_answer(["收集食物", "建造庇護所"]);
labelFunc0465_00CE:
	case "建造庇護所" attend labelFunc0465_00E1:
	message("「銀葉樹是能找到森靈家園的地方。」");
	say();
	UI_remove_answer("建造庇護所");
labelFunc0465_00E1:
	case "收集食物" attend labelFunc0465_0107:
	message("「森靈只吃水果、蔬菜和乳製品。也會吃麵包。」");
	say();
	UI_remove_answer("收集食物");
	UI_add_answer(["水果和蔬菜", "乳製品", "麵包", "只有？"]);
labelFunc0465_0107:
	case "乳製品" attend labelFunc0465_011A:
	message("「牛奶、起司和奶油都是乳製品。」");
	say();
	UI_remove_answer("乳製品");
labelFunc0465_011A:
	case "麵包" attend labelFunc0465_012D:
	message("「森靈很難製作麵包。森靈沒有爐子或烤箱。但麵包很受歡迎。」");
	say();
	UI_remove_answer("麵包");
labelFunc0465_012D:
	case "水果和蔬菜" attend labelFunc0465_0147:
	message("「水果和蔬菜是我們的最愛。很多都是甜的。」");
	say();
	UI_remove_answer("水果和蔬菜");
	UI_add_answer("甜的");
labelFunc0465_0147:
	case "甜的" attend labelFunc0465_01AB:
	message("「甜食是森靈所渴望的。蜂蜜是最甜的！你還有更多的蜂蜜嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0465_01A0;
	message("她睜大雙眼，嘴唇微張，露出一個非常燦爛且充滿希望的微笑。~~「你會給更多的蜂蜜嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0465_0199;
	var0003 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc0465_0191;
	message("「感謝你，」她說著，收下了蜂蜜。");
	say();
	goto labelFunc0465_0196;
labelFunc0465_0191:
	message("「你開了個卑劣的玩笑，」她皺著眉頭說。");
	say();
	abort;
labelFunc0465_0196:
	goto labelFunc0465_019D;
labelFunc0465_0199:
	message("她似乎很驚訝，但很快就恢復了。~~「我理解你的感受，」她嘆了口氣。");
	say();
labelFunc0465_019D:
	goto labelFunc0465_01A4;
labelFunc0465_01A0:
	message("她嘆了口氣，明顯感到失望。");
	say();
labelFunc0465_01A4:
	UI_remove_answer("甜的");
labelFunc0465_01AB:
	case "只有？" attend labelFunc0465_01CB:
	message("「森靈不吃死去的動物屍肉——也就是人類所謂的『肉』。」");
	say();
	UI_add_answer(["動物屍肉", "肉"]);
	UI_remove_answer("只有？");
labelFunc0465_01CB:
	case "肉" attend labelFunc0465_01DE:
	message("「肉沒有好味道，」她渾身發抖。「這不是我們的偏好！」");
	say();
	UI_remove_answer("肉");
labelFunc0465_01DE:
	case "動物屍肉" attend labelFunc0465_01F1:
	message("「森靈痛恨所有暴力。不希望有任何殺戮，即使是為了你們人類所謂的食物。」");
	say();
	UI_remove_answer("動物屍肉");
labelFunc0465_01F1:
	case "Trellek" attend labelFunc0465_028C:
	if (!gflags[0x0130]) goto labelFunc0465_0281;
	if (!gflags[0x012B]) goto labelFunc0465_0246;
	var0004 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0003, 0xFE99);
	if (!var0004) goto labelFunc0465_023F;
	message("她從你手中接過文件，看到 Ben 的簽名時笑了。「允許 Trellek 加入你們。祝你們好運，一路順風。」");
	say();
	var0005 = UI_remove_party_items(0x0001, 0x031D, 0x0003, 0xFE99, false);
	gflags[0x0131] = true;
	goto labelFunc0465_0243;
labelFunc0465_023F:
	message("「我必須看到那份簽署過的合約。」");
	say();
labelFunc0465_0243:
	goto labelFunc0465_027E;
labelFunc0465_0246:
	message("「稍後會給你許可。但必須先完成一項任務。~~「森林西部住著一個伐木工。他正在砍伐銀葉樹。 森靈的家就在銀葉樹上。必須讓伐木工簽署停止砍伐的合約。」");
	say();
	if (!(!gflags[0x012A])) goto labelFunc0465_027E;
	message("「你了解我的條件了嗎？」不等你回答，她就遞給你一份文件。");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0003, 0xFE99, false);
	if (!var0006) goto labelFunc0465_027A;
	message("「你現在擁有這份合約了。」");
	say();
	gflags[0x012A] = true;
	goto labelFunc0465_027E;
labelFunc0465_027A:
	message("「你的裝備空間不足，無法容納這份合約。」");
	say();
labelFunc0465_027E:
	goto labelFunc0465_0285;
labelFunc0465_0281:
	message("「 Trellek 是另一個 森靈。你應該去和他說話。~~「森林和銀葉樹受到了很大的破壞。這些破壞是你們的人造成的，人類。彌補破壞的責任也在你身上，人類。~~「你應該去找 Trellek ，」她強調說。「應該邀請他加入你。」");
	say();
labelFunc0465_0285:
	UI_remove_answer("Trellek");
labelFunc0465_028C:
	case "告辭" attend labelFunc0465_0297:
	goto labelFunc0465_029A;
labelFunc0465_0297:
	goto labelFunc0465_0089;
labelFunc0465_029A:
	endconv;
	message("「我祈求你能平安，人類。」*");
	say();
labelFunc0465_029F:
	if (!(event == 0x0000)) goto labelFunc0465_0331;
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF9B));
	var0008 = UI_die_roll(0x0001, 0x0004);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!(var0007 == 0x000B)) goto labelFunc0465_0327;
	if (!var0000) goto labelFunc0465_0327;
	if (!(var0008 == 0x0001)) goto labelFunc0465_02F7;
	var0009 = "@向你問好。@";
labelFunc0465_02F7:
	if (!(var0008 == 0x0002)) goto labelFunc0465_0307;
	var0009 = "@大自然是許多生命的家。@";
labelFunc0465_0307:
	if (!(var0008 == 0x0003)) goto labelFunc0465_0317;
	var0009 = "@祝你有個美好的一天。@";
labelFunc0465_0317:
	if (!(var0008 == 0x0004)) goto labelFunc0465_0327;
	var0009 = "@大自然充滿智慧。@";
labelFunc0465_0327:
	UI_item_say(0xFF9B, var0009);
labelFunc0465_0331:
	return;
}


