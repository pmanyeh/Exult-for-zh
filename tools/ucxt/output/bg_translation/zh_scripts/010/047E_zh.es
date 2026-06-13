#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047E object#(0x47E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc047E_0353;
	UI_show_npc_face(0xFF82, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF82);
	var0003 = UI_get_npc_object(0xFF83);
	var0004 = UI_get_npc_object(0xFF81);
	var0005 = Func08F7(0xFF83);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0168]) goto labelFunc047E_0075;
	if (!(!(var0001 == 0x0004))) goto labelFunc047E_0075;
	if (!(!gflags[0x016A])) goto labelFunc047E_0075;
	UI_add_answer("歸還旗幟");
labelFunc047E_0075:
	if (!(var0001 == 0x0004)) goto labelFunc047E_015F;
	if (!gflags[0x0168]) goto labelFunc047E_010D;
	if (!(!gflags[0x016A])) goto labelFunc047E_010D;
	message("「我看到 Sprellic 那個懦夫把旗幟給了你，好讓它能還給我們。你最好交出來。」");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, 0xFE99);
	if (!var0006) goto labelFunc047E_00C6;
	message("她從你手中拿走旗幟。");
	say();
	message("「這件事現在解決了。但替我轉告 Sprellic 那隻可憐蟲，他以後最好別碰別人的東西。」*");
	say();
	gflags[0x016A] = true;
	gflags[0x0164] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc047E_010D;
