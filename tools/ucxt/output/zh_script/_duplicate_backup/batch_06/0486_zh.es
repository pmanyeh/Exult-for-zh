#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0486 object#(0x486) ()
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

	if (!(event == 0x0001)) goto labelFunc0486_0388;
	UI_show_npc_face(0xFF7A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFF7A);
	var0002 = UI_get_npc_object(0xFF78);
	var0003 = UI_get_npc_object(0xFF79);
	var0004 = Func0931(0xFE9C, 0x0001, 0x03BB, 0xFE99, 0x0002);
	var0005 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x017D]) goto labelFunc0486_006F;
	UI_add_answer("吊飾盒");
labelFunc0486_006F:
	if (!var0004) goto labelFunc0486_007C;
	UI_add_answer("展示吊飾盒");
labelFunc0486_007C:
	if (!var0005) goto labelFunc0486_0089;
	UI_add_answer("友誼會");
labelFunc0486_0089:
	if (!(!gflags[0x018F])) goto labelFunc0486_00A8;
	message("你看到一個流氓般的男人，穿著似乎是某個貴族破舊的二手衣服。");
	say();
	gflags[0x018F] = true;
	if (!gflags[0x0180]) goto labelFunc0486_00A5;
	UI_add_answer("陌生人");
labelFunc0486_00A5:
	goto labelFunc0486_00AC;
labelFunc0486_00A8:
	message("「你好，有什麼我可以為你效勞的嗎？」Robin 問道。");
	say();
labelFunc0486_00AC:
	converse attend labelFunc0486_037D;
	case "姓名" attend labelFunc0486_00D3:
	message("「");
	message(var0000);
	message("，我的名字是 Robin。很高興見到你。我最近才剛來到 New Magincia。」");
	say();
	gflags[0x018F] = true;
	UI_remove_answer("姓名");
	UI_add_answer("New Magincia");
labelFunc0486_00D3:
	case "職業" attend labelFunc0486_00E6:
	message("「我的父親，一位備受尊敬的貴族，為了不玷污他的名聲，我不提他的名字，他宣稱我是私生子並與我斷絕關係。但他確實教會了我這門職業。」");
	say();
	UI_add_answer("職業 (occupation)");
labelFunc0486_00E6:
	case "職業 (occupation)" attend labelFunc0486_00FF:
	message("「唉呀，那當然是最迷人、最受尊敬的職業，");
	message(var0000);
	message("。在～機率遊戲中獲勝。」");
	say();
	UI_remove_answer("職業 (occupation)");
labelFunc0486_00FF:
	case "New Magincia" attend labelFunc0486_0125:
	message("「我不是本地人。在和賭場老闆發生爭執後，我和同事們不得不迅速離開 Buccaneer's Den 。而且那是一段艱辛的航程。」");
	say();
	UI_add_answer(["同事", "Buccaneer's Den", "爭執", "航程"]);
	UI_remove_answer("New Magincia");
labelFunc0486_0125:
	case "同事" attend labelFunc0486_0145:
	message("「我的朋友是 Battles 和 Leavell 。他們的工作是保護我和我贏來的錢。作為交換，他們分享我的利潤。」");
	say();
	UI_add_answer(["Battles", "Leavell"]);
	UI_remove_answer("同事");
labelFunc0486_0145:
	case "Battles" attend labelFunc0486_0158:
	message("「我從正要讓他走跳板的船長手中救了他。我用擲骰子和那位船長賭這小子的命。後來， Battles 帶領叛變奪取了那艘船，然後……嗯，那是另一個故事了。」");
	say();
	UI_remove_answer("Battles");
labelFunc0486_0158:
	case "Leavell" attend labelFunc0486_016B:
	message("「我把他從一群憤怒的貴族千金手中救了出來，她們剛發現他同時在追求她們所有人。如果不是我，他肯定早就死了！不過我扯遠了。」");
	say();
	UI_remove_answer("Leavell");
