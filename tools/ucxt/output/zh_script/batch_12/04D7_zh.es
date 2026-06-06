#game "blackgate"
// externs
extern void Func0841 0x841 ();
extern var Func090A 0x90A ();
extern void Func092F 0x92F (var var0000);

void Func04D7 object#(0x4D7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D7_021C;
	UI_show_npc_face(0xFF29, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0294])) goto labelFunc04D7_0034;
	message("這只有翼石像鬼散發著非常平靜的氣息。當他第一眼看到你時，臉上露出了認出你的微笑。「致上問候，聖者 。」");
	say();
	gflags[0x0294] = true;
	goto labelFunc04D7_0038;
labelFunc04D7_0034:
	message("「問如何幫助你？」");
	say();
labelFunc04D7_0038:
	converse attend labelFunc04D7_0217;
	case "姓名" attend labelFunc04D7_0055:
	message("「被稱作 Ansikart 。」");
	say();
	UI_add_answer("Ansikart");
	UI_remove_answer("姓名");
labelFunc04D7_0055:
	case "Ansikart" attend labelFunc04D7_0068:
	message("「意思是『反乾燥大師 (anti-dry-master) 』。」");
	say();
	UI_remove_answer("Ansikart");
labelFunc04D7_0068:
	case "職業" attend labelFunc04D7_0081:
	message("「為他人提供食物和飲料。」");
	say();
	UI_add_answer(["購買", "其他人"]);
labelFunc04D7_0081:
	case "購買" attend labelFunc04D7_00AB:
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF29));
	if (!(var0000 == 0x0007)) goto labelFunc04D7_00A7;
	Func0841();
	goto labelFunc04D7_00AB;
labelFunc04D7_00A7:
	message("「道歉，但要求你等我營業時再來。」");
	say();
labelFunc04D7_00AB:
	case "其他人" attend labelFunc04D7_00E9:
	message("「認識 Vesper 裡所有的石像鬼。想知道特定的某個嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D7_00D7;
	message("「或許想要資訊，關於物資商人或賢者？");
	say();
	UI_add_answer(["智者", "物資商"]);
	goto labelFunc04D7_00DB;
labelFunc04D7_00D7:
	message("「警告你許多人對他們遭受的不佳對待抱有怨恨。請小心。」");
	say();
labelFunc04D7_00DB:
	UI_add_answer("Vesper");
	UI_remove_answer("其他人");
labelFunc04D7_00E9:
	case "Vesper" attend labelFunc04D7_0109:
	message("「是一個充滿仇恨的城鎮——人類恨我們，而且知道許多人也恨他們，特別是 Anmanivas 和 Foranamo 。這不是件好事。」他顯得有些悲傷。");
	say();
	UI_add_answer(["Anmanivas", "Foranamo"]);
	UI_remove_answer("Vesper");
labelFunc04D7_0109:
	case "智者" attend labelFunc04D7_012D:
	message("「名叫 Wis-Sur 。」");
	say();
	if (!gflags[0x0003]) goto labelFunc04D7_0122;
	message("「是一位偉大的智者，知識淵博。」");
	say();
	goto labelFunc04D7_0126;
labelFunc04D7_0122:
	message("「曾經是一位偉大的智者。現在變得偏執且隱居。為 Wis-Sur 感到惋惜。」");
	say();
labelFunc04D7_0126:
	UI_remove_answer("智者");
labelFunc04D7_012D:
	case "物資商" attend labelFunc04D7_0140:
	message("「是 Aurvidlem 。最近變得悶悶不樂，但不知道為什麼。」");
	say();
	UI_remove_answer("物資商");
labelFunc04D7_0140:
	case "For-Lem" attend labelFunc04D7_0153:
	message("「是鎮上的勞工。」");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D7_0153:
	case "Lap-Lem" attend labelFunc04D7_0173:
	message("「在這裡的礦業公司採礦。是這裡唯一還在採礦的石像鬼。」他點點頭。~~「非常寬容，就像 For-Lem 一樣。」");
	say();
	UI_add_answer(["tolerant", "For-Lem"]);
	UI_remove_answer("Lap-Lem");
labelFunc04D7_0173:
	case "tolerant" attend labelFunc04D7_0186:
	message("「現在只和恨他、貶低他的人類一起工作。然而，儘管如此還是繼續工作。對人類的不寬容相當寬容。」他點點頭，彷彿在強調他的觀點。");
	say();
	UI_remove_answer("tolerant");
labelFunc04D7_0186:
	case "Anmanivas" attend labelFunc04D7_01CD:
	var0002 = UI_is_dead(UI_get_npc_object(0xFF27));
	if (!var0002) goto labelFunc04D7_01AF;
	var0003 = "have been";
	message("「就在這個酒館被你殺了。不記得了嗎？~~這雖然是他的錯，但還是要告訴你，我對他和他的兄弟感到懊悔。」");
	say();
	goto labelFunc04D7_01B5;
labelFunc04D7_01AF:
	var0003 = "be";
labelFunc04D7_01B5:
	message("「曾和 Lap-Lem 一起在礦區工作，但最近才剛離開。」他搖搖頭。~~「恨在那裡工作，以及住在綠洲另一邊的人類。太過暴力。");
	message(var0003);
	message(" 不再被允許到另一側。」");
	say();
	UI_add_answer("Lap-Lem");
	UI_remove_answer("Anmanivas");
labelFunc04D7_01CD:
	case "Foranamo" attend labelFunc04D7_0209:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF26));
	if (!var0004) goto labelFunc04D7_01F2;
	var0005 = "have been";
	goto labelFunc04D7_01F8;
labelFunc04D7_01F2:
	var0005 = "be";
labelFunc04D7_01F8:
	message("「是 Anmanivas 的兄弟，且由同一個父母撫養長大。和 Anmanivas 一樣憎恨人類，並且，」他嘆了口氣，「");
	message(var0005);
	message(" 不再被允許拜訪人類那一側。」");
	say();
	UI_remove_answer("Foranamo");
labelFunc04D7_0209:
	case "告辭" attend labelFunc04D7_0214:
	goto labelFunc04D7_0217;
labelFunc04D7_0214:
	goto labelFunc04D7_0038;
labelFunc04D7_0217:
	endconv;
	message("「希望你能再次為我們的人民帶來和平，聖者 。」*");
	say();
labelFunc04D7_021C:
	if (!(event == 0x0000)) goto labelFunc04D7_022A;
	Func092F(0xFF29);
labelFunc04D7_022A:
	return;
}


