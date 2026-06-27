#game "blackgate"
void Func08C0 0x8C0 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = false;
	UI_push_answers();
	if (!gflags[0x01CC]) goto labelFunc08C0_002D;
	UI_add_answer("Forsythe");
labelFunc08C0_002D:
	if (!gflags[0x01C3]) goto labelFunc08C0_003A;
	UI_add_answer("擺渡人");
labelFunc08C0_003A:
	if (!gflags[0x01C4]) goto labelFunc08C0_0047;
	UI_add_answer("Markham");
labelFunc08C0_0047:
	if (!gflags[0x01CB]) goto labelFunc08C0_0054;
	UI_add_answer("Quenton");
labelFunc08C0_0054:
	if (!gflags[0x01C7]) goto labelFunc08C0_0061;
	UI_add_answer("Trent");
labelFunc08C0_0061:
	if (!gflags[0x01C2]) goto labelFunc08C0_006E;
	UI_add_answer("Caine");
labelFunc08C0_006E:
	UI_add_answer("暫時沒有");
	message("「那好。你想談談誰？」");
	say();
labelFunc08C0_0079:
	converse attend labelFunc08C0_0336;
	case "Forsythe" attend labelFunc08C0_008F:
	message("她狠狠地瞪了你一會兒。「關於那個——笨手笨腳的蠢貨，我沒什麼好說的！」");
	say();
	UI_remove_answer("Forsythe");
labelFunc08C0_008F:
	case "擺渡人" attend labelFunc08C0_00A9:
	message("「我對那個人知之甚少。自從巫妖將憤怒的死者從墳墓中召喚出來後，他就一直待在這裡。不過我知道一件事：即使你擊敗了 Horance，他依然會留在這裡服從他所侍奉的禁制。」她對你說這話時，神情顯得有些哀傷。");
	say();
	UI_remove_answer("擺渡人");
	UI_add_answer("憤怒的死者");
labelFunc08C0_00A9:
	case "憤怒的死者" attend labelFunc08C0_00BC:
	message("「我們祖先的墳墓湧出了 Skara Brae 的死者。他們的思想和心靈都已腐爛，根本不在乎活人。因此得名『憤怒的死者』。」");
	say();
	UI_remove_answer("憤怒的死者");
labelFunc08C0_00BC:
	case "Markham" attend labelFunc08C0_00D6:
	message("她對你歪著頭微微一笑。「那個無賴開了這附近最棒的酒吧之一，至少他是想讓你這麼相信。他這個人有點粗魯，但他懂得怎麼買好酒，這點倒是可以肯定。而且他挑選酒吧女侍的品味也算不上差，」她眨了眨眼。「如果你見過 Paulette，你就知道我在說什麼了。」");
	say();
	UI_remove_answer("Markham");
	UI_add_answer("Paulette");
labelFunc08C0_00D6:
	case "Quenton" attend labelFunc08C0_00F4:
	message("「那個可憐的人一生充滿了悲傷，這是我的魔法似乎都無能為力的唯一惡疾。~~「他的妻子 Gwen 在他們的女兒 Marney 出生幾年後，被一群相當兇殘的男人擄走了。我知道她遭遇了什麼，但出於同情，我沒有讓 Quenton 知道這件事。~~「那些男人因她那無與倫比的美貌而誤以為她是位貴族女士。當他們發現她只是一個卑微漁夫的妻子時，他們殘暴地強暴了她，並把她賣給了一家名聲狼藉的妓院。幸運的是，她到那裡後不久就去世了。」Mordra 顯得極為悲傷。");
	say();
	UI_remove_answer("Quenton");
	UI_add_answer("Marney");
	var0000 = true;
