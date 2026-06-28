#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func08F0 0x8F0 ()
{
	var var0000;
	var var0001;

	var0000 = Func0909();
	var0001 = Func08F7(0xFF70);
	if (!var0001) goto labelFunc08F0_0083;
	message("据你所知，这对爱侣自重逢以来就一直紧紧相拥，而且完全没有打算在近期内分开的迹象。");
	say();
	UI_add_answer("告辞");
labelFunc08F0_0020:
	converse attend labelFunc08F0_007F;
	case "牺牲" attend labelFunc08F0_006F:
	if (!(!gflags[0x019E])) goto labelFunc08F0_005E;
	UI_show_npc_face(0xFF70, 0x0001);
	message("「不，");
	message(var0000);
	message("。在我们重逢后这么短的时间内，你就要把我心爱的人从我身边带走吗？必须由其他人来运行这项可怕的任务。」Rowena 紧紧抱着她的丈夫。");
	say();
	gflags[0x019E] = true;
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF72, 0x0001);
	goto labelFunc08F0_0068;
labelFunc08F0_005E:
	message("「我不能这样离开我的女士。你一定能理解的，");
	message(var0000);
	message("。」");
	say();
labelFunc08F0_0068:
	UI_remove_answer("牺牲");
labelFunc08F0_006F:
	case "告辞" attend labelFunc08F0_007C:
	message("这对爱侣继续凝视着彼此的双眼，仿佛想借此弥补他们所失去的所有岁月。*");
	say();
	abort;
labelFunc08F0_007C:
	goto labelFunc08F0_0020;
labelFunc08F0_007F:
	endconv;
	goto labelFunc08F0_0088;
labelFunc08F0_0083:
	message("「哎呀，我必须再次找到我亲爱的 Rowena！她能走到哪里去呢？*");
	say();
	abort;
labelFunc08F0_0088:
	return;
}