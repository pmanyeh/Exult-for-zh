#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);

void Func0423 object#(0x423) ()
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
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = Func0942(0xFFDC);
	var0003 = Func0942(0xFFDE);
	var0004 = UI_get_item_flag(0xFFDD, 0x001C);
	var0005 = Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010);
	var0006 = Func097D(0xFE9B, 0x0001, 0x0252, 0xFE99, 0xFE99);
	var0007 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	var0008 = Func097D(0xFE9B, 0x0001, 0x022B, 0xFE99, 0xFE99);
	var0009 = Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x0005);
	var000A = Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x000B);
	var000B = Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x000C);
	var000C = Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001);
	var000D = Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003);
	var000E = Func097D(0xFE9B, 0x0001, 0x0281, 0x00CA, 0x000C);
	if (!((event == 0x0002) || (event == 0x000E))) goto labelFunc0423_01CA;
	if (!gflags[0x0007]) goto labelFunc0423_018D;
	gflags[0x0007] = false;
	UI_show_npc_face0(0xFFDD, 0x0000);
	message("\"At last, the labor of a lifetime hath come to consummation! I think Boydon hath been created rather well. Thou hast done an excellent job in assisting me in his creation.\"");
	say();
	message("\"For thine excellent work I shall reward thee. Here is the key to my storeroom. There thou wilt find the secret of teleportation. It is an old serpent jawbone.\"");
	say();
	gflags[0x01C9] = true;
	message("\"Also, please take this serpent tooth as a token of mine appreciation.\"");
	say();
	var000F = Func099B(0xFE9C, 0x0001, 0x0281, 0x00CA, 0x000C, 0x0000, true);
	var000F = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x000B, false, true);
	gflags[0x01C3] = true;
	UI_show_npc_face0(0xFFDD, 0x0000);
	message("\"Once thou hast found the jawbone, return to me -- for I have something else to give thee as well.\"");
	say();
	Func097F(0xFFDD, "@See thee soon...@", 0x0000);
	Func097F(0xFE9C, "@I shall return!@", 0x0008);
	abort;
	goto labelFunc0423_01CA;
labelFunc0423_018D:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	var000F = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x0636], 0x0001);
	UI_move_object(0xFE9B, [0x07F6, 0x04C5, 0x0000]);
labelFunc0423_01CA:
	if (!(event == 0x0001)) goto labelFunc0423_01F8;
	UI_item_say(0xFE9C, "@Might we speak?@");
	0xFFDD->Func07D1();
	Func097F(0xFFDD, "@No!@", 0x0002);
	UI_set_schedule_type(0xFFDD, 0x0003);
labelFunc0423_01F8:
	if (!(event == 0x0009)) goto labelFunc0423_0B25;
	UI_run_schedule(0xFFDD);
	UI_clear_item_say(0xFFDD);
	UI_show_npc_face0(0xFFDD, 0x0000);
	if (!(!gflags[0x01BF])) goto labelFunc0423_0265;
	message("\"Begone from my sight! Thy meddling in my business is unwelcome, stranger!\"");
	say();
	message("\"Thou dost have the distinct bearing of a Britannian about thee! No doubt thou art some fiend in league with that evil Beast British!\"");
	say();
	message("\"Why, I ought to cast a spell on thee! I could tear thee limb from limb but still leave thee alive! In fact I may do it yet! Now, out with it! Why hast thou come to disturb me here?! Bah! In truth I care not! Begone!\"");
	say();
	var0010 = Func0992(0xFFFD, "@The password! Avatar, tell him the password!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"What is this I hear?\"");
	say();
	Func094E(0xFE9C, "@A mutual friend told me to mention Iskatradeeth to thee.@");
	UI_set_conversation_slot(0x0000);
	message("\"Iskatradeeth! The password? Then I shall not feed thee to the whales...\"");
	say();
	message("\"I shall speak with thee... for the moment.\"");
	say();
	gflags[0x01BF] = true;
	goto labelFunc0423_0269;
labelFunc0423_0265:
	message("\"Why hast thou returned? Why dost thou disturb mine experiments in the secrets of immortality? What could possibly be more important than the answers to the riddle of life and death?!\"");
	say();