labelFunc08C0_00F4:
	case "Marney" attend labelFunc08C0_010E:
	message("「好啦，好啦，話說一半就稱不上是故事了。」她繼續述說著 Quenton 悲慘的一生。~~「Marney 在她母親被綁架後就病倒了，此後好幾年都活在死亡的邊緣。最後，Quenton 再也無法忍受了。他向一個名叫 Michael、綽號叫 Blade 的暴力之徒借了錢。當他無力償還貸款時，Blade 便殺了他。~~「然而，這並不是我這段可憐故事的終點，因為即使在他死後，Quenton 的亡靈仍被迫留在這座精神之鎮，在那裡他不得不看著他摯愛的 Marney 病情加重並最終死去。~~「Yorl，那個在 Marney 父親去世後照顧她的男人，為她塵世的\t 身軀建造了一座神龕。」她沉默了一會兒，低下了頭。~~「我由衷希望你能幫我們除掉 Horance，好讓 Quenton  \t 能與他的至愛重逢，無論她們身在何方。」");
	say();
	UI_remove_answer("Marney");
	UI_add_answer("Blade");
labelFunc08C0_010E:
	case "Blade" attend labelFunc08C0_0121:
	message("自從你見到她以來，她的臉上第一次變得毫無情感。~~「我之所以知道這個故事，是因為我已故的哥哥 Rinaldo 曾任職於 Yew 的高等法院。他寫信告訴我，他們不僅抓到了 Blade，還抓到了綁架 Quenton 妻子的海盜。那些海盜在地下城最底層的牢房裡度過了餘生，而 Blade 則在斷頭台的刀刃下迎來了他的下場。~~「很適合他的死法，你不覺得嗎？」");
	say();
	UI_remove_answer("Blade");
labelFunc08C0_0121:
	case "Paulette" attend labelFunc08C0_0134:
	message("「她真是個可愛的女孩，雖然想法有點像小孩子。我相信她的父親不是這個世界的人。他說話的語調很奇特，外貌也和大多數不列顛尼亞的人大不相同。~~「不過你也非常清楚，許多其他世界的人都會來到這片土地。我甚至聽過傳聞說連不列顛王本人也是個外世界人。想像一下吧。」她臉上露出狡黠的表情。");
	say();
	UI_remove_answer("Paulette");
labelFunc08C0_0134:
	case "Trent" attend labelFunc08C0_01B1:
	if (!gflags[0x01A6]) goto labelFunc08C0_0157;
	message("「那兩個人能重新在一起真是太好了。我只希望 Quenton 也能迎來相同的命運。」她的聲音裡充滿了希望。");
	say();
	if (!(!var0000)) goto labelFunc08C0_0154;
	UI_add_answer("Quenton");
labelFunc08C0_0154:
	goto labelFunc08C0_01A6;
labelFunc08C0_0157:
	if (!gflags[0x01A5]) goto labelFunc08C0_0194;
	if (!(!gflags[0x01A8])) goto labelFunc08C0_0179;
	message("「既然 Trent 已經走出了陰霾，我相信是時候讓他建造，那座將成為巫妖棺材的靈魂囚籠(Soul Cage)了。」她毫無幽默感地笑了笑。~~「如果你想把這個小鎮從 Horance 的魔掌中解救出來，就去找他並協助他吧。」");
	say();
	if (!(!var0004)) goto labelFunc08C0_0176;
	UI_add_answer("巫妖 Horance");
labelFunc08C0_0176:
	goto labelFunc08C0_0191;
labelFunc08C0_0179:
	if (!gflags[0x01AA]) goto labelFunc08C0_018D;
	message("「我感覺彷彿卸下了一副重擔。對於你所做的一切，我真是感激不盡。然而，在靈魂之井(Well of Souls)被摧毀之前，我們是不會完全擺脫巫妖力量的。」");
	say();
	UI_add_answer("靈魂之井(Well of Souls)");
	goto labelFunc08C0_0191;
labelFunc08C0_018D:
	message("「你必須好好使用他的籠子來阻止巫妖。」");
	say();
labelFunc08C0_0191:
	goto labelFunc08C0_01A6;
