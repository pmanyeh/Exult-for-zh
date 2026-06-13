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
	message("據你所知，這對愛侶自重逢以來就一直緊緊相擁，而且完全沒有打算在近期內分開的跡象。");
	say();
	UI_add_answer("告辭");
labelFunc08F0_0020:
	converse attend labelFunc08F0_007F;
	case "犧牲" attend labelFunc08F0_006F:
	if (!(!gflags[0x019E])) goto labelFunc08F0_005E;
	UI_show_npc_face(0xFF70, 0x0001);
	message("「不，");
	message(var0000);
	message("。在我們重逢後這麼短的時間內，你就要把我心愛的人從我身邊帶走嗎？必須由其他人來執行這項可怕的任務。」Rowena 緊緊抱著她的丈夫。");
	say();
	gflags[0x019E] = true;
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF72, 0x0001);
	goto labelFunc08F0_0068;
labelFunc08F0_005E:
	message("「我不能這樣離開我的女士。你一定能理解的，");
	message(var0000);
	message("。」");
	say();
labelFunc08F0_0068:
	UI_remove_answer("犧牲");
labelFunc08F0_006F:
	case "告辭" attend labelFunc08F0_007C:
	message("這對愛侶繼續凝視著彼此的雙眼，彷彿想藉此彌補他們所失去的所有歲月。*");
	say();
	abort;
labelFunc08F0_007C:
	goto labelFunc08F0_0020;
labelFunc08F0_007F:
	endconv;
	goto labelFunc08F0_0088;
labelFunc08F0_0083:
	message("「哎呀，我必須再次找到我親愛的 Rowena！她能走到哪裡去呢？*");
	say();
	abort;
labelFunc08F0_0088:
	return;
}