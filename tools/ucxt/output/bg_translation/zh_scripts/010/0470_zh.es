#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func0911 0x911 (var var0000);

void Func0470 object#(0x470) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0470_01E1;
	UI_show_npc_face(0xFF90, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = "Nystul";
	var0004 = "Geoffrey";
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x014A])) goto labelFunc0470_0050;
	message("你看到一個滿臉苦澀、外表粗獷的男人。");
	say();
	gflags[0x014A] = true;
	goto labelFunc0470_0054;
labelFunc0470_0050:
	message("D'Rel 對你怒目而視。「你到底想要什麼？」");
	say();
labelFunc0470_0054:
	converse attend labelFunc0470_01DC;
	case "姓名" attend labelFunc0470_0077:
	message("「你在乎一個可憐蟲的名字做什麼？」");
	say();
	UI_add_answer(["可憐蟲", "在乎"]);
	UI_remove_answer("姓名");
labelFunc0470_0077:
	case "可憐蟲" attend labelFunc0470_0097:
	message("「他們把我關在這裡等死，真的！」");
	say();
	UI_remove_answer("可憐蟲");
	UI_add_answer(["他們", "等死"]);
labelFunc0470_0097:
	case "他們" attend labelFunc0470_00C5:
	message("「是 Britannia 稅務委員會幹的。他們和這裡的兩個人—— Jeff 爵士和 Goth 。」");
	say();
	UI_remove_answer("他們");
	UI_add_answer(["Jeff 爵士", "Goth"]);
	if (!(!var0002)) goto labelFunc0470_00C5;
	UI_add_answer("Britannia 稅務委員會");
labelFunc0470_00C5:
	case "等死" attend labelFunc0470_00D8:
	message("「他們告訴我餘生都要待在這裡。我也沒有理由懷疑他們！」");
	say();
	UI_remove_answer("等死");
labelFunc0470_00D8:
	case "Jeff 爵士" attend labelFunc0470_00EB:
	message("「那隻驕傲的公雞以為自己高於 Britannia 的所有人。只因為他主持高等法院，他就以為可以對任何人進行審判。」");
	say();
	UI_remove_answer("Jeff 爵士");
labelFunc0470_00EB:
	case "Goth" attend labelFunc0470_00FE:
	message("「那個偷雞摸狗的無賴比我更該被關在這裡！如果有選擇的話，別相信他。」");
	say();
	UI_remove_answer("Goth");
labelFunc0470_00FE:
	case "Britannia 稅務委員會" attend labelFunc0470_0115:
	message("「全都是些小偷！想拿走別人辛苦賺來的金幣。如果他們自己出去賺錢，也許就不需要拿走我們所有的錢了！」");
	say();
	var0002 = true;
	UI_remove_answer("Britannia 稅務委員會");
labelFunc0470_0115:
	case "在乎" attend labelFunc0470_0157:
	message("「你在乎是吧？好吧。如果你告訴我你的名字，我就告訴你我的名字，成交嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0470_014C;
	var0006 = Func090B([var0000, var0003, var0004]);
	message("「");
	message(var0006);
	message("，嗯。很好，一言為定。我是 D'Rel 。」");
	say();
	goto labelFunc0470_0150;
labelFunc0470_014C:
	message("「我就知道。」");
	say();
labelFunc0470_0150:
	UI_remove_answer("在乎");
labelFunc0470_0157:
	case "職業" attend labelFunc0470_0170:
	message("「現在沒有。但在我把這裡當成家之前，我是一名水手，一個……私掠者，來自海盜巢穴 (Buccaneer's Den)。」");
	say();
	UI_add_answer(["你的家", "海盜巢穴"]);
labelFunc0470_0170:
	case "你的家" attend labelFunc0470_0191:
	message("「嗯，其實我是因為沒繳稅被關進來的。畢竟，那錢是我……賺來的，為什麼我要交給 Britannia 稅務委員會？」");
	say();
	UI_remove_answer("你的家");
	if (!(!var0002)) goto labelFunc0470_0191;
	UI_add_answer("Britannia 稅務委員會");
labelFunc0470_0191:
	case "海盜巢穴" attend labelFunc0470_01B1:
	message("「你聽過海盜巢穴 (Buccaneer's Den)，不是嗎？就在大陸正東方的那座島。那裡住著一些裝木腿、手是鐵鉤、肩膀上還停著鸚鵡的男人！哈！哈！」");
	say();
	UI_remove_answer("海盜巢穴");
	if (!gflags[0x0043]) goto labelFunc0470_01B1;
	UI_add_answer("Hook");
labelFunc0470_01B1:
	case "Hook" attend labelFunc0470_01CE:
	message("「對，我認識 Hook 。你在找他嗎？他來自 海盜巢穴 (Buccaneer's Den)。他通常跟一個叫 Forskis 什麼的石像鬼一起行動。如果你見到他，替我向他……『問好』。」他揮了揮緊握的拳頭。");
	say();
	UI_remove_answer("Hook");
	gflags[0x0135] = true;
	Func0911(0x000A);
labelFunc0470_01CE:
	case "告辭" attend labelFunc0470_01D9:
	goto labelFunc0470_01DC;
labelFunc0470_01D9:
	goto labelFunc0470_0054;
labelFunc0470_01DC:
	endconv;
	message("「對，從我眼前消失！」*");
	say();
labelFunc0470_01E1:
	if (!(event == 0x0000)) goto labelFunc0470_01EA;
	abort;
labelFunc0470_01EA:
	return;
}


