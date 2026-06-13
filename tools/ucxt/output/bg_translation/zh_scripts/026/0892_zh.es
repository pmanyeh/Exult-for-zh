#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func0907 0x907 (var var0000);
extern void Func06F9 object#(0x6F9) ();

void Func0892 0x892 ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFEE0, 0x0000);
	message("Adjhar 似乎已經恢復了更傳統的魔像守衛的姿勢——堅定且一動也不動。然而，你不可能錯過他眼中閃爍的智慧光芒。");
	say();
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0000 = false;
labelFunc0892_0022:
	converse attend labelFunc0892_00C9;
	case "姓名" attend labelFunc0892_0038:
	message("「你現在一定知道了，我的創造者選擇稱我為 Adjhar。」");
	say();
	UI_remove_answer("姓名");
labelFunc0892_0038:
	case "職業" attend labelFunc0892_0052:
	message("「我被創造出來，作為三大原則神殿的眾多保護者之一。然而，」他停頓了一下，「我的職責也包括擔任愛之護身符的保管者。」");
	say();
	UI_remove_answer("職業");
	UI_add_answer("護身符");
labelFunc0892_0052:
	case "護身符" attend labelFunc0892_00AF:
	message("「你想要愛之護身符嗎？」");
	say();
	UI_remove_answer("護身符");
	if (!Func090A()) goto labelFunc0892_00AB;
	message("「我被放在這裡以保護神殿，並阻止任何人獲得護身符。除了展現出對愛的知識與理解的聖者。護身符是你的了，聖者。」~他把石手放在心口上，打開了胸前的一塊面板。他用另一隻手伸進去，拿出了一個美麗的黃色護身符。");
	say();
	var0000 = UI_create_new_object(0x03BB);
	UI_set_item_frame(var0000, 0x000A);
	var0001 = Func0907(UI_get_npc_object(0xFE9C));
	if (!var0001) goto labelFunc0892_00A4;
	message("他將護身符放在你的手掌心。~「你贏得了這個，以及與之相關的榮譽和力量。你真的是聖者。」");
	say();
	gflags[0x0328] = true;
	goto labelFunc0892_00CA;
	goto labelFunc0892_00A8;
labelFunc0892_00A4:
	message("「我很抱歉，但你必須減輕負擔，才能接受這三項最偉大祝福中的其中一項。」");
	say();
labelFunc0892_00A8:
	goto labelFunc0892_00AF;
labelFunc0892_00AB:
	message("「你確實配得上這樣一件神器。但如果你不希望利用神殿，我必須尊重你的意願。」");
	say();
labelFunc0892_00AF:
	case "告辭" attend labelFunc0892_00C6:
	message("「我向你道別。」*");
	say();
	if (!gflags[0x0328]) goto labelFunc0892_00C5;
	message("「聖者，請銘記愛之神殿的智慧。」*");
	say();
labelFunc0892_00C5:
	abort;
labelFunc0892_00C6:
	goto labelFunc0892_0022;
labelFunc0892_00C9:
	endconv;
labelFunc0892_00CA:
	if (!(gflags[0x0328] && (!gflags[0x0327]))) goto labelFunc0892_00E0;
	event = 0x0007;
	var0000->Func06F9();
	abort;
labelFunc0892_00E0:
	return;
}


