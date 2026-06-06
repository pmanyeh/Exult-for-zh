#game "blackgate"
void Func03B2 shape#(0x3B2) ()
{
	var var0000;

	var0000 = UI_get_schedule_type(UI_get_npc_object(item));
	if (!(event == 0x0000)) goto labelFunc03B2_0015;
	abort;
labelFunc03B2_0015:
	UI_show_npc_face(0xFEFE, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	message("你看到一個看起來很強壯的守衛，他非常重視自己的工作。*（你覺得你應該跟他說什麼？）");
	say();
labelFunc03B2_0033:
	converse attend labelFunc03B2_0063;
	case "姓名" attend labelFunc03B2_0049:
	message("「我是一名守衛。」");
	say();
	UI_remove_answer("姓名");
labelFunc03B2_0049:
	case "職業" attend labelFunc03B2_0055:
	message("這個人看你的眼神，好像你根本就是個白癡。「我是守衛，蠢貨！你應該滾去做正事了。」");
	say();
	UI_remove_answer("職業");
labelFunc03B2_0055:
	case "告辭" attend labelFunc03B2_0060:
	goto labelFunc03B2_0063;
labelFunc03B2_0060:
	goto labelFunc03B2_0033;
labelFunc03B2_0063:
	endconv;
	message("「再見！」");
	say();
	return;
}


