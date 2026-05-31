#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func04F3 object#(0x4F3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0000)) goto labelFunc04F3_0009;
	abort;
labelFunc04F3_0009:
	UI_show_npc_face(0xFF0D, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF11);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func08F7(0xFFFC);
	if (!(!gflags[0x02BD])) goto labelFunc04F3_004F;
	message("You see before you a short, roly-poly man with a pompous smirk on his face. He is holding a lantern in one hand and a dirty spoon in the other.");
	say();
	gflags[0x02BD] = true;
	goto labelFunc04F3_0053;
labelFunc04F3_004F:
	message("\"Hello, good friend,\" says Malloy. \"A pleasure to see thee again.\"");
	say();
labelFunc04F3_0053:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02D9]) goto labelFunc04F3_0070;
	UI_add_answer("helmet on foot");
labelFunc04F3_0070:
	converse attend labelFunc04F3_02C3;
	case "name" attend labelFunc04F3_00CF:
	if (!(!gflags[0x02DA])) goto labelFunc04F3_00C4;
	message("\"My name is Malloy. Pleased to make thine acquaintance.\" Malloy bows politely.");
	say();
	if (!var0001) goto labelFunc04F3_00C1;
	if (!(!gflags[0x02BC])) goto labelFunc04F3_009A;
	message("Malloy's face carries an exasperated smirk. \"My partner over there is Owings,\" he says, pointing to Owings, the skinny man digging away next to him. \"Where are thy manners?! Say hello to our visitor!\"");
	say();
	goto labelFunc04F3_009E;
labelFunc04F3_009A:
	message("\"Thou dost already know my partner over there,\" he says, pointing to Owings.");
	say();
labelFunc04F3_009E:
	UI_show_npc_face(0xFF11, 0x0000);
	message("\"Hello there!\" says Owings, giving you a big smile. The front of his mining helmet falls down over his eyes. Blinded, he gropes the air around him.*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy shakes his head sadly.*");
	say();
labelFunc04F3_00C1:
	goto labelFunc04F3_00C8;
labelFunc04F3_00C4:
	message("Malloy regains his composure. \"Hello there, I am Malloy. I do apologize for my partner's childish antics.\"");
	say();
labelFunc04F3_00C8:
	UI_remove_answer("name");
labelFunc04F3_00CF:
	case "job" attend labelFunc04F3_0122:
	if (!(!var0001)) goto labelFunc04F3_00E5;
	message("\"Normally my job is to dig, but as my partner Owings seems to be missing I suppose my job is to look for him. I hope nothing has happened to the little fellow.\"");
	say();
	goto labelFunc04F3_0115;
