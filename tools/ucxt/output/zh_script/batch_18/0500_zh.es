#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func0500 object#(0x500) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc0500_0009;
	abort;
labelFunc0500_0009:
	var0000 = UI_get_party_list();
	var0001 = UI_get_schedule_type(UI_get_npc_object(item));
	UI_show_npc_face(0xFF00, 0x0000);
	if (!(!(var0001 == 0x0003))) goto labelFunc0500_0039;
	message("這隻 Wisp 沒有回應。*");
	say();
	abort;
	goto labelFunc0500_009C;
labelFunc0500_0039:
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0002 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0002, 0xFE99);
	if (!var0002) goto labelFunc0500_006B;
	UI_add_answer("筆記本");
labelFunc0500_006B:
	if (!gflags[0x0100]) goto labelFunc0500_0078;
	UI_add_answer("時間領主");
labelFunc0500_0078:
	if (!(!gflags[0x0150])) goto labelFunc0500_0098;
	message("一個光球向你靠近。~~「『你』不是被稱為『Trellek』的實體。『你』用被稱為『emps』的物種的方式呼喚。『Xorinia』原本期待的是實體『Trellek』。");
	say();
	message("「但這並不重要。根據『我』擁有的資訊，『我』面前的局部顯現是被稱為『聖者』的實體。");
	say();
	message("這隻 Wisp 明亮地閃爍了一兩秒鐘。~~「『Xorinia』希望與這個人類實體交換資訊。」");
	say();
	gflags[0x0150] = true;
	Func0911(0x01F4);
	goto labelFunc0500_009C;
labelFunc0500_0098:
	message("「又一次，一個局部顯現向 Xorinite 維度發出呼喚。」");
	say();
labelFunc0500_009C:
	converse attend labelFunc0500_022C;
	case "姓名" attend labelFunc0500_00B9:
	message("「最高機率顯示，來自 Xorinite 維度的顯現會被稱為『人類』的實體稱為『Wisp』。我也被 Xorinite 維度的其他顯現稱為『Xorinia』。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Wisp");
labelFunc0500_00B9:
	case "Wisp" attend labelFunc0500_00CC:
	message("「自從 Xorinite 顯現發現這個維度以來，這個標籤就一直被人類實體用來命名來自 Xorinite 維度的顯現。另一個常見的姓名是『Will-o-the-wisp』。~~ 「前面的資訊樣本是免費提供的。通常提供資訊是需要收費的。」");
	say();
	UI_remove_answer("Wisp");
labelFunc0500_00CC:
	case "資訊" attend labelFunc0500_00EF:
	message("「Undrian 議會正在尋找關於一個名為『Alagner』實體的資訊。『你』可以獲取這個資訊。『我』有關於『你』正在尋找的某個實體的資訊。Undrian 議會提議進行一筆交易。」");
	say();
	UI_remove_answer("資訊");
	UI_add_answer(["Undrian 議會", "Alagner", "交易"]);
labelFunc0500_00EF:
	case "Undrian 議會" attend labelFunc0500_0102:
	message("「該議會代表了『你們』語言中所定義的『政府』。」");
	say();
	UI_remove_answer("Undrian 議會");
labelFunc0500_0102:
	case "職業" attend labelFunc0500_0115:
	message("「『Xorinia』是不同位面和維度之間資訊的管道。『Xorinia』還會將 Xorinite 社群發展所需的資訊進行編目。『你』擁有對『我』可能有價值的資訊。『我』也有『你』想要的資訊。」");
	say();
	UI_add_answer("資訊");
labelFunc0500_0115:
	case "Alagner" attend labelFunc0500_0128:
	message("「Undrian 議會獲得的資訊顯示，在『你們』的維度中，有一個人類實體被稱為『不列顛尼亞最聰明的人』。這個實體被稱為『Alagner』，居住在『你們』的聚落『New Magincia』中。『Alagner』擁有一本該實體稱之為『筆記本』的東西。這本『筆記本』是資訊的集合。」");
	say();
	UI_remove_answer("Alagner");
labelFunc0500_0128:
	case "交易" attend labelFunc0500_015F:
	message("「『我』想要吸收 Alagner『筆記本』裡的資訊。如果『你』把『筆記本』帶到這裡來，Undrian 議會將會釋出對『你』有用的資訊。『你』同意這筆交易嗎？」");
	say();
	gflags[0x0133] = true;
	var0003 = Func090A();
	if (!var0003) goto labelFunc0500_014B;
	message("「『Xorinia』認可『你』的用處。『我』會待在這裡。人類實體將『我』的這個行為稱為『等待』。」");
	say();
	goto labelFunc0500_0158;
labelFunc0500_014B:
	message("「『Xorinia』察覺到『你』的敵意。『我』會待在這裡，以防『你』反思『你』的決定並決定改變主意。」*");
	say();
	UI_set_schedule_type(item, 0x0014);
	abort;
