#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func0500 object#(0x500) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc0500_0009;
	abort;
labelFunc0500_0009:
	var0000 = UI_get_party_list();
	var0001 = UI_get_schedule_type(UI_get_npc_object(item));
	UI_show_npc_face(0xFF00, 0x0000);
	if (!(!(var0001 == 0x0003))) goto labelFunc0500_0039;
	message("The wisp does not respond.*");
	say();
	abort;
	goto labelFunc0500_009C;
labelFunc0500_0039:
	UI_add_answer(["name", "job", "bye"]);
	var0002 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0002, 0xFE99);
	if (!var0002) goto labelFunc0500_006B;
	UI_add_answer("notebook");
labelFunc0500_006B:
	if (!gflags[0x0100]) goto labelFunc0500_0078;
	UI_add_answer("Time Lord");
labelFunc0500_0078:
	if (!(!gflags[0x0150])) goto labelFunc0500_0098;
	message("A ball of light approaches you.~~\"'You' are not the entity known as 'Trellek'. 'You' call out in the manner of the species called 'emps'. 'Xorinia' was expecting the entity 'Trellek'.");
	say();
	message("\"But that is not of importance. From the information 'I' have, the local manifestation before 'me' is the entity known as 'Avatar'.");
	say();
	message("The Wisp glows brightly a second or two.~~\"'Xorinia' wishes to exchange information with the human entity.\"");
	say();
	gflags[0x0150] = true;
	Func0911(0x01F4);
	goto labelFunc0500_009C;
labelFunc0500_0098:
	message("\"Once again a local manifestation addresses the Xorinite dimension.\"");
	say();
labelFunc0500_009C:
	converse attend labelFunc0500_022C;
	case "name" attend labelFunc0500_00B9:
	message("\"Highest probabilities indicate that a manifestation from the Xorinite dimension will be called 'Wisp' by the entities known as 'humans'. I am also called 'Xorinia' by other manifestations of the Xorinite dimension.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Wisp");
labelFunc0500_00B9:
	case "Wisp" attend labelFunc0500_00CC:
	message("\"This label has been implemented by human entities to name manifestations from the Xorinite dimension since the time when this dimension was discovered by Xorinite manifestations. Another common name is 'Will-o-the-wisp'.~~ \"The preceding sample of information was provided without charge. Usually there is a fee for information.\"");
	say();
	UI_remove_answer("Wisp");
labelFunc0500_00CC:
	case "information" attend labelFunc0500_00EF:
	message("\"The Undrian Council seeks information regarding a certain entity by the name of 'Alagner'. 'You' have access to this information. 'I' have information regarding a certain entity which 'you' are seeking. The Undrian Council proposes a trade.\"");
	say();
	UI_remove_answer("information");
	UI_add_answer(["Undrian Council", "Alagner", "trade"]);
labelFunc0500_00EF:
	case "Undrian Council" attend labelFunc0500_0102:
	message("\"The Council represents what 'your' language defines as 'government'.\"");
	say();
	UI_remove_answer("Undrian Council");
labelFunc0500_0102:
	case "job" attend labelFunc0500_0115:
	message("\"'Xorinia' is a conduit for information between different planes and dimensions. 'Xorinia' also catalogs information which is necessary for growth of the Xorinite community. 'You' have information which may be valuable to 'me'. 'I' also have information that 'you' want.\"");
	say();
	UI_add_answer("information");
labelFunc0500_0115:
	case "Alagner" attend labelFunc0500_0128:
	message("\"The Undrian Council has information that there is a human entity in 'your' dimension that has been called 'the wisest man in Britannia.' This entity is known as 'Alagner' and lives in 'your' colony of 'New Magincia'. 'Alagner' has what the entity calls a 'notebook'. The 'notebook' is a collection of information.\"");
	say();
	UI_remove_answer("Alagner");
labelFunc0500_0128:
	case "trade" attend labelFunc0500_015F:
	message("\"'I' want to absorb the information in Alagner's 'notebook'. If 'you' bring the 'notebook' here, the Undrian Council will release information useful to 'you'. Do 'you' agree to the trade?\"");
	say();
	gflags[0x0133] = true;
	var0003 = Func090A();
	if (!var0003) goto labelFunc0500_014B;
	message("\"'Xorinia' recognizes 'your' usefulness. 'I' shall be here. Human entities will call 'my' activity 'waiting'.\"");
	say();
	goto labelFunc0500_0158;
labelFunc0500_014B:
	message("\"'Xorinia' recognizes 'your' hostility. 'I' shall be here should 'you' reflect upon 'your' decision and decide to change it.\"*");
	say();
	UI_set_schedule_type(item, 0x0014);
	abort;
