#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08BB 0x8BB (var var0000);
extern void Func08BC 0x8BC (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0499 object#(0x499) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0499_026E;
	UI_show_npc_face(0xFF67, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x01FB])) goto labelFunc0499_0040;
	message("你看到你的老朋友 Mariah 。");
	say();
	gflags[0x01FB] = true;
	goto labelFunc0499_005D;
labelFunc0499_0040:
	if (!gflags[0x0003]) goto labelFunc0499_0053;
	message("「是的，");
	message(var0001);
	message("？我能幫你什麼忙？」Mariah 向你打招呼。");
	say();
	goto labelFunc0499_005D;
labelFunc0499_0053:
	message("「是的，");
	message(var0000);
	message("？」Mariah 笑了，笑得有點太甜了。");
	say();
labelFunc0499_005D:
	if (!gflags[0x0003]) goto labelFunc0499_0136;
labelFunc0499_0063:
	converse attend labelFunc0499_0132;
	case "姓名" attend labelFunc0499_00B0:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0499_009F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你肯定認得你的老同伴 Mariah 吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF67, 0x0000);
	goto labelFunc0499_00A9;
labelFunc0499_009F:
	message("「你已經忘記我了嗎，");
	message(var0001);
	message("？我是 Mariah 。」");
	say();
labelFunc0499_00A9:
	UI_remove_answer("姓名");
labelFunc0499_00B0:
	case "職業" attend labelFunc0499_00D5:
	message("「我在 Lycaeum 賣法術、魔法藥材，有時還賣一些藥水。你想買這些東西嗎，");
	message(var0001);
	message("？」");
	say();
	UI_add_answer(["法術", "藥材", "藥水", "Lycaeum"]);
labelFunc0499_00D5:
	case "法術" attend labelFunc0499_00E3:
	Func08BB(0xFF67);
labelFunc0499_00E3:
	case "藥材" attend labelFunc0499_00F1:
	Func08BC("Reagents");
labelFunc0499_00F1:
	case "藥水" attend labelFunc0499_0109:
	message("「恐怕，");
	message(var0001);
	message("，我的選擇非常少。」");
	say();
	Func08BC("Potions");
labelFunc0499_0109:
	case "Lycaeum" attend labelFunc0499_011C:
	message("她悲傷地搖了搖頭。「我已經很久沒有做『我自己』了，以至於我都不認得這個城鎮了。」她睜大了眼睛。~~「現在 Lycaeum 周圍有這麼多建築，你看到了嗎？」~~她停頓了一下，看著你。~~「順便說一句，老朋友。我猜是你讓以太恢復正常狀態的。謝謝你。」");
	say();
	UI_remove_answer("Lycaeum");
labelFunc0499_011C:
	case "告辭" attend labelFunc0499_012F:
	message("「未來的日子會很好的，朋友 ");
	message(var0001);
	message("。」*");
	say();
	abort;
labelFunc0499_012F:
	goto labelFunc0499_0063;
labelFunc0499_0132:
	endconv;
	goto labelFunc0499_026E;
labelFunc0499_0136:
	converse attend labelFunc0499_026D;
	case "姓名" attend labelFunc0499_0181:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0499_0176;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你肯定認得你的老同伴 Mariah 吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF67, 0x0000);
	message("「是的，你不認得我嗎？」她停頓了一下，怒視著你。「但你是誰，我的糕點呢？」");
	say();
	goto labelFunc0499_017A;
labelFunc0499_0176:
	message("「是的，你可以告訴我你的名字，」她說，環顧著建築物。「這些書難道不漂亮嗎？」");
	say();
labelFunc0499_017A:
	UI_remove_answer("姓名");
labelFunc0499_0181:
	case "職業" attend labelFunc0499_019D:
	message("她笑了。「我有一份非常重要的工作，我真的有。天哪，那些書架難道不可愛嗎？多麼整齊有序。」她轉頭看著你。~~「小心！墨水瓶都是滿的，羽毛筆也很鋒利。」她咯咯地笑。");
	say();
	UI_add_answer(["書架", "墨水瓶", "羽毛筆"]);
