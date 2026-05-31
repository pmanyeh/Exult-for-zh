#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0438 object#(0x438) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0438_01D8;
	UI_show_npc_face(0xFFC8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	UI_add_answer(["name", "job", "bye"]);
	if (!var0001) goto labelFunc0438_0043;
	UI_add_answer("Fellowship");
labelFunc0438_0043:
	if (!(!gflags[0x00B9])) goto labelFunc0438_0055;
	message("You see a pleasant-looking young peasant woman.");
	say();
	gflags[0x00B9] = true;
	goto labelFunc0438_005F;
labelFunc0438_0055:
	message("\"Greetings to thee, ");
	message(var0000);
	message(",\" says Diane.");
	say();
labelFunc0438_005F:
	converse attend labelFunc0438_01CD;
	case "name" attend labelFunc0438_0075:
	message("\"My name is Diane.\"");
	say();
	UI_remove_answer("name");
labelFunc0438_0075:
	case "job" attend labelFunc0438_0091:
	message("\"My job is to oversee the stables here in Britain and sell thee a horse and carriage if thou dost want one.\"");
	say();
	UI_add_answer(["stables", "Britain", "carriage"]);
labelFunc0438_0091:
	case "stables" attend labelFunc0438_00A4:
	message("\"Here thou wilt find a selection of the finest horses produced by Lord British's personal horse breeder. If thou dost wish to buy one, I am sure we can come to some sort of arrangement. They come with a carriage, of course.\"");
	say();
	UI_remove_answer("stables");
labelFunc0438_00A4:
	case "Britain" attend labelFunc0438_00BE:
	message("\"Britain is such a grand city, but it can be somewhat disconcerting if thou dost not know anyone. Fortunately, I know many people here.\"");
	say();
	UI_remove_answer("Britain");
	UI_add_answer("people");
labelFunc0438_00BE:
	case "carriage" attend labelFunc0438_0141:
	message("\"The horse and carriage combination sells for 120 gold. Thou shalt find it in a small shelter just south of the stables, across the street. Dost thou want a title?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0438_0136;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x0078)) goto labelFunc0438_012F;
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x001D, 0xFE99, false);
	if (!var0005) goto labelFunc0438_0128;
	message("\"Very good. Here is thy title.\"");
	say();
	var0006 = UI_remove_party_items(0x0078, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0438_012C;
labelFunc0438_0128:
	message("\"Oh, my. Thine hands are too full to take the title!\"");
	say();
labelFunc0438_012C:
	goto labelFunc0438_0133;
labelFunc0438_012F:
	message("\"Oh. Thou dost not have enough gold to buy the title.\"");
	say();
labelFunc0438_0133:
	goto labelFunc0438_013A;
labelFunc0438_0136:
	message("\"Some other time, then.\"");
	say();
labelFunc0438_013A:
	UI_remove_answer("carriage");
labelFunc0438_0141:
	case "people" attend labelFunc0438_0167:
	message("\"I have many friends in Britannia. Among them are Greg, James, Brownie and Mack.\"");
	say();
	UI_remove_answer("people");
	UI_add_answer(["Greg", "James", "Brownie", "Mack"]);
labelFunc0438_0167:
	case "Greg" attend labelFunc0438_017A:
	message("\"Greg runs a shop that sells provisions. If thou art planning any sort of expedition he is just the person to see. He seems to be lucky. Perhaps some of it will rub off on thee.\"");
	say();
	UI_remove_answer("Greg");
labelFunc0438_017A:
	case "James" attend labelFunc0438_018D:
	message("\"James, who runs an inn not far from here, wanted a life of adventure. His family wanted him to run the inn after his father died and he has been discontent ever since. Still, I think he fancies Cynthia who works at the Mint.\"");
	say();
	UI_remove_answer("James");
labelFunc0438_018D:
	case "Brownie" attend labelFunc0438_01A0:
	message("\"Brownie is a decent and honest man who would have made a much better mayor than Patterson if thou dost want mine opinion. He uses our horses to plow his fields in the spring.\"");
	say();
	UI_remove_answer("Brownie");
labelFunc0438_01A0:
	case "Mack" attend labelFunc0438_01B3:
	message("\"One word of warning about Mack. Do not let him start talking about the sky. Other than that he is perfectly fine, I can assure thee.\"");
	say();
	UI_remove_answer("Mack");
labelFunc0438_01B3:
	case "Fellowship" attend labelFunc0438_01BF:
	message("Diane notices your Fellowship medallion. \"It is odd. If thou dost not mind me saying so, thou dost not seem like a Fellowship member. There is something about thee. I cannot place it.\"");
	say();
labelFunc0438_01BF:
	case "bye" attend labelFunc0438_01CA:
	goto labelFunc0438_01CD;
labelFunc0438_01CA:
	goto labelFunc0438_005F;
labelFunc0438_01CD:
	endconv;
	message("\"Good day to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0438_01D8:
	if (!(event == 0x0000)) goto labelFunc0438_01E6;
	Func092E(0xFFC8);
labelFunc0438_01E6:
	return;
}


