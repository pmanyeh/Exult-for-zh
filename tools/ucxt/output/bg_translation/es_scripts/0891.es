#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func0891 0x891 ()
{
	gflags[0x0322] = true;
	message("\"'Tis as I suspected. Bollux thought he must sacrifice his own heart to return my life.\"~If you were to believe it possible, you would feel positive you had just seen a drop of water fall from the golem's right eye.~\"The poor fool gave his life for mine. I can only hope I would have done the same.~\"Doing so now, however, would help nothing, for once I was gone Bollux would simply repeat his act.\" You hear a sigh come from the golem.");
	say();
	UI_remove_npc_face(0xFEE0);
	Func08FF("I don't mean to be irreverent, but did the matter not involve death, 'twould be a humorous sight: the two golems popping up and down as each one passed the `heart' to the other...@");
	UI_show_npc_face(0xFEE0, 0x0000);
	message("\"However,\" smiles Adjhar, \"'tis not necessary, for had Bollux known what is covered by this smudge, he could have told thee that a new heart may be cut from the Tree of Life. Look here,\" he says, pointing to a line in the tome smeared with dried mud. \"I remember this from before. Thou canst take the very same pick with which thou didst collect the blood and procure a `heart' for Bollux. Of course, after thou dost place the heart upon Bollux's body, thou must again perform the same ritual of blood.\"");
	say();
	gflags[0x0321] = true;
	return;
}


