#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0870 0x870 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func0423 object#(0x423) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0423_01DF;
	UI_show_npc_face(0xFFDD, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFDD));
	UI_add_answer(["name", "job", "services", "bye"]);
	if (!(!gflags[0x00A4])) goto labelFunc0423_0049;
	message("You see a healer who looks wise and honest.");
	say();
	message("\"I have been looking forward to thine arrival, Avatar. Word spreads quickly. I am pleased to meet thee!\"");
	say();
	gflags[0x00A4] = true;
	goto labelFunc0423_004D;
labelFunc0423_0049:
	message("\"Hello again, Avatar!\" Csil says with a smile.");
	say();
labelFunc0423_004D:
	converse attend labelFunc0423_01DA;
	case "name" attend labelFunc0423_006A:
	message("\"I am Csil the Healer, although in a past life I was known as Abrams. I became Csil when I was advanced.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("advanced");
labelFunc0423_006A:
	case "job" attend labelFunc0423_0076:
	message("\"I am Britain's healer, and have been for many years. If thou wishest to employ my services, please say so. I shall be only too happy to help.\"");
	say();
labelFunc0423_0076:
	case "advanced" attend labelFunc0423_0096:
	message("\"When my name was Abrams, I lived on the island of New Magincia and did mine apprentice work there. My practice grew, and soon I was travelling by ship to Moonglow to see patients there.\"");
	say();
	UI_remove_answer("advanced");
	UI_add_answer(["patients", "practice"]);
labelFunc0423_0096:
	case "patients" attend labelFunc0423_00B0:
	message("\"Soon I had patients on three islands. It was then that Lord British received word of my practice.\"");
	say();
	UI_remove_answer("patients");
	UI_add_answer("Lord British");
labelFunc0423_00B0:
	case "practice" attend labelFunc0423_012A:
	message("\"My practice grew swiftly. I am a modest man, but I do not mind saying that I was a popular healer.\"");
	say();
	UI_remove_answer("practice");
	var0001 = Func08F7(0xFFFD);
	if (!var0001) goto labelFunc0423_012A;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"He is probably the best healer in all Britannia. Why, he cured a, er, particular problem I had in no time at all.\"*");
	say();
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0423_0119;
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Oh? What problem was that?\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Never mind. The whole world does not need to know about it.\"*");
	say();
labelFunc0423_0119:
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFDD, 0x0000);
labelFunc0423_012A:
	case "Lord British" attend labelFunc0423_014A:
	message("\"Well, Lord British himself was struck down with some sort of malady. He sent for me. I arrived at the castle as soon as I could leave my patients, and I examined the king. It appeared to me that something had infested his blood. I have a theory about it, which I am convinced is correct. Others, however, do not share my view.\"");
	say();
	UI_remove_answer("Lord British");
	UI_add_answer(["theory", "others"]);
labelFunc0423_014A:
	case "theory" attend labelFunc0423_0174:
	message("\"I believe that most sicknesses are caused by tiny living things. We cannot see these things with the naked eye. However, I am working on developing an instrument which -can- see these creatures. I believe that someday, healing will not depend on magic at all, but on some form of treatment which makes one less vulnerable to these living creatures. Since these animals are biological, I call this theorized treatment 'antibiotics'. What dost thou think, Avatar? Am I on the right track?\"");
	say();
	UI_remove_answer("theory");
	var0003 = Func090A();
	if (!var0003) goto labelFunc0423_0170;
	message("\"Good. I thought so.\"");
	say();
	goto labelFunc0423_0174;
labelFunc0423_0170:
	message("\"No? Hmmm.\" Csil looks concerned. \"Well, I cannot believe in the archaic tradition of bleeding a person until the sickness has left his body. There must be another way...\"~~Csil looks at his notes, worried that his theory is invalid.");
	say();
labelFunc0423_0174:
	case "others" attend labelFunc0423_01A5:
	message("\"There is a group of people who do not encourage my studies. We do not get along at all. I think they have something against healers which goes beyond simple distrust. Dost thou know whom I mean?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0423_0193;
	message("Csil nods. \"I thought so. The Fellowship is not... quite what they seem.\"");
	say();
	goto labelFunc0423_0197;
labelFunc0423_0193:
	message("\"No?\" Csil lowers his voice. \"The Fellowship.\"");
	say();
labelFunc0423_0197:
	UI_remove_answer("others");
	UI_add_answer("Fellowship");
labelFunc0423_01A5:
	case "Fellowship" attend labelFunc0423_01B8:
	message("\"They have a doctrine which outlines their beliefs. They believe if one is faced with pain, then he has no choice but to go through it in order to be a 'better person'. I do not agree with this. No one should ever go through needless pain. But... they are entitled to their own opinions.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0423_01B8:
	case "services" attend labelFunc0423_01CC:
	Func0870(0x0028, 0x001E, 0x01C2);
labelFunc0423_01CC:
	case "bye" attend labelFunc0423_01D7:
	goto labelFunc0423_01DA;
labelFunc0423_01D7:
	goto labelFunc0423_004D;
labelFunc0423_01DA:
	endconv;
	message("\"Goodbye, Avatar.\"*");
	say();
labelFunc0423_01DF:
	if (!(event == 0x0000)) goto labelFunc0423_01ED;
	Func092E(0xFFDD);
labelFunc0423_01ED:
	return;
}


