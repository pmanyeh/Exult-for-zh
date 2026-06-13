#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0489 object#(0x489) ()
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

	if (!(event == 0x0001)) goto labelFunc0489_030F;
	UI_show_npc_face(0xFF77, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF77));
	var0004 = "Avatar";
	var0002 = UI_part_of_day();
	var0005 = UI_is_pc_female();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0180]) goto labelFunc0489_0064;
	UI_add_answer("strangers");
labelFunc0489_0064:
	if (!gflags[0x017D]) goto labelFunc0489_0071;
	UI_add_answer("locket");
labelFunc0489_0071:
	if (!gflags[0x018F]) goto labelFunc0489_007E;
	UI_add_answer("Robin");
labelFunc0489_007E:
	if (!gflags[0x0190]) goto labelFunc0489_008B;
	UI_add_answer("Battles");
labelFunc0489_008B:
	if (!gflags[0x0191]) goto labelFunc0489_0098;
	UI_add_answer("Leavell");
labelFunc0489_0098:
	if (!gflags[0x0187]) goto labelFunc0489_00A4;
	var0006 = var0000;
labelFunc0489_00A4:
	if (!gflags[0x0188]) goto labelFunc0489_00B0;
	var0006 = var0004;
labelFunc0489_00B0:
	if (!(!gflags[0x0192])) goto labelFunc0489_00C2;
	message("You see a content-looking bearded man, with deep-set laugh lines in his face and gentle eyes.");
	say();
	gflags[0x0192] = true;
	goto labelFunc0489_00C6;
labelFunc0489_00C2:
	message("\"Hey there, how are things with thee?\" says Sam.");
	say();
labelFunc0489_00C6:
	converse attend labelFunc0489_030A;
	case "name" attend labelFunc0489_0110:
	message("\"My name is Sam. I am the Flower Man. And what is thy name?\"");
	say();
	UI_push_answers();
	var0007 = Func090B([var0000, var0004]);
	if (!(var0007 == var0000)) goto labelFunc0489_00FD;
	message("\"It is nice to meet thee.\"");
	say();
	gflags[0x0187] = true;
	goto labelFunc0489_0105;
labelFunc0489_00FD:
	message("\"Fine. If thou dost wish to be the Avatar, I will not argue. Thou canst be the Avatar if thou dost want to be.\"");
	say();
	var0008 = true;
labelFunc0489_0105:
	UI_pop_answers();
	UI_remove_answer("name");
labelFunc0489_0110:
	case "job" attend labelFunc0489_0129:
	message("\"The way I perceive it I do not really have a job. I sell flowers to the people of New Magincia. Although I am paid for it, it is something I enjoy doing very much. I wonder, does that still qualify as a job?\" He scratches his chin thoughtfully.");
	say();
	UI_add_answer(["flowers", "New Magincia"]);
labelFunc0489_0129:
	case "flowers" attend labelFunc0489_0149:
	message("\"I grow all of the flowers that I sell in a greenhouse which is also mine home. I sell a lot of red roses but I have many varieties. If thou art interested in buying some, please say so!\"");
	say();
	UI_add_answer(["greenhouse", "buy"]);
	UI_remove_answer("flowers");
labelFunc0489_0149:
	case "greenhouse" attend labelFunc0489_0169:
	message("\"I built my greenhouse by hand. When I am not selling flowers I am engaged in various studies of plants and nature there. I find it fascinating. As thou mayest have noticed, I prefer to grow them big!\"");
	say();
	UI_remove_answer("greenhouse");
	UI_add_answer(["studies", "big"]);
labelFunc0489_0169:
	case "studies" attend labelFunc0489_0183:
	message("\"Presently I am studying possible uses and applications of wheatgrass. One day soon I shall begin compiling my notes but it will require a long effort for there is much that I have learned. It is mostly to support my work that I operate my flower wagon.\"");
	say();
	UI_add_answer("wagon");
	UI_remove_answer("studies");
labelFunc0489_0183:
	case "big" attend labelFunc0489_0196:
	message("\"It is because of what I learn in my studies that I may grow my flowers to be so large and healthy.\"");
	say();
	UI_remove_answer("big");
labelFunc0489_0196:
	case "wagon" attend labelFunc0489_01B0:
	message("\"Actually my business does quite well and I do like the way my flowers brighten the whole place. But who really cares about business anyway, so why shouldst thou ask? Suffice it to say that life is sweet!\"");
	say();
	UI_remove_answer("wagon");
	UI_add_answer("life");
labelFunc0489_01B0:
	case "life" attend labelFunc0489_01C3:
	message("\"Thou hast enough money as long as thou dost have a place to live and can afford food, so I consider myself a wealthy man. I enjoy a good drink and round of song at the Modest Damsel nightly. I have a thriving business and stimulating work. I consider every resident of this island a good friend. I feel anger towards no one and do not desire anything more. I have never had reason to feel lonely, worried or bored. What else is there? Life is good!\"");
	say();
	UI_remove_answer("life");
labelFunc0489_01C3:
	case "buy" attend labelFunc0489_0286:
	if (!(var0003 == 0x0007)) goto labelFunc0489_027B;
	if (!(!var0005)) goto labelFunc0489_01E3;
	message("\"There are many pretty ladies on this island and they are in the habit of receiving flowers from the gentlemen they meet. It would cause a dreadful embarrassment if thou didst not have any!");
	say();
	goto labelFunc0489_01E7;
