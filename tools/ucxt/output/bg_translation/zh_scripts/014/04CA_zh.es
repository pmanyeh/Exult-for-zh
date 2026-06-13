#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04CA object#(0x4CA) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04CA_01FF;
	UI_show_npc_face(0xFF36, 0x0000);
	var0000 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0243]) goto labelFunc04CA_0036;
	UI_add_answer("Elizabeth 與 Abraham");
labelFunc04CA_0036:
	if (!(!gflags[0x0273])) goto labelFunc04CA_0048;
	message("你看到一個年輕、曬黑、肌肉發達、英俊的男人，散發出活力與和藹。");
	say();
	gflags[0x0273] = true;
	goto labelFunc04CA_004C;
labelFunc04CA_0048:
	message("「是嗎？」Ian 問道。");
	say();
labelFunc04CA_004C:
	converse attend labelFunc04CA_01FA;
	case "姓名" attend labelFunc04CA_0062:
	message("「我是 Ian 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04CA_0062:
	case "職業" attend labelFunc04CA_007B:
	message("「我是這個友誼會成員冥想靜修處的主任。」");
	say();
	UI_add_answer(["管理人", "靜修處"]);
labelFunc04CA_007B:
	case "管理人" attend labelFunc04CA_009B:
	message("「我管理各項活動，並帶領新進成員進行冥想練習。」");
	say();
	UI_remove_answer("管理人");
	UI_add_answer(["活動", "練習"]);
labelFunc04CA_009B:
	case "活動" attend labelFunc04CA_00AE:
	message("「靜修處的活動包含理念訓練和研究。」");
	say();
	UI_remove_answer("活動");
labelFunc04CA_00AE:
	case "練習" attend labelFunc04CA_00C8:
	message("「成員們必須成長，去聆聽並理解那引導他們走上內在力量道路的聲音。冥想練習加速了這個過程。」");
	say();
	UI_remove_answer("練習");
	UI_add_answer("聲音");
labelFunc04CA_00C8:
	case "聲音" attend labelFunc04CA_00DB:
	message("「那是人在內心聽到的聲音。我們都有能力聽到它。有些人能輕易地聽到，不需要來參加冥想靜修處的課程。然而，其他人發現要聽到這個聲音比較困難。那他們就需要在靜修處學習。」");
	say();
	UI_remove_answer("聲音");
labelFunc04CA_00DB:
	case "靜修處" attend labelFunc04CA_00FB:
	message("「這是由友誼會設立的，讓新成員可以參加並了解更多關於我們組織的資訊，與自己聯繫，並幫助他們成為友誼會中更好的兄弟。大部分的活動都在屏障內部進行。」");
	say();
	UI_remove_answer("靜修處");
	UI_add_answer(["聯繫", "屏障"]);
labelFunc04CA_00FB:
	case "聯繫" attend labelFunc04CA_010E:
	message("「大多數來到友誼會的人，都在與生命中的失敗搏鬥。他們本質上是在害怕自己。在冥想靜修處這裡，人們學習去相信自己。他們藉由學習如何將友誼會的理念最好地應用在生活上，來建立那份信念。」");
	say();
	UI_remove_answer("聯繫");
labelFunc04CA_010E:
	case "屏障" attend labelFunc04CA_0128:
	message("「這是為了將非成員擋在外面而設置的。在屏障內部，友誼會成員發現更容易聽到他們的內在聲音。每位成員都會拿到一把隨時可以使用的鑰匙。」");
	say();
	UI_remove_answer("屏障");
	UI_add_answer("鑰匙");
labelFunc04CA_0128:
	case "鑰匙" attend labelFunc04CA_01B4:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc04CA_0140;
	message("「啊，但你不是真正的友誼會成員！你假冒佩戴著獎章。我不能讓你進去。再見。」*");
	say();
	abort;
labelFunc04CA_0140:
	if (!gflags[0x0006]) goto labelFunc04CA_018D;
	message("「哦，你想和我們一起冥想嗎，兄弟？」");
	say();
	if (!Func090A()) goto labelFunc04CA_0186;
	var0001 = UI_add_party_items(0x0001, 0x0281, 0x00F9, 0x0007, false);
	if (!var0001) goto labelFunc04CA_0183;
	message("「那這是你的鑰匙。保持快樂！哦，還有一件事。有一個規則必須遵守。」");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF36), 0x000B);
	UI_add_answer("規則");
labelFunc04CA_0183:
	goto labelFunc04CA_018A;
labelFunc04CA_0186:
	message("「哦。那我不能給你鑰匙。」");
	say();
labelFunc04CA_018A:
	goto labelFunc04CA_01AD;
labelFunc04CA_018D:
	message("「你是友誼會成員嗎？」");
	say();
	if (!Func090A()) goto labelFunc04CA_01A0;
	var0002 = "「我不相信你。你";
	goto labelFunc04CA_01A6;
labelFunc04CA_01A0:
	var0002 = "「然後你";
labelFunc04CA_01A6:
	message(var0002);
	message("必須去 Britain 和我們總部的 Batlin 談談。只有他能正式引導你加入友誼會。」");
	say();
labelFunc04CA_01AD:
	UI_remove_answer("鑰匙");
labelFunc04CA_01B4:
	case "規則" attend labelFunc04CA_01C7:
	message("「不要進入你在屏障內會發現的洞穴。這個洞穴對參加者是禁止進入的。」");
	say();
	UI_remove_answer("規則");
labelFunc04CA_01C7:
	case "Elizabeth 與 Abraham" attend labelFunc04CA_01EC:
	if (!(!gflags[0x02A8])) goto labelFunc04CA_01E1;
	message("「唉，你剛好錯過他們了。我的好朋友 Elizabeth 和 Abraham 剛在這裡運送資金。我相信他們已經離開這裡去海盜巢穴 (Buccaneer's Den)了。」");
	say();
	gflags[0x0264] = true;
	goto labelFunc04CA_01E5;
labelFunc04CA_01E1:
	message("「我已經有一段時間沒見過他們了。」");
	say();
labelFunc04CA_01E5:
	UI_remove_answer("Elizabeth 與 Abraham");
labelFunc04CA_01EC:
	case "告辭" attend labelFunc04CA_01F7:
	goto labelFunc04CA_01FA;
labelFunc04CA_01F7:
	goto labelFunc04CA_004C;
labelFunc04CA_01FA:
	endconv;
	message("「再見。」*");
	say();
labelFunc04CA_01FF:
	if (!(event == 0x0000)) goto labelFunc04CA_020D;
	Func092E(0xFF36);
labelFunc04CA_020D:
	return;
}


