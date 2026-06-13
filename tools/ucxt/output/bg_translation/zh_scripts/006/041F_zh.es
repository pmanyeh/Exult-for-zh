#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func041F object#(0x41F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc041F_013F;
	UI_show_npc_face(0xFFE1, 0x0000);
	var0000 = Func08F7(0xFFDE);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00A0])) goto labelFunc041F_003D;
	message("這是一個可愛的蹣跚學步幼童，手裡抱著一個洋娃娃。");
	say();
	gflags[0x00A0] = true;
	goto labelFunc041F_0041;
labelFunc041F_003D:
	message("「嗨！」 Kristy 歡呼道。");
	say();
labelFunc041F_0041:
	converse attend labelFunc041F_013A;
	case "姓名" attend labelFunc041F_007C:
	message("「Kwisty 。」");
	say();
	if (!var0000) goto labelFunc041F_0075;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「Kristy ，和 Nicholas 一樣，是我們的孤兒之一。她是被一位大法師議會（Great Council）成員在 Paws 的一間廢棄房屋裡發現的。」");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFE1, 0x0000);
labelFunc041F_0075:
	UI_remove_answer("姓名");
labelFunc041F_007C:
	case "職業" attend labelFunc041F_00BB:
	var0001 = UI_get_schedule_type(0xFFE1);
	if (!(var0001 == 0x0019)) goto labelFunc041F_00A4;
	message("「鬼抓人！玩鬼抓人！」");
	say();
	message("幼童跑開去尋找育兒室的玩伴了。*");
	say();
	abort;
	goto labelFunc041F_00BB;
labelFunc041F_00A4:
	message("Kristy 看起來很困惑。「唱歌。馬馬。 Rosa 。贏家。」");
	say();
	UI_add_answer(["唱歌", "馬馬", "Rosa", "贏家"]);
labelFunc041F_00BB:
	case "唱歌" attend labelFunc041F_00CE:
	message("Kristy 非常樂意這麼做。「A-B-C-D-E-F-G！H-I-K-M-M-M-O-P！Q-T-W-Y-X-Z！」她對自己的歌感到自豪，儘管她唱得不太對。");
	say();
	UI_remove_answer("唱歌");
labelFunc041F_00CE:
	case "馬馬" attend labelFunc041F_00E1:
	message("「我愛馬馬！」她用力搖著搖搖馬。");
	say();
	UI_remove_answer("馬馬");
labelFunc041F_00E1:
	case "Rosa" attend labelFunc041F_00F4:
	message("Kristy 緊緊抱住她的洋娃娃。「Rosa ！」");
	say();
	UI_remove_answer("Rosa");
labelFunc041F_00F4:
	case "贏家" attend labelFunc041F_012C:
	message("「我是贏家！」她大聲宣布。");
	say();
	if (!var0000) goto labelFunc041F_0125;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「她一直這麼說。我不確定那是什麼意思。可能跟某種比賽有關。」");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFE1, 0x0000);
labelFunc041F_0125:
	UI_remove_answer("贏家");
labelFunc041F_012C:
	case "告辭" attend labelFunc041F_0137:
	goto labelFunc041F_013A;
labelFunc041F_0137:
	goto labelFunc041F_0041;
labelFunc041F_013A:
	endconv;
	message("「掰掰！」*");
	say();
labelFunc041F_013F:
	if (!(event == 0x0000)) goto labelFunc041F_01B6;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE1));
	if (!(var0001 == 0x0019)) goto labelFunc041F_01B6;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc041F_017C;
	var0003 = "@鬼抓人！當鬼囉！@";
labelFunc041F_017C:
	if (!(var0002 == 0x0002)) goto labelFunc041F_018C;
	var0003 = "@抓不到我！@";
labelFunc041F_018C:
	if (!(var0002 == 0x0003)) goto labelFunc041F_019C;
	var0003 = "@啦啦！當鬼囉！@";
labelFunc041F_019C:
	if (!(var0002 == 0x0004)) goto labelFunc041F_01AC;
	var0003 = "@有本事來抓我呀！@";
labelFunc041F_01AC:
	UI_item_say(0xFFE1, var0003);
labelFunc041F_01B6:
	return;
}


