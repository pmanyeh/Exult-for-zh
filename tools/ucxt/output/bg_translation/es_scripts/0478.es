#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func0478 object#(0x478) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0478_0278;
	UI_show_npc_face(0xFF88, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0217]) goto labelFunc0478_003C;
	UI_add_answer("Elizabeth and Abraham");
labelFunc0478_003C:
	if (!gflags[0x0170]) goto labelFunc0478_0049;
	UI_add_answer("Sprellic");
labelFunc0478_0049:
	if (!(!gflags[0x0172])) goto labelFunc0478_005B;
	message("You see a man who exudes the outward mannerisms of a shrewd administrator, in contrast to his youthful appearance.");
	say();
	gflags[0x0172] = true;
	goto labelFunc0478_005F;
labelFunc0478_005B:
	message("Joseph nods his head respectfully to you. \"How may I assist thee?\"");
	say();
labelFunc0478_005F:
	converse attend labelFunc0478_0273;
	case "name" attend labelFunc0478_0075:
	message("\"My name is Joseph.\"");
	say();
	UI_remove_answer("name");
labelFunc0478_0075:
	case "job" attend labelFunc0478_008E:
	message("\"Presently, I am the mayor of Jhelom.\"");
	say();
	UI_add_answer(["mayor", "Jhelom"]);
labelFunc0478_008E:
	case "mayor" attend labelFunc0478_00A1:
	message("\"I may seem a bit young for the job, but in a town such as this I am called upon to help keep order as often as administrate. I use my sword and pen in equal measure.\"");
	say();
	UI_remove_answer("mayor");
labelFunc0478_00A1:
	case "Jhelom" attend labelFunc0478_00BB:
	message("\"This town is a rough place. A fine place for fighting men and women to live. Perhaps thou hast seen our local sport?\"");
	say();
	UI_remove_answer("Jhelom");
	UI_add_answer("sport");
labelFunc0478_00BB:
	case "sport" attend labelFunc0478_00DB:
	message("\"Why, 'tis duelling! At twelve noon every day, the town square becomes a battlefield.\"");
	say();
	UI_add_answer(["duelling", "battlefield"]);
	UI_remove_answer("sport");
labelFunc0478_00DB:
	case "duelling" attend labelFunc0478_00EE:
	message("\"Well, the sound is worse than the act. 'Tis actually just a form of training and exercise. The fighters practice with targets and such. That is where I can be found, keeping mine own skills sharp.\"");
	say();
	UI_remove_answer("duelling");
labelFunc0478_00EE:
	case "battlefield" attend labelFunc0478_010E:
	message("\"I am exaggerating. Many of the fighters in town gather to spar with the training dummies and practice various methods of combat. There are a few harmless matches at times. Some are a bit rough every now and then. Some folks take wagers on it and turn a profit.\"");
	say();
	UI_remove_answer("battlefield");
	UI_add_answer(["spar", "take wagers"]);
labelFunc0478_010E:
	case "spar" attend labelFunc0478_0121:
	message("\"Ahem... Of course most duels are simply to the blood, not to the death. It is a practice that helps restrain the passing knaves and rogues.\"");
	say();
	UI_remove_answer("spar");
labelFunc0478_0121:
	case "take wagers" attend labelFunc0478_0134:
	message("\"Speak to Daphne or Ophelia at the Bunk and Stool, our town pub and inn.\"");
	say();
	UI_remove_answer("take wagers");