labelFunc04F3_00E5:
	message("\"Owings and myself are working as mining engineers, a position we were fortunate enough to have acquired quite recently. We are working on a special project for the Britannian Mining Company.\"*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	if (!gflags[0x02DA]) goto labelFunc04F3_0100;
	message("Owings gives a big nod, throwing his head back and snapping it straight down. \"That is absolutely right, Malloy.\"*");
	say();
	goto labelFunc04F3_0104;
labelFunc04F3_0100:
	message("\"That is absolutely right, Malloy,\" says Owings. He gives a big nod which causes his helmet to fall down over his eyes.*");
	say();
labelFunc04F3_0104:
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
labelFunc04F3_0115:
	UI_add_answer(["mining engineers", "special project"]);
labelFunc04F3_0122:
	case "mining engineers" attend labelFunc04F3_0188:
	message("\"My partner and I are not exactly mining engineers, although we did travel to Minoc to become miners. We came here with a map...\"*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("\"It was the map that the funny man dressed like the Avatar sold us!\"*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("\"That is correct. But when we got here we discovered that the Britannian Mining Company owned the rights to this area of land already!\"*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("\"That funny man dressed like the Avatar lied to us.\" Owings scratches his head thoughtfully. \"The Britannian Mining Company wanted to throw us in the prisons of Yew for claim jumping!\"*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("\"I was able to convince them that we would be more valuable to the Britannian Mining Company if we could come to work for them.\" Malloy beams proudly.*");
	say();
	UI_remove_answer("mining engineers");
	UI_add_answer(["map", "funny man"]);
labelFunc04F3_0188:
	case "map" attend labelFunc04F3_019B:
	message("\"We paid nearly a hundred gold pieces for that map. It was supposed to lead to a spot of valuable minerals found over a hundred years ago. It was a terrific investment. The map was an antique, but it looked like it could not have been more than a few years old! Thou dost not see preservation like that every day!\"");
	say();
	UI_remove_answer("map");
labelFunc04F3_019B:
	case "funny man" attend labelFunc04F3_01AE:
	message("\"Someone told us his name. Let me see if I can remember it... Sullivan, I think it was. Funny name for an Avatar, but there thou art!\"");
	say();
	UI_remove_answer("funny man");
labelFunc04F3_01AE:
	case "special project" attend labelFunc04F3_0228:
	message("\"Owings and myself are now involved in a very important special project, but it is a secret. Can we trust thee?\"");
	say();
	var0005 = Func090A();
	if (!(!var0005)) goto labelFunc04F3_01ED;
	message("\"In that case I thank thee for thine honesty. I do not really mind if a person is untrustworthy. But someone who is untrustworthy and dishonest about it, that is something that I cannot abide.\"*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("You see Owings nod his head most enthusiastically. A second later he has a very confused expression on his face.*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	goto labelFunc04F3_0228;
labelFunc04F3_01ED:
	message("\"The Britannian Mining Company has asked us to dig a tunnel to New Magincia! It will revolutionize the mining industry.\"");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("\"They do not want anybody to find out about it. They said that bringing more mining equipment over here would just make people suspicious, so they told us to start by using these spoons!\" Owings proudly holds up his spoon to show it to you. He smiles.");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("\"Yes, it was such a special project they told us we were the only ones they could think of who would even attempt to do such a thing!\" Malloy beams proudly. \"Well come on, Owings, we had best get back to work. We have a schedule to meet.\"");
	say();
	UI_remove_answer("special project");
	UI_add_answer(["tunnel", "schedule"]);
labelFunc04F3_0228:
	case "tunnel" attend labelFunc04F3_023B:
	message("Malloy looks at you and puts a finger to his lips. \"Shhhhhhhh!!! I asked thee not to speak of this to anyone!\"");
	say();
	UI_remove_answer("tunnel");
labelFunc04F3_023B:
	case "schedule" attend labelFunc04F3_0271:
	message("\"Owings, have a look at that schedule and find out how we are doing.\"");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings bends over and goes to pick up a very large scroll. As he touches the tip of it he sends it rolling away down the mineshaft. As it rolls away it is unravelling leaving a lengthy trail of paper behind it. Owings chases after it but succeeds in doing little else but tangling up his legs in the long roll of the paper. When at last he has the other end, it is an unreadable mess.");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("\"Give me that!\" says Malloy as he snatches a piece of the scroll away. He examines it for a moment. \"According to this we shall be finished in... one hundred and seventy three years! Owings, we have got to start working faster!\" The two of them go back to digging with their spoons. As they dig Malloy turns to Owings and says, \"This is another fine mess thou hast gotten me into!\"");
	say();
	UI_remove_answer("schedule");
labelFunc04F3_0271:
	case "helmet on foot" attend labelFunc04F3_02B5:
	message("Malloy kicks out with his foot, trying to dislodge the helmet which is stuck there. He looks at Owings and pouts, \"Why dost thou not do something to help me?!\"");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings grabs the helmet on Malloy's foot and attempts to dislodge it. After several fierce tugs it comes off with a loud popping noise. Owings pulls the helmet right into his own face and this makes a loud knocking noise.");
	say();
	UI_play_sound_effect(0x0053);
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy goes hurling backwards, crying out in panic. He smacks the back of his head on the rock wall behind him. He takes off his crumpled helmet and points to it. \"A good thing I was wearing this or I might have been hurt!\" With that a loose rock tumbles down from the ceiling landing squarely on his head. Malloy says \"Ooooooh!\" Owings breaks into a giggling fit. Malloy flashes you an incredulous pouting grimace.");
	say();
	UI_play_sound_effect(0x000F);
	UI_remove_answer("helmet on foot");
labelFunc04F3_02B5:
	case "bye" attend labelFunc04F3_02C0:
	goto labelFunc04F3_02C3;
labelFunc04F3_02C0:
	goto labelFunc04F3_0070;
labelFunc04F3_02C3:
	endconv;
	if (!var0001) goto labelFunc04F3_02D1;
	message("Both Malloy and Owings stop what they are doing and give you a friendly goodbye wave.*");
	say();
	goto labelFunc04F3_02DB;
labelFunc04F3_02D1:
	message("\"Good day to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04F3_02DB:
	return;
}


