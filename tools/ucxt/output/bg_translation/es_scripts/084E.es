#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern void Func0851 0x851 ();

void Func084E 0x84E ()
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

	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = Func0908();
	message("\"These questions are all hypothetical. Do not let them confuse or upset thee.~~\"Question One: Thou art feeling depressed right now. Is it more likely because -~A: Thou hast disappointed a friend, or~B: A friend has disappointed thee?\"");
	say();
	var0001 = Func090B(["A: I disappointed a friend", "B: Friend has disappointed me"]);
	if (!(var0001 == "A: I disappointed a friend")) goto labelFunc084E_0034;
	message("\"I can tell from thine answer that thou art a person who takes their responsibilities to others very seriously, and perhaps tends to put too much pressure on oneself to please others.\" Batlin smiles and nods.");
	say();
	goto labelFunc084E_0038;
labelFunc084E_0034:
	message("\"I can tell from thine answer thou art a person who tends to trust people and is often willing to give people another chance - even after ample demonstration that they are not worthy of one.\" Batlin smiles and nods.");
	say();
labelFunc084E_0038:
	UI_clear_answers();
	message("\"Question Two: Thou art at a feast hosted by a very high-ranking local official. Thou dost believe the food he has ordered to be served is little more than swill, and thou dost notice that the other guests certainly think so. When thine host asks if thou dost like the food, dost thou~A: tell the truth, or~B: lie to him?\"");
	say();
	var0002 = Func090B(["A: Tell the truth", "B: Lie to him"]);
	if (!(var0002 == "A: Tell the truth")) goto labelFunc084E_0060;
	message("\"Thy response shows thou art a bluntly honest person, who mayest occasionally say things that people may not like hearing, but thine intentions are noble ones.\" Batlin makes a sweeping gesture with his hand.");
	say();
	goto labelFunc084E_0064;
labelFunc084E_0060:
	message("\"Thy response shows thou art a person who is deeply concerned with the feelings of others, a person to whom manners and graciousness are of the highest import.\" Batlin makes a sweeping gesture with his hand.");
	say();
labelFunc084E_0064:
	UI_clear_answers();
	message("\"Question Three: Thou hast taken the last room available at an inn. Upon entering it thou dost find that it is filthy. It is the middle of the night, there is no one to clean it and there is nowhere else to stay. Dost thou~A: clean up the room thyself, at least somewhat, before reposing in it, or~B: dost thou just go to sleep, letting the room remain as thou hast found it?\"");
	say();
	var0003 = Func090B(["A: Clean the room myself", "B: Leave the room as is"]);
	if (!(var0003 == "A: Clean the room myself")) goto labelFunc084E_008C;
	message("\"Thou hast revealed that thou art a person who instinctively believes they are responsible for anything that goes wrong and that it falls to thee to put the whole world right.\" Batlin sighs.");
	say();
	goto labelFunc084E_0090;
labelFunc084E_008C:
	message("\"Thou hast revealed that thou art a person who tends to accept their fate complacently whenever life appears to be unfair. Thou dost naturally assume that life will be unkind as a protection against when it is.\" Batlin sighs.");
	say();
labelFunc084E_0090:
	UI_clear_answers();
	message("\"Question Four: At a festive gathering thou dost tell a humorous anecdote, and thou dost tell it very well, creating much amusement. Didst thou tell this comedic story because~A: thou didst enjoy the response that thou didst receive from thine audience, or~B: because thou didst want to please thy friends?\"");
	say();
	var0004 = Func090B(["A: I enjoyed the response", "B: I wanted to please friends"]);
	if (!(var0004 == "A: I enjoyed the response")) goto labelFunc084E_00B8;
	message("\"Thine answer shows thou art a person who instinctively sees friends as tools to be used for thine own gratification.\" Batlin frowns slightly.");
	say();
	goto labelFunc084E_00BC;
labelFunc084E_00B8:
	message("\"Thine answer shows thou art a person who instinctively feels unworthy of having friends. Thou must continuously buy their attentions by amusing them.\" Batlin frowns slightly.");
	say();
