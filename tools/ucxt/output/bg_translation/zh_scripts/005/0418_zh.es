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
	message("你看到你的老朋友 Nystul ，現在是一位穿著法師長袍、衰老的長者。他似乎陷入了沉思，神遊物外。");
	say();
	gflags[0x0099] = true;
	goto labelFunc0418_0047;
labelFunc0418_0035:
	if (!(!gflags[0x0003])) goto labelFunc0418_0043;
	message("「我認識你嗎？」 Nystul 問道。");
	say();
	goto labelFunc0418_0047;
labelFunc0418_0043:
	message("「什麼事，聖者？」 Nystul 問道。");
	say();
labelFunc0418_0047:
	converse attend labelFunc0418_0165;
	case "姓名" attend labelFunc0418_006B:
	if (!(!gflags[0x0003])) goto labelFunc0418_0060;
	message("法師看起來困惑了一會兒。「我的名字是 Nystul？是的，就是這樣！」");
	say();
	goto labelFunc0418_0064;
labelFunc0418_0060:
	message("「哎呀，是 Nystul 啦！」");
	say();
labelFunc0418_0064:
	UI_remove_answer("姓名");
labelFunc0418_006B:
	case "職業" attend labelFunc0418_0092:
	if (!(!gflags[0x0003])) goto labelFunc0418_0081;
	message("「嗯，我以前經常施展魔法，」他帶著歉意說。「至少... 我『認為』我以前是這麼做的。我想，有一個叫不列顛王的人。我為他工作。」");
	say();
	goto labelFunc0418_0085;
labelFunc0418_0081:
	message("「我是不列顛王的皇家法師！」");
	say();
labelFunc0418_0085:
	UI_add_answer(["魔法", "不列顛王"]);
labelFunc0418_0092:
	case "魔法" attend labelFunc0418_00F2:
	if (!(!gflags[0x0003])) goto labelFunc0418_00DA;
	message("「有時候魔法有效，有時候則不然。」他揮了揮手，結果魔杖掉了下來。「哎呀！」他叫了出來，彎下腰去撿。");
	say();
	var0000 = Func08F7(0xFFFE);
	if (!var0000) goto labelFunc0418_00D7;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「你確定這個人其實不是小丑嗎？」");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFE8, 0x0000);
	message("「總之，正如我所說的，嗯，我剛說到哪了？喔對。魔法。如果你想要的話，我還是可以賣給你一些法術或藥材。」");
	say();
labelFunc0418_00D7:
	goto labelFunc0418_00DE;
labelFunc0418_00DA:
	message("「魔法現在好多了。我的法術都能順利運作了。我感謝你，聖者，感謝你淨化了以太。對任何法術或藥材感興趣嗎？」");
	say();
labelFunc0418_00DE:
	UI_remove_answer("魔法");
	UI_add_answer(["法術", "藥材"]);
labelFunc0418_00F2:
	case "法術" attend labelFunc0418_0114:
	message("「你想要買一些法術嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0418_0110;
	Func08C5();
	goto labelFunc0418_0114;
labelFunc0418_0110:
	message("「喔。那就算了。」");
	say();
labelFunc0418_0114:
	case "藥材" attend labelFunc0418_0136:
	message("「你想要買一些藥材嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0418_0132;
	Func08C6();
	goto labelFunc0418_0136;
labelFunc0418_0132:
	message("「喔。那就算了。」");
	say();
labelFunc0418_0136:
	case "不列顛王" attend labelFunc0418_0157:
	if (!(!gflags[0x0003])) goto labelFunc0418_014C;
	message("「什麼王？你是說那個有時候會坐在王座上的老頭子嗎？」");
	say();
	goto labelFunc0418_0150;
labelFunc0418_014C:
	message("「他是這片土地上有史以來最偉大的統治者，我為能侍奉他而感到自豪。」");
	say();
labelFunc0418_0150:
	UI_remove_answer("不列顛王");
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
	message("「告辭了，聖者。請務必盡快再來找我們。」*");
	say();
labelFunc0418_0178:
	return;
}


