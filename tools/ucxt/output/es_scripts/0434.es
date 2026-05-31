#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0946 0x946 ();
extern void Func0947 0x947 ();
extern void Func0948 0x948 ();
extern void Func092E 0x92E (var var0000);

void Func0434 object#(0x434) ()
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

	if (!(event == 0x0001)) goto labelFunc0434_037C;
	UI_show_npc_face(0xFFCC, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCC));
	var0003 = UI_part_of_day();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0085]) goto labelFunc0434_0059;
	UI_add_answer("Jeanette");
labelFunc0434_0059:
	if (!gflags[0x00CB]) goto labelFunc0434_0066;
	UI_add_answer("made bread");
labelFunc0434_0066:
	var0005 = Func0931(0xFE9B, 0x0001, 0x035F, 0xFE99, 0x000E);
	var0006 = Func0931(0xFE9B, 0x0001, 0x035F, 0xFE99, 0x000F);
	if (!(var0005 || var0006)) goto labelFunc0434_00A1;
	UI_add_answer("sell flour");
labelFunc0434_00A1:
	if (!(!gflags[0x00B5])) goto labelFunc0434_00B3;
	message("You see a very clean-looking, portly young man who waves at you frantically.");
	say();
	gflags[0x00B5] = true;
	goto labelFunc0434_00B7;
labelFunc0434_00B3:
	message("\"Ah, hello there! Good to see thee again!\" says Willy.");
	say();
labelFunc0434_00B7:
	converse attend labelFunc0434_0371;
	case "name" attend labelFunc0434_00CD:
	message("\"My given name is Wilhelm, although no one calls me that. I prefer to be addressed as Willy. Thank thee very much.\"");
	say();
	UI_remove_answer("name");
