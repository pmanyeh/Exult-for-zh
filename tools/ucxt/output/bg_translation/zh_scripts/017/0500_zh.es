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
	message("鬼火沒有回應。*");
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
	message("一團光球向汝逼近。~~「『汝』並非『吾等』所知的名為『Trellek』的存在。『汝』以森靈族的方式呼喚。原本，『Xorinia』正期待著那名為『Trellek』的存在到來。");
	say();
	message("「但，此事無關緊要。依據『吾』所掌握的資訊，此刻現身於『吾』面前的，即為被稱為『聖者』的存在。」");
	say();
	message("這隻鬼火隨之劇烈閃爍了一兩秒。~~「『Xorinia』期盼能與眼前的『人類』存在，進行資訊交換。」");
	say();
	gflags[0x0150] = true;
	Func0911(0x01F4);
	goto labelFunc0500_009C;
labelFunc0500_0098:
	message("「又一次，某個三維世界的局部投影，向『Xorinite』維度發起了訊號。」");
	say();
labelFunc0500_009C:
	converse attend labelFunc0500_022C;
	case "姓名" attend labelFunc0500_00B9:
	message("「最高機率表明，來自『Xorinite』維度的投射，會被那些被稱為『人類』的存在冠以『鬼火』之名。此外，在 Xorinite 維度的其他投射之中，『吾』亦被稱為『Xorinia』。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("鬼火");
labelFunc0500_00B9:
	case "鬼火" attend labelFunc0500_00CC:
	message("「自從『Xorinite』維度被其自身的投射物所發現以來，人類存在便啟用了這個標籤，用以命名來自該維度的化現。另一個常見的別名則是『沼澤鬼火』。~~「上述的資訊樣本為免費提供。通常情況下，獲取資訊是需要支付費用的。」");
	say();
	UI_remove_answer("鬼火");
labelFunc0500_00CC:
	case "資訊" attend labelFunc0500_00EF:
	message("「『Undrian  議會』正設法搜集關於一名被稱為『Alagner』之存在的相關資訊。而『汝』正掌握著此項資訊。與此同時，『吾』亦掌握著『汝』目前正苦苦尋覓之『某個』特定存在的情報。因此，Undrian 議會在此提議一項對等交易。」");
	say();
	UI_remove_answer("資訊");
	UI_add_answer(["Undrian 議會", "Alagner", "交易"]);
labelFunc0500_00EF:
	case "Undrian 議會" attend labelFunc0500_0102:
	message("「該議會，即代表了『汝等』的語言中所定義的…『官方』。」");
	say();
	UI_remove_answer("Undrian 議會");
labelFunc0500_0102:
	case "職業" attend labelFunc0500_0115:
	message("「『Xorinia』是穿梭於不同位面，與維度之間的資訊通道。同時，『Xorinia』亦負責將所有對其群體成長，不可或缺的資訊，進行編目存檔。『汝』手中正掌握著對『吾』而言，可能具備價值的資訊。與此同時，『吾』亦掌握著『汝』所渴求的情報。」");
	say();
	UI_add_answer("資訊");
labelFunc0500_0115:
	case "Alagner" attend labelFunc0500_0128:
	message("「Undrian 議會掌握了這項資訊：在『汝等』的維度中，存在著一個被冠以『Britannia 最睿智之人』稱號的人類個體。該個體名為『Alagner』，定居於『汝等』那處名為『New Magincia』的聚落。Alagner 手中握有一件被該個體稱為『筆記本』的物件——而這本『筆記本』，即是一項資訊的集合體。」");
	say();
	UI_remove_answer("Alagner");
labelFunc0500_0128:
	case "交易" attend labelFunc0500_015F:
	message("「『吾』期盼能『吸收』Alagner 那本『筆記本』中所蘊含的資訊。若『汝』將該『筆記本』帶至此處，Undrian 議會便可釋放對『汝』而言，具備實用價值的情報。『汝』，是否同意此項交易？」");
	say();
	gflags[0x0133] = true;
	var0003 = Func090A();
	if (!var0003) goto labelFunc0500_014B;
	message("「『Xorinia』認可了『汝』的實用價值。『吾』將駐留於此。人類存在通常會將『吾』的這項狀態，定義為『等待』。」");
	say();
	goto labelFunc0500_0158;
labelFunc0500_014B:
	message("「『Xorinia』察覺到了『汝』的敵意。若『汝』日後對此項決定有所反思，並決意更改，『吾』仍將駐留於此。」*");
	say();
	UI_set_schedule_type(item, 0x0014);
	abort;
labelFunc0500_0158:
	UI_remove_answer("交易");
labelFunc0500_015F:
	case "時間領主" attend labelFunc0500_0187:
	if (!(!gflags[0x0133])) goto labelFunc0500_017C;
	message("「那名被稱為『時間領主（Time Lord）』的存在，正請求與『汝』進行面見。但在『吾』能向『汝』透露更多關於此事的進一步資訊之前，『吾』必須在此提議一項交易。」");
	say();
	UI_add_answer("資訊");
	goto labelFunc0500_0180;
labelFunc0500_017C:
	message("「那名被稱為『時間領主』的存在，是一個來自『時空維度』的生命體。自那群被稱為『人類』的物種所定義的『數個世紀』前以來，Xorinite 維度便一直與『時間領主』保持著通訊對接。」");
	say();
labelFunc0500_0180:
	UI_remove_answer("時間領主");
labelFunc0500_0187:
	case "筆記本" attend labelFunc0500_01B1:
	message("「人類個體得到了『Xorinia』的歡迎。『汝』已將物件『筆記本』帶至此處。『吾』現在便開始吸收其中所蘊含的資訊。」~~這隻鬼火隨之劇烈閃爍了數秒。那本筆記本仍留在『汝』的背包之中。~~「『吾』已完成對該資訊的吸收。『汝』現在可將物件『筆記本』歸還予那名為『Alagner』的存在。~~「而現在，開始進行資訊的交換，並向汝傳達一則訊息。」");
	say();
	gflags[0x0157] = true;
	Func0911(0x02BC);
	UI_remove_answer("筆記本");
	UI_add_answer(["交換", "訊息"]);
labelFunc0500_01B1:
	case "訊息" attend labelFunc0500_01CF:
	message("「『Xorinia』必須向『汝』傳達一則訊息。那名為『時間領主』的存在，正請求與『汝』進行面見。『時間領主』目前正被困於那被稱為『靈性神殿（Shrine of Spirituality）』的位面之中。若欲抵達『彼』所在之處，『汝』須在正位於『汝』之『西北方』的特定位置，啟用『汝』手中被稱為『月之寶珠』的物件。」");
	say();
	gflags[0x0134] = true;
	UI_remove_answer("訊息");
	UI_add_answer("時間領主");
labelFunc0500_01CF:
	case "交換" attend labelFunc0500_0207:
	message("「現在，開始提供『汝』所尋覓的情報。這處被稱為『Britannia』的維度，目前正遭受一個名為『守護者』之存在的侵襲。~~「『守護者』居於另一個維度之中，『Xorinia』有時亦會與該存在進行資訊交易。~~『汝』，是否期盼了解更多關於『守護者』的情報？」");
	say();
	var0004 = Func090A();
	if (!0x0614) goto labelFunc0500_01FC;
	message("「『Xorinia』已消化了關於『守護者』的資訊，並可陳述以下事實：~~「『守護者』具備了人類存在定義為『虛榮』、『貪婪』、『極度自戀』以及『惡毒』的特質。該存在以『力量』與『主宰』為養分。侵略其他世界，能為『彼』帶來人類所定義的『愉悅』。此時，『彼』的注意力，已全面聚焦於這處被稱為『Britannia』的維度。~~「『守護者』目前正試圖藉由一項人類存在稱之為『月之門』的物件切入這處維度。此座『月之門』並非藍色或紅色——據『Xorinia』所知，此二色，方為該物件之標準規格。該『守護者』目前正在建造一座呈現『黑色』的月之門。」");
	say();
	UI_remove_answer("交換");
	UI_add_answer("黑月之門");
	goto labelFunc0500_0200;
labelFunc0500_01FC:
	message("「『Xorinia』向來對免費資訊表示歡迎。交易，已完成。」*");
	say();
labelFunc0500_0200:
	UI_remove_answer("交換");
labelFunc0500_0207:
	case "黑月之門" attend labelFunc0500_021E:
	message("「當下一次發生『天體連線』的現象之時，『黑月之門』便將具備完整的運作功能。~~「儘管『Xorinia』通常並無意圖去影響其他投射物的個體行為，但『Xorinia』在此對『汝』發出警告：若讓『守護者』進入這處維度，這處被稱為『Britannia』的維度將迎來終結。該『守護者』在『彼』自身的維度中已是力量強大；一旦降臨至『汝等』的維度，『彼』將無可阻擋。~~「Undrian 議會由衷期盼，此項資訊對汝有所助益。交易，已完成。」*");
	say();
	gflags[0x0127] = true;
	UI_remove_answer("黑月之門");
labelFunc0500_021E:
	case "告辭" attend labelFunc0500_0229:
	goto labelFunc0500_022C;
labelFunc0500_0229:
	goto labelFunc0500_009C;
labelFunc0500_022C:
	endconv;
	message("「『Xorinia』永遠歡迎資訊的交換。祝『汝』旅途順遂。」*");
	say();
	UI_set_schedule_type(item, 0x0014);
	return;
}


