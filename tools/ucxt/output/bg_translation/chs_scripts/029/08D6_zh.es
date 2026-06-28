#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func08D6 0x8D6 ()
{
	var var0000;
	var var0001;

	var0000 = Func0909();
	var0001 = Func08F7(0xFF72);
	if (!(!var0001)) goto labelFunc08D6_001E;
	message("「我亲爱的丈夫究竟去哪儿了？我一刻也无法忍受与他分离！」*");
	say();
	abort;
	goto labelFunc08D6_0089;
labelFunc08D6_001E:
	message("就你所见，这对爱侣自从重逢后就未曾放开彼此的拥抱，而且在不久的将来似乎也没有打算分开。");
	say();
	UI_add_answer("告辞");
labelFunc08D6_0029:
	converse attend labelFunc08D6_0088;
	case "牺牲" attend labelFunc08D6_0078:
	UI_remove_answer("牺牲");
	if (!(!gflags[0x019D])) goto labelFunc08D6_006E;
	UI_show_npc_face(0xFF72, 0x0001);
	message("「不，");
	message(var0000);
	message("。她是我的生命。如果你带走她，就是带走我的心。」Trent 紧紧怀抱着他的妻子。");
	say();
	gflags[0x019D] = true;
	UI_remove_npc_face(0xFF72);
	UI_show_npc_face(0xFF70, 0x0001);
	goto labelFunc08D6_0078;
labelFunc08D6_006E:
	message("「我不能就这样离开我的夫君。你一定能理解的，");
	message(var0000);
	message("。」");
	say();
labelFunc08D6_0078:
	case "告辞" attend labelFunc08D6_0085:
	message("这对爱侣继续深情凝视着对方的双眼，仿佛要弥补他们所失去的所有岁月。*");
	say();
	abort;
labelFunc08D6_0085:
	goto labelFunc08D6_0029;
labelFunc08D6_0088:
	endconv;
labelFunc08D6_0089:
	return;
}