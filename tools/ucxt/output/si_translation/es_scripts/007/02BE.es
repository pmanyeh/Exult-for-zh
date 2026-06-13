#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func02BE shape#(0x2BE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x000E)) goto labelFunc02BE_0033;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	if (!gflags[0x01BC]) goto labelFunc02BE_002F;
	event = 0x000A;
	goto labelFunc02BE_0033;
labelFunc02BE_002F:
	event = 0x000B;
labelFunc02BE_0033:
	if (!(event == 0x000A)) goto labelFunc02BE_007F;
	UI_show_npc_face0(0xFEF0, 0x0000);
	message("\"It is a phoenix egg. It is obviously quite rare, and it possesses magical qualities that go beyond explanation.\"");
	say();
	var0002 = Func099B(0xFE9C, 0x0001, 0x0289, 0x0000, 0x0001, 0x0000, true);
	gflags[0x01BC] = true;
	gflags[0x0007] = true;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x02BE], 0x0002);
labelFunc02BE_007F:
	if (!((event == 0x000B) || ((event == 0x0001) || (event == 0x0002)))) goto labelFunc02BE_02EA;
	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc02BE_00FA;
	if (!((event == 0x0002) && gflags[0x0007])) goto labelFunc02BE_00DF;
	UI_play_sound_effect(0x000F);
	UI_si_path_run_usecode(item, [0x0862, 0x04AE, 0x0000], 0x000B, item, 0x02BE, true);
	gflags[0x0007] = false;
	abort;
	goto labelFunc02BE_00FA;
labelFunc02BE_00DF:
	UI_show_npc_face0(0xFEF0, 0x0000);
	message("\"Greetings to thee!\"");
	say();
	UI_add_answer(["name", "bye"]);
labelFunc02BE_00FA:
	if (!(event == 0x000B)) goto labelFunc02BE_0121;
	UI_show_npc_face0(0xFEF0, 0x0000);
	message("\"That is the greatest gift that I can give to thee. Use it wisely.\"");
	say();
	UI_play_sound_effect(0x000F);
	UI_add_answer(["bye"]);
labelFunc02BE_0121:
	gflags[0x0007] = false;
	if (!gflags[0x01BC]) goto labelFunc02BE_0132;
	UI_add_answer("domain");
labelFunc02BE_0132:
	converse attend labelFunc02BE_02E9;
	case "name" attend labelFunc02BE_0159:
	UI_remove_answer("name");
	message("\"Name? Oh, my, what a formality! First thou hast saved my life and then thou dost ask my name! Thou art a curiosity!\"");
	say();
	message("\"No one hath asked me my real name in several hundred years! I have always been called simply Phoenix.\"");
	say();
	UI_add_answer(["real name", "phoenix"]);
labelFunc02BE_0159:
	case "real name" attend labelFunc02BE_017D:
	UI_remove_answer("real name");
	message("\"It is a sound thou wouldst find most unpronounceable. My name is a word in the language of my kind that roughly translates as 'Skyrise'.\"");
	say();
	message("\"It is a popular name among my kind. But enough of that! I wish to thank thee for thy deed...\"");
	say();
	UI_add_answer(["Skyrise", "thou art welcome"]);
labelFunc02BE_017D:
	case "Skyrise" attend labelFunc02BE_0194:
	UI_remove_answer("Skyrise");
	message("\"I was named after a famous Phoenix queen. She was so beautiful that a dragon came to court her!\"");
	say();
	message("\"Canst thou imagine? After many rejections, she at last agreed to go away with him. And then she flew away with the dragon, into the sky!\"");
	say();
labelFunc02BE_0194:
	case "thou art welcome" attend labelFunc02BE_01ED:
	UI_remove_answer("thou art welcome");
	if (!gflags[0x01BC]) goto labelFunc02BE_01B0;
	message("\"It is rare to find a stranger who is so well-mannered! I do hope that thou didst enjoy the egg I gave to thee!\"");
	say();
	goto labelFunc02BE_01ED;
labelFunc02BE_01B0:
	message("\"As a token of mine appreciation, I shall give thee the most valuable possession I could bestow upon thee.\"");
	say();
	var0004 = UI_get_object_position(0xFE9C);
	UI_si_path_run_usecode(item, [(var0004[0x0001] + 0x0001), (var0004[0x0002] + 0x0001), 0x0000], 0x000A, item, 0x02BE, true);
	UI_play_sound_effect(0x000F);
	abort;
labelFunc02BE_01ED:
	case "phoenix" attend labelFunc02BE_020A:
	UI_remove_answer("phoenix");
	message("\"Thou hast never met such a creature before...? If thou dost wish it I shall tell thee my tale.\"");
	say();
	UI_add_answer(["tale"]);
labelFunc02BE_020A:
	case "tale" attend labelFunc02BE_022A:
	UI_remove_answer("tale");
	message("\"The phoenix are creatures of fate. We are naturally drawn to places where the balance between Order and Chaos hath been upset.\"");
	say();
	UI_add_answer(["fate", "balance"]);
labelFunc02BE_022A:
	case "fate" attend labelFunc02BE_024E:
	UI_remove_answer("fate");
	message("\"Fate is a force that is eternal. This is why those of my kind can never truly die.\"");
	say();
	message("\"Although we may lose our lives, we are reborn from the ashes of our own funeral pyres.\"");
	say();
	UI_add_answer(["eternal", "pyres"]);
labelFunc02BE_024E:
	case "balance" attend labelFunc02BE_0265:
	UI_remove_answer("balance");
	message("\"As the course of destiny calls us to many places and many worlds throughout the universe, mine ancestors grew wings to travel far.\"");
	say();
	message("\"I flew between the Serpent Pillars to reach this place. I suspect that is how thou didst come here thyself.\"");
	say();
labelFunc02BE_0265:
	case "eternal" attend labelFunc02BE_027C:
	UI_remove_answer("eternal");
	message("\"Now that there is a living phoenix in this world, the balance between Order and Chaos can be restored.\"");
	say();
	message("\"A happy thought, no?\"");
	say();
labelFunc02BE_027C:
	case "pyres" attend labelFunc02BE_0293:
	UI_remove_answer("pyres");
	message("\"The flames of the pyres are a rebirth. They represent change. If the balance between Order and Chaos is misaligned, 'tis thee who must change it.\"");
	say();
	message("\"I wish thee luck in all thine endeavors!\"");
	say();
labelFunc02BE_0293:
	case "domain" attend labelFunc02BE_02BD:
	UI_remove_answer("domain");
	message("\"Dost thou wish to spend more time in my domain?\"");
	say();
	var0005 = Func0955();
	if (!var0005) goto labelFunc02BE_02B9;
	message("\"Wonderful! Feel free to stay as long as thou wouldst like, though thou mightest find it to be on the warm side.\"");
	say();
	goto labelFunc02BE_02BD;
labelFunc02BE_02B9:
	message("\"If thou dost wish to leave, thou canst return to the place from whence thou camest through a mystical means of unknown origin. The means lies beyond my lair.\"");
	say();
labelFunc02BE_02BD:
	case "bye" attend labelFunc02BE_02E6:
	message("\"I wish thee good fortune, and once again I thank thee for restoring me.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(item, "@Balance to thee.@", 0x0005);
	goto labelFunc02BE_02E9;
labelFunc02BE_02E6:
	goto labelFunc02BE_0132;
labelFunc02BE_02E9:
	endconv;
labelFunc02BE_02EA:
	return;
}


