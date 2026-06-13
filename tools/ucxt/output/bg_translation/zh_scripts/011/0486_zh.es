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
	UI_add_answer("出示吊飾盒");
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
	message("「我的名字是 Robin，");
	message(var0000);
	message("。很高興見到你。我最近才來到 New Magincia。」");
	say();
	gflags[0x018F] = true;
	UI_remove_answer("姓名");
	UI_add_answer("New Magincia");
labelFunc0486_00D3:
	case "職業" attend labelFunc0486_00E6:
	message("「我父親，一位受人尊敬的貴族——為了不玷污他的名聲，我就不提他的名字了——他不承認我是他的合法子嗣，並與我斷絕了關係。但他確實教會了我謀生的職業。」");
	say();
	UI_add_answer("職業");
labelFunc0486_00E6:
	case "職業" attend labelFunc0486_00FF:
	message("「哎呀，當然是那個最迷人、最受人尊敬的職業，");
	message(var0000);
	message("。那就是在賭局中贏錢。」");
	say();
	UI_remove_answer("職業");
labelFunc0486_00FF:
	case "New Magincia" attend labelFunc0486_0125:
	message("「我不是本地人。在與賭場老闆發生爭執後，我和我的同僚們不得不迅速離開海盜巢穴 (Buccaneer's Den)。那也是一段艱辛的航程。」");
	say();
	UI_add_answer(["同僚", "海盜巢穴", "爭執", "航程"]);
	UI_remove_answer("New Magincia");
labelFunc0486_0125:
	case "同僚" attend labelFunc0486_0145:
	message("「我的朋友是 Battles 和 Leavell。他們的工作是保護我和我贏來的錢。作為交換，他們可以分享我的利潤。」");
	say();
	UI_add_answer(["Battles", "Leavell"]);
	UI_remove_answer("同僚");
labelFunc0486_0145:
	case "Battles" attend labelFunc0486_0158:
	message("「我從他那準備逼他跳板的船長手中救了他。我用擲骰子跟那位船長賭這小子的命。後來，Battles 領導了一場叛變奪取了那艘船，還有……嗯，那是另一個故事了。」");
	say();
	UI_remove_answer("Battles");
labelFunc0486_0158:
	case "Leavell" attend labelFunc0486_016B:
	message("「我從一群憤怒的貴族女兒手中救了他，她們剛剛發現他同時在追求她們所有人。如果不是我，他肯定已經沒命了！但我說得太遠了。」");
	say();
	UI_remove_answer("Leavell");
labelFunc0486_016B:
	case "海盜巢穴" attend labelFunc0486_0185:
	message("「那是我們大半輩子居住的地方。那裡有很多粗暴的傢伙，而且在那裡帶著大量金錢閒晃可不是什麼好主意。」");
	say();
	UI_add_answer("粗暴的傢伙");
	UI_remove_answer("海盜巢穴");
labelFunc0486_0185:
	case "爭執" attend labelFunc0486_019F:
	message("「我贏了賭場一筆驚人的黃金，那裡的『先生』Gordy 指控我作弊。他派了他的打手 Sintag 來追捕我們。海盜可不喜歡輸！」");
	say();
	UI_remove_answer("爭執");
	UI_add_answer("「先生」");
labelFunc0486_019F:
	case "「先生」" attend labelFunc0486_01B2:
	message("「別問我他為什麼叫那個名字！不過那裡的每個人都這麼叫他！」");
	say();
	UI_remove_answer("「先生」");
labelFunc0486_01B2:
	case "航程" attend labelFunc0486_01CC:
	message("「我們搭了第一艘出港的船，但在我們回到大陸之前，它就沉了。我們三個好不容易才死裡逃生來到 New Magincia。現在我們被困在這裡了。」");
	say();
	UI_remove_answer("航程");
	UI_add_answer("被困在這裡");
labelFunc0486_01CC:
	case "陌生人" attend labelFunc0486_01DF:
	message("「我不知道有什麼陌生人。我自己也才剛到這裡。」");
	say();
	UI_remove_answer("陌生人");
labelFunc0486_01DF:
	case "粗暴的傢伙" attend labelFunc0486_01F9:
	message("「特別要遠離的一個粗暴傢伙是一個名叫 Hook 的男人。他會為了一點小事就殺了你。你可以從他那隻鐵鉤手認出他。」");
	say();
	UI_add_answer("Hook");
	UI_remove_answer("粗暴的傢伙");
labelFunc0486_01F9:
	case "Hook" attend labelFunc0486_020C:
	message("「我不知道更多了。如果你認為我會自願與那種人打交道，那你一定是認錯人了！」");
	say();
	UI_remove_answer("Hook");
labelFunc0486_020C:
	case "吊飾盒" attend labelFunc0486_021F:
	message("「我們正試圖回到海盜巢穴 (Buccaneer's Den)。我本來希望能賣掉我手邊的一個金吊飾盒來買我們回去的船票，但我恐怕它已經遺失了。如果你有遇到它，一定要讓我知道。」");
	say();
	UI_remove_answer("吊飾盒");
