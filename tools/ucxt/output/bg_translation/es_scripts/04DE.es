#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func088F 0x88F ();
extern void Func092E 0x92E (var var0000);

void Func04DE object#(0x4DE) ()
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

	if (!(event == 0x0001)) goto labelFunc04DE_026C;
	UI_show_npc_face(0xFF22, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02AB])) goto labelFunc04DE_0042;
	message("You see a handsome, muscular man with an air of mischief about him.");
	say();
	gflags[0x02AB] = true;
	goto labelFunc04DE_0046;
labelFunc04DE_0042:
	message("\"Yes, may I help thee?\" Glenno asks.");
	say();
labelFunc04DE_0046:
	converse attend labelFunc04DE_0267;
	case "name" attend labelFunc04DE_005C:
	message("\"Glenno at thy service!\"");
	say();
	UI_remove_answer("name");
labelFunc04DE_005C:
	case "job" attend labelFunc04DE_01AE:
	message("\"I am the manager of The Baths.");
	say();
	if (!((var0000 == 0x0006) || ((var0000 == 0x0007) || (var0000 == 0x0000)))) goto labelFunc04DE_01AA;
	message("\"The entrance fee is 300 gold. Everything is included in this fixed price. No tips are necessary. Dost thou want to enter?\"");
	say();
	if (!Func090A()) goto labelFunc04DE_00EE;
	var0002 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0002 >= 0x012C)) goto labelFunc04DE_00E6;
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00FB, 0x0004, false);
	if (!var0003) goto labelFunc04DE_00DE;
	message("\"Excellent! Here is thy key!");
	say();
	var0004 = UI_remove_party_items(0x012C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04DE_00E3;
labelFunc04DE_00DE:
	message("\"Thine hands are too full to carry the key!\"*");
	say();
	abort;
labelFunc04DE_00E3:
	goto labelFunc04DE_00EB;
labelFunc04DE_00E6:
	message("\"What art thou trying to pull? Thou hast not 300 gold!\"*");
	say();
	abort;
labelFunc04DE_00EB:
	goto labelFunc04DE_00F3;
labelFunc04DE_00EE:
	message("\"Well, some other time, then! Thou wilt not be sorry if thou dost! It is well worth the price.\"*");
	say();
	abort;
labelFunc04DE_00F3:
	message("\"Enter! Please relax! Enjoy thyself! Allow one of our hosts or hostesses to make thy stay more comfortable. ");
	say();
	if (!var0001) goto labelFunc04DE_0108;
	message("He notices your medallion. \"Fellowship members are especially welcome!\"");
	say();
	UI_add_answer("Fellowship");
labelFunc04DE_0108:
	message("\"Please! Make thyself at home. If thou dost want a drink, let me know.\"");
	say();
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04DE_019A;
	message("\"Uhm, wait a minute. How old art thou, boy?\"*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Uhm, eighteen.\"*");
	say();
	UI_show_npc_face(0xFF22, 0x0000);
	message("\"Thou dost not look eighteen.\"*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"All right, I am sixteen.\"*");
	say();
	UI_show_npc_face(0xFF22, 0x0000);
	message("\"Thou dost not look sixteen either. Well, never mind. Thou canst enter. But make sure the management doth not see thee.\" Glenno scratches his head. \"Yes, but... no! I am the management! All right, come on. Just don't cause any trouble.\"*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"All right! Wenches!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc04DE_0190;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you, \"Methinks young Spark hath learned a lot whilst adventuring with thee!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04DE_0190:
	UI_show_npc_face(0xFF22, 0x0000);
labelFunc04DE_019A:
	UI_add_answer(["The Baths", "drink"]);
	goto labelFunc04DE_01AE;
labelFunc04DE_01AA:
	message("\"Please come visit in the late evening hours when our hosts and hostesses are here!\"");
	say();
labelFunc04DE_01AE:
	case "The Baths" attend labelFunc04DE_01D4:
	message("\"The Baths exist for the pleasure of visitors to Buccaneer's Den. Thou canst bathe in our spring pools. Thou canst lounge in our Community Room and socialize with our attractive hosts or hostesses. Thou canst drink fine wine and ale. Thou canst view our collection of fine artwork. Thou canst... escape into a dream-world!\"");
	say();
	UI_remove_answer("The Baths");
	UI_add_answer(["spring pools", "hosts or hostesses", "Community Room", "fine artwork"]);
labelFunc04DE_01D4:
	case "drink" attend labelFunc04DE_01DF:
	Func088F();
labelFunc04DE_01DF:
	case "hosts or hostesses" attend labelFunc04DE_01F2:
	message("\"They have come from all over Britannia to serve thine every wish! I, Glenno, have assured them that The Baths is the most prestigious establishment of its kind anywhere in the known world. It is probably the only establishment of its kind in the known world!\"");
	say();
	UI_remove_answer("hosts or hostesses");
labelFunc04DE_01F2:
	case "spring pools" attend labelFunc04DE_0205:
	message("\"The water is guaranteed to be pure, warm and cleansing.\"");
	say();
	UI_remove_answer("spring pools");
labelFunc04DE_0205:
	case "Community Room" attend labelFunc04DE_0218:
	message("\"Thou canst lie in comfort among the many soft cushions and pillows. Get to know thy neighbor. Get to know thy neighbor 'very well'!\"");
	say();
	UI_remove_answer("Community Room");
labelFunc04DE_0218:
	case "fine artwork" attend labelFunc04DE_022B:
	message("\"Ah, yes, those are erotic masterpieces from the brush of Britannian artist Glen Johnson. Notice how the curves on that one are extremely naturalistic, dost thou not agree?\"");
	say();
	UI_remove_answer("fine artwork");
labelFunc04DE_022B:
	case "Fellowship" attend labelFunc04DE_0245:
	message("\"Yes, I am a member. If it were not for The Fellowship, I would not be manager of The Baths! I served the group well, trusted my many brothers, strived for unity, and... well, my worthiness preceded my reward! And all of this... was my reward!\" Glenno smiles as if he were a tomcat who had just swallowed a mouse.");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer("reward");
labelFunc04DE_0245:
	case "reward" attend labelFunc04DE_0259:
	message("\"Yes, The Fellowship gave me this place. They own it, thou knowest.\" Suddenly Glenno holds his hand to his mouth, as if he has said something he shouldn't have. \"I mean, The Fellowship only owns the -land- on which it was built. I -built- The Baths with money with which I was rewarded by The Fellowship. So, enough of that -- enjoy thyself. I must tend to business!\" With that, Glenno turns away from you.*");
	say();
	UI_remove_answer("reward");
	abort;
labelFunc04DE_0259:
	case "bye" attend labelFunc04DE_0264:
	goto labelFunc04DE_0267;
labelFunc04DE_0264:
	goto labelFunc04DE_0046;
labelFunc04DE_0267:
	endconv;
	message("\"Leaving so soon?\"*");
	say();
labelFunc04DE_026C:
	if (!(event == 0x0000)) goto labelFunc04DE_030D;
	var0000 = UI_part_of_day();
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF22));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0007 == 0x000B)) goto labelFunc04DE_0307;
	if (!((var0000 == 0x0005) || ((var0000 == 0x0007) || (var0000 == 0x0000)))) goto labelFunc04DE_0304;
	if (!(var0008 == 0x0001)) goto labelFunc04DE_02CA;
	var0009 = "@Wine and women!@";
labelFunc04DE_02CA:
	if (!(var0008 == 0x0002)) goto labelFunc04DE_02DA;
	var0009 = "@Need a girl, sailor?@";
labelFunc04DE_02DA:
	if (!(var0008 == 0x0003)) goto labelFunc04DE_02EA;
	var0009 = "@How about a stud, lady?@";
labelFunc04DE_02EA:
	if (!(var0008 == 0x0004)) goto labelFunc04DE_02FA;
	var0009 = "@Relax here in The Baths!@";
labelFunc04DE_02FA:
	UI_item_say(0xFF22, var0009);
labelFunc04DE_0304:
	goto labelFunc04DE_030D;
labelFunc04DE_0307:
	Func092E(0xFF22);
labelFunc04DE_030D:
	return;
}


