#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func08D7 0x8D7 ()
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

	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFF70);
	if (!(var0002 in var0001)) goto labelFunc08D7_00A2;
	var0003 = Func08F7(0xFF72);
	if (!var0003) goto labelFunc08D7_0051;
	UI_remove_from_party(0xFF70);
	message("这对苦命鸳鸯冲向彼此，紧紧拥入幽灵般的怀抱。一时之间，很难分清一个灵魂从何处开始，另一个又在何处结束，接着两人缓缓转身面向你。「你为我们做了这么多，我希望在帮助我们的同时，也对你自己的任务有所帮助。」Rowena 向你行了个屈膝礼，然后转身凝视她英俊的丈夫。*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF70), 0x000F);
	gflags[0x01A6] = true;
	abort;
	goto labelFunc08D7_009F;
labelFunc08D7_0051:
	message("「我该如何帮助你，");
	message(var0000);
	message("？我必须赶快去见 Trent。」她看起来迫不及待想和丈夫在一起。");
	say();
	UI_add_answer(["Trent", "告辞"]);
labelFunc08D7_0068:
	converse attend labelFunc08D7_009E;
	case "Trent" attend labelFunc08D7_007E:
	message("当你提到她丈夫的名字时，她的脸庞亮了起来。「他是镇上的铁匠。那台你用来将我从 Horance 的黑暗力量中唤醒的音乐盒，就是他亲手制作的。」");
	say();
	UI_remove_answer("Trent");
labelFunc08D7_007E:
	case "牺牲" attend labelFunc08D7_008E:
	message("「我不能那样对待我可怜的 Trent，至少在再见他一面之前绝不行。」她摇了摇头表示拒绝。");
	say();
	gflags[0x019D] = true;
labelFunc08D7_008E:
	case "告辞" attend labelFunc08D7_009B:
	message("「是的，我们必须赶快去铁匠铺。Trent 会担心我的。」*");
	say();
	abort;
labelFunc08D7_009B:
	goto labelFunc08D7_0068;
labelFunc08D7_009E:
	endconv;
labelFunc08D7_009F:
	goto labelFunc08D7_0110;
labelFunc08D7_00A2:
	message("「这个地方太可怕了。你能不能好心带我去见我的丈夫 Trent？他很容易为我担心。」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc08D7_010B;
	var0005 = false;
	message(" Rowena 灿烂地微笑着，「谢谢你，");
	message(var0000);
	message("。你的心地确实非常慷慨。」*");
	say();
	var0006 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc08D7_00CE:
	for (var0009 in var0001 with var0007 to var0008) attend labelFunc08D7_00E6;
	var0006 = (var0006 + 0x0001);
	goto labelFunc08D7_00CE;
labelFunc08D7_00E6:
	if (!(var0006 < 0x0008)) goto labelFunc08D7_0103;
	message("她走进队伍中，并示意你带路。*");
	say();
	UI_add_to_party(0xFF70);
	var0005 = true;
	abort;
	goto labelFunc08D7_0108;
labelFunc08D7_0103:
	message("「你目前的队伍人数太多了，我无法与你同行。」");
	say();
	abort;
labelFunc08D7_0108:
	goto labelFunc08D7_0110;
labelFunc08D7_010B:
	message("「那么我会在这里等待一位有美德的人，他能保护我的安全，并帮助我回到我丈夫身边。」她转过身去，显得有些疏离。*");
	say();
	abort;
labelFunc08D7_0110:
	return;
}