labelFunc0478_0134:
	case "Fellowship" attend labelFunc0478_0154:
	message("\"That is what many of the duels are fought over! Some say The Fellowship is a load of rot, some say it is the only truth. Others say it is foolishness. Of course, as Mayor I remain neutral on such matters.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer(["truth", "foolishness"]);
labelFunc0478_0154:
	case "Elizabeth and Abraham" attend labelFunc0478_0180:
	if (!(!gflags[0x0088])) goto labelFunc0478_016E;
	message("\"Elizabeth and Abraham?\" Joseph scratches his head. \"Oh, yes! They were the Fellowship members who were just here! They were trying to start a branch in Jhelom. I am undecided on what to tell them. We will probably have a town meeting to decide if there should be a branch here. The couple said they were returning to Britain for a few days.\"");
	say();
	gflags[0x016B] = true;
	goto labelFunc0478_0172;
labelFunc0478_016E:
	message("\"Elizabeth and Abraham?\" Joseph scratches his head. \"Oh, yes! They were the Fellowship members who were here -- why, it must have been last week or so. I have not seen them since.\"");
	say();
labelFunc0478_0172:
	UI_add_answer("Fellowship");
	UI_remove_answer("Elizabeth and Abraham");
labelFunc0478_0180:
	case "truth" attend labelFunc0478_01A0:
	message("\"De Snel, the leader of the Library of Scars, requires that his members fight in many duels. One week they will fight for one cause and the next week for the opposite side.\"");
	say();
	UI_remove_answer("truth");
	UI_add_answer(["De Snel", "Library of Scars"]);
labelFunc0478_01A0:
	case "foolishness" attend labelFunc0478_01C6:
	if (!var0001) goto labelFunc0478_01BB;
	message("Joseph looks a little embarrassed. \"I meant no insult to thee as a member of The Fellowship, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0478_01BF;
labelFunc0478_01BB:
	message("\"If thou must know mine opinion,\" he says to you in quiet confidence, \"I agree with those that say The Fellowship is a bunch of foolishness.\"");
	say();
labelFunc0478_01BF:
	UI_remove_answer("foolishness");
labelFunc0478_01C6:
	case "De Snel" attend labelFunc0478_01D9:
	message("\"De Snel says he only wishes the best for his school. If his fighters are ever beaten he throws them out and recruits the winner to join the Library of Scars.\"");
	say();
	UI_remove_answer("De Snel");
labelFunc0478_01D9:
	case "Library of Scars" attend labelFunc0478_01EC:
	message("\"It attracts fighters from all over Britannia who want to learn from De Snel. They are an unruly bunch. Thou wouldst do best to stay clear of them.\"");
	say();
	UI_remove_answer("Library of Scars");
labelFunc0478_01EC:
	case "Sprellic" attend labelFunc0478_020C:
	message("\"Yes, I have heard of the events surrounding this fellow Sprellic and the duels against the Library of Scars, but frankly, mine official policy has been to not get involved in these sort of personal disputes.\"");
	say();
	UI_remove_answer("Sprellic");
	UI_add_answer(["get involved", "personal dispute"]);
labelFunc0478_020C:
	case "get involved" attend labelFunc0478_022C:
	message("\"De Snel and I have an understanding. He works his side of the street and I work mine. It is hard enough to maintain order in this town without jeopardizing that. If I intervene De Snel will challenge me to a duel and if I am killed then his control of our town would be absolute.\"");
	say();
	UI_remove_answer("get involved");
	UI_add_answer(["challenge", "understanding"]);
labelFunc0478_022C:
	case "personal dispute" attend labelFunc0478_023F:
	message("\"As Mayor and the peacekeeper I have to pick and choose my fights very carefully. There is no love lost between myself and the members of the Library of Scars, but they can legitimately claim that they have been wronged. I am required to remain impartial in this matter. As far as I can see, Sprellic brought this on himself when he took the honor flag. If thou dost wish to stop the duel, thou dost need only convince him to give it back.\"");
	say();
	UI_remove_answer("personal dispute");
labelFunc0478_023F:
	case "understanding" attend labelFunc0478_0252:
	message("\"Believe me, we are not in each other's company so often because we are friends. We do so to maintain a careful watch on each other. Keep thy friends close, but keep thine enemies closer. Words to live by in Jhelom.\"");
	say();
	UI_remove_answer("understanding");
labelFunc0478_0252:
	case "challenge" attend labelFunc0478_0265:
	message("\"When I say that De Snel would challenge me to a duel I do not mean to insinuate that it would in any way be a fair or honorable contest-- more like a dagger in the back from one of his bullies as I was walking down a dark alley somewhere. That it would be a duel is just the story he would tell to make mine assassination somehow honorable.\"");
	say();
	UI_remove_answer("challenge");
labelFunc0478_0265:
	case "bye" attend labelFunc0478_0270:
	goto labelFunc0478_0273;
labelFunc0478_0270:
	goto labelFunc0478_005F;
labelFunc0478_0273:
	endconv;
	message("\"Enjoy thy stay in my city. But if thou hast no stomach for fighting thou shouldst not stay long.\"*");
	say();
labelFunc0478_0278:
	if (!(event == 0x0000)) goto labelFunc0478_0286;
	Func092E(0xFF88);
labelFunc0478_0286:
	return;
}


