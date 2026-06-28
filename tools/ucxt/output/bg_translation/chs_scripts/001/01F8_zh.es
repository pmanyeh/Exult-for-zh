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
	message("「很高兴见到你，追寻者。我是 Dracothraxus 。你的考验，恐怕也是你的败北就在你面前。因为你该知道，我是被勇气守护者赋予了不朽之身的。要摧毁我，必须要有一件极其强大的神器……而这种神器根本不存在。」这头巨龙用爪子刨着泥土，期待着你们即将展开的战斗。");
	say();
	UI_remove_npc_face(0xFEDB);
	gflags[0x0311] = true;
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00AA:
	if (!UI_count_objects(0xFE9B, 0x02C3, 0xFE99, 0xFE99)) goto labelFunc01F8_00D5;
	message("Dracothraxus 厌恶地嗅了嗅空气，「我感觉到我的末日就在附近。也许我终于能得到解脱了。祝你好运，凡人。保护好你自己吧！」说罢，巨龙向你扑来。");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00D5:
	if (!UI_find_nearest(var0000, 0x02C3, 0x001E)) goto labelFunc01F8_00FD;
	message("Dracothraxus 厌恶地嗅了嗅空气，「我感觉到我的末日就在附近。也许我终于能得到解脱了。祝你好运，凡人。保护好你自己吧！」说罢，巨龙向你扑来。");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00FD:
	message("「你回来测试你的能耐了，小家伙。你的勇气为你带来了荣誉，不过，我想你将带着你的荣誉一起进坟墓。」*");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
labelFunc01F8_0112:
	if (!(event == 0x0002)) goto labelFunc01F8_0280;
	UI_show_npc_face(0xFEDB, 0x0000);
	if (!gflags[0x02EF]) goto labelFunc01F8_0195;
	message("巨龙发出一声灼热的叹息，「终于解脱了。我现在要去寻求我的奖赏，因为这不仅是对你的勇气的考验，也是对我的。你的奖赏就在北方的门后。进入蓝色的发送门，勇气护身符就是你的了。」*");
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
	message("「做得好，小小的人类。你强大且充满勇气。别以为你摧毁了我，你只是击败了我而已。为了这项惊人的壮举，我想你配得上一份奖赏。我有一颗真正华丽的宝石可以给你，只要你的勇气能再持续一会儿。」 Dracothraxus 张大嘴巴。在里面，你可以看到满口如针般尖锐的牙齿。同时，在靠近喉咙深处，你看到一颗小巧但璀璨的蓝色宝石。你要伸手进去拿吗？」");
	say();
	if (!Func090A()) goto labelFunc01F8_021B;
	message("当你将手伸进巨龙那如熔炉般的血盆大口时，你忍不住怀疑，为了一颗小宝石冒这个险是否值得。");
	say();
	var000B = UI_create_new_object(0x02F8);
	UI_set_item_frame(var000B, 0x000C);
	var000C = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var000C) goto labelFunc01F8_01DB;
	message("尽管如此，你还是坚持下来，并取回了这颗可爱的小宝石。");
	say();
	goto labelFunc01F8_0218;
labelFunc01F8_01DB:
	message("就在你即将从死神之腭拔下这颗宝石时，巨龙轻轻地将它放在了她的巢穴中。 Dracothraxus 闭上嘴巴，对你眨了眨眼。「这只是对你勇气的测试，小家伙。」");
	say();
	var000D = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0003));
	var000E = UI_find_nearby(var000D, 0x0113, 0x001E, 0x0010);
	if (!var000E) goto labelFunc01F8_0218;
	var000A = UI_update_last_created(UI_get_object_position(var000E));
labelFunc01F8_0218:
	goto labelFunc01F8_026C;
labelFunc01F8_021B:
	message("「真可惜，你的勇气仅止于战斗中的英勇，却不足以信任一位值得尊敬的对手。不过，你还是赢得了你的奖赏，拿去吧。」巨龙用舌头将宝石往前推，并将它从嘴里吐了出来。然后她轻轻地将它放在巢穴中。");
	say();
	var000B = UI_create_new_object(0x02F8);
	UI_set_item_frame(var000B, 0x000C);
	var000D = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0003));
	var000E = UI_find_nearby(var000D, 0x0113, 0x001E, 0x0010);
	if (!var000E) goto labelFunc01F8_026C;
	var000A = UI_update_last_created(UI_get_object_position(var000E));
labelFunc01F8_026C:
	message("「我现在要去休息了，但我会回来的。在你找到一劳永逸击败我的方法之前，那扇门是不会打开的。别了，微小的凡人。*");
	say();
	UI_remove_item(item);
	gflags[0x0336] = true;
	UI_remove_npc_face(0xFEDB);
labelFunc01F8_0280:
	return;
}


