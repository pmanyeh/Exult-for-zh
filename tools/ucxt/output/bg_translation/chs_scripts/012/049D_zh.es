#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049D object#(0x49D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc049D_01F0;
	UI_show_npc_face(0xFF63, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!gflags[0x01D5]) goto labelFunc049D_003D;
	message("「走开！我不想再听你的谎言了！」*");
	say();
	abort;
labelFunc049D_003D:
	if (!(var0001 == 0x0007)) goto labelFunc049D_006B;
	var0002 = Func08FC(0xFF63, 0xFF06);
	if (!var0002) goto labelFunc049D_0060;
	message("「我正试着专心听！」他瞪着你说。");
	say();
	goto labelFunc049D_006A;
labelFunc049D_0060:
	message("「抱歉，");
	message(var0000);
	message("，我现在不能说话。我必须赶去参加友谊会的会议！」");
	say();
labelFunc049D_006A:
	abort;
labelFunc049D_006B:
	if (!(!gflags[0x01FE])) goto labelFunc049D_007D;
	message("你看到一位看起来很友善的农夫。");
	say();
	gflags[0x01FE] = true;
	goto labelFunc049D_0087;
labelFunc049D_007D:
	message("「你好，");
	message(var0000);
	message("。」");
	say();
labelFunc049D_0087:
	if (!(gflags[0x01D6] && gflags[0x01FE])) goto labelFunc049D_0098;
	UI_add_answer("回心转意");
labelFunc049D_0098:
	converse attend labelFunc049D_01E5;
	case "姓名" attend labelFunc049D_00C1:
	message("「我叫 Tolemac，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x01D6]) goto labelFunc049D_00C1;
	UI_add_answer("回心转意");
labelFunc049D_00C1:
	case "职业" attend labelFunc049D_00DA:
	message("「我在 Moonglow 这里帮我哥哥照顾我们的农场。」");
	say();
	UI_add_answer(["哥哥", "Moonglow"]);
labelFunc049D_00DA:
	case "哥哥" attend labelFunc049D_00ED:
	message("「我哥哥是 Cubolt。」他皱了一会儿眉。「他有时会有点专横，试着要『照顾』我。不过，」他耸耸肩，「他或许是出于好意。我知道我不时会给他惹点麻烦，」他咧嘴笑着说，「但他活该。」");
	say();
	UI_remove_answer("哥哥");
labelFunc049D_00ED:
	case "Moonglow" attend labelFunc049D_010D:
	message("「是的，");
	message(var0000);
	message("。这就是你所在的城镇的名字。你对镇民有什么问题吗？」");
	say();
	UI_add_answer("镇民");
	UI_remove_answer("Moonglow");
labelFunc049D_010D:
	case "镇民" attend labelFunc049D_0139:
	message("「我在这里只认识几个人，");
	message(var0000);
	message("。我哥哥 Cubolt 和我一起经营农场。Morz 也会帮我们——我们认识他很多年了。现在我加入了友谊会，我又认识了几个人。Rankin 是 Moonglow 这里的分会负责人，Balayna 是他的助手。如果你想知道其他人的事，你或许可以问问酒保。他的名字是 Phearcy。」");
	say();
	UI_add_answer(["Morz", "Balayna", "Rankin", "友谊会"]);
	UI_remove_answer("镇民");
labelFunc049D_0139:
	case "Rankin" attend labelFunc049D_014C:
	message("「Rankin 非常聪明。就是他说服我加入友谊会的。我非常尊敬他。」");
	say();
	UI_remove_answer("Rankin");
labelFunc049D_014C:
	case "Balayna" attend labelFunc049D_015F:
	message("「她是分会的书记。大多数时候，她都很友善。不过，有时她似乎有点冷淡。」");
	say();
	UI_remove_answer("Balayna");
labelFunc049D_015F:
	case "Morz" attend labelFunc049D_0179:
	message("「Morz 和我一起长大。不过，他对自己的口吃非常敏感，所以我不会提起这件事。」");
	say();
	UI_add_answer("口吃");
	UI_remove_answer("Morz");
labelFunc049D_0179:
	case "口吃" attend labelFunc049D_018C:
	message("「很难让他谈论这件事。我认为这是他在小时候发生的一场意外造成的。我几乎不记得那起事件了。我哥哥或许会记得更多。」");
	say();
	UI_remove_answer("口吃");
labelFunc049D_018C:
	case "友谊会" attend labelFunc049D_01AB:
	message("「问 Rankin 或 Balayna 是最合适的，");
	message(var0000);
	message("，但我可以告诉你我们的主要信条。~~「我们坚信新现实主义，这是一种乐观的人生观，可以通过内在力量的三位一体 (Triad of Inner Strength) 来达到。~~「我希望很快我就能听到伴随着达到个人更高潜力而来的声音。~~「还有，");
	message(var0000);
	message("，友谊会赞助了许多盛宴和节庆。我强烈建议你向 Rankin 询问关于加入的事。」");
	say();
	UI_remove_answer("友谊会");
labelFunc049D_01AB:
	case "回心转意" attend labelFunc049D_01D7:
	message("「回心转意？我为什么要那么做？是我哥哥要求的吗？他总是不愿让我自己做决定。不，");
	message(var0000);
	message("。我不会放弃我的信仰。友谊会为我的生活付出了太多。」");
	say();
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc049D_01CE;
	message("「亏你还是个同伴。你的话语里毫无团结可言！」");
	say();
labelFunc049D_01CE:
	message("*");
	say();
	gflags[0x01D5] = true;
	abort;
labelFunc049D_01D7:
	case "告辞" attend labelFunc049D_01E2:
	goto labelFunc049D_01E5;
labelFunc049D_01E2:
	goto labelFunc049D_0098;
labelFunc049D_01E5:
	endconv;
	message("「下次见，");
	message(var0000);
	message("。」*");
	say();
labelFunc049D_01F0:
	if (!(event == 0x0000)) goto labelFunc049D_01FE;
	Func092E(0xFF63);
labelFunc049D_01FE:
	return;
}