labelFunc0499_019D:
	case "書架" attend labelFunc0499_01B7:
	message("「難道它們不是你見過最整潔、最有秩序、保養得最好的書架嗎？他們維護得非常好！」");
	say();
	UI_add_answer("他們");
	UI_remove_answer("書架");
labelFunc0499_01B7:
	case "墨水瓶" attend labelFunc0499_01D1:
	message("「它們總是裝得滿滿的，隨時可以使用。他們非常擅長保持它們充滿並乾淨！」");
	say();
	UI_add_answer("他們");
	UI_remove_answer("墨水瓶");
labelFunc0499_01D1:
	case "羽毛筆" attend labelFunc0499_01EB:
	message("「哦，是的，它們非常鋒利！當你需要寫信時，它們總是在那裡。他們做得很好，隨時準備了很多！」");
	say();
	UI_add_answer("他們");
	UI_remove_answer("羽毛筆");
labelFunc0499_01EB:
	case "他們" attend labelFunc0499_0205:
	message("「是的，他們是！」她的臉變得悲傷。「但我只負責販售 。」");
	say();
	UI_add_answer("賣");
	UI_remove_answer("他們");
labelFunc0499_0205:
	case "賣" attend labelFunc0499_0228:
	message("「是的，」她同意道，「我確實有在賣。我甚至會拼字。事實上，我甚至在賣法術！但是，如果你想要魔法藥材，那你運氣不佳，因為我只在一週的七天中的某一天賣這些。你想知道是哪一天嗎？~~「你一定有一套很棒的書！我剛好有一件可以搭配你書架的物品——一瓶藥水。如果你向我買一個法術或魔法藥材，我會以原價賣給你一瓶藥水！」");
	say();
	UI_add_answer(["哪一天", "藥材", "藥水"]);
	UI_remove_answer("賣");
labelFunc0499_0228:
	case "哪一天" attend labelFunc0499_0241:
	message("「哎呀，就是今天。你運氣真好。買個法術吧。」");
	say();
	Func08BB(0xFF67);
	UI_remove_answer("哪一天");
labelFunc0499_0241:
	case "藥材" attend labelFunc0499_024F:
	Func08BC("Reagents");
labelFunc0499_024F:
	case "藥水" attend labelFunc0499_025D:
	Func08BC("Potions");
labelFunc0499_025D:
	case "告辭" attend labelFunc0499_026A:
	message("「當然，隨時回來買吧。」*");
	say();
	abort;
labelFunc0499_026A:
	goto labelFunc0499_0136;
labelFunc0499_026D:
	endconv;
labelFunc0499_026E:
	if (!(event == 0x0000)) goto labelFunc0499_02F5;
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF67));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x000B)) goto labelFunc0499_02EF;
	if (!(!gflags[0x0003])) goto labelFunc0499_02EC;
	if (!(var0004 == 0x0001)) goto labelFunc0499_02B2;
	var0005 = "@我的糕點到底在哪裡！@";
labelFunc0499_02B2:
	if (!(var0004 == 0x0002)) goto labelFunc0499_02C2;
	var0005 = "@可愛，可愛的書架！@";
labelFunc0499_02C2:
	if (!(var0004 == 0x0003)) goto labelFunc0499_02D2;
	var0005 = "@可愛，可愛的墨水瓶！@";
labelFunc0499_02D2:
	if (!(var0004 == 0x0004)) goto labelFunc0499_02E2;
	var0005 = "@空氣中瀰漫著魔法……@";
labelFunc0499_02E2:
	UI_item_say(0xFF67, var0005);
labelFunc0499_02EC:
	goto labelFunc0499_02F5;
labelFunc0499_02EF:
	Func092E(0xFF67);
labelFunc0499_02F5:
	return;
}