labelFunc0434_00CD:
	case "job" attend labelFunc0434_0190:
	message("\"I am the baker here in Britain and I make the sweetest bread thou hast ever tasted! ");
	say();
	if (!(var0002 == 0x0012)) goto labelFunc0434_018C;
	message("\"Hast thou had a chance to sample any of my bread yet?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0434_0161;
	message("\"Ah, then thou dost agree it is the sweetest, dost thou not?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0434_015A;
	message("\"Ha! Thou dost see, then? Everyone agrees! That should be proof enough!\"");
	say();
	var0004 = Func08F7(0xFFFE);
	if (!var0004) goto labelFunc0434_0157;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"I want some!\"*");
	say();
	UI_show_npc_face(0xFFCC, 0x0000);
	message("\"Here thou art, laddie.\" Willy hands Spark a pastry and the boy devours it in one gulp.*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Mmmmm! I say, ");
	message(var0001);
	message(", I think we need a lot of this for the road. We had best buy some, all right?\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFCC, 0x0000);
labelFunc0434_0157:
	goto labelFunc0434_015E;
labelFunc0434_015A:
	message("\"Thou dost not?! Why, do not be ridiculous! Of course thou dost!\"");
	say();
labelFunc0434_015E:
	goto labelFunc0434_017C;
labelFunc0434_0161:
	message("\"Then here, thou must have some!\" He tears a piece of bread off of one of several loaves he is carrying and stuffs it into your mouth. \"There! Is it not the sweetest bread thou hast ever tasted? It is, is it not?!\" You chew as fast as you can in order to answer him.");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0434_0178;
	message("He grabs your face by the cheeks and plants a big kiss on your forehead. \"Thou art truly a person of good palate and refined taste!\"");
	say();
	goto labelFunc0434_017C;
labelFunc0434_0178:
	message("Dejectedly Willy looks down at the loaf of bread he is carrying. He sniffs at it twice and tosses it out of sight.");
	say();
labelFunc0434_017C:
	UI_add_answer(["baker", "bread"]);
	goto labelFunc0434_0190;
labelFunc0434_018C:
	message("\"Please come to the bakery when it is open in daytime hours and thou shalt sample some!\"");
	say();
labelFunc0434_0190:
	case "baker" attend labelFunc0434_01BA:
	message("He nods. \"Yes, I am a baker and I have many secret recipes passed down to me by my father and mother. Why, there are even those who say I am a master baker!");
	say();
	message("\"And there are those who call me a... doughnut,\" he says with a frown.");
	say();
	UI_remove_answer("baker");
	UI_add_answer(["secret recipes", "father and mother", "master baker", "doughnut"]);
labelFunc0434_01BA:
	case "secret recipes" attend labelFunc0434_01CD:
	message("\"Oh, dear. Do not tell me that thou art yet another person who is trying to pry one of my secret recipes out of me! If that is what thou art after then thou wilt just be disappointed!\"");
	say();
	UI_remove_answer("secret recipes");
labelFunc0434_01CD:
	case "father and mother" attend labelFunc0434_01E7:
	message("Willy wipes away a tear. \"Gone. Both of them. Gone to join mine ancestors in that great kitchen in the sky. I will never be able to cook as they did. Still I plod along, trying to keep the family name alive, and that is why I am a baker. But I suppose it is not the only reason.\"");
	say();
	UI_remove_answer("father and mother");
	UI_add_answer("why");
labelFunc0434_01E7:
	case "master baker" attend labelFunc0434_01FE:
	message("\"Yes, many people tell me that. Now thou dost say it, too. If thou dost say so, then it must be true!\"");
	say();
	message("Willy takes a bite of his own bread. \"Mmmm. I -am- a master baker!\"");
	say();
	UI_remove_answer("master baker");
labelFunc0434_01FE:
	case "doughnut" attend labelFunc0434_0211:
	message("He gives you a long puzzled look. After a moment he takes one of his loaves of bread and swats you over the head with it.");
	say();
	UI_remove_answer("doughnut");
labelFunc0434_0211:
	case "why" attend labelFunc0434_022B:
	message("\"Actually, there is a very good reason why I am a baker.\"");
	say();
	UI_remove_answer("why");
	UI_add_answer("reason");
labelFunc0434_022B:
	case "reason" attend labelFunc0434_0245:
	message("\"Because the way to a woman's heart is through her stomach. Why, I have two women in love with me right now and I did not even have to pursue either one.\"");
	say();
	UI_remove_answer("reason");
	UI_add_answer("two women");
labelFunc0434_0245:
	case "two women" attend labelFunc0434_0265:
	message("He sighs. \"If thou must know, their names are Jeanette and Gaye.\"");
	say();
	UI_remove_answer("two women");
	UI_add_answer(["Jeanette", "Gaye"]);
labelFunc0434_0265:
	case "Jeanette" attend labelFunc0434_0278:
	message("\"Jeanette is a pleasant enough girl, but to be honest I cannot see myself with a tavern wench. She thinks I have not noticed how she feels about me. Frankly, I wish she would just leave me alone.\"");
	say();
	UI_remove_answer("Jeanette");
labelFunc0434_0278:
	case "Gaye" attend labelFunc0434_028B:
	message("\"Gaye, who runs the costume shoppe, is of more interest to me. But she is a Fellowship member and I have no wish to become one. I hope that it does not prevent us from courting.\"");
	say();
	UI_remove_answer("Gaye");
labelFunc0434_028B:
	case "bread" attend labelFunc0434_02AB:
	message("\"My bread is the finest in Britannia. It is renown for both its pleasant taste and its very reasonable price. But it is a lot of work making enough to satisfy the constant demand for it. I need to hire someone to help me.\"");
	say();
	UI_remove_answer("bread");
	UI_add_answer(["buy", "hire"]);
labelFunc0434_02AB:
	case "buy" attend labelFunc0434_02E5:
	if (!(var0002 == 0x0012)) goto labelFunc0434_02DA;
	message("\"I not only have bread for sale, but pastries, cakes and rolls as well. The most delicious baked goods thou couldst ever wish to pop into thy mouth! Wouldst thou like to buy some?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0434_02D3;
	Func0946();
	goto labelFunc0434_02D7;
labelFunc0434_02D3:
	message("\"If thou wert a person of truly refined taste, thou wouldst buy some!\"");
	say();
labelFunc0434_02D7:
	goto labelFunc0434_02DE;
labelFunc0434_02DA:
	message("\"I am afraid the bakery is closed. Please come back during normal business hours.\"");
	say();
labelFunc0434_02DE:
	UI_remove_answer("buy");
labelFunc0434_02E5:
	case "hire" attend labelFunc0434_033F:
	if (!(var0002 == 0x0012)) goto labelFunc0434_0334;
	message("\"Thou couldst work for me here in the shoppe making bread. Or I will buy sacks of flour from thee. Thou couldst buy them wholesale in Paws, and I will pay thee 4 gold per sack.\"");
	say();
	message("\"Dost thou wish to work here in the shoppe for me?\" Willy asks hopefully.");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0434_032D;
	message("\"Excellent! Thou canst start work immediately! I shall pay thee 5 gold for every five loaves of bread thou dost make. All right?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0434_0326;
	gflags[0x00CB] = true;
	message("\"First thou must make dough from the flour. Simply spread some flour out on the table, add some water to make it thick and, well, doughy. Then use the dough in the oven to bake it. Wait a bit, then-- voila! Thou dost have bread!\"");
	say();
	goto labelFunc0434_032A;
labelFunc0434_0326:
	message("\"Very well. But I warn thee that employment is hard to obtain in these times!\"");
	say();
labelFunc0434_032A:
	goto labelFunc0434_0331;
labelFunc0434_032D:
	message("\"'Tis a pity thou art unavailable. Thou dost look like one who doth know their way around a kitchen.\"");
	say();
labelFunc0434_0331:
	goto labelFunc0434_0338;
labelFunc0434_0334:
	message("\"I would be happy to talk with thee about employment at my shoppe during normal business hours.\"");
	say();
labelFunc0434_0338:
	UI_remove_answer("hire");
labelFunc0434_033F:
	case "made bread" attend labelFunc0434_0351:
	Func0947();
	UI_remove_answer("made bread");
labelFunc0434_0351:
	case "sell flour" attend labelFunc0434_0363:
	Func0948();
	UI_remove_answer("sell flour");
labelFunc0434_0363:
	case "bye" attend labelFunc0434_036E:
	goto labelFunc0434_0371;
labelFunc0434_036E:
	goto labelFunc0434_00B7;
labelFunc0434_0371:
	endconv;
	message("\"Good day to thee, ");
	message(var0000);
	message(", and bon appetit!\"*");
	say();
labelFunc0434_037C:
	if (!(event == 0x0000)) goto labelFunc0434_0403;
	var0003 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCC));
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0012)) goto labelFunc0434_03FD;
	if (!(var000D == 0x0001)) goto labelFunc0434_03C0;
	var000E = "@Luscious bread!@";
labelFunc0434_03C0:
	if (!(var000D == 0x0002)) goto labelFunc0434_03D0;
	var000E = "@Delicious pastries!@";
labelFunc0434_03D0:
	if (!(var000D == 0x0003)) goto labelFunc0434_03E0;
	var000E = "@Bread fit for a king!@";
labelFunc0434_03E0:
	if (!(var000D == 0x0004)) goto labelFunc0434_03F0;
	var000E = "@Fresh pastries!@";
labelFunc0434_03F0:
	UI_item_say(0xFFCC, var000E);
	goto labelFunc0434_0403;
labelFunc0434_03FD:
	Func092E(0xFFCC);
labelFunc0434_0403:
	return;
}


