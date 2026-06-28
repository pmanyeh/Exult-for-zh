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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0099])) goto labelFunc0418_0035;
	message("你看到你的老朋友 Nystul ，现在是一位穿着法师长袍、衰老的长者。他似乎陷入了沉思，神游物外。");
	say();
	gflags[0x0099] = true;
	goto labelFunc0418_0047;
labelFunc0418_0035:
	if (!(!gflags[0x0003])) goto labelFunc0418_0043;
	message("「我认识你吗？」 Nystul 问道。");
	say();
	goto labelFunc0418_0047;
labelFunc0418_0043:
	message("「什么事，圣者？」 Nystul 问道。");
	say();
labelFunc0418_0047:
	converse attend labelFunc0418_0165;
	case "姓名" attend labelFunc0418_006B:
	if (!(!gflags[0x0003])) goto labelFunc0418_0060;
	message("法师看起来困惑了一会儿。「我的名字是 Nystul？是的，就是这样！」");
	say();
	goto labelFunc0418_0064;
labelFunc0418_0060:
	message("「哎呀，是 Nystul 啦！」");
	say();
labelFunc0418_0064:
	UI_remove_answer("姓名");
labelFunc0418_006B:
	case "职业" attend labelFunc0418_0092:
	if (!(!gflags[0x0003])) goto labelFunc0418_0081;
	message("「嗯，我以前经常施展魔法，」他带着歉意说。「至少... 我『认为』我以前是这么做的。我想，有一个叫不列颠王的人。我为他工作。」");
	say();
	goto labelFunc0418_0085;
labelFunc0418_0081:
	message("「我是不列颠王的皇家法师！」");
	say();
labelFunc0418_0085:
	UI_add_answer(["魔法", "不列颠王"]);
labelFunc0418_0092:
	case "魔法" attend labelFunc0418_00F2:
	if (!(!gflags[0x0003])) goto labelFunc0418_00DA;
	message("「有时候魔法有效，有时候则不然。」他挥了挥手，结果魔杖掉了下来。「哎呀！」他叫了出来，弯下腰去捡。");
	say();
	var0000 = Func08F7(0xFFFE);
	if (!var0000) goto labelFunc0418_00D7;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「你确定这个人其实不是小丑吗？」");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFE8, 0x0000);
	message("「总之，正如我所说的，嗯，我刚说到哪了？喔对。魔法。如果你想要的话，我还是可以卖给你一些法术或药材。」");
	say();
labelFunc0418_00D7:
	goto labelFunc0418_00DE;
labelFunc0418_00DA:
	message("「魔法现在好多了。我的法术都能顺利运作了。我感谢你，圣者，感谢你净化了以太。对任何法术或药材感兴趣吗？」");
	say();
labelFunc0418_00DE:
	UI_remove_answer("魔法");
	UI_add_answer(["法术", "药材"]);
labelFunc0418_00F2:
	case "法术" attend labelFunc0418_0114:
	message("「你想要买一些法术吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0418_0110;
	Func08C5();
	goto labelFunc0418_0114;
labelFunc0418_0110:
	message("「喔。那就算了。」");
	say();
labelFunc0418_0114:
	case "药材" attend labelFunc0418_0136:
	message("「你想要买一些药材吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0418_0132;
	Func08C6();
	goto labelFunc0418_0136;
labelFunc0418_0132:
	message("「喔。那就算了。」");
	say();
labelFunc0418_0136:
	case "不列颠王" attend labelFunc0418_0157:
	if (!(!gflags[0x0003])) goto labelFunc0418_014C;
	message("「什么王？你是说那个有时候会坐在王座上的老头子吗？」");
	say();
	goto labelFunc0418_0150;
labelFunc0418_014C:
	message("「他是这片土地上有史以来最伟大的统治者，我为能侍奉他而感到自豪。」");
	say();
labelFunc0418_0150:
	UI_remove_answer("不列颠王");
labelFunc0418_0157:
	case "告辞" attend labelFunc0418_0162:
	goto labelFunc0418_0165;
labelFunc0418_0162:
	goto labelFunc0418_0047;
labelFunc0418_0165:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc0418_0174;
	message("「我们要去哪里吗？」*");
	say();
	goto labelFunc0418_0178;
labelFunc0418_0174:
	message("「告辞了，圣者。请务必尽快再来找我们。」*");
	say();
labelFunc0418_0178:
	return;
}


