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
	UI_add_answer(["姓名", "職業", "謀殺", "服務", "告辭"]);
	if (!gflags[0x003F]) goto labelFunc0411_0048;
	UI_add_answer(["友誼會", "Klog"]);
labelFunc0411_0048:
	if (!(!gflags[0x0052])) goto labelFunc0411_005A;
	message("你看到一個神情嚴肅的人，身穿醫者的長袍。");
	say();
	gflags[0x0052] = true;
	goto labelFunc0411_005E;
labelFunc0411_005A:
	message("「你好～我們再次見面了」 Chantu 說。「有什麼我可以幫你的嗎？」");
	say();
labelFunc0411_005E:
	converse attend labelFunc0411_00EF;
	case "姓名" attend labelFunc0411_0074:
	message("「我的名字是 Chantu 」，他微微鞠躬說。");
	say();
	UI_remove_answer("姓名");
labelFunc0411_0074:
	case "職業" attend labelFunc0411_0080:
	message("「我是 Trinsic 的醫者。我可以為你的任何一位朋友，或者你自己施展治療、解毒或復活術。」");
	say();
labelFunc0411_0080:
	case "謀殺" attend labelFunc0411_0093:
	message("「'對 Britannia 來說，發生這樣的事情實在令人悲哀。 Christopher 是個好人。我希望兇手能被繩之以法。」");
	say();
	UI_remove_answer("謀殺");
labelFunc0411_0093:
	case "服務" attend labelFunc0411_00A7:
	Func0860(0x001E, 0x0032, 0x0190);
labelFunc0411_00A7:
	case "友誼會" attend labelFunc0411_00CE:
	message("醫者皺起眉頭。「友誼會不欣賞醫者在 Britannia 所做的努力。雖然他們做了令人欽佩的事情，但友誼會在評估對醫者的需求時，目光短淺。他們相信我們的工作可以透過所謂的『內在力量三合一(Triad of Inner Strength)』來完成。」");
	say();
	if (!var0001) goto labelFunc0411_00C7;
	message("Chantu 注意到你的徽章，眼睛睜大了。");
	say();
	message("「抱歉， ");
	message(var0000);
	message(", 我不是故意的.」");
	say();
labelFunc0411_00C7:
	UI_remove_answer("友誼會");
labelFunc0411_00CE:
	case "Klog" attend labelFunc0411_00E1:
	message("醫者聳聳肩。「他...只是在盡他認為『對的』職責。而我也一樣。」");
	say();
	UI_remove_answer("Klog");
labelFunc0411_00E1:
	case "告辭" attend labelFunc0411_00EC:
	goto labelFunc0411_00EF;
labelFunc0411_00EC:
	goto labelFunc0411_005E;
labelFunc0411_00EF:
	endconv;
	message("「再會。」");
	say();
labelFunc0411_00F4:
	if (!(event == 0x0000)) goto labelFunc0411_0174;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFEF));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x001D)) goto labelFunc0411_016E;
	if (!(var0003 == 0x0001)) goto labelFunc0411_0131;
	var0004 = "@感覺好多了？@";
labelFunc0411_0131:
	if (!(var0003 == 0x0002)) goto labelFunc0411_0141;
	var0004 = "@今天感覺如何？@";
labelFunc0411_0141:
	if (!(var0003 == 0x0003)) goto labelFunc0411_0151;
	var0004 = "@你的發燒減輕了。@";
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