labelFunc08C0_0194:
	message("「唉，我擔心他的心智因失去妻子 Rowena 而破碎了。他無法打破吞噬著他的恨意。總有一天，他會耗盡心力，而他的靈魂也將永遠迷失。也許，Rowena 會知道有什麼能幫上忙……但不行，她自己也正需要協助。」Mordra 搖了搖頭。");
	say();
	if (!(!var0002)) goto labelFunc08C0_01A6;
	UI_add_answer("Rowena");
labelFunc08C0_01A6:
	UI_remove_answer("Trent");
	var0001 = true;
labelFunc08C0_01B1:
	case "Rowena" attend labelFunc08C0_01F8:
	UI_remove_answer("Rowena");
	if (!gflags[0x01A6]) goto labelFunc08C0_01DB;
	message("「那兩個人能重新在一起真是太好了。我只希望 Quenton 也能迎來相同的命運。」她的聲音裡充滿了希望。");
	say();
	if (!(!var0000)) goto labelFunc08C0_01D8;
	UI_add_answer("Quenton");
labelFunc08C0_01D8:
	goto labelFunc08C0_01ED;
labelFunc08C0_01DB:
	if (!(!gflags[0x01A9])) goto labelFunc08C0_01E9;
	message("「你必須想辦法讓她從巫妖的迷魂術中清醒過來，哪怕只有短短的一瞬間。我肯定她掌握著讓 Trent 恢復自我的關鍵。也許，如果你能找到她的一件貼身物品——也許是來自 Trent 的東西——並帶給她。那說不定能打破她所受的魔咒。」");
	say();
	goto labelFunc08C0_01ED;
labelFunc08C0_01E9:
	message(" Mistress Mordra 稍微皺了下眉頭。「我希望那個可憐的女孩能再多撐一會兒，直到她能被帶離那個恐怖的地方。」");
	say();
labelFunc08C0_01ED:
	UI_remove_answer("Rowena");
	var0002 = true;
labelFunc08C0_01F8:
	case "Caine" attend labelFunc08C0_0260:
	if (!(!gflags[0x01C0])) goto labelFunc08C0_022B;
	message("「他是一個飽受折磨的靈魂。他將小鎮的毀滅歸咎於自己。在他的妄想中，他不斷感受到自己死亡時的火焰。然而，我相信他的狀態帶給了他某種淨化與智慧。據說他甚至知道生命與死亡的答案。」~~她顯得有些困惑。「不管事實如何，你必須從他那裡取得用來消滅巫妖的魔法藥劑。不過，我可以給你成分清單。」");
	say();
	UI_add_answer("配方");
	gflags[0x01C0] = true;
	if (!(!var0004)) goto labelFunc08C0_0224;
	UI_add_answer("巫妖 Horance");
labelFunc08C0_0224:
	var0003 = true;
	goto labelFunc08C0_0259;
labelFunc08C0_022B:
	if (!(!gflags[0x01AA])) goto labelFunc08C0_0247;
	message("「很好，你已經設法調配出了魔法配方；現在你必須將它與靈魂囚籠(Soul Cage)配合使用，來消滅 Horance。」");
	say();
	if (!(!var0004)) goto labelFunc08C0_0244;
	UI_add_answer("巫妖 Horance");
labelFunc08C0_0244:
	goto labelFunc08C0_0259;
labelFunc08C0_0247:
	message("她的笑容擴大了。「你非常完美地利用了那張配方。現在，我們必須想辦法摧毀靈魂之井(Well of Souls)，以解放 Skara Brae。」");
	say();
	if (!(!var0005)) goto labelFunc08C0_0259;
	UI_add_answer("靈魂之井(Well of Souls)");
labelFunc08C0_0259:
	UI_remove_answer("Caine");
