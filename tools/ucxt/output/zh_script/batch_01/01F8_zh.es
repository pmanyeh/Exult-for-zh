#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func01F8 shape#(0x1F8) ()
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
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!(event == 0x0001)) goto labelFunc01F8_0009;
	return;
labelFunc01F8_0009:
	if (!(event == 0x0003)) goto labelFunc01F8_0112;
	var0000 = false;
	var0001 = UI_get_item_shape(item);
	if (!(!(var0001 == 0x01F8))) goto labelFunc01F8_0064;
	var0002 = UI_find_nearby(item, 0x01F8, 0x0050, 0x0004);
	enum();
labelFunc01F8_003A:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc01F8_0061;
	if (!UI_get_cont_items(var0005, 0x031D, 0x00F1, 0x0004)) goto labelFunc01F8_005E;
	var0000 = var0005;
labelFunc01F8_005E:
	goto labelFunc01F8_003A;
labelFunc01F8_0061:
	goto labelFunc01F8_0068;
labelFunc01F8_0064:
	var0000 = item;
labelFunc01F8_0068:
	if (!(!UI_get_cont_items(var0000, 0x031D, 0x00F1, 0x0004))) goto labelFunc01F8_007D;
	return;
labelFunc01F8_007D:
	UI_show_npc_face(0xFEDB, 0x0000);
	if (!(!gflags[0x0311])) goto labelFunc01F8_00AA;
	message("「很高興見到你，追尋者。我是 Dracothraxus 。你的考驗，恐怕也是你的敗北就在你面前。因為你該知道，我是被勇氣守護者賦予了不朽之身的。要摧毀我，必須要有一件極其強大的神器……而這種神器根本不存在。」這頭巨龍用爪子刨著泥土，期待著你們即將展開的戰鬥。");
	say();
	UI_remove_npc_face(0xFEDB);
	gflags[0x0311] = true;
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00AA:
	if (!UI_count_objects(0xFE9B, 0x02C3, 0xFE99, 0xFE99)) goto labelFunc01F8_00D5;
	message("Dracothraxus 厭惡地嗅了嗅空氣，「我感覺到我的末日就在附近。也許我終於能得到解脫了。祝你好運，凡人。保護好你自己吧！」說罷，巨龍向你撲來。");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00D5:
	if (!UI_find_nearest(var0000, 0x02C3, 0x001E)) goto labelFunc01F8_00FD;
	message("Dracothraxus 厭惡地嗅了嗅空氣，「我感覺到我的末日就在附近。也許我終於能得到解脫了。祝你好運，凡人。保護好你自己吧！」說罷，巨龍向你撲來。");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00FD:
	message("「你回來測試你的能耐了，小傢伙。你的勇氣為你帶來了榮譽，不過，我想你將帶著你的榮譽一起進墳墓。」*");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
labelFunc01F8_0112:
	if (!(event == 0x0002)) goto labelFunc01F8_0280;
	UI_show_npc_face(0xFEDB, 0x0000);
	if (!gflags[0x02EF]) goto labelFunc01F8_0195;
	message("巨龍發出一聲灼熱的嘆息，「終於解脫了。我現在要去尋求我的獎賞，因為這不僅是對你的勇氣的考驗，也是對我的。你的獎賞就在北方的門後。進入藍色的傳送門，勇氣護身符就是你的了。」*");
	say();
	UI_remove_item(item);
	UI_remove_npc_face(0xFEDB);
	var0006 = UI_find_nearby(UI_get_npc_object(0xFE9C), 0x036C, 0x0028, 0x0000);
	enum();
labelFunc01F8_0152:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc01F8_0194;
	if (!(UI_get_item_quality(var0009) == 0x000A)) goto labelFunc01F8_0191;
	var000A = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0004, (byte)0x58, 0x0021, (byte)0x50, (byte)0x0B, 0xFFFF, 0x0003, (byte)0x55, 0x03A7]);
labelFunc01F8_0191:
	goto labelFunc01F8_0152;
labelFunc01F8_0194:
	return;
labelFunc01F8_0195:
	if (!gflags[0x0336]) goto labelFunc01F8_019E;
	goto labelFunc01F8_026C;
labelFunc01F8_019E:
	message("「做得好，小小的人類。你強大且充滿勇氣。別以為你摧毀了我，你只是擊敗了我而已。為了這項驚人的壯舉，我想你配得上一份獎賞。我有一顆真正華麗的寶石可以給你，只要你的勇氣能再持續一會兒。」 Dracothraxus 張大嘴巴。在裡面，你可以看到滿口如針般尖銳的牙齒。同時，在靠近喉嚨深處，你看到一顆小巧但璀璨的藍色寶石。你要伸手進去拿嗎？」");
	say();
	if (!Func090A()) goto labelFunc01F8_021B;
	message("當你將手伸進巨龍那如熔爐般的血盆大口時，你忍不住懷疑，為了一顆小寶石冒這個險是否值得。");
	say();
	var000B = UI_create_new_object(0x02F8);
	UI_set_item_frame(var000B, 0x000C);
	var000C = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var000C) goto labelFunc01F8_01DB;
	message("儘管如此，你還是堅持下來，並取回了這顆可愛的小寶石。");
	say();
	goto labelFunc01F8_0218;
labelFunc01F8_01DB:
	message("就在你即將從死神之顎拔下這顆寶石時，巨龍輕輕地將它放在了她的巢穴中。 Dracothraxus 閉上嘴巴，對你眨了眨眼。「這只是對你勇氣的測試，小傢伙。」");
	say();
	var000D = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0003));
	var000E = UI_find_nearby(var000D, 0x0113, 0x001E, 0x0010);
	if (!var000E) goto labelFunc01F8_0218;
	var000A = UI_update_last_created(UI_get_object_position(var000E));
labelFunc01F8_0218:
	goto labelFunc01F8_026C;
labelFunc01F8_021B:
	message("「真可惜，你的勇氣僅止於戰鬥中的英勇，卻不足以信任一位值得尊敬的對手。不過，你還是贏得了你的獎賞，拿去吧。」巨龍用舌頭將寶石往前推，並將它從嘴裡吐了出來。然後她輕輕地將它放在巢穴中。");
	say();
	var000B = UI_create_new_object(0x02F8);
	UI_set_item_frame(var000B, 0x000C);
	var000D = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0003));
	var000E = UI_find_nearby(var000D, 0x0113, 0x001E, 0x0010);
	if (!var000E) goto labelFunc01F8_026C;
	var000A = UI_update_last_created(UI_get_object_position(var000E));
labelFunc01F8_026C:
	message("「我現在要去休息了，但我會回來的。在你找到一勞永逸擊敗我的方法之前，那扇門是不會打開的。別了，微小的凡人。*");
	say();
	UI_remove_item(item);
	gflags[0x0336] = true;
	UI_remove_npc_face(0xFEDB);
labelFunc01F8_0280:
	return;
}


