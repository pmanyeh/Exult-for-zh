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
	message("这个生物无视了你。*");
	say();
	abort;
	goto labelFunc0465_0040;
labelFunc0465_003D:
	Func08DF();
labelFunc0465_0040:
	if (!(!gflags[0x013F])) goto labelFunc0465_0068;
	if (!(!gflags[0x013C])) goto labelFunc0465_005D;
	message("你看到一只干瘪的雌性猿猴般生物。");
	say();
	gflags[0x013C] = true;
	gflags[0x013F] = true;
	goto labelFunc0465_0065;
labelFunc0465_005D:
	message("你看到一只干瘪的雌性森灵。");
	say();
	gflags[0x013F] = true;
labelFunc0465_0065:
	goto labelFunc0465_006C;
labelFunc0465_0068:
	message("「向你致敬，人类。」");
	say();
labelFunc0465_006C:
	if (!gflags[0x012B]) goto labelFunc0465_0079;
	UI_add_answer("Trellek");
labelFunc0465_0079:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0465_0089:
	converse attend labelFunc0465_029A;
	case "姓名" attend labelFunc0465_009F:
	message("「我是 Salamon ，」她说。");
	say();
	UI_remove_answer("姓名");
labelFunc0465_009F:
	case "职业" attend labelFunc0465_00CE:
	message("「我没有职业。所有森灵都没有职业。收集食物和建造庇护所就是森灵的工作。」");
	say();
	if (!(!gflags[0x0131])) goto labelFunc0465_00C1;
	message("她严厉地看了你一眼。~~「有一份给 Trellek 的工作。」");
	say();
	gflags[0x0151] = true;
	UI_add_answer("Trellek");
labelFunc0465_00C1:
	UI_add_answer(["收集食物", "建造庇护所"]);
labelFunc0465_00CE:
	case "建造庇护所" attend labelFunc0465_00E1:
	message("「银叶树是能找到森灵家园的地方。」");
	say();
	UI_remove_answer("建造庇护所");
labelFunc0465_00E1:
	case "收集食物" attend labelFunc0465_0107:
	message("「森灵只吃水果、蔬菜和乳制品。也会吃面包。」");
	say();
	UI_remove_answer("收集食物");
	UI_add_answer(["水果和蔬菜", "乳制品", "面包", "只有？"]);
labelFunc0465_0107:
	case "乳制品" attend labelFunc0465_011A:
	message("「牛奶、起司和奶油都是乳制品。」");
	say();
	UI_remove_answer("乳制品");
labelFunc0465_011A:
	case "面包" attend labelFunc0465_012D:
	message("「森灵很难制作面包。森灵没有炉子或烤箱。但面包很受欢迎。」");
	say();
	UI_remove_answer("面包");
labelFunc0465_012D:
	case "水果和蔬菜" attend labelFunc0465_0147:
	message("「水果和蔬菜是我们的最爱。很多都是甜的。」");
	say();
	UI_remove_answer("水果和蔬菜");
	UI_add_answer("甜的");
