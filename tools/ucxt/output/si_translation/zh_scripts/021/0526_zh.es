#game "serpentisle"
// externs
extern void Func09AA 0x9AA ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func09AD 0x9AD (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0526 object#(0x526) ()
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

	if (!(event == 0x0001)) goto labelFunc0526_03D3;
labelFunc0526_0008:
	Func09AA();
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"Why hast thou disturbed my slumber?\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Back, creature of the undead! Thou art a thing of evil!\"");
	say();
	var0000 = UI_get_item_flag(0xFFFD, 0x0006);
	var0001 = UI_get_item_flag(0xFFFE, 0x0006);
	var0002 = UI_get_item_flag(0xFFFF, 0x0006);
	var0003 = Func097D(0xFE9B, 0x0001, 0x00E7, 0xFE99, 0xFE99);
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"And thou art the cattle upon which I prey!\" *\"Who sent thee to destroy Vasculio? Was it those rotting worms of Moonshade?\" *\"I know it was! Soon I shall have my vengeance for what they have done to me!\" *\"Who sent thee? Filbercio?! Mortegro?! Gustacio?! Torrissio?!\"");
	say();
	UI_add_answer(["Filbercio", "Mortegro", "Gustacio", "Torrissio", "vengeance"]);
labelFunc0526_0088:
	converse attend labelFunc0526_03D2;
	case "bye" attend labelFunc0526_00BC:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"Foolish mortal! The time hath come to relieve thee of the burden of thy life for it is also my time to feed!\"");
	say();
	Func09AD(0xFEDA);
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFEDA, "@Enjoy thy death!@", 0x0000);
	abort;
labelFunc0526_00BC:
	case "Filbercio" attend labelFunc0526_00E8:
	UI_remove_answer("Mortegro");
	UI_remove_answer("Gustacio");
	UI_remove_answer("Torrissio");
	UI_remove_answer("Filbercio");
	message("\"Do not mention the wretched name of Filbercio in my presence! He is the one who sentenced me to die!\" *\"If that swine ever comes near me, I assure thee he will pay, and pay dearly.\"");
	say();
	var0004 = true;
labelFunc0526_00E8:
	case "Mortegro" attend labelFunc0526_0114:
	UI_remove_answer("Filbercio");
	UI_remove_answer("Gustacio");
	UI_remove_answer("Torrissio");
	UI_remove_answer("Mortegro");
	message("\"That despicable interloper Mortegro interfered with mine experiments, and betrayed me to the Council of Mages!\"");
	say();
	var0005 = true;
labelFunc0526_0114:
	case "Gustacio" attend labelFunc0526_0140:
	UI_remove_answer("Filbercio");
	UI_remove_answer("Torrissio");
	UI_remove_answer("Gustacio");
	UI_remove_answer("Mortegro");
	message("\"I always hated that insufferable Gustacio! Always flaunting his influence, willing to betray any ideal to preserve his false sense of dignity!\"");
	say();
	var0006 = true;
labelFunc0526_0140:
	case "Torrissio" attend labelFunc0526_016C:
	UI_remove_answer("Filbercio");
	UI_remove_answer("Gustacio");
	UI_remove_answer("Mortegro");
	UI_remove_answer("Torrissio");
	message("\"Ha! He is the most despised one of all! He broke our alliance and betrayed me to the Council of Mages!\"");
	say();
	var0007 = true;
labelFunc0526_016C:
	if (!(var0007 || (var0006 || (var0005 || var0004)))) goto labelFunc0526_0192;
	message("\"Bah! They concern me not!\"");
	say();
	var0007 = false;
	var0006 = false;
	var0005 = false;
	var0004 = false;
labelFunc0526_0192:
	case "vengeance" attend labelFunc0526_03CF:
	UI_remove_answer("vengeance");
	UI_add_answer("bye");
	if (!var0003) goto labelFunc0526_02A3;
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"Ah! But thou dost have the Magebane! I will make thee a deal then, Avatar. In exchange for thy blue sword I shall teach thee my greatest spell, one that can dispatch any foe. Dost thou agree?\"");
	say();
	if (!var0000) goto labelFunc0526_01D4;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Avatar, do not trust him!\"");
	say();
	UI_remove_npc_face1();
labelFunc0526_01D4:
	if (!var0001) goto labelFunc0526_01EC;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Do not bargain with this devil, Avatar!\"");
	say();
	UI_remove_npc_face1();
labelFunc0526_01EC:
	if (!var0002) goto labelFunc0526_0204;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Avatar, thou must refuse!\"");
	say();
	UI_remove_npc_face1();
labelFunc0526_0204:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"Avatar, ignore the whimperings of thy companions! I will trade thee thy sword for a scroll that can let thee strike men dead! What sayest thou to the bargain?\"");
	say();
	var0008 = Func0955();
	if (!var0008) goto labelFunc0526_027F;
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"I knew thou couldst not resist a chance at such power!\" *\"Take this scroll. It will vanquish any foe who threatens thee.\"");
	say();
	var0009 = Func099B(0xFE9C, 0x0001, 0x02CB, 0x0041, 0xFE99, 0x0000, true);
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"Fool! Now I have the weapon that thou couldst have slain me with! Thou hast sealed thy fate for no mere mortal can defeat me! Prepare to die, foolish mortal!\"");
	say();
	var0009 = UI_remove_party_items(0x0001, 0x00E7, 0xFE99, 0xFE99, 0x0000);
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@Enjoy thy death!@", 0x0000);
	abort;
	goto labelFunc0526_02A0;