labelFunc0489_01E3:
	message("\"The gentlemen of this island have a peculiarity in their taste in women. They cannot refuse anything of a woman who wears flowers. If thou dost not wear any they will simply ignore thee!");
	say();
labelFunc0489_01E7:
	message("\"Surely thou dost wish to purchase some?\"");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0489_0274;
	message("\"A bouquet costs 12 gold. Art thou still interested?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0489_0267;
	var000B = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000B >= 0x000C)) goto labelFunc0489_0260;
	var000C = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	if (!var000C) goto labelFunc0489_0259;
	message("\"The bouquet is thine!\"");
	say();
	var000D = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0489_025D;
labelFunc0489_0259:
	message("\"Thine hands are too full to take the bouquet!\"");
	say();
labelFunc0489_025D:
	goto labelFunc0489_0264;
labelFunc0489_0260:
	message("\"Thou dost not have the money to buy flowers. But take heart, whenever thou canst afford them, I shall still be selling them.\"");
	say();
labelFunc0489_0264:
	goto labelFunc0489_0271;
labelFunc0489_0267:
	message("\"Perhaps next time, ");
	message(var0001);
	message(",\" he responds, smiling.");
	say();
labelFunc0489_0271:
	goto labelFunc0489_0278;
labelFunc0489_0274:
	message("\"Perhaps another time then.\"");
	say();
labelFunc0489_0278:
	goto labelFunc0489_027F;
labelFunc0489_027B:
	message("\"I am afraid that my shop is now closed, but if thou wilt return during business hours, I shall provide the solution to thine apparent floral emergency.\"");
	say();
labelFunc0489_027F:
	UI_remove_answer("buy");
labelFunc0489_0286:
	case "strangers" attend labelFunc0489_029D:
	message("\"There are three strangers on this island that have washed ashore in a shipwreck. Perhaps thou shalt meet them.\"");
	say();
	UI_remove_answer("strangers");
	gflags[0x0180] = true;
labelFunc0489_029D:
	case "locket" attend labelFunc0489_02B0:
	message("\"Yes, I saw Henry walking past my shop with that locket looking for Constance. It must have been shortly after he received it from Katrina. I remember it because I gave him a flower to give to Constance. Poor fellow, by the time he found her it was all he had to give her.\"");
	say();
	UI_remove_answer("locket");
labelFunc0489_02B0:
	case "Robin" attend labelFunc0489_02C3:
	message("\"Why, he sounds like one of those three strangers! I have met him. He talked as if he wanted to buy some flowers but he just walked away. Later I noticed a bouquet of flowers was missing from my wagon. The scoundrel must have pilfered them!\"");
	say();
	UI_remove_answer("Robin");
labelFunc0489_02C3:
	case "Battles" attend labelFunc0489_02D6:
	message("\"He must be one of those shipwrecked visitors we have on our island. Yes, when the three of them came up to my wagon he gave me a stare that sent a chill through my blood. I did my best to ignore him. I absolutely abhor violence.\"");
	say();
	UI_remove_answer("Battles");
labelFunc0489_02D6:
	case "Leavell" attend labelFunc0489_02E9:
	message("\"So that is the name of one of our uninvited guests! When the three of them came to my wagon earlier, he was very friendly while talking to me, but I saw through him. He mentioned noticing Constance, but the others gestured for him to be quiet.\"");
	say();
	UI_remove_answer("Leavell");
labelFunc0489_02E9:
	case "New Magincia" attend labelFunc0489_02FC:
	message("\"I was not born here. I came here as a young man. My father was a nobleman who was more interested in my counting gold than devoting myself to my studies. For a time I travelled the world until I landed here. It is a special place unlike any other in all of Britannia. So while thou art here please help us take good care of it.\"");
	say();
	UI_remove_answer("New Magincia");
labelFunc0489_02FC:
	case "bye" attend labelFunc0489_0307:
	goto labelFunc0489_030A;
labelFunc0489_0307:
	goto labelFunc0489_00C6;
labelFunc0489_030A:
	endconv;
	message("\"Enjoy thy life, friend.\"*");
	say();
labelFunc0489_030F:
	if (!(event == 0x0000)) goto labelFunc0489_0396;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF77));
	var000E = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0489_0390;
	if (!(var000E == 0x0001)) goto labelFunc0489_0353;
	var000F = "@Beautiful flowers!@";
labelFunc0489_0353:
	if (!(var000E == 0x0002)) goto labelFunc0489_0363;
	var000F = "@I have pretty flowers!@";
labelFunc0489_0363:
	if (!(var000E == 0x0003)) goto labelFunc0489_0373;
	var000F = "@Who will buy these lovely flowers?@";
labelFunc0489_0373:
	if (!(var000E == 0x0004)) goto labelFunc0489_0383;
	var000F = "@Thou dost need beautiful flowers!@";
labelFunc0489_0383:
	UI_item_say(0xFF77, var000F);
	goto labelFunc0489_0396;
labelFunc0489_0390:
	Func092E(0xFF77);
labelFunc0489_0396:
	return;
}