labelFunc0465_0147:
	case "甜的" attend labelFunc0465_01AB:
	message("「甜食是森灵所渴望的。蜂蜜是最甜的！你还有更多的蜂蜜吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0465_01A0;
	message("她睁大双眼，嘴唇微张，露出一个非常灿烂且充满希望的微笑。~~「你会给更多的蜂蜜吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0465_0199;
	var0003 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc0465_0191;
	message("「感谢你，」她说着，收下了蜂蜜。");
	say();
	goto labelFunc0465_0196;
labelFunc0465_0191:
	message("「你开了个卑劣的玩笑，」她皱着眉头说。");
	say();
	abort;
labelFunc0465_0196:
	goto labelFunc0465_019D;
labelFunc0465_0199:
	message("她似乎很惊讶，但很快就恢复了。~~「我理解你的感受，」她叹了口气。");
	say();
labelFunc0465_019D:
	goto labelFunc0465_01A4;
labelFunc0465_01A0:
	message("她叹了口气，明显感到失望。");
	say();
labelFunc0465_01A4:
	UI_remove_answer("甜的");
labelFunc0465_01AB:
	case "只有？" attend labelFunc0465_01CB:
	message("「森灵不吃死去的动物尸肉——也就是人类所谓的『肉』。」");
	say();
	UI_add_answer(["动物尸肉", "肉"]);
	UI_remove_answer("只有？");
labelFunc0465_01CB:
	case "肉" attend labelFunc0465_01DE:
	message("「肉没有好味道，」她浑身发抖。「这不是我们的偏好！」");
	say();
	UI_remove_answer("肉");
labelFunc0465_01DE:
	case "动物尸肉" attend labelFunc0465_01F1:
	message("「森灵痛恨所有暴力。不希望有任何杀戮，即使是为了你们人类所谓的食物。」");
	say();
	UI_remove_answer("动物尸肉");
labelFunc0465_01F1:
	case "Trellek" attend labelFunc0465_028C:
	if (!gflags[0x0130]) goto labelFunc0465_0281;
	if (!gflags[0x012B]) goto labelFunc0465_0246;
	var0004 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0003, 0xFE99);
	if (!var0004) goto labelFunc0465_023F;
	message("她从你手中接过文档，看到 Ben 的签名时笑了。「允许 Trellek 加入你们。祝你们好运，一路顺风。」");
	say();
	var0005 = UI_remove_party_items(0x0001, 0x031D, 0x0003, 0xFE99, false);
	gflags[0x0131] = true;
	goto labelFunc0465_0243;
labelFunc0465_023F:
	message("「我必须看到那份签署过的合约。」");
	say();
labelFunc0465_0243:
	goto labelFunc0465_027E;
labelFunc0465_0246:
	message("「稍后会给你许可。但必须先完成一项任务。~~「森林西部住着一个伐木工。他正在砍伐银叶树。 森灵的家就在银叶树上。必须让伐木工签署停止砍伐的合约。」");
	say();
	if (!(!gflags[0x012A])) goto labelFunc0465_027E;
	message("「你了解我的条件了吗？」不等你回答，她就递给你一份文档。");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0003, 0xFE99, false);
	if (!var0006) goto labelFunc0465_027A;
	message("「你现在拥有这份合约了。」");
	say();
	gflags[0x012A] = true;
	goto labelFunc0465_027E;
labelFunc0465_027A:
	message("「你的装备空间不足，无法容纳这份合约。」");
	say();
labelFunc0465_027E:
	goto labelFunc0465_0285;
labelFunc0465_0281:
	message("「 Trellek 是另一个 森灵。你应该去和他说话。~~「森林和银叶树受到了很大的破坏。这些破坏是你们的人造成的，人类。弥补破坏的责任也在你身上，人类。~~「你应该去找 Trellek ，」她强调说。「应该邀请他加入你。」");
	say();
labelFunc0465_0285:
	UI_remove_answer("Trellek");
labelFunc0465_028C:
	case "告辞" attend labelFunc0465_0297:
	goto labelFunc0465_029A;
labelFunc0465_0297:
	goto labelFunc0465_0089;
labelFunc0465_029A:
	endconv;
	message("「我祈求你能平安，人类。」*");
	say();
labelFunc0465_029F:
	if (!(event == 0x0000)) goto labelFunc0465_0331;
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF9B));
	var0008 = UI_die_roll(0x0001, 0x0004);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!(var0007 == 0x000B)) goto labelFunc0465_0327;
	if (!var0000) goto labelFunc0465_0327;
	if (!(var0008 == 0x0001)) goto labelFunc0465_02F7;
	var0009 = "@向你问好。@";
labelFunc0465_02F7:
	if (!(var0008 == 0x0002)) goto labelFunc0465_0307;
	var0009 = "@大自然是许多生命的家。@";
labelFunc0465_0307:
	if (!(var0008 == 0x0003)) goto labelFunc0465_0317;
	var0009 = "@祝你有个美好的一天。@";
labelFunc0465_0317:
	if (!(var0008 == 0x0004)) goto labelFunc0465_0327;
	var0009 = "@大自然充满智能。@";
labelFunc0465_0327:
	UI_item_say(0xFF9B, var0009);
labelFunc0465_0331:
	return;
}


