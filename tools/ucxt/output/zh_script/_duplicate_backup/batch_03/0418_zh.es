#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func08C5 0x8C5 ();
extern void Func08C6 0x8C6 ();

void Func0418 object#(0x418) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0418_0009;
	abort;
labelFunc0418_0009:
	UI_show_npc_face(0xFFE8, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0099])) goto labelFunc0418_0035;
	message("你看到了你的老朋友 Nystul ，現在是個穿著法師長袍、衰老的老人。他似乎陷入了沉思，神遊太虛。");
	say();
	gflags[0x0099] = true;
	goto labelFunc0418_0047;
labelFunc0418_0035:
	if (!(!gflags[0x0003])) goto labelFunc0418_0043;
	message("「我認識你嗎？」 Nystul 問。");
	say();
	goto labelFunc0418_0047;
labelFunc0418_0043:
	message("「怎麼了，聖者？」 Nystul 問。");
	say();
labelFunc0418_0047:
	converse attend labelFunc0418_0165;
	case "姓名" attend labelFunc0418_006B:
	if (!(!gflags[0x0003])) goto labelFunc0418_0060;
	message("法師困惑了一會兒。「我的名字是 Nystul ？對，就是這個！」");
	say();
	goto labelFunc0418_0064;
labelFunc0418_0060:
	message("「哎呀，是 Nystul 啊！」");
	say();
labelFunc0418_0064:
	UI_remove_answer("姓名");
labelFunc0418_006B:
	case "職業" attend labelFunc0418_0092:
	if (!(!gflags[0x0003])) goto labelFunc0418_0081;
	message("「嗯，我以前經常施展魔法，」他帶著歉意說。「至少……我『認為』我以前是這樣的。我想，有一個叫 Lord British 的人。我為他工作。」");
	say();
	goto labelFunc0418_0085;
labelFunc0418_0081:
	message("「我是 Lord British 的私人法師！」");
	say();
labelFunc0418_0085:
	UI_add_answer(["魔法", "Lord British"]);
labelFunc0418_0092:
	case "魔法" attend labelFunc0418_00F2:
	if (!(!gflags[0x0003])) goto labelFunc0418_00DA;
	message("「有時魔法有用，有時沒用。」他揮了揮手，結果魔杖掉在地上。「哎呀！」他叫著，彎下腰去撿。");
	say();
	var0000 = Func08F7(0xFFFE);
	if (!var0000) goto labelFunc0418_00D7;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「你確定這個人真的不是小丑嗎？」");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFE8, 0x0000);
	message("「總之，正如我所說的，呃，我在說什麼？喔對了。魔法。如果你想的話，我還是可以賣給你一些法術或秘藥。」");
	say();
labelFunc0418_00D7:
	goto labelFunc0418_00DE;
labelFunc0418_00DA:
	message("「魔法現在好多了。我的法術都能順利運作了。我感謝你，聖者，清理了以太。對任何法術或秘藥有興趣嗎？」");
	say();
labelFunc0418_00DE:
	UI_remove_answer("魔法");
	UI_add_answer(["法術", "秘藥"]);
labelFunc0418_00F2:
	case "法術" attend labelFunc0418_0114:
	message("「你想買些法術嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0418_0110;
	Func08C5();
	goto labelFunc0418_0114;
labelFunc0418_0110:
	message("「噢。那就算了。」");
	say();
labelFunc0418_0114:
	case "秘藥" attend labelFunc0418_0136:
	message("「你想買些秘藥嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0418_0132;
	Func08C6();
	goto labelFunc0418_0136;
labelFunc0418_0132:
	message("「噢。那就算了。」");
	say();
labelFunc0418_0136:
	case "Lord British" attend labelFunc0418_0157:
	if (!(!gflags[0x0003])) goto labelFunc0418_014C;
	message("「Lord 什麼？你是說那個有時坐在王座上的老頭嗎？」");
	say();
	goto labelFunc0418_0150;
labelFunc0418_014C:
	message("「他是這片土地上最偉大的統治者，我很自豪能為他服務。」");
	say();
labelFunc0418_0150:
	UI_remove_answer("Lord British");
labelFunc0418_0157:
	case "告辭" attend labelFunc0418_0162:
	goto labelFunc0418_0165;
labelFunc0418_0162:
	goto labelFunc0418_0047;
labelFunc0418_0165:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc0418_0174;
	message("「我們要去哪裡嗎？」*");
	say();
	goto labelFunc0418_0178;
labelFunc0418_0174:
	message("「再見，聖者。一定要盡快再來看我們。」*");
	say();
labelFunc0418_0178:
	return;
}