labelFunc0500_0158:
	UI_remove_answer("trade");
labelFunc0500_015F:
	case "Time Lord" attend labelFunc0500_0187:
	if (!(!gflags[0x0133])) goto labelFunc0500_017C;
	message("\"The entity known as 'Time Lord' requests an audience with 'you'. Before 'I' can give 'you' more information about this, 'I' must propose a trade.\"");
	say();
	UI_add_answer("information");
	goto labelFunc0500_0180;
labelFunc0500_017C:
	message("\"The entity known as 'Time Lord' is a being from the space/time dimension. The Xorinite Dimension has been communicating with 'Time Lord' for what 'humans' call 'centuries'.\"");
	say();
labelFunc0500_0180:
	UI_remove_answer("Time Lord");
labelFunc0500_0187:
	case "notebook" attend labelFunc0500_01B1:
	message("\"The human entity is welcomed by 'Xorinia'. 'You' have brought the item 'notebook'. 'I' shall now absorb the information contained therein.\"~~The Wisp glows brightly for a few seconds. The notebook remains in your possession.~~\"'I' have completed my absorption of the information. 'You' may now return the item 'notebook' to the entity 'Alagner'.~~\"And now for the exchange of information and delivery of a message.\"");
	say();
	gflags[0x0157] = true;
	Func0911(0x02BC);
	UI_remove_answer("notebook");
	UI_add_answer(["exchange", "message"]);
labelFunc0500_01B1:
	case "message" attend labelFunc0500_01CF:
	message("\"'Xorinia' must deliver a message to 'you'. The entity known as 'Time Lord' requests 'your' audience. 'Time Lord' is trapped at the plane known as the Shrine of Spirituality. 'You' can reach 'him' by using 'your' object 'Orb of the Moons' in the location directly to 'your' 'northwest'.");
	say();
	gflags[0x0134] = true;
	UI_remove_answer("message");
	UI_add_answer("Time Lord");
labelFunc0500_01CF:
	case "exchange" attend labelFunc0500_0207:
	message("\"Now for the information 'you' seek. 'This' dimension known as 'Britannia' is under attack by an entity called 'The Guardian'.~~\"'The Guardian' lives in another dimension. 'Xorinia' sometimes trades information with this entity. Do 'you' want to know more about 'The Guardian'?\"");
	say();
	var0004 = Func090A();
	if (!0x0614) goto labelFunc0500_01FC;
	message("\"'Xorinia' has digested information about 'The Guardian' and can state the following facts:~~\"'The Guardian' possesses qualities which human entities label 'vain', 'greedy', 'egocentric', and 'malevolent'. 'The Guardian' thrives on power and domination. 'The Guardian' takes 'pleasure' from conquering other worlds. His sensory organs are now focused on 'this' dimension known as 'Britannia'.~~\"'The Guardian' is attempting to enter 'this' dimension by means of an item human entities call a 'Moongate'. This 'Moongate' is not a 'red' color or 'blue' color 'Moongate', which 'Xorinia' knows is the standard form of this item. 'The Guardian' is building a 'Moongate' of the color 'black'.\"");
	say();
	UI_remove_answer("exchange");
	UI_add_answer("Black Gate");
	goto labelFunc0500_0200;
labelFunc0500_01FC:
	message("\"'Xorinia' always responds to free information. Transaction complete.\"*");
	say();
labelFunc0500_0200:
	UI_remove_answer("exchange");
labelFunc0500_0207:
	case "Black Gate" attend labelFunc0500_021E:
	message("\"The 'Black Gate' will be fully functional when the phenomenon known as 'Astronomical Alignment' next occurs.~~ \"Although 'Xorinia' does not normally seek to influence actions of other manifestations, 'Xorinia' warns 'you' that if 'The Guardian' enters 'this' dimension, it will be the end of the dimension known as 'Britannia'. 'The Guardian' is powerful in 'his' own dimension. In 'your' dimension, 'he' will be unstoppable.~~\"The Undrian Council sincerely hopes this information is useful. Transaction complete.\"*");
	say();
	gflags[0x0127] = true;
	UI_remove_answer("Black Gate");
labelFunc0500_021E:
	case "bye" attend labelFunc0500_0229:
	goto labelFunc0500_022C;
labelFunc0500_0229:
	goto labelFunc0500_009C;
labelFunc0500_022C:
	endconv;
	message("\"'Xorinia' always welcomes the exchange of information. Farewell.\"*");
	say();
	UI_set_schedule_type(item, 0x0014);
	return;
}


