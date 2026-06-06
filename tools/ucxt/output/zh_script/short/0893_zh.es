#game "blackgate"
void Func0893 0x893 ()
{
	UI_show_npc_face(0xFEE0, 0x0000);
	message("Adjhar 似乎恢復了傳統魔像守衛的姿態——堅定而疏遠。然而，你不可能錯過他眼中閃爍的智慧光芒。");
	say();
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0893_001E:
	converse attend labelFunc0893_0057;
	case "姓名" attend labelFunc0893_0034:
	message("「我過去是，未來也永遠是名為 Adjhar 的人。」");
	say();
	UI_remove_answer("姓名");
labelFunc0893_0034:
	case "職業" attend labelFunc0893_0047:
	message("「既然你已經掌握了『愛之原則』，我也不再有任何作用了。」");
	say();
	UI_remove_answer("職業");
labelFunc0893_0047:
	case "告辭" attend labelFunc0893_0054:
	message("「再見，聖者。我一如既往地感謝您的仁慈，幫助了兩位陷入困境的兄弟。別忘了神殿教導的課程。」*");
	say();
	abort;
labelFunc0893_0054:
	goto labelFunc0893_001E;
labelFunc0893_0057:
	endconv;
	return;
}


