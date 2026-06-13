#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func042D object#(0x42D) ()
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

	if (!(event == 0x0001)) goto labelFunc042D_02E6;
	UI_show_npc_face(0xFFD3, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = Func0909();
	var0002 = UI_wearing_fellowship();
	var0003 = Func08FC(0xFFD3, 0xFFE6);
	if (!(var0000 == 0x0007)) goto labelFunc042D_005F;
	if (!var0003) goto labelFunc042D_004A;
	message("Figg 太過專心聆聽友誼會聚會，沒有理會你與他交談的嘗試。*");
	say();
	abort;
	goto labelFunc042D_005F;
labelFunc042D_004A:
	if (!gflags[0x00DA]) goto labelFunc042D_005A;
	message("「你有看到 Batlin 嗎？他在哪裡？他需要來主持我們的聚會！」");
	say();
	goto labelFunc042D_005F;
	goto labelFunc042D_005F;
labelFunc042D_005A:
	message("「天哪！九點了！抱歉，我必須趕去今晚的友誼會聚會。」*");
	say();
	abort;
labelFunc042D_005F:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00C6]) goto labelFunc042D_007C;
	UI_add_answer("Weston");
labelFunc042D_007C:
	if (!gflags[0x0094]) goto labelFunc042D_0089;
	UI_add_answer("友誼會");
labelFunc042D_0089:
	if (!(!gflags[0x00AE])) goto labelFunc042D_009B;
	message("你看見一個男人，他佈滿皺紋的臉構成了一副脾氣暴躁的滑稽漫畫。");
	say();
	gflags[0x00AE] = true;
	goto labelFunc042D_00A5;
labelFunc042D_009B:
	message("「你想跟我說話，");
	message(var0001);
	message("？」Figg 問道。");
	say();
labelFunc042D_00A5:
	converse attend labelFunc042D_02E1;
	case "姓名" attend labelFunc042D_00BB:
	message("「我是 Figg 。」");
	say();
	UI_remove_answer("姓名");
labelFunc042D_00BB:
	case "職業" attend labelFunc042D_00D4:
	message("「我是 Britain 這裡皇家果園 (Royal Orchards) 的管理員。」");
	say();
	UI_add_answer(["管理員", "皇家果園"]);
labelFunc042D_00D4:
	case "管理員" attend labelFunc042D_00F7:
	message("「我的職責包括照顧果樹，在收穫時節監督採摘工，以及保護皇家果園免受小偷的光顧。」");
	say();
	UI_add_answer(["果樹", "採摘工", "小偷"]);
	UI_remove_answer("管理員");
labelFunc042D_00F7:
	case "果樹" attend labelFunc042D_010A:
	message("「蘋果樹需要持續的照顧。我必須確保所有的樹都有足夠的水分，但又不能太多。我必須保持所有的樹都修剪得當，並保持警惕，以免作物被害蟲或蠕蟲感染。我還必須撿起所有掉落的蘋果，這本身就是一項工作。」");
	say();
	UI_remove_answer("果樹");
labelFunc042D_010A:
	case "採摘工" attend labelFunc042D_011D:
	message("「他們大多是來自 Paws 的移工。因為他們曾經是農夫，所以他們確信自己比我更了解果園的保養！這當然是荒謬的。而且採摘工不太服從命令。」");
	say();
	UI_remove_answer("採摘工");
labelFunc042D_011D:
	case "小偷" attend labelFunc042D_0137:
	message("「如果我給他們機會，他們會把我們搶到只剩最後一根樹枝！我冒著生命危險保護這片果園，Lord British 應該親自頒發獎章給我。哎呀，我最近剛抓到另一個小偷。他的名字是 Weston 。」");
	say();
	UI_remove_answer("小偷");
	UI_add_answer("Weston");
labelFunc042D_0137:
	case "皇家果園" attend labelFunc042D_014A:
	message("「這裡種植著全 Britannia 最好的蘋果。我想讓你嚐嚐看，但這會違法，因為你顯然不是貴族血統。」");
	say();
	UI_remove_answer("皇家果園");
labelFunc042D_014A:
	case "Weston" attend labelFunc042D_0177:
	message("「多虧了我，他現在住在監獄裡！我一看到他就知道他想幹嘛！他有一副老練蘋果賊的模樣，所以我讓城鎮守衛把他抓了。」");
	say();
	UI_add_answer(["監獄", "蘋果賊"]);
	if (!gflags[0x0094]) goto labelFunc042D_0170;
	UI_add_answer("友誼會");
labelFunc042D_0170:
	UI_remove_answer("Weston");
labelFunc042D_0177:
	case "監獄" attend labelFunc042D_018A:
	message("「是的， Weston 現在就住在我們當地的監獄裡。如果你不相信我，你可以自己去那裡看看！」");
	say();
	UI_remove_answer("監獄");
