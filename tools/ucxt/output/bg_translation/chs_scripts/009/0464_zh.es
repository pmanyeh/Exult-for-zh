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
	message("这个生物无视了你。*");
	say();
	abort;
	goto labelFunc0464_0040;
labelFunc0464_003D:
	Func08ED();
labelFunc0464_0040:
	if (!(!gflags[0x013E])) goto labelFunc0464_0068;
	if (!(!gflags[0x013C])) goto labelFunc0464_005D;
	message("你面前这个像猿猴般的生物非常谨慎地靠近。在上下打量你几分钟后，他对你歪了歪头。~~「你是人类。」");
	say();
	gflags[0x013C] = true;
	gflags[0x013E] = true;
	goto labelFunc0464_0065;
labelFunc0464_005D:
	message("你面前这个森灵非常谨慎地靠近。在上下打量你几分钟后，他对你歪了歪头。~~「你是人类。」");
	say();
	gflags[0x013E] = true;
labelFunc0464_0065:
	goto labelFunc0464_006C;
labelFunc0464_0068:
	message("「我向你问候，人类。」 Tavenor 缓慢地靠近。");
	say();
labelFunc0464_006C:
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0001 = false;
labelFunc0464_0080:
	converse attend labelFunc0464_01EB;
	case "姓名" attend labelFunc0464_0096:
	message("「我的名字是 Tavenor 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0464_0096:
	case "职业" attend labelFunc0464_00BE:
	if (!(!gflags[0x012E])) goto labelFunc0464_00B3;
	message("「我不明白『职业』的意思。」");
	say();
	UI_add_answer("解释职业");
	goto labelFunc0464_00BE;
labelFunc0464_00B3:
	message("「我没有职业。我和我的家人负责收集食物。」");
	say();
	UI_add_answer("食物");
labelFunc0464_00BE:
	case "解释职业" attend labelFunc0464_013B:
	message("「我现在理解『职业』了。我没有职业。我和我的家人负责收集食物。」他仔细地观察你。「你的职业是砍伐银叶树，对吧？」");
	say();
	gflags[0x012E] = true;
	var0002 = Func090A();
	if (!var0002) goto labelFunc0464_00E2;
	message("「和我预料的一样。你是一个威胁。请你停止。」他转过身去。*");
	say();
	abort;
	goto labelFunc0464_012E;
labelFunc0464_00E2:
	message("「我明白这是真相，但，我很难相信。」");
	say();
	var0003 = Func08F7(0xFFFA);
	if (!var0003) goto labelFunc0464_011F;
	message("*");
	say();
	UI_show_npc_face(0xFFFA, 0x0000);
	message("「这个人类说的是实话，」 Trellek 对另一个森灵说。「他是值得信任的。我能感受到他的善意。」*");
	say();
	UI_remove_npc_face(0xFFFA);
	UI_show_npc_face(0xFF9C, 0x0000);
	message("这个森灵对 Trellek 点点头，然后转向你。「我现在清楚真相了。祝你好运。」");
	say();
	goto labelFunc0464_0123;
labelFunc0464_011F:
	message("这个森灵又多看了你一会儿。「我知道你的好意。请你做个传信人。人类请不要成为破坏者。」");
	say();
labelFunc0464_0123:
	UI_remove_answer("解释职业");
	gflags[0x012E] = true;
labelFunc0464_012E:
	UI_add_answer(["食物", "银叶树"]);
labelFunc0464_013B:
	case "食物" attend labelFunc0464_015E:
	message("「水果和牛奶是森灵的食物。我特别喜欢水果。肉类，」他摇摇头，~~「不被森灵喜欢。」");
	say();
	UI_remove_answer("食物");
	UI_add_answer(["肉类", "水果", "牛奶"]);
labelFunc0464_015E:
	case "牛奶" attend labelFunc0464_017F:
	message("「牛奶很好。我比较喜欢加了蜂蜜的牛奶。」");
	say();
	if (!(!var0001)) goto labelFunc0464_0178;
	UI_add_answer("蜂蜜");
labelFunc0464_0178:
	UI_remove_answer("牛奶");
labelFunc0464_017F:
	case "银叶树" attend labelFunc0464_0192:
	message("「银叶树是森灵的家园。」");
	say();
	UI_remove_answer("银叶树");
labelFunc0464_0192:
	case "肉类" attend labelFunc0464_01A5:
	message("「肉类来自被杀死的动物。杀戮是不好的。破坏是不好的。」");
	say();
	UI_remove_answer("肉类");
labelFunc0464_01A5:
	case "水果" attend labelFunc0464_01C6:
	message("「水果很好吃而且很甜——就像蜂蜜一样！」");
	say();
	UI_remove_answer("水果");
	if (!(!var0001)) goto labelFunc0464_01C6;
	UI_add_answer("蜂蜜");
labelFunc0464_01C6:
	case "蜂蜜" attend labelFunc0464_01DD:
	message("「蜂蜜是所有森灵最喜欢的食物！」");
	say();
	var0001 = true;
	UI_remove_answer("蜂蜜");
labelFunc0464_01DD:
	case "告辞" attend labelFunc0464_01E8:
	goto labelFunc0464_01EB;
labelFunc0464_01E8:
	goto labelFunc0464_0080;
labelFunc0464_01EB:
	endconv;
	message("「跟你说声『再见』。」*");
	say();
labelFunc0464_01F0:
	if (!(event == 0x0000)) goto labelFunc0464_01F9;
	abort;
labelFunc0464_01F9:
	return;
}


