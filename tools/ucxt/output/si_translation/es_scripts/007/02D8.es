#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func02D8 shape#(0x2D8) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc02D8_0045;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 != 0x0001)) goto labelFunc02D8_001B;
	abort;
labelFunc02D8_001B:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Help!@"]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x02D8, 0x0000], 0x0005);
labelFunc02D8_0045:
	if (!(event == 0x0002)) goto labelFunc02D8_01F6;
	UI_show_npc_face0(0xFEFE, 0x0000);
	message("\"I am trapped! Help me!\"");
	say();
	UI_add_answer(["name", "Trapped?", "bye"]);
labelFunc02D8_006B:
	converse attend labelFunc02D8_01F5;
	case "name" attend labelFunc02D8_0095:
	UI_remove_answer("name");
	message("\"I am Shriash. Though I am only a little girl, thou must know that I am a faithful follower of Chaos.\"");
	say();
	message("\"I belong to the Temple of Emotion.\"");
	say();
	UI_add_answer(["girl", "Chaos", "Emotion"]);
labelFunc02D8_0095:
	case "girl" attend labelFunc02D8_00AC:
	UI_remove_answer("girl");
	message("\"Well, perhaps I am not a little girl anymore. My soul hath been trapped here in this rock for eons!\"");
	say();
	message("\"If there is such a thing as a little spirit girl, then that is what I am.\"");
	say();
labelFunc02D8_00AC:
	case "Chaos" attend labelFunc02D8_00C7:
	UI_remove_answer("Chaos");
	message("\"My father says that Chaos is the True Path, and that the Chaos Serpent will lead us to a better life.\"");
	say();
	message("\"Chaos is the strong limb, and it cannot be beaten. It is like a rope made of many strands, many yet unified.\"");
	say();
	message("\"But we were defeated, here...\"");
	say();
labelFunc02D8_00C7:
	case "Emotion" attend labelFunc02D8_00E6:
	UI_remove_answer("Emotion");
	message("\"Emotion is the energy that drives the soul. There is both good and bad energy, combined chaotically.\"");
	say();
	message("\"There is love and hatred, despair and joy. Without these, Men would cease to be Men.\"");
	say();
	message("\"Without love, we could not live in peace. If we did not have joy, life would be pointless.\"");
	say();
	message("\"Thus, Emotion is the most important of the Virtues.\"");
	say();
labelFunc02D8_00E6:
	case "Trapped?" attend labelFunc02D8_0106:
	UI_remove_answer("Trapped?");
	message("\"I was caught in a great battle. The powerful magic the soldiers unleashed left my soul caught here in this wall.\"");
	say();
	UI_add_answer(["soldiers", "wall"]);
labelFunc02D8_0106:
	case "soldiers" attend labelFunc02D8_0128:
	UI_remove_answer("soldiers");
	message("\"They were led by the Master of Ethicality, and his magic wrecked the Temple. My parents were slain, and my brother taken prisoner.\"");
	say();
	message("\"No one from the Temple survived to free me from my fate.\"");
	say();
	message("\"But Balance was preserved -- from my place here in the wall, I watched as Soldiers of Chaos attacked to retake the Temple. All of the Soldiers of Ethicality were slain, to the last man.\"");
	say();
	UI_add_answer("Temple");
labelFunc02D8_0128:
	case "Temple" attend labelFunc02D8_0149:
	UI_remove_answer("Temple");
	message("\"This place is the Temple of Emotion. It is a structure consecrated to the Virtue of Emotion.\"");
	say();
	message("\"We would come here yearly to hear the words of the Master of Emotion, and to drink of the Water of the Temple.\"");
	say();
	UI_add_answer(["Water"]);
labelFunc02D8_0149:
	case "Water" attend labelFunc02D8_0164:
	UI_remove_answer("Water");
	message("\"It was such a wonderful ceremony! The old Master would pass from chamber to chamber, collecting the four Lodestones of Emotion...\"");
	say();
	message("\"One year I was chosen to sing in the chorus, and we followed behind him, tossing flower petals and singing the Hymns of Chaos.\"");
	say();
	message("\"When the Master placed the four lodestones around the pond, however, we were all silent. For thus the ordinary water became the true and rightful Water of Emotion.\"");
	say();
labelFunc02D8_0164:
	case "wall" attend labelFunc02D8_0188:
	UI_remove_answer("wall");
	message("\"I am trapped within this wall. My soul hath occupied this place for many, many years.\"");
	say();
	message("\"Sometimes, I despair of ever being free to enter the Void.\"");
	say();
	UI_add_answer(["free", "Void"]);
labelFunc02D8_0188:
	case "free" attend labelFunc02D8_01A3:
	UI_remove_answer("free");
	message("\"If thou couldst smash the Pedestal of Love, that would release some of the ancient powers of the Temple. The Pedestal lies in the middle of this room. It looks like unto a broken column now, but that is because it is so old.\"");
	say();
	message("\"I am sure that this would free me from the stone...\"");
	say();
	message("\"But it might kill thee! Or worse, thou mightest be trapped in this wall in my place!\"");
	say();
labelFunc02D8_01A3:
	case "Void" attend labelFunc02D8_01BE:
	UI_remove_answer("Void");
	message("\"Dost thou know nothing? When we die, our bodies are placed in the ground, but our souls rise to the Void.\"");
	say();
	message("\"There, we shall unite with the Chaos Serpent. He too dwells in the Void between the Worlds.\"");
	say();
	message("\"This is what my father taught me.\"");
	say();
labelFunc02D8_01BE:
	case "bye" attend labelFunc02D8_01F2:
	Func097F(0xFE9C, "@Goodbye.@", 0x0000);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Please help me!@"], 0x0005);
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	goto labelFunc02D8_01F5;
labelFunc02D8_01F2:
	goto labelFunc02D8_006B;
labelFunc02D8_01F5:
	endconv;
labelFunc02D8_01F6:
	return;
}


