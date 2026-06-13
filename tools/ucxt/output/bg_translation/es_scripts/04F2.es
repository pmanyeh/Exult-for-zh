#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();

void Func04F2 object#(0x4F2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04F2_02A5;
	UI_show_npc_face(0xFF0E, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0147])) goto labelFunc04F2_003E;
	message("You see an attractive, studious-looking man.");
	say();
	gflags[0x0147] = true;
	goto labelFunc04F2_0048;
labelFunc04F2_003E:
	message("\"Yes, ");
	message(var0000);
	message(",\" Taylor asks. \"May I assist thee?\"");
	say();
labelFunc04F2_0048:
	if (!gflags[0x0138]) goto labelFunc04F2_005F;
	var0001 = true;
	UI_add_answer(["wisps", "Emps"]);
labelFunc04F2_005F:
	converse attend labelFunc04F2_029A;
	case "name" attend labelFunc04F2_0088:
	message("\"My name is Taylor, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
	if (!gflags[0x00E2]) goto labelFunc04F2_0088;
	UI_add_answer("Julius");
labelFunc04F2_0088:
	case "job" attend labelFunc04F2_00A7:
	message("\"I study the local flora, fauna, and geography here at the monastery.\"");
	say();
	UI_add_answer(["flora", "fauna", "geography", "monastery"]);
labelFunc04F2_00A7:
	case "flora" attend labelFunc04F2_00BA:
	message("\"There are many beautiful plants in this area. I am working on learning about all of them.\"");
	say();
	UI_remove_answer("flora");
labelFunc04F2_00BA:
	case "fauna" attend labelFunc04F2_00E1:
	message("\"Many different species of animals reside in the forest. I have encountered some fascinating ones in my studies.\"");
	say();
	if (!gflags[0x0100]) goto labelFunc04F2_00DA;
	if (!(!var0001)) goto labelFunc04F2_00DA;
	UI_add_answer("wisps");
labelFunc04F2_00DA:
	UI_remove_answer("fauna");
labelFunc04F2_00E1:
	case "monastery" attend labelFunc04F2_00FB:
	message("\"Our order is called the Brotherhood of the Rose.\"");
	say();
	UI_add_answer("order");
	UI_remove_answer("monastery");
labelFunc04F2_00FB:
	case "order" attend labelFunc04F2_012E:
	message("\"Yes, ");
	message(var0000);
	message(". One other monk, Aimi, lives here in the Abbey. She is a painter and a gardener.\"");
	say();
	UI_add_answer(["painter", "gardener"]);
	if (!gflags[0x0148]) goto labelFunc04F2_0127;
	UI_add_answer("Kreg");
labelFunc04F2_0127:
	UI_remove_answer("order");
labelFunc04F2_012E:
	case "painter" attend labelFunc04F2_0141:
	message("He smiles. \"Between us, she is a far better gardener.\"");
	say();
	UI_remove_answer("painter");
labelFunc04F2_0141:
	case "gardener" attend labelFunc04F2_0154:
	message("\"She raises the most lovely flowers that I have ever seen! Thou must see them to believe of their existence.\"");
	say();
	UI_remove_answer("gardener");
labelFunc04F2_0154:
	case "geography" attend labelFunc04F2_016E:
	message("\"I use my knowledge of the local landscape to aid in my studies. The better I know the locale, the farther away I can travel from the Brotherhood Abbey and still be sure I will able to return -- unlike a fellow monk of mine.\"");
	say();
	UI_remove_answer("geography");
	UI_add_answer("fellow");
labelFunc04F2_016E:
	case "fellow" attend labelFunc04F2_0181:
	message("\"He became lost some time ago while surveying the area for birds -- the Golden-Cheeked Warbler, I believe it was. Sadly, he travelled too far, and we have not heard from him since.~~\"I do not wish to suffer the same fate.\"");
	say();
	UI_remove_answer("fellow");
labelFunc04F2_0181:
	case "Kreg" attend labelFunc04F2_019A:
	message("\"That name does not sound familiar, ");
	message(var0000);
	message(". Perhaps he is not from this area.\"");
	say();
	UI_remove_answer("Kreg");
labelFunc04F2_019A:
	case "Julius" attend labelFunc04F2_01AD:
	message("\"Julius? I cannot be certain, but 'tis possible he may be someone who now resides in the... cemetery. I have heard that name mentioned as someone who was brought to the Abbey to be buried, though I know not who brought him\tand I do not remember from whom I heard it. I do hope he was not a friend of thine,\" he says, apologetically.");
	say();
	UI_remove_answer("Julius");
labelFunc04F2_01AD:
	case "wisps" attend labelFunc04F2_01D1:
	message("\"The wisps?\" he laughs. \"I doubt they exist. I realize many people seem to believe in them, but I have never seen any.~~ \"If thou must know, popular legend maintains that they inhabit the forest area, near the Emps. Supposedly, the Emps are able to speak with them.\" He shrugs. \"Thou mayest look for them if that is thy wish, but I would not waste precious time, myself.\"");
	say();
	UI_add_answer(["precious time", "Emps"]);
	gflags[0x0138] = true;
	UI_remove_answer("wisps");
labelFunc04F2_01D1:
	case "precious time" attend labelFunc04F2_01EA:
	message("\"There are so many exciting things to investigate... tree flowers, for example, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("precious time");
labelFunc04F2_01EA:
	case "Emps" attend labelFunc04F2_020E:
	message("\"Ah, the Emps. I have not been able to glean much information about them.~~\"They live on the eastern edge of the deep forest, not too terribly far from here.~~\"They resemble apes, but only slightly. They are exceedingly shy, and will rarely feel comfortable enough to approach a human.~~ \"The only way I was able to view an Emp closely occurred when I happened to have honey in my pack which I had just picked up from Bee Cave. The creature appeared, stared at me for a few minutes, and then asked -- asked, I say -- for mine honey. I believe they are empathic, hence their name.~~ \"Quite an interesting species, dost thou not agree?\"");
	say();
	UI_add_answer(["honey", "Bee Cave"]);
	var0002 = true;
	UI_remove_answer("Emps");
labelFunc04F2_020E:
	case "honey" attend labelFunc04F2_0221:
	message("\"The honey from the caves is quite tasty, but rarely can one get it without a fight. The Bee Caves can be a rather dangerous place.\"");
	say();
	UI_remove_answer("honey");
labelFunc04F2_0221:
	case "Bee Cave" attend labelFunc04F2_028C:
	message("\"Bee Cave is located to the southwest of the Abbey. But if thou art planning a trip there, beware the giant bees that live in the caves. Their venom is very poisonous.~~");
	say();
	var0003 = Func0931(0xFE9B, 0x0001, 0x0301, 0xFE99, 0xFE99);
	if (!(!var0003)) goto labelFunc04F2_0285;
	message("\"If thou wishest, I can give thee a smoke bomb that will repel the bees for a short time. Dost thou want it?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F2_0281;
	var0005 = UI_add_party_items(0x0001, 0x0301, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04F2_027A;
	message("\"Here it is.\"");
	say();
	goto labelFunc04F2_027E;
labelFunc04F2_027A:
	message("\"Perhaps thou shouldst lighten thy load before taking the bomb.\"");
	say();
labelFunc04F2_027E:
	goto labelFunc04F2_0285;
labelFunc04F2_0281:
	message("\"Very well. But be careful if thou dost happen by the caves!\"");
	say();
labelFunc04F2_0285:
	UI_remove_answer("Bee Cave");
labelFunc04F2_028C:
	case "bye" attend labelFunc04F2_0297:
	goto labelFunc04F2_029A;
labelFunc04F2_0297:
	goto labelFunc04F2_005F;
labelFunc04F2_029A:
	endconv;
	message("\"May thy knowledge increase with thine encounters with nature, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04F2_02A5:
	if (!(event == 0x0000)) goto labelFunc04F2_02AE;
	abort;
labelFunc04F2_02AE:
	return;
}