labelFunc047E_00C6:
	message("「我們已經注意到你拿到了我們的榮譽旗幟。顯然是 Sprellic 給你讓你還給我們的。如果你想留下它，那我們現在的過節就是跟你了。」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc047E_010D:
	if (!(gflags[0x0170] && (!gflags[0x0168]))) goto labelFunc047E_015F;
	message("「你也許是為了 Sprellic 而戰，但我可是為了榮譽而戰！」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc047E_015F:
	if (!(!gflags[0x0178])) goto labelFunc047E_0171;
	message("站在你面前的是一位身材高挑的強悍女戰士，她的雙眼散發出對危險司空見慣的光芒。");
	say();
	gflags[0x0178] = true;
	goto labelFunc047E_0175;
labelFunc047E_0171:
	message("「看來我們又見面了，」Syria 說。");
	say();
labelFunc047E_0175:
	converse attend labelFunc047E_034E;
	case "姓名" attend labelFunc047E_018B:
	message("「我是 Syria，來自南方的戰士。」");
	say();
	UI_remove_answer("姓名");
labelFunc047E_018B:
	case "職業" attend labelFunc047E_01A7:
	message("「目前我正從最後一次傭兵航行中休息。我在 Jhelom 這裡向傷痕圖書館的戰鬥訓練師 De Snel 學習。」");
	say();
	UI_add_answer(["Jhelom", "De Snel", "傷痕圖書館"]);
labelFunc047E_01A7:
	case "Jhelom" attend labelFunc047E_01C1:
	message("「這是一個戰士與決鬥的城市。如果你不喜歡這裡的運作方式，那就離開。在這裡決鬥有許多原因。我有我自己戰鬥的理由。」");
	say();
	UI_add_answer("決鬥");
	UI_remove_answer("Jhelom");
labelFunc047E_01C1:
	case "決鬥" attend labelFunc047E_01F6:
	if (!(!gflags[0x0164])) goto labelFunc047E_01E4;
	message("「毫無疑問是 Sprellic 拿走了我們學校的榮譽旗幟。如果他不想決鬥，他只需要把它還回來就行了。」");
	say();
	UI_add_answer(["Sprellic", "歸還"]);
	goto labelFunc047E_01EF;
labelFunc047E_01E4:
	message("「真遺憾我們不能給那個小傻瓜一個教訓。不過，我們已經贏回了我們的榮譽，這就足夠了。目前為止。」");
	say();
	UI_add_answer("Sprellic");
labelFunc047E_01EF:
	UI_remove_answer("決鬥");
labelFunc047E_01F6:
	case "歸還" attend labelFunc047E_022E:
	message("「既然 Sprellic 沒有這麼做，這就證明了他對我們的嚴重侮辱是故意的。」*");
	say();
	if (!var0005) goto labelFunc047E_0227;
	UI_show_npc_face(0xFF83, 0x0000);
	message("「而我也將嚴重地侮辱他——穿過他的心臟！」*");
	say();
	UI_remove_npc_face(0xFF83);
	UI_show_npc_face(0xFF82, 0x0000);
labelFunc047E_0227:
	UI_remove_answer("歸還");
labelFunc047E_022E:
	case "Sprellic" attend labelFunc047E_024F:
	if (!(!gflags[0x0164])) goto labelFunc047E_0244;
	message("「Sprellic 拿走我們俱樂部榮譽旗幟的時候是我在守衛。我看見他拿走了，但他在夜色中溜走了。我因為讓小偷逃跑而被鞭打十下。我打算好好回報他。」");
	say();
	goto labelFunc047E_0248;
labelFunc047E_0244:
	message("「真遺憾我們不能給那個小傻瓜一個教訓。也許我們已經給過他教訓了。為了他自己好，他最好已經學乖了。」");
	say();
labelFunc047E_0248:
	UI_remove_answer("Sprellic");
labelFunc047E_024F:
	case "傷痕圖書館" attend labelFunc047E_0287:
	message("「傷痕圖書館是不列顛尼亞最偉大的戰士公會。」*");
	say();
	if (!var0005) goto labelFunc047E_0280;
	UI_show_npc_face(0xFF83, 0x0000);
	message("「沒錯！沒錯！」*");
	say();
	UI_remove_npc_face(0xFF83);
	UI_show_npc_face(0xFF82, 0x0000);
labelFunc047E_0280:
	UI_remove_answer("傷痕圖書館");
labelFunc047E_0287:
	case "De Snel" attend labelFunc047E_029A:
	message("「De Snel 大師教授一種純粹的戰鬥風格，超越了你之前可能學過的所有紀律。他是一位偉人。」");
	say();
	UI_remove_answer("De Snel");
labelFunc047E_029A:
	case "歸還旗幟" attend labelFunc047E_0340:
	message("「我明白 Sprellic 那個懦夫把旗幟給了你，好讓它能還給我們。你最好交出來。」");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, 0xFE99);
	if (!var0006) goto labelFunc047E_02DC;
	message("她從你手中拿走旗幟。");
	say();
	message("「這件事現在解決了。但替我轉告 Sprellic 那隻可憐蟲，他以後最好別碰別人的東西。」");
	say();
	gflags[0x016A] = true;
	gflags[0x0164] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc047E_0339;
labelFunc047E_02DC:
	message("「我們已經注意到你拿到了我們的榮譽旗幟。顯然是 Sprellic 給你讓你還給我們的。如果你想留下它，那我們現在的過節就是跟你了。」");
	say();
	if (!(!(var0001 == 0x0004))) goto labelFunc047E_02F2;
	message("「明天中午在決鬥區見！」*");
	say();
	goto labelFunc047E_0338;
labelFunc047E_02F2:
	message("「準備受死吧！」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
labelFunc047E_0338:
	abort;
labelFunc047E_0339:
	UI_remove_answer("歸還旗幟");
labelFunc047E_0340:
	case "告辭" attend labelFunc047E_034B:
	goto labelFunc047E_034E;
labelFunc047E_034B:
	goto labelFunc047E_0175;
labelFunc047E_034E:
	endconv;
	message("「我們不喜歡干涉我們私事的人。我們會盯著你的。」*");
	say();
labelFunc047E_0353:
	if (!(event == 0x0000)) goto labelFunc047E_0361;
	Func092E(0xFF82);
labelFunc047E_0361:
	return;
}