labelFunc0423_0269:
	if (!(!gflags[0x01C5])) goto labelFunc0423_0277;
	UI_add_answer("experiments");
labelFunc0423_0277:
	if (!(!gflags[0x01C6])) goto labelFunc0423_0285;
	UI_add_answer("immortality");
labelFunc0423_0285:
	if (!(!gflags[0x01C7])) goto labelFunc0423_0293;
	UI_add_answer("riddle of life and death");
labelFunc0423_0293:
	if (!(gflags[0x01BB] && (!gflags[0x01BD]))) goto labelFunc0423_02A5;
	UI_add_answer("Boydon");
labelFunc0423_02A5:
	if (!(!var0004)) goto labelFunc0423_02B3;
	UI_add_answer("Introduce thyself");
labelFunc0423_02B3:
	if (!(!gflags[0x01C8])) goto labelFunc0423_02C1;
	UI_add_answer("Disturb?");
labelFunc0423_02C1:
	if (!gflags[0x01C1]) goto labelFunc0423_02CE;
	UI_add_answer("jawbone");
labelFunc0423_02CE:
	if (!(gflags[0x01B7] && (!gflags[0x01B8]))) goto labelFunc0423_02ED;
	if (!gflags[0x01BC]) goto labelFunc0423_02E6;
	UI_add_answer("phoenix egg");
labelFunc0423_02E6:
	UI_add_answer("instructions");
labelFunc0423_02ED:
	if (!(gflags[0x01B8] && (!gflags[0x01BB]))) goto labelFunc0423_02FF;
	UI_add_answer("ready to create life");
labelFunc0423_02FF:
	if (!gflags[0x01BD]) goto labelFunc0423_030C;
	UI_add_answer("I have the jawbone.");
labelFunc0423_030C:
	if (!(gflags[0x01B9] && (!gflags[0x01BA]))) goto labelFunc0423_031E;
	UI_add_answer("May Boydon join?");
labelFunc0423_031E:
	if (!gflags[0x0283]) goto labelFunc0423_032B;
	UI_add_answer("blue egg");
labelFunc0423_032B:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc0423_033D;
	UI_add_answer("severed hand");
labelFunc0423_033D:
	if (!(gflags[0x027D] && (!gflags[0x028F]))) goto labelFunc0423_034F;
	UI_add_answer("lab apparatus");
labelFunc0423_034F:
	UI_add_answer("bye");
labelFunc0423_0356:
	converse attend labelFunc0423_0B24;
	case "Introduce thyself" attend labelFunc0423_037D:
	UI_remove_answer("Introduce thyself");
	message("\"I do not care to know thy name! As for myself, my fame hath grown with each passing century. I am Erstam, he whom some dare call the Mad Mage!\"");
	say();
	UI_set_item_flag(0xFFDD, 0x001C);
	UI_add_answer("Mad Mage");
labelFunc0423_037D:
	case "Mad Mage" attend labelFunc0423_0390:
	UI_remove_answer("Mad Mage");
	message("\"I said that some call me the Mad Mage! I did not give permission for thee to call me that! That is a name by which I have been called since the days when I took the dissenters of the reign of Beast British away to live here at this place.\"");
	say();
labelFunc0423_0390:
	case "Disturb?" attend labelFunc0423_03A7:
	UI_remove_answer("Disturb?");
	message("\"I am a master sorcerer, and as such I am dedicated to my life's work -- mine experiments! I am searching for the secret of immortality and to find it I must be able to answer the riddle of life and death.\"");
	say();
	gflags[0x01C8] = true;
labelFunc0423_03A7:
	case "experiments" attend labelFunc0423_03FE:
	UI_remove_answer("experiments");
	if (!(!gflags[0x01B8])) goto labelFunc0423_03FA;
	if (!gflags[0x01BB]) goto labelFunc0423_03DB;
	message("\"Now that mine initial experiment of Boydon hath been completed, my true work hath only begun. I shall now rest until I have learned all of the secrets of the universe. What? Thou art still here! I have no time to speak with thee! I have work to do!\"");
	say();
	Func097F(0xFFDD, "@Away with thee!@", 0x0003);
	gflags[0x01C5] = true;
	abort;
	goto labelFunc0423_03F7;