labelFunc042D_018A:
	case "蘋果賊" attend labelFunc042D_01AA:
	message("「喔，他帶著一些賺人熱淚的故事來這裡。但當一個人像我一樣是人類行為的敏銳觀察者時，就能看出人們的真實意圖，而這往往與他們告訴你的相反！」");
	say();
	UI_remove_answer("蘋果賊");
	UI_add_answer(["賺人熱淚的故事", "觀察者"]);
labelFunc042D_01AA:
	case "賺人熱淚的故事" attend labelFunc042D_01BD:
	message("「我記不太清楚了。好像是關於他貧困的妻子和家人在 Paws 快餓死了，或者其他一堆廢話。」");
	say();
	UI_remove_answer("賺人熱淚的故事");
labelFunc042D_01BD:
	case "觀察者" attend labelFunc042D_01EA:
	message("「是的，我確實認為自己是一個非常合格的品格判斷者。你知道我是怎麼變得如此的嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc042D_01DC;
	message("「喔，那你不是很聰明嗎！」");
	say();
	goto labelFunc042D_01E3;
labelFunc042D_01DC:
	message("「那我告訴你吧！我是友誼會的成員！」");
	say();
	Func0919();
labelFunc042D_01E3:
	UI_remove_answer("觀察者");
labelFunc042D_01EA:
	case "理念" attend labelFunc042D_01FC:
	Func091A();
	UI_remove_answer("理念");
labelFunc042D_01FC:
	case "友誼會" attend labelFunc042D_024C:
	message("「我是友誼會的成員，沒錯。但我若把皇家果園的蘋果給友誼會將是一種犯罪，也是對我神聖職責的侵犯。雖然賣蘋果也是違規的，我只是想幫這個名叫 Weston 的人一個忙。而我想這些指控就是我得到的回報？哼！」");
	say();
	if (!var0002) goto labelFunc042D_023A;
	message("他向你靠近並壓低聲音。「畢竟你也是友誼會的成員。我難道不是你的弟兄嗎？你難道不應該信任我嗎？」他給了你一個狡黠的眨眼。");
	say();
	var0005 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0010, true);
	if (!var0005) goto labelFunc042D_0233;
	message("「你看到了嗎？我是你的弟兄！」他遞給你一顆蘋果。");
	say();
	goto labelFunc042D_0237;
labelFunc042D_0233:
	message("「我本想給你一顆蘋果來表達我的誠意，但看來你背了太多東西了。」");
	say();
labelFunc042D_0237:
	goto labelFunc042D_0245;
labelFunc042D_023A:
	message("「但這個已知罪犯的絕望指控已經夠了。」");
	say();
	UI_add_answer("買");
labelFunc042D_0245:
	UI_remove_answer("友誼會");
labelFunc042D_024C:
	case "買" attend labelFunc042D_02D3:
	message("「我也可以幫你一個忙。你想不想用區區五枚金幣的微薄價格買下這些美麗的蘋果之一呢？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc042D_02B0;
	var0007 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, 0xFE99);
	if (!var0007) goto labelFunc042D_02A8;
	var0008 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0010, true);
	if (!var0008) goto labelFunc042D_02A1;
	message("Figg 從旁邊的籃子裡拿出一顆蘋果。在襯衫上稍微擦亮後，他把它遞給了你。");
	say();
	goto labelFunc042D_02A5;
labelFunc042D_02A1:
	message("「你拿不下蘋果！你帶了太多東西了！」");
	say();
labelFunc042D_02A5:
	goto labelFunc042D_02AD;
labelFunc042D_02A8:
	message("「你連買一顆蘋果的金幣都不夠！你浪費了國王皇家果園管理員的時間。滾開，農民！在我叫守衛之前滾開！」");
	say();
	abort;
labelFunc042D_02AD:
	goto labelFunc042D_02CC;
labelFunc042D_02B0:
	message("「很好。但你正在放棄一個很少有人得到的機會。事實上，呃，如果你不向任何人提及我們的小談話，我會很感激。同意嗎？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc042D_02C7;
	message("「啊，我就知道你是個好人。」");
	say();
	goto labelFunc042D_02CC;
labelFunc042D_02C7:
	message("「不！嗯，那好吧。」*");
	say();
	abort;
labelFunc042D_02CC:
	UI_remove_answer("買");
labelFunc042D_02D3:
	case "告辭" attend labelFunc042D_02DE:
	goto labelFunc042D_02E1;
labelFunc042D_02DE:
	goto labelFunc042D_00A5;
labelFunc042D_02E1:
	endconv;
	message("「我看你該上路了。」*");
	say();
labelFunc042D_02E6:
	if (!(event == 0x0000)) goto labelFunc042D_02F4;
	Func092E(0xFFD3);
labelFunc042D_02F4:
	return;
}


