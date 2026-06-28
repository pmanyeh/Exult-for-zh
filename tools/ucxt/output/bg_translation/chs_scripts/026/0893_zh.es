#game "blackgate"
void Func0893 0x893 ()
{
	UI_show_npc_face(0xFEE0, 0x0000);
	message("Adjhar 似乎恢复了传统魔像守卫的姿态——坚定而疏远。然而，你不可能错过他眼中闪烁的智能光芒。");
	say();
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0893_001E:
	converse attend labelFunc0893_0057;
	case "姓名" attend labelFunc0893_0034:
	message("「我过去是，未来也永远是名为 Adjhar 的人。」");
	say();
	UI_remove_answer("姓名");
labelFunc0893_0034:
	case "职业" attend labelFunc0893_0047:
	message("「既然你已经掌握了『爱之原则』，我也不再有任何作用了。」");
	say();
	UI_remove_answer("职业");
labelFunc0893_0047:
	case "告辞" attend labelFunc0893_0054:
	message("「再见，圣者。我一如既往地感谢您的仁慈，帮助了两位陷入困境的兄弟。别忘了神殿教导的课程。」*");
	say();
	abort;
labelFunc0893_0054:
	goto labelFunc0893_001E;
labelFunc0893_0057:
	endconv;
	return;
}


