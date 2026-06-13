#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func09AD 0x9AD (var var0000);

void Func03CF shape#(0x3CF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0953();
	var0001 = Func097D(0xFE9B, 0x0001, 0x0128, 0xFE99, 0x0003);
	var0002 = false;
	if (!(event == 0x0001)) goto labelFunc03CF_0047;
	UI_item_say(0xFE9C, "@I would have words with thee!@");
	item->Func07D1();
	Func097F(item, "@They will be thine last.@", 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc03CF_0047:
	if (!(event == 0x0009)) goto labelFunc03CF_0370;
	UI_set_schedule_type(item, 0x0004);
	UI_show_npc_face0(0xFECF, 0x0000);
	UI_add_answer(["name", "bye"]);
	var0003 = UI_get_npc_id(item);
	if (!var0003) goto labelFunc03CF_00BA;
	message("\"How nice.  Thou hast returned to me.  Hast thou brought the ring?\"");
	say();
	var0004 = Func0955();
	if (!(var0004 == true)) goto labelFunc03CF_00AE;
	if (!(var0001 == true)) goto labelFunc03CF_00A2;
	message("\"Excellent.  Thou hast served me well, pawn.  Alas, I shall kill thee just the same.\"");
	say();
	Func09AD(item);
	abort;
	goto labelFunc03CF_00AB;
labelFunc03CF_00A2:
	message("\"Thou dost dare lie to me!  I shall make thee pay!\"");
	say();
	Func09AD(item);
	abort;
labelFunc03CF_00AB:
	goto labelFunc03CF_00B7;
labelFunc03CF_00AE:
	message("\"Curse thee!  I shall roast thine flesh!\"");
	say();
	Func09AD(item);
	abort;
labelFunc03CF_00B7:
	goto labelFunc03CF_00C6;
labelFunc03CF_00BA:
	message("\"Welcome, Simpleton.  Do not expect to stay long, for I am getting rather hungry and it has been months since I have eaten the flesh of a human.\"");
	say();
	UI_set_npc_id(item, 0x0001);
labelFunc03CF_00C6:
	converse attend labelFunc03CF_036F;
	case "name" attend labelFunc03CF_00E9:
	UI_remove_answer("name");
	message("\"I am the manifestation of the horrific images of thine mind's darkest recesses!  Ha!  I am Chaos Unrestrained!  Those cowards in the keep call me the Fiend!\"");
	say();
	UI_add_answer(["unrestrained", "orb"]);
labelFunc03CF_00E9:
	case "unrestrained" attend labelFunc03CF_0103:
	UI_remove_answer("unrestrained");
	message("\"Fool!  Dost thou think those flimsy doors are my prison?  That the meager traps and inconsequential guards hold me here?  Nonsense!\"");
	say();
	UI_add_answer("Why stay?");
labelFunc03CF_0103:
	case "Why stay?" attend labelFunc03CF_0126:
	UI_remove_answer("Why stay?");
	message("\"The ring!  I am a prisoner of my former self, for without the ring I cannot right the world!\"");
	say();
	UI_add_answer(["former self", "ring", "right the world"]);
labelFunc03CF_0126:
	case "former self" attend labelFunc03CF_0140:
	UI_remove_answer("former self");
	message("\"Master of reagents!  Wizard beyond compare!\"");
	say();
	UI_add_answer("master");
labelFunc03CF_0140:
	case "master" attend labelFunc03CF_0163:
	UI_remove_answer("master");
	message("\"I do not expect thee to comprehend, simpleton!  The Ring! Creator of the Ring!\"");
	say();
	if (!(!(var0002 == true))) goto labelFunc03CF_0163;
	UI_add_answer("ring");
labelFunc03CF_0163:
	case "ring" attend labelFunc03CF_0187:
	UI_remove_answer("ring");
	message("\"Thou must know of the Ring of Shal.  Even the King of Fools knows of its powers.  Any idiot can see what importance it bears to my ambitions.\"");
	say();
	var0002 = true;
	UI_add_answer(["ambitions", "powers"]);
labelFunc03CF_0187:
	case "right the world" attend labelFunc03CF_01A1:
	UI_remove_answer("right the world");
	message("\"Order is folly!  The world has blinded itself to this truth, and I shall force them to see!\"");
	say();
	UI_add_answer("see");
labelFunc03CF_01A1:
	case "see" attend labelFunc03CF_01B4:
	UI_remove_answer("see");
	message("\"I shall bring death to the hierophants to bring Chaos and freedom.  No longer shall men weaken themselves with reason! I shall liberate the entire world!\"");
	say();
labelFunc03CF_01B4:
	case "ambitions" attend labelFunc03CF_01C7:
	UI_remove_answer("ambitions");
	message("\"I shall save the world.  I shall take away its order as it was taken from me.  Thus shall I show the world the truth.\"");
	say();
labelFunc03CF_01C7:
	case "powers" attend labelFunc03CF_01E1:
	UI_remove_answer("powers");
	message("\"Fool!  Ignoramus!  I should slay you and add your bones to my collection!  Thou knowest well the powers of the ring!  If I had the reagents to spare I would strike thee down with a spell most dire!  If I had the ring...\"");
	say();
	UI_add_answer("reagents");
labelFunc03CF_01E1:
	case "reagents" attend labelFunc03CF_01FB:
	UI_remove_answer("reagents");
	message("\"Thou art not merely feigning stupidity, art thou?  With it on my finger, I need never use reagents, for it simulates their magical properties!  That is why I created the ring!  That is why I pledged myself to Chaos!\"");
	say();
	UI_add_answer("created");
labelFunc03CF_01FB:
	case "created" attend labelFunc03CF_021B:
	UI_remove_answer("created");
	message("\"Yes, you fool.  I was Shal.  But Shal had not the knowledge to create his life's goal, so he called upon greater powers than he to complete his work.  The Chaos Serpent granted him that power, but there was a price.\"");
	say();
	UI_add_answer(["price", "greater powers"]);
labelFunc03CF_021B:
	case "greater powers" attend labelFunc03CF_022E:
	UI_remove_answer("greater powers");
	message("\"Yes!  Greater powers!  He called to the Serpents of Order and Chaos.  He spoke with Demons.  Only the Chaos Serpent would hear him!\"");
	say();
labelFunc03CF_022E:
	case "price" attend labelFunc03CF_024E:
	UI_remove_answer("price");
	message("\"Price?  He was shown the error of his ways!  It was a gift! He was granted a year's time to complete his work, at which time he would be changed...into me.  Bless the Chaos Serpent for his Wisdom!\"");
	say();
	UI_add_answer(["changed", "time"]);
labelFunc03CF_024E:
	case "changed" attend labelFunc03CF_0268:
	UI_remove_answer("changed");
	message("\"My dear moron, Shal was shown the wisdom of Chaos!  All traces of Order were removed from him; he became a paragon of Chaos.\"");
	say();
	UI_add_answer("paragon");
labelFunc03CF_0268:
	case "paragon" attend labelFunc03CF_027B:
	UI_remove_answer("paragon");
	message("\"Aye, a paragon of Chaos--me.  There were some Chaotics who said my words were those of a fanatic; that I am too extreme.  Ha!  They are all dead now.  That skeleton in the corner was Selioas; near you, Ajalsarthis. They now face the Chaos Serpent's wrath for defying me.\"");
	say();
labelFunc03CF_027B:
	case "time" attend labelFunc03CF_0295:
	UI_remove_answer("time");
	message("\"The Chaos Serpent was far too generous in granting him a full year.  Had it granted him but a month, I would already have saved the world!\"");
	say();
	UI_add_answer("generous");
labelFunc03CF_0295:
	case "generous" attend labelFunc03CF_02B5:
	UI_remove_answer("generous");
	message("\"Shal had time to hide the ring from me. He did give the ring to an animated suit of armor, with the orders to hide and guard it, even from himself.  I have not yet been able to recover it.\"");
	say();
	UI_add_answer(["recover", "armor"]);
labelFunc03CF_02B5:
	case "armor" attend labelFunc03CF_02CF:
	UI_remove_answer("armor");
	message("\"The predecessors to automatons.  They cannot speak and can barely follow orders.  They make idiots like thyself seem intelligent.\"");
	say();
	UI_add_answer("orders");
labelFunc03CF_02CF:
	case "orders" attend labelFunc03CF_02E9:
	UI_remove_answer("orders");
	message("\"I would not be surprised if the suit of armor forgot entirely about it.\"");
	say();
	UI_add_answer("forgot");
labelFunc03CF_02E9:
	case "forgot" attend labelFunc03CF_02FC:
	UI_remove_answer("forgot");
	message("\"The accursed thing may have noticed it days later and thought it was a rock!  It could be in a pile of rubble!  It might still have the ring in its hand!  Curse this world!\"");
	say();
labelFunc03CF_02FC:
	case "recover" attend labelFunc03CF_032E:
	UI_remove_answer("recover");
	message("\"My only thought thus far has been to see thine bones scattered across my floor, but you might yet be of use to me.  I shall let thee live if thou dost retrieve the ring and bring it to me.  Dost thou agree?\"");
	say();
	var0005 = Func0955();
	if (!(var0005 == true)) goto labelFunc03CF_0325;
	message("\"Ha!  Excellent!  Go then!  Bring me the ring!  Do not betray me or I shall sate myself by killing thee slowly!\"");
	say();
	abort;
	goto labelFunc03CF_032E;
labelFunc03CF_0325:
	message("\"Fool!  Simpleton!  Idiot!  Thou hast condemned thyself to death!\"");
	say();
	Func09AD(item);
	abort;
labelFunc03CF_032E:
	case "bye" attend labelFunc03CF_033F:
	message("\"Not so fast, mealworm!  I have developed an appetite for thee!\"");
	say();
	Func09AD(item);
	abort;
labelFunc03CF_033F:
	case "orb" attend labelFunc03CF_0359:
	UI_remove_answer("orb");
	message("\"I do not possess this orb, moron, nor have I any desire to. I do, however, recall an entertaining diversion perhaps one year ago.  A crazed soldier of Chaos stole it and brought it into my domain.\"");
	say();
	UI_add_answer("soldier");
labelFunc03CF_0359:
	case "soldier" attend labelFunc03CF_036C:
	UI_remove_answer("soldier");
	message("\"I assume he had been discovered and, rather than face the persuasive initiates of Discipline, sought asylum in my domain.  He fell victim to one of my more flamboyant traps. I'm sure he still has the orb on his charred body!\"");
	say();
labelFunc03CF_036C:
	goto labelFunc03CF_00C6;
labelFunc03CF_036F:
	endconv;
labelFunc03CF_0370:
	return;
}


