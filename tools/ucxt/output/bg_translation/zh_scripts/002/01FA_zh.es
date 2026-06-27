#game "blackgate"
// externs
extern void Func0639 object#(0x639) ();

void Func01FA shape#(0x1FA) ()
{
	var var0000;

	if (!(event == 0x0002)) goto labelFunc01FA_0041;
	UI_show_npc_face(0xFFE6, 0x0000);
	message("巴特林以冰冷的無奈看著 Hook 死亡。當他轉向你時，時間似乎變慢了。\"這場戰鬥還沒結束，聖者。你以為自己是不死的嗎？守護者遠比你想像的更強大。回到你那珍貴的地球去休息吧。~然後他會在你的夢中現身，讓你夢見無數次死於巨蛇腹中的景象。\"");
	say();
	message("\"至於我，我要走了！你永遠找不到我的！再見了，聖者！\"");
	say();
	UI_remove_npc_face(0xFFE6);
	var0000 = UI_find_nearby(0xFE9C, 0x0193, 0x0028, 0x0000);
	event = 0x0001;
	var0000[0x0001]->Func0639();
labelFunc01FA_0041:
	return;
}


