#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func044E object#(0x44E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	if (!(event == 0x0001)) goto labelFunc044E_01BE;
	UI_show_npc_face(0xFFB2, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFB2));
	if (!gflags[0x00E4]) goto labelFunc044E_0043;
	if (!gflags[0x00F0]) goto labelFunc044E_0043;
	UI_add_answer("Rayburt");
labelFunc044E_0043:
	if (!(!gflags[0x00EB])) goto labelFunc044E_0055;
	message("你看到一位年約三十多歲、和藹可親的女性。");
	say();
	gflags[0x00EB] = true;
	goto labelFunc044E_0059;
labelFunc044E_0055:
	message("「再次問候！」 Pamela 說。");
	say();
labelFunc044E_0059:
	converse attend labelFunc044E_01B9;
	case "姓名" attend labelFunc044E_0080:
	message("「我是 Pamela！」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc044E_007C;
	UI_add_answer("Rayburt");
labelFunc044E_007C:
	gflags[0x00F0] = true;
labelFunc044E_0080:
	case "職業" attend labelFunc044E_00BD:
	message("「我是外宿旅店的老闆。」");
	say();
	if (!((var0000 == 0x0010) || (var0000 == 0x000B))) goto labelFunc044E_00AC;
	message("「如果你需要房間，儘管說！」");
	say();
	UI_add_answer("房間");
	goto labelFunc044E_00B6;
labelFunc044E_00AC:
	if (!0x001A) goto labelFunc044E_00B6;
	message("「如果今晚想讓疲憊的雙腳休息一下，請過來吧！」");
	say();
labelFunc044E_00B6:
	UI_add_answer("外宿旅店");
labelFunc044E_00BD:
	case "房間" attend labelFunc044E_016B:
	message("「房間相當便宜。每人只需 8 枚金幣。要一間嗎？」");
	say();
	if (!Func090A()) goto labelFunc044E_0160;
	var0001 = UI_get_party_list();
	var0002 = 0x0000;
	enum();
labelFunc044E_00DD:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc044E_00F5;
	var0002 = (var0002 + 0x0001);
	goto labelFunc044E_00DD;
labelFunc044E_00F5:
	var0006 = (var0002 * 0x0008);
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0007 >= var0006)) goto labelFunc044E_0159;
	var0008 = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var0008)) goto labelFunc044E_013E;
	message("「你帶太多東西了，拿不下房間鑰匙！」");
	say();
	goto labelFunc044E_0156;
labelFunc044E_013E:
	message("「這是你的房間鑰匙。效期只到你退房為止。」");
	say();
	var0009 = UI_remove_party_items(var0006, 0x0284, 0xFE99, 0xFE99, true);
labelFunc044E_0156:
	goto labelFunc044E_015D;
labelFunc044E_0159:
	message("「你沒有足夠的金幣，是嗎？真可惜。」");
	say();
labelFunc044E_015D:
	goto labelFunc044E_0164;
labelFunc044E_0160:
	message("「那麼，改天吧。」");
	say();
labelFunc044E_0164:
	UI_remove_answer("房間");
labelFunc044E_016B:
	case "外宿旅店" attend labelFunc044E_017E:
	message("「嗯……Cove 可是愛與熱情之城，你不知道嗎？你得小心點。如果你在 Cove 待太久，你會愛上某個人的！記住我的話！」");
	say();
	UI_remove_answer("外宿旅店");
labelFunc044E_017E:
	case "Rayburt" attend labelFunc044E_0198:
	message("「喔，他真是個很棒的男人，你不覺得嗎？他既專注又認真。而且也很英俊！喔，還有我也很喜歡 Regal。」");
	say();
	UI_remove_answer("Rayburt");
	UI_add_answer("Regal");
labelFunc044E_0198:
	case "Regal" attend labelFunc044E_01AB:
	message("「就狗而言，牠也很英俊！」");
	say();
	UI_remove_answer("Regal");
labelFunc044E_01AB:
	case "告辭" attend labelFunc044E_01B6:
	goto labelFunc044E_01B9;
labelFunc044E_01B6:
	goto labelFunc044E_0059;
labelFunc044E_01B9:
	endconv;
	message("「待會見！」*");
	say();
labelFunc044E_01BE:
	if (!(event == 0x0000)) goto labelFunc044E_01CC;
	Func092E(0xFFB2);
labelFunc044E_01CC:
	return;
}