labelFunc0486_021F:
	case "友誼會" attend labelFunc0486_0249:
	message("「你是友誼會的成員！多年來，我一直看到友誼會的成員在賭坊 (House of Games)贏得大筆賭金。你能告訴我他們的祕密嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0486_023E;
	message("「你當然可以。但我猜你不會。」Robin 聳了聳肩。");
	say();
	goto labelFunc0486_0242;
labelFunc0486_023E:
	message("「如果我不相信你，請見諒。」");
	say();
labelFunc0486_0242:
	UI_remove_answer("友誼會");
labelFunc0486_0249:
	case "被困在這裡" attend labelFunc0486_027E:
	message("「沒錯。我們買不起造船匠賣的那艘破船。");
	say();
	message("「不過話說回來，你一定是用某種方式來到這裡的！你有什麼船可以讓我們離開這座島嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0486_0273;
	message("「如果你願意載我們回海盜巢穴 (Buccaneer's Den)，我可以付給你豐厚的報酬。」");
	say();
	UI_add_answer("報酬");
	goto labelFunc0486_0277;
labelFunc0486_0273:
	message("「如果你有找到離開這座島的方法，請允許我們與你同行。」");
	say();
labelFunc0486_0277:
	UI_remove_answer("被困在這裡");
labelFunc0486_027E:
	case "報酬" attend labelFunc0486_0298:
	message("「當然，我現在此時此刻無法付錢給你。但當我們到達海盜巢穴 (Buccaneer's Den)時，我向你保證，我能拿到很多錢。」");
	say();
	UI_remove_answer("報酬");
	UI_add_answer("很多錢");
labelFunc0486_0298:
	case "很多錢" attend labelFunc0486_02B2:
	message("「是的，錢！因為我在 New Magincia 這裡找到了一樣東西，在海盜巢穴 (Buccaneer's Den)它的價值將超過黃金。」");
	say();
	UI_remove_answer("很多錢");
	UI_add_answer("某樣東西");
labelFunc0486_02B2:
	case "某樣東西" attend labelFunc0486_02E8:
	message("「在我告訴你那是什麼之前，你願意答應帶我和我的夥伴回海盜巢穴 (Buccaneer's Den)嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0486_02DC;
	var0009 = true;
	message("Robin 直視著你的眼睛。「你真是個好朋友。我想我該告訴你我們打算從 New Magincia 帶回什麼了。」");
	say();
	UI_add_answer("帶回去");
	goto labelFunc0486_02E1;
labelFunc0486_02DC:
	message("「那麼我就無法信任你，不能告訴你我的計畫。走開。」");
	say();
	abort;
labelFunc0486_02E1:
	UI_remove_answer("某樣東西");
labelFunc0486_02E8:
	case "帶回去" attend labelFunc0486_0309:
	if (!(!var0004)) goto labelFunc0486_02FE;
	message("「既然你真的是個朋友，那我知道我可以請你幫個忙。你何不把那個遺失的吊飾盒拿回來給我，我們再來多談談這些事。」他對你露出邪惡的笑容。");
	say();
	goto labelFunc0486_0302;
labelFunc0486_02FE:
	message("「既然你把我的吊飾盒帶回來了，我想我可以信任你。我打算把 Constance 帶回去，把她賣給浴池的經營者。」");
	say();
labelFunc0486_0302:
	UI_remove_answer("帶回去");
labelFunc0486_0309:
	case "出示吊飾盒" attend labelFunc0486_032D:
	message("「既然我知道我可以信任你，我就可以讓你知道我們的計畫。我打算用你的船多帶一個乘客跟我們一起回海盜巢穴 (Buccaneer's Den)。她的名字是 Constance，她應該能從浴池經營者 Glenno 那裡賣個好價錢。足以償還我的債務、付你船資，還有很多剩餘的錢可以讓我在遊戲廳再賭一把！」");
	say();
	Func0911(0x0064);
	gflags[0x0184] = true;
	UI_add_answer("船");
	UI_remove_answer("出示吊飾盒");
labelFunc0486_032D:
	case "船" attend labelFunc0486_036F:
	message("「你必須馬上準備好你的船，準備離開這個地方。我和我的手下會去把 Constance 抓來，然後我們就去跟你會合。但你能告訴我你的船在哪裡嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0486_034C;
	message("你告訴 Robin 你的船的位置。他慢慢地爆發出邪惡的笑聲。「謝謝你，朋友。我們剩下要做的就是消除最後一個未了結的問題。既然我們知道你的船在哪裡，我們只要殺了你並奪走它，就能從我們的投資中獲得更多回報。」*");
	say();
	goto labelFunc0486_0350;
labelFunc0486_034C:
	message("「你對我們的遊戲失去膽量了嗎，嗯？如果是這樣，那麼我和我的手下別無選擇，只能殺了你來保護我們的祕密！」*");
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
	message("「很高興與你交談，");
	message(var0000);
	message("。」*");
	say();
labelFunc0486_0388:
	if (!(event == 0x0000)) goto labelFunc0486_0396;
	Func092E(0xFF7A);
labelFunc0486_0396:
	return;
}