labelFunc0423_03DB:
	message("\"These experiments are most dangerous! If thou art faint of heart I would advise thee to stay away! As thou canst see if thou dost look around thee, these experiments are a threat to both life... and limb!\"");
	say();
	if (!(!(gflags[0x01B7] || gflags[0x01BB]))) goto labelFunc0423_03F7;
	UI_add_answer(["life", "limb"]);
labelFunc0423_03F7:
	goto labelFunc0423_03FE;
labelFunc0423_03FA:
	message("\"Thanks to thee mine experiments in the creation of life have been successful! But there is still much for me to do! Much research! Now that I have created mine own wholly unique solution to the riddle of life and death, I must begin work on solving the rest of the problems of the universe.\"");
	say();
labelFunc0423_03FE:
	case "life" attend labelFunc0423_0411:
	UI_remove_answer("life");
	message("\"The terrible science that I pursue hath taken its toll in the lives of countless assistants. But if it leads me to the secret of eternal life, the price shall be well worth it.\"");
	say();
labelFunc0423_0411:
	case "limb" attend labelFunc0423_0424:
	UI_remove_answer("limb");
	message("\"Aye, thou wilt see many of them strewn about as thou dost look around the manor.\"");
	say();
labelFunc0423_0424:
	case "immortality" attend labelFunc0423_047F:
	UI_remove_answer("immortality");
	UI_push_answers();
	UI_add_answer("change subject");
	if (!gflags[0x01B8]) goto labelFunc0423_045C;
	if (!gflags[0x01BB]) goto labelFunc0423_0455;
	message("\"With the successful creation of Boydon we have taken the first small but vitally important step in achieving that great dream of all men -- immortality!\"");
	say();
	gflags[0x01C6] = true;
	goto labelFunc0423_0459;
labelFunc0423_0455:
	message("\"Quickly! Thou must finish the experiment! On mine oath, I will be dead of old age before I can discover the secret of immortality with an assistant such as thee!\"");
	say();
labelFunc0423_0459:
	goto labelFunc0423_0460;
labelFunc0423_045C:
	message("\"Immortality represents the ultimate defeat of death. 'Tis essential that I obtain this as soon as possible... No doubt thou hast heard of or perhaps even witnessed the teleportation storms.\"");
	say();
labelFunc0423_0460:
	if (!(!var0006)) goto labelFunc0423_046E;
	message("\"It seems that I recall a strange dagger appearing in the Manor about the same time as a teleportation storm. Perhaps that dagger is still around somewhere...\"");
	say();
	goto labelFunc0423_0472;
labelFunc0423_046E:
	message("\"I see thou hast discovered the strange dagger that appeared in my Manor. Damn teleport storms! Thou hast laid claim to it as thine own, eh? Very well then, if it truly belongs to thee, thou mayest take it...\"");
	say();
labelFunc0423_0472:
	UI_add_answer(["death", "teleportation storms"]);
labelFunc0423_047F:
	case "death" attend labelFunc0423_0492:
	message("\"Unchained for all time from death and the fear of death, there would be nothing that mankind would not be capable of accomplishing! HA, ha, ha, ha, ha!\"");
	say();
	UI_remove_answer("death");
labelFunc0423_0492:
	case "teleportation storms" attend labelFunc0423_04BA:
	UI_remove_answer("teleportation storms");
	message("\"The power of teleportation is most certainly an awesome one. These storms have been wreaking havoc on us for some time. I fear that their increasing frequency and intensity most certainly signals an end of the world.\"");
	say();
	UI_add_answer("end of the world");
	if (!(!gflags[0x01BE])) goto labelFunc0423_04BA;
	UI_add_answer("teleportation");
