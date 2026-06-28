#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0860 0x860 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func0411 object#(0x411) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0411_00F4;
	UI_show_npc_face(0xFFEF, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "谋杀", "服务", "告辞"]);
	if (!gflags[0x003F]) goto labelFunc0411_0048;
	UI_add_answer(["友谊会", "Klog"]);
labelFunc0411_0048:
	if (!(!gflags[0x0052])) goto labelFunc0411_005A;
	message("你看到一个神情严肃的人，身穿医者的长袍。");
	say();
	gflags[0x0052] = true;
	goto labelFunc0411_005E;
labelFunc0411_005A:
	message("「你好～我们再次见面了」 Chantu 说。「有什么我可以帮你的吗？」");
	say();
labelFunc0411_005E:
	converse attend labelFunc0411_00EF;
	case "姓名" attend labelFunc0411_0074:
	message("「我的名字是 Chantu 」，他微微鞠躬说。");
	say();
	UI_remove_answer("姓名");
labelFunc0411_0074:
	case "职业" attend labelFunc0411_0080:
	message("「我是 Trinsic 的医者。我可以为你的任何一位朋友，或者你自己施展治疗、解毒或复活术。」");
	say();
labelFunc0411_0080:
	case "谋杀" attend labelFunc0411_0093:
	message("「'对不列颠尼亚来说，发生这样的事情实在令人悲哀。 Christopher 是个好人。我希望凶手能被绳之以法。」");
	say();
	UI_remove_answer("谋杀");
labelFunc0411_0093:
	case "服务" attend labelFunc0411_00A7:
	Func0860(0x001E, 0x0032, 0x0190);
labelFunc0411_00A7:
	case "友谊会" attend labelFunc0411_00CE:
	message("医者皱起眉头。「友谊会不欣赏医者在不列颠尼亚所做的努力。虽然他们做了令人钦佩的事情，但友谊会在评估对医者的需求时，目光短浅。他们相信我们的工作可以通过所谓的『内在力量的三位一体(Triad of Inner Strength)』来完成。」");
	say();
	if (!var0001) goto labelFunc0411_00C7;
	message("Chantu 注意到你的徽章，眼睛睁大了。");
	say();
	message("「抱歉， ");
	message(var0000);
	message(", 我不是故意的.」");
	say();
labelFunc0411_00C7:
	UI_remove_answer("友谊会");
labelFunc0411_00CE:
	case "Klog" attend labelFunc0411_00E1:
	message("医者耸耸肩。「他...只是在尽他认为『对的』职责。而我也一样。」");
	say();
	UI_remove_answer("Klog");
labelFunc0411_00E1:
	case "告辞" attend labelFunc0411_00EC:
	goto labelFunc0411_00EF;
labelFunc0411_00EC:
	goto labelFunc0411_005E;
labelFunc0411_00EF:
	endconv;
	message("「再会。」");
	say();
labelFunc0411_00F4:
	if (!(event == 0x0000)) goto labelFunc0411_0174;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFEF));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x001D)) goto labelFunc0411_016E;
	if (!(var0003 == 0x0001)) goto labelFunc0411_0131;
	var0004 = "@感觉好多了？@";
labelFunc0411_0131:
	if (!(var0003 == 0x0002)) goto labelFunc0411_0141;
	var0004 = "@今天感觉如何？@";
labelFunc0411_0141:
	if (!(var0003 == 0x0003)) goto labelFunc0411_0151;
	var0004 = "@你的发烧减轻了。@";
labelFunc0411_0151:
	if (!(var0003 == 0x0004)) goto labelFunc0411_0161;
	var0004 = "@多休息...@";
labelFunc0411_0161:
	UI_item_say(0xFFEF, var0004);
	goto labelFunc0411_0174;
labelFunc0411_016E:
	Func092E(0xFFEF);
labelFunc0411_0174:
	return;
}