labelFunc0486_016B:
	case "Buccaneer's Den" attend labelFunc0486_0185:
	message("「那是我們一年中大部分時間居住的地方。那裡有很多粗暴的傢伙，而且不是個適合帶著大量金錢出現的地方。」");
	say();
	UI_add_answer("粗暴的傢伙");
	UI_remove_answer("Buccaneer's Den");
labelFunc0486_0185:
	case "爭執" attend labelFunc0486_019F:
	message("「我贏了賭場一筆驚人數量的金幣，而那裡的『老大 (The Mister)』Gordy 指控我出老千。他派了他的打手 Sintag 來追捕我們。海盜可不喜歡輸！」");
	say();
	UI_remove_answer("爭執");
	UI_add_answer("老大 (The Mister)");
labelFunc0486_019F:
	case "老大 (The Mister)" attend labelFunc0486_01B2:
	message("「別問我為什麼他叫這個名字！不過那裡的每個人都這樣叫他！」");
	say();
	UI_remove_answer("老大 (The Mister)");
labelFunc0486_01B2:
	case "航程" attend labelFunc0486_01CC:
	message("「我們搭了第一艘船離開，但在回到大陸之前船就沉了。我們三個好不容易才保住性命來到 New Magincia 。現在我們被困在這裡了。」");
	say();
	UI_remove_answer("航程");
	UI_add_answer("困住");
labelFunc0486_01CC:
	case "陌生人" attend labelFunc0486_01DF:
	message("「我不知道有誰。我自己也才剛到這裡。」");
	say();
	UI_remove_answer("陌生人");
labelFunc0486_01DF:
	case "粗暴的傢伙" attend labelFunc0486_01F9:
	message("「有一個特別需要遠離的粗暴傢伙，是一個叫 Hook 的男人。他會為了一點小事殺了你。你可以從他用鐵鉤代替的手認出他。」");
	say();
	UI_add_answer("Hook");
	UI_remove_answer("粗暴的傢伙");
labelFunc0486_01F9:
	case "Hook" attend labelFunc0486_020C:
	message("「我不知道更多了。如果你認為我會願意和他那樣的人打交道，那你一定認錯人了！」");
	say();
	UI_remove_answer("Hook");
labelFunc0486_020C:
	case "吊飾盒" attend labelFunc0486_021F:
	message("「我們正試著回 Buccaneer's Den 。我本來希望能賣掉一個落入我手中的金吊飾盒來買回去的船票，但我恐怕它已經丟了。如果你偶然發現它，一定要讓我知道。」");
	say();
	UI_remove_answer("吊飾盒");
