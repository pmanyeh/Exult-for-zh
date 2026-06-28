#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0472 object#(0x472) ()
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

	if (!(event == 0x0001)) goto labelFunc0472_0252;
	UI_show_npc_face(0xFF8E, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x015A] && gflags[0x015B])) goto labelFunc0472_003D;
	UI_add_answer("花园");
labelFunc0472_003D:
	if (!(!gflags[0x014C])) goto labelFunc0472_004F;
	message("这位僧侣将风帽向后拉，足以让你看到她的脸。");
	say();
	gflags[0x014C] = true;
	goto labelFunc0472_0059;
labelFunc0472_004F:
	message("「你好， ");
	message(var0000);
	message("。我希望你的每一天都充满美好。」");
	say();
labelFunc0472_0059:
	converse attend labelFunc0472_0251;
	case "姓名" attend labelFunc0472_008B:
	message("「你可以叫我 Aimi ， ");
	message(var0000);
	message("。」");
	say();
	gflags[0x015B] = true;
	if (!(gflags[0x015A] && (!var0001))) goto labelFunc0472_0084;
	UI_add_answer("花园");
labelFunc0472_0084:
	UI_remove_answer("姓名");
labelFunc0472_008B:
	case "职业" attend labelFunc0472_00BA:
	message("「身为僧侣，我不太确定该怎么回答你的问题。我经常帮忙酿酒。然而， ");
	message(var0000);
	message("，在闲暇时间，我会在修道院这里画画或打理我的花园。」");
	say();
	UI_add_answer(["画画", "花园", "修道院"]);
	if (!gflags[0x0148]) goto labelFunc0472_00BA;
	UI_add_answer("Kreg");
labelFunc0472_00BA:
	case "修道院" attend labelFunc0472_00D4:
	message("「我很少跟这个区域的其他人相处。你或许可以跟 Taylor 谈谈，因为他对这个区域的人、动物和风景的了解比我多得多。」");
	say();
	UI_add_answer("Taylor");
	UI_remove_answer("修道院");
labelFunc0472_00D4:
	case "Taylor" attend labelFunc0472_00E7:
	message("「他也是位僧侣。他把时间花在研究不列颠尼亚的植物、动物和地理上。」");
	say();
	UI_remove_answer("Taylor");
labelFunc0472_00E7:
	case "画画" attend labelFunc0472_00FA:
	message("「是的，」她脸红了，「我一直很欣赏那些能够用视觉表达自己的人。遗憾的是，」她笑着说，「我画得不是很好。不过，我也收藏艺术品。事实上，我房间里挂着一幅 Sterling 的原画。或许你哪天可以去看看。」");
	say();
	UI_remove_answer("画画");
labelFunc0472_00FA:
	case "花园" attend labelFunc0472_011E:
	var0001 = true;
	message("「我的花园？我已经打理它好几年了。我坚信美学 (aesthetics) 的价值，所以我只种花。有时当人们需要时，我会把它们做成花束出售，但我很少这么做。」");
	say();
	UI_add_answer(["美学", "买"]);
	UI_remove_answer("花园");
labelFunc0472_011E:
	case "美学" attend labelFunc0472_0131:
	message("「它指的是实践或研究所有美丽的事物。」");
	say();
	UI_remove_answer("美学");
labelFunc0472_0131:
	case "买" attend labelFunc0472_0228:
	message("「你想买一束花吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0472_0217;
	message("「你有要送花的人吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0472_020A;
	if (!(gflags[0x0128] && (!gflags[0x015C]))) goto labelFunc0472_0183;
	message("你告诉她 Reyna 母亲过世的事。~「啊，是的。我听说过 Reyna 的丧母之痛。那是一个高尚的理由。请收下这些花并转交给她。」");
	say();
	var0004 = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	gflags[0x015C] = true;
	goto labelFunc0472_0207;
labelFunc0472_0183:
	message("「很好。送花给某人总是最好的。花束要 10 个金币。你还想要吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0472_01F7;
	var0006 = Func0931(0xFE9B, 0x000A, 0x0284, 0xFE99, 0xFE99);
	var0007 = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	if (!var0006) goto labelFunc0472_01EA;
	if (!var0007) goto labelFunc0472_01E3;
	var0008 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	message("「我想你会发现这些花非常漂亮。」");
	say();
	goto labelFunc0472_01E7;
labelFunc0472_01E3:
	message("「看来你没有空间拿我的花。真可惜。」");
	say();
labelFunc0472_01E7:
	goto labelFunc0472_01F4;
labelFunc0472_01EA:
	message("「很抱歉， ");
	message(var0000);
	message("。你没有足够的金币。」");
	say();
labelFunc0472_01F4:
	goto labelFunc0472_0207;
labelFunc0472_01F7:
	message("「我了解， ");
	message(var0000);
	message("。免费的花确实是最好的。而野花相当自由。现在， ");
	message(var0000);
	message("，只要答应我你会花时间欣赏我的花园就好。」");
	say();
labelFunc0472_0207:
	goto labelFunc0472_0214;
labelFunc0472_020A:
	message("「那真是不幸， ");
	message(var0000);
	message("。送花给某人总是最好的。」");
	say();
labelFunc0472_0214:
	goto labelFunc0472_0221;
labelFunc0472_0217:
	message("「或许下次你会有兴趣。现在， ");
	message(var0000);
	message("，只要答应我你会花时间欣赏我的花园就好。」");
	say();
labelFunc0472_0221:
	UI_remove_answer("买");
labelFunc0472_0228:
	case "Kreg" attend labelFunc0472_023B:
	message("「恐怕我不认识这个人。」");
	say();
	UI_remove_answer("Kreg");
labelFunc0472_023B:
	case "告辞" attend labelFunc0472_024E:
	message("「再会了， ");
	message(var0000);
	message("。愿美丽的甜美气息永远伴随着你。」*");
	say();
	abort;
labelFunc0472_024E:
	goto labelFunc0472_0059;
labelFunc0472_0251:
	endconv;
labelFunc0472_0252:
	if (!(event == 0x0000)) goto labelFunc0472_0260;
	Func092E(0xFF8E);
labelFunc0472_0260:
	return;
}


