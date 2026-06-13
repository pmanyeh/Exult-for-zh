#game "blackgate"
// externs
extern void Func084C 0x84C ();
extern void Func092F 0x92F (var var0000);

void Func04DB object#(0x4DB) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04DB_014E;
	UI_show_npc_face(0xFF25, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0298])) goto labelFunc04DB_0034;
	message("站在你面前的石像鬼臉上帶著不悅的表情。");
	say();
	gflags[0x0298] = true;
	goto labelFunc04DB_0038;
labelFunc04DB_0034:
	message("「向你致候，人類，」 Aurvidlem 說。");
	say();
labelFunc04DB_0038:
	converse attend labelFunc04DB_0149;
	case "姓名" attend labelFunc04DB_004E:
	message("「被稱作 Aurvidlem 。認出你是聖者 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04DB_004E:
	case "職業" attend labelFunc04DB_006A:
	message("「為 Vesper 的其他人提供物資。」");
	say();
	UI_add_answer(["買物資", "其他人", "Vesper"]);
labelFunc04DB_006A:
	case "Vesper" attend labelFunc04DB_007D:
	message("「是一個充滿偏見和仇恨的城鎮。知道人類期待我們發起暴力對抗。~~相信人類是罪有應得，」他聳了聳肩，「但希望我的弟兄們能展現出更多的克制。」");
	say();
	UI_remove_answer("Vesper");
labelFunc04DB_007D:
	case "買物資" attend labelFunc04DB_00E7:
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF25));
	if (!(!(var0000 == 0x0007))) goto labelFunc04DB_00A5;
	message("「這個時間不營業。明天再來買物資。」");
	say();
	goto labelFunc04DB_00E0;
labelFunc04DB_00A5:
	var0001 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	Func084C();
	var0002 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!((var0001 - var0002) > 0x001D)) goto labelFunc04DB_00E0;
	gflags[0x027F] = true;
labelFunc04DB_00E0:
	UI_remove_answer("買物資");
labelFunc04DB_00E7:
	case "其他人" attend labelFunc04DB_010E:
	if (!gflags[0x027F]) goto labelFunc04DB_0103;
	message("「鎮上只有少數石像鬼居住。主要認識 Wis-Sur ，還有，」他微微哼了一聲，「Ansikart 。也知道一些無翼的石像鬼。」");
	say();
	UI_add_answer("Ansikart");
	goto labelFunc04DB_0107;
labelFunc04DB_0103:
	message("「鎮上只有少數石像鬼居住。主要認識 Wis-Sur 和 Ansikart ，也知道一些無翼的石像鬼。」");
	say();
labelFunc04DB_0107:
	UI_remove_answer("其他人");
labelFunc04DB_010E:
	case "Ansikart" attend labelFunc04DB_0128:
	message("他的眼睛迅速地左右游移，最後停留在你身上。~~「知道自從 Wis-Sur 改變後， Ansikart 獲得了太多的尊重。確信我學得更多，在這裡會是一位更聰明、更好的領袖。對 Ansikart 成為人選感到不滿。」");
	say();
	UI_add_answer("改變");
	UI_remove_answer("Ansikart");
labelFunc04DB_0128:
	case "改變" attend labelFunc04DB_013B:
	message("「不確定改變是何時發生的，但已經極大地影響了 Wis-Sur 。現在看到他避開他人並將自己關起來。為 Wis-Sur 感到擔憂。」");
	say();
	UI_remove_answer("改變");
labelFunc04DB_013B:
	case "告辭" attend labelFunc04DB_0146:
	goto labelFunc04DB_0149;
labelFunc04DB_0146:
	goto labelFunc04DB_0038;
labelFunc04DB_0149:
	endconv;
	message("「向你道別。」*");
	say();
labelFunc04DB_014E:
	if (!(event == 0x0000)) goto labelFunc04DB_015C;
	Func092F(0xFF25);
labelFunc04DB_015C:
	return;
}


