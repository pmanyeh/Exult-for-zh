#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern void Func08D2 0x8D2 (var var0000, var var0001, var var0002);

void Func046C object#(0x46C) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;

	if (!(event == 0x0001)) goto labelFunc046C_0452;
	UI_show_npc_face(0xFF94, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = 0xFF94;
	var0003 = false;
	var0004 = false;
	var0005 = Func0931(0xFE9B, 0x0001, 0x03E7, 0xFE99, 0x0004);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0146])) goto labelFunc046C_0064;
	message("這個女人閃著明亮的眼睛跟你打招呼。");
	say();
	gflags[0x0146] = true;
	goto labelFunc046C_006E;
labelFunc046C_0064:
	message("「哈囉， ");
	message(var0000);
	message("，」 Reyna 說。");
	say();
labelFunc046C_006E:
	var0006 = UI_find_nearest(0xFE9C, 0x02CB, 0xFFFF);
	if (!var0006) goto labelFunc046C_0092;
	if (!(!gflags[0x0128])) goto labelFunc046C_0092;
	UI_add_answer("墓園");
labelFunc046C_0092:
	if (!var0005) goto labelFunc046C_00A5;
	if (!gflags[0x0128]) goto labelFunc046C_00A5;
	UI_add_answer("帶來了花");
labelFunc046C_00A5:
	if (!gflags[0x0163]) goto labelFunc046C_00B6;
	UI_add_answer("治療");
	var0004 = true;
labelFunc046C_00B6:
	converse attend labelFunc046C_042B;
	case "姓名" attend labelFunc046C_00CC:
	message("「我是 Reyna ，」她說著，把頭髮從臉上撥開。");
	say();
	UI_remove_answer("姓名");
labelFunc046C_00CC:
	case "職業" attend labelFunc046C_00FE:
	message("「我是一名治療師。我選擇在靠近森林的這裡開店。」");
	say();
	gflags[0x0163] = true;
	if (!(!var0004)) goto labelFunc046C_00EA;
	UI_add_answer("治療");
labelFunc046C_00EA:
	UI_add_answer("森林");
	if (!gflags[0x013B]) goto labelFunc046C_00FE;
	UI_add_answer("動物");
labelFunc046C_00FE:
	case "森林" attend labelFunc046C_0121:
	message("「我想在這裡生活和工作，因為這片土地非常美麗。我發現了很多可以做和可以看的事物。不幸的是，森林太廣闊了，我還沒有遇見許多住在這裡的其他人。我確實知道修道院就在我家對面。~~而且附近某處有一位學者。」她若有所思了一會兒。「另外，我相信在修道院東邊有一座監獄。」");
	say();
	UI_remove_answer("森林");
	UI_add_answer(["修道院", "學者", "監獄"]);
labelFunc046C_0121:
	case "監獄" attend labelFunc046C_0134:
	message("「我從來沒真的看過它，」她笑著說，「但傳聞說牢房就在法庭旁邊，為了在審判後能快速、輕易地監禁。」");
	say();
	UI_remove_answer("監獄");
labelFunc046C_0134:
	case "學者" attend labelFunc046C_0155:
	message("「我從 Aimi 那裡聽說他很聰明，而且……對於教導那些有興趣增加知識的人也有一點過於熱心。」");
	say();
	if (!(!var0003)) goto labelFunc046C_014E;
	UI_add_answer("Aimi");
labelFunc046C_014E:
	UI_remove_answer("學者");
labelFunc046C_0155:
	case "Aimi" attend labelFunc046C_0179:
	var0003 = true;
	if (!gflags[0x015A]) goto labelFunc046C_016E;
	message("「她是在修道院打理花園的僧侶。」");
	say();
	goto labelFunc046C_0172;
labelFunc046C_016E:
	message("「她是住在修道院的僧侶之一。目前，她是我在這片森林裡唯一真正見過的其他人。」");
	say();
labelFunc046C_0172:
	UI_remove_answer("Aimi");
