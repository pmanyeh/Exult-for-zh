#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0897 0x897 ();
extern void Func0898 0x898 ();
extern void Func092E 0x92E (var var0000);

void Func0437 object#(0x437) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0437_01CB;
	UI_show_npc_face(0xFFC9, 0x0000);
	var0000 = UI_wearing_fellowship();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC9));
	if (!(var0001 == 0x0007)) goto labelFunc0437_0067;
	var0003 = Func08FC(0xFFC9, 0xFFE6);
	if (!var0003) goto labelFunc0437_0052;
	message("Grayson 嘘了你一声，因为你打扰了友谊会的集会。*");
	say();
	abort;
	goto labelFunc0437_0067;
labelFunc0437_0052:
	if (!gflags[0x00DA]) goto labelFunc0437_0062;
	message("「现在巴特林到底会在哪里？我想我们得在没有他的情况下开会了！」");
	say();
	goto labelFunc0437_006D;
	goto labelFunc0437_0067;
labelFunc0437_0062:
	message("「我得跑了！我得跑了！我必须！我必须！我参加友谊会集会要迟到了！」*");
	say();
	abort;
labelFunc0437_0067:
	var0004 = Func0909();
labelFunc0437_006D:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00B8])) goto labelFunc0437_008F;
	message("你看见一个精明干练的男人，笑得好像刚看到他的下一个顾客。");
	say();
	gflags[0x00B8] = true;
	goto labelFunc0437_0093;
labelFunc0437_008F:
	message("「又见面了，我的好朋友，」 Grayson 说。");
	say();
labelFunc0437_0093:
	converse attend labelFunc0437_01C0;
	case "姓名" attend labelFunc0437_00AF:
	message("「我是 Grayson ，");
	message(var0004);
	message("。一个谦虚诚实的人。」");
	say();
	UI_remove_answer("姓名");
labelFunc0437_00AF:
	case "职业" attend labelFunc0437_00C8:
	message("「哎呀，在不列颠城这里，我卖的是金钱能买到最好的防具和武器。空闲的时候，我为友谊会做事。」");
	say();
	UI_add_answer(["买东西", "友谊会"]);
labelFunc0437_00C8:
	case "防具" attend labelFunc0437_00EF:
	message("Grayson 上下打量你。「你真的相信你身上穿的能提供足够的保护吗？说实话，如果你卷入战斗，我很担心你的安全。你今天有兴趣买些什么吗？」");
	say();
	if (!Func090A()) goto labelFunc0437_00E0;
	Func0897();
	goto labelFunc0437_00E8;
labelFunc0437_00E0:
	message("「那么，下次吧。」");
	say();
	UI_pop_answers();
labelFunc0437_00E8:
	UI_remove_answer("防具");
labelFunc0437_00EF:
	case "武器" attend labelFunc0437_0116:
	message("看着你后， Grayson 说：「看得出来你非常需要武器装备。你今天想买些什么吗？」");
	say();
	if (!Func090A()) goto labelFunc0437_0107;
	Func0898();
	goto labelFunc0437_010F;
labelFunc0437_0107:
	message("「那么，下次吧。」");
	say();
	UI_pop_answers();
labelFunc0437_010F:
	UI_remove_answer("武器");
labelFunc0437_0116:
	case "买东西" attend labelFunc0437_0148:
	message("「我卖各种齐全的防具和武器。」");
	say();
	if (!(var0002 == 0x0007)) goto labelFunc0437_0144;
	message("「你想看哪一种？」");
	say();
	UI_push_answers();
	UI_add_answer(["防具", "武器"]);
	goto labelFunc0437_0148;
labelFunc0437_0144:
	message("「请在商店营业时来。」");
	say();
labelFunc0437_0148:
	case "友谊会" attend labelFunc0437_0172:
	if (!var0000) goto labelFunc0437_015A;
	message("「我看你也是友谊会的成员！」");
	say();
labelFunc0437_015A:
	message("「它对我的生活非常有益。在我加入之前，我几乎要破产了，而现在我比以前更繁荣。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer(["有益", "破产"]);
labelFunc0437_0172:
	case "有益" attend labelFunc0437_018C:
	message("「我以前从来不够积极或主动，无法成为一个成功的商人，但友谊会为我改变了这一切。」");
	say();
	UI_remove_answer("有益");
	UI_add_answer("改变");
labelFunc0437_018C:
	case "改变" attend labelFunc0437_019F:
	message("「通过将内在力量三位一体的价值观应用到我的生活中，我完成了我一生想要做的事。我的防具和武器店很成功，而且我在友谊会也有了归属。」");
	say();
	UI_remove_answer("改变");
labelFunc0437_019F:
	case "破产" attend labelFunc0437_01B2:
	message("「你看，我深信我的失败都是因为我糟糕的态度。是友谊会的教义改变了我思考的方式，并引导我走向正确的方向。」");
	say();
	UI_remove_answer("破产");
labelFunc0437_01B2:
	case "告辞" attend labelFunc0437_01BD:
	goto labelFunc0437_01C0;
labelFunc0437_01BD:
	goto labelFunc0437_0093;
labelFunc0437_01C0:
	endconv;
	message("「再会了，");
	message(var0004);
	message("。」*");
	say();
labelFunc0437_01CB:
	if (!(event == 0x0000)) goto labelFunc0437_0252;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC9));
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0437_024C;
	if (!(var0005 == 0x0001)) goto labelFunc0437_020F;
	var0006 = "@需要武器吗？@";
labelFunc0437_020F:
	if (!(var0005 == 0x0002)) goto labelFunc0437_021F;
	var0006 = "@需要防具吗？@";
labelFunc0437_021F:
	if (!(var0005 == 0x0003)) goto labelFunc0437_022F;
	var0006 = "@需要装备吗？@";
labelFunc0437_022F:
	if (!(var0005 == 0x0004)) goto labelFunc0437_023F;
	var0006 = "@需要武器吗？@";
labelFunc0437_023F:
	UI_item_say(0xFFC9, var0006);
	goto labelFunc0437_0252;
labelFunc0437_024C:
	Func092E(0xFFC9);
labelFunc0437_0252:
	return;
}


