#game "serpentisle"
var Func0955 0x955 ()
{
	UI_push_answers();
	UI_add_answer(["Yes", "No"]);
labelFunc0955_0011:
	converse attend labelFunc0955_0033;
	case "Yes" attend labelFunc0955_0022:
	UI_pop_answers();
	return true;
labelFunc0955_0022:
	case "No" attend labelFunc0955_0030:
	UI_pop_answers();
	return false;
labelFunc0955_0030:
	goto labelFunc0955_0011;
labelFunc0955_0033:
	endconv;
	return 0;
}