labelFunc084E_00BC:
	UI_clear_answers();
	message("\"Question Five: If thou wert to become a person of leisure, one who had amassed a fantastic fortune of wealth, would it most likely be because~A: thou hadst discovered an infallible method of stealing the money of others, or~B: thou hadst discovered an infallible method of illicitly duplicating the coin of the realm?\"");
	say();
	var0005 = Func090B(["A: I stole the money", "B: I duplicated the coin"]);
	if (!(var0005 == "A: I stole the money")) goto labelFunc084E_00E4;
	message("\"From Question Five we learn that thou art a person who instinctively believes that they are incapable of achieving success, someone who feels that they can only profit through the exploitation of others.\" Batlin slowly shakes his head.");
	say();
	goto labelFunc084E_00E8;
labelFunc084E_00E4:
	message("\"From Question Five we learn that thou art a person who instinctively believes that they are incapable of achieving success, at best only presenting the illusion of success.\" Batlin slowly shakes his head.");
	say();
labelFunc084E_00E8:
	UI_clear_answers();
	message("\"Question Six: While travelling thou dost find a man in terrible pain. His arm has been grievously injured. A healer tending to him tells thee that the man's arm will have to be removed and that he will require thine assistance to do it. The man says he will recover from his injury and asks thee not to let the healer amputate his arm. Dost thou~A: heed the words of the healer, or~B: respect the wishes of the injured man?\"");
	say();
	var0006 = Func090B(["A: Heed the healer", "B: Respect the man"]);
	if (!(var0006 == "A: Heed the healer")) goto labelFunc084E_0110;
	message("\"By thine answer thou art a person who believes in mercy even when it is not an easy thing, and a person who tries to have the courage of thy convictions.\" Batlin gives thee a knowing look.");
	say();
	goto labelFunc084E_0114;
labelFunc084E_0110:
	message("\"By thine answer thou art a person who deeply believes in the value of human life and who has a strong sense of faith in the possibilities that life continuously gives us.\" Batlin gives thee a knowing look.");
	say();
labelFunc084E_0114:
	UI_clear_answers();
	message("\"Question Seven: Thou hast just killed a small dog by throwing a rock at it. Is it more likely that thou hast done this because~A: the dog was going to attack thee, or~B: the dog was going to attack someone else?\"");
	say();
	var0007 = Func090B(["A: It was to attack me", "B: It was to attack another"]);
	if (!(var0007 == "A: It was to attack me")) goto labelFunc084E_013C;
	message("\"This question tells us that thou art an overly defensive person. Thou dost need to stop assuming that the world around thee exists only to bring thee potential harm.\" Batlin strokes his chin thoughtfully.");
	say();
	goto labelFunc084E_0140;
labelFunc084E_013C:
	message("\"This question tells is that thou art an overly aggressive person. Thou dost need to stop trying to solve all of thy problems through violence.\" Batlin strokes his chin thoughtfully.");
	say();
labelFunc084E_0140:
	UI_clear_answers();
	message("\"Question Eight: Thou art in a boat with thy betrothed and thy mother. The boat capsizes. In the choppy waters thou canst only save thyself and one other person. Who dost thou save from drowning,~A: thy betrothed, or~B: thy mother?\"");
	say();
	var0008 = Func090B(["A: My betrothed", "B: My mother"]);
	if (!(var0008 == "A: My betrothed")) goto labelFunc084E_0168;
	message("\"While risking thy life to save the life of thy betrothed is admirable, I cannot help but wonder what suppressed hostility thou dost have towards thy mother as thou wouldst simply let her drown.\" Batlin shrugs.");
	say();
	goto labelFunc084E_016C;
labelFunc084E_0168:
	message("\"While risking thy life to save the life of thy mother is admirable, I cannot help but wonder if thou mightest have a problem getting along with the opposite gender as thou wouldst simply let thy betrothed drown.\" Batlin shrugs.");
	say();
labelFunc084E_016C:
	UI_clear_answers();
	message("\"Thou art a person of strong character, Avatar, but one who is troubled by deep personal problems that prevent thee from achieving thy true potential for greatness. In short, thou art precisely the type of person for which The Fellowship was created.");
	say();
	message("\"I welcome thee to our fold. Know that the path of the Triad is not an easy one but its rewards are bountiful. I will, of course, waive the usual sabbatical of study that is required before one achieves membership. Thou art, after all, the Avatar.");
	say();
	message("\"However, as one of our tenets prescribes, Worthiness Precedes Reward. Thou must embark on a task or two for The Fellowship before thou can be properly inducted and receive thy medallion.\"");
	say();
	gflags[0x0096] = true;
	Func0851();
	return;
}