labelFunc0486_021F:
	case "友誼會" attend labelFunc0486_0249:
	message("「你是友誼會 的成員！多年來，我一直看到友誼會的成員在遊戲之屋 (House of Games) 贏得大筆賭金。你能告訴我他們的祕密嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0486_023E;
	message("「你當然可以。但我猜你不會這麼做。」Robin 聳了聳肩。");
	say();
	goto labelFunc0486_0242;
labelFunc0486_023E:
	message("「如果我不相信你，還請見諒。」");
	say();
labelFunc0486_0242:
	UI_remove_answer("友誼會");
labelFunc0486_0249:
	case "困住" attend labelFunc0486_027E:
	message("「沒錯。我們買不起那個造船匠賣的破船。");
	say();
	message("「但是，你一定是用某種方法來到這裡的！你有某種船可以讓我們離開這個島嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0486_0273;
	message("「如果你願意帶我們回 Buccaneer's Den ，我可以付你豐厚的報酬。」");
	say();
	UI_add_answer("報酬");
	goto labelFunc0486_0277;
labelFunc0486_0273:
	message("「如果你找到離開這座島的方法，請允許我們和你一起離開。」");
	say();
labelFunc0486_0277:
	UI_remove_answer("困住");
labelFunc0486_027E:
	case "報酬" attend labelFunc0486_0298:
	message("「當然，我現在無法立刻付錢給你。但當我們到達 Buccaneer's Den 時，我向你保證，我能弄到一大筆錢。」");
	say();
	UI_remove_answer("報酬");
	UI_add_answer("錢");
labelFunc0486_0298:
	case "錢" attend labelFunc0486_02B2:
	message("「是的，錢！因為我在 New Magincia 找到了一樣東西，在 Buccaneer's Den 會比黃金更有價值。」");
	say();
	UI_remove_answer("錢");
	UI_add_answer("一樣東西");
labelFunc0486_02B2:
	case "一樣東西" attend labelFunc0486_02E8:
	message("「在我告訴你那是什麼之前，你願意答應帶我和我的夥伴回 Buccaneer's Den 嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0486_02DC;
	var0009 = true;
	message("Robin 直視著你的眼睛。「你真是個好朋友。我想我該告訴你我們打算從 New Magincia 帶些什麼回去。」");
	say();
	UI_add_answer("帶回去");
	goto labelFunc0486_02E1;
labelFunc0486_02DC:
	message("「那我不能信任你到告訴你我的計畫。走開。」");
	say();
	abort;
labelFunc0486_02E1:
	UI_remove_answer("一樣東西");
labelFunc0486_02E8:
	case "帶回去" attend labelFunc0486_0309:
	if (!(!var0004)) goto labelFunc0486_02FE;
	message("「既然你真是個朋友，那我知道我可以請你幫個忙。你何不把那個遺失的吊飾盒帶回來給我，我們再來多談談這些事。」他對你露出邪惡的笑容。");
	say();
	goto labelFunc0486_0302;
labelFunc0486_02FE:
	message("「既然你把我的吊飾盒帶回來了，我想我可以信任你。我打算把 Constance 一起帶回去，把她賣給浴池的經營者。」");
	say();
labelFunc0486_0302:
	UI_remove_answer("帶回去");
labelFunc0486_0309:
	case "展示吊飾盒" attend labelFunc0486_032D:
	message("「現在我知道我可以信任你了，我可以讓你參與我們的計畫。我打算讓另一位乘客搭你的船跟我們一起回 Buccaneer's Den 。她的名字是 Constance ，她應該能在浴池經營者 Glenno 那裡賣個好價錢。足以償還我的債務、付你船資，而且還能剩下很多，夠我再去遊戲之屋玩一把！」");
	say();
	Func0911(0x0064);
	gflags[0x0184] = true;
	UI_add_answer("船");
	UI_remove_answer("展示吊飾盒");
labelFunc0486_032D:
	case "船" attend labelFunc0486_036F:
	message("「你必須立刻把你的船準備好，離開這個地方。我和我的小伙子們去帶 Constance ，然後我們就會去找你。但你能告訴我你的船在哪裡嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0486_034C;
	message("你把船的位置告訴了 Robin 。他慢慢爆發出邪惡的笑聲。「謝謝你，朋友。我們只剩下一個尾巴要處理了。既然我們知道你的船在哪裡，我們只要殺了你並把船搶過來，就能在投資上獲得更多回報。」*");
	say();
	goto labelFunc0486_0350;
labelFunc0486_034C:
	message("「你不敢玩我們的遊戲了，是嗎？既然這樣，我和我的小伙子們別無選擇，只能殺了你來保護我們的祕密！」*");
	say();
labelFunc0486_0350:
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc0486_036F:
	case "告辭" attend labelFunc0486_037A:
	goto labelFunc0486_037D;
labelFunc0486_037A:
	goto labelFunc0486_00AC;
labelFunc0486_037D:
	endconv;
	message("「很高興能和你說話，");
	message(var0000);
	message("。」*");
	say();
labelFunc0486_0388:
	if (!(event == 0x0000)) goto labelFunc0486_0396;
	Func092E(0xFF7A);
labelFunc0486_0396:
	return;
}