labelFunc0423_04BA:
	case "teleportation" attend labelFunc0423_0506:
	message("\"Hrmpph... I know nothing of this foolish, dangerous power they call teleportation, dost thou hear me? Nothing! Do not ask me of this again! And do not harry my servant about it either, I warn thee!\"");
	say();
	gflags[0x01BE] = true;
	if (!var0002) goto labelFunc0423_04FF;
	UI_show_npc_face1(0xFFDC, 0x0000);
	message("\"But Master, thou dost know something of teleportation! What about the...?\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Silence thine imbecilic rantings, Vasel! Not another word from thee! Pay my silly servant no mind. He is daft in the head. I know nothing about this teleportation business. I have no secrets to share with thee!\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"So I have given away thy secret? Do not beat me! Please Master! Do not beat me!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0423_04FF:
	UI_remove_answer("teleportation");
labelFunc0423_0506:
	case "end of the world" attend labelFunc0423_0519:
	UI_remove_answer("end of the world");
	message("\"Someone must survive the end of the world. That person may as well be me.\"");
	say();
labelFunc0423_0519:
	case "riddle of life and death" attend labelFunc0423_055B:
	UI_remove_answer("riddle of life and death");
	message("\"In order to obtain the secret of achieving immortality, I must first uncover the answer to the secret of life and death. In the past when people have searched for the answer, they have only brooded over the nature of death itself. What a foolish thing to do! If there is an answer to the riddle of life and death, it can only be in the creation of life!\"");
	say();
	if (!gflags[0x01BB]) goto labelFunc0423_053D;
	message("\"Finally, the secrets of the universe are nearly within my grasp!\"");
	say();
	gflags[0x01C7] = true;
	goto labelFunc0423_055B;
labelFunc0423_053D:
	message("\"That is what I am seeking to do!\"");
	say();
	if (!gflags[0x01B8]) goto labelFunc0423_054E;
	message("\"So, hurry!\"");
	say();
	goto labelFunc0423_055B;
labelFunc0423_054E:
	UI_add_answer(["create life", "secret of immortality"]);
labelFunc0423_055B:
	case "create life" attend labelFunc0423_056E:
	UI_remove_answer("create life");
	message("\"Lately mine experiments have been halted for there is one necessary ingredient that I lack. Bah! Thou canst tell me nothing about the creation of life that would help me advance mine experiments! There is no point in speaking to thee of the subject!\"");
	say();
labelFunc0423_056E:
	case "secret of immortality" attend labelFunc0423_0581:
	message("\"Mine experiments in immortality have led to the demise of all of mine assistants save for Vasel. Oh, they are not dead! Why one may encounter them virtually anywhere throughout the manor. Or, at least, pieces of them.\"");
	say();
	UI_remove_answer("secret of immortality");
labelFunc0423_0581:
	case "jawbone" attend labelFunc0423_05E1:
	UI_remove_answer("jawbone");
	UI_push_answers();
	UI_add_answer("change subject");
	if (!gflags[0x01BD]) goto labelFunc0423_05A8;
	message("\"Thou art welcome to it.\"");
	say();
	goto labelFunc0423_05E1;
labelFunc0423_05A8:
	if (!(!gflags[0x01B7])) goto labelFunc0423_05C3;
	message("\"So! That little knave Vasel hath been telling thee of my magical serpent jawbone! Thou wilt not obtain it under pain of death, torture or for any price. All that concerns me is mine efforts in creating life. And there is nothing that thou canst do to aid me in that endeavor. Hmmm, or perhaps there is...\"");
	say();
	UI_add_answer(["Vasel", "What can I do?"]);
	goto labelFunc0423_05E1;
labelFunc0423_05C3:
	if (!gflags[0x01BB]) goto labelFunc0423_05D0;
	message("\"Did I not give thee the key to my storeroom? If thou canst not find it, thou art not as intelligent as I thought thou to be!\"");
	say();
	goto labelFunc0423_05E1;
labelFunc0423_05D0:
	if (!gflags[0x01BC]) goto labelFunc0423_05DD;
	message("\"Come now! Thou dost not take me for a fool, I hope! How am I to know that it is a real phoenix egg thou hast brought me unless I can first use it in mine experiments? There shall be plenty of time for this jawbone affair after mine experiment to create life hath been successfully performed. I will hear nothing more on the matter.\"");
	say();
	goto labelFunc0423_05E1;
labelFunc0423_05DD:
	message("\"We shall speak of this after thou hast helped me with mine experiment.\"");
	say();
labelFunc0423_05E1:
	case "Vasel" attend labelFunc0423_05F4:
	message("\"Concern thyself not with him. I shall deal with him later!\"");
	say();
	UI_remove_answer("Vasel");
labelFunc0423_05F4:
	case "What can I do?" attend labelFunc0423_0614:
	UI_remove_answer("What can I do?");
	message("\"There is something thou canst do for me! On the northern island there is a phoenix. Retrieve for me its egg, which is the missing ingredient that I need. I would go myself, but I am getting much too old for that sort of thing. There are terrible beasts along the way. And I do detest beasts, especially terrible ones.\"");
	say();
	UI_add_answer(["northern island", "phoenix"]);
labelFunc0423_0614:
	case "northern island" attend labelFunc0423_0627:
	UI_remove_answer("northern island");
	message("\"Thou wilt have to discover the way back by thyself. Thou canst not expect me to tell thee everything!\"");
	say();
labelFunc0423_0627:
	case "phoenix" attend labelFunc0423_06C4:
	message("\"Thou must surely be familiar with the legend of the phoenix! It dies in flames, only to rise again in rebirth from the flame. There, I thought I saw a look of recognition in thine eyes! Then it is settled. Bring to me the egg of the phoenix and in return I shall give thee the serpent jawbone. Dost thou agree to help me?\"");
	say();
	var0011 = Func0955();
	if (!var0011) goto labelFunc0423_06B9;
	message("\"Excellent! Then go and bring to me my phoenix egg. I shall send thee there immediately.\"");
	say();
	gflags[0x01B7] = true;
	var0012 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x000C, (var0012[0x0001] - 0x0002), (var0012[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000C, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x000A, 0xFFFD);
	UI_play_sound_effect(0x0077);
	var000F = UI_delayed_execute_usecode_array(0xFFDD, [(byte)0x23, (byte)0x55, 0x0423], 0x0007);
	abort;
	goto labelFunc0423_06BD;
labelFunc0423_06B9:
	message("\"Thou canst put from thy mind that serpent jawbone then!\"");
	say();
labelFunc0423_06BD:
	UI_remove_answer("phoenix");
labelFunc0423_06C4:
	case "instructions" attend labelFunc0423_0812:
	UI_remove_answer("instructions");
	if (!(gflags[0x01B7] && (!gflags[0x01B8]))) goto labelFunc0423_0801;
	message("\"Thou hast returned without my phoenix egg! Is this some kind of great meaningless joke to thee?\"");
	say();
	if (!gflags[0x01BC]) goto labelFunc0423_078B;
	var000F = Func0956(["I have the egg", "I do not have the egg"]);
	if (!(var000F == "I have the egg")) goto labelFunc0423_0715;
	message("\"Then bring it to me!\"");
	say();
	Func097F(0xFFDD, "@Fool!@", 0x0000);
	abort;
	goto labelFunc0423_0788;
labelFunc0423_0715:
	message("\"Then thou must go back to the Isle of the Phoenix!\"");
	say();
	var0012 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x000C, (var0012[0x0001] - 0x0002), (var0012[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000C, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x000A, 0xFFFD);
	UI_play_sound_effect(0x0077);
	var000F = UI_delayed_execute_usecode_array(0xFFDD, [(byte)0x23, (byte)0x55, 0x0423], 0x0007);
	abort;
labelFunc0423_0788:
	goto labelFunc0423_07FE;
labelFunc0423_078B:
	message("\"If so I do not find it funny! Thou art not playing a game, fool! Go, and do not return until thou hast completed thy promised task!\"");
	say();
	var0012 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x000C, (var0012[0x0001] - 0x0002), (var0012[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000C, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x000A, 0xFFFD);
	UI_play_sound_effect(0x0077);
	var000F = UI_delayed_execute_usecode_array(0xFFDD, [(byte)0x23, (byte)0x55, 0x0423], 0x0007);
	abort;
labelFunc0423_07FE:
	goto labelFunc0423_0812;
labelFunc0423_0801:
	message("\"Thou canst begin by gathering all the various body parts scattered throughout the Manor. That includes a torso, arms, legs, and oh, yes, make extra certain that thou dost not forget the head. Place them one by one on top of the assimilation machine. Once thou hast put all the parts and phoenix egg into the machine, Boydon shall at last become complete.");
	say();
	Func097F(0xFFDD, "@Don't forget the torso!@", 0x0000);
	abort;
labelFunc0423_0812:
	case "phoenix egg" attend labelFunc0423_0878:
	UI_remove_answer("phoenix egg");
	message("\"Dost thou have my phoenix egg?\"");
	say();
	var0013 = Func0955();
	if (!var0013) goto labelFunc0423_0873;
	var0014 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0014) goto labelFunc0423_086C;
	message("\"Now I have what I need to create life! Thou canst help me complete mine experiments! We shall begin immediately!");
	say();
	message("\"Thou canst begin by gathering all the various body parts scattered throughout the Manor. That includes a torso, arms, legs, and oh, yes, make extra certain that thou dost not forget the head. Place them within the hopper, on top of the life creation machine in the center of my laboratory. Once thou hast finished that, we shall speak again.");
	say();
	message("\"Quickly, put the egg into the machine!\"");
	say();
	gflags[0x01B8] = true;
	Func097F(0xFFDD, "@Into the machine!@", 0x0000);
	abort;
	goto labelFunc0423_0870;
labelFunc0423_086C:
	message("\"If thou dost have my phoenix egg, why dost thou not give it to me?\"");
	say();
labelFunc0423_0870:
	goto labelFunc0423_0878;
labelFunc0423_0873:
	message("\"Then we have nothing further to discuss until thou dost go and bring it to me.\"");
	say();
	abort;
labelFunc0423_0878:
	case "ready to create life" attend labelFunc0423_08C7:
	UI_remove_answer("ready to create life");
	message("\"Very good! So thou dost have all of the body parts in the vat! Two arms, two legs, and a torso?\"");
	say();
	var0015 = Func0955();
	if (!var0015) goto labelFunc0423_08B6;
	message("\"Doth that include the head?\"");
	say();
	var0016 = Func0955();
	if (!var0016) goto labelFunc0423_08AE;
	message("\"Excellent! Then wait until the life-creating reaction begins! But I warn thee, it may be dangerous. I am staying here.\"");
	say();
	goto labelFunc0423_08B3;
labelFunc0423_08AE:
	message("\"Then thou must find the head and put it in the hopper before the experiment can begin.\"");
	say();
	abort;
labelFunc0423_08B3:
	goto labelFunc0423_08C7;
labelFunc0423_08B6:
	message("\"Thou art a leadpate even worse than Vasel! Go and finish thy task and return to me!\"");
	say();
	Func097F(0xFFDD, "@Leadpate!@", 0x0000);
	abort;
labelFunc0423_08C7:
	case "Boydon" attend labelFunc0423_0926:
	UI_remove_answer("Boydon");
	message("\"I think Boydon hath been created rather well! Thou hast done an excellent job in assisting me in his creation.\"");
	say();
	if (!(!gflags[0x01C9])) goto labelFunc0423_0900;
	var0017 = Func099B(0xFE9C, 0x0001, 0x0281, 0x00CA, 0xFE99, false, true);
	message("\"Here is the key to my storeroom. There thou wilt find the secret of teleportation. It is an old serpent jawbone.\"");
	say();
	gflags[0x01C9] = true;
labelFunc0423_0900:
	if (!(!gflags[0x01C3])) goto labelFunc0423_0926;
	var0018 = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x000B, false, true);
	message("\"Also, please take this serpent tooth as a token of my appreciation. Once you have found the jawbone, please return, as I have other items for you.\"");
	say();
	gflags[0x01C3] = true;
labelFunc0423_0926:
	case "I have the jawbone." attend labelFunc0423_09CE:
	UI_remove_answer("I have the jawbone.");
	if (!(gflags[0x01C2] && (gflags[0x01C3] && gflags[0x01C4]))) goto labelFunc0423_0954;
	message("\"Yes. Very nice. I have already given thee my serpent teeth. I have no more of them. Good luck to thee.\"");
	say();
	Func097F(0xFFDD, "@Good fortune!@", 0x0000);
	abort;
labelFunc0423_0954:
	if (!(!gflags[0x01C2])) goto labelFunc0423_0982;
	message("\"Yes, I see that thou hast found thy way into my storeroom and back.\"");
	say();
	message("\"Here is a serpent's tooth. This will allow thee to travel back from whence thou didst come.\"");
	say();
	message("\"As to the method of how it works -- Thou hast proven thyself intelligent. Discern it for thyself.\"");
	say();
	var0019 = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x000C, false, true);
	gflags[0x01C2] = true;
labelFunc0423_0982:
	if (!(!gflags[0x01C3])) goto labelFunc0423_09A8;
	message("\"Here is another tooth. It will allow thee to travel back to this island. Although, I trust that it shall not be necessary to do so.\"");
	say();
	var001A = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x000B, false, true);
	gflags[0x01C3] = true;
