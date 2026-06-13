#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func046A object#(0x46A) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc046A_018C;
	UI_show_npc_face(0xFF96, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0144])) goto labelFunc046A_0040;
	message("你看到一個不修邊幅卻又有些衣冠楚楚的男人在自言自語。");
	say();
	gflags[0x0144] = true;
	goto labelFunc046A_004A;
labelFunc046A_0040:
	message("「呃，那是啥？喔，是你啊， ");
	message(var0001);
	message("。」");
	say();
labelFunc046A_004A:
	converse attend labelFunc046A_0181;
	case "姓名" attend labelFunc046A_0066:
	message("「我叫 Tiery ， ");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc046A_0066:
	case "職業" attend labelFunc046A_007F:
	message("「呃，那又怎樣？喔，我的工作。哎呀，我好好照顧著這共情修道院墓園裡的朋友們，真的。」");
	say();
	UI_add_answer(["共情修道院", "朋友們"]);
labelFunc046A_007F:
	case "共情修道院" attend labelFunc046A_0099:
	message("「你說我『對 Abby 發情』是什麼意思。我當然沒有。我從來沒靠近過 Abby 。誰告訴你的？」");
	say();
	UI_add_answer("對 Abby 發情");
	UI_remove_answer("共情修道院");
labelFunc046A_0099:
	case "對 Abby 發情" attend labelFunc046A_00B2:
	message("「共情修道院？哎呀，這裡就是共情修道院啊， ");
	message(var0001);
	message("。我無意打聽，但如果你不知道自己在哪裡，你幹嘛來這？」他搖搖頭。「就像我前幾天跟 Darek 說的，我說『如果你永遠不想迷路，就永遠哪裡都別去。』」");
	say();
	UI_remove_answer("對 Abby 發情");
labelFunc046A_00B2:
	case "朋友們" attend labelFunc046A_00D2:
	message("「屍體怎麼了？我只不過是把他們埋了而已！像那樣散播謠言會惹上大麻煩的。」");
	say();
	UI_add_answer(["埋葬", "屍體"]);
	UI_remove_answer("朋友們");
labelFunc046A_00D2:
	case "埋葬" attend labelFunc046A_00EC:
	message("「Barry ？喔，他。我不知道你在說什麼。我從來沒見過 Barry 的老婆！那只是他們散播的關於我的謊言。」");
	say();
	UI_remove_answer("埋葬");
	UI_add_answer("Barry");
labelFunc046A_00EC:
	case "Barry" attend labelFunc046A_00FF:
	message("「我已經告訴過你那是我的工作了。」");
	say();
	UI_remove_answer("Barry");
labelFunc046A_00FF:
	case "屍體" attend labelFunc046A_011F:
	message("「沒錯。我的朋友們！我埋了他們。這是我的工作。」他瞇著眼看你。「除非， ");
	message(var0001);
	message("，你是在問這裡的人？」");
	say();
	UI_add_answer("人");
	UI_remove_answer("屍體");
labelFunc046A_011F:
	case "人" attend labelFunc046A_013F:
	message("「沒有！我當然沒用偷窺孔。你怎麼會問這種問題， ");
	message(var0001);
	message("？」");
	say();
	UI_add_answer("偷窺孔");
	UI_remove_answer("人");
labelFunc046A_013F:
	case "偷窺孔" attend labelFunc046A_0173:
	message("「嗯，我只認識這裡的幾個人，但我會盡量幫忙。你想知道誰的事？我最好的兩個朋友是 Garth 和 Darek ，但我一有機會也常跟 Nina 和 Bart 聊天。~~");
	say();
	message("「最近，對面的那個叫 Perrin 的傢伙花了一些時間跟我在一起。他是個很好的人。或許有點聰明， ");
	message(var0001);
	message("，但我還是很喜歡他。你還想知道其他誰的事嗎？」");
	say();
	if (!Func090A()) goto labelFunc046A_0168;
	message("「嗯，問那個叫 Perrin 的傢伙會比問我好， ");
	message(var0001);
	message("。他知道很多事，他真的懂。」");
	say();
	goto labelFunc046A_016C;
labelFunc046A_0168:
	message("「好吧，很高興能介紹幾個朋友給你認識。」");
	say();
labelFunc046A_016C:
	UI_remove_answer("偷窺孔");
labelFunc046A_0173:
	case "告辭" attend labelFunc046A_017E:
	goto labelFunc046A_0181;
labelFunc046A_017E:
	goto labelFunc046A_004A;
labelFunc046A_0181:
	endconv;
	message("「日安， ");
	message(var0001);
	message("。祝你旅途愉快。我會替你向 Malc 問好的。」*");
	say();
labelFunc046A_018C:
	if (!(event == 0x0000)) goto labelFunc046A_0195;
	abort;
labelFunc046A_0195:
	return;
}