labelFunc046C_0179:
	case "修道院" attend labelFunc046C_019D:
	message("「這就是這個區域——共情修道院——名字的由來，得名於住在玫瑰友誼會修道院裡的僧侶。據說他們釀的酒很美味。其中一位僧侶在閒暇時照料著一個美麗的花園。事實上，我經常向她買花。~~但是，」她咧嘴一笑，「至於其他的僧侶，我只看過他們釀酒和在鄉間閒晃。」");
	say();
	gflags[0x015A] = true;
	UI_remove_answer("修道院");
	UI_add_answer(["花", "其他人"]);
labelFunc046C_019D:
	case "其他人" attend labelFunc046C_01BE:
	message("「Aimi 是我唯一見過的，但我知道那裡還有一兩個人在釀酒。」");
	say();
	if (!(!var0003)) goto labelFunc046C_01B7;
	UI_add_answer("Aimi");
labelFunc046C_01B7:
	UI_remove_answer("其他人");
labelFunc046C_01BE:
	case "花" attend labelFunc046C_01DF:
	message("「是的，我買來給我的母親。」");
	say();
	if (!(!gflags[0x0128])) goto labelFunc046C_01D8;
	UI_add_answer("母親");
labelFunc046C_01D8:
	UI_remove_answer("花");
labelFunc046C_01DF:
	case "母親", "墓園" attend labelFunc046C_025A:
	gflags[0x0128] = true;
	if (!var0006) goto labelFunc046C_0230;
	var0007 = "";
	var0008 = UI_find_nearby(0xFF94, 0x03E7, 0x000A, 0x0000);
	enum();
labelFunc046C_020E:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc046C_0230;
	if (!(UI_get_item_frame(var000B) == 0x0004)) goto labelFunc046C_022D;
	var0007 = "我知道這裡已經有 \r\n\t\t\t\t\t\t非常美麗的花了， \r\n\t\t\t\t\t\t但再多的花也不足以 \r\n\t\t\t\t\t\t表達我有多麼 \r\n\t\t\t\t\t\t想念她。 ";
labelFunc046C_022D:
	goto labelFunc046C_020E;
labelFunc046C_0230:
	message("她看著自己的腳，然後抬頭看你。很明顯她正在強忍著淚水。~~「幾個月前，我母親在她的家鄉過世了。她出生在這片森林裡，並要求被埋葬在這裡，靠近我的地方。每天早上我都會來這裡看她，並在她的墓前放上花。~~但，」一滴眼淚從她的臉頰滑落，「我是我們家唯一住在附近的人。沒有其他人能經常來探望或留下花朵。~~有時她的墓看起來好空蕩。」她望向地平線，嘆了口氣。「");
	message(var0007);
	message("如果有辦法能給她帶來更多的花就好了。」~~她很快轉過身看著你。~~「非常抱歉我像這樣胡言亂語。請原諒我， ");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer(["母親", "墓園"]);
	if (!var0005) goto labelFunc046C_025A;
	UI_add_answer("有花");
labelFunc046C_025A:
	case "帶來了花", "有花" attend labelFunc046C_02EF:
	message("當她看到那束花時，眼睛亮了起來。~~「它們好漂亮！你太好心了， ");
	message(var0000);
	message("，為我母親帶來了花！我等不及把它們放在她的墓前了。」");
	say();
	var000C = UI_remove_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	var000D = UI_die_roll(0x0001, 0x0006);
	if (!((var000D == 0x0001) || (var000D == 0x0002))) goto labelFunc046C_02A8;
	var000E = 0x0009;
labelFunc046C_02A8:
	if (!((var000D == 0x0003) || ((var000D == 0x0004) || (var000D == 0x0005)))) goto labelFunc046C_02C8;
	var000E = 0x0013;
labelFunc046C_02C8:
	if (!(var000D == 0x0006)) goto labelFunc046C_02D8;
	var000E = 0x005A;
