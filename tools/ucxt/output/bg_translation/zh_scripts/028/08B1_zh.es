#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0907 0x907 (var var0000);

void Func08B1 0x8B1 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0908();
	message("「聖者，你再次證明了你始終是 Britannia 和無辜者的守護者。我無法充分表達我的感激之情；然而，請收下這份小小的謝禮。我希望它能在你的任務中幫助到你。」");
	say();
	var0001 = UI_create_new_object(0x0229);
	if (!var0001) goto labelFunc08B1_005B;
	var0002 = UI_set_item_quality(var0001, 0x0064);
	if (!Func0907(UI_get_npc_object(0xFE9C))) goto labelFunc08B1_0045;
	message("他把他的個人法杖交給你。它似乎具有魔力。");
	say();
	goto labelFunc08B1_0057;
labelFunc08B1_0045:
	var0003 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("他把他的個人法杖放在地上。它似乎具有魔力。~「我有東西要給你，聖者，但我看你現在拿不下了。我會把它放在這兒的地板上給你。」");
	say();
labelFunc08B1_0057:
	gflags[0x01AB] = true;
labelFunc08B1_005B:
	message("有一瞬間，Horance 看起來很沮喪。「我覺得這個城鎮發生的事情，我也該負起一些責任。因為，在我探尋宇宙真理的過程中，我不經意地釋放了那個摧毀這個城鎮的邪靈。我將在餘生中努力恢復這座曾經可愛的城鎮。~~「我會讓它成為靈性（Spirituality）的光輝典範，一個讓善良之人能夠和平和諧地生活的聖地。再次感謝你給了我這個機會。再見了，");
	message(var0000);
	message(".\"*");
	say();
	abort;
	return;
}