labelFunc0500_0158:
	UI_remove_answer("交易");
labelFunc0500_015F:
	case "時間領主" attend labelFunc0500_0187:
	if (!(!gflags[0x0133])) goto labelFunc0500_017C;
	message("「被稱為『時間領主（Time Lord）』的實體要求覲見『你』。在『我』能給『你』更多關於此事的資訊之前，『我』必須提議一筆交易。」");
	say();
	UI_add_answer("資訊");
	goto labelFunc0500_0180;
labelFunc0500_017C:
	message("「被稱為『時間領主』的實體是來自空間/時間維度的存在。Xorinite 維度已經與『時間領主』交流了『人類』所稱的『幾個世紀』。」");
	say();
labelFunc0500_0180:
	UI_remove_answer("時間領主");
labelFunc0500_0187:
	case "筆記本" attend labelFunc0500_01B1:
	message("「人類實體受到『Xorinia』的歡迎。『你』帶來了物品『筆記本』。『我』現在將吸收其中包含的資訊。」~~這隻 Wisp 明亮地閃爍了幾秒鐘。筆記本仍然在你的手中。~~「『我』已經完成了對資訊的吸收。『你』現在可以將物品『筆記本』歸還給實體『Alagner』了。~~「現在來進行資訊交換和傳遞一則訊息。」");
	say();
	gflags[0x0157] = true;
	Func0911(0x02BC);
	UI_remove_answer("筆記本");
	UI_add_answer(["交換", "訊息"]);
labelFunc0500_01B1:
	case "訊息" attend labelFunc0500_01CF:
	message("「『Xorinia』必須傳遞一則訊息給『你』。被稱為『時間領主』的實體要求覲見『你』。『時間領主』被困在被稱為靈性神殿（Shrine of Spirituality）的位面。『你』可以在『你』的『西北方』使用『你』的物品『月亮寶珠（Orb of the Moons）』來接觸『他』。");
	say();
	gflags[0x0134] = true;
	UI_remove_answer("訊息");
	UI_add_answer("時間領主");
labelFunc0500_01CF:
	case "交換" attend labelFunc0500_0207:
	message("「現在輪到『你』尋找的資訊了。名為『不列顛尼亞』的『這個』維度正受到一個被稱為『守護者（The Guardian）』的實體攻擊。~~「『守護者』住在另一個維度。『Xorinia』有時會與這個實體交換資訊。『你』想知道更多關於『守護者』的事嗎？」");
	say();
	var0004 = Func090A();
	if (!0x0614) goto labelFunc0500_01FC;
	message("「『Xorinia』已經消化了關於『守護者』的資訊，並能陳述以下事實：~~「『守護者』具有人類實體標籤為『虛榮』、『貪婪』、『以自我為中心』和『惡毒』的特質。『守護者』靠著力量和統治茁壯成長。『守護者』從征服其他世界中獲得『快感』。他的感覺器官現在正集中在被稱為『不列顛尼亞』的『這個』維度。~~「『守護者』正試圖透過人類實體稱之為『月之門（Moongate）』的物品進入『這個』維度。這個『月之門』不是『紅色』或『藍色』的『月之門』，『Xorinia』知道那是這個物品的標準形式。『守護者』正在建造一個『黑色』的『月之門』。」");
	say();
	UI_remove_answer("交換");
	UI_add_answer("黑門");
	goto labelFunc0500_0200;
labelFunc0500_01FC:
	message("「『Xorinia』總是會回應免費的資訊。交易完成。」*");
	say();
labelFunc0500_0200:
	UI_remove_answer("交換");
labelFunc0500_0207:
	case "黑門" attend labelFunc0500_021E:
	message("「當被稱為『天文排列（Astronomical Alignment）』的現象下次發生時，『黑門』將會發揮全部功能。~~ 「雖然『Xorinia』通常不會試圖影響其他顯現的行為，但『Xorinia』警告『你』，如果『守護者』進入『這個』維度，被稱為『不列顛尼亞』的維度將會終結。『守護者』在『他』自己的維度中非常強大。在『你們』的維度中，『他』將會無人能擋。~~「Undrian 議會真誠地希望這些資訊是有用的。交易完成。」*");
	say();
	gflags[0x0127] = true;
	UI_remove_answer("黑門");
labelFunc0500_021E:
	case "告辭" attend labelFunc0500_0229:
	goto labelFunc0500_022C;
labelFunc0500_0229:
	goto labelFunc0500_009C;
labelFunc0500_022C:
	endconv;
	message("「『Xorinia』總是歡迎資訊的交換。再會。」*");
	say();
	UI_set_schedule_type(item, 0x0014);
	return;
}


