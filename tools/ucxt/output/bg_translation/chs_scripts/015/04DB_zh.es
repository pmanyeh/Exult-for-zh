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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0298])) goto labelFunc04DB_0034;
	message("站在你面前的石像鬼脸上带着不悦的表情。");
	say();
	gflags[0x0298] = true;
	goto labelFunc04DB_0038;
labelFunc04DB_0034:
	message("「向你致候，人类，」 Aurvidlem 说。");
	say();
labelFunc04DB_0038:
	converse attend labelFunc04DB_0149;
	case "姓名" attend labelFunc04DB_004E:
	message("「被称作 Aurvidlem 。认出你是圣者 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04DB_004E:
	case "职业" attend labelFunc04DB_006A:
	message("「为 Vesper 的其他人提供物资。」");
	say();
	UI_add_answer(["买物资", "其他人", "Vesper"]);
labelFunc04DB_006A:
	case "Vesper" attend labelFunc04DB_007D:
	message("「是一个充满偏见和仇恨的城镇。知道人类期待我们发起暴力对抗。~~相信人类是罪有应得，」他耸了耸肩，「但希望我的弟兄们能展现出更多的克制。」");
	say();
	UI_remove_answer("Vesper");
labelFunc04DB_007D:
	case "买物资" attend labelFunc04DB_00E7:
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF25));
	if (!(!(var0000 == 0x0007))) goto labelFunc04DB_00A5;
	message("「这个时间不营业。明天再来买物资。」");
	say();
	goto labelFunc04DB_00E0;
labelFunc04DB_00A5:
	var0001 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	Func084C();
	var0002 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!((var0001 - var0002) > 0x001D)) goto labelFunc04DB_00E0;
	gflags[0x027F] = true;
labelFunc04DB_00E0:
	UI_remove_answer("买物资");
labelFunc04DB_00E7:
	case "其他人" attend labelFunc04DB_010E:
	if (!gflags[0x027F]) goto labelFunc04DB_0103;
	message("「镇上只有少数石像鬼居住。主要认识 Wis-Sur ，还有，」他微微哼了一声，「Ansikart 。也知道一些无翼的石像鬼。」");
	say();
	UI_add_answer("Ansikart");
	goto labelFunc04DB_0107;
labelFunc04DB_0103:
	message("「镇上只有少数石像鬼居住。主要认识 Wis-Sur 和 Ansikart ，也知道一些无翼的石像鬼。」");
	say();
labelFunc04DB_0107:
	UI_remove_answer("其他人");
labelFunc04DB_010E:
	case "Ansikart" attend labelFunc04DB_0128:
	message("他的眼睛迅速地左右游移，最后停留在你身上。~~「知道自从 Wis-Sur 改变后， Ansikart 获得了太多的尊重。确信我学得更多，在这里会是一位更聪明、更好的领袖。对 Ansikart 成为人选感到不满。」");
	say();
	UI_add_answer("改变");
	UI_remove_answer("Ansikart");
labelFunc04DB_0128:
	case "改变" attend labelFunc04DB_013B:
	message("「不确定改变是何时发生的，但已经极大地影响了 Wis-Sur 。现在看到他避开他人并将自己关起来。为 Wis-Sur 感到担忧。」");
	say();
	UI_remove_answer("改变");
labelFunc04DB_013B:
	case "告辞" attend labelFunc04DB_0146:
	goto labelFunc04DB_0149;
labelFunc04DB_0146:
	goto labelFunc04DB_0038;
labelFunc04DB_0149:
	endconv;
	message("「向你道别。」*");
	say();
labelFunc04DB_014E:
	if (!(event == 0x0000)) goto labelFunc04DB_015C;
	Func092F(0xFF25);
labelFunc04DB_015C:
	return;
}


