#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0821 0x821 ()
{
	var var0000;

	message("\"Rhys Fletcher, a master bowman on an urgent mission for his king, desperately needed to find a hidden mountain pass.\"");
	say();
	message("\"While searching for the pass he came upon three mystics who were standing alongside the trail.\"");
	say();
	message("\"One mystic wore a black sash while the other two had brown sashes.\"");
	say();
	message("\"Rhys knew that some mystics were truth-tellers and some were not.\"");
	say();
	message("\"Rhys thought that if he could figure out if one of the mystics was a truth-teller, he could learn the whereabouts of the hidden pass.\"");
	say();
	message("\"So he rode up to the mystics and asked, 'Art thou truth-tellers?'\"");
	say();
	message("\"The mystic wearing the black sash answered the bowyer by nodding his head up and down. The second mystic, who had only one arm, told Rhys that the mystic with the black sash indicated that he was a truth-teller. However, the other mystic, who was fat, said that the mystic with the black sash was lying.\"");
	say();
	message("\"How many of these mystics were liars?\"");
	say();
	var0000 = UI_input_numeric_value(0x0000, 0x0003, 0x0001, 0x0000);
	if (!(var0000 == 0x0001)) goto labelFunc0821_0064;
	if (!(!gflags[0x0305])) goto labelFunc0821_0059;
	message("\"That is correct!\"");
	say();
	gflags[0x0309] = true;
	Func095D(0x0064);
	gflags[0x0305] = true;
	goto labelFunc0821_0061;
labelFunc0821_0059:
	message("\"That is correct!\"");
	say();
	gflags[0x0309] = true;
labelFunc0821_0061:
	goto labelFunc0821_0068;
labelFunc0821_0064:
	message("\"I'm sorry, but that is not the correct answer.\"");
	say();
labelFunc0821_0068:
	return;
}


