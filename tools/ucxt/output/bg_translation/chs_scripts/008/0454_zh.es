#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();

void Func0454 object#(0x454) ()
{
	var var0000;

	if (!(event == 0x0000)) goto labelFunc0454_0009;
	abort;
labelFunc0454_0009:
	UI_show_npc_face(0xFFAC, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x010F])) goto labelFunc0454_003B;
	message("你看到一个年轻的吉普赛小伙子。他戴着一个友谊会的护身符。他垂着眼，表情极度悲伤。");
	say();
	gflags[0x010F] = true;
	goto labelFunc0454_0045;
labelFunc0454_003B:
	message("Sasha 擡起头。「祝你有个美好的一天，");
	message(var0000);
	message("。」");
	say();
labelFunc0454_0045:
	converse attend labelFunc0454_012B;
	case "姓名" attend labelFunc0454_005B:
	message("「我的名字是 Sasha 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0454_005B:
	case "职业" attend labelFunc0454_0077:
	message("「我太年轻了，还不能工作。我是个吉普赛人，因为我的父母也是吉普赛人。我也是友谊会的成员。」");
	say();
	UI_add_answer(["父母", "吉普赛人", "友谊会"]);
labelFunc0454_0077:
	case "父母" attend labelFunc0454_0091:
	message("「我的父母—— Frederico 和 Tania ——被谋杀了。我不知道为什么有人会想伤害他们。」男孩哽咽地说出这些话。突然间，他被悲伤淹没，无法再说下去了。");
	say();
	UI_remove_answer("父母");
	UI_add_answer("谋杀案");
labelFunc0454_0091:
	case "谋杀案" attend labelFunc0454_00A4:
	message("「这发生在 Minoc 的锯木厂。」");
	say();
	UI_remove_answer("谋杀案");
labelFunc0454_00A4:
	case "友谊会" attend labelFunc0454_00BA:
	Func0919();
	message("「在过去的一个星期里，我一直离家为友谊会工作。」");
	say();
	UI_remove_answer("友谊会");
labelFunc0454_00BA:
	case "理念" attend labelFunc0454_00CC:
	Func091A();
	UI_remove_answer("理念");
labelFunc0454_00CC:
	case "吉普赛人" attend labelFunc0454_00EC:
	message("「我回来和 Margareta 及 Jergi 在一起，为我的父母哀悼。他们不赞成我加入友谊会，但我知道他们是出于对我的爱才关心我的，就像我爱他们一样。」");
	say();
	UI_remove_answer("吉普赛人");
	UI_add_answer(["Margareta", "Jergi"]);
labelFunc0454_00EC:
	case "Margareta" attend labelFunc0454_00FF:
	message("「她非常聪明，知道很多事情，但是当我问她我应该回到友谊会还是留下来和他们在一起时，她没有回答我。」");
	say();
	UI_remove_answer("Margareta");
labelFunc0454_00FF:
	case "Jergi" attend labelFunc0454_011D:
	message("「他是我父亲的兄弟。他是个好人，也很聪明。现在他是我们人民的领袖。他会做对我们有益的事。」");
	say();
	if (!(!gflags[0x011B])) goto labelFunc0454_0116;
	message("「也许你应该跟他说说话。」");
	say();
labelFunc0454_0116:
	UI_remove_answer("Jergi");
labelFunc0454_011D:
	case "告辞" attend labelFunc0454_0128:
	goto labelFunc0454_012B;
labelFunc0454_0128:
	goto labelFunc0454_0045;
labelFunc0454_012B:
	endconv;
	message("小伙子坚忍地点点头，转身离开。*");
	say();
	return;
}