labelFunc0526_027F:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"Then thou dost leave me no choice!\"");
	say();
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@Enjoy thy death!@", 0x0000);
	abort;
labelFunc0526_02A0:
	goto labelFunc0526_03BC;
labelFunc0526_02A3:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"Thou hast sealed thy fate for no mere mortal can defeat me! Prepare for thy death!\"");
	say();
	if (!(var0000 || (var0001 || var0002))) goto labelFunc0526_03BC;
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"But I can be merciful. I will spare thee, Avatar, if thou wilt give me one of thy companions. I hunger for fresh blood. Dost thou accept mine offer?\"");
	say();
	if (!var0000) goto labelFunc0526_02E5;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"The Avatar will not accept thine offer, foul fiend!\"");
	say();
	UI_remove_npc_face1();
labelFunc0526_02E5:
	if (!var0001) goto labelFunc0526_02FD;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Thou art wasting thy fetid breath making the Avatar such an offer!\"");
	say();
	UI_remove_npc_face1();
labelFunc0526_02FD:
	if (!var0002) goto labelFunc0526_0315;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Thou wilt not accept this ghoul's offer, wilt thou, Avatar?\"");
	say();
	UI_remove_npc_face1();
labelFunc0526_0315:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"So, Avatar, wilt thou listen to the whimperings of thy companions, or trade their life for thine own?\"");
	say();
	message("\"True, they do not compare to thee, but I am not too selective in my tastes. One flesh is as good as another when one hungers.\"");
	say();
	var000A = Func0955();
	if (!var000A) goto labelFunc0526_039B;
	if (!var0000) goto labelFunc0526_034B;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Well, I certainly do not intend to go along with this at all!\"");
	say();
	UI_remove_npc_face1();
labelFunc0526_034B:
	if (!var0001) goto labelFunc0526_0363;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Avatar, how couldst thou?! Thou canst forget all about this idea!\"");
	say();
	UI_remove_npc_face1();
labelFunc0526_0363:
	if (!var0002) goto labelFunc0526_0377;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"This is not funny in the least, Avatar.\"");
	say();
labelFunc0526_0377:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"A pity! Then what I do not receive willingly, I will have to take by force!\"");
	say();
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@Enjoy thy death!@", 0x0000);
	abort;
	goto labelFunc0526_03BC;
labelFunc0526_039B:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("\"A pity! Then what I do not receive willingly, I will have to take by force!\"");
	say();
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@Enjoy thy death!@", 0x0000);
	abort;
labelFunc0526_03BC:
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@Enjoy thy death!@", 0x0000);
	abort;
labelFunc0526_03CF:
	goto labelFunc0526_0088;
labelFunc0526_03D2:
	endconv;
labelFunc0526_03D3:
	if (!(event == 0x0002)) goto labelFunc0526_0518;
	if (!(UI_get_item_shape(item) == 0x024C)) goto labelFunc0526_03F6;
	Func097F(0xFEDA, "@Back to the pit!@", 0x0001);
	goto labelFunc0526_0518;
labelFunc0526_03F6:
	if (!(UI_get_item_shape(item) == 0x00F3)) goto labelFunc0526_0433;
	var000B = UI_get_object_position(0xFE9C);
	if (!(!gflags[0x0248])) goto labelFunc0526_0430;
	gflags[0x0248] = true;
	var000C = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x55, 0x0526]);
labelFunc0526_0430:
	goto labelFunc0526_0518;
labelFunc0526_0433:
	var000D = UI_get_object_position(0xFE9C);
	var000E = UI_find_nearby(0xFE9C, 0x00F3, 0x0028, 0x0000);
	if (!var000E) goto labelFunc0526_050C;
	var000B = UI_get_object_position(var000E);
	if (!(UI_get_item_frame(var000E) == 0x0000)) goto labelFunc0526_04C5;
	UI_play_sound_effect(0x0077);
	UI_obj_sprite_effect(var000E, 0x003D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000C = UI_execute_usecode_array(var000E, [(byte)0x46, 0x0003, (byte)0x27, 0x0002, (byte)0x46, 0x0001]);
	var000C = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0526], 0x0012);
	abort;
labelFunc0526_04C5:
	if (!(UI_get_item_frame(var000E) == 0x0001)) goto labelFunc0526_0509;
	UI_play_sound_effect(0x002A);
	var000B[0x0002] = (var000B[0x0002] + 0x0002);
	UI_move_object(0xFEDA, var000B);
	var000C = UI_execute_usecode_array(0xFEDA, [(byte)0x59, 0x0004]);
	goto labelFunc0526_0008;
labelFunc0526_0509:
	goto labelFunc0526_0518;
labelFunc0526_050C:
	Func097F(0xFE9C, "@Spooky place.@", 0x0001);
labelFunc0526_0518:
	return;
}


