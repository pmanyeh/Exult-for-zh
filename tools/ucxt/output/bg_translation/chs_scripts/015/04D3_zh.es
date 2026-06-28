#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04D3 object#(0x4D3) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04D3_01CD;
	UI_show_npc_face(0xFF2D, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0290])) goto labelFunc04D3_0034;
	message("这只石像鬼以微笑迎接你。");
	say();
	gflags[0x0290] = true;
	goto labelFunc04D3_0038;
labelFunc04D3_0034:
	message("「很高兴再次见到你，人类。」 Lap-Lem 微笑着。");
	say();
labelFunc04D3_0038:
	var0000 = Func0931(0xFE9B, 0x0001, 0x03BB, 0xFE99, 0x0003);
	if (!(gflags[0x0281] || var0000)) goto labelFunc04D3_0065;
	if (!(!gflags[0x02DF])) goto labelFunc04D3_0065;
	UI_add_answer("给护身符");
labelFunc04D3_0065:
	converse attend labelFunc04D3_01C8;
	case "姓名" attend labelFunc04D3_0094:
	message("「被你称为 Lap-Lem 。」");
	say();
	UI_add_answer("Lap-Lem");
	UI_remove_answer("姓名");
	if (!(gflags[0x0280] && (!gflags[0x02DF]))) goto labelFunc04D3_0094;
	UI_add_answer("Blorn");
labelFunc04D3_0094:
	case "Lap-Lem" attend labelFunc04D3_00A7:
	message("「意思是『岩石之人 (rock one) 』。」");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04D3_00A7:
	case "职业" attend labelFunc04D3_00C3:
	message("「是矿工。现在是这个镇上我族唯一的矿工。」");
	say();
	UI_add_answer(["唯一的矿工", "种族", "城镇"]);
labelFunc04D3_00C3:
	case "种族" attend labelFunc04D3_00D6:
	message("「知道许多石像鬼在其他矿区工作，但看到 Vesper 的矿区现在只有人类。」");
	say();
	UI_remove_answer("种族");
labelFunc04D3_00D6:
	case "城镇" attend labelFunc04D3_00F6:
	message("「被称作 Vesper 。是除了不列颠城的部分地区之外，唯一一个石像鬼和人类共同生活的地方。告诉你这里有更多的冲突。」他叹了口气。~~「想知道 Terfin 是否会是维持家园更好的选择。」");
	say();
	UI_remove_answer("城镇");
	UI_add_answer(["冲突", "Terfin"]);
labelFunc04D3_00F6:
	case "冲突" attend labelFunc04D3_0109:
	message("「看到人类对我们的敌意增加。可悲的是，也看到许多石像鬼开始表现出同样的情绪。希望情况永远不会演变成暴力。」");
	say();
	UI_remove_answer("冲突");
labelFunc04D3_0109:
	case "Terfin" attend labelFunc04D3_011C:
	message("「是石像鬼的家乡城市。在两百年前法典 (Codex) 被放置在虚空中，石像鬼无处居住时所创建。虽然没有禁止，但没有人类居住在那里。」");
	say();
	UI_remove_answer("Terfin");
labelFunc04D3_011C:
	case "唯一的矿工" attend labelFunc04D3_012F:
	message("「告诉你还有另一个—— Anmanivas 。因为种族仇恨而离开了。现在整天和兄弟 Foranamo 坐在酒馆里。为 Anmanivas 和他兄弟感到难过，但需要工作。」他耸耸肩。~~「忍受仇恨。」");
	say();
	UI_remove_answer("唯一的矿工");
labelFunc04D3_012F:
	case "Blorn" attend labelFunc04D3_0161:
	message("「知道这起事件？");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc04D3_014F;
	message("「对攻击感到非常抱歉，但那是为了保护所有物。」他低下头，仿佛感到羞愧。");
	say();
	goto labelFunc04D3_0153;
labelFunc04D3_014F:
	message("「感到羞耻。只希望能从人类那里要回我的所有物。」");
	say();
labelFunc04D3_0153:
	UI_add_answer("所有物");
	UI_remove_answer("Blorn");
labelFunc04D3_0161:
	case "所有物" attend labelFunc04D3_0178:
	message("「曾拥有一个有情感价值的护身符。被人类偷走了。」他低头看着脚。「想要拿回来。」");
	say();
	UI_remove_answer("所有物");
	gflags[0x0282] = true;
labelFunc04D3_0178:
	case "给护身符" attend labelFunc04D3_01BA:
	message("「带着护身符回来了？」");
	say();
	var0002 = UI_remove_party_items(0x0001, 0x03BB, 0xFE99, 0x0003, false);
	if (!var0002) goto labelFunc04D3_01AF;
	Func0911(0x0032);
	message("当你把珠宝还给他时，他咧嘴大笑。~~「感谢你，人类！成为你们种族的榜样！」");
	say();
	gflags[0x02DF] = true;
	goto labelFunc04D3_01B3;
labelFunc04D3_01AF:
	message("「哦。没有把护身符带在身上。」他振作起来并笑了。「稍后带着护身符回来！」");
	say();
labelFunc04D3_01B3:
	UI_remove_answer("给护身符");
labelFunc04D3_01BA:
	case "告辞" attend labelFunc04D3_01C5:
	goto labelFunc04D3_01C8;
labelFunc04D3_01C5:
	goto labelFunc04D3_0065;
labelFunc04D3_01C8:
	endconv;
	message("「希望能很快再见到你。」*");
	say();
labelFunc04D3_01CD:
	if (!(event == 0x0000)) goto labelFunc04D3_01DB;
	Func092F(0xFF2D);
labelFunc04D3_01DB:
	return;
}


