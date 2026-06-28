#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047F object#(0x47F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc047F_019A;
	UI_show_npc_face(0xFF81, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF81);
	var0003 = UI_get_npc_object(0xFF82);
	var0004 = UI_get_npc_object(0xFF83);
	if (!(!gflags[0x0179])) goto labelFunc047F_004F;
	message("你看到一位非常严肃的年轻人。他的举止像个有学问且有教养的绅士。");
	say();
	gflags[0x0179] = true;
	goto labelFunc047F_0053;
labelFunc047F_004F:
	message("「你想和我说话吗？」Timmons 问道。");
	say();
labelFunc047F_0053:
	if (!gflags[0x0168]) goto labelFunc047F_0068;
	if (!(!gflags[0x0164])) goto labelFunc047F_0065;
	message("「我看到你拿着荣誉旗帜。作为这件事一个稍感兴趣的第三方，我要求你把旗帜还给 Syria。请这么做。」*");
	say();
	abort;
labelFunc047F_0065:
	goto labelFunc047F_00D9;
labelFunc047F_0068:
	if (!gflags[0x0170]) goto labelFunc047F_00D9;
	if (!(var0001 == 0x0004)) goto labelFunc047F_00CC;
	message("「好吧，");
	message(var0000);
	message("，我必须向 De Snel 证明自己。如果你是受苦的人，我会道歉，但我绝不退缩！」");
	say();
	message("「准备受死吧！」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	abort;
	goto labelFunc047F_00D9;
labelFunc047F_00CC:
	message("「好吧，");
	message(var0000);
	message("，我必须向 De Snel 证明自己。如果你是受苦的人，那也只能这样了！明天中午在决斗区见！」*");
	say();
	goto labelFunc047F_00D9;
labelFunc047F_00D9:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc047F_00E9:
	converse attend labelFunc047F_018F;
	case "姓名" attend labelFunc047F_0105:
	message("「我的名字是 Timmons，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc047F_0105:
	case "职业" attend labelFunc047F_011E:
	message("「目前我没有工作。我把那些都留在新马金西亚了。我来 Jhelom 是为了在伤痕图书馆跟随 De Snel 大师学习。」");
	say();
	UI_add_answer(["Jhelom", "伤痕图书馆"]);
labelFunc047F_011E:
	case "Jhelom" attend labelFunc047F_0138:
	message("「恐怕我帮不了你什么忙。除了决斗之外，我对这个城镇所知甚少。我自己也是刚到这里。也许你应该去问别人。」");
	say();
	UI_add_answer("决斗");
	UI_remove_answer("Jhelom");
labelFunc047F_0138:
	case "决斗" attend labelFunc047F_0160:
	if (!(!gflags[0x0164])) goto labelFunc047F_0155;
	message("「我听说过这个叫 Sprellic 的人，他声称自己是比伤痕图书馆里任何人都伟大的战士，以及他是如何从他们墙上偷走荣誉旗帜的。所以我找上了这个人，并亲自向他挑战决斗。」");
	say();
	UI_add_answer("伤痕图书馆");
	goto labelFunc047F_0159;
labelFunc047F_0155:
	message("「不幸的是，在我有机会让 De Snel 大师留下深刻印象之前，与 Sprellic 的决斗就被取消了。」");
	say();
labelFunc047F_0159:
	UI_remove_answer("决斗");
labelFunc047F_0160:
	case "伤痕图书馆" attend labelFunc047F_0181:
	if (!(!gflags[0x0164])) goto labelFunc047F_0176;
	message("「新马金西亚港口一艘船上的水手第一次告诉我关于伤痕图书馆的事，说它是全不列颠尼亚最伟大的战斗公会，以及它的训练师 De Snel 大师如何创造了完美的战斗风格。我立刻花光身上所有的钱来到这里。但 De Snel 现在拒绝收我为徒。我知道如果我能击败一个自称比公会里任何人都强的战士，并在这个过程中帮助恢复公会的荣誉，De Snel 最终就不得不接受我。」");
	say();
	goto labelFunc047F_017A;
labelFunc047F_0176:
	message("「伤痕图书馆的训练师 De Snel 大师拒绝让我加入，直到我在战斗中证明自己。在 Jhelom 这个城镇，唯一能在战斗中证明自己的方法就是决斗。但我母亲把我教养成一个完美的绅士。到目前为止，我还没有成功地充分冒犯任何人，以至于让他们向我挑战决斗。嗯。也许我只是不适合成为伤痕图书馆的一员。」");
	say();
labelFunc047F_017A:
	UI_remove_answer("伤痕图书馆");
labelFunc047F_0181:
	case "告辞" attend labelFunc047F_018C:
	goto labelFunc047F_018F;
labelFunc047F_018C:
	goto labelFunc047F_00E9;
labelFunc047F_018F:
	endconv;
	message("「很高兴能和你说话，");
	message(var0000);
	message("。」*");
	say();
labelFunc047F_019A:
	if (!(event == 0x0000)) goto labelFunc047F_01A8;
	Func092E(0xFF81);
labelFunc047F_01A8:
	return;
}


