#game "blackgate"
var Func090A 0x90A ()
{
	UI_push_answers();
	UI_add_answer(["是", "否"]);
labelFunc090A_0011:
	converse attend labelFunc090A_0033;
	case "是" attend labelFunc090A_0022:
	UI_pop_answers();
	return true;
labelFunc090A_0022:
	case "否" attend labelFunc090A_0030:
	UI_pop_answers();
	return false;
labelFunc090A_0030:
	goto labelFunc090A_0011;
labelFunc090A_0033:
	endconv;
	return 0;
}