labelFunc046C_02D8:
	Func0911(var000E);
	gflags[0x0139] = true;
	UI_remove_answer(["有花", "帶來了花"]);
labelFunc046C_02EF:
	case "治療" attend labelFunc046C_0358:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc046C_0315;
	gflags[0x013A] = true;
labelFunc046C_0315:
	if (!gflags[0x013A]) goto labelFunc046C_0347;
	if (!gflags[0x0139]) goto labelFunc046C_0338;
	var000F = true;
	message("「為了你贈花的好意，我會以半價為你提供治療。」她對你微笑。");
	say();
	Func08D2(0x000F, 0x0005, 0x00C8);
	goto labelFunc046C_0344;
labelFunc046C_0338:
	Func08D2(0x001E, 0x000A, 0x0190);
labelFunc046C_0344:
	goto labelFunc046C_0358;
labelFunc046C_0347:
	message("「抱歉， ");
	message(var0000);
	message("，但除非這是緊急情況，否則我比較希望等到我的店開門。」");
	say();
	UI_add_answer("緊急情況");
labelFunc046C_0358:
	case "緊急情況" attend labelFunc046C_040A:
	var0010 = UI_get_party_list();
	var0011 = 0x0000;
	var0012 = false;
	enum();
labelFunc046C_0372:
	for (var0015 in var0010 with var0013 to var0014) attend labelFunc046C_03BC;
	var0011 = (var0011 + 0x0001);
	var0016 = UI_get_item_flag(var0015, 0x0008);
	if (!var0016) goto labelFunc046C_039E;
	var0012 = true;
labelFunc046C_039E:
	var0017 = UI_get_npc_prop(var0015, 0x0003);
	if (!(var0017 < 0x000A)) goto labelFunc046C_03B9;
	var0012 = true;
labelFunc046C_03B9:
	goto labelFunc046C_0372;
labelFunc046C_03BC:
	if (!(var0011 > 0x0001)) goto labelFunc046C_03CF;
	var0018 = " 和你的同伴";
	goto labelFunc046C_03D5;
labelFunc046C_03CF:
	var0018 = "";
labelFunc046C_03D5:
	message("她快速檢查了你");
	message(var0018);
	message(".");
	say();
	if (!(var0012 == true)) goto labelFunc046C_03FF;
	gflags[0x013A] = true;
	message("「你說得對， ");
	message(var0000);
	message("。這的確是緊急情況！」");
	say();
	UI_add_answer("治療");
	goto labelFunc046C_0403;
labelFunc046C_03FF:
	message("「我很抱歉，但你的傷並不致命。或許你可以在我的店開門時來拜訪我。」");
	say();
labelFunc046C_0403:
	UI_remove_answer("緊急情況");
labelFunc046C_040A:
	case "動物" attend labelFunc046C_041D:
	message("她害羞地笑了。~~「我非常喜歡動物。當我還很小的時候，我發現了一隻生病的鴿子，卻無法把它治好。從那時起，我開始學習治療的藝術，這樣我就能幫助其他可能需要治療的動物了。~~當然，」她笑了，「既然我有了這些技能，我也用它們來幫助人。」");
	say();
	UI_remove_answer("動物");
labelFunc046C_041D:
	case "告辭" attend labelFunc046C_0428:
	goto labelFunc046C_042B;
labelFunc046C_0428:
	goto labelFunc046C_00B6;
labelFunc046C_042B:
	endconv;
	message("「再見， ");
	message(var0000);
	message(".");
	say();
	if (!gflags[0x0139]) goto labelFunc046C_044A;
	message("「我感謝你送的花！");
	say();
	if (!var000F) goto labelFunc046C_044A;
	gflags[0x0139] = false;
labelFunc046C_044A:
	message("「願健康永遠伴隨著你！」*");
	say();
	gflags[0x013A] = false;
labelFunc046C_0452:
	if (!(event == 0x0000)) goto labelFunc046C_045B;
	abort;
labelFunc046C_045B:
	return;
}