labelFunc08C0_0260:
	case "配方" attend labelFunc08C0_0273:
	message("「如果我告訴你，你必須確保弄對它們。否則，當初我告訴那個該死的市長時發生的慘劇就會再次重演。而且，雖然我們在 Skara Brae 這裡已經沒有更多的生命可以失去了，但你卻有一條相當寶貴的性命！~~「瓦解巫妖所需的成分有：一瓶隱形藥水、一瓶療傷藥水，以及一小瓶曼陀羅根精華——我家裡的某個地方有一瓶。記住，只要 -一- 小瓶！」");
	say();
	UI_remove_answer("配方");
labelFunc08C0_0273:
	case "巫妖 Horance" attend labelFunc08C0_0291:
	message("「他就是大火發生時，我試圖消滅的那個該死的巫妖。法師 Horance 顯然在某一天決定了凡人的壽命不適合他。於是，他開始研究避免死亡的方法。最後，他找到了將自己變成不死生物——一個長生不老的不死生物——巫妖所需的配方。不幸的是，這種轉變加上他本就偏執的行為，使他變成了今天這個邪惡的怪物！~~「而正是他那邪惡的『黑色儀式』在擺佈著我們所有人！」");
	say();
	UI_remove_answer("巫妖 Horance");
	UI_add_answer("黑色儀式");
	var0004 = true;
labelFunc08C0_0291:
	case "黑暗之塔" attend labelFunc08C0_02B6:
	message("「Dark Tower 坐落在 Skara Brae 的西北角。它的建造有些古怪，因為我發現很難用我的魔法感知去滲透它。在它內部，」她說道，「你會找到靈魂之井。");
	say();
	UI_remove_answer("黑暗之塔");
	if (!(!var0005)) goto labelFunc08C0_02B2;
	UI_add_answer("靈魂之井(Well of Souls)");
labelFunc08C0_02B2:
	var0006 = true;
labelFunc08C0_02B6:
	case "靈魂之井(Well of Souls)" attend labelFunc08C0_02DF:
	var0005 = true;
	message("「靈魂之井是一個強大的神器，位於 Dark Tower 的後方，巫妖就是從中汲取力量。死者的靈魂被囚禁在那裡，註定要遭受 Horance 那無止境食慾的折磨。」她的容貌上顯露出一絲痛苦的表情。");
	say();
	if (!(!var0004)) goto labelFunc08C0_02D4;
	UI_add_answer("巫妖 Horance");
labelFunc08C0_02D4:
	UI_remove_answer("靈魂之井(Well of Souls)");
	var0005 = true;
labelFunc08C0_02DF:
	case "黑色儀式" attend labelFunc08C0_031C:
	if (!(!gflags[0x01AA])) goto labelFunc08C0_0303;
	message(" Mordra 憤怒地說道：「每晚子時一到，Skara Brae 的亡靈就會前往 Dark Tower，並被用來為 Horance 注入力量以延續他的黑暗存在。其他人在這發生時都毫無察覺，但我能感受得到卻無法阻止自己。」");
	say();
	if (!(!var0006)) goto labelFunc08C0_0300;
	UI_add_answer("黑暗之塔");
labelFunc08C0_0300:
	goto labelFunc08C0_0315;
labelFunc08C0_0303:
	message("「即使巫妖已經不在了，我們依然會被吸引到他舉行黑色儀式的地方。他一定是對我們施加了某種禁制，並將其與靈魂之井(Well of Souls)的力量綁在了一起。噢，他曾是個多麼狡猾的惡棍啊。」對一位熟練法師的由衷敬佩與厭惡之情交織在 Mordra 的表情中。");
	say();
	if (!(!var0005)) goto labelFunc08C0_0315;
	UI_add_answer("靈魂之井(Well of Souls)");
labelFunc08C0_0315:
	UI_remove_answer("黑色儀式");
labelFunc08C0_031C:
	case "暫時沒有" attend labelFunc08C0_0333:
	message("「我明白了。那麼，你想談談什麼？」*");
	say();
	UI_clear_answers();
	UI_pop_answers();
	goto labelFunc08C0_0336;
labelFunc08C0_0333:
	goto labelFunc08C0_0079;
labelFunc08C0_0336:
	endconv;
	return;
}
