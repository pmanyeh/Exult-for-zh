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
	message("「我親愛的丈夫究竟去哪兒了？我一刻也無法忍受與他分離！」*");
	say();
	abort;
	goto labelFunc08D6_0089;
labelFunc08D6_001E:
	message("就你所見，這對愛侶自從重逢後就未曾放開彼此的擁抱，而且在不久的將來似乎也沒有打算分開。");
	say();
	UI_add_answer("告辭");
labelFunc08D6_0029:
	converse attend labelFunc08D6_0088;
	case "犧牲" attend labelFunc08D6_0078:
	UI_remove_answer("犧牲");
	if (!(!gflags[0x019D])) goto labelFunc08D6_006E;
	UI_show_npc_face(0xFF72, 0x0001);
	message("「不，");
	message(var0000);
	message("。她是我的生命。如果你帶走她，就是帶走我的心。」Trent 緊緊懷抱著他的妻子。");
	say();
	gflags[0x019D] = true;
	UI_remove_npc_face(0xFF72);
	UI_show_npc_face(0xFF70, 0x0001);
	goto labelFunc08D6_0078;
labelFunc08D6_006E:
	message("「我不能就這樣離開我的夫君。你一定能理解的，");
	message(var0000);
	message("。」");
	say();
labelFunc08D6_0078:
	case "告辭" attend labelFunc08D6_0085:
	message("這對愛侶繼續深情凝視著對方的雙眼，彷彿要彌補他們所失去的所有歲月。*");
	say();
	abort;
labelFunc08D6_0085:
	goto labelFunc08D6_0029;
labelFunc08D6_0088:
	endconv;
labelFunc08D6_0089:
	return;
}