labelFunc0423_09A8:
	if (!(!gflags[0x01C4])) goto labelFunc0423_09CE;
	message("\"Here is a tooth that will enable thee to travel to another place.\"");
	say();
	gflags[0x01C4] = true;
	var001B = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x0005, false, true);
labelFunc0423_09CE:
	case "May Boydon join?" attend labelFunc0423_09E5:
	UI_remove_answer("May Boydon join?");
	message("\"Certainly he may. It will serve my creation well to see the world. Good journey to thee. But take care. My creation may be very durable and powerful, but if his new body should be destroyed there is no force in the universe that can remake him.\"");
	say();
	gflags[0x01BA] = true;
labelFunc0423_09E5:
	case "blue egg" attend labelFunc0423_0A09:
	UI_remove_answer("blue egg");
	if (!var000D) goto labelFunc0423_0A05;
	message("\"If thou dost wish to know the mystery of that object, the answer is simple.\"");
	say();
	message("\"Glance into my telescope, and its magical view shall penetrate the universe for thee!\"");
	say();
	goto labelFunc0423_0A09;
labelFunc0423_0A05:
	message("\"Bring the item to me, and I shall discern its origin. Or perhaps I won't. We shall see.\"");
	say();
labelFunc0423_0A09:
	case "lab apparatus" attend labelFunc0423_0A56:
	UI_remove_answer("lab apparatus");
	if (!var000C) goto labelFunc0423_0A52;
	message("\"I recognize that! I have not seen it in some time, in fact.\"");
	say();
	gflags[0x028F] = true;
	var001C = UI_remove_party_items(0x0001, 0x02ED, 0xFE99, 0x0001, false);
	if (!var001C) goto labelFunc0423_0A4B;
	message("\"That rightfully belongs to me, and I find it most suspicious that thou didst come into possession of it!\"");
	say();
	message("\"But, of course! It must have been a teleportation storm!\"");
	say();
	goto labelFunc0423_0A4F;
