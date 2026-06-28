#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);

void Func08B6 0x8B6 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc08B6_0013;
	goto labelFunc08B6_0128;
labelFunc08B6_0013:
	var0003 = 0x0001;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc08B6_003C;
	message("「啊！但你此时还没有足够的实战经验来接受我的训练！去体验人生，以后再来吧。」");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_003C:
	if (!(var0004 == 0x0001)) goto labelFunc08B6_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你收集并清点了你所拥有的金币，发现总共有");
	message(var0005);
	message("个金币。");
	say();
	if (!(var0005 < var0001)) goto labelFunc08B6_0074;
	message("「嗯。你的金币有点不足。也许你可以去 House of Games 赢些战利品，然后再回来！」");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_0074:
	if (!(var0004 == 0x0002)) goto labelFunc08B6_0085;
	message("「你已经跟我一样有天赋了！你不需要我的服务！」");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_0085:
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了");
	message(var0001);
	message("个金币，训练课程开始了。");
	say();
	message("Lucky 拿出一副牌、三个贝壳和一块石头，以及一对骰子。接着，这位海盗依序拿起每一样物品，并开始展示各种利用它们的方法。他展示了如何从牌堆底部发牌，以及如何做假洗牌。利用贝壳和石头，他展示了快如闪电的手法，将石头藏在贝壳下——藏在它不可能在的那个贝壳里。最后，他展示了如何用唾液让骰子加重，使其总能掷出好运。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc08B6_0109;
	var0007 = Func0931(0xFE9B, 0x0001, 0x03BB, 0xFE99, 0x0000);
	if (!var0007) goto labelFunc08B6_00E1;
	var0008 = "高兴地将你的生命护符(Ankh)还给你，它在";
	var0009 = "课程期间";
	var000A = "从你脖子上滑落了。";
	goto labelFunc08B6_00F3;
labelFunc08B6_00E1:
	var0008 = "高兴地伸出手想与你握手，";
	var0009 = "但当你准备要握手时，";
	var000A = "他又迅速地缩回去了。";
labelFunc08B6_00F3:
	message("训练课程结束时，Lucky ");
	message(var0008);
	message("");
	message(var0009);
	message(" ");
	message(var000A);
	message("");
	say();
labelFunc08B6_0109:
	var000B = Func0910(var0002, 0x0002);
	if (!(var000B < 0x001E)) goto labelFunc08B6_0128;
	Func0916(var0002, 0x0001);
labelFunc08B6_0128:
	return;
}