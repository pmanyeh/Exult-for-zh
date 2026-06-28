#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0469 object#(0x469) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0469_0137;
	UI_show_npc_face(0xFF97, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0143])) goto labelFunc0469_003A;
	message("这名男子用严厉、怀疑的眼光跟你打招呼。");
	say();
	gflags[0x0143] = true;
	goto labelFunc0469_0044;
labelFunc0469_003A:
	message("「你有何贵干， ");
	message(var0000);
	message("？」");
	say();
labelFunc0469_0044:
	converse attend labelFunc0469_012C;
	case "姓名" attend labelFunc0469_0060:
	message("「我是 Jeff 爵士， ");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0469_0060:
	case "职业" attend labelFunc0469_0079:
	message("「我是这修道院里监狱的高等法院官员。」");
	say();
	UI_add_answer(["官员", "修道院"]);
labelFunc0469_0079:
	case "官员" attend labelFunc0469_0093:
	message("「我是不列颠尼亚官府司法部门的人。我的工作就是确保罪犯受到法律制裁。」");
	say();
	UI_add_answer("罪犯");
	UI_remove_answer("官员");
labelFunc0469_0093:
	case "罪犯" attend labelFunc0469_00B3:
	message("「我们已经有两名囚犯了，但还有很多无赖逍遥法外。」");
	say();
	UI_add_answer(["囚犯", "无赖"]);
	UI_remove_answer("罪犯");
labelFunc0469_00B3:
	case "囚犯" attend labelFunc0469_00CD:
	message("「你当然没见过他们，」他眉头深锁，「但我们有一个海盗，还有，」他停顿了一下，「一个巨魔 (troll) 。如果你想见他们，去跟狱卒 Goth 谈谈。」");
	say();
	UI_add_answer("Goth");
	UI_remove_answer("囚犯");
labelFunc0469_00CD:
	case "无赖" attend labelFunc0469_00E0:
	message("「自己去看吧，关于已知恶棍的公告都在法庭的日志本里。」");
	say();
	UI_remove_answer("无赖");
labelFunc0469_00E0:
	case "Goth" attend labelFunc0469_010B:
	message("「他才在这里工作了几个星期，但我已经知道他不可靠。他身上明显有一种肆无忌惮的气质。他不是你的朋友，对吧？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0469_0100;
	message("「我就知道。」他转身不看你。*");
	say();
	abort;
	goto labelFunc0469_0104;
labelFunc0469_0100:
	message("「不是，」他紧紧盯着你说，「他当然不是。」");
	say();
labelFunc0469_0104:
	UI_remove_answer("Goth");
labelFunc0469_010B:
	case "修道院" attend labelFunc0469_011E:
	message("「僧侣们在那里生活和学习，但他们除了酿酒几乎什么都不做。嗯，我知道他们其中有一个人在打理花园。」");
	say();
	UI_remove_answer("修道院");
labelFunc0469_011E:
	case "告辞" attend labelFunc0469_0129:
	goto labelFunc0469_012C;
labelFunc0469_0129:
	goto labelFunc0469_0044;
labelFunc0469_012C:
	endconv;
	message("「让你的身心保持在正道上， ");
	message(var0000);
	message("。」");
	say();
labelFunc0469_0137:
	if (!(event == 0x0000)) goto labelFunc0469_0140;
	abort;
labelFunc0469_0140:
	return;
}