labelFunc0423_0A4B:
	message("\"I want that back! It belongs to me!\"");
	say();
labelFunc0423_0A4F:
	goto labelFunc0423_0A56;
labelFunc0423_0A52:
	message("\"That item resembles one of my laboratory apparati -- but I don't recall that anything is missing...\"");
	say();
labelFunc0423_0A56:
	case "severed hand" attend labelFunc0423_0AEC:
	UI_remove_answer("severed hand");
	if (!(Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0000) || (Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0001) || (Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0002) || (Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0003) || (Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0004) || Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0005))))))) goto labelFunc0423_0AE8;
	message("\"That is a remnant from one of mine experiments, something for Vasel to clean after. What art thou doing carrying that thing around?\"");
	say();
	message("\"I do not know about thee... Thou art a strange one!\"");
	say();
	gflags[0x029B] = true;
	goto labelFunc0423_0AEC;
labelFunc0423_0AE8:
	message("\"Bring it to me, and I shall inspect it! It might be from one of my experiments...\"");
	say();
labelFunc0423_0AEC:
	case "change subject" attend labelFunc0423_0AFC:
	message("\"Certainly...\"");
	say();
	UI_pop_answers();
labelFunc0423_0AFC:
	case "bye" attend labelFunc0423_0B21:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Most interesting...@", 0x0000);
	Func097F(0xFFDD, "@On thy way!@", 0x0002);
	abort;
labelFunc0423_0B21:
	goto labelFunc0423_0356;
labelFunc0423_0B24:
	endconv;
labelFunc0423_0B25:
	return;
}


