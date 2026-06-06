#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08ED 0x8ED ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);

void Func0464 object#(0x464) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0464_01F0;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFF9C, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0464_0040;
	if (!(!var0000)) goto labelFunc0464_003D;
	message("這個生物無視了你。*");
	say();
	abort;
	goto labelFunc0464_0040;
labelFunc0464_003D:
	Func08ED();
labelFunc0464_0040:
	if (!(!gflags[0x013E])) goto labelFunc0464_0068;
	if (!(!gflags[0x013C])) goto labelFunc0464_005D;
	message("你面前這個像猿猴般的生物非常謹慎地靠近。在上下打量你幾分鐘後，他對你歪了歪頭。~~「你是人類。」");
	say();
	gflags[0x013C] = true;
	gflags[0x013E] = true;
	goto labelFunc0464_0065;
labelFunc0464_005D:
	message("你面前這個森靈非常謹慎地靠近。在上下打量你幾分鐘後，他對你歪了歪頭。~~「你是人類。」");
	say();
	gflags[0x013E] = true;
labelFunc0464_0065:
	goto labelFunc0464_006C;
labelFunc0464_0068:
	message("「我向你問候，人類。」 Tavenor 緩慢地靠近。");
	say();
labelFunc0464_006C:
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0001 = false;
labelFunc0464_0080:
	converse attend labelFunc0464_01EB;
	case "姓名" attend labelFunc0464_0096:
	message("「我的名字是 Tavenor 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0464_0096:
	case "職業" attend labelFunc0464_00BE:
	if (!(!gflags[0x012E])) goto labelFunc0464_00B3;
	message("「我不明白『職業』的意思。」");
	say();
	UI_add_answer("解釋職業");
	goto labelFunc0464_00BE;
labelFunc0464_00B3:
	message("「我沒有職業。我和我的家人負責收集食物。」");
	say();
	UI_add_answer("食物");
labelFunc0464_00BE:
	case "解釋職業" attend labelFunc0464_013B:
	message("「我現在理解『職業』了。我沒有職業。我和我的家人負責收集食物。」他仔細地觀察你。「你的職業是砍伐銀葉樹（Silverleaf trees），對吧？」");
	say();
	gflags[0x012E] = true;
	var0002 = Func090A();
	if (!var0002) goto labelFunc0464_00E2;
	message("「和我預料的一樣。你是一個威脅。請你停止。」他轉過身去。*");
	say();
	abort;
	goto labelFunc0464_012E;
labelFunc0464_00E2:
	message("「我明白這是真相，但，我很難相信。」");
	say();
	var0003 = Func08F7(0xFFFA);
	if (!var0003) goto labelFunc0464_011F;
	message("*");
	say();
	UI_show_npc_face(0xFFFA, 0x0000);
	message("「這個人類說的是實話，」 Trellek 對另一個森靈說。「他是值得信任的。我能感受到他的善意。」*");
	say();
	UI_remove_npc_face(0xFFFA);
	UI_show_npc_face(0xFF9C, 0x0000);
	message("這個森靈對 Trellek 點點頭，然後轉向你。「我現在清楚真相了。祝你好運。」");
	say();
	goto labelFunc0464_0123;
labelFunc0464_011F:
	message("這個森靈又多看了你一會兒。「我知道你的好意。請你做個傳信人。人類請不要成為破壞者。」");
	say();
labelFunc0464_0123:
	UI_remove_answer("解釋職業");
	gflags[0x012E] = true;
labelFunc0464_012E:
	UI_add_answer(["食物", "銀葉樹"]);
labelFunc0464_013B:
	case "食物" attend labelFunc0464_015E:
	message("「水果和牛奶是森靈的食物。我特別喜歡水果。肉類，」他搖搖頭，~~「不被森靈喜歡。」");
	say();
	UI_remove_answer("食物");
	UI_add_answer(["肉類", "水果", "牛奶"]);
labelFunc0464_015E:
	case "牛奶" attend labelFunc0464_017F:
	message("「牛奶很好。我比較喜歡加了蜂蜜的牛奶。」");
	say();
	if (!(!var0001)) goto labelFunc0464_0178;
	UI_add_answer("蜂蜜");
labelFunc0464_0178:
	UI_remove_answer("牛奶");
labelFunc0464_017F:
	case "銀葉樹" attend labelFunc0464_0192:
	message("「銀葉樹是森靈的家園。」");
	say();
	UI_remove_answer("銀葉樹");
labelFunc0464_0192:
	case "肉類" attend labelFunc0464_01A5:
	message("「肉類來自被殺死的動物。殺戮是不好的。破壞是不好的。」");
	say();
	UI_remove_answer("肉類");
labelFunc0464_01A5:
	case "水果" attend labelFunc0464_01C6:
	message("「水果很好吃而且很甜——就像蜂蜜一樣！」");
	say();
	UI_remove_answer("水果");
	if (!(!var0001)) goto labelFunc0464_01C6;
	UI_add_answer("蜂蜜");
labelFunc0464_01C6:
	case "蜂蜜" attend labelFunc0464_01DD:
	message("「蜂蜜是所有森靈最喜歡的食物！」");
	say();
	var0001 = true;
	UI_remove_answer("蜂蜜");
labelFunc0464_01DD:
	case "告辭" attend labelFunc0464_01E8:
	goto labelFunc0464_01EB;
labelFunc0464_01E8:
	goto labelFunc0464_0080;
labelFunc0464_01EB:
	endconv;
	message("「跟你說聲『再見』。」*");
	say();
labelFunc0464_01F0:
	if (!(event == 0x0000)) goto labelFunc0464_01F9;
	abort;
labelFunc0464_01F9:
	return;
}


