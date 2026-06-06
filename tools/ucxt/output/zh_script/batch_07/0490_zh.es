#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08D6 0x8D6 ();
extern void Func08D7 0x8D7 ();
extern void Func08D8 0x8D8 ();
extern void Func08D9 0x8D9 ();
extern void Func08DA 0x8DA ();

void Func0490 object#(0x490) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0490_0176;
	if (!(!gflags[0x01B8])) goto labelFunc0490_0022;
	UI_show_npc_face(0xFF70, 0x0000);
	message("美麗的鬼魂眼神空洞地看著你。你做的任何事似乎都無法引起她的注意。*");
	say();
	gflags[0x01A7] = false;
	abort;
labelFunc0490_0022:
	if (!gflags[0x0198]) goto labelFunc0490_002F;
	UI_add_answer("犧牲");
labelFunc0490_002F:
	var0000 = UI_is_pc_female();
	var0001 = Func0909();
	if (!gflags[0x01A6]) goto labelFunc0490_004F;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D6();
labelFunc0490_004F:
	if (!gflags[0x01AA]) goto labelFunc0490_0062;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D7();
labelFunc0490_0062:
	if (!gflags[0x01A7]) goto labelFunc0490_007C;
	if (!(!gflags[0x01A9])) goto labelFunc0490_007C;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D8();
labelFunc0490_007C:
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(0xFF70);
	if (!((var0002 == 0x0000) || (var0002 == 0x0001))) goto labelFunc0490_00D1;
	if (!(var0003 == 0x000E)) goto labelFunc0490_00B9;
	UI_show_npc_face(0xFF70, 0x0000);
	Func08D9();
	goto labelFunc0490_00D1;
labelFunc0490_00B9:
	if (!(!(var0003 == 0x0010))) goto labelFunc0490_00D1;
	UI_show_npc_face(0xFF70, 0x0000);
	Func08DA();
labelFunc0490_00D1:
	UI_show_npc_face(0xFF70, 0x0000);
	if (!(!gflags[0x01C9])) goto labelFunc0490_00F3;
	message("你看到一位穿著黑色長袍的幽靈女士。她的樣子有點奇怪，但你說不上來。頓了一下，她說：「你好，");
	message(var0001);
	message("。我是 Rowena，這座奇妙高塔的女主人。」她在房間裡比劃著，指著發霉的牆壁和佈滿蜘蛛網的屋頂。");
	say();
	gflags[0x01C9] = true;
	goto labelFunc0490_00FD;
labelFunc0490_00F3:
	message("當你走近時， Rowena 露出了一種抽離的微笑。「啊，你回來了，");
	message(var0001);
	message("。高塔的女士能為你提供什麼協助嗎？」");
	say();
labelFunc0490_00FD:
	UI_add_answer(["姓名", "職業", "高塔", "告辭"]);
labelFunc0490_0110:
	converse attend labelFunc0490_0175;
	case "姓名" attend labelFunc0490_0126:
	message("「我叫做…… Rowena 」");
	say();
	UI_remove_answer("姓名");
labelFunc0490_0126:
	case "職業" attend labelFunc0490_0139:
	message("她茫然地盯著看了一秒鐘，然後，彷彿照著劇本一樣，「我是高塔的女主人。我照顧 Horance 領主的需求，並保持我們的地方看起來體面。」看來她在後一項職責上已經落後了。");
	say();
	UI_add_answer("Horance");
labelFunc0490_0139:
	case "高塔" attend labelFunc0490_014C:
	message("過了一會兒，「這是一座可愛的高塔，你不覺得嗎？」在你回答之前，她繼續說道。~~「你看到那美麗的光芒在地板的石板上閃爍嗎？噴泉裡的水閃閃發光。這真是一個適合居住的美麗地方。」她的眼睛盯著地板。");
	say();
	UI_remove_answer("高塔");
labelFunc0490_014C:
	case "Horance" attend labelFunc0490_015F:
	message("她眨了一次眼，然後說，「Horance ……多麼美好的名字。他發現了迷失又孤獨的我，並把我帶到這裡當一位女士。難道他不是最宏偉的領主嗎？」");
	say();
	UI_remove_answer("Horance");
labelFunc0490_015F:
	case "告辭" attend labelFunc0490_0172:
	message("她停頓了一下。「再見，");
	message(var0001);
	message("。我希望你喜歡你對我們輝煌高塔的訪問。請隨時回來。」你覺得自己彷彿在跟一尊雕像說話。*");
	say();
	abort;
labelFunc0490_0172:
	goto labelFunc0490_0110;
labelFunc0490_0175:
	endconv;
labelFunc0490_0176:
	if (!(event == 0x0000)) goto labelFunc0490_017F;
	abort;
labelFunc0490_017F:
	return;
}


