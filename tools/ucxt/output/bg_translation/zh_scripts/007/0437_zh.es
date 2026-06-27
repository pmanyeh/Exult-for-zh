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
	message("Grayson 噓了你一聲，因為你打擾了友誼會的集會。*");
	say();
	abort;
	goto labelFunc0437_0067;
labelFunc0437_0052:
	if (!gflags[0x00DA]) goto labelFunc0437_0062;
	message("「現在巴特林到底會在哪裡？我想我們得在沒有他的情況下開會了！」");
	say();
	goto labelFunc0437_006D;
	goto labelFunc0437_0067;
labelFunc0437_0062:
	message("「我得跑了！我得跑了！我必須！我必須！我參加友誼會集會要遲到了！」*");
	say();
	abort;
labelFunc0437_0067:
	var0004 = Func0909();
labelFunc0437_006D:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00B8])) goto labelFunc0437_008F;
	message("你看見一個精明幹練的男人，笑得好像剛看到他的下一個顧客。");
	say();
	gflags[0x00B8] = true;
	goto labelFunc0437_0093;
labelFunc0437_008F:
	message("「又見面了，我的好朋友，」 Grayson 說。");
	say();
labelFunc0437_0093:
	converse attend labelFunc0437_01C0;
	case "姓名" attend labelFunc0437_00AF:
	message("「我是 Grayson ，");
	message(var0004);
	message("。一個謙虛誠實的人。」");
	say();
	UI_remove_answer("姓名");
labelFunc0437_00AF:
	case "職業" attend labelFunc0437_00C8:
	message("「哎呀，在不列顛城這裡，我賣的是金錢能買到最好的防具和武器。空閒的時候，我為友誼會做事。」");
	say();
	UI_add_answer(["買東西", "友誼會"]);
labelFunc0437_00C8:
	case "防具" attend labelFunc0437_00EF:
	message("Grayson 上下打量你。「你真的相信你身上穿的能提供足夠的保護嗎？說實話，如果你捲入戰鬥，我很擔心你的安全。你今天有興趣買些什麼嗎？」");
	say();
	if (!Func090A()) goto labelFunc0437_00E0;
	Func0897();
	goto labelFunc0437_00E8;
labelFunc0437_00E0:
	message("「那麼，下次吧。」");
	say();
	UI_pop_answers();
labelFunc0437_00E8:
	UI_remove_answer("防具");
labelFunc0437_00EF:
	case "武器" attend labelFunc0437_0116:
	message("看著你後， Grayson 說：「看得出來你非常需要武器裝備。你今天想買些什麼嗎？」");
	say();
	if (!Func090A()) goto labelFunc0437_0107;
	Func0898();
	goto labelFunc0437_010F;
labelFunc0437_0107:
	message("「那麼，下次吧。」");
	say();
	UI_pop_answers();
labelFunc0437_010F:
	UI_remove_answer("武器");
labelFunc0437_0116:
	case "買東西" attend labelFunc0437_0148:
	message("「我賣各種齊全的防具和武器。」");
	say();
	if (!(var0002 == 0x0007)) goto labelFunc0437_0144;
	message("「你想看哪一種？」");
	say();
	UI_push_answers();
	UI_add_answer(["防具", "武器"]);
	goto labelFunc0437_0148;
labelFunc0437_0144:
	message("「請在商店營業時來。」");
	say();
labelFunc0437_0148:
	case "友誼會" attend labelFunc0437_0172:
	if (!var0000) goto labelFunc0437_015A;
	message("「我看你也是友誼會的成員！」");
	say();
labelFunc0437_015A:
	message("「它對我的生活非常有益。在我加入之前，我幾乎要破產了，而現在我比以前更繁榮。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer(["有益", "破產"]);
labelFunc0437_0172:
	case "有益" attend labelFunc0437_018C:
	message("「我以前從來不夠積極或主動，無法成為一個成功的商人，但友誼會為我改變了這一切。」");
	say();
	UI_remove_answer("有益");
	UI_add_answer("改變");
labelFunc0437_018C:
	case "改變" attend labelFunc0437_019F:
	message("「透過將內在力量三位一體的價值觀應用到我的生活中，我完成了我一生想要做的事。我的防具和武器店很成功，而且我在友誼會也有了歸屬。」");
	say();
	UI_remove_answer("改變");
labelFunc0437_019F:
	case "破產" attend labelFunc0437_01B2:
	message("「你看，我深信我的失敗都是因為我糟糕的態度。是友誼會的教義改變了我思考的方式，並引導我走向正確的方向。」");
	say();
	UI_remove_answer("破產");
labelFunc0437_01B2:
	case "告辭" attend labelFunc0437_01BD:
	goto labelFunc0437_01C0;
labelFunc0437_01BD:
	goto labelFunc0437_0093;
labelFunc0437_01C0:
	endconv;
	message("「再會了，");
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
	var0006 = "@需要武器嗎？@";
labelFunc0437_020F:
	if (!(var0005 == 0x0002)) goto labelFunc0437_021F;
	var0006 = "@需要防具嗎？@";
labelFunc0437_021F:
	if (!(var0005 == 0x0003)) goto labelFunc0437_022F;
	var0006 = "@需要裝備嗎？@";
labelFunc0437_022F:
	if (!(var0005 == 0x0004)) goto labelFunc0437_023F;
	var0006 = "@需要武器嗎？@";
labelFunc0437_023F:
	UI_item_say(0xFFC9, var0006);
	goto labelFunc0437_0252;
labelFunc0437_024C:
	Func092E(0xFFC9);
labelFunc0437_0252:
	return;
}


