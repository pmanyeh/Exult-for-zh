#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func04D0 object#(0x4D0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04D0_0185;
	UI_show_npc_face(0xFF30, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x028D])) goto labelFunc04D0_003A;
	message("你面前的男人看到你時，眼睛瞇成了一條縫。");
	say();
	gflags[0x028D] = true;
	goto labelFunc04D0_0050;
labelFunc04D0_003A:
	message("Blorn 沉重地嘆了口氣。「你現在為什麼要來煩我？」");
	say();
	if (!(gflags[0x0283] && (!gflags[0x0280]))) goto labelFunc04D0_0050;
	UI_add_answer("石像鬼");
labelFunc04D0_0050:
	if (!gflags[0x0281]) goto labelFunc04D0_005E;
	gflags[0x0282] = false;
	gflags[0x0299] = false;
labelFunc04D0_005E:
	if (!gflags[0x0282]) goto labelFunc04D0_006E;
	UI_add_answer("歸還護身符");
	goto labelFunc04D0_007B;
labelFunc04D0_006E:
	if (!gflags[0x0299]) goto labelFunc04D0_007B;
	UI_add_answer("Lap-Lem");
labelFunc04D0_007B:
	converse attend labelFunc04D0_0180;
	case "姓名" attend labelFunc04D0_00A3:
	message("「Blorn ，如果你非得知道的話。」");
	say();
	UI_remove_answer("姓名");
	if (!(gflags[0x0283] && (!gflags[0x0280]))) goto labelFunc04D0_00A3;
	UI_add_answer("石像鬼");
labelFunc04D0_00A3:
	case "職業" attend labelFunc04D0_00AF:
	message("「我想我不想告訴你。」");
	say();
labelFunc04D0_00AF:
	case "石像鬼" attend labelFunc04D0_010B:
	message("他喉嚨裡發出一聲低吼。~~「那些該死的石像鬼怎麼了？別告訴我你是個熱愛石像鬼的人。」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D0_00CF;
	message("「你真噁心，豬玀！」他吐痰在你的靴子上。*");
	say();
	abort;
	goto labelFunc04D0_0104;
labelFunc04D0_00CF:
	message("「那很好，我的朋友。」~~突然間，他臉上似乎閃過一絲靈感。~~「也許你能幫我。如你毫無疑問所知，不久前我遭到了一隻殘忍石像鬼的攻擊。他差點要了我的命！~~這將是極大的榮幸，");
	message(var0000);
	message("，如果你同意為我報仇！你願意嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04D0_00F6;
	message("「謝謝你，");
	message(var0000);
	message("，謝謝你。但我必須警告你，他是一隻非常暴力的石像鬼。他的名字是 Lap-Lem ，意思是『人類殺手』。而且，不要提到我的名字，因為他比任何人類都更恨我，如果你提到我的名字，他肯定會無故攻擊你。」");
	say();
	gflags[0x0299] = true;
	goto labelFunc04D0_0100;
labelFunc04D0_00F6:
	message("「好吧，");
	message(var0000);
	message("。你不過是個懦夫。」他搖了搖頭。");
	say();
labelFunc04D0_0100:
	gflags[0x0280] = true;
labelFunc04D0_0104:
	UI_remove_answer("石像鬼");
labelFunc04D0_010B:
	case "歸還護身符" attend labelFunc04D0_0148:
	message("他瞪了你一會兒，然後聳聳肩，嘟囔著：「又不是他誠實賺來的什麼的……」");
	say();
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0003, true);
	if (!var0003) goto labelFunc04D0_013C;
	message("「拿去！我希望這勒死他！」他把護身符塞進你手裡。「我也希望他該死地勒死你！」");
	say();
	gflags[0x0281] = true;
	goto labelFunc04D0_0141;
labelFunc04D0_013C:
	message("「你甚至沒有空間放它！走開，你這個豺狼之子！」*");
	say();
	abort;
labelFunc04D0_0141:
	UI_remove_answer("歸還護身符");
labelFunc04D0_0148:
	case "Lap-Lem" attend labelFunc04D0_0172:
	message("「你殺了那隻豺狼？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04D0_0167;
	message("「太棒了！你真的是值得信賴的朋友。謝謝你的協助！」他對你咧嘴一笑。");
	say();
	goto labelFunc04D0_016B;
labelFunc04D0_0167:
	message("「嗯，我相信你很快就會有時間的，因為他肯定會再朝這邊來攻擊我。」");
	say();
labelFunc04D0_016B:
	UI_remove_answer("Lap-Lem");
labelFunc04D0_0172:
	case "告辭" attend labelFunc04D0_017D:
	goto labelFunc04D0_0180;
labelFunc04D0_017D:
	goto labelFunc04D0_007B;
labelFunc04D0_0180:
	endconv;
	message("他微微點頭並低哼了一聲，然後回到他的事情上。*");
	say();
labelFunc04D0_0185:
	if (!(event == 0x0000)) goto labelFunc04D0_018E;
	abort;
labelFunc04D0_018E:
	return;
}


