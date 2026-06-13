#game "serpentisle"
// externs
extern void Func09A3 0x9A3 (var var0000);

void Func0375 shape#(0x375) ()
{
	var var0000;

	if (!(event == 0x0009)) goto labelFunc0375_00B1;
	UI_show_npc_face0(0xFED8, 0x0000);
	message("\"Avatar! How good it is to see thee! How long hath it been since we last met?\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Ahhhh... Errrr... Well....\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFED8, 0x0000);
	message("\"Do not tell me that thou dost not recognize me? Come now, Avatar, it hath not been that long.\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Welll... Maybe...\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFED8, 0x0000);
	message("\"It is I! Smith the Horse! Only the finest steed in all of Britannia.\"* \"Oh, I suppose thou wouldst not recognize me such as I am. This is the appearance I take here at the Realm of Dreams.\"* \"Ah, this is the life. Mine own keep, as much hay as I could want, no insects to bother me... Who could ask for more?\" *\"Where are my wits! Avatar, I have something important to tell thee. But what was it?\"");
	say();
	message("\"Oh, yes! Avatar, thou must take Rudyom's wand to the Isle of the Avatar!\"* \"There thou wilt find a monolith made of blackrock that Batlin is using to create a gateway to bring the Guardian into our world!\"* \"The future of Britannia doth lie in thine hands, Avatar!\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Ahh, Smith, the Guardian hath been stopped. Everything is safe.\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFED8, 0x0000);
	message("\"Oh...\" *\"I feel like I have made a mule of myself. Never mind...\" *\"Now I remember! Thou hast left Britannia and hast journeyed to the Serpent Isle in search of Batlin!\" *\"Poor Iolo, he must be distraught to have found that Gwenno left on that voyage with that fiend. I hope that thou wilt find her before that evil man doth do something to her. She, at least, hath always been kind to me.\" *\"Wait! Avatar, I do have some information thou canst use!\" *\"Batlin and his band of hired swords are waiting for thee at...\" *\"Yummie! Here comes someone with more hay...\"");
	say();
	UI_remove_npc_face0();
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0015, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(item);
	UI_play_sound_effect(0x004C);
labelFunc0375_00B1:
	if (!(event == 0x0002)) goto labelFunc0375_0157;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_clear_item_flag(item, 0x001D);
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0004, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0011, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0002, 0x0003);
	UI_sprite_effect(0x0011, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_lightning();
	Func09A3(item);
labelFunc0375_0157:
	return;
}


