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
	message("Adjhar 似乎已经恢复了更传统的魔像守卫的姿势——坚定且一动也不动。然而，你不可能错过他眼中闪烁的智能光芒。");
	say();
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0000 = false;
labelFunc0892_0022:
	converse attend labelFunc0892_00C9;
	case "姓名" attend labelFunc0892_0038:
	message("「你现在一定知道了，我的创造者选择称我为 Adjhar。」");
	say();
	UI_remove_answer("姓名");
labelFunc0892_0038:
	case "职业" attend labelFunc0892_0052:
	message("「我被创造出来，作为三大原则神殿的众多保护者之一。然而，」他停顿了一下，「我的职责也包括担任爱之护身符的保管者。」");
	say();
	UI_remove_answer("职业");
	UI_add_answer("护身符");
labelFunc0892_0052:
	case "护身符" attend labelFunc0892_00AF:
	message("「你想要爱之护身符吗？」");
	say();
	UI_remove_answer("护身符");
	if (!Func090A()) goto labelFunc0892_00AB;
	message("「我被放在这里以保护神殿，并阻止任何人获得护身符。除了展现出对爱的知识与理解的圣者。护身符是你的了，圣者。」~他把石手放在心口上，打开了胸前的一块面板。他用另一只手伸进去，拿出了一个美丽的黄色护身符。");
	say();
	var0000 = UI_create_new_object(0x03BB);
	UI_set_item_frame(var0000, 0x000A);
	var0001 = Func0907(UI_get_npc_object(0xFE9C));
	if (!var0001) goto labelFunc0892_00A4;
	message("他将护身符放在你的手掌心。~「你赢得了这个，以及与之相关的荣誉和力量。你真的是圣者。」");
	say();
	gflags[0x0328] = true;
	goto labelFunc0892_00CA;
	goto labelFunc0892_00A8;
labelFunc0892_00A4:
	message("「我很抱歉，但你必须减轻负担，才能接受这三项最伟大祝福中的其中一项。」");
	say();
labelFunc0892_00A8:
	goto labelFunc0892_00AF;
labelFunc0892_00AB:
	message("「你确实配得上这样一件神器。但如果你不希望利用神殿，我必须尊重你的意愿。」");
	say();
labelFunc0892_00AF:
	case "告辞" attend labelFunc0892_00C6:
	message("「我向你道别。」*");
	say();
	if (!gflags[0x0328]) goto labelFunc0892_00C5;
	message("「圣者，请铭记爱之神殿的智能。」*");
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


