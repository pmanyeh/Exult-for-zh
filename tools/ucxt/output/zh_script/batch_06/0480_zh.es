#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0480 object#(0x480) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0480_0009;
	abort;
labelFunc0480_0009:
	UI_show_npc_face(0xFF80, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02BB]) goto labelFunc0480_0036;
	UI_add_answer("Gorn");
labelFunc0480_0036:
	if (!(!gflags[0x02CC])) goto labelFunc0480_004C;
	message("你看到一位穿著戰士裝備的迷人女子。她兇狠地看著你。");
	say();
	message("「站住！」");
	say();
	gflags[0x02CC] = true;
	goto labelFunc0480_0050;
labelFunc0480_004C:
	message("「你想要什麼？」 Iriale 質問道。");
	say();
labelFunc0480_0050:
	converse attend labelFunc0480_0151;
	case "姓名" attend labelFunc0480_0091:
	message("「我叫 Iriale Silvermist 。你是誰？」");
	say();
	var0001 = Func090B([var0000, "聖者"]);
	if (!(var0001 == var0000)) goto labelFunc0480_007C;
	message("「我不認識你！」");
	say();
labelFunc0480_007C:
	if (!(var0001 == "聖者")) goto labelFunc0480_008A;
	message("「我不贊成開玩笑。」");
	say();
labelFunc0480_008A:
	UI_remove_answer("姓名");
labelFunc0480_0091:
	case "職業" attend labelFunc0480_00AA:
	message("Iriale 露出惡魔般的微笑。~~「我禁止人們進入。你違反了冥想修院 (Meditation Retreat) 的規定。 Ian 會非常不高興。你最好現在就離開。」");
	say();
	UI_add_answer(["規定", "冥想修院"]);
labelFunc0480_00AA:
	case "規定" attend labelFunc0480_00F1:
	message("「你心知肚明。修院的參加者必須遠離這個洞穴。」");
	say();
	UI_remove_answer("規定");
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0480_00F1;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「來吧，");
	message(var0000);
	message("，我們最好離開。我相信這位女士是認真的。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF80, 0x0000);
labelFunc0480_00F1:
	case "Gorn" attend labelFunc0480_0104:
	message("「那是剛才在這裡的那個臭蠻人的名字嗎？如果你在『出去的路上』看到他，告訴他如果他再靠近我，我就砍下他的頭！」");
	say();
	UI_remove_answer("Gorn");
labelFunc0480_0104:
	case "冥想修院" attend labelFunc0480_0143:
	message("「是的，我為冥想修院工作。~~而且我為『他』工作。『他』不希望你在這裡。我只給你一次轉身離開的機會。」");
	say();
	message("「你要離開嗎？」");
	say();
	if (!Func090A()) goto labelFunc0480_0130;
	message("「照做我就饒了你！」她看著你轉身離開。*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0007);
	abort;
	goto labelFunc0480_0143;
labelFunc0480_0130:
	message("她看到你下定決心的樣子，點了點頭。「那就死吧，愚蠢的傢伙！」*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0000);
	abort;
labelFunc0480_0143:
	case "告辭" attend labelFunc0480_014E:
	goto labelFunc0480_0151;
labelFunc0480_014E:
	goto labelFunc0480_0050;
labelFunc0480_0151:
	endconv;
	message("「快滾！」*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0007);
	return;
}


