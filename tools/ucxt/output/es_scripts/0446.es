#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0446 object#(0x446) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0446_0296;
	UI_show_npc_face(0xFFBA, 0x0000);
	var0000 = Func0908();
	var0001 = UI_part_of_day();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00DE]) goto labelFunc0446_003C;
	UI_add_answer("signed");
labelFunc0446_003C:
	if (!(!gflags[0x00C7])) goto labelFunc0446_0052;
	message("This is a lovely, earthy woman with a warm smile.");
	say();
	message("\"Word has spread quickly of thine arrival, Avatar! Welcome!\"");
	say();
	gflags[0x00C7] = true;
	goto labelFunc0446_005C;
labelFunc0446_0052:
	message("\"Hello, ");
	message(var0000);
	message(",\" Miranda says. \"Nice to see thee again.\"");
	say();
labelFunc0446_005C:
	converse attend labelFunc0446_0291;
	case "name" attend labelFunc0446_0072:
	message("\"I am Miranda.\"");
	say();
	UI_remove_answer("name");
labelFunc0446_0072:
	case "job" attend labelFunc0446_008E:
	message("\"I serve on the Great Council. Today we are working on a bill of law. When I am not here in the castle, I am kept busy with a young child.\"");
	say();
	UI_add_answer(["Great Council", "bill", "child"]);
labelFunc0446_008E:
	case "Great Council" attend labelFunc0446_00A8:
	message("\"The Great Council supports Lord British in the legislation of Britannia's laws. I am honored to be one of the three women serving on the Council.\"");
	say();
	UI_add_answer("women");
	UI_remove_answer("Great Council");
labelFunc0446_00A8:
	case "women" attend labelFunc0446_00C2:
	message("\"I am particularly concerned about women's duties and privileges and their available opportunities in the land. Our history has been kind to women in general, but there is still room for improvement.\"");
	say();
	UI_add_answer("improvement");
	UI_remove_answer("women");
labelFunc0446_00C2:
	case "improvement" attend labelFunc0446_00D5:
	message("\"More women could hold public office, for one thing. And I would personally like to be rid of those scantily-clad women in heroic fantasy paintings.\"");
	say();
	UI_remove_answer("improvement");
labelFunc0446_00D5:
	case "child" attend labelFunc0446_0156:
	message("Miranda smiles. \"Yes, my son's name is Max.");
	say();
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc0446_010A;
	message("\"He is probably in the Royal Nursery.");
	say();
	goto labelFunc0446_0147;
labelFunc0446_010A:
	var0002 = Func08F7(0xFFE0);
	if (!var0002) goto labelFunc0446_0143;
	message("\"He's right here! Say hello to the Avatar, Max.\"*");
	say();
	UI_show_npc_face(0xFFE0, 0x0000);
	message("\"Hi. I'm a funny boy!\"*");
	say();
	UI_remove_npc_face(0xFFE0);
	UI_show_npc_face(0xFFBA, 0x0000);
	message("\"He's quite precocious.");
	say();
	goto labelFunc0446_0147;
labelFunc0446_0143:
	message("\"I wonder where he could be...");
	say();
labelFunc0446_0147:
	message("\"He is quite obviously his father's son. Perhaps thou hast met him? Raymundo -- the director of the Royal Theatre. We believe Max will be quite a performer when he's older.\"");
	say();
	gflags[0x0069] = true;
	UI_remove_answer("child");
labelFunc0446_0156:
	case "bill" attend labelFunc0446_0199:
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc0446_018E;
	message("\"Inwisloklem and I are drafting a bill which would make illegal any distribution of waste products in Lock Lake, near Cove. The lake is quite defiled.\"");
	say();
	UI_add_answer("Cove");
	goto labelFunc0446_0192;
labelFunc0446_018E:
	message("\"I would like to speak with thee about the new bill we are drafting. Please come to the Council Chamber during normal working hours and we shall talk.\"");
	say();
labelFunc0446_0192:
	UI_remove_answer("bill");
labelFunc0446_0199:
	case "Cove" attend labelFunc0446_01FF:
	message("\"Art thou travelling to Cove?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0446_01F4;
	message("\"That is good news! Perhaps thou couldst do us a great favor. We need this bill delivered to Lord Heather in Cove. He must read it and give us his approval by signing it. I know thou hast far more important things to do than running errands, but it would be greatly appreciated. Wilt thou do it?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0446_01ED;
	message("\"Wonderful! Here is the bill. Please bring it back to me when it is signed. And we thank thee.\"");
	say();
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x0004, 0xFE99, true);
	if (!var0005) goto labelFunc0446_01E6;
	gflags[0x006A] = true;
	goto labelFunc0446_01EA;
labelFunc0446_01E6:
	message("\"Thine hands are too full to take the bill!\"");
	say();
labelFunc0446_01EA:
	goto labelFunc0446_01F1;
labelFunc0446_01ED:
	message("\"Oh. All right. We know that thou art very busy. We shall find another way to deliver the bill. Thank thee anyway.\"");
	say();
labelFunc0446_01F1:
	goto labelFunc0446_01F8;
labelFunc0446_01F4:
	message("\"Thou wilt not be travelling to Cove at all? Well, all right then. Never mind.\"");
	say();
labelFunc0446_01F8:
	UI_remove_answer("Cove");
labelFunc0446_01FF:
	case "signed" attend labelFunc0446_0283:
	message("\"Didst thou have Lord Heather sign the bill?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0446_0278;
	message("\"Excellent! Let me see it.\"");
	say();
	if (!gflags[0x00DE]) goto labelFunc0446_0271;
	var0007 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0004, 0xFE99);
	if (!var0007) goto labelFunc0446_026A;
	var0005 = UI_remove_party_items(0x0001, 0x031D, 0x0004, 0xFE99, true);
	if (!var0005) goto labelFunc0446_0263;
	message("\"It looks in order! We thank thee, Avatar!\"");
	say();
	Func0911(0x0014);
	goto labelFunc0446_0267;
labelFunc0446_0263:
	message("\"Wait, where is it? Thou dost not have it. I hope thou hast not lost it. Thou shouldst go and find it. 'Tis an important document!\"");
	say();
labelFunc0446_0267:
	goto labelFunc0446_026E;
labelFunc0446_026A:
	message("\"Wait! Where is it? Thou dost not have it. I hope thou hast not lost it. Thou shouldst go and find it. 'Tis an important document!\"");
	say();
labelFunc0446_026E:
	goto labelFunc0446_0275;
labelFunc0446_0271:
	message("\"But thou hast not had the bill signed! Please do so, as soon as possible, if thou wouldst.\"");
	say();
labelFunc0446_0275:
	goto labelFunc0446_027C;
labelFunc0446_0278:
	message("\"Oh. Well, the next time thou art in Cove, perhaps thou wilt find time to see him.\"");
	say();
labelFunc0446_027C:
	UI_remove_answer("signed");
labelFunc0446_0283:
	case "bye" attend labelFunc0446_028E:
	goto labelFunc0446_0291;
labelFunc0446_028E:
	goto labelFunc0446_005C;
labelFunc0446_0291:
	endconv;
	message("\"We shall see thee again soon, I hope, Avatar.\"*");
	say();
labelFunc0446_0296:
	if (!(event == 0x0000)) goto labelFunc0446_02A4;
	Func092E(0xFFBA);
labelFunc0446_02A4:
	return;
}


