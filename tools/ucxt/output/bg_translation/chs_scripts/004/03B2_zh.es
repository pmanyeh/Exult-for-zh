#game "blackgate"
void Func03B2 shape#(0x3B2) ()
{
	var var0000;

	var0000 = UI_get_schedule_type(UI_get_npc_object(item));
	if (!(event == 0x0000)) goto labelFunc03B2_0015;
	abort;
labelFunc03B2_0015:
	UI_show_npc_face(0xFEFE, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	message("你看到一个看起来很强壮的守卫，他非常重视自己的工作。*（你觉得你应该跟他说什么？）");
	say();
labelFunc03B2_0033:
	converse attend labelFunc03B2_0063;
	case "姓名" attend labelFunc03B2_0049:
	message("「我是一名守卫。」");
	say();
	UI_remove_answer("姓名");
labelFunc03B2_0049:
	case "职业" attend labelFunc03B2_0055:
	message("这个人看你的眼神，好像你根本就是个白痴。「我是守卫，蠢货！你应该滚去做正事了。」");
	say();
	UI_remove_answer("职业");
labelFunc03B2_0055:
	case "告辞" attend labelFunc03B2_0060:
	goto labelFunc03B2_0063;
labelFunc03B2_0060:
	goto labelFunc03B2_0033;
labelFunc03B2_0063:
	endconv;
	message("「再见！」");
	say();
	return;
